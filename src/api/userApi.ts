import { Result } from 'coderitter-api-rmc'
import { User } from '../'

export interface UserSetPasswordParameters {
  userId: number
  password: string
}

export interface UserLoginParameters {
  email: string
  password: string
}

export class UserLoginResult extends Result {
  user: User

  constructor(user?: User) {
    super()
    this.user = user as any
  }
}

export interface UserCheckTokenParameters {
  token: string
}

export class UserCheckTokenResult extends Result {
  valid: boolean
  user: User

  constructor(valid?: boolean, user?: User) {
    super()
    this.valid = valid as any
    this.user = user as any
  }
}

export interface UserRegisterParameters {
  password: string
  confirmationPassword: string
  user: Partial<User>
}

export interface UserVerifyMailParameters {
  registerToken: string
  userId: number
}

export interface UserSendPasswordResetMailParameters {
  userId: number
  email: string
}

export interface UserResetPasswordParameters {
  userId: number
  passwordResetToken: string
  password: string
}
