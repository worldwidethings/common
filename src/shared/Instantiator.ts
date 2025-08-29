import { ChangeResult, CountResult, GetResult, Result } from 'coderitter-api-rmc'
import { UserCheckTokenResult, UserLoginResult } from './api/userApi'
import { Organization } from './domain/organization/Organization'
import { User } from './domain/organization/User'
import { BlueprintConnection } from './domain/product/BlueprintConnection'
import { ConnectionPoint } from './domain/product/ConnectionPoint'
import { Interface } from './domain/product/Interface'
import { InterfaceVersion } from './domain/product/InterfaceVersion'
import { OffersInterfaceVersion } from './domain/product/OffersInterfaceVersion'
import { Product } from './domain/product/Product'
import { ProductType } from './domain/product/ProductType'
import { ProductVersion } from './domain/product/ProductVersion'
import { SetupBlueprint } from './domain/product/SetupBlueprint'
import { SetupBlueprintVersion } from './domain/product/SetupBlueprintVersion'
import { BlueprintConnectionRight } from './domain/right/BlueprintConnectionRight'
import { ComponentPartOfSolutionRight } from './domain/right/ComponentPartOfSolutionRight'
import { ComponentRight } from './domain/right/ComponentRight'
import { ConnectionPointRight } from './domain/right/ConnectionPointRight'
import { ConnectionRight } from './domain/right/ConnectionRight'
import { InterfaceRight } from './domain/right/InterfaceRight'
import { InterfaceVersionRight } from './domain/right/InterfaceVersionRight'
import { OffersInterfaceVersionRight } from './domain/right/OffersInterfaceVersionRight'
import { OrganizationRight } from './domain/right/OrganizationRight'
import { ProductRight } from './domain/right/ProductRight'
import { ProductVersionRight } from './domain/right/ProductVersionRight'
import { SetupBlueprintRight } from './domain/right/SetupBlueprintRight'
import { SetupBlueprintVersionRight } from './domain/right/SetupBlueprintVersionRight'
import { SetupVersionRight } from './domain/right/SetupVersionRight'
import { SolutionRight } from './domain/right/SolutionRight'
import { UserRight } from './domain/right/UserRight'
import { Component } from './domain/solution/Component'
import { ComponentPartOfSolution } from './domain/solution/ComponentPartOfSolution'
import { Connection } from './domain/solution/Connection'
import { SetupVersion } from './domain/solution/SetupVersion'
import { Solution } from './domain/solution/Solution'

export const instantiator = {
    Result: () => new Result,
    ChangeResult: () => new ChangeResult,
    GetResult: () => new GetResult,
    CountResult: () => new CountResult,

    UserSetPasswordParameters: () => new UserLoginResult,
    UserCheckTokenResult: () => new UserCheckTokenResult,

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
    UserRight: () => new UserRight
} as { [className: string]: () => any }
