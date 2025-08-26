import { Right } from '../../Right'
import { ProductVersion } from '../ProductVersion'

export class ProductVersionRight extends Right {
  productVersionId?: number
  productVersion?: ProductVersion

  constructor(data?: Partial<ProductVersionRight>) {
    super()
    Object.assign(this, data)
  }
}
