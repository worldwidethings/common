import { OffersInterfaceVersion } from '../product/OffersInterfaceVersion'
import { Right } from './Right'

export class OffersInterfaceVersionRight extends Right {
  offersInterfaceVersionId?: number
  offersInterfaceVersion?: OffersInterfaceVersion

  constructor(data?: Partial<OffersInterfaceVersionRight>) {
    super()
    Object.assign(this, data)
  }
}
