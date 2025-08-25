import { Right } from '../../Right'
import { SetupBlueprintVersion } from '../SetupBlueprintVersion'

export class SetupBlueprintVersionRight extends Right {
  setupBlueprintVersionId?: number
  setupBlueprintVersion?: SetupBlueprintVersion

  constructor(data?: Partial<SetupBlueprintVersionRight>) {
    super()
    Object.assign(this, data)
  }
}
