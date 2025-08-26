import { Organization } from '../organization/Organization'
import { ComponentPartOfSolution } from './ComponentPartOfSolution'
import { SolutionRight } from './rights/SolutionRight'

export class Solution {
  id?: number

  color?: string
  creationDate?: Date
  description?: string
  name?: string

  organizationId?: number

  componentPartOfSolutions?: ComponentPartOfSolution[]
  organization?: Organization
  rights?: SolutionRight[]

  constructor(data?: Partial<Solution>) {
    Object.assign(this, data)
  }
}
