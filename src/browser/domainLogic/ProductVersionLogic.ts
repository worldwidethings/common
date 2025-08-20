import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { ProductVersion } from '../../shared/domain/ProductVersion'
import { fetchHelper } from './fetchHelper'

export function getProductVersions(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<ProductVersion>) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ProductVersion.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countProductVersions(
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
      method: 'ProductVersion.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeProductVersion(
  url: string | URL,
  token: string,
  productVersion?: Partial<ProductVersion>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ProductVersion.store',
      parameters: productVersion
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteProductVersion(
  url: string | URL,
  token: string,
  productVersion?: Partial<ProductVersion>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ProductVersion.delete',
      parameters: productVersion
    },
    onResult,
    onError,
    requestParams
  )
}

export class ProductVersionLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<ProductVersion>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ProductVersion.get',
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
        method: 'ProductVersion.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    productVersion?: Partial<ProductVersion>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ProductVersion.store',
        parameters: productVersion
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    productVersion?: Partial<ProductVersion>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ProductVersion.delete',
        parameters: productVersion
      },
      onResult,
      onError,
      requestParams
    )
  }
}
