import { SetupBlueprintVersion } from '../product/SetupBlueprintVersion'
import { Right } from './Right'

export class SetupBlueprintVersionRight extends Right {
  setupBlueprintVersionId?: number
  setupBlueprintVersion?: SetupBlueprintVersion

  constructor(data?: Partial<SetupBlueprintVersionRight>) {
    super()
    Object.assign(this, data)
  }
}
