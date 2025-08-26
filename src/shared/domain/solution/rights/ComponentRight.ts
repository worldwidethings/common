import { Right } from '../../Right'
import { Component } from '../Component'

export class ComponentRight extends Right {
  componentId?: number
  component?: Component

  constructor(data?: Partial<ComponentRight>) {
    super()
    Object.assign(this, data)
  }
}
