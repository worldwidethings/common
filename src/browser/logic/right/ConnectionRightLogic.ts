import { CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { ConnectionRight } from '../../../shared/entity/right/ConnectionRight'
import { fetchHelper } from '../fetchHelper'

export function getConnectionRights(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<ConnectionRight>) => void,
  onError?: (error: any) => void,
  requestParams?: Criteria
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ConnectionRight.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countConnectionRights(
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
      method: 'ConnectionRight.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export class ConnectionRightLogic {
  url: string | URL
  token: string | undefined

  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<ConnectionRight>) => void,
    onError?: (error: any) => void,
    requestParams?: Criteria
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ConnectionRight.get',
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
        method: 'ConnectionRight.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }
}
