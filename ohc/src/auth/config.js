import { LogLevel, PublicClientApplication } from '@azure/msal-browser'
import { b2cPolicies } from './policies'

// Config object to be passed to Msal on creation
export const msalConfig = {
  auth: {
    clientId: '0783af2c-46a7-4e4c-b62d-59fe74e83ad9',
    authority: b2cPolicies.authorities.signUpSignIn.authority,
    knownAuthorities: [b2cPolicies.authorityDomain],
    redirectUri: 'http://localhost:5173/'
  },
  cache: {
    cacheLocation: 'sessionStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: false // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      /**
       * @param {LogLevel} level j
       * @param {string} message
       * @param {boolean} containsPii
       * @returns {void}
       */
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message)
            return
          case LogLevel.Info:
            console.info(message)
            return
          case LogLevel.Verbose:
            console.debug(message)
            return
          case LogLevel.Warning:
            console.warn(message)
            return
        }
      }
    }
  }
}

export const msalInstance = new PublicClientApplication(msalConfig)

export const loginRequest = {
  scopes: ['openid', msalConfig.auth.clientId]
}
