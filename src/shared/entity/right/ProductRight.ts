import { Product } from '../product/Product'
import { Right } from './Right'

export class ProductRight extends Right {
  productId?: number
  product?: Product

  constructor(data?: Partial<ProductRight>) {
    super()
    Object.assign(this, data)
  }
}
