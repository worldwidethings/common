import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { OffersInterfaceVersion } from '../../../shared/domain/product/OffersInterfaceVersion'
import { fetchHelper } from '../fetchHelper'

export function getOffersInterfaceVersions(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<OffersInterfaceVersion>) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'OffersInterfaceVersion.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countOffersInterfaceVersions(
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
      method: 'OffersInterfaceVersion.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeOffersInterfaceVersion(
  url: string | URL,
  token: string,
  offersInterfaceVersion?: Partial<OffersInterfaceVersion>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'OffersInterfaceVersion.store',
      parameters: offersInterfaceVersion
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteOffersInterfaceVersion(
  url: string | URL,
  token: string,
  offersInterfaceVersion?: Partial<OffersInterfaceVersion>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'OffersInterfaceVersion.delete',
      parameters: offersInterfaceVersion
    },
    onResult,
    onError,
    requestParams
  )
}

export class OffersInterfaceVersionLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<OffersInterfaceVersion>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'OffersInterfaceVersion.get',
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
        method: 'OffersInterfaceVersion.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    offersInterfaceVersion?: Partial<OffersInterfaceVersion>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'OffersInterfaceVersion.store',
        parameters: offersInterfaceVersion
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    offersInterfaceVersion?: Partial<OffersInterfaceVersion>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'OffersInterfaceVersion.delete',
        parameters: offersInterfaceVersion
      },
      onResult,
      onError,
      requestParams
    )
  }
}
