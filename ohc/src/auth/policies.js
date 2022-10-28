const tenantName = 'digitaljsb2c'

const policyNames = {
  signUpSignIn: 'B2C_1_SignIn_Up',
  ResetPassword: 'B2C_1_ResetPassword',
  editProfile: 'B2C_1_EditProfile'
}

export const b2cPolicies = {
  names: {
    signUpSignIn: policyNames.signUpSignIn,
    ResetPassword: policyNames.ResetPassword,
    editProfile: policyNames.editProfile
  },
  authorities: {
    signUpSignIn: {
      authority: `https://${tenantName}.b2clogin.com/${tenantName}.onmicrosoft.com/${policyNames.signUpSignIn}`
    },
    resetPassword: {
      authority: `https://${tenantName}.b2clogin.com/${tenantName}.onmicrosoft.com/${policyNames.ResetPassword}`
    },
    editProfile: {
      authority: `https://${tenantName}.b2clogin.com/${tenantName}.onmicrosoft.com/${policyNames.editProfile}`
    }
  },
  authorityDomain: `${tenantName}.b2clogin.com`
}
