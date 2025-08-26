import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { OffersInterfaceVersionRight } from '../../../../shared/domain/product/rights/OffersInterfaceVersionRight'
import { fetchHelper } from '../../fetchHelper'

export function getOffersInterfaceVersionRights( 
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<OffersInterfaceVersionRight>) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'OffersInterfaceVersionRight.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countOffersInterfaceVersionRights(
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
      method: 'OffersInterfaceVersionRight.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeOffersInterfaceVersionRight(
  url: string | URL,
  token: string,
  offersInterfaceVersionRight?: Partial<OffersInterfaceVersionRight>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'OffersInterfaceVersionRight.store',
      parameters: offersInterfaceVersionRight
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteOffersInterfaceVersionRight(
  url: string | URL,
  token: string,
  offersInterfaceVersionRight?: Partial<OffersInterfaceVersionRight>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'OffersInterfaceVersionRight.delete',
      parameters: offersInterfaceVersionRight
    },
    onResult,
    onError,
    requestParams
  )
}

export class OffersInterfaceVersionRightLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<OffersInterfaceVersionRight>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'OffersInterfaceVersionRight.get',
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
        method: 'OffersInterfaceVersionRight.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    offersInterfaceVersionRight?: Partial<OffersInterfaceVersionRight>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'OffersInterfaceVersionRight.store',
        parameters: offersInterfaceVersionRight
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    offersInterfaceVersionRight?: Partial<OffersInterfaceVersionRight>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'OffersInterfaceVersionRight.delete',
        parameters: offersInterfaceVersionRight
      },
      onResult,
      onError,
      requestParams
    )
  }
}
