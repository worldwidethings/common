import { Entity } from '../Entity'
import { ProductVersion } from '../product/ProductVersion'
import { Solution } from './Solution'
import { SolutionUsesSetupBlueprint } from './SolutionUsesSetupBlueprint'

export class SolutionUsesProductVersion extends Entity {
  productVersionId?: number
  solutionId?: number

  productVersion?: ProductVersion
  rights?: SolutionUsesSetupBlueprint[]
  solution?: Solution

  constructor(data?: Partial<SolutionUsesProductVersion>) {
    super()
    Object.assign(this, data)
  }
}
