import { BlueprintConnection } from './BlueprintConnection'
import { Connection } from './Connection'
import { InterfaceVersion } from './InterfaceVersion'

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
  name?: string
  description?: string
  creationDate?: Date

  interfaceVersionId?: number

  interfaceVersion?: InterfaceVersion
  connections?: Connection[]
  blueprintConnections?: BlueprintConnection[]

  constructor(data?: Partial<ConnectionPoint>) {
    Object.assign(this, data)
  }
}
