import { expect } from 'chai'
import { checkSchema } from 'knight-object-db'
import 'mocha'
import { BlueprintConnection, Component, ComponentRight, Connection, ConnectionPoint, ConnectionRight, Interface, InterfaceVersion, objectDbSchema, Organization, Product, ProductType, ProductVersion, ProductVersionInterface, ProductVersionInterfaceRight, SetupBlueprint, SetupBlueprintVersion, SetupVersion, SetupVersionRight, Solution, SolutionRight, SolutionUsesComponent, SolutionUsesComponentRight, SolutionUsesProductVersion, SolutionUsesProductVersionRight, SolutionUsesSetupBlueprint, SolutionUsesSetupBlueprintRight, User, UserRight } from '../src'
import { BlueprintConnectionRight } from '../src/shared/domain/right/BlueprintConnectionRight'
import { ConnectionPointRight } from '../src/shared/domain/right/ConnectionPointRight'
import { InterfaceRight } from '../src/shared/domain/right/InterfaceRight'
import { InterfaceVersionRight } from '../src/shared/domain/right/InterfaceVersionRight'
import { OrganizationRight } from '../src/shared/domain/right/OrganizationRight'
import { ProductRight } from '../src/shared/domain/right/ProductRight'
import { ProductVersionRight } from '../src/shared/domain/right/ProductVersionRight'
import { SetupBlueprintRight } from '../src/shared/domain/right/SetupBlueprintRight'
import { SetupBlueprintVersionRight } from '../src/shared/domain/right/SetupBlueprintVersionRight'

