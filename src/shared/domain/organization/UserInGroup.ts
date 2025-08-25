import { User } from './User'
import { UserGroup } from './UserGroup'

export class UserInGroup {
  id?: number

  userId?: number
  userGroupId?: number

  user?: User
  userGroup?: UserGroup

  constructor(data?: Partial<UserInGroup>) {
    Object.assign(this, data)
  }
}
