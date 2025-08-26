import { Right } from '../../Right'
import { Interface } from '../Interface'

export class InterfaceRight extends Right {
  interfaceId?: number
  interface?: Interface

  constructor(data?: Partial<InterfaceRight>) {
    super()
    Object.assign(this, data)
  }
}
