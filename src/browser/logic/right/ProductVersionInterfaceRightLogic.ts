import { CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { ProductVersionInterfaceRight } from '../../../shared/domain/right/ProductVersionInterfaceRight'
import { fetchHelper } from '../fetchHelper'

export function getProductVersionInterfaceRights( 
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<ProductVersionInterfaceRight>) => void,
  onError?: (error: any) => void,
  requestParams?: Criteria
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'ProductVersionInterfaceRight.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countProductVersionInterfaceRights(
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
      method: 'ProductVersionInterfaceRight.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export class ProductVersionInterfaceRightLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<ProductVersionInterfaceRight>) => void,
    onError?: (error: any) => void,
    requestParams?: Criteria
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'ProductVersionInterfaceRight.get',
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
        method: 'ProductVersionInterfaceRight.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }
}
