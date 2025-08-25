import { ConnectionPoint } from '../product/ConnectionPoint'
import { Component } from './Component'
import { ConnectionRight } from './rights/ConnectionRight'
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

  creationDate?: Date
  description?: string
  latestSetupVersion?: boolean

  connectedComponentId?: number
  connectionPointId?: number
  setupComponentId?: number
  setupVersionId?: number

  connectedComponent?: Component
  connectionPoint?: ConnectionPoint
  rights?: ConnectionRight[]
  setupComponent?: Component
  setupVersion?: SetupVersion

  constructor(data?: Partial<Connection>) {
    Object.assign(this, data)
  }
}
