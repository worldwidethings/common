import { ChangeResult, CountResult, GetResult, Result } from 'coderitter-api-rmc'
import { type Criteria } from 'knight-criteria'
import { UserLoginResult, type UserCheckTokenParameters, type UserCheckTokenResult, type UserLoginParameters, type UserRegisterParameters, type UserResetPasswordParameters, type UserSendPasswordResetMailParameters, type UserSetPasswordParameters, type UserVerifyMailParameters } from '../../shared/api/userApi'
import { User } from '../../shared/domain/User'
import { fetchHelper } from './fetchHelper'

export function getUsers(
  url: string | URL,
  token: string,
  criteria?: Criteria,
  onResult?: (result: GetResult<User>) => void,
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

export function countUsers(
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
      method: 'User.count',
      parameters: criteria
    },
    onResult,
    onError,
    requestParams
  )
}

export function storeUser(
  url: string | URL,
  token: string,
  user?: Partial<User>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'User.store',
      parameters: user
    },
    onResult,
    onError,
    requestParams
  )
}

export function deleteUser(
  url: string | URL,
  token: string,
  user?: Partial<User>,
  onResult?: (result: ChangeResult) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'User.delete',
      parameters: user
    },
    onResult,
    onError,
    requestParams
  )
}

export function setPasswordOfUser(
  url: string | URL,
  token: string,
  parameters ?: UserSetPasswordParameters,
  onResult ?: (result: Result) => void,
  onError ?: (error: any) => void,
  requestParams ?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'User.setPassword',
      parameters: parameters
    },
    onResult,
    onError,
    requestParams
  )
}

export function loginUser(
  url: string | URL,
  parameters ?: UserLoginParameters,
  onResult ?: (result: UserLoginResult) => void,
  onError ?: (error: any) => void,
  requestParams ?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      method: 'User.login',
      parameters: parameters
    },
    onResult,
    onError,
    requestParams
  )
}

export function logoutUser(
  url: string | URL,
  token: string,
  onResult ?: (result: Result) => void,
  onError ?: (error: any) => void,
  requestParams ?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      token: token,
      method: 'User.logout'
      },
    onResult,
    onError,
    requestParams
  )
}

export function checkTokenOfUser(
  url: string | URL,
  parameters: UserCheckTokenParameters,
  onResult ?: (result: UserCheckTokenResult) => void,
  onError ?: (error: any) => void,
  requestParams ?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      method: 'User.checkToken',
      parameters: parameters
    },
    onResult,
    onError,
    requestParams
  )
}

export function registerUser(
  url: string | URL,
  parameters: UserRegisterParameters,
  onResult ?: (result: Result) => void,
  onError ?: (error: any) => void,
  requestParams ?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      method: 'User.register',
      parameters: parameters
    },
    onResult,
    onError,
    requestParams
  )
}

export function verifyMailOfUser(
  url: string | URL,
  parameters: UserVerifyMailParameters,
  onResult ?: (result: Result) => void,
  onError ?: (error: any) => void,
  requestParams ?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      method: 'User.verifyMail',
      parameters: parameters
    },
    onResult,
    onError,
    requestParams
  )
}

export function sendPasswordResetMailForUser(
  url: string | URL,
  parameters: UserSendPasswordResetMailParameters,
  onResult ?: (result: Result) => void,
  onError ?: (error: any) => void,
  requestParams ?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      method: 'User.sendPasswordResetMail',
      parameters: parameters
    },
    onResult,
    onError,
    requestParams
  )
}

export function resetPasswordOfUser(
  url: string | URL,
  parameters: UserResetPasswordParameters,
  onResult ?: (result: Result) => void,
  onError ?: (error: any) => void,
  requestParams ?: RequestInit
): void {
  fetchHelper(
    url,
    {
      apiVersion: 1,
      method: 'User.resetPassword',
      parameters: parameters
    },
    onResult,
    onError,
    requestParams
  )
}

export class UserLogic {
  url: string | URL
  token: string | undefined

  constructor(url: string | URL) {
    this.url = url
  }

  get(
    criteria?: Criteria,
    onResult?: (result: GetResult<User>) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'User.get',
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
        method: 'User.count',
        parameters: criteria
      },
      onResult,
      onError,
      requestParams
    )
  }

  store(
    user?: Partial<User>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'User.store',
        parameters: user
      },
      onResult,
      onError,
      requestParams
    )
  }

  delete(
    user?: Partial<User>,
    onResult?: (result: ChangeResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'User.delete',
        parameters: user
      },
      onResult,
      onError,
      requestParams
    )
  }

  setPassword(
    parameters?: UserSetPasswordParameters,
    onResult?: (result: Result) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'User.setPassword',
        parameters: parameters
      },
      onResult,
      onError,
      requestParams
    )
  }

  login(
    parameters?: UserLoginParameters,
    onResult?: (result: UserLoginResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        method: 'User.login',
        parameters: parameters
      },
      onResult,
      onError,
      requestParams
    )
  }

  logout(
    onResult?: (result: Result) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        token: this.token,
        method: 'User.logout'
      },
      onResult,
      onError,
      requestParams
    )
  }

  checkToken(
    parameters: UserCheckTokenParameters,
    onResult?: (result: UserCheckTokenResult) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        method: 'User.checkToken',
        parameters: parameters
      },
      onResult,
      onError,
      requestParams
    )
  }

  register(
    parameters: UserRegisterParameters,
    onResult?: (result: Result) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        method: 'User.register',
        parameters: parameters
      },
      onResult,
      onError,
      requestParams
    )
  }

  verifyMail(
    parameters: UserVerifyMailParameters,
    onResult?: (result: Result) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        method: 'User.verifyMail',
        parameters: parameters
      },
      onResult,
      onError,
      requestParams
    )
  }

  sendPasswordResetMail(
    parameters: UserSendPasswordResetMailParameters,
    onResult?: (result: Result) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        method: 'User.sendPasswordResetMail',
        parameters: parameters
      },
      onResult,
      onError,
      requestParams
    )
  }

  resetPassword(
    parameters: UserResetPasswordParameters,
    onResult?: (result: Result) => void,
    onError?: (error: any) => void,
    requestParams?: RequestInit
  ): void {
    fetchHelper(
      this.url,
      {
        apiVersion: 1,
        method: 'User.resetPassword',
        parameters: parameters
      },
      onResult,
      onError,
      requestParams
    )
  }
}
