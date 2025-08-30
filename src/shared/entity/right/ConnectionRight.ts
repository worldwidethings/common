import { Connection } from '../solution/Connection'
import { Right } from './Right'

export class ConnectionRight extends Right {
  connectionId?: number
  connection?: Connection

  constructor(data?: Partial<ConnectionRight>) {
    super()
    Object.assign(this, data)
  }
}
