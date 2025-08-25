import { Right } from '../../Right'
import { Organization } from '../Organization'

export class OrganizationRight extends Right {
  organizationId?: number
  organization?: Organization

  constructor(data?: Partial<OrganizationRight>) {
    super()
    Object.assign(this, data)
  }
}
