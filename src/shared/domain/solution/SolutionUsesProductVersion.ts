import { ProductVersion } from '../product/ProductVersion'
import { Solution } from './Solution'

export class SolutionUsesProductVersion {
  id?: number

  productVersionId?: number
  solutionId?: number

  productVersion?: ProductVersion
  solution?: Solution
}
