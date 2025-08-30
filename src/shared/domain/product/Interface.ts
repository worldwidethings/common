import { Organization } from '../organization/Organization'
import { InterfaceRight } from '../right/InterfaceRight'
import { InterfaceVersion } from './InterfaceVersion'

export class Interface {
  id?: number

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
