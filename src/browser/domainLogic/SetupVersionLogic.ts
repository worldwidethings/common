import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { SetupVersion } from '../../shared/domain/SetupVersion'
import { fetchHelper } from './fetchHelper'

export function getSetupVersions(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<SetupVersion>) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'SetupVersion.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countSetupVersions(
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
      method: 'SetupVersion.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeSetupVersion(
  url: string | URL,
  token: string,
  setupVersion?: Partial<SetupVersion>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'SetupVersion.store',
      parameters: setupVersion
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteSetupVersion(
  url: string | URL,
  token: string,
  setupVersion?: Partial<SetupVersion>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'SetupVersion.delete',
      parameters: setupVersion
    },
    onResult,
    onError,
    requestParams
  )
}

export class SetupVersionLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<SetupVersion>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'SetupVersion.get',
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
        method: 'SetupVersion.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    setupVersion?: Partial<SetupVersion>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'SetupVersion.store',
        parameters: setupVersion
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    setupVersion?: Partial<SetupVersion>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'SetupVersion.delete',
        parameters: setupVersion
      },
      onResult,
      onError,
      requestParams
    )
  }
}
