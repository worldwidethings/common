import { Component } from './Component'
import { ConnectionPoint } from './ConnectionPoint'
import { SetupVersion } from './SetupVersion'

/**
 * Every component can have a setup of other components it is somehow
 * connected to. This class describes such a connection of a component to
 * another one.
 *
 * Since the recommended way of approaching a professional project is to
 * define component setup templates, thus component setups that can be
 * applied to any component in general, the co
 */
export class Connection {
  id?: number
  description?: string
  creationDate?: Date

  latestSetupVersion?: boolean

  connectedComponentId?: number
  setupComponentId?: number
  setupVersionId?: number
  connectionPointId?: number

  connectedComponent?: Component
  setupComponent?: Component
  setupVersion?: SetupVersion
  connectionPoint?: ConnectionPoint

  constructor(data?: Partial<Connection>) {
    Object.assign(this, data)
  }
}
