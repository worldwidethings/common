import { Right } from '../../Right'
import { ComponentPartOfSolution } from '../ComponentPartOfSolution'

export class ComponentPartOfSolutionRight extends Right {
  componentPartOfSolutionId?: number
  componentPartOfSolution?: ComponentPartOfSolution

  constructor(data?: Partial<ComponentPartOfSolutionRight>) {
    super()
    Object.assign(this, data)
  }
}
