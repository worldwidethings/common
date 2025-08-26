import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { ComponentPartOfSolution } from '../../../shared/domain/solution/ComponentPartOfSolution'
import { fetchHelper } from '../fetchHelper'

export function getComponentPartOfSolutions(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<ComponentPartOfSolution>) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ComponentPartOfSolution.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countComponentPartOfSolutions(
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
      method: 'ComponentPartOfSolution.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeComponentPartOfSolution(
  url: string | URL,
  token: string,
  componentPartOfSolution?: Partial<ComponentPartOfSolution>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ComponentPartOfSolution.store',
      parameters: componentPartOfSolution
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteComponentPartOfSolution(
  url: string | URL,
  token: string,
  componentPartOfSolution?: Partial<ComponentPartOfSolution>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ComponentPartOfSolution.delete',
      parameters: componentPartOfSolution
    },
    onResult,
    onError,
    requestParams
  )
}

export class ComponentPartOfSolutionLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<ComponentPartOfSolution>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ComponentPartOfSolution.get',
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
        method: 'ComponentPartOfSolution.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    componentPartOfSolution?: Partial<ComponentPartOfSolution>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ComponentPartOfSolution.store',
        parameters: componentPartOfSolution
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    componentPartOfSolution?: Partial<ComponentPartOfSolution>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ComponentPartOfSolution.delete',
        parameters: componentPartOfSolution
      },
      onResult,
      onError,
      requestParams
    )
  }
}
