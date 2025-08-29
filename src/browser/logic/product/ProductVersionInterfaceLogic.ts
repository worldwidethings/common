import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { ProductVersionInterface } from '../../../shared/domain/product/ProductVersionInterface'
import { fetchHelper } from '../fetchHelper'

export function getProductVersionInterfaces(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<ProductVersionInterface>) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ProductVersionInterface.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countProductVersionInterfaces(
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
      method: 'ProductVersionInterface.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeProductVersionInterface(
  url: string | URL,
  token: string,
  ProductVersionInterface?: Partial<ProductVersionInterface>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ProductVersionInterface.store',
      parameters: ProductVersionInterface
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteProductVersionInterface(
  url: string | URL,
  token: string,
  ProductVersionInterface?: Partial<ProductVersionInterface>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ProductVersionInterface.delete',
      parameters: ProductVersionInterface
    },
    onResult,
    onError,
    requestParams
  )
}

export class ProductVersionInterfaceLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<ProductVersionInterface>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ProductVersionInterface.get',
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
        method: 'ProductVersionInterface.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    ProductVersionInterface?: Partial<ProductVersionInterface>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ProductVersionInterface.store',
        parameters: ProductVersionInterface
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    ProductVersionInterface?: Partial<ProductVersionInterface>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ProductVersionInterface.delete',
        parameters: ProductVersionInterface
      },
      onResult,
      onError,
      requestParams
    )
  }
}
