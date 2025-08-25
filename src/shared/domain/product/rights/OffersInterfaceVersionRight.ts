import { Right } from '../../Right'
import { OffersInterfaceVersion } from '../OffersInterfaceVersion'

export class OffersInterfaceVersionRight extends Right {
  offersInterfaceVersionId?: number
  offersInterfaceVersion?: OffersInterfaceVersion

  constructor(data?: Partial<OffersInterfaceVersionRight>) {
    super()
    Object.assign(this, data)
  }
}
