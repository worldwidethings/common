import { SolutionUsesComponentRight } from '../right/SolutionUsesComponentRight'
import { Component } from './Component'
import { Solution } from './Solution'

export class SolutionUsesComponent {
  id?: number

  description?: string

  componentId?: number
  solutionId?: number

  component?: Component
  rights?: SolutionUsesComponentRight[]
  solution?: Solution

  constructor(data?: Partial<SolutionUsesComponent>) {
    Object.assign(this, data)
  }
}
