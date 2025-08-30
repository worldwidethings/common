import { Entity } from '../Entity'
import { BlueprintConnectionRight } from '../right/BlueprintConnectionRight'
import { ComponentRight } from '../right/ComponentRight'
import { ConnectionPointRight } from '../right/ConnectionPointRight'
import { ConnectionRight } from '../right/ConnectionRight'
import { InterfaceRight } from '../right/InterfaceRight'
import { OrganizationRight } from '../right/OrganizationRight'
import { ProductRight } from '../right/ProductRight'
import { ProductVersionInterfaceRight } from '../right/ProductVersionInterfaceRight'
import { ProductVersionRight } from '../right/ProductVersionRight'
import { SetupBlueprintRight } from '../right/SetupBlueprintRight'
import { SetupBlueprintVersionRight } from '../right/SetupBlueprintVersionRight'
import { SetupVersionRight } from '../right/SetupVersionRight'
import { SolutionRight } from '../right/SolutionRight'
import { SolutionUsesComponentRight } from '../right/SolutionUsesComponentRight'
import { UserRight } from '../right/UserRight'

export class User extends Entity {
  active?: boolean
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
  connectionPointRights?: ConnectionPointRight[]
  connectionRights?: ConnectionRight[]
  interfaceRights?: InterfaceRight[]
  organizationRights?: OrganizationRight[]
  productRights?: ProductRight[]
  productVersionInterfaceRights?: ProductVersionInterfaceRight[]
  productVersionRights?: ProductVersionRight[]
  setupBlueprintRights?: SetupBlueprintRight[]
  setupBlueprintVersionRights?: SetupBlueprintVersionRight[]
  setupVersionRights?: SetupVersionRight[]
  solutionRights?: SolutionRight[]
  solutionUsesComponentRights?: SolutionUsesComponentRight[]
  userRights?: UserRight[]
  
  constructor(data?: Partial<User>) {
    super()
    Object.assign(this, data)
  }

  get fullName(): string {
    return this.firstName + ' ' + this.lastName
  }
}
