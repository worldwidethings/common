import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { SetupBlueprint } from '../../shared/domain/SetupBlueprint'
import { fetchHelper } from './fetchHelper'

export function getSetupBlueprints(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<SetupBlueprint>) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'SetupBlueprint.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countSetupBlueprints(
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
      method: 'SetupBlueprint.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeSetupBlueprint(
  url: string | URL,
  token: string,
  setupBlueprint?: Partial<SetupBlueprint>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'SetupBlueprint.store',
      parameters: setupBlueprint
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteSetupBlueprint(
  url: string | URL,
  token: string,
  setupBlueprint?: Partial<SetupBlueprint>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'SetupBlueprint.delete',
      parameters: setupBlueprint
    },
    onResult,
    onError,
    requestParams
  )
}

export class SetupBlueprintLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<SetupBlueprint>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'SetupBlueprint.get',
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
        method: 'SetupBlueprint.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    setupBlueprint?: Partial<SetupBlueprint>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'SetupBlueprint.store',
        parameters: setupBlueprint
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    setupBlueprint?: Partial<SetupBlueprint>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'SetupBlueprint.delete',
        parameters: setupBlueprint
      },
      onResult,
      onError,
      requestParams
    )
  }
}
