import { ComponentPartOfSolution } from '../solution/ComponentPartOfSolution'
import { Right } from './Right'

export class ComponentPartOfSolutionRight extends Right {
  componentPartOfSolutionId?: number
  componentPartOfSolution?: ComponentPartOfSolution

  constructor(data?: Partial<ComponentPartOfSolutionRight>) {
    super()
    Object.assign(this, data)
  }
}
