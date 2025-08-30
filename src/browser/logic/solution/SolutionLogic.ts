import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { Solution } from '../../../shared/entity/solution/Solution'
import { fetchHelper } from '../fetchHelper'

export function getSolutions(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<Solution>) => void,
  onError?: (error: any) => void,
  requestParams?: Criteria
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'Solution.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countSolutions(
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
      method: 'Solution.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeSolution(
  url: string | URL,
  token: string,
  solution?: Partial<Solution>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: Criteria
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'Solution.store',
      parameters: solution
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteSolution(
  url: string | URL,
  token: string,
  solution?: Partial<Solution>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: Criteria
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'Solution.delete',
      parameters: solution
    },
    onResult,
    onError,
    requestParams
  )
}

export class SolutionLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<Solution>) => void,
    onError?: (error: any) => void,
    requestParams?: Criteria
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'Solution.get',
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
        method: 'Solution.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    solution?: Partial<Solution>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: Criteria
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'Solution.store',
        parameters: solution
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    solution?: Partial<Solution>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: Criteria
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'Solution.delete',
        parameters: solution
      },
      onResult,
      onError,
      requestParams
    )
  }
}
