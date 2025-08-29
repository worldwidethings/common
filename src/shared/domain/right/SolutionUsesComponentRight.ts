import { SolutionUsesComponent } from '../solution/SolutionUsesComponent'
import { Right } from './Right'

export class SolutionUsesComponentRight extends Right {
  solutionUsesComponentId?: number
  solutionUsesComponent?: SolutionUsesComponent

  constructor(data?: Partial<SolutionUsesComponentRight>) {
    super()
    Object.assign(this, data)
  }
}
