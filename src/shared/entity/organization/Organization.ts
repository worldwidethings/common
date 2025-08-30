import { Entity } from '../Entity'
import { Product } from '../product/Product'
import { SetupBlueprint } from '../product/SetupBlueprint'
import { OrganizationRight } from '../right/OrganizationRight'
import { Component } from '../solution/Component'
import { Solution } from '../solution/Solution'

export class Organization extends Entity {
  description?: string
  name?: string

  components?: Component[]
  organizationRights?: OrganizationRight[]
  products?: Product[]
  rights?: OrganizationRight[]
  setupBlueprints?: SetupBlueprint[]
  solutions?: Solution[]

  constructor(data?: Partial<Organization>) {
    super()
    Object.assign(this, data)
  }
}
