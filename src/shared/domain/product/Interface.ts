import { InterfaceVersion } from './InterfaceVersion'
import { InterfaceRight } from './rights/InterfaceRight'

export class Interface {
  id?: number

  creationDate?: Date
  description?: string
  name?: string

  interfaceVersions?: InterfaceVersion[]
  rights?: InterfaceRight[]

  constructor(data?: Partial<Interface>) {
    Object.assign(this, data)
  }
}
