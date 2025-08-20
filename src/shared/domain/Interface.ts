import { InterfaceVersion } from './InterfaceVersion'

export class Interface {
  id?: number

  name?: string
  description?: string
  creationDate?: Date

  interfaceVersions?: InterfaceVersion[]

  constructor(data?: Partial<Interface>) {
    Object.assign(this, data)
  }
}
