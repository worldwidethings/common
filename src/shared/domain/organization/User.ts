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
import { OrganizationRight } from './rights/OrganizationRight'
import { UserInGroup } from './UserInGroup'

export class User {
  id?: number

  active?: boolean
  creationDate?: Date
  email?: string
  firstName?: string
  lastName?: string
  passwordHash?: string
  passwordResetToken?: string
  passwordResetTokenCreationDate?: Date
  registerToken?: string
  registerTokenCreationDate?: Date
  salt?: string
  token?: string | null

  blueprintConnectionRights?: BlueprintConnectionRight[]
  componentRights?: ComponentRight[]
  componentPartOfSolutionRights?: ComponentPartOfSolutionRight[]
  connectionPointRights?: ConnectionPointRight[]
  connectionRights?: ConnectionRight[]
  interfaceRights?: InterfaceRight[]
  offersInterfaceVersionRights?: OffersInterfaceVersionRight[]
  organizationRights?: OrganizationRight[]
  productRights?: ProductRight[]
  productVersionRights?: ProductVersionRight[]
  setupBlueprintRights?: SetupBlueprintRight[]
  setupBlueprintVersionRights?: SetupBlueprintVersionRight[]
  setupVersionRights?: SetupVersionRight[]
  solutionRights?: SolutionRight[]
  userInGroups?: UserInGroup[]

  constructor(data?: Partial<User>) {
    Object.assign(this, data)
  }

  get fullName(): string {
    return this.firstName + ' ' + this.lastName
  }
}
