import { OffersInterfaceVersionRight } from '../right/OffersInterfaceVersionRight'
import { InterfaceVersion } from './InterfaceVersion'
import { ProductVersion } from './ProductVersion'

export class OffersInterfaceVersion {
  id?: number
  creationDate?: Date
  description?: string

  interfaceVersionId?: number
  productVersionId?: number

  interfaceVersion?: InterfaceVersion
  productVersion?: ProductVersion
  rights?: OffersInterfaceVersionRight[]

  constructor(data?: Partial<OffersInterfaceVersion>) {
    Object.assign(this, data)
  }
}
