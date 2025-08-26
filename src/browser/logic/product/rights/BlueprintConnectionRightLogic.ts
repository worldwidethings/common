import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { BlueprintConnectionRight } from '../../../../shared/domain/product/rights/BlueprintConnectionRight'
import { fetchHelper } from '../../fetchHelper'

export function getBlueprintConnectionRights( 
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<BlueprintConnectionRight>) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'BlueprintConnectionRight.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countBlueprintConnectionRights(
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
      method: 'BlueprintConnectionRight.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeBlueprintConnectionRight(
  url: string | URL,
  token: string,
  blueprintConnectionRight?: Partial<BlueprintConnectionRight>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'BlueprintConnectionRight.store',
      parameters: blueprintConnectionRight
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteBlueprintConnectionRight(
  url: string | URL,
  token: string,
  blueprintConnectionRight?: Partial<BlueprintConnectionRight>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'BlueprintConnectionRight.delete',
      parameters: blueprintConnectionRight
    },
    onResult,
    onError,
    requestParams
  )
}

export class BlueprintConnectionRightLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<BlueprintConnectionRight>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'BlueprintConnectionRight.get',
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
        method: 'BlueprintConnectionRight.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    blueprintConnectionRight?: Partial<BlueprintConnectionRight>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'BlueprintConnectionRight.store',
        parameters: blueprintConnectionRight
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    blueprintConnectionRight?: Partial<BlueprintConnectionRight>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'BlueprintConnectionRight.delete',
        parameters: blueprintConnectionRight
      },
      onResult,
      onError,
      requestParams
    )
  }
}
