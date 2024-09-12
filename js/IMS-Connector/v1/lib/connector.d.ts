import * as Models from 'orscf-identitymanagement-contract/models';
/**
 * Provides an workflow-level API for interating with a 'IdentityManagementSystem' (IMS)
 */
export declare class IdentityUnblindingClient {
    private rootUrlResolver;
    private apiTokenResolver;
    private httpPostMethod;
    constructor(rootUrlResolver: () => string, apiTokenResolver: () => string, httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>);
    private getEndpointUrl;
    /**
     * returns an unblindingToken which is not activated
     */
    requestUnblindingToken(researchStudyName: string, subjectId: string, reason: string, requestingPerson: string): Promise<string>;
    /**
     * 0: not activated yet, 1=activated (can be used for 'UnblindSubject'), 2=expired/already used
     */
    getUnblindingTokenState(unblindingToken: string): Promise<number>;
    /**
     * (only works with an activated unblindingOtp )
     */
    unblindSubject(researchStudyName: string, subjectId: string, unblindingToken: string): Promise<Models.IdentityDetails>;
}
/**
 * Provides interoperability information for the current implementation
 */
export declare class ImsApiInfoClient {
    private rootUrlResolver;
    private apiTokenResolver;
    private httpPostMethod;
    constructor(rootUrlResolver: () => string, apiTokenResolver: () => string, httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>);
    private getEndpointUrl;
    /**
     * returns the version of the ORSCF specification which is implemented by this API, (this can be used for backward compatibility within inhomogeneous infrastructures)
     */
    getApiVersion(): Promise<string>;
    /**
     * returns a list of API-features (there are several 'services' for different use cases, described by ORSCF) supported by this implementation. The following values are possible: 'Pseudonymization', 'IdentityUnblinding',
     */
    getCapabilities(): Promise<string[]>;
    /**
     * returns a list of available capabilities ("API:Pseudonymization") and/or data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72") which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be: 0=auth needed / 1=authenticated / -1=auth expired / -2=auth invalid/disabled
     */
    getPermittedAuthScopes(): Promise<{
        authState: number;
        return: string[];
    }>;
    /**
     * OPTIONAL: If the authentication on the current service is mapped using tokens and should provide information about the source at this point, the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
     */
    getOAuthTokenRequestUrl(): Promise<string>;
}
/**
 * Provides an workflow-level API for interating with a 'IdentityManagementSystem' (IMS)
 */
export declare class PseudonymizationClient {
    private rootUrlResolver;
    private apiTokenResolver;
    private httpPostMethod;
    constructor(rootUrlResolver: () => string, apiTokenResolver: () => string, httpPostMethod: (url: string, requestObject: any, apiToken: string) => Promise<any>);
    private getEndpointUrl;
    /**
     * GetExtendedFieldDescriptors
     */
    getExtendedFieldDescriptors(languagePref?: string): Promise<Models.ExtendedFieldDescriptor[]>;
    /**
     * GetOrCreatePseudonym
     */
    getOrCreatePseudonym(researchStudyUid: string, givenName: string, familyName: string, birthDate: string, extendedFields: Object, siteUid: string): Promise<{
        pseudonym: string;
        wasCreatedNewly: boolean;
        return: boolean;
    }>;
    /**
     * GetExisitingPseudonym
     */
    getExisitingPseudonym(researchStudyUid: string, givenName: string, familyName: string, birthDate: string, extendedFields: Object): Promise<{
        pseudonym: string;
        return: boolean;
    }>;
}
export declare class ImsConnector {
    private rootUrlResolver;
    private apiTokenResolver;
    private httpPostMethod?;
    private identityUnblindingClient;
    private imsApiInfoClient;
    private pseudonymizationClient;
    private axiosHttpApi?;
    constructor(rootUrlResolver: () => string, apiTokenResolver: () => string, httpPostMethod?: ((url: string, requestObject: any, apiToken: string) => Promise<any>) | undefined);
    private getRootUrl;
    /**
     * Provides an workflow-level API for interating with a 'IdentityManagementSystem' (IMS)
     */
    get identityUnblinding(): IdentityUnblindingClient;
    /**
     * Provides interoperability information for the current implementation
     */
    get imsApiInfo(): ImsApiInfoClient;
    /**
     * Provides an workflow-level API for interating with a 'IdentityManagementSystem' (IMS)
     */
    get pseudonymization(): PseudonymizationClient;
}
//# sourceMappingURL=connector.d.ts.map