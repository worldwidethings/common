import { ChangeResult, CountResult, GetResult, Result } from 'coderitter-api-rmc'
import { Organization } from './domain/organization/Organization'
import { OrganizationRight } from './domain/organization/rights/OrganizationRight'
import { User } from './domain/organization/User'
import { UserGroup } from './domain/organization/UserGroup'
import { BlueprintConnection } from './domain/product/BlueprintConnection'
import { ConnectionPoint } from './domain/product/ConnectionPoint'
import { Interface } from './domain/product/Interface'
import { InterfaceVersion } from './domain/product/InterfaceVersion'
import { OffersInterfaceVersion } from './domain/product/OffersInterfaceVersion'
import { Product } from './domain/product/Product'
import { ProductType } from './domain/product/ProductType'
import { ProductVersion } from './domain/product/ProductVersion'
import { BlueprintConnectionRight } from './domain/product/rights/BlueprintConnectionRight'
import { ConnectionPointRight } from './domain/product/rights/ConnectionPointRight'
import { InterfaceRight } from './domain/product/rights/InterfaceRight'
import { InterfaceVersionRight } from './domain/product/rights/InterfaceVersionRight'
import { OffersInterfaceVersionRight } from './domain/product/rights/OffersInterfaceVersionRight'
import { ProductRight } from './domain/product/rights/ProductRight'
import { ProductVersionRight } from './domain/product/rights/ProductVersionRight'
import { SetupBlueprintRight } from './domain/product/rights/SetupBlueprintRight'
import { SetupBlueprintVersionRight } from './domain/product/rights/SetupBlueprintVersionRight'
import { SetupBlueprint } from './domain/product/SetupBlueprint'
import { SetupBlueprintVersion } from './domain/product/SetupBlueprintVersion'
import { Component } from './domain/solution/Component'
import { ComponentPartOfSolution } from './domain/solution/ComponentPartOfSolution'
import { Connection } from './domain/solution/Connection'
import { ComponentPartOfSolutionRight } from './domain/solution/rights/ComponentPartOfSolutionRight'
import { ComponentRight } from './domain/solution/rights/ComponentRight'
import { ConnectionRight } from './domain/solution/rights/ConnectionRight'
import { SetupVersionRight } from './domain/solution/rights/SetupVersionRight'
import { SolutionRight } from './domain/solution/rights/SolutionRight'
import { SetupVersion } from './domain/solution/SetupVersion'
import { Solution } from './domain/solution/Solution'

export const instantiator = {
    Result: () => new Result,
    ChangeResult: () => new ChangeResult,
    GetResult: () => new GetResult,
    CountResult: () => new CountResult,

    BlueprintConnection: () => new BlueprintConnection,
    BlueprintConnectionRight: () => new BlueprintConnectionRight,
    Component: () => new Component,
    ComponentRight: () => new ComponentRight,
    ComponentPartOfSolution: () => new ComponentPartOfSolution,
    ComponentPartOfSolutionRight: () => new ComponentPartOfSolutionRight,
    Connection: () => new Connection,
    ConnectionRight: () => new ConnectionRight,
    ConnectionPoint: () => new ConnectionPoint,
    ConnectionPointRight: () => new ConnectionPointRight,
    Interface: () => new Interface,
    InterfaceRight: () => new InterfaceRight,
    InterfaceVersion: () => new InterfaceVersion,
    InterfaceVersionRight: () => new InterfaceVersionRight,
    OffersInterfaceVersion: () => new OffersInterfaceVersion,
    OffersInterfaceVersionRight: () => new OffersInterfaceVersionRight,
    Organization: () => new Organization,
    OrganizationRight: () => new OrganizationRight,
    Product: () => new Product,
    ProductRight: () => new ProductRight,
    ProductType: () => new ProductType,
    ProductVersion: () => new ProductVersion,
    ProductVersionRight: () => new ProductVersionRight,
    SetupBlueprint: () => new SetupBlueprint,
    SetupBlueprintRight: () => new SetupBlueprintRight,
    SetupBlueprintVersion: () => new SetupBlueprintVersion,
    SetupBlueprintVersionRight: () => new SetupBlueprintVersionRight,
    SetupVersion: () => new SetupVersion,
    SetupVersionRight: () => new SetupVersionRight,
    Solution: () => new Solution,
    SolutionRight: () => new SolutionRight,
    User: () => new User,
    UserGroup: () => new UserGroup
} as { [className: string]: () => any }
