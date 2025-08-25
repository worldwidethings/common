import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { UserGroup } from '../../../shared/domain/organization/UserGroup'
import { fetchHelper } from '../fetchHelper'

export function getUserGroups(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<UserGroup>) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'UserGroup.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countUserGroups(
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
      method: 'UserGroup.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeUserGroup(
  url: string | URL,
  token: string,
  userGroup?: Partial<UserGroup>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'UserGroup.store',
      parameters: userGroup
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteUserGroup(
  url: string | URL,
  token: string,
  userGroup?: Partial<UserGroup>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'UserGroup.delete',
      parameters: userGroup
    },
    onResult,
    onError,
    requestParams
  )
}

export class UserGroupLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<UserGroup>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'UserGroup.get',
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
        method: 'UserGroup.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    userGroup?: Partial<UserGroup>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'UserGroup.store',
        parameters: userGroup
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    userGroup?: Partial<UserGroup>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'UserGroup.delete',
        parameters: userGroup
      },
      onResult,
      onError,
      requestParams
    )
  }
}
