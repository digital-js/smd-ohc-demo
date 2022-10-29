import { msalConfig } from '../auth/config'
import { b2cPolicies } from '../auth/policies'
import { PublicClientApplication, EventType } from '@azure/msal-browser'
import { addUser, removeUser, isAuthenticated, username } from './user'

const msalInstance = new PublicClientApplication(msalConfig)

msalInstance.enableAccountStorageEvents()

msalInstance.addEventCallback((message) => {
  console.log(message)
  switch (message.eventType) {
    case EventType.LOGIN_SUCCESS:
    case EventType.ACQUIRE_TOKEN_SUCCESS:
      // @ts-ignore
      addUser(message.payload.account)
      return
    case EventType.ACCOUNT_ADDED:
      // @ts-ignore
      addUser(message.payload)
      return
    case EventType.LOGOUT_SUCCESS:
    case EventType.ACCOUNT_REMOVED:
      removeUser()
      return
  }
})

msalInstance
  .handleRedirectPromise()
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })

const selectAccount = () => {
  const currentAccounts = msalInstance.getAllAccounts()

  if (currentAccounts.length === 0) {
    return
  } else if (currentAccounts.length > 1) {
    // @ts-ignore
    const accounts = currentAccounts.filter(
      (account) =>
        account.homeAccountId
          .toUpperCase()
          .includes(b2cPolicies.names.signUpSignIn.toUpperCase()) &&
        // @ts-ignore
        account.idTokenClaims.iss
          .toUpperCase()
          .includes(b2cPolicies.authorityDomain.toUpperCase()) &&
        // @ts-ignore
        account.idTokenClaims.aud === msalConfig.auth.clientId
    )

    if (accounts.length > 1) {
      if (accounts.every((account) => account.localAccountId === accounts[0].localAccountId)) {
        addUser(accounts[0])
      } else {
        logout()
      }
    } else if (accounts.length === 1) {
      addUser(accounts[0])
    }
  } else if (currentAccounts.length === 1) {
    addUser(currentAccounts[0])
  }
}

selectAccount()

const login = async () => {
  await msalInstance.loginRedirect()

  const accounts = msalInstance.getAllAccounts()

  if (accounts.length === 0) {
    console.log('no accounts')
  } else {
  }
}

const logout = async () => {
  await msalInstance.logoutRedirect()
}

export const getToken = async () => {
  if (!isAuthenticated) return

  const accounts = msalInstance.getAllAccounts()

  if (accounts.length === 0) {
    throw new Error('No accounts')
  }

  const request = {
    account: accounts[0],
    scopes: ['openid', 'profile', 'api://0783af2c-46a7-4e4c-b62d-59fe74e83ad9/access_as_user']
  }

  const response = await msalInstance.acquireTokenSilent(request)

  return response.accessToken
}

const editProfile = async () => {
  const request = b2cPolicies.authorities.editProfile
  request.loginHint = username
  // @ts-ignore
  msalInstance.loginRedirect(request)
}

const auth = {
  login,
  logout,
  getToken,
  editProfile
}

export default auth
