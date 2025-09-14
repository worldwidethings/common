import { Result } from 'coderitter-api-rmc'
import { User } from '../entity/organization/User'

export interface UserRegisterParameters {
  email?: string
  firstName?: string
  lastName?: string
  password: string
}

export class UserRegisterResult extends Result {
  user: User

  constructor(user?: User) {
    super()
    this.user = user as any
  }
}

export interface UserVerifyMailParameters {
  registerToken: string
}

export interface UserLoginParameters {
  email: string
  password: string
}

export class UserLoginResult extends Result {
  token: string
  user: User

  constructor(token?: string, user?: User) {
    super()
    this.token = token as any
    this.user = user as any
  }
}
export interface UserCheckTokenParameters {
  token: string
}

export class UserCheckTokenResult extends Result {
  user: User

  constructor(user?: User) {
    super()
    this.user = user as any
  }
}

export interface UserSetPasswordParameters {
  oldPassword: string
  newPassword: string
}

export interface UserSendPasswordResetMailParameters {
  email: string
}

export interface UserResetPasswordParameters {
  passwordResetToken: string
  newPassword: string
}
