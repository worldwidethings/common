import { CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { ConnectionPointRight } from '../../../shared/domain/right/ConnectionPointRight'
import { fetchHelper } from '../fetchHelper'

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
}
