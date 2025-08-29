import { User } from '../organization/User'

export abstract class Right {
  id?: number

  admin?: boolean
  developer?: boolean
  maintainer?: boolean
  reporter?: boolean

  userId?: number
  user?: User
}
