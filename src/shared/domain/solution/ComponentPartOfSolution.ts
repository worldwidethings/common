import { Component } from './Component'
import { ComponentPartOfSolutionRight } from './rights/ComponentPartOfSolutionRight'
import { Solution } from './Solution'

export class ComponentPartOfSolution {
  id?: number

  creationDate?: Date
  description?: string

  componentId?: number
  solutionId?: number

  component?: Component
  rights?: ComponentPartOfSolutionRight[]
  solution?: Solution

  constructor(data?: Partial<ComponentPartOfSolution>) {
    Object.assign(this, data)
  }
}
