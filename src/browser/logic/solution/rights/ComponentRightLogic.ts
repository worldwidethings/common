import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { ComponentRight } from '../../../../shared/domain/solution/rights/ComponentRight'
import { fetchHelper } from '../../fetchHelper'

export function getComponentRights(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<ComponentRight>) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ComponentRight.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countComponentRights(
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
      method: 'ComponentRight.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeComponentRight(
  url: string | URL,
  token: string,
  componentRight?: Partial<ComponentRight>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ComponentRight.store',
      parameters: componentRight
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteComponentRight(
  url: string | URL,
  token: string,
  componentRight?: Partial<ComponentRight>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ComponentRight.delete',
      parameters: componentRight
    },
    onResult,
    onError,
    requestParams
  )
}

export class ComponentRightLogic {
  url: string | URL
  token: string | undefined

  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<ComponentRight>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ComponentRight.get',
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
        method: 'ComponentRight.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    componentRight?: Partial<ComponentRight>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ComponentRight.store',
        parameters: componentRight
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    componentRight?: Partial<ComponentRight>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ComponentRight.delete',
        parameters: componentRight
      },
      onResult,
      onError,
      requestParams
    )
  }
}
