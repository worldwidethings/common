import { ProductVersionInterface } from '../product/ProductVersionInterface'
import { Right } from './Right'

export class ProductVersionInterfaceRight extends Right {
  productVersionInterfaceId?: number
  productVersionInterface?: ProductVersionInterface

  constructor(data?: Partial<ProductVersionInterfaceRight>) {
    super()
    Object.assign(this, data)
  }
}
