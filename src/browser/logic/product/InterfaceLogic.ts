import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { Interface } from '../../../shared/domain/product/Interface'
import { fetchHelper } from '../fetchHelper'

export function getInterfaces(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<Interface>) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'Interface.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countInterfaces(
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
      method: 'Interface.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeInterface(
  url: string | URL,
  token: string,
  interface_?: Partial<Interface>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'Interface.store',
      parameters: interface_
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteInterface(
  url: string | URL,
  token: string,
  interface_?: Partial<Interface>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'Interface.delete',
      parameters: interface_
    },
    onResult,
    onError,
    requestParams
  )
}

export class InterfaceLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<Interface>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'Interface.get',
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
        method: 'Interface.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    interface_?: Partial<Interface>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'Interface.store',
        parameters: interface_
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    interface_?: Partial<Interface>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'Interface.delete',
        parameters: interface_
      },
      onResult,
      onError,
      requestParams
    )
  }
}
