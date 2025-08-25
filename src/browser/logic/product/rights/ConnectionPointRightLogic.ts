import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { ConnectionPointRight } from '../../../../shared/domain/product/rights/ConnectionPointRight'
import { fetchHelper } from '../../fetchHelper'

export function getConnectionPointRights( 
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<ConnectionPointRight>) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ConnectionPointRight.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countConnectionPointRights(
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
      method: 'ConnectionPointRight.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeConnectionPointRight(
  url: string | URL,
  token: string,
  connectionPointRight?: Partial<ConnectionPointRight>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ConnectionPointRight.store',
      parameters: connectionPointRight
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteConnectionPointRight(
  url: string | URL,
  token: string,
  connectionPointRight?: Partial<ConnectionPointRight>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ConnectionPointRight.delete',
      parameters: connectionPointRight
    },
    onResult,
    onError,
    requestParams
  )
}

export class ConnectionPointRightLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<ConnectionPointRight>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ConnectionPointRight.get',
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
        method: 'ConnectionPointRight.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    connectionPointRight?: Partial<ConnectionPointRight>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ConnectionPointRight.store',
        parameters: connectionPointRight
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    connectionPointRight?: Partial<ConnectionPointRight>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ConnectionPointRight.delete',
        parameters: connectionPointRight
      },
      onResult,
      onError,
      requestParams
    )
  }
}
