/**
 * @typedef { import ('@azure/msal-browser').AccountInfo } AccountInfo
 */
import { writable } from 'svelte/store'

export const isAuthenticated = writable(false)

const defaultUser = {
  homeAccountId: '',
  idTokenClaims: {},
  name: '',
  environment: '',
  tenantId: '',
  username: '',
  localAccountId: ''
}

/**
 * @type { import('svelte/store').Writable<AccountInfo> }
 */
export const user = writable(defaultUser)

export const addUser = (/** @type {AccountInfo} */ account) => {
  user.set(account)
  isAuthenticated.set(true)
}

export const removeUser = () => {
  user.set(defaultUser)
  isAuthenticated.set(false)
}

export const error = writable()
