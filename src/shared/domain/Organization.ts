import { Component } from './Component'
import { Product } from './Product'
import { SetupBlueprint } from './SetupBlueprint'
import { Solution } from './Solution'
import { User } from './User'

export class Organization {
  id?: number
  name?: string

  description?: string
  creationDate?: Date

  products?: Product[]
  setupBlueprints?: SetupBlueprint[]
  components?: Component[]
  solutions?: Solution[]
  users?: User[]

  constructor(data?: Partial<Organization>) {
    Object.assign(this, data)
  }
}
