import { Entity } from '../Entity'
import { Organization } from '../organization/Organization'
import { User } from '../organization/User'

export class OrganizationRight extends Entity {
  owner?: boolean
  admin?: boolean

  userId?: number
  organizationId?: number
  
  organization?: Organization
  user?: User

  constructor(data?: Partial<OrganizationRight>) {
    super()
    Object.assign(this, data)
  }
}
