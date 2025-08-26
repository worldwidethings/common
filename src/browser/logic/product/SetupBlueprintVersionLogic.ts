import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { SetupBlueprintVersion } from '../../../shared/domain/product/SetupBlueprintVersion'
import { fetchHelper } from '../fetchHelper'

export function getSetupBlueprintVersions(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<SetupBlueprintVersion>) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'SetupBlueprintVersion.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countSetupBlueprintVersions(
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
      method: 'SetupBlueprintVersion.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeSetupBlueprintVersion(
  url: string | URL,
  token: string,
  setupBlueprintVersion?: Partial<SetupBlueprintVersion>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'SetupBlueprintVersion.store',
      parameters: setupBlueprintVersion
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteSetupBlueprintVersion(
  url: string | URL,
  token: string,
  setupBlueprintVersion?: Partial<SetupBlueprintVersion>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'SetupBlueprintVersion.delete',
      parameters: setupBlueprintVersion
    },
    onResult,
    onError,
    requestParams
  )
}

export class SetupBlueprintVersionLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<SetupBlueprintVersion>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'SetupBlueprintVersion.get',
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
        method: 'SetupBlueprintVersion.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    setupBlueprintVersion?: Partial<SetupBlueprintVersion>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'SetupBlueprintVersion.store',
        parameters: setupBlueprintVersion
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    setupBlueprintVersion?: Partial<SetupBlueprintVersion>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'SetupBlueprintVersion.delete',
        parameters: setupBlueprintVersion
      },
      onResult,
      onError,
      requestParams
    )
  }
}
