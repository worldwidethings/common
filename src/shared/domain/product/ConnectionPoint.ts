import { Connection } from '../solution/Connection'
import { BlueprintConnection } from './BlueprintConnection'
import { InterfaceVersion } from './InterfaceVersion'
import { ConnectionPointRight } from './rights/ConnectionPointRight'

/**
 * Every component can have a setup of other components it is somehow
 * connected to. This class describes such a connection of a component to
 * another one.
 *
 * Since the recommended way of approaching a professional project is to
 * define component setup templates, thus component setups that can be
 * applied to any component in general, the co
 */
export class ConnectionPoint {
  id?: number

  creationDate?: Date
  description?: string
  name?: string

  interfaceVersionId?: number

  blueprintConnections?: BlueprintConnection[]
  connections?: Connection[]
  interfaceVersion?: InterfaceVersion
  rights?: ConnectionPointRight[]

  constructor(data?: Partial<ConnectionPoint>) {
    Object.assign(this, data)
  }
}
