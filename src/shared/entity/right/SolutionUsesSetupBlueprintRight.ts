import { SolutionUsesSetupBlueprint } from '../solution/SolutionUsesSetupBlueprint'
import { Right } from './Right'

export class SolutionUsesSetupBlueprintRight extends Right {
  solutionUsesSetupBlueprintId?: number
  solutionUsesSetupBlueprint?: SolutionUsesSetupBlueprint

  constructor(data?: Partial<SolutionUsesSetupBlueprintRight>) {
    super()
    Object.assign(this, data)
  }
}
