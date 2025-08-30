import { Entity } from '../Entity'
import { Organization } from '../organization/Organization'
import { SetupBlueprintRight } from '../right/SetupBlueprintRight'
import { SolutionUsesSetupBlueprint } from '../solution/SolutionUsesSetupBlueprint'
import { ProductVersion } from './ProductVersion'
import { SetupBlueprintVersion } from './SetupBlueprintVersion'

/**
 * IoT components can be connected to other IoT components, either to form a
 * the IoT solution or to configure a single component for example with
 * sensors. A compilation of component connections is called a setup. A setup
 * blueprint can name the product versions of components to which a component
 * should be connected to. It can be used to define the component setup for a
 * specific use case which then can be applied to concrete components.
 *
 * Setup templates also evolve in versions {@link SetupBlueprintVersion} to keep
 * track of each step that was taken to create a working IoT solution.
 */
export class SetupBlueprint extends Entity{
  description?: string
  name?: string

  organizationId?: number
  productVersionId?: number

  organization?: Organization
  productVersion?: ProductVersion
  rights?: SetupBlueprintRight[]
  setupBlueprintVersions?: SetupBlueprintVersion[]
  solutionUsesSetupBlueprints?: SolutionUsesSetupBlueprint[]

  constructor(data?: Partial<SetupBlueprint>) {
    super()
    Object.assign(this, data)
  }

  sort(): void {
    if (this.setupBlueprintVersions) {
      this.setupBlueprintVersions.sort((a, b) => {
        if (a.version != undefined && b.version != undefined) {
          if (a.version > a.version) {
            return -1
          }
          else {
            return 1
          }
        }

        if (a.version != undefined) {
          return -1
        }

        return 1
      })
    }
  }
}
