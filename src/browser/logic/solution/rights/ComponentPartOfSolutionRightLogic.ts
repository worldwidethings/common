import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { ComponentPartOfSolutionRight } from '../../../../shared/domain/solution/rights/ComponentPartOfSolutionRight'
import { fetchHelper } from '../../fetchHelper'

export function getComponentPartOfSolutionRights(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<ComponentPartOfSolutionRight>) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ComponentPartOfSolutionRight.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countComponentPartOfSolutionRights(
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
      method: 'ComponentPartOfSolutionRight.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeComponentPartOfSolutionRight(
  url: string | URL,
  token: string,
  componentPartOfSolutionRight?: Partial<ComponentPartOfSolutionRight>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ComponentPartOfSolutionRight.store',
      parameters: componentPartOfSolutionRight
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteComponentPartOfSolutionRight(
  url: string | URL,
  token: string,
  componentPartOfSolutionRight?: Partial<ComponentPartOfSolutionRight>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ComponentPartOfSolutionRight.delete',
      parameters: componentPartOfSolutionRight
    },
    onResult,
    onError,
    requestParams
  )
}

export class ComponentPartOfSolutionRightLogic {
  url: string | URL
  token: string | undefined

  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<ComponentPartOfSolutionRight>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ComponentPartOfSolutionRight.get',
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
        method: 'ComponentPartOfSolutionRight.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    componentPartOfSolutionRight?: Partial<ComponentPartOfSolutionRight>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ComponentPartOfSolutionRight.store',
        parameters: componentPartOfSolutionRight
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    componentPartOfSolutionRight?: Partial<ComponentPartOfSolutionRight>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ComponentPartOfSolutionRight.delete',
        parameters: componentPartOfSolutionRight
      },
      onResult,
      onError,
      requestParams
    )
  }
}
