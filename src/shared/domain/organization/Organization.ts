import { Product } from '../product/Product'
import { SetupBlueprint } from '../product/SetupBlueprint'
import { OrganizationRight } from '../right/OrganizationRight'
import { Component } from '../solution/Component'
import { Solution } from '../solution/Solution'

export class Organization {
  id?: number
  
  description?: string
  name?: string

  components?: Component[]
  organizationRights?: OrganizationRight[]
  products?: Product[]
  rights?: OrganizationRight[]
  setupBlueprints?: SetupBlueprint[]
  solutions?: Solution[]

  constructor(data?: Partial<Organization>) {
    Object.assign(this, data)
  }
}
