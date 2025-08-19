import { Schema } from 'knight-object-db'

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
      'setupBlueprintVersion': {
         manyToOne: true,
         thisId: 'setupBlueprintVersionId',
         otherEntity: 'SetupBlueprintVersion',
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

  'ComponentPartOfSolution': {
    idProps: [ 'id' ],
    relationships: {
      'component': {
        manyToOne: true,
        thisId: 'componentId',
        otherEntity: 'Component',
        otherId: 'id'
      },
      'solution': {
        manyToOne: true,
        thisId: 'solutionId',
        otherEntity: 'Solution',
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
      'products': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'Product',
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
      'setupBlueprints': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'SetupBlueprint',
         otherId: 'productVersionId'
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
      'setupBlueprintVersions': {
         oneToMany: true,
         thisId: 'id',
         otherEntity: 'SetupBlueprintVersion',
         otherId: 'setupBlueprintId'
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
      'setupBlueprintVersion': {
         manyToOne: true,
         thisId: 'setupBlueprintVersionId',
         otherEntity: 'SetupBlueprintVersion',
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
      }
    }
  },

  'User': {
    idProps: [ 'id' ],
    relationships: {
      organization: {
        manyToOne: true,
        thisId: 'organizationId',
        otherEntity: 'Organization',
        otherId: 'id'
      },
      userRightForSolutions: {
        oneToMany: true,
        thisId: 'id',
        otherEntity: 'UserRightForSolution',
        otherId: 'userId'
      }
    }
  },

  'UserRightForSolution': {
    idProps: [ 'id' ],
    relationships: {
      user: {
        manyToOne: true,
        thisId: 'userId',
        otherEntity: 'User',
        otherId: 'id'
      },
      solution: {
        manyToOne: true,
        thisId: 'solutionId',
        otherEntity: 'Solution',
        otherId: 'id'
      }
    }
  }
} as Schema
