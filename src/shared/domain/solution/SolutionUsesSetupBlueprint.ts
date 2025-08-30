import { SetupBlueprint } from '../product/SetupBlueprint'
import { Solution } from './Solution'

export class SolutionUsesSetupBlueprint {
  id?: number

  blueprintId?: number
  solutionId?: number

  blueprint?: SetupBlueprint
  solution?: Solution
}
