import { ProductVersion } from '../product/ProductVersion'
import { Right } from './Right'

export class ProductVersionRight extends Right {
  productVersionId?: number
  productVersion?: ProductVersion

  constructor(data?: Partial<ProductVersionRight>) {
    super()
    Object.assign(this, data)
  }
}
