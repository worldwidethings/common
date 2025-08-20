import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { UserRightForSolution } from '../../shared/domain/UserRightForSolution'
import { fetchHelper } from './fetchHelper'

export function getUserRightForSolutions(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<UserRightForSolution>) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'UserRightForSolution.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countUserRightForSolutions(
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
      method: 'UserRightForSolution.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeUserRightForSolution(
  url: string | URL,
  token: string,
  userRightForSolution?: Partial<UserRightForSolution>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'UserRightForSolution.store',
      parameters: userRightForSolution
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteUserRightForSolution(
  url: string | URL,
  token: string,
  userRightForSolution?: Partial<UserRightForSolution>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'UserRightForSolution.delete',
      parameters: userRightForSolution
    },
    onResult,
    onError,
    requestParams
  )
}

export class UserRightForSolutionLogic {
  url: string | URL
  token: string | undefined
  
  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<UserRightForSolution>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'UserRightForSolution.get',
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
        method: 'UserRightForSolution.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    userRightForSolution?: Partial<UserRightForSolution>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'UserRightForSolution.store',
        parameters: userRightForSolution
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    userRightForSolution?: Partial<UserRightForSolution>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'UserRightForSolution.delete',
        parameters: userRightForSolution
      },
      onResult,
      onError,
      requestParams
    )
  }
}
