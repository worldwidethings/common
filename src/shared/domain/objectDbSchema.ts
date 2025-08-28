import type { Schema } from 'knight-object-db'

export const objectDbSchema = {
  'BlueprintConnection': {
    idProps: ['id'],
    relationships: {
      'connectionPoint': {
         manyToOne: true,
         thisId: 'connectionPointId',
         otherEntity: 'ConnectionPoint',
         otherId: 'id'
      },
      'productVersion': {
         manyToOne: true,
         thisId: 'productVersionId',
         otherEntity: 'ProductVersion',
         otherId: 'id'
      },
      'rights': {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'BlueprintConnectionRight',
        otherId: 'blueprintConnectionId'
      },
      'setupBlueprintVersion': {
         manyToOne: true,
         thisId: 'setupBlueprintVersionId',
         otherEntity: 'SetupBlueprintVersion',
         otherId: 'id'
      }
    }
  },

  'BlueprintConnectionRight': {
    idProps: [ 'id' ],
    relationships: {
      'blueprintConnection': {
        manyToOne: true,
        thisId: 'blueprintConnectionId',
        otherEntity: 'BlueprintConnection',
        otherId: 'id'
      },
      'user': {
        manyToOne: true,
        thisId: 'userId',
        otherEntity: 'User',
        otherId: 'id'
      },
      'userGroup': {
        manyToOne: true,
        thisId: 'userGroupId',
        otherEntity: 'UserGroup',
        otherId: 'id'
      }
    }
  },

  'ComponentPartOfSolution': {
    idProps: [ 'id' ],
    relationships: {
      'component': {
        manyToOne: true,
        thisId: 'componentId',
        otherEntity: 'Component',
        otherId: 'id'
      },
      'rights': {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'ComponentPartOfSolutionRight',
        otherId: 'componentPartOfSolutionId'
      },
      'solution': {
        manyToOne: true,
        thisId: 'solutionId',
        otherEntity: 'Solution',
        otherId: 'id'
      }
    }
  },

  'ComponentPartOfSolutionRight': {
    idProps: [ 'id' ],
    relationships: {
      'componentPartOfSolution': {
        manyToOne: true,
        thisId: 'componentPartOfSolutionId',
        otherEntity: 'ComponentPartOfSolution',
        otherId: 'id'
      },
      'user': {
        manyToOne: true,
        thisId: 'userId',
        otherEntity: 'User',
        otherId: 'id'
      },
      'userGroup': {
        manyToOne: true,
        thisId: 'userGroupId',
        otherEntity: 'UserGroup',
        otherId: 'id'
      }
    }
  },

  'Component': {
    idProps: [ 'id' ],
    relationships: {
      'componentPartOfSolutions': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'ComponentPartOfSolution',
         otherId: 'componentId'
      },
      'connections': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'Connection',
         otherId: 'connectedComponentId'
      },
      'organization': {
        manyToOne: true,
        thisId: 'organizationId',
        otherEntity: 'Organization',
        otherId: 'id'
      },
      'productVersion': {
        manyToOne: true,
        thisId: 'productVersionId',
        otherEntity: 'ProductVersion',
        otherId: 'id'
      },
      'rights': {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'ComponentRight',
        otherId: 'componentId'
      },
      'setupConnections': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'Connection',
         otherId: 'setupComponentId'
      },
      'setupVersions': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'SetupVersion',
         otherId: 'componentId'
      }
    }
  },

  'ComponentRight': {
    idProps: [ 'id' ],
    relationships: {
      'component': {
        manyToOne: true,
        thisId: 'componentId',
        otherEntity: 'Component',
        otherId: 'id'
      },
      'user': {
        manyToOne: true,
        thisId: 'userId',
        otherEntity: 'User',
        otherId: 'id'
      },
      'userGroup': {
        manyToOne: true,
        thisId: 'userGroupId',
        otherEntity: 'UserGroup',
        otherId: 'id'
      }
    }
  },

  'Connection': {
    idProps: [ 'id' ],
    relationships: {
      'connectedComponent': {
        manyToOne: true,
        thisId: 'connectedComponentId',
        otherEntity: 'Component',
        otherId: 'id'
      },
      'rights': {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'ConnectionRight',
        otherId: 'connectionId'
      },
      'setupComponent': {
        manyToOne: true,
        thisId: 'setupComponentId',
        otherEntity: 'Component',
        otherId: 'id'
      },
      'setupVersion': {
        manyToOne: true,
        thisId: 'setupVersionId',
        otherEntity: 'SetupVersion',
        otherId: 'id'
      },
      'connectionPoint': {
        manyToOne: true,
        thisId: 'connectionPointId',
        otherEntity: 'ConnectionPoint',
        otherId: 'id'
      }
    }
  },

  'ConnectionRight': {
    idProps: [ 'id' ],
    relationships: {
      'connection': {
        manyToOne: true,
        thisId: 'connectionId',
        otherEntity: 'Connection',
        otherId: 'id'
      },
      'user': {
        manyToOne: true,
        thisId: 'userId',
        otherEntity: 'User',
        otherId: 'id'
      },
      'userGroup': {
        manyToOne: true,
        thisId: 'userGroupId',
        otherEntity: 'UserGroup',
        otherId: 'id'
      }
    }
  },

  'ConnectionPoint': {
    idProps: [ 'id' ],
    relationships: {
      'connections': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'Connection',
         otherId: 'connectionPointId'
      },
      'blueprintConnections': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'BlueprintConnection',
         otherId: 'connectionPointId'
      },
      'interfaceVersion': {
        manyToOne: true,
        thisId: 'interfaceVersionId',
        otherEntity: 'InterfaceVersion',
        otherId: 'id'
      },
      'rights': {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'ConnectionPointRight',
        otherId: 'connectionPointId'
      }
    }
  },

  'ConnectionPointRight': {
    idProps: [ 'id' ],
    relationships: {
      'connectionPoint': {
        manyToOne: true,
        thisId: 'connectionPointId',
        otherEntity: 'ConnectionPoint',
        otherId: 'id'
      },
      'user': {
        manyToOne: true,
        thisId: 'userId',
        otherEntity: 'User',
        otherId: 'id'
      },
      'userGroup': {
        manyToOne: true,
        thisId: 'userGroupId',
        otherEntity: 'UserGroup',
        otherId: 'id'
      }
    }
  },

  'Interface': {
    idProps: [ 'id' ],
    relationships: {
      'interfaceVersions': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'InterfaceVersion',
         otherId: 'interfaceId'
      },
      'organization': {
        manyToOne: true,
        thisId: 'organizationId',
        otherEntity: 'Organization',
        otherId: 'id'
      },
      'rights': {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'InterfaceRight',
        otherId: 'interfaceId'
      }
    }
  },

  'InterfaceRight': {
    idProps: [ 'id' ],
    relationships: {
      'interface': {
        manyToOne: true,
        thisId: 'interfaceId',
        otherEntity: 'Interface',
        otherId: 'id'
      },
      'user': {
        manyToOne: true,
        thisId: 'userId',
        otherEntity: 'User',
        otherId: 'id'
      },
      'userGroup': {
        manyToOne: true,
        thisId: 'userGroupId',
        otherEntity: 'UserGroup',
        otherId: 'id'
      }
    }
  },

  'InterfaceVersion': {
    idProps: [ 'id' ],
    relationships: {
      'connectionPoints': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'ConnectionPoint',
         otherId: 'interfaceVersionId'
      },
      'interface': {
        manyToOne: true,
        thisId: 'interfaceId',
        otherEntity: 'Interface',
        otherId: 'id'
      },
      'offersInterfaceVersions': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'OffersInterfaceVersion',
         otherId: 'interfaceVersionId'
      },
      'rights': {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'InterfaceVersionRight',
        otherId: 'interfaceVersionId'
      }
    }
  },

  'InterfaceVersionRight': {
    idProps: [ 'id' ],
    relationships: {
      'interfaceVersion': {
        manyToOne: true,
        thisId: 'interfaceVersionId',
        otherEntity: 'InterfaceVersion',
        otherId: 'id'
      },
      'user': {
        manyToOne: true,
        thisId: 'userId',
        otherEntity: 'User',
        otherId: 'id'
      },
      'userGroup': {
        manyToOne: true,
        thisId: 'userGroupId',
        otherEntity: 'UserGroup',
        otherId: 'id'
      }
    }
  },

  'OffersInterfaceVersion': {
    idProps: [ 'id' ],
    relationships: {
      'interfaceVersion': {
         manyToOne: true,
         thisId: 'interfaceVersionId',
         otherEntity: 'InterfaceVersion',
         otherId: 'id'
      },
      'productVersion': {
         manyToOne: true,
         thisId: 'productVersionId',
         otherEntity: 'ProductVersion',
         otherId: 'id'
      },
      'rights': {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'OffersInterfaceVersionRight',
        otherId: 'offersInterfaceVersionId'
      }
    }
  },

  'OffersInterfaceVersionRight': {
    idProps: [ 'id' ],
    relationships: {
      'offersInterfaceVersion': {
        manyToOne: true,
        thisId: 'offersInterfaceVersionId',
        otherEntity: 'OffersInterfaceVersion',
        otherId: 'id'
      },
      'user': {
        manyToOne: true,
        thisId: 'userId',
        otherEntity: 'User',
        otherId: 'id'
      },
      'userGroup': {
        manyToOne: true,
        thisId: 'userGroupId',
        otherEntity: 'UserGroup',
        otherId: 'id'
      }
    }
  },

  'Organization': {
    idProps: [ 'id' ],
    relationships: {
      'components': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'Component',
         otherId: 'organizationId'
      },
      'organizationRights': {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'OrganizationRight',
        otherId: 'organizationId'
      },
      'products': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'Product',
         otherId: 'organizationId'
      },
      'rights': {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'OrganizationRight',
        otherId: 'organizationId'
      },
      'setupBlueprints': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'SetupBlueprint',
         otherId: 'organizationId'
      },
      'solutions': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'Solution',
         otherId: 'organizationId'
      }
    }
  },

  'OrganizationRight': {
    idProps: [ 'id' ],
    relationships: {
      'organization': {
        manyToOne: true,
        thisId: 'organizationId',
        otherEntity: 'Organization',
        otherId: 'id'
      },
      'user': {
        manyToOne: true,
        thisId: 'userId',
        otherEntity: 'User',
        otherId: 'id'
      },
      'userGroup': {
        manyToOne: true,
        thisId: 'userGroupId',
        otherEntity: 'UserGroup',
        otherId: 'id'
      }
    }
  },

  'Product': {
    idProps: [ 'id' ],
    relationships: {
      'organization': {
         manyToOne: true,
         thisId: 'organizationId',
         otherEntity: 'Organization',
         otherId: 'id'
      },
      'productType': {
         manyToOne: true,
         thisId: 'productTypeId',
         otherEntity: 'ProductType',
         otherId: 'id'
      },
      'productVersions': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'ProductVersion',
         otherId: 'productId'
      },
      'rights': {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'ProductRight',
        otherId: 'productId'
      },
    }
  },

  'ProductRight': {
    idProps: [ 'id' ],
    relationships: {
      'product': {
        manyToOne: true,
        thisId: 'productId',
        otherEntity: 'Product',
        otherId: 'id'
      },
      'user': {
        manyToOne: true,
        thisId: 'userId',
        otherEntity: 'User',
        otherId: 'id'
      },
      'userGroup': {
        manyToOne: true,
        thisId: 'userGroupId',
        otherEntity: 'UserGroup',
        otherId: 'id'
      }
    }
  },

  'ProductType': {
    idProps: [ 'id' ],
    relationships: {
      'products': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'Product',
         otherId: 'productTypeId'
      }
    }
  },

  'ProductVersion': {
    idProps: [ 'id' ],
    relationships: {
      'blueprintConnections': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'BlueprintConnection',
         otherId: 'productVersionId'
      },
      'components': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'Component',
         otherId: 'productVersionId'
      },
      'offersInterfaceVersions': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'OffersInterfaceVersion',
         otherId: 'productVersionId'
      },
      'product': {
         manyToOne: true,
         thisId: 'productId',
         otherEntity: 'Product',
         otherId: 'id'
      },
      'rights': {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'ProductVersionRight',
        otherId: 'productVersionId'
      },
      'setupBlueprints': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'SetupBlueprint',
         otherId: 'productVersionId'
      }
    }
  },

  'ProductVersionRight': {
    idProps: [ 'id' ],
    relationships: {
      'productVersion': {
        manyToOne: true,
        thisId: 'productVersionId',
        otherEntity: 'ProductVersion',
        otherId: 'id'
      },
      'user': {
        manyToOne: true,
        thisId: 'userId',
        otherEntity: 'User',
        otherId: 'id'
      },
      'userGroup': {
        manyToOne: true,
        thisId: 'userGroupId',
        otherEntity: 'UserGroup',
        otherId: 'id'
      }
    }
  },

  'SetupBlueprint': {
    idProps: [ 'id' ],
    relationships: {
      'organization': {
         manyToOne: true,
         thisId: 'organizationId',
         otherEntity: 'Organization',
         otherId: 'id'
      },
      'productVersion': {
         manyToOne: true,
         thisId: 'productVersionId',
         otherEntity: 'ProductVersion',
         otherId: 'id'
      },
      'rights': {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'SetupBlueprintRight',
        otherId: 'setupBlueprintId'
      },
      'setupBlueprintVersions': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'SetupBlueprintVersion',
         otherId: 'setupBlueprintId'
      }
    }
  },

  'SetupBlueprintRight': {
    idProps: [ 'id' ],
    relationships: {
      'setupBlueprint': {
        manyToOne: true,
        thisId: 'setupBlueprintId',
        otherEntity: 'SetupBlueprint',
        otherId: 'id'
      },
      'user': {
        manyToOne: true,
        thisId: 'userId',
        otherEntity: 'User',
        otherId: 'id'
      },
      'userGroup': {
        manyToOne: true,
        thisId: 'userGroupId',
        otherEntity: 'UserGroup',
        otherId: 'id'
      }
    }
  },

  'SetupBlueprintVersion': {
    idProps: [ 'id' ],
    relationships: {
      'blueprintConnections': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'BlueprintConnection',
         otherId: 'setupBlueprintVersionId'
      },
      'rights': {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'SetupBlueprintVersionRight',
        otherId: 'setupBlueprintVersionId'
      },
      'setupBlueprint': {
         manyToOne: true,
         thisId: 'setupBlueprintId',
         otherEntity: 'SetupBlueprint',
         otherId: 'id'
      },
      'setupVersions': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'SetupVersion',
         otherId: 'setupBlueprintVersionId'
      }
    }
  },

  'SetupBlueprintVersionRight': {
    idProps: [ 'id' ],
    relationships: {
      'setupBlueprintVersion': {
        manyToOne: true,
        thisId: 'setupBlueprintVersionId',
        otherEntity: 'SetupBlueprintVersion',
        otherId: 'id'
      },
      'user': {
        manyToOne: true,
        thisId: 'userId',
        otherEntity: 'User',
        otherId: 'id'
      },
      'userGroup': {
        manyToOne: true,
        thisId: 'userGroupId',
        otherEntity: 'UserGroup',
        otherId: 'id'
      }
    }
  },

  'SetupVersion': {
    idProps: [ 'id' ],
    relationships: {
      'component': {
         manyToOne: true,
         thisId: 'componentId',
         otherEntity: 'Component',
         otherId: 'id'
      },
      'connections': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'Connection',
         otherId: 'setupVersionId'
      },
      'rights': {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'SetupVersionRight',
        otherId: 'setupVersionId'
      },
      'setupBlueprintVersion': {
         manyToOne: true,
         thisId: 'setupBlueprintVersionId',
         otherEntity: 'SetupBlueprintVersion',
         otherId: 'id'
      }
    }
  },

  'SetupVersionRight': {
    idProps: [ 'id' ],
    relationships: {
      'setupVersion': {
        manyToOne: true,
        thisId: 'setupVersionId',
        otherEntity: 'SetupVersion',
        otherId: 'id'
      },
      'user': {
        manyToOne: true,
        thisId: 'userId',
        otherEntity: 'User',
        otherId: 'id'
      },
      'userGroup': {
        manyToOne: true,
        thisId: 'userGroupId',
        otherEntity: 'UserGroup',
        otherId: 'id'
      }
    }
  },

  'Solution': {
    idProps: [ 'id' ],
    relationships: {
      'componentPartOfSolutions': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'ComponentPartOfSolution',
         otherId: 'solutionId'
      },
      'organization': {
         manyToOne: true,
         thisId: 'organizationId',
         otherEntity: 'Organization',
         otherId: 'id'
      },
      'rights': {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'SolutionRight',
        otherId: 'solutionId'
      }
    }
  },

  'SolutionRight': {
    idProps: [ 'id' ],
    relationships: {
      'solution': {
        manyToOne: true,
        thisId: 'solutionId',
        otherEntity: 'Solution',
        otherId: 'id'
      },
      'user': {
        manyToOne: true,
        thisId: 'userId',
        otherEntity: 'User',
        otherId: 'id'
      },
      'userGroup': {
        manyToOne: true,
        thisId: 'userGroupId',
        otherEntity: 'UserGroup',
        otherId: 'id'
      }
    }
  },

  'User': {
    idProps: [ 'id' ],
    relationships: {
      blueprintConnectionRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'BlueprintConnectionRight',
        otherId: 'userId'
      },
      componentRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'ComponentRight',
        otherId: 'userId'
      },
      componentPartOfSolutionRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'ComponentPartOfSolutionRight',
        otherId: 'userId'
      },
      connectionPointRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'ConnectionPointRight',
        otherId: 'userId'
      },
      connectionRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'ConnectionRight',
        otherId: 'userId'
      },
      interfaceRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'InterfaceRight',
        otherId: 'userId'
      },
      offersInterfaceVersionRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'OffersInterfaceVersionRight',
        otherId: 'userId'
      },
      organizationRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'OrganizationRight',
        otherId: 'userId'
      },
      productRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'ProductRight',
        otherId: 'userId'
      },
      productVersionRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'ProductVersionRight',
        otherId: 'userId'
      },
      setupBlueprintRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'SetupBlueprintRight',
        otherId: 'userId'
      },
      setupBlueprintVersionRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'SetupBlueprintVersionRight',
        otherId: 'userId'
      },
      setupVersionRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'SetupVersionRight',
        otherId: 'userId'
      },
      solutionRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'SolutionRight',
        otherId: 'userId'
      },
      userInGroups: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'UserInGroup',
        otherId: 'userId'
      }
    }
  },

  'UserGroup': {
    idProps: [ 'id' ],
    relationships: {
      blueprintConnectionRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'BlueprintConnectionRight',
        otherId: 'userGroupId'
      },
      componentRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'ComponentRight',
        otherId: 'userGroupId'
      },
      componentPartOfSolutionRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'ComponentPartOfSolutionRight',
        otherId: 'userGroupId'
      },
      connectionPointRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'ConnectionPointRight',
        otherId: 'userGroupId'
      },
      connectionRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'ConnectionRight',
        otherId: 'userGroupId'
      },
      interfaceRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'InterfaceRight',
        otherId: 'userGroupId'
      },
      offersInterfaceVersionRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'OffersInterfaceVersionRight',
        otherId: 'userGroupId'
      },
      organization: {
        manyToOne: true,
        thisId: 'organizationId',
        otherEntity: 'Organization',
        otherId: 'id'
      },
      organizationRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'OrganizationRight',
        otherId: 'userGroupId'
      },
      productRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'ProductRight',
        otherId: 'userGroupId'
      },
      productVersionRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'ProductVersionRight',
        otherId: 'userGroupId'
      },
      setupBlueprintRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'SetupBlueprintRight',
        otherId: 'userGroupId'
      },
      setupBlueprintVersionRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'SetupBlueprintVersionRight',
        otherId: 'userGroupId'
      },
      setupVersionRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'SetupVersionRight',
        otherId: 'userGroupId'
      },
      solutionRights: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'SolutionRight',
        otherId: 'userGroupId'
      },
      userInGroups: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'UserInGroup',
        otherId: 'userGroupId'
      }
    }
  },

  'UserInGroup': {
    idProps: [ 'id' ],
    relationships: {
      user: {
        manyToOne: true,
        thisId: 'userId',
        otherEntity: 'User',
        otherId: 'id'
      },
      userGroup: {
        manyToOne: true,
        thisId: 'userGroupId',
        otherEntity: 'UserGroup',
        otherId: 'id'
      }
    }
  }

} as Schema
