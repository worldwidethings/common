import { Solution } from './Solution'
import { User } from './User'

export class UserRightForSolution {
  id?: number
  description?: string
  creationDate?: Date

  userId?: number
  solutionId?: number

  user?: User
  solution?: Solution

  read?: boolean
  write?: boolean
  admin?: boolean

  constructor(data?: Partial<UserRightForSolution>) {
    Object.assign(this, data)
  }
}
