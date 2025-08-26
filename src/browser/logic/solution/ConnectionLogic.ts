import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { Connection } from '../../../shared/domain/solution/Connection'
import { fetchHelper } from '../fetchHelper'

export function getConnections(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<Connection>) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'Connection.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countConnections(
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
      method: 'Connection.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeConnection(
  url: string | URL,
  token: string,
  connection?: Partial<Connection>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'Connection.store',
      parameters: connection
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteConnection(
  url: string | URL,
  token: string,
  connection?: Partial<Connection>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'Connection.delete',
      parameters: connection
    },
    onResult,
    onError,
    requestParams
  )
}

export class ConnectionLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<Connection>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'Connection.get',
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
        method: 'Connection.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    connection?: Partial<Connection>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'Connection.store',
        parameters: connection
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    connection?: Partial<Connection>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'Connection.delete',
        parameters: connection
      },
      onResult,
      onError,
      requestParams
    )
  }
}
