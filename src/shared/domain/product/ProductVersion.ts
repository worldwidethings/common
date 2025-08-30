import { ProductVersionRight } from '../right/ProductVersionRight'
import { Component } from '../solution/Component'
import { BlueprintConnection } from './BlueprintConnection'
import { ConnectionPoint } from './ConnectionPoint'
import { ProductVersionInterface } from './ProductVersionInterface'
import { Product } from './Product'
import { SetupBlueprint } from './SetupBlueprint'

/**
 * Products can evolve in versions. This is not so often found with hardware
 * products, since there are not easily replaceable, but it might still be
 * useful when a custom hardware is developed in the scope of a project where
 * it can run through multiple improvement stages. In contrast, it is very
 * common for software to evolve incrementally in many versions.
 *
 * A product version defines a set of connection points {@link ConnectionPoint}
 * forming its hardware and software interface, to which other components can
 * be connected to.
 *
 * A compilation of connected components is called a setup. While it does not
 * make sense to define the connections to other concrete components in the
 * context of a product version, it does make sense to define the connections
 * to other product versions in the context of a setup template
 * {@link SetupBlueprint}. The setup template can be applied to a component
 * which then would be equipped with concrete components of the predefined
 * product versions.
 */
export class ProductVersion {
  id?: number
  
  description?: string
  name?: string
  version?: string

  productId?: number

  blueprintConnections?: BlueprintConnection[]
  components?: Component[]
  product?: Product
  productVersionInterfaces?: ProductVersionInterface[]
  rights?: ProductVersionRight[]
  setupBlueprints?: SetupBlueprint[]

  constructor(data?: Partial<ProductVersion>) {
    Object.assign(this, data)
  }

  getForeignSetupBlueprints(): SetupBlueprint[] {
    const foreignSetupBlueprints: SetupBlueprint[] = []

    if (this.blueprintConnections != undefined) {
      for (const blueprintConnection of this.blueprintConnections) {
        if (blueprintConnection.setupBlueprintVersion?.setupBlueprint?.id != undefined) {
          if (! foreignSetupBlueprints.find(foundSetupBlueprint => foundSetupBlueprint.id == blueprintConnection.setupBlueprintVersion!.setupBlueprint!.id )) {
            foreignSetupBlueprints.push(blueprintConnection.setupBlueprintVersion.setupBlueprint)
          }
        }
      }
    }

    return foreignSetupBlueprints
  }
}
