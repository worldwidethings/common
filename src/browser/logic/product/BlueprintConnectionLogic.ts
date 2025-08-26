import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { BlueprintConnection } from '../../../shared/domain/product/BlueprintConnection'
import { fetchHelper } from '../fetchHelper'

export function getBlueprintConnections(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<BlueprintConnection>) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'BlueprintConnection.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countBlueprintConnections(
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
      method: 'BlueprintConnection.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeBlueprintConnection(
  url: string | URL,
  token: string,
  blueprintConnection?: Partial<BlueprintConnection>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'BlueprintConnection.store',
      parameters: blueprintConnection
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteBlueprintConnection(
  url: string | URL,
  token: string,
  blueprintConnection?: Partial<BlueprintConnection>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'BlueprintConnection.delete',
      parameters: blueprintConnection
    },
    onResult,
    onError,
    requestParams
  )
}

export class BlueprintConnectionLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<BlueprintConnection>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'BlueprintConnection.get',
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
        method: 'BlueprintConnection.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    blueprintConnection?: Partial<BlueprintConnection>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'BlueprintConnection.store',
        parameters: blueprintConnection
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    blueprintConnection?: Partial<BlueprintConnection>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'BlueprintConnection.delete',
        parameters: blueprintConnection
      },
      onResult,
      onError,
      requestParams
    )
  }
}
