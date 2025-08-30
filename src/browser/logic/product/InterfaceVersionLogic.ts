import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { InterfaceVersion } from '../../../shared/entity/product/InterfaceVersion'
import { fetchHelper } from '../fetchHelper'

export function getInterfaceVersions(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<InterfaceVersion>) => void,
  onError?: (error: any) => void,
  requestParams?: Criteria
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'InterfaceVersion.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countInterfaceVersions(
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
      method: 'InterfaceVersion.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeInterfaceVersion(
  url: string | URL,
  token: string,
  interfaceVersion?: Partial<InterfaceVersion>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: Criteria
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'InterfaceVersion.store',
      parameters: interfaceVersion
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteInterfaceVersion(
  url: string | URL,
  token: string,
  interfaceVersion?: Partial<InterfaceVersion>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: Criteria
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'InterfaceVersion.delete',
      parameters: interfaceVersion
    },
    onResult,
    onError,
    requestParams
  )
}

export class InterfaceVersionLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<InterfaceVersion>) => void,
    onError?: (error: any) => void,
    requestParams?: Criteria
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'InterfaceVersion.get',
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
        method: 'InterfaceVersion.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    interfaceVersion?: Partial<InterfaceVersion>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: Criteria
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'InterfaceVersion.store',
        parameters: interfaceVersion
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    interfaceVersion?: Partial<InterfaceVersion>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: Criteria
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'InterfaceVersion.delete',
        parameters: interfaceVersion
      },
      onResult,
      onError,
      requestParams
    )
  }
}
