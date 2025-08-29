import { Organization } from '../organization/Organization'
import { ProductVersion } from '../product/ProductVersion'
import { ComponentRight } from '../right/ComponentRight'
import { ComponentPartOfSolution } from './ComponentPartOfSolution'
import { Connection } from './Connection'
import { SetupVersion } from './SetupVersion'

/**
 * A component is a component in the context of an IoT solution. Thus it is an
 * IoT component. There are different types of IoT components like devices,
 * firmware, AI, physical monitored things, and so on.
 *
 * Every component is an instance of a specific version {@link ProductVersion}
 * of a product {@link Product}. Each product can evolve in versions, which is
 * not so much relevant for hardware, but it is for software, which usually
 * evolves many iterations.
 *
 * The product itself is bound to a product type {@link ProductType}, which
 * represents the already mentioned types like devices, firmware, AI's, and so
 * on.
 *
 * Components belong to one organization {@link Organization} and there they
 * are are part of arbitrary many IoT solutions {@link Solution}.
 */
export class Component {
  id?: number

  creationDate?: Date
  description?: string
  name?: string

  organizationId?: number
  productVersionId?: number

  componentPartOfSolutions?: ComponentPartOfSolution[]
  connections?: Connection[]
  organization?: Organization
  productVersion?: ProductVersion
  rights?: ComponentRight[]
  setupConnections?: Connection[]
  setupVersions?: SetupVersion[]

  constructor(data?: Partial<Component>) {
    Object.assign(this, data)
  }

  getSetupVersion(setupVersionId: number): SetupVersion|undefined {
    return this.setupVersions && this.setupVersions.find(setupVersion => setupVersion.id === setupVersionId)
  }
}
