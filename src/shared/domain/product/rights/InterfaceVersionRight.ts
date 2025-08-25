import { Right } from '../../Right'
import { InterfaceVersion } from '../InterfaceVersion'

export class InterfaceVersionRight extends Right {
  interfaceVersionId?: number
  interfaceVersion?: InterfaceVersion

  constructor(data?: Partial<InterfaceVersionRight>) {
    super()
    Object.assign(this, data)
  }
}
