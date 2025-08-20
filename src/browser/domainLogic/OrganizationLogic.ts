import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { Organization } from '../../shared/domain/Organization'
import { fetchHelper } from './fetchHelper'

export function getOrganizations(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<Organization>) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'Organization.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countOrganizations(
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
      method: 'Organization.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeOrganization(
  url: string | URL,
  token: string,
  organization?: Partial<Organization>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'Organization.store',
      parameters: organization
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteOrganization(
  url: string | URL,
  token: string,
  organization?: Partial<Organization>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'Organization.delete',
      parameters: organization
    },
    onResult,
    onError,
    requestParams
  )
}

export class OrganizationLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<Organization>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'Organization.get',
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
        method: 'Organization.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    organization?: Partial<Organization>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'Organization.store',
        parameters: organization
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    organization?: Partial<Organization>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'Organization.delete',
        parameters: organization
      },
      onResult,
      onError,
      requestParams
    )
  }
}
