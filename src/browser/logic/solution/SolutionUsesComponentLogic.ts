import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { SolutionUsesComponent } from '../../../shared/entity/solution/SolutionUsesComponent'
import { fetchHelper } from '../fetchHelper'

export function getSolutionUsesComponents(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<SolutionUsesComponent>) => void,
  onError?: (error: any) => void,
  requestParams?: Criteria
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'SolutionUsesComponent.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countSolutionUsesComponents(
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
      method: 'SolutionUsesComponent.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeSolutionUsesComponent(
  url: string | URL,
  token: string,
  SolutionUsesComponent?: Partial<SolutionUsesComponent>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: Criteria
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'SolutionUsesComponent.store',
      parameters: SolutionUsesComponent
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteSolutionUsesComponent(
  url: string | URL,
  token: string,
  SolutionUsesComponent?: Partial<SolutionUsesComponent>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: Criteria
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'SolutionUsesComponent.delete',
      parameters: SolutionUsesComponent
    },
    onResult,
    onError,
    requestParams
  )
}

export class SolutionUsesComponentLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<SolutionUsesComponent>) => void,
    onError?: (error: any) => void,
    requestParams?: Criteria
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'SolutionUsesComponent.get',
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
        method: 'SolutionUsesComponent.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    SolutionUsesComponent?: Partial<SolutionUsesComponent>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: Criteria
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'SolutionUsesComponent.store',
        parameters: SolutionUsesComponent
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    SolutionUsesComponent?: Partial<SolutionUsesComponent>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: Criteria
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'SolutionUsesComponent.delete',
        parameters: SolutionUsesComponent
      },
      onResult,
      onError,
      requestParams
    )
  }
}
