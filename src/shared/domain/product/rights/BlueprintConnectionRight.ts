import { Right } from '../../Right'
import { BlueprintConnection } from '../BlueprintConnection'

export class BlueprintConnectionRight extends Right {
  blueprintConnectionId?: number
  blueprintConnection?: BlueprintConnection

  constructor(data?: Partial<BlueprintConnectionRight>) {
    super()
    Object.assign(this, data)
  }
}
