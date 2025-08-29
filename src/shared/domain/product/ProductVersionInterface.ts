import { ProductVersionInterfaceRight } from '../right/ProductVersionInterfaceRight'
import { InterfaceVersion } from './InterfaceVersion'
import { ProductVersion } from './ProductVersion'

export class ProductVersionInterface {
  id?: number
  creationDate?: Date
  description?: string

  interfaceVersionId?: number
  productVersionId?: number

  interfaceVersion?: InterfaceVersion
  productVersion?: ProductVersion
  rights?: ProductVersionInterfaceRight[]

  constructor(data?: Partial<ProductVersionInterface>) {
    Object.assign(this, data)
  }
}