describe('ObjectDbSchema', function () {
  it('should be valid', function () {
    const issues = checkSchema(objectDbSchema, [
      new BlueprintConnection({
        id: 1,
        connectionPointId: 1,
        productVersionId: 1,
        setupBlueprintVersionId: 1,
        connectionPoint: {} as any,
        productVersion: {} as any,
        rights: [],
        setupBlueprintVersion: {} as any
      }),

      new BlueprintConnectionRight({
        id: 1,
        blueprintConnectionId: 1,
        userId: 1,
        blueprintConnection: {} as any,
        user: {} as any
      }),

      new Component({
        id: 1,
        organizationId: 1,
        productVersionId: 1,
        connections: [],
        organization: {} as any,
        productVersion: {} as any,
        rights: [],
        setupConnections: [],
        setupVersions: [],
        solutionUsesComponents: []
      }),

      new ComponentRight({
        id: 1,
        componentId: 1,
        userId: 1,
        component: {} as any,
        user: {} as any
      }),

      new Connection({
        id: 1,
        connectedComponentId: 1,
        setupComponentId: 1,
        setupVersionId: 1,
        connectionPointId: 1,
        connectedComponent: {} as any,
        rights: [],
        setupComponent: {} as any,
        setupVersion: {} as any,
        connectionPoint: {} as any
      }),

      new ConnectionRight({
        id: 1,
        connectionId: 1,
        userId: 1,
        connection: {} as any,
        user: {} as any
      }),

      new ConnectionPoint({
        id: 1,
        interfaceVersionId: 1,
        connections: [],
        blueprintConnections: [],
        interfaceVersion: {} as any,
        rights: []
      }),

      new ConnectionPointRight({
        id: 1,
        connectionPointId: 1,
        userId: 1,
        connectionPoint: {} as any,
        user: {} as any
      }),

      new Interface({
        id: 1,
        interfaceVersions: [],
        organization: {} as any,
        rights: []
      }),

      new InterfaceRight({
        id: 1,
        interfaceId: 1,
        userId: 1,
        interface: {} as any,
        user: {} as any
      }),

      new InterfaceVersion({
        id: 1,
        interfaceId: 1,
        connectionPoints: [],
        interface: {} as any,
        productVersionInterfaces: [],
        rights: []
      }),

      new InterfaceVersionRight({
        id: 1,
        interfaceVersionId: 1,
        userId: 1,
        interfaceVersion: {} as any,
        user: {} as any
      }),

      new Organization({
        id: 1,
        components: [],
        products: [],
        organizationRights: [],
        rights: [],
        setupBlueprints: [],
        solutions: []
      }),

      new OrganizationRight({
        id: 1,
        organizationId: 1,
        userId: 1,
        organization: {} as any,
        user: {} as any
      }),

      new Product({
        id: 1,
        organizationId: 1,
        productTypeId: 1,
        organization: {} as any,
        productType: {} as any,
        productVersions: [],
        rights: []
      }),

      new ProductRight({
        id: 1,
        productId: 1,
        userId: 1,
        product: {} as any,
        user: {} as any
      }),

      new ProductType({
        id: 1,
        products: []
      }),

      new ProductVersion({
        id: 1,
        productId: 1,
        blueprintConnections: [],
        components: [],
        product: {} as any,
        productVersionInterfaces: [],
        rights: [],
        setupBlueprints: []
      }),

      new ProductVersionRight({
        id: 1,
        productVersionId: 1,
        userId: 1,
        productVersion: {} as any,
        user: {} as any
      }),

      new ProductVersionInterface({
        id: 1,
        interfaceVersionId: 1,
        productVersionId: 1,
        interfaceVersion: {} as any,
        productVersion: {} as any,
        rights: []
      }),

      new ProductVersionInterfaceRight({
        id: 1,
        productVersionInterfaceId: 1,
        userId: 1,
        productVersionInterface: {} as any,
        user: {} as any
      }),

      new SetupBlueprint({
        id: 1,
        organizationId: 1,
        productVersionId: 1,
        organization: {} as any,
        productVersion: {} as any,
        rights: [],
        setupBlueprintVersions: []
      }),

      new SetupBlueprintRight({
        id: 1,
        setupBlueprintId: 1,
        userId: 1,
        setupBlueprint: {} as any,
        user: {} as any
      }),

      new SetupBlueprintVersion({
        id: 1,
        setupBlueprintId: 1,
        blueprintConnections: [],
        rights: [],
        setupBlueprint: {} as any,
        setupVersions: []
      }),

      new SetupBlueprintVersionRight({
        id: 1,
        setupBlueprintVersionId: 1,
        userId: 1,
        setupBlueprintVersion: {} as any,
        user: {} as any
      }),

      new SetupVersion({
        id: 1,
        componentId: 1,
        setupBlueprintVersionId: 1,
        component: {} as any,
        connections: [],
        rights: [],
        setupBlueprintVersion: {} as any
      }),

      new SetupVersionRight({
        id: 1,
        setupVersionId: 1,
        userId: 1,
        setupVersion: {} as any,
        user: {} as any
      }),

      new Solution({
        id: 1,
        organizationId: 1,
        organization: {} as any,
        rights: [],
        solutionUsesComponents: []
      }),

      new SolutionRight({
        id: 1,
        solutionId: 1,
        userId: 1,
        solution: {} as any,
        user: {} as any
      }),

      new SolutionUsesComponent({
        id: 1,
        componentId: 1,
        solutionId: 1,
        component: {} as any,
        rights: [],
        solution: {} as any
      }),

      new SolutionUsesComponentRight({
        id: 1,
        solutionUsesComponentId: 1,
        userId: 1,
        solutionUsesComponent: {} as any,
        user: {} as any
      }),

      new SolutionUsesProductVersion({
        id: 1,
        productVersionId: 1,
        solutionId: 1,
        productVersion: {} as any,
        rights: [],
        solution: {} as any
      }),

      new SolutionUsesProductVersionRight({
        id: 1,
        solutionUsesProductVersionId: 1,
        userId: 1,
        solutionUsesProductVersion: {} as any,
        user: {} as any
      }),

      new SolutionUsesSetupBlueprint({
        id: 1,
        setupBlueprintId: 1,
        solutionId: 1,
        setupBlueprint: {} as any,
        rights: [],
        solution: {} as any
      }),

      new SolutionUsesSetupBlueprintRight({
        id: 1,
        solutionUsesSetupBlueprintId: 1,
        userId: 1,
        solutionUsesSetupBlueprint: {} as any,
        user: {} as any
      }),

      new User({
        id: 1,
        blueprintConnectionRights: [],
        componentRights: [],
        connectionPointRights: [],
        connectionRights: [],
        interfaceRights: [],
        organizationRights: [],
        productRights: [],
        productVersionInterfaceRights: [],
        productVersionRights: [],
        setupBlueprintRights: [],
        setupBlueprintVersionRights: [],
        setupVersionRights: [],
        solutionRights: [],
        solutionUsesComponentRights: [],
        userRights: []
      }),

      new UserRight({
        id: 1,
        userId: 1,
        userAdministeredId: 1,
        user: {} as any,
        userAdministered: {} as any
      })
    ])

    expect(issues).to.deep.equal([
      'BlueprintConnection: The given reference objects defines further properties which were not mentioned in the schema: description',
      'BlueprintConnectionRight: The given reference objects defines further properties which were not mentioned in the schema: admin, developer, maintainer, reporter',
      'Component: The given reference objects defines further properties which were not mentioned in the schema: description, name',
      'ComponentRight: The given reference objects defines further properties which were not mentioned in the schema: admin, developer, maintainer, reporter',
      'Connection: The given reference objects defines further properties which were not mentioned in the schema: description, latestSetupVersion',
      'ConnectionRight: The given reference objects defines further properties which were not mentioned in the schema: admin, developer, maintainer, reporter',
      'ConnectionPoint: The given reference objects defines further properties which were not mentioned in the schema: description, name',
      'ConnectionPointRight: The given reference objects defines further properties which were not mentioned in the schema: admin, developer, maintainer, reporter',
      'Interface: The given reference objects defines further properties which were not mentioned in the schema: description, name',
      'InterfaceRight: The given reference objects defines further properties which were not mentioned in the schema: admin, developer, maintainer, reporter',
      'InterfaceVersion: The given reference objects defines further properties which were not mentioned in the schema: description, name, version',
      'InterfaceVersionRight: The given reference objects defines further properties which were not mentioned in the schema: admin, developer, maintainer, reporter',
      'Organization: The given reference objects defines further properties which were not mentioned in the schema: description, name',
      'OrganizationRight: The given reference objects defines further properties which were not mentioned in the schema: owner, admin',
      'Product: The given reference objects defines further properties which were not mentioned in the schema: description, name',
      'ProductRight: The given reference objects defines further properties which were not mentioned in the schema: admin, developer, maintainer, reporter',
      'ProductType: The given reference objects defines further properties which were not mentioned in the schema: description, name',
      'ProductVersion: The given reference objects defines further properties which were not mentioned in the schema: description, name, version',
      'ProductVersionRight: The given reference objects defines further properties which were not mentioned in the schema: admin, developer, maintainer, reporter',
      'ProductVersionInterface: The given reference objects defines further properties which were not mentioned in the schema: description',
      'ProductVersionInterfaceRight: The given reference objects defines further properties which were not mentioned in the schema: admin, developer, maintainer, reporter',
      'SetupBlueprint: The given reference objects defines further properties which were not mentioned in the schema: description, name',
      'SetupBlueprintRight: The given reference objects defines further properties which were not mentioned in the schema: admin, developer, maintainer, reporter',
      'SetupBlueprintVersion: The given reference objects defines further properties which were not mentioned in the schema: version, description, name',
      'SetupBlueprintVersionRight: The given reference objects defines further properties which were not mentioned in the schema: admin, developer, maintainer, reporter',
      'SetupVersion: The given reference objects defines further properties which were not mentioned in the schema: version, description, name',
      'SetupVersionRight: The given reference objects defines further properties which were not mentioned in the schema: admin, developer, maintainer, reporter',
      'Solution: The given reference objects defines further properties which were not mentioned in the schema: color, description, name',
      'SolutionRight: The given reference objects defines further properties which were not mentioned in the schema: admin, developer, maintainer, reporter',
      'SolutionUsesComponent: The given reference objects defines further properties which were not mentioned in the schema: description',
      'SolutionUsesComponentRight: The given reference objects defines further properties which were not mentioned in the schema: admin, developer, maintainer, reporter',
      'SolutionUsesProductVersionRight: The given reference objects defines further properties which were not mentioned in the schema: admin, developer, maintainer, reporter',
      'SolutionUsesSetupBlueprintRight: The given reference objects defines further properties which were not mentioned in the schema: admin, developer, maintainer, reporter',
      'User: The given reference objects defines further properties which were not mentioned in the schema: active, email, firstName, lastName, passwordHash, passwordResetToken, passwordResetTokenCreationDate, registerToken, registerTokenCreationDate, salt, token',
      'UserRight: The given reference objects defines further properties which were not mentioned in the schema: admin'
      ], '\n' + issues.join('\n') + '\n')
  })
})