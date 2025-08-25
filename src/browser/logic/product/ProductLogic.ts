import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { Product } from '../../../shared/domain/product/Product'
import { fetchHelper } from '../fetchHelper'

export function getProducts(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<Product>) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'Product.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countProducts(
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
      method: 'Product.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeProduct(
  url: string | URL,
  token: string,
  product?: Partial<Product>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'Product.store',
      parameters: product
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteProduct(
  url: string | URL,
  token: string,
  product?: Partial<Product>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'Product.delete',
      parameters: product
    },
    onResult,
    onError,
    requestParams
  )
}

export class ProductLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<Product>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'Product.get',
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
        method: 'Product.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    product?: Partial<Product>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'Product.store',
        parameters: product
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    product?: Partial<Product>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'Product.delete',
        parameters: product
      },
      onResult,
      onError,
      requestParams
    )
  }
}
