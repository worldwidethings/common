import { SetupVersion } from '../solution/SetupVersion'
import { BlueprintConnection } from './BlueprintConnection'
import { SetupBlueprintVersionRight } from './rights/SetupBlueprintVersionRight'
import { SetupBlueprint } from './SetupBlueprint'

/**
 * It is possible to define a
 * can have a component setup. A component setup describes the
 * connections a component has to other components. Other components are either
 * connected through the offered interface of the component or the component
 * itself is composed of other components, not using a connection point of the
 * component interface.
 *
 * A component setup is associated to a certain component model version, which
 * is the one that offers a certain interface to which other components can
 * be attached to. The component model version is the interface defining
 * entity.
 *
 * A component setup itself can be evolved in versions. Thus there is a sub
 * class {@link SetupVersion} which is the real location where the
 * established component connections are listed. This class here is more
 * like a name giver for a certain component setup.
 */
export class SetupBlueprintVersion {
  id?: number
  version?: number

  creationDate?: Date
  description?: string
  name?: string

  setupBlueprintId?: number

  blueprintConnections?: BlueprintConnection[]
  rights?: SetupBlueprintVersionRight[]
  setupBlueprint?: SetupBlueprint
  setupVersions?: SetupVersion[]

  constructor(data?: Partial<SetupBlueprintVersion>) {
    Object.assign(this, data)
  }
}
