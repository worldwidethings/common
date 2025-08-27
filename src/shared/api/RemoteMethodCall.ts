import { type RemoteMethodCall as CoderitterRmc } from 'coderitter-api-rmc'

export interface RemoteMethodCall<ParametersType = any> extends CoderitterRmc<ParametersType> {
    organizationId?: number
    solutionId?: number
}
