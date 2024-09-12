"use strict";
/* based on ORSCF IdentityManagement Contract v1.8.0.0 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetExisitingPseudonymResponse = exports.GetExisitingPseudonymRequest = exports.GetOrCreatePseudonymResponse = exports.GetOrCreatePseudonymRequest = exports.GetExtendedFieldDescriptorsResponse = exports.GetExtendedFieldDescriptorsRequest = exports.GetOAuthTokenRequestUrlResponse = exports.GetOAuthTokenRequestUrlRequest = exports.GetPermittedAuthScopesResponse = exports.GetPermittedAuthScopesRequest = exports.GetCapabilitiesResponse = exports.GetCapabilitiesRequest = exports.GetApiVersionResponse = exports.GetApiVersionRequest = exports.UnblindSubjectResponse = exports.UnblindSubjectRequest = exports.GetUnblindingTokenStateResponse = exports.GetUnblindingTokenStateRequest = exports.RequestUnblindingTokenResponse = exports.RequestUnblindingTokenRequest = void 0;
var Models = require("./models");
/**
 * Contains arguments for calling 'RequestUnblindingToken'.
 * Method: returns an unblindingToken which is not activated
 */
var RequestUnblindingTokenRequest = /** @class */ (function () {
    function RequestUnblindingTokenRequest() {
        // Required Argument for 'RequestUnblindingToken' (string)
        this.researchStudyName = '';
        // Required Argument for 'RequestUnblindingToken' (string)
        this.subjectId = '';
        // Required Argument for 'RequestUnblindingToken' (string)
        this.reason = '';
        // Required Argument for 'RequestUnblindingToken' (string)
        this.requestingPerson = '';
    }
    return RequestUnblindingTokenRequest;
}());
exports.RequestUnblindingTokenRequest = RequestUnblindingTokenRequest;
/**
 * Contains results from calling 'RequestUnblindingToken'.
 * Method: returns an unblindingToken which is not activated
 */
var RequestUnblindingTokenResponse = /** @class */ (function () {
    function RequestUnblindingTokenResponse() {
        // Return-Value of 'RequestUnblindingToken' (String)
        this.return = '';
    }
    return RequestUnblindingTokenResponse;
}());
exports.RequestUnblindingTokenResponse = RequestUnblindingTokenResponse;
/**
 * Contains arguments for calling 'GetUnblindingTokenState'.
 * Method: 0: not activated yet, 1=activated (can be used for 'UnblindSubject'), 2=expired/already used
 */
var GetUnblindingTokenStateRequest = /** @class */ (function () {
    function GetUnblindingTokenStateRequest() {
        // Required Argument for 'GetUnblindingTokenState' (string)
        this.unblindingToken = '';
    }
    return GetUnblindingTokenStateRequest;
}());
exports.GetUnblindingTokenStateRequest = GetUnblindingTokenStateRequest;
/**
 * Contains results from calling 'GetUnblindingTokenState'.
 * Method: 0: not activated yet, 1=activated (can be used for 'UnblindSubject'), 2=expired/already used
 */
var GetUnblindingTokenStateResponse = /** @class */ (function () {
    function GetUnblindingTokenStateResponse() {
        // Return-Value of 'GetUnblindingTokenState' (Int32)
        this.return = 0;
    }
    return GetUnblindingTokenStateResponse;
}());
exports.GetUnblindingTokenStateResponse = GetUnblindingTokenStateResponse;
/**
 * Contains arguments for calling 'UnblindSubject'.
 * Method: (only works with an activated unblindingOtp )
 */
var UnblindSubjectRequest = /** @class */ (function () {
    function UnblindSubjectRequest() {
        // Required Argument for 'UnblindSubject' (string)
        this.researchStudyName = '';
        // Required Argument for 'UnblindSubject' (string)
        this.subjectId = '';
        // Required Argument for 'UnblindSubject' (string)
        this.unblindingToken = '';
    }
    return UnblindSubjectRequest;
}());
exports.UnblindSubjectRequest = UnblindSubjectRequest;
/**
 * Contains results from calling 'UnblindSubject'.
 * Method: (only works with an activated unblindingOtp )
 */
