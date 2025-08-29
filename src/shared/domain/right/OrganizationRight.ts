import { Organization } from '../organization/Organization'
import { User } from '../organization/User'

export class OrganizationRight {
  id?: number

  owner?: boolean
  admin?: boolean

  userId?: number
  organizationId?: number
  
  organization?: Organization
  user?: User

  constructor(data?: Partial<OrganizationRight>) {
    Object.assign(this, data)
  }
}
