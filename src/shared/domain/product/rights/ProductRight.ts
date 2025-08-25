import { Right } from '../../Right'
import { Product } from '../Product'

export class ProductRight extends Right {
  productId?: number
  product?: Product

  constructor(data?: Partial<ProductRight>) {
    super()
    Object.assign(this, data)
  }
}
