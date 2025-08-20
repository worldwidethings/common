import { Component } from './Component'
import { Solution } from './Solution'

export class ComponentPartOfSolution {
  id?: number
  description?: string
  creationDate?: Date

  componentId?: number
  solutionId?: number

  component?: Component
  solution?: Solution

  constructor(data?: Partial<ComponentPartOfSolution>) {
    Object.assign(this, data)
  }
}
