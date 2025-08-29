import { BlueprintConnection } from '../product/BlueprintConnection'
import { Right } from './Right'

export class BlueprintConnectionRight extends Right {
  blueprintConnectionId?: number
  blueprintConnection?: BlueprintConnection

  constructor(data?: Partial<BlueprintConnectionRight>) {
    super()
    Object.assign(this, data)
  }
}
