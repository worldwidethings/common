import { ConnectionPoint } from './ConnectionPoint'
import { Interface } from './Interface'
import { OffersInterfaceVersion } from './OffersInterfaceVersion'

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
export class InterfaceVersion {
  id?: number
  version?: number

  name?: string
  description?: string
  creationDate?: Date

  interfaceId?: number

  interface?: Interface
  connectionPoints?: ConnectionPoint[]
  offersInterfaceVersions?: OffersInterfaceVersion[]

  constructor(data?: Partial<InterfaceVersion>) {
    Object.assign(this, data)
  }
}
