import { ChangeResult, CountResult, GetResult, Result } from 'coderitter-api-rmc'
import { BlueprintConnection } from './domain/BlueprintConnection'
import { Component } from './domain/Component'
import { ComponentPartOfSolution } from './domain/ComponentPartOfSolution'
import { Connection } from './domain/Connection'
import { ConnectionPoint } from './domain/ConnectionPoint'
import { Interface } from './domain/Interface'
import { InterfaceVersion } from './domain/InterfaceVersion'
import { OffersInterfaceVersion } from './domain/OffersInterfaceVersion'
import { Organization } from './domain/Organization'
import { Product } from './domain/Product'
import { ProductType } from './domain/ProductType'
import { ProductVersion } from './domain/ProductVersion'
import { SetupBlueprint } from './domain/SetupBlueprint'
import { SetupBlueprintVersion } from './domain/SetupBlueprintVersion'
import { SetupVersion } from './domain/SetupVersion'
import { Solution } from './domain/Solution'
import { User } from './domain/User'
import { UserRightForSolution } from './domain/UserRightForSolution'

export const instantiator = {
    Result: () => new Result,
    ChangeResult: () => new ChangeResult,
    GetResult: () => new GetResult,
    CountResult: () => new CountResult,

    BlueprintConnection: () => new BlueprintConnection,
    Component: () => new Component,
    ComponentPartOfSolution: () => new ComponentPartOfSolution,
    Connection: () => new Connection,
    ConnectionPoint: () => new ConnectionPoint,
    Interface: () => new Interface,
    InterfaceVersion: () => new InterfaceVersion,
    OffersInterfaceVersion: () => new OffersInterfaceVersion,
    Organization: () => new Organization,
    Product: () => new Product,
    ProductType: () => new ProductType,
    ProductVersion: () => new ProductVersion,
    SetupBlueprint: () => new SetupBlueprint,
    SetupBlueprintVersion: () => new SetupBlueprintVersion,
    SetupVersion: () => new SetupVersion,
    Solution: () => new Solution,
    User: () => new User,
    UserRightForSolution: () => new UserRightForSolution
} as { [className: string]: () => any }
