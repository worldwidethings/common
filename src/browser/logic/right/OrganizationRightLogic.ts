import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { OrganizationRight } from '../../../shared/domain/right/OrganizationRight'
import { fetchHelper } from '../fetchHelper'

export function getOrganizationRights( 
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<OrganizationRight>) => void,
  onError?: (error: any) => void,
  requestParams?: Criteria
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'OrganizationRight.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countOrganizationRights(
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
      method: 'OrganizationRight.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeOrganizationRight(
  url: string | URL,
  token: string,
  organization?: Partial<OrganizationRight>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: Criteria
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'OrganizationRight.store',
      parameters: organization
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteOrganizationRight(
  url: string | URL,
  token: string,
  organization?: Partial<OrganizationRight>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: Criteria
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'OrganizationRight.delete',
      parameters: organization
    },
    onResult,
    onError,
    requestParams
  )
}

export class OrganizationRightLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<OrganizationRight>) => void,
    onError?: (error: any) => void,
    requestParams?: Criteria
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'OrganizationRight.get',
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
        method: 'OrganizationRight.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    organization?: Partial<OrganizationRight>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: Criteria
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'OrganizationRight.store',
        parameters: organization
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    organization?: Partial<OrganizationRight>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: Criteria
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'OrganizationRight.delete',
        parameters: organization
      },
      onResult,
      onError,
      requestParams
    )
  }
}
