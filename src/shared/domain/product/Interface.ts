import { Organization } from '../organization/Organization'
import { InterfaceVersion } from './InterfaceVersion'
import { InterfaceRight } from './rights/InterfaceRight'

export class Interface {
  id?: number

  creationDate?: Date
  description?: string
  name?: string

  organizationId?: number

  interfaceVersions?: InterfaceVersion[]
  organization?: Organization
  rights?: InterfaceRight[]

  constructor(data?: Partial<Interface>) {
    Object.assign(this, data)
  }
}
