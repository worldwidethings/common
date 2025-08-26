import { Right } from '../../Right'
import { Solution } from '../Solution'

export class SolutionRight extends Right {
  solutionId?: number
  solution?: Solution

  constructor(data?: Partial<SolutionRight>) {
    super()
    Object.assign(this, data)
  }
}
