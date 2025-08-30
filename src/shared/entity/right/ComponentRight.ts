import { Component } from '../solution/Component'
import { Right } from './Right'

export class ComponentRight extends Right {
  componentId?: number
  component?: Component

  constructor(data?: Partial<ComponentRight>) {
    super()
    Object.assign(this, data)
  }
}
