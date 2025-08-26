import { User } from './organization/User'
import { UserGroup } from './organization/UserGroup'

export class Right {
  id?: number
  
  view?: boolean
  change?: boolean
  admin?: boolean
  owner?: boolean

  userId?: number | null
  userGroupId?: number | null

  user?: User | null
  userGroup?: UserGroup | null
}
