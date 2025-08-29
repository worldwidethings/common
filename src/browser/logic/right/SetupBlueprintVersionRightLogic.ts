import { CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { SetupBlueprintVersionRight } from '../../../shared/domain/right/SetupBlueprintVersionRight'
import { fetchHelper } from '../fetchHelper'

export function getSetupBlueprintVersionRights( 
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<SetupBlueprintVersionRight>) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'SetupBlueprintVersionRight.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countSetupBlueprintVersionRights(
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
      method: 'SetupBlueprintVersionRight.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export class SetupBlueprintVersionRightLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<SetupBlueprintVersionRight>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'SetupBlueprintVersionRight.get',
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
        method: 'SetupBlueprintVersionRight.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }
}
