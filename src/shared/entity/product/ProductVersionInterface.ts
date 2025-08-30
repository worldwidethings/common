import { Entity } from '../Entity'
import { ProductVersionInterfaceRight } from '../right/ProductVersionInterfaceRight'
import { InterfaceVersion } from './InterfaceVersion'
import { ProductVersion } from './ProductVersion'

export class ProductVersionInterface extends Entity {
  description?: string

  interfaceVersionId?: number
  productVersionId?: number

  interfaceVersion?: InterfaceVersion
  productVersion?: ProductVersion
  rights?: ProductVersionInterfaceRight[]

  constructor(data?: Partial<ProductVersionInterface>) {
    super()
    Object.assign(this, data)
  }
}
