import { ComponentPartOfSolution } from './ComponentPartOfSolution'
import { Organization } from './Organization'
import { UserRightForSolution } from './UserRightForSolution'

export class Solution {
  id?: number

  name?: string
  description?: string
  color?: string
  creationDate?: Date

  organizationId?: number

  organization?: Organization
  componentPartOfSolutions?: ComponentPartOfSolution[]
  userRightForSolutions?: UserRightForSolution[]

  constructor(data?: Partial<Solution>) {
    Object.assign(this, data)
  }
}
