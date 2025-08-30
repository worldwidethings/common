import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { ConnectionPoint } from '../../../shared/domain/product/ConnectionPoint'
import { fetchHelper } from '../fetchHelper'

export function getConnectionPoints(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<ConnectionPoint>) => void,
  onError?: (error: any) => void,
  requestParams?: Criteria
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ConnectionPoint.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countConnectionPoints(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: CountResult) => void,
  onError?: (error: any) => void,
  requestParams?: Criteria
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ConnectionPoint.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeConnectionPoint(
  url: string | URL,
  token: string,
  connectionPoint?: Partial<ConnectionPoint>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: Criteria
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ConnectionPoint.store',
      parameters: connectionPoint
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteConnectionPoint(
  url: string | URL,
  token: string,
  connectionPoint?: Partial<ConnectionPoint>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: Criteria
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ConnectionPoint.delete',
      parameters: connectionPoint
    },
    onResult,
    onError,
    requestParams
  )
}

export class ConnectionPointLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<ConnectionPoint>) => void,
    onError?: (error: any) => void,
    requestParams?: Criteria
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ConnectionPoint.get',
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
    requestParams?: Criteria
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ConnectionPoint.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    connectionPoint?: Partial<ConnectionPoint>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: Criteria
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ConnectionPoint.store',
        parameters: connectionPoint
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    connectionPoint?: Partial<ConnectionPoint>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: Criteria
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ConnectionPoint.delete',
        parameters: connectionPoint
      },
      onResult,
      onError,
      requestParams
    )
  }
}
