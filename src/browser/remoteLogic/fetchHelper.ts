import { Result } from 'coderitter-api-rmc'
import { fromJsonObj } from 'knight-json'
import { instantiator } from '../../shared/Instantiator'

export function fetchHelper<ResultType extends Result>(
  url: string | URL,
  rmc: any,
  onResult?: (getResult: ResultType) => void,
  onError?: (error: any) => void,
  requestParams?: RequestInit
): void {
  fetch(url, {
    ...requestParams,
    method: 'POST',
    body: JSON.stringify(rmc)
  })
    // No need to check the HTTP status code since the provided JSON contains the error information
    .then(response => response.json())
    .catch(onError)
    .then(responseJsonObj => {
      const result = fromJsonObj(responseJsonObj, { instantiator: instantiator })

      if (result.error != undefined && onError) {
        onError(result.error)
      }
      else if (result.error == undefined && onResult) {
        onResult(result)
      }
    })
    .catch(onError)
}
