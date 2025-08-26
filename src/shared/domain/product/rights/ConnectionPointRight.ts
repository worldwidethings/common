import { Right } from '../../Right'
import { ConnectionPoint } from '../ConnectionPoint'

export class ConnectionPointRight extends Right {
  connectionPointId?: number
  connectionPoint?: ConnectionPoint

  constructor(data?: Partial<ConnectionPointRight>) {
    super()
    Object.assign(this, data)
  }
}
