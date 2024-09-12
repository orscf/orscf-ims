import * as Models from './models';
/**
 * Contains arguments for calling 'RequestUnblindingToken'.
 * Method: returns an unblindingToken which is not activated
 */
export declare class RequestUnblindingTokenRequest {
    researchStudyName: string;
    subjectId: string;
    reason: string;
    requestingPerson: string;
}
/**
 * Contains results from calling 'RequestUnblindingToken'.
 * Method: returns an unblindingToken which is not activated
 */
export declare class RequestUnblindingTokenResponse {
    fault?: string;
    return: string;
}
/**
 * Contains arguments for calling 'GetUnblindingTokenState'.
 * Method: 0: not activated yet, 1=activated (can be used for 'UnblindSubject'), 2=expired/already used
 */
export declare class GetUnblindingTokenStateRequest {
    unblindingToken: string;
}
/**
 * Contains results from calling 'GetUnblindingTokenState'.
 * Method: 0: not activated yet, 1=activated (can be used for 'UnblindSubject'), 2=expired/already used
 */
export declare class GetUnblindingTokenStateResponse {
    fault?: string;
    return: number;
}
/**
 * Contains arguments for calling 'UnblindSubject'.
 * Method: (only works with an activated unblindingOtp )
 */
export declare class UnblindSubjectRequest {
    researchStudyName: string;
    subjectId: string;
    unblindingToken: string;
}
/**
 * Contains results from calling 'UnblindSubject'.
 * Method: (only works with an activated unblindingOtp )
 */
export declare class UnblindSubjectResponse {
    fault?: string;
    return: Models.IdentityDetails;
}
/**
 * Contains arguments for calling 'GetApiVersion'.
 * Method: returns the version of the ORSCF specification which is implemented by this API,
 * (this can be used for backward compatibility within inhomogeneous infrastructures)
 */
export declare class GetApiVersionRequest {
}
/**
 * Contains results from calling 'GetApiVersion'.
 * Method: returns the version of the ORSCF specification which is implemented by this API,
 * (this can be used for backward compatibility within inhomogeneous infrastructures)
 */
export declare class GetApiVersionResponse {
    fault?: string;
    return: string;
}
/**
 * Contains arguments for calling 'GetCapabilities'.
 * Method: returns a list of API-features (there are several 'services' for different use cases, described by ORSCF)
 * supported by this implementation. The following values are possible:
 * 'Pseudonymization', 'IdentityUnblinding',
 */
export declare class GetCapabilitiesRequest {
}
/**
 * Contains results from calling 'GetCapabilities'.
 * Method: returns a list of API-features (there are several 'services' for different use cases, described by ORSCF)
 * supported by this implementation. The following values are possible:
 * 'Pseudonymization', 'IdentityUnblinding',
 */
export declare class GetCapabilitiesResponse {
    fault?: string;
    return: string[];
}
/**
 * Contains arguments for calling 'GetPermittedAuthScopes'.
 * Method: returns a list of available capabilities ("API:Pseudonymization") and/or
 * data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72")
 * which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be:
 * 0=auth needed /
 * 1=authenticated /
 * -1=auth expired /
 * -2=auth invalid/disabled
 */
export declare class GetPermittedAuthScopesRequest {
}
/**
 * Contains results from calling 'GetPermittedAuthScopes'.
 * Method: returns a list of available capabilities ("API:Pseudonymization") and/or
 * data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72")
 * which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be:
 * 0=auth needed /
 * 1=authenticated /
 * -1=auth expired /
 * -2=auth invalid/disabled
 */
export declare class GetPermittedAuthScopesResponse {
    authState: number;
    fault?: string;
    return: string[];
}
/**
 * Contains arguments for calling 'GetOAuthTokenRequestUrl'.
 * Method: OPTIONAL: If the authentication on the current service is mapped
 * using tokens and should provide information about the source at this point,
 * the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
 */
export declare class GetOAuthTokenRequestUrlRequest {
}
/**
 * Contains results from calling 'GetOAuthTokenRequestUrl'.
 * Method: OPTIONAL: If the authentication on the current service is mapped
 * using tokens and should provide information about the source at this point,
 * the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
 */
export declare class GetOAuthTokenRequestUrlResponse {
    fault?: string;
    return: string;
}
/**
 * Contains arguments for calling 'GetExtendedFieldDescriptors'.
 */
export declare class GetExtendedFieldDescriptorsRequest {
    languagePref?: string;
}
/**
 * Contains results from calling 'GetExtendedFieldDescriptors'.
 */
export declare class GetExtendedFieldDescriptorsResponse {
    fault?: string;
    return: Models.ExtendedFieldDescriptor[];
}
/**
 * Contains arguments for calling 'GetOrCreatePseudonym'.
 */
export declare class GetOrCreatePseudonymRequest {
    researchStudyUid: string;
    givenName: string;
    familyName: string;
    birthDate: string;
    extendedFields: Object;
    siteUid: string;
}
/**
 * Contains results from calling 'GetOrCreatePseudonym'.
 */
export declare class GetOrCreatePseudonymResponse {
    pseudonym: string;
    wasCreatedNewly: boolean;
    fault?: string;
    return: boolean;
}
/**
 * Contains arguments for calling 'GetExisitingPseudonym'.
 */
export declare class GetExisitingPseudonymRequest {
    researchStudyUid: string;
    givenName: string;
    familyName: string;
    birthDate: string;
    extendedFields: Object;
}
/**
 * Contains results from calling 'GetExisitingPseudonym'.
 */
export declare class GetExisitingPseudonymResponse {
    pseudonym: string;
    fault?: string;
    return: boolean;
}
//# sourceMappingURL=dtos.d.ts.map