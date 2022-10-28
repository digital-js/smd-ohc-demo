/**
 * @typedef { import ('@azure/msal-browser').AccountInfo } AccountInfo
 */
import { writable, derived } from 'svelte/store'

/**
 * @type { import('svelte/store').Writable<AccountInfo> }
 */
export const user = writable({
  homeAccountId: '',
  idTokenClaims: {},
  name: '',
  environment: '',
  tenantId: '',
  username: '',
  localAccountId: ''
})

export const isAuthenticated = derived(user, ($user) => {
  return $user.homeAccountId !== ''
})

export const error = writable()
