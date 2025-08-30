import { SetupVersion } from '../solution/SetupVersion'
import { Right } from './Right'

export class SetupVersionRight extends Right {
  setupVersionId?: number
  setupVersion?: SetupVersion

  constructor(data?: Partial<SetupVersionRight>) {
    super()
    Object.assign(this, data)
  }
}
