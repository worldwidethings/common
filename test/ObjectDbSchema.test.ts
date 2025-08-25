import { expect } from 'chai'
import { checkSchema } from 'knight-object-db'
import 'mocha'
import { BlueprintConnection, Component, ComponentPartOfSolution, ComponentPartOfSolutionRight, ComponentRight, Connection, ConnectionPoint, ConnectionRight, Interface, InterfaceVersion, objectDbSchema, OffersInterfaceVersion, Organization, Product, ProductType, ProductVersion, SetupBlueprint, SetupBlueprintVersion, SetupVersion, SetupVersionRight, Solution, SolutionRight, User, UserGroup } from '../src'
import { OrganizationRight } from '../src/shared/domain/organization/rights/OrganizationRight'
import { UserInGroup } from '../src/shared/domain/organization/UserInGroup'
import { BlueprintConnectionRight } from '../src/shared/domain/product/rights/BlueprintConnectionRight'
import { ConnectionPointRight } from '../src/shared/domain/product/rights/ConnectionPointRight'
import { InterfaceRight } from '../src/shared/domain/product/rights/InterfaceRight'
import { InterfaceVersionRight } from '../src/shared/domain/product/rights/InterfaceVersionRight'
import { OffersInterfaceVersionRight } from '../src/shared/domain/product/rights/OffersInterfaceVersionRight'
import { ProductRight } from '../src/shared/domain/product/rights/ProductRight'
import { ProductVersionRight } from '../src/shared/domain/product/rights/ProductVersionRight'
import { SetupBlueprintRight } from '../src/shared/domain/product/rights/SetupBlueprintRight'
import { SetupBlueprintVersionRight } from '../src/shared/domain/product/rights/SetupBlueprintVersionRight'

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
        userGroupId: 1,
        blueprintConnection: {} as any,
        user: {} as any,
        userGroup: {} as any
      }),

      new ComponentPartOfSolution({
        id: 1,
        componentId: 1,
        solutionId: 1,
        component: {} as any,
        rights: [],
        solution: {} as any
      }),

      new ComponentPartOfSolutionRight({
        id: 1,
        componentPartOfSolutionId: 1,
        userId: 1,
        userGroupId: 1,
        componentPartOfSolution: {} as any,
        user: {} as any,
        userGroup: {} as any
      }),

      new Component({
        id: 1,
        organizationId: 1,
        productVersionId: 1,
        componentPartOfSolutions: [],
        connections: [],
        organization: {} as any,
        productVersion: {} as any,
        rights: [],
        setupConnections: [],
        setupVersions: []
      }),

      new ComponentRight({
        id: 1,
        componentId: 1,
        userId: 1,
        userGroupId: 1,
        component: {} as any,
        user: {} as any,
        userGroup: {} as any
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
        userGroupId: 1,
        connection: {} as any,
        user: {} as any,
        userGroup: {} as any
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
        userGroupId: 1,
        connectionPoint: {} as any,
        user: {} as any,
        userGroup: {} as any
      }),

      new Interface({
        id: 1,
        interfaceVersions: [],
        rights: []
      }),

      new InterfaceRight({
        id: 1,
        interfaceId: 1,
        userId: 1,
        userGroupId: 1,
        interface: {} as any,
        user: {} as any,
        userGroup: {} as any
      }),

      new InterfaceVersion({
        id: 1,
        interfaceId: 1,
        connectionPoints: [],
        interface: {} as any,
        offersInterfaceVersions: [],
        rights: []
      }),

      new InterfaceVersionRight({
        id: 1,
        interfaceVersionId: 1,
        userId: 1,
        userGroupId: 1,
        interfaceVersion: {} as any,
        user: {} as any,
        userGroup: {} as any
      }),

      new OffersInterfaceVersion({
        id: 1,
        interfaceVersionId: 1,
        productVersionId: 1,
        interfaceVersion: {} as any,
        productVersion: {} as any,
        rights: []
      }),

      new OffersInterfaceVersionRight({
        id: 1,
        offersInterfaceVersionId: 1,
        userId: 1,
        userGroupId: 1,
        offersInterfaceVersion: {} as any,
        user: {} as any,
        userGroup: {} as any
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
        userGroupId: 1,
        organization: {} as any,
        user: {} as any,
        userGroup: {} as any
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
        userGroupId: 1,
        product: {} as any,
        user: {} as any,
        userGroup: {} as any
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
        offersInterfaceVersions: [],
        product: {} as any,
        rights: [],
        setupBlueprints: []
      }),

      new ProductVersionRight({
        id: 1,
        productVersionId: 1,
        userId: 1,
        userGroupId: 1,
        productVersion: {} as any,
        user: {} as any,
        userGroup: {} as any
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
        userGroupId: 1,
        setupBlueprint: {} as any,
        user: {} as any,
        userGroup: {} as any
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
        userGroupId: 1,
        setupBlueprintVersion: {} as any,
        user: {} as any,
        userGroup: {} as any
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
        userGroupId: 1,
        setupVersion: {} as any,
        user: {} as any,
        userGroup: {} as any
      }),

      new Solution({
        id: 1,
        organizationId: 1,
        componentPartOfSolutions: [],
        organization: {} as any,
        rights: []
      }),

      new SolutionRight({
        id: 1,
        solutionId: 1,
        userId: 1,
        userGroupId: 1,
        solution: {} as any,
        user: {} as any,
        userGroup: {} as any
      }),

      new User({
        id: 1,
        blueprintConnectionRights: [],
        componentRights: [],
        componentPartOfSolutionRights: [],
        connectionPointRights: [],
        connectionRights: [],
        interfaceRights: [],
        offersInterfaceVersionRights: [],
        organizationRights: [],
        productRights: [],
        productVersionRights: [],
        setupBlueprintRights: [],
        setupBlueprintVersionRights: [],
        setupVersionRights: [],
        solutionRights: [],
        userInGroups: []
      }),

      new UserGroup({
        id: 1,
        organizationId: 1,
        blueprintConnectionRights: [],
        componentRights: [],
        componentPartOfSolutionRights: [],
        connectionPointRights: [],
        connectionRights: [],
        interfaceRights: [],
        offersInterfaceVersionRights: [],
        organization: {} as any,
        organizationRights: [],
        productRights: [],
        productVersionRights: [],
        setupBlueprintRights: [],
        setupBlueprintVersionRights: [],
        setupVersionRights: [],
        solutionRights: [],
        userInGroups: []
      }),

      new UserInGroup({
        id: 1,
        userId: 1,
        userGroupId: 1,
        user: {} as any,
        userGroup: {} as any
      })
    ])

    expect(issues).to.deep.equal([
      'BlueprintConnection: The given reference objects defines further properties which were not mentioned in the schema: creationDate, description',
      'BlueprintConnectionRight: The given reference objects defines further properties which were not mentioned in the schema: right',
      'ComponentPartOfSolution: The given reference objects defines further properties which were not mentioned in the schema: creationDate, description',
      'ComponentPartOfSolutionRight: The given reference objects defines further properties which were not mentioned in the schema: right',
      'Component: The given reference objects defines further properties which were not mentioned in the schema: creationDate, description, name',
      'ComponentRight: The given reference objects defines further properties which were not mentioned in the schema: right',
      'Connection: The given reference objects defines further properties which were not mentioned in the schema: creationDate, description, latestSetupVersion',
      'ConnectionRight: The given reference objects defines further properties which were not mentioned in the schema: right',
      'ConnectionPoint: The given reference objects defines further properties which were not mentioned in the schema: creationDate, description, name',
      'ConnectionPointRight: The given reference objects defines further properties which were not mentioned in the schema: right',
      'Interface: The given reference objects defines further properties which were not mentioned in the schema: creationDate, description, name',
      'InterfaceRight: The given reference objects defines further properties which were not mentioned in the schema: right',
      'InterfaceVersion: The given reference objects defines further properties which were not mentioned in the schema: creationDate, description, name, version',
      'InterfaceVersionRight: The given reference objects defines further properties which were not mentioned in the schema: right',
      'OffersInterfaceVersion: The given reference objects defines further properties which were not mentioned in the schema: creationDate, description',
      'OffersInterfaceVersionRight: The given reference objects defines further properties which were not mentioned in the schema: right',
      'Organization: The given reference objects defines further properties which were not mentioned in the schema: creationDate, description, name',
      'OrganizationRight: The given reference objects defines further properties which were not mentioned in the schema: right',
      'Product: The given reference objects defines further properties which were not mentioned in the schema: creationDate, description, name',
      'ProductRight: The given reference objects defines further properties which were not mentioned in the schema: right',
      'ProductType: The given reference objects defines further properties which were not mentioned in the schema: creationDate, description, name, parentId, parent',
      'ProductVersion: The given reference objects defines further properties which were not mentioned in the schema: creationDate, description, name, version',
      'ProductVersionRight: The given reference objects defines further properties which were not mentioned in the schema: right',
      'SetupBlueprint: The given reference objects defines further properties which were not mentioned in the schema: creationDate, description, name',
      'SetupBlueprintRight: The given reference objects defines further properties which were not mentioned in the schema: right',
      'SetupBlueprintVersion: The given reference objects defines further properties which were not mentioned in the schema: version, creationDate, description, name',
      'SetupBlueprintVersionRight: The given reference objects defines further properties which were not mentioned in the schema: right',
      'SetupVersion: The given reference objects defines further properties which were not mentioned in the schema: version, creationDate, description, name',
      'SetupVersionRight: The given reference objects defines further properties which were not mentioned in the schema: right',
      'Solution: The given reference objects defines further properties which were not mentioned in the schema: color, creationDate, description, name',
      'SolutionRight: The given reference objects defines further properties which were not mentioned in the schema: right',
      'User: The given reference objects defines further properties which were not mentioned in the schema: active, creationDate, email, firstName, lastName, passwordHash, passwordResetToken, passwordResetTokenCreationDate, registerToken, registerTokenCreationDate, salt, token',
      'UserGroup: The given reference objects defines further properties which were not mentioned in the schema: name, description'
      ], '\n' + issues.join('\n') + '\n')
  })
})