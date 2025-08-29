import { SetupBlueprintVersion } from '../product/SetupBlueprintVersion'
import { SetupVersionRight } from '../right/SetupVersionRight'
import { Component } from './Component'
import { Connection } from './Connection'

/**
 * This class is a specific version of a component setup, represented by the
 * class {@link SetupBlueprint}. There can be arbitrary many versions of a
 * component setup which will emerge over time when experimenting with
 * different setup variations, testing out what works and what does not.
 *
 *
 *
 * Since every component setup is associated to a component model version,
 * every component setup is always available to every component and thus,
 * also every component setup version is also available to every component.
 * This means, every component can be set up with a certain component setup
 * version. Thus, the user can define component setups that he then can apply
 * to specific components.
 *
 * Since the user might not be able to define specific
 *
 * A component setup version might define a connection to another component
 * in a more abstract way be referencing the component model version instead
 * of a specific component itself, implying that a specific connection to
 * a component of the given component model version, or compatible, has to
 * be made.
 */
export class SetupVersion {
  id?: number

  version?: number

  creationDate?: Date
  description?: string
  name?: string

  componentId?: number
  setupBlueprintVersionId?: number

  component?: Component
  connections?: Connection[]
  rights?: SetupVersionRight[]
  setupBlueprintVersion?: SetupBlueprintVersion

  constructor(data?: Partial<SetupVersion>) {
    Object.assign(this, data)
  }
}
