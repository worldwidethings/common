import { CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { SolutionUsesComponentRight } from '../../../shared/domain/right/SolutionUsesComponentRight'
import { fetchHelper } from '../fetchHelper'

export function getSolutionUsesComponentRights(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<SolutionUsesComponentRight>) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'SolutionUsesComponentRight.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countSolutionUsesComponentRights(
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
      method: 'SolutionUsesComponentRight.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export class SolutionUsesComponentRightLogic {
  url: string | URL
  token: string | undefined

  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<SolutionUsesComponentRight>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'SolutionUsesComponentRight.get',
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
        method: 'SolutionUsesComponentRight.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }
}
