import { Right } from '../../Right'
import { Connection } from '../Connection'

export class ConnectionRight extends Right {
  connectionId?: number
  connection?: Connection

  constructor(data?: Partial<ConnectionRight>) {
    super()
    Object.assign(this, data)
  }
}
