import { SetupBlueprint } from '../product/SetupBlueprint'
import { Right } from './Right'

export class SetupBlueprintRight extends Right {
  setupBlueprintId?: number
  setupBlueprint?: SetupBlueprint

  constructor(data?: Partial<SetupBlueprintRight>) {
    super()
    Object.assign(this, data)
  }
}
