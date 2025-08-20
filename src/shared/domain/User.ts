import { Organization } from './Organization'
import { UserRightForSolution } from './UserRightForSolution'

export class User {
  id?: number

  active?: boolean
  admin?: boolean
  creationDate?: Date
  email?: string
  firstName?: string
  lastName?: string
  passwordHash?: string
  passwordResetToken?: string
  passwordResetTokenCreationDate?: Date
  registerToken?: string
  registerTokenCreationDate?: Date
  salt?: string
  token?: string | null

  userRightForSolutions?: UserRightForSolution[]
  organizationId?: number

  organization?: Organization

  constructor(data?: Partial<User>) {
    Object.assign(this, data)
  }

  get fullName(): string {
    return this.firstName + ' ' + this.lastName
  }
}
