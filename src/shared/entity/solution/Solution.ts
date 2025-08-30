import { Entity } from '../Entity'
import { Organization } from '../organization/Organization'
import { SolutionRight } from '../right/SolutionRight'
import { SolutionUsesComponent } from './SolutionUsesComponent'
import { SolutionUsesProductVersion } from './SolutionUsesProductVersion'
import { SolutionUsesSetupBlueprint } from './SolutionUsesSetupBlueprint'

export class Solution extends Entity{
  color?: string
  description?: string
  name?: string

  organizationId?: number

  organization?: Organization
  rights?: SolutionRight[]
  solutionUsesComponents?: SolutionUsesComponent[]
  solutionUsesProductVersions?: SolutionUsesProductVersion[]
  solutionUsesSetupBlueprints?: SolutionUsesSetupBlueprint[]

  constructor(data?: Partial<Solution>) {
    super()
    Object.assign(this, data)
  }
}
