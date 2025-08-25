import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { SetupBlueprintRight } from '../../../../shared/domain/product/rights/SetupBlueprintRight'
import { fetchHelper } from '../../fetchHelper'

export function getSetupBlueprintRights( 
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<SetupBlueprintRight>) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'SetupBlueprintRight.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countSetupBlueprintRights(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: CountResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'SetupBlueprintRight.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeSetupBlueprintRight(
  url: string | URL,
  token: string,
  setupBlueprintRight?: Partial<SetupBlueprintRight>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'SetupBlueprintRight.store',
      parameters: setupBlueprintRight
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteSetupBlueprintRight(
  url: string | URL,
  token: string,
  setupBlueprintRight?: Partial<SetupBlueprintRight>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'SetupBlueprintRight.delete',
      parameters: setupBlueprintRight
    },
    onResult,
    onError,
    requestParams
  )
}

export class SetupBlueprintRightLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<SetupBlueprintRight>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'SetupBlueprintRight.get',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  count(
    criteria?: Criteria,
    onResult?: (result: CountResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'SetupBlueprintRight.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    setupBlueprintRight?: Partial<SetupBlueprintRight>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'SetupBlueprintRight.store',
        parameters: setupBlueprintRight
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    setupBlueprintRight?: Partial<SetupBlueprintRight>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'SetupBlueprintRight.delete',
        parameters: setupBlueprintRight
      },
      onResult,
      onError,
      requestParams
    )
  }
}
