import { Solution } from "../solution/Solution"
import { Right } from "./Right"

export class SolutionRight extends Right {
  solutionId?: number
  solution?: Solution

  constructor(data?: Partial<SolutionRight>) {
    super()
    Object.assign(this, data)
  }
}
