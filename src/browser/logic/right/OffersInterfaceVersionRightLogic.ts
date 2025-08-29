import { CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { OffersInterfaceVersionRight } from '../../../shared/domain/right/OffersInterfaceVersionRight'
import { fetchHelper } from '../fetchHelper'

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
}
