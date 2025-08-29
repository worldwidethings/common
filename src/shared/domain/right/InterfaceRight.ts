import { Interface } from '../product/Interface'
import { Right } from './Right'

export class InterfaceRight extends Right {
  interfaceId?: number
  interface?: Interface

  constructor(data?: Partial<InterfaceRight>) {
    super()
    Object.assign(this, data)
  }
}
