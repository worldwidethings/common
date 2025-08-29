import { CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { SetupVersionRight } from '../../../shared/domain/right/SetupVersionRight'
import { fetchHelper } from '../fetchHelper'

export function getSetupVersionRights(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<SetupVersionRight>) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'SetupVersionRight.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countSetupVersionRights(
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
      method: 'SetupVersionRight.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export class SetupVersionRightLogic {
  url: string | URL
  token: string | undefined

  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<SetupVersionRight>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'SetupVersionRight.get',
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
        method: 'SetupVersionRight.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }
}
