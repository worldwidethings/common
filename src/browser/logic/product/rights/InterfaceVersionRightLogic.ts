import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { InterfaceVersionRight } from '../../../../shared/domain/product/rights/InterfaceVersionRight'
import { fetchHelper } from '../../fetchHelper'

export function getInterfaceVersionRights( 
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<InterfaceVersionRight>) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'InterfaceVersionRight.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countInterfaceVersionRights(
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
      method: 'InterfaceVersionRight.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeInterfaceVersionRight(
  url: string | URL,
  token: string,
  interfaceVersion?: Partial<InterfaceVersionRight>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'InterfaceVersionRight.store',
      parameters: interfaceVersion
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteInterfaceVersionRight(
  url: string | URL,
  token: string,
  interfaceVersion?: Partial<InterfaceVersionRight>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'InterfaceVersionRight.delete',
      parameters: interfaceVersion
    },
    onResult,
    onError,
    requestParams
  )
}

export class InterfaceVersionRightLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<InterfaceVersionRight>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'InterfaceVersionRight.get',
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
        method: 'InterfaceVersionRight.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    interfaceVersion?: Partial<InterfaceVersionRight>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'InterfaceVersionRight.store',
        parameters: interfaceVersion
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    interfaceVersion?: Partial<InterfaceVersionRight>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'InterfaceVersionRight.delete',
        parameters: interfaceVersion
      },
      onResult,
      onError,
      requestParams
    )
  }
}
