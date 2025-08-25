import { Product } from '../product/Product'
import { SetupBlueprint } from '../product/SetupBlueprint'
import { Component } from '../solution/Component'
import { Solution } from '../solution/Solution'
import { OrganizationRight } from './rights/OrganizationRight'

export class Organization {
  id?: number
  
  creationDate?: Date
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
