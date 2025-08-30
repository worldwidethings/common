import { SetupBlueprint } from '../product/SetupBlueprint'
import { SolutionUsesSetupBlueprintRight } from '../right/SolutionUsesSetupBlueprintRight'
import { Solution } from './Solution'

export class SolutionUsesSetupBlueprint {
  id?: number

  setupBlueprintId?: number
  solutionId?: number

  setupBlueprint?: SetupBlueprint
  rights?: SolutionUsesSetupBlueprintRight[]
  solution?: Solution

  constructor(data?: Partial<SolutionUsesSetupBlueprint>) {
    Object.assign(this, data)
  }
}
