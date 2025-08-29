import { Organization } from '../organization/Organization'
import { ProductRight } from '../right/ProductRight'
import { ProductType } from './ProductType'
import { ProductVersion } from './ProductVersion'

/**
 * A product can be either a hardware or a software product, i.e. devices,
 * firmware, AI's or monitored things. All of the possible types are defined
 * through the {@link ProductType} class.
 *
 * A product belongs to an organization which owns the intellectual property
 * for it.
 *
 * A product can be evolved in versions {@link ProductVersion}. This is not as
 * relevant for hardware products as it is for software products, which evolve
 * in many iterations.
 */
export class Product {
  id?: number

  creationDate?: Date
  description?: string
  name?: string

  organizationId?: number
  productTypeId?: number

  organization?: Organization
  productType?: ProductType
  productVersions?: ProductVersion[]
  rights?: ProductRight[]

  constructor(data?: Partial<Product>) {
    Object.assign(this, data)
  }
}
