import { ConnectionPoint } from '../product/ConnectionPoint'
import { Right } from './Right'

export class ConnectionPointRight extends Right {
  connectionPointId?: number
  connectionPoint?: ConnectionPoint

  constructor(data?: Partial<ConnectionPointRight>) {
    super()
    Object.assign(this, data)
  }
}
