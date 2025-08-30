import { Entity } from '../Entity'
import { SetupBlueprint } from '../product/SetupBlueprint'
import { SolutionUsesSetupBlueprintRight } from '../right/SolutionUsesSetupBlueprintRight'
import { Solution } from './Solution'

export class SolutionUsesSetupBlueprint extends Entity {
  setupBlueprintId?: number
  solutionId?: number

  setupBlueprint?: SetupBlueprint
  rights?: SolutionUsesSetupBlueprintRight[]
  solution?: Solution

  constructor(data?: Partial<SolutionUsesSetupBlueprint>) {
    super()
    Object.assign(this, data)
  }
}
