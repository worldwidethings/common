import { Entity } from '../Entity'
import { Organization } from '../organization/Organization'
import { SolutionRight } from '../right/SolutionRight'
import { SolutionUsesComponent } from './SolutionUsesComponent'

export class Solution extends Entity{
  color?: string
  description?: string
  name?: string

  organizationId?: number

  organization?: Organization
  rights?: SolutionRight[]
  solutionUsesComponents?: SolutionUsesComponent[]

  constructor(data?: Partial<Solution>) {
    super()
    Object.assign(this, data)
  }
}
