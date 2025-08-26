import { Right } from '../../Right'
import { SetupBlueprint } from '../SetupBlueprint'

export class SetupBlueprintRight extends Right {
  setupBlueprintId?: number
  setupBlueprint?: SetupBlueprint

  constructor(data?: Partial<SetupBlueprintRight>) {
    super()
    Object.assign(this, data)
  }
}
