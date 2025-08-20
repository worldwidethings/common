import { GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { User } from '../../shared/domain/User'
import { fetchHelper } from './fetchHelper'

export class UserRemoteLogic {
  get(
    url: string | URL,
    token: string,
    criteria?: Criteria,
    onResult?: (getResult: GetResult<User>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      url,
      {
        apiVersion: 1,
        token: token,
        method: 'User.get',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  count(
    url: string | URL,
    token: string,
    criteria?: Criteria,
    onResult?: (getResult: GetResult<User>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      url,
      {
        apiVersion: 1,
        token: token,
        method: 'User.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }
}
