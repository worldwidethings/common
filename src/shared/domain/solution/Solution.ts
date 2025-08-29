import { Organization } from '../organization/Organization'
import { SolutionRight } from '../right/SolutionRight'
import { ComponentPartOfSolution } from './ComponentPartOfSolution'

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
