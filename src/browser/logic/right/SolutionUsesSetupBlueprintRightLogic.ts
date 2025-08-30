import { CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { SolutionUsesSetupBlueprintRight } from '../../../shared/entity/right/SolutionUsesSetupBlueprintRight'
import { fetchHelper } from '../fetchHelper'

export function getSolutionUsesSetupBlueprintRights(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<SolutionUsesSetupBlueprintRight>) => void,
  onError?: (error: any) => void,
  requestParams?: Criteria
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'SolutionUsesSetupBlueprintRight.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countSolutionUsesSetupBlueprintRights(
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
      method: 'SolutionUsesSetupBlueprintRight.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export class SolutionUsesSetupBlueprintRightLogic {
  url: string | URL
  token: string | undefined

  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<SolutionUsesSetupBlueprintRight>) => void,
    onError?: (error: any) => void,
    requestParams?: Criteria
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'SolutionUsesSetupBlueprintRight.get',
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
        method: 'SolutionUsesSetupBlueprintRight.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }
}
