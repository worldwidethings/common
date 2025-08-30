import { Entity } from '../Entity'
import { SolutionUsesComponentRight } from '../right/SolutionUsesComponentRight'
import { Component } from './Component'
import { Solution } from './Solution'

export class SolutionUsesComponent extends Entity{
  description?: string

  componentId?: number
  solutionId?: number

  component?: Component
  rights?: SolutionUsesComponentRight[]
  solution?: Solution

  constructor(data?: Partial<SolutionUsesComponent>) {
    super()
    Object.assign(this, data)
  }
}
