import { User } from '../organization/User'

export class UserRight {
  id?: number

  admin?: boolean

  userId?: number
  userAdministeredId?: number

  user?: User
  userAdministered?: User

  constructor(userRight?: Partial<UserRight>) {
    Object.assign(this, userRight)
  }
}
