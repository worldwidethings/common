import { Entity } from '../Entity'
import { BlueprintConnectionRight } from '../right/BlueprintConnectionRight'
import { ConnectionPoint } from './ConnectionPoint'
import { ProductVersion } from './ProductVersion'
import { SetupBlueprintVersion } from './SetupBlueprintVersion'

/**
 * Every component can have a setup of other components it is somehow
 * connected to. This class describes such a connection of a component to
 * another one.
 *
 * Since the recommended way of approaching a professional project is to
 * define component setup templates, thus component setups that can be
 * applied to any component in general, the co
 */
export class BlueprintConnection extends Entity {
  description?: string

  connectionPointId?: number
  productVersionId?: number
  setupBlueprintVersionId?: number

  connectionPoint?: ConnectionPoint
  productVersion?: ProductVersion
  rights?: BlueprintConnectionRight[]
  setupBlueprintVersion?: SetupBlueprintVersion

  constructor(data?: Partial<BlueprintConnection>) {
    super()
    Object.assign(this, data)
  }
}
