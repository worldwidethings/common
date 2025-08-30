import { ChangeResult, CountResult, GetResult, Result } from 'coderitter-api-rmc'
import { UserCheckTokenResult, UserLoginResult } from './api/userApi'
import { Organization } from './entity/organization/Organization'
import { User } from './entity/organization/User'
import { BlueprintConnection } from './entity/product/BlueprintConnection'
import { ConnectionPoint } from './entity/product/ConnectionPoint'
import { Interface } from './entity/product/Interface'
import { InterfaceVersion } from './entity/product/InterfaceVersion'
import { Product } from './entity/product/Product'
import { ProductType } from './entity/product/ProductType'
import { ProductVersion } from './entity/product/ProductVersion'
import { ProductVersionInterface } from './entity/product/ProductVersionInterface'
import { SetupBlueprint } from './entity/product/SetupBlueprint'
import { SetupBlueprintVersion } from './entity/product/SetupBlueprintVersion'
import { BlueprintConnectionRight } from './entity/right/BlueprintConnectionRight'
import { ComponentRight } from './entity/right/ComponentRight'
import { ConnectionPointRight } from './entity/right/ConnectionPointRight'
import { ConnectionRight } from './entity/right/ConnectionRight'
import { InterfaceRight } from './entity/right/InterfaceRight'
import { InterfaceVersionRight } from './entity/right/InterfaceVersionRight'
import { OrganizationRight } from './entity/right/OrganizationRight'
import { ProductRight } from './entity/right/ProductRight'
import { ProductVersionInterfaceRight } from './entity/right/ProductVersionInterfaceRight'
import { ProductVersionRight } from './entity/right/ProductVersionRight'
import { SetupBlueprintRight } from './entity/right/SetupBlueprintRight'
import { SetupBlueprintVersionRight } from './entity/right/SetupBlueprintVersionRight'
import { SetupVersionRight } from './entity/right/SetupVersionRight'
import { SolutionRight } from './entity/right/SolutionRight'
import { SolutionUsesComponentRight } from './entity/right/SolutionUsesComponentRight'
import { UserRight } from './entity/right/UserRight'
import { Component } from './entity/solution/Component'
import { Connection } from './entity/solution/Connection'
import { SetupVersion } from './entity/solution/SetupVersion'
import { Solution } from './entity/solution/Solution'
import { SolutionUsesComponent } from './entity/solution/SolutionUsesComponent'

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
    Connection: () => new Connection,
    ConnectionRight: () => new ConnectionRight,
    ConnectionPoint: () => new ConnectionPoint,
    ConnectionPointRight: () => new ConnectionPointRight,
    Interface: () => new Interface,
    InterfaceRight: () => new InterfaceRight,
    InterfaceVersion: () => new InterfaceVersion,
    InterfaceVersionRight: () => new InterfaceVersionRight,
    ProductVersionInterface: () => new ProductVersionInterface,
    ProductVersionInterfaceRight: () => new ProductVersionInterfaceRight,
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
    SolutionUsesComponent: () => new SolutionUsesComponent,
    SolutionUsesComponentRight: () => new SolutionUsesComponentRight,
    User: () => new User,
    UserRight: () => new UserRight
} as { [className: string]: () => any }
