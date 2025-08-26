import { Component } from '../solution/Component'
import { Product } from './Product'
import { ProductVersion } from './ProductVersion'
import { SetupBlueprint } from './SetupBlueprint'

export class ProductType {
  id?: number

  description?: string
  name?: string

  products?: Product[]

  constructor(data?: Partial<ProductType>) {
    Object.assign(this, data)
  }

  countComponents(): number|undefined {
    let count: number|undefined

    if (this.products != undefined) {
      for (const product of this.products) {
        if (product.productVersions != undefined) {
          for (const productVersion of product.productVersions) {
            if (productVersion.components != undefined) {
              if (count == undefined) {
                count = 0
              }
              
              count += productVersion.components.length
            }
          }
        }
      }
    }

    return count
  }

  getComponents(): Component[] {
    const components: Component[] = []

    if (this.products != undefined) {
      for (const product of this.products) {
        if (product.productVersions != undefined) {
          for (const productVersion of product.productVersions) {
            if (productVersion.components != undefined) {
              components.push(...productVersion.components)
            }
          }
        }
      }
    }

    return components
  }

  getProductVersions(): ProductVersion[] {
    const productVersions: ProductVersion[] = []

    if (this.products) {
      for (const product of this.products) {
        if (product.productVersions) {
          productVersions.push(...product.productVersions)
        }
      }
    }

    return productVersions
  }

  getSetupBlueprints(): SetupBlueprint[] {
    const setupBlueprints: SetupBlueprint[] = []

    if (this.products != undefined) {
      for (const product of this.products) {
        if (product.productVersions != undefined) {
          for (const productVersion of product.productVersions) {
            if (productVersion.setupBlueprints != undefined) {
              setupBlueprints.push(...productVersion.setupBlueprints)
            }
          }
        }
      }
    }

    return setupBlueprints
  }
}
