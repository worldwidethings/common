import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { UserInGroup } from '../../../shared/domain/organization/UserInGroup'
import { fetchHelper } from '../fetchHelper'

export function getUserInGroups(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<UserInGroup>) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'UserInGroup.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countUserInGroups(
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
      method: 'UserInGroup.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeUserInGroup(
  url: string | URL,
  token: string,
  userInGroup?: Partial<UserInGroup>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'UserInGroup.store',
      parameters: userInGroup
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteUserInGroup(
  url: string | URL,
  token: string,
  userInGroup?: Partial<UserInGroup>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'UserInGroup.delete',
      parameters: userInGroup
    },
    onResult,
    onError,
    requestParams
  )
}

export class UserInGroupLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<UserInGroup>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'UserInGroup.get',
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
        method: 'UserInGroup.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    userInGroup?: Partial<UserInGroup>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'UserInGroup.store',
        parameters: userInGroup
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    userInGroup?: Partial<UserInGroup>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'UserInGroup.delete',
        parameters: userInGroup
      },
      onResult,
      onError,
      requestParams
    )
  }
}