var UnblindSubjectResponse = /** @class */ (function () {
    function UnblindSubjectResponse() {
        // Return-Value of 'UnblindSubject' (IdentityDetails)
        this.return = new Models.IdentityDetails();
    }
    return UnblindSubjectResponse;
}());
exports.UnblindSubjectResponse = UnblindSubjectResponse;
/**
 * Contains arguments for calling 'GetApiVersion'.
 * Method: returns the version of the ORSCF specification which is implemented by this API,
 * (this can be used for backward compatibility within inhomogeneous infrastructures)
 */
var GetApiVersionRequest = /** @class */ (function () {
    function GetApiVersionRequest() {
    }
    return GetApiVersionRequest;
}());
exports.GetApiVersionRequest = GetApiVersionRequest;
/**
 * Contains results from calling 'GetApiVersion'.
 * Method: returns the version of the ORSCF specification which is implemented by this API,
 * (this can be used for backward compatibility within inhomogeneous infrastructures)
 */
var GetApiVersionResponse = /** @class */ (function () {
    function GetApiVersionResponse() {
        // Return-Value of 'GetApiVersion' (String)
        this.return = '';
    }
    return GetApiVersionResponse;
}());
exports.GetApiVersionResponse = GetApiVersionResponse;
/**
 * Contains arguments for calling 'GetCapabilities'.
 * Method: returns a list of API-features (there are several 'services' for different use cases, described by ORSCF)
 * supported by this implementation. The following values are possible:
 * 'Pseudonymization', 'IdentityUnblinding',
 */
var GetCapabilitiesRequest = /** @class */ (function () {
    function GetCapabilitiesRequest() {
    }
    return GetCapabilitiesRequest;
}());
exports.GetCapabilitiesRequest = GetCapabilitiesRequest;
/**
 * Contains results from calling 'GetCapabilities'.
 * Method: returns a list of API-features (there are several 'services' for different use cases, described by ORSCF)
 * supported by this implementation. The following values are possible:
 * 'Pseudonymization', 'IdentityUnblinding',
 */
var GetCapabilitiesResponse = /** @class */ (function () {
    function GetCapabilitiesResponse() {
        // Return-Value of 'GetCapabilities' (String[])
        this.return = [];
    }
    return GetCapabilitiesResponse;
}());
exports.GetCapabilitiesResponse = GetCapabilitiesResponse;
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
var GetPermittedAuthScopesRequest = /** @class */ (function () {
    function GetPermittedAuthScopesRequest() {
    }
    return GetPermittedAuthScopesRequest;
}());
exports.GetPermittedAuthScopesRequest = GetPermittedAuthScopesRequest;
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
var GetPermittedAuthScopesResponse = /** @class */ (function () {
    function GetPermittedAuthScopesResponse() {
        // Out-Argument of 'GetPermittedAuthScopes' (number)
        this.authState = 0;
        // Return-Value of 'GetPermittedAuthScopes' (String[])
        this.return = [];
    }
    return GetPermittedAuthScopesResponse;
}());
exports.GetPermittedAuthScopesResponse = GetPermittedAuthScopesResponse;
/**
 * Contains arguments for calling 'GetOAuthTokenRequestUrl'.
 * Method: OPTIONAL: If the authentication on the current service is mapped
 * using tokens and should provide information about the source at this point,
 * the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
 */
var GetOAuthTokenRequestUrlRequest = /** @class */ (function () {
    function GetOAuthTokenRequestUrlRequest() {
    }
    return GetOAuthTokenRequestUrlRequest;
}());
exports.GetOAuthTokenRequestUrlRequest = GetOAuthTokenRequestUrlRequest;
/**
 * Contains results from calling 'GetOAuthTokenRequestUrl'.
 * Method: OPTIONAL: If the authentication on the current service is mapped
 * using tokens and should provide information about the source at this point,
 * the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
 */
var GetOAuthTokenRequestUrlResponse = /** @class */ (function () {
    function GetOAuthTokenRequestUrlResponse() {
        // Return-Value of 'GetOAuthTokenRequestUrl' (String)
        this.return = '';
    }
    return GetOAuthTokenRequestUrlResponse;
}());
exports.GetOAuthTokenRequestUrlResponse = GetOAuthTokenRequestUrlResponse;
/**
 * Contains arguments for calling 'GetExtendedFieldDescriptors'.
 */
