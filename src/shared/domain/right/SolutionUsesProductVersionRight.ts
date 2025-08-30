import { SolutionUsesProductVersion } from '../solution/SolutionUsesProductVersion'
import { Right } from './Right'

export class SolutionUsesProductVersionRight extends Right {
  solutionUsesProductVersionId?: number
  solutionUsesProductVersion?: SolutionUsesProductVersion

  constructor(data?: Partial<SolutionUsesProductVersionRight>) {
    super()
    Object.assign(this, data)
  }
}
