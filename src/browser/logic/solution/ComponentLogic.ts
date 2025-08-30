import { ChangeResult, CountResult, GetResult } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { Component } from '../../../shared/domain/solution/Component'
import { fetchHelper } from '../fetchHelper'

export function getComponents(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<Component>) => void,
  onError?: (error: any) => void,
  requestParams?: Criteria
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'Component.get',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function countComponents(
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
      method: 'Component.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeComponent(
  url: string | URL,
  token: string,
  component?: Partial<Component>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: Criteria
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'Component.store',
      parameters: component
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteComponent(
  url: string | URL,
  token: string,
  component?: Partial<Component>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: Criteria
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'Component.delete',
      parameters: component
    },
    onResult,
    onError,
    requestParams
  )
}

export class ComponentLogic {
  url: string | URL
  token: string | undefined

  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<Component>) => void,
    onError?: (error: any) => void,
    requestParams?: Criteria
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'Component.get',
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
        method: 'Component.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    component?: Partial<Component>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: Criteria
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'Component.store',
        parameters: component
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    component?: Partial<Component>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: Criteria
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'Component.delete',
        parameters: component
      },
      onResult,
      onError,
      requestParams
    )
  }
}
