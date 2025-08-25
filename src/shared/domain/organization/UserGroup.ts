import { BlueprintConnectionRight } from '../product/rights/BlueprintConnectionRight'
import { ConnectionPointRight } from '../product/rights/ConnectionPointRight'
import { InterfaceRight } from '../product/rights/InterfaceRight'
import { OffersInterfaceVersionRight } from '../product/rights/OffersInterfaceVersionRight'
import { ProductRight } from '../product/rights/ProductRight'
import { ProductVersionRight } from '../product/rights/ProductVersionRight'
import { SetupBlueprintRight } from '../product/rights/SetupBlueprintRight'
import { SetupBlueprintVersionRight } from '../product/rights/SetupBlueprintVersionRight'
import { ComponentPartOfSolutionRight } from '../solution/rights/ComponentPartOfSolutionRight'
import { ComponentRight } from '../solution/rights/ComponentRight'
import { ConnectionRight } from '../solution/rights/ConnectionRight'
import { SetupVersionRight } from '../solution/rights/SetupVersionRight'
import { SolutionRight } from '../solution/rights/SolutionRight'
import { Organization } from './Organization'
import { OrganizationRight } from './rights/OrganizationRight'
import { UserInGroup } from './UserInGroup'

export class UserGroup {
  id?: number

  name?: string
  description?: string

  organizationId?: number

  blueprintConnectionRights?: BlueprintConnectionRight[]
  componentRights?: ComponentRight[]
  componentPartOfSolutionRights?: ComponentPartOfSolutionRight[]
  connectionPointRights?: ConnectionPointRight[]
  connectionRights?: ConnectionRight[]
  interfaceRights?: InterfaceRight[]
  offersInterfaceVersionRights?: OffersInterfaceVersionRight[]
  organization?: Organization
  organizationRights?: OrganizationRight[]
  productRights?: ProductRight[]
  productVersionRights?: ProductVersionRight[]
  setupBlueprintRights?: SetupBlueprintRight[]
  setupBlueprintVersionRights?: SetupBlueprintVersionRight[]
  setupVersionRights?: SetupVersionRight[]
  solutionRights?: SolutionRight[]
  userInGroups?: UserInGroup[]

  constructor(data?: Partial<UserGroup>) {
    Object.assign(this, data)
  }
}
