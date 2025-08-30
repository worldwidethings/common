import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { ProductType } from '../../../shared/entity/product/ProductType'
import { fetchHelper } from '../fetchHelper'

export function getProductTypes(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<ProductType>) => void,
  onError?: (error: any) => void,
  requestParams?: Criteria
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ProductType.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countProductTypes(
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
      method: 'ProductType.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeProductType(
  url: string | URL,
  token: string,
  productType?: Partial<ProductType>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: Criteria
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ProductType.store',
      parameters: productType
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteProductType(
  url: string | URL,
  token: string,
  productType?: Partial<ProductType>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: Criteria
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ProductType.delete',
      parameters: productType
    },
    onResult,
    onError,
    requestParams
  )
}

export class ProductTypeLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<ProductType>) => void,
    onError?: (error: any) => void,
    requestParams?: Criteria
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ProductType.get',
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
        method: 'ProductType.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    productType?: Partial<ProductType>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: Criteria
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ProductType.store',
        parameters: productType
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    productType?: Partial<ProductType>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: Criteria
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ProductType.delete',
        parameters: productType
      },
      onResult,
      onError,
      requestParams
    )
  }
}
