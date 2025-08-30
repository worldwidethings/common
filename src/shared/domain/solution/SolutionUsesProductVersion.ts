import { ProductVersion } from '../product/ProductVersion'
import { Solution } from './Solution'
import { SolutionUsesSetupBlueprint } from './SolutionUsesSetupBlueprint'

export class SolutionUsesProductVersion {
  id?: number

  productVersionId?: number
  solutionId?: number

  productVersion?: ProductVersion
  rights?: SolutionUsesSetupBlueprint[]
  solution?: Solution

  constructor(data?: Partial<SolutionUsesProductVersion>) {
    Object.assign(this, data)
  }
}
