import { Right } from '../../Right'
import { SetupVersion } from '../SetupVersion'

export class SetupVersionRight extends Right {
  setupVersionId?: number
  setupVersion?: SetupVersion

  constructor(data?: Partial<SetupVersionRight>) {
    super()
    Object.assign(this, data)
  }
}
