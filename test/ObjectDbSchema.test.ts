import { expect } from 'chai'
import { checkSchema } from 'knight-object-db'
import 'mocha'
import { BlueprintConnection, Component, ComponentPartOfSolution, Connection, ConnectionPoint, Interface, InterfaceVersion, objectDbSchema, OffersInterfaceVersion, Organization, Product, ProductType, ProductVersion, SetupBlueprint, SetupBlueprintVersion, SetupVersion, Solution, User, UserRightForSolution } from '../src'

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
        setupBlueprintVersion: {} as any
      }),

      new Component({
        id: 1,
        organizationId: 1,
        productVersionId: 1,
        componentPartOfSolutions: [],
        connections: [],
        organization: {} as any,
        productVersion: {} as any,
        setupConnections: [],
        setupVersions: []
      }),

      new ComponentPartOfSolution({
        id: 1,
        componentId: 1,
        solutionId: 1,
        component: {} as any,
        solution: {} as any
      }),

      new Connection({
        id: 1,
        connectedComponentId: 1,
        setupComponentId: 1,
        setupVersionId: 1,
        connectionPointId: 1,
        connectedComponent: {} as any,
        setupComponent: {} as any,
        setupVersion: {} as any,
        connectionPoint: {} as any
      }),

      new ConnectionPoint({
        id: 1,
        interfaceVersionId: 1,
        connections: [],
        blueprintConnections: [],
        interfaceVersion: {} as any
      }),

      new Interface({
        id: 1,
        interfaceVersions: []
      }),

      new InterfaceVersion({
        id: 1,
        interfaceId: 1,
        connectionPoints: [],
        interface: {} as any,
        offersInterfaceVersions: []
      }),

      new OffersInterfaceVersion({
        id: 1,
        interfaceVersionId: 1,
        productVersionId: 1,
        interfaceVersion: {} as any,
        productVersion: {} as any
      }),

      new Organization({
        id: 1,
        components: [],
        products: [],
        setupBlueprints: [],
        solutions: []
      }),

      new Product({
        id: 1,
        organizationId: 1,
        productTypeId: 1,
        organization: {} as any,
        productType: {} as any,
        productVersions: []
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
        setupBlueprints: []
      }),

      new SetupBlueprint({
        id: 1,
        organizationId: 1,
        productVersionId: 1,
        organization: {} as any,
        productVersion: {} as any,
        setupBlueprintVersions: []
      }),

      new SetupBlueprintVersion({
        id: 1,
        setupBlueprintId: 1,
        blueprintConnections: [],
        setupBlueprint: {} as any,
        setupVersions: []
      }),

      new SetupVersion({
        id: 1,
        componentId: 1,
        setupBlueprintVersionId: 1,
        component: {} as any,
        connections: [],
        setupBlueprintVersion: {} as any
      }),

      new Solution({
        id: 1,
        organizationId: 1,
        componentPartOfSolutions: [],
        organization: {} as any
      }),

      new User({
        id: 1,
        organizationId: 1,
        organization: {} as any,
        userRightForSolutions: []
      }),

      new UserRightForSolution({
        id: 1,
        solutionId: 1,
        userId: 1,
        solution: {} as any,
        user: {} as any
      })
    ])

    expect(issues.length).to.equal(18, '\n' + issues.join('\n'))
  })
})