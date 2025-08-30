import { Entity } from '../Entity'
import { User } from '../organization/User'

export abstract class Right extends Entity {
  admin?: boolean
  developer?: boolean
  maintainer?: boolean
  reporter?: boolean

  userId?: number
  user?: User
}
