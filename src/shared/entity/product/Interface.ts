import { Entity } from '../Entity'
import { Organization } from '../organization/Organization'
import { InterfaceRight } from '../right/InterfaceRight'
import { InterfaceVersion } from './InterfaceVersion'

export class Interface extends Entity {
  description?: string
  name?: string

  organizationId?: number

  interfaceVersions?: InterfaceVersion[]
  organization?: Organization
  rights?: InterfaceRight[]

  constructor(data?: Partial<Interface>) {
    super()
    Object.assign(this, data)
  }
}
