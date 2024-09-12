"use strict";
/* based on ORSCF IdentityManagement Contract v1.8.0.0 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImsConnector = exports.PseudonymizationClient = exports.ImsApiInfoClient = exports.IdentityUnblindingClient = void 0;
const axios_1 = require("axios");
/**
 * Provides an workflow-level API for interating with a 'IdentityManagementSystem' (IMS)
 */
class IdentityUnblindingClient {
    constructor(rootUrlResolver, apiTokenResolver, httpPostMethod) {
        this.rootUrlResolver = rootUrlResolver;
        this.apiTokenResolver = apiTokenResolver;
        this.httpPostMethod = httpPostMethod;
    }
    getEndpointUrl() {
        let rootUrl = this.rootUrlResolver();
        if (rootUrl.endsWith('/')) {
            return rootUrl + 'identityUnblinding/';
        }
        else {
            return rootUrl + '/identityUnblinding/';
        }
    }
    /**
     * returns an unblindingToken which is not activated
     */
    requestUnblindingToken(researchStudyName, subjectId, reason, requestingPerson) {
        let requestWrapper = {
            researchStudyName: researchStudyName,
            subjectId: subjectId,
            reason: reason,
            requestingPerson: requestingPerson
        };
        let url = this.getEndpointUrl() + 'requestUnblindingToken';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
    /**
     * 0: not activated yet, 1=activated (can be used for 'UnblindSubject'), 2=expired/already used
     */
    getUnblindingTokenState(unblindingToken) {
        let requestWrapper = {
            unblindingToken: unblindingToken
        };
        let url = this.getEndpointUrl() + 'getUnblindingTokenState';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
    /**
     * (only works with an activated unblindingOtp )
     */
    unblindSubject(researchStudyName, subjectId, unblindingToken) {
        let requestWrapper = {
            researchStudyName: researchStudyName,
            subjectId: subjectId,
            unblindingToken: unblindingToken
        };
        let url = this.getEndpointUrl() + 'unblindSubject';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
}
exports.IdentityUnblindingClient = IdentityUnblindingClient;
/**
 * Provides interoperability information for the current implementation
 */
class ImsApiInfoClient {
    constructor(rootUrlResolver, apiTokenResolver, httpPostMethod) {
        this.rootUrlResolver = rootUrlResolver;
        this.apiTokenResolver = apiTokenResolver;
        this.httpPostMethod = httpPostMethod;
    }
    getEndpointUrl() {
        let rootUrl = this.rootUrlResolver();
        if (rootUrl.endsWith('/')) {
            return rootUrl + 'imsApiInfo/';
        }
        else {
            return rootUrl + '/imsApiInfo/';
        }
    }
    /**
     * returns the version of the ORSCF specification which is implemented by this API, (this can be used for backward compatibility within inhomogeneous infrastructures)
     */
    getApiVersion() {
        let requestWrapper = {};
        let url = this.getEndpointUrl() + 'getApiVersion';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
    /**
     * returns a list of API-features (there are several 'services' for different use cases, described by ORSCF) supported by this implementation. The following values are possible: 'Pseudonymization', 'IdentityUnblinding',
     */
    getCapabilities() {
        let requestWrapper = {};
        let url = this.getEndpointUrl() + 'getCapabilities';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
    /**
     * returns a list of available capabilities ("API:Pseudonymization") and/or data-scopes ("Study:9B2C3F48-2941-2F8F-4D35-7D117D5C6F72") which are permitted for the CURRENT ACCESSOR and gives information about its 'authState', which can be: 0=auth needed / 1=authenticated / -1=auth expired / -2=auth invalid/disabled
     */
    getPermittedAuthScopes() {
        let requestWrapper = {};
        let url = this.getEndpointUrl() + 'getPermittedAuthScopes';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { authState: responseWrapper.authState, return: responseWrapper.return };
        });
    }
    /**
     * OPTIONAL: If the authentication on the current service is mapped using tokens and should provide information about the source at this point, the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
     */
    getOAuthTokenRequestUrl() {
        let requestWrapper = {};
        let url = this.getEndpointUrl() + 'getOAuthTokenRequestUrl';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
}
exports.ImsApiInfoClient = ImsApiInfoClient;
/**
 * Provides an workflow-level API for interating with a 'IdentityManagementSystem' (IMS)
 */
class PseudonymizationClient {
    constructor(rootUrlResolver, apiTokenResolver, httpPostMethod) {
        this.rootUrlResolver = rootUrlResolver;
        this.apiTokenResolver = apiTokenResolver;
        this.httpPostMethod = httpPostMethod;
    }
    getEndpointUrl() {
        let rootUrl = this.rootUrlResolver();
        if (rootUrl.endsWith('/')) {
            return rootUrl + 'pseudonymization/';
        }
        else {
            return rootUrl + '/pseudonymization/';
        }
    }
    /**
     * GetExtendedFieldDescriptors
     */
    getExtendedFieldDescriptors(languagePref = 'EN') {
        let requestWrapper = {
            languagePref: languagePref
        };
        let url = this.getEndpointUrl() + 'getExtendedFieldDescriptors';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return responseWrapper.return;
        });
    }
    /**
     * GetOrCreatePseudonym
     */
    getOrCreatePseudonym(researchStudyUid, givenName, familyName, birthDate, extendedFields, siteUid) {
        let requestWrapper = {
            researchStudyUid: researchStudyUid,
            givenName: givenName,
            familyName: familyName,
            birthDate: birthDate,
            extendedFields: extendedFields,
            siteUid: siteUid,
        };
        let url = this.getEndpointUrl() + 'getOrCreatePseudonym';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { pseudonym: responseWrapper.pseudonym, wasCreatedNewly: responseWrapper.wasCreatedNewly, return: responseWrapper.return };
        });
    }
    /**
     * GetExisitingPseudonym
     */
    getExisitingPseudonym(researchStudyUid, givenName, familyName, birthDate, extendedFields) {
        let requestWrapper = {
            researchStudyUid: researchStudyUid,
            givenName: givenName,
            familyName: familyName,
            birthDate: birthDate,
            extendedFields: extendedFields,
        };
        let url = this.getEndpointUrl() + 'getExisitingPseudonym';
        return this.httpPostMethod(url, requestWrapper, this.apiTokenResolver()).then((r) => {
            let responseWrapper = r;
            if (responseWrapper.fault) {
                console.warn('Request to "' + url + '" faulted: ' + responseWrapper.fault);
                throw { message: responseWrapper.fault };
            }
            return { pseudonym: responseWrapper.pseudonym, return: responseWrapper.return };
        });
    }
}
exports.PseudonymizationClient = PseudonymizationClient;
class ImsConnector {
    constructor(rootUrlResolver, apiTokenResolver, httpPostMethod) {
        this.rootUrlResolver = rootUrlResolver;
        this.apiTokenResolver = apiTokenResolver;
        this.httpPostMethod = httpPostMethod;
        if (!this.httpPostMethod) {
            this.axiosHttpApi = axios_1.default.create({ baseURL: this.rootUrlResolver() });
            this.httpPostMethod = (url, requestObject, apiToken) => {
                if (!this.axiosHttpApi) {
                    this.axiosHttpApi = axios_1.default.create({ baseURL: this.rootUrlResolver() });
                }
                return this.axiosHttpApi.post(url, requestObject, {
                    headers: {
                        Authorization: apiToken
                    }
                });
            };
        }
        this.identityUnblindingClient = new IdentityUnblindingClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
        this.imsApiInfoClient = new ImsApiInfoClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
        this.pseudonymizationClient = new PseudonymizationClient(this.rootUrlResolver, this.apiTokenResolver, this.httpPostMethod);
    }
    getRootUrl() {
        let rootUrl = this.rootUrlResolver();
        if (rootUrl.endsWith('/')) {
            return rootUrl;
        }
        else {
            return rootUrl + '/';
        }
    }
    /**
     * Provides an workflow-level API for interating with a 'IdentityManagementSystem' (IMS)
     */
    get identityUnblinding() { return this.identityUnblindingClient; }
    /**
     * Provides interoperability information for the current implementation
     */
    get imsApiInfo() { return this.imsApiInfoClient; }
    /**
     * Provides an workflow-level API for interating with a 'IdentityManagementSystem' (IMS)
     */
    get pseudonymization() { return this.pseudonymizationClient; }
}
exports.ImsConnector = ImsConnector;
//# sourceMappingURL=connector.js.map