var GetExtendedFieldDescriptorsRequest = /** @class */ (function () {
    function GetExtendedFieldDescriptorsRequest() {
    }
    return GetExtendedFieldDescriptorsRequest;
}());
exports.GetExtendedFieldDescriptorsRequest = GetExtendedFieldDescriptorsRequest;
/**
 * Contains results from calling 'GetExtendedFieldDescriptors'.
 */
var GetExtendedFieldDescriptorsResponse = /** @class */ (function () {
    function GetExtendedFieldDescriptorsResponse() {
        // Return-Value of 'GetExtendedFieldDescriptors' (ExtendedFieldDescriptor[])
        this.return = [];
    }
    return GetExtendedFieldDescriptorsResponse;
}());
exports.GetExtendedFieldDescriptorsResponse = GetExtendedFieldDescriptorsResponse;
/**
 * Contains arguments for calling 'GetOrCreatePseudonym'.
 */
var GetOrCreatePseudonymRequest = /** @class */ (function () {
    function GetOrCreatePseudonymRequest() {
        // Required Argument for 'GetOrCreatePseudonym' (string): A UUID
        this.researchStudyUid = '';
        // Required Argument for 'GetOrCreatePseudonym' (string): the Firstname a the paticipant (named as in the HL7 standard)
        this.givenName = '';
        // Required Argument for 'GetOrCreatePseudonym' (string)
        this.familyName = '';
        // Required Argument for 'GetOrCreatePseudonym' (string): date in format 'yyyy-MM-dd' (must NOT be a partial date for this usecase!)
        this.birthDate = '';
        // Required Argument for 'GetOrCreatePseudonym' (Object)
        this.extendedFields = new Object();
        // Required Argument for 'GetOrCreatePseudonym' (string): A UUID
        this.siteUid = '';
    }
    return GetOrCreatePseudonymRequest;
}());
exports.GetOrCreatePseudonymRequest = GetOrCreatePseudonymRequest;
/**
 * Contains results from calling 'GetOrCreatePseudonym'.
 */
var GetOrCreatePseudonymResponse = /** @class */ (function () {
    function GetOrCreatePseudonymResponse() {
        // Out-Argument of 'GetOrCreatePseudonym' (string)
        this.pseudonym = '';
        // Out-Argument of 'GetOrCreatePseudonym' (boolean)
        this.wasCreatedNewly = false;
        // Return-Value of 'GetOrCreatePseudonym' (Boolean)
        this.return = false;
    }
    return GetOrCreatePseudonymResponse;
}());
exports.GetOrCreatePseudonymResponse = GetOrCreatePseudonymResponse;
/**
 * Contains arguments for calling 'GetExisitingPseudonym'.
 */
var GetExisitingPseudonymRequest = /** @class */ (function () {
    function GetExisitingPseudonymRequest() {
        // Required Argument for 'GetExisitingPseudonym' (string): A UUID
        this.researchStudyUid = '';
        // Required Argument for 'GetExisitingPseudonym' (string)
        this.givenName = '';
        // Required Argument for 'GetExisitingPseudonym' (string)
        this.familyName = '';
        // Required Argument for 'GetExisitingPseudonym' (string): date in format 'yyyy-MM-dd' (must NOT be a partial date for this usecase!)
        this.birthDate = '';
        // Required Argument for 'GetExisitingPseudonym' (Object)
        this.extendedFields = new Object();
    }
    return GetExisitingPseudonymRequest;
}());
exports.GetExisitingPseudonymRequest = GetExisitingPseudonymRequest;
/**
 * Contains results from calling 'GetExisitingPseudonym'.
 */
var GetExisitingPseudonymResponse = /** @class */ (function () {
    function GetExisitingPseudonymResponse() {
        // Out-Argument of 'GetExisitingPseudonym' (string)
        this.pseudonym = '';
        // Return-Value of 'GetExisitingPseudonym' (Boolean)
        this.return = false;
    }
    return GetExisitingPseudonymResponse;
}());
exports.GetExisitingPseudonymResponse = GetExisitingPseudonymResponse;
//# sourceMappingURL=dtos.js.map