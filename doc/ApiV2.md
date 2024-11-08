# UnblindingClearanceAwaiterService
Following the "PASSIVE-APPROVAL" Workflow, this endpoint is directly implemented on the IMS!
"PASSIVE-APPROVAL" is based on the idea, that clearances have to be (pre-)delivered by a foreign master system ('push' principle)

### Methods:



## .GrantClearanceForUnblinding
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|unblindingToken|String|**IN**-Param (required)|
|pseudonymsToUnblind|String[] *(array)*|**IN**-Param (required)|
|grantedUnitl|DateTime|**IN**-Param (required)|
no return value (void)
# UnblindingClearanceGrantingService
Following the "ACTIVE-APPROVAL" Workflow, this endpoint is usually implemented on a FOREIGN system, that should be queried by an IMS!
"ACTIVE-APPROVAL" is based on the idea, that clearances have to be requested on demand from a foreign master system  ('pull' principle)

### Methods:



## .HasClearanceForUnblinding
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|unblindingToken|String|**IN**-Param (required)|
|pseudonymsToUnblind|String[] *(array)*|**IN**-Param (required)|
|accessRelatedDetails|*Dict*<String,String>|**IN**-Param (required)|
**return value:** Int32
# AgeEvaluationService

### Methods:



## .EvaluateAge
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|momentOfValuation|DateTime|**IN**-Param (required)|
|pseudonymesToEvaluate|String[] *(array)*|**IN**-Param (required)|
|pseudonymKind|String|**IN**-Param (required)|
|ages|Int32[] *(array)*|**OUT**-Param |
no return value (void)
# ImsApiInfoService
Provides interoperability information for the current implementation

### Methods:



## .GetApiVersion
returns the version of the ORSCF specification which is implemented by this API,
(this can be used for backward compatibility within inhomogeneous infrastructures)
no parameters
**return value:** String



## .GetCapabilities
returns a list of API-features (there are several 'services' for different use cases, described by ORSCF)
supported by this implementation. The following values are possible:
'ImsApiInfo',
'Pseudonymization',
'AgeEvaluation',
'Unblinding',
'UnblindingClearanceAwaiter'  (backend workflow for "PASSIVE-APPROVAL"),
'UnblindingClearanceGranting' (backend workflow for "ACTIVE-APPROVAL")
no parameters
**return value:** String[] *(array)*



## .GetPermittedAuthScopes
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|authState|Int32|**OUT**-Param |
**return value:** String[] *(array)*



## .GetOAuthTokenRequestUrl
OPTIONAL: If the authentication on the current service is mapped
using tokens and should provide information about the source at this point,
the login URL to be called up via browser (OAuth ['CIBA-Flow'](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html)) is returned here.
no parameters
**return value:** String



## .GetExtendedFieldDescriptors
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|languagePref|String|**IN**-Param (optional): Preferred language for the 'DisplayLabel' and 'InputDescription' fields of the returned descriptors. ONLY RELEVANT FOR THE UI!|
**return value:** [ExtendedFieldDescriptor](#ExtendedFieldDescriptor)[] *(array)*
# PseudonymizationService
Provides an workflow-level API for interating with a 'IdentityManagementSystem' (IMS)

### Methods:



## .GetOrCreatePseudonym
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|givenName|String|**IN**-Param (required)|
|familyName|String|**IN**-Param (required)|
|birthDate|String|**IN**-Param (required)|
|pseudonymKindsToReturn|String[] *(array)*|**IN**-Param (required)|
|extendedFields|*Dict*<String,String>|**IN**-Param (required)|
|pseudonyms|[Pseudonym](#Pseudonym)[] *(array)*|**OUT**-Param |
|wasCreatedNewly|Boolean|**OUT**-Param |
**return value:** Boolean



## .GetExisitingPseudonym
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|givenName|String|**IN**-Param (required)|
|familyName|String|**IN**-Param (required)|
|birthDate|String|**IN**-Param (required)|
|pseudonymKindsToReturn|String[] *(array)*|**IN**-Param (required)|
|extendedFields|*Dict*<String,String>|**IN**-Param (required)|
|pseudonyms|[Pseudonym](#Pseudonym)[] *(array)*|**OUT**-Param |
**return value:** Boolean
# UnblindingService
Provides an workflow-level API for interating with a 'IdentityManagementSystem' (IMS)

### Methods:



## .RequestUnblindingToken
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|pseudonymsToUnblind|String[] *(array)*|**IN**-Param (required)|
|pseudonymKind|String|**IN**-Param (required)|
|requestReason|String|**IN**-Param (required)|
|requestBy|String|**IN**-Param (required)|
|unblindingToken|String|**OUT**-Param |
**return value:** Int32



## .TryUnblind
Returns:
1: on SUCCESS (unblindedIdentities should contain data) /
0: if no realtime response is possible (delayed approval is outstanding)
-1: if a new unblindingToken is required (because the current has expired or has been repressed) /
-2: if the access is denied for addressed scope of data
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|unblindingToken|String|**IN**-Param (required)|
|pseudonymsToUnblind|String[] *(array)*|**IN**-Param (required)|
|pseudonymKind|String|**IN**-Param (required)|
|unblindedIdentities|[IdentityDetails](#IdentityDetails)[] *(array)*|**IN**-Param (required)|
**return value:** Int32
# AdditionalSubjectParticipationIdentifierStore
Provides CRUD access to stored AdditionalSubjectParticipationIdentifiers (based on schema version '2.0.0')

### Methods:



## .GetOriginIdentity
Returns an string, representing the "Identity" of the current origin.
This can be used to discriminate multiple source repos.
(usually it should be related to a SCOPE like {DbServer}+{DbName/Schema}+{EntityName})
NOTE: This is an technical disciminator and it is not required, that it is an human-readable
"frieldly-name". It can just be an Hash or Uid, so its NOT RECOMMENDED to use it as display label!
no parameters
**return value:** String



## .GetCapabilities
Returns an property bag which holds information about the implemented/supported capabilities of this IRepository.
no parameters
**return value:** [RepositoryCapabilities](#RepositoryCapabilities)



## .GetEntityRefs
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [AdditionalSubjectParticipationIdentifierIdentity](#AdditionalSubjectParticipationIdentifierIdentity)[] *(array)*



## .GetEntityRefsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [AdditionalSubjectParticipationIdentifierIdentity](#AdditionalSubjectParticipationIdentifierIdentity)[] *(array)*



## .GetEntityRefsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|[AdditionalSubjectParticipationIdentifierIdentity](#AdditionalSubjectParticipationIdentifierIdentity)[] *(array)*|**IN**-Param (required): Composite Key, which represents the primary identity of a AdditionalSubjectParticipationIdentifier|
**return value:** [AdditionalSubjectParticipationIdentifierIdentity](#AdditionalSubjectParticipationIdentifierIdentity)[] *(array)*



## .GetEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [AdditionalSubjectParticipationIdentifier](#AdditionalSubjectParticipationIdentifier)[] *(array)*



## .GetEntitiesBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [AdditionalSubjectParticipationIdentifier](#AdditionalSubjectParticipationIdentifier)[] *(array)*



## .GetEntitiesByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|[AdditionalSubjectParticipationIdentifierIdentity](#AdditionalSubjectParticipationIdentifierIdentity)[] *(array)*|**IN**-Param (required): Composite Key, which represents the primary identity of a AdditionalSubjectParticipationIdentifier|
**return value:** [AdditionalSubjectParticipationIdentifier](#AdditionalSubjectParticipationIdentifier)[] *(array)*



## .GetEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|[AdditionalSubjectParticipationIdentifierIdentity](#AdditionalSubjectParticipationIdentifierIdentity)[] *(array)*|**IN**-Param (required): Composite Key, which represents the primary identity of a AdditionalSubjectParticipationIdentifier|
|includedFieldNames|String[] *(array)*|**IN**-Param (required)|
**return value:** String[] *(array)*



## .CountAll
no parameters
**return value:** Int32



## .Count
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
**return value:** Int32



## .CountBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
**return value:** Int32



## .ContainsKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|key|[AdditionalSubjectParticipationIdentifierIdentity](#AdditionalSubjectParticipationIdentifierIdentity)|**IN**-Param (required): Composite Key, which represents the primary identity of a AdditionalSubjectParticipationIdentifier|
**return value:** Boolean



## .AddOrUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .AddOrUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[AdditionalSubjectParticipationIdentifier](#AdditionalSubjectParticipationIdentifier)|**IN**-Param (required)|
**return value:** [AdditionalSubjectParticipationIdentifier](#AdditionalSubjectParticipationIdentifier)



## .TryUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .TryUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[AdditionalSubjectParticipationIdentifier](#AdditionalSubjectParticipationIdentifier)|**IN**-Param (required)|
**return value:** [AdditionalSubjectParticipationIdentifier](#AdditionalSubjectParticipationIdentifier)



## .TryAddEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[AdditionalSubjectParticipationIdentifier](#AdditionalSubjectParticipationIdentifier)|**IN**-Param (required)|
**return value:** [AdditionalSubjectParticipationIdentifierIdentity](#AdditionalSubjectParticipationIdentifierIdentity)



## .MassupdateByKeys
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToUpdate|[AdditionalSubjectParticipationIdentifierIdentity](#AdditionalSubjectParticipationIdentifierIdentity)[] *(array)*|**IN**-Param (required): Composite Key, which represents the primary identity of a AdditionalSubjectParticipationIdentifier|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** [AdditionalSubjectParticipationIdentifierIdentity](#AdditionalSubjectParticipationIdentifierIdentity)[] *(array)*



## .Massupdate
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** [AdditionalSubjectParticipationIdentifierIdentity](#AdditionalSubjectParticipationIdentifierIdentity)[] *(array)*



## .MassupdateBySearchExpression
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** [AdditionalSubjectParticipationIdentifierIdentity](#AdditionalSubjectParticipationIdentifierIdentity)[] *(array)*



## .TryDeleteEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToDelete|[AdditionalSubjectParticipationIdentifierIdentity](#AdditionalSubjectParticipationIdentifierIdentity)[] *(array)*|**IN**-Param (required): Composite Key, which represents the primary identity of a AdditionalSubjectParticipationIdentifier|
**return value:** [AdditionalSubjectParticipationIdentifierIdentity](#AdditionalSubjectParticipationIdentifierIdentity)[] *(array)*



## .TryUpdateKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|currentKey|[AdditionalSubjectParticipationIdentifierIdentity](#AdditionalSubjectParticipationIdentifierIdentity)|**IN**-Param (required): Composite Key, which represents the primary identity of a AdditionalSubjectParticipationIdentifier|
|newKey|[AdditionalSubjectParticipationIdentifierIdentity](#AdditionalSubjectParticipationIdentifierIdentity)|**IN**-Param (required): Composite Key, which represents the primary identity of a AdditionalSubjectParticipationIdentifier|
**return value:** Boolean
# SubjectParticipationStore
Provides CRUD access to stored SubjectParticipations (based on schema version '2.0.0')

### Methods:



## .GetOriginIdentity
Returns an string, representing the "Identity" of the current origin.
This can be used to discriminate multiple source repos.
(usually it should be related to a SCOPE like {DbServer}+{DbName/Schema}+{EntityName})
NOTE: This is an technical disciminator and it is not required, that it is an human-readable
"frieldly-name". It can just be an Hash or Uid, so its NOT RECOMMENDED to use it as display label!
no parameters
**return value:** String



## .GetCapabilities
Returns an property bag which holds information about the implemented/supported capabilities of this IRepository.
no parameters
**return value:** [RepositoryCapabilities](#RepositoryCapabilities)



## .GetEntityRefs
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [SubjectParticipationIdentity](#SubjectParticipationIdentity)[] *(array)*



## .GetEntityRefsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [SubjectParticipationIdentity](#SubjectParticipationIdentity)[] *(array)*



## .GetEntityRefsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|[SubjectParticipationIdentity](#SubjectParticipationIdentity)[] *(array)*|**IN**-Param (required): Composite Key, which represents the primary identity of a SubjectParticipation|
**return value:** [SubjectParticipationIdentity](#SubjectParticipationIdentity)[] *(array)*



## .GetEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [SubjectParticipation](#SubjectParticipation)[] *(array)*



## .GetEntitiesBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [SubjectParticipation](#SubjectParticipation)[] *(array)*



## .GetEntitiesByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|[SubjectParticipationIdentity](#SubjectParticipationIdentity)[] *(array)*|**IN**-Param (required): Composite Key, which represents the primary identity of a SubjectParticipation|
**return value:** [SubjectParticipation](#SubjectParticipation)[] *(array)*



## .GetEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|[SubjectParticipationIdentity](#SubjectParticipationIdentity)[] *(array)*|**IN**-Param (required): Composite Key, which represents the primary identity of a SubjectParticipation|
|includedFieldNames|String[] *(array)*|**IN**-Param (required)|
**return value:** String[] *(array)*



## .CountAll
no parameters
**return value:** Int32



## .Count
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
**return value:** Int32



## .CountBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
**return value:** Int32



## .ContainsKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|key|[SubjectParticipationIdentity](#SubjectParticipationIdentity)|**IN**-Param (required): Composite Key, which represents the primary identity of a SubjectParticipation|
**return value:** Boolean



## .AddOrUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .AddOrUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[SubjectParticipation](#SubjectParticipation)|**IN**-Param (required)|
**return value:** [SubjectParticipation](#SubjectParticipation)



## .TryUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .TryUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[SubjectParticipation](#SubjectParticipation)|**IN**-Param (required)|
**return value:** [SubjectParticipation](#SubjectParticipation)



## .TryAddEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[SubjectParticipation](#SubjectParticipation)|**IN**-Param (required)|
**return value:** [SubjectParticipationIdentity](#SubjectParticipationIdentity)



## .MassupdateByKeys
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToUpdate|[SubjectParticipationIdentity](#SubjectParticipationIdentity)[] *(array)*|**IN**-Param (required): Composite Key, which represents the primary identity of a SubjectParticipation|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** [SubjectParticipationIdentity](#SubjectParticipationIdentity)[] *(array)*



## .Massupdate
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** [SubjectParticipationIdentity](#SubjectParticipationIdentity)[] *(array)*



## .MassupdateBySearchExpression
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** [SubjectParticipationIdentity](#SubjectParticipationIdentity)[] *(array)*



## .TryDeleteEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToDelete|[SubjectParticipationIdentity](#SubjectParticipationIdentity)[] *(array)*|**IN**-Param (required): Composite Key, which represents the primary identity of a SubjectParticipation|
**return value:** [SubjectParticipationIdentity](#SubjectParticipationIdentity)[] *(array)*



## .TryUpdateKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|currentKey|[SubjectParticipationIdentity](#SubjectParticipationIdentity)|**IN**-Param (required): Composite Key, which represents the primary identity of a SubjectParticipation|
|newKey|[SubjectParticipationIdentity](#SubjectParticipationIdentity)|**IN**-Param (required): Composite Key, which represents the primary identity of a SubjectParticipation|
**return value:** Boolean
# StudyExecutionScopeStore
Provides CRUD access to stored StudyExecutionScopes (based on schema version '2.0.0')

### Methods:



## .GetOriginIdentity
Returns an string, representing the "Identity" of the current origin.
This can be used to discriminate multiple source repos.
(usually it should be related to a SCOPE like {DbServer}+{DbName/Schema}+{EntityName})
NOTE: This is an technical disciminator and it is not required, that it is an human-readable
"frieldly-name". It can just be an Hash or Uid, so its NOT RECOMMENDED to use it as display label!
no parameters
**return value:** String



## .GetCapabilities
Returns an property bag which holds information about the implemented/supported capabilities of this IRepository.
no parameters
**return value:** [RepositoryCapabilities](#RepositoryCapabilities)



## .GetEntityRefs
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** Guid[] *(array)*



## .GetEntityRefsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** Guid[] *(array)*



## .GetEntityRefsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .GetEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [StudyExecutionScope](#StudyExecutionScope)[] *(array)*



## .GetEntitiesBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [StudyExecutionScope](#StudyExecutionScope)[] *(array)*



## .GetEntitiesByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
**return value:** [StudyExecutionScope](#StudyExecutionScope)[] *(array)*



## .GetEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required)|
**return value:** String[] *(array)*



## .CountAll
no parameters
**return value:** Int32



## .Count
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
**return value:** Int32



## .CountBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
**return value:** Int32



## .ContainsKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|key|Guid|**IN**-Param (required)|
**return value:** Boolean



## .AddOrUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .AddOrUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[StudyExecutionScope](#StudyExecutionScope)|**IN**-Param (required)|
**return value:** [StudyExecutionScope](#StudyExecutionScope)



## .TryUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .TryUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[StudyExecutionScope](#StudyExecutionScope)|**IN**-Param (required)|
**return value:** [StudyExecutionScope](#StudyExecutionScope)



## .TryAddEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[StudyExecutionScope](#StudyExecutionScope)|**IN**-Param (required)|
**return value:** Guid



## .MassupdateByKeys
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToUpdate|Guid[] *(array)*|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .Massupdate
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .MassupdateBySearchExpression
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .TryDeleteEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToDelete|Guid[] *(array)*|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .TryUpdateKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|currentKey|Guid|**IN**-Param (required)|
|newKey|Guid|**IN**-Param (required)|
**return value:** Boolean
# StudyScopeStore
Provides CRUD access to stored StudyScopes (based on schema version '2.0.0')

### Methods:



## .GetOriginIdentity
Returns an string, representing the "Identity" of the current origin.
This can be used to discriminate multiple source repos.
(usually it should be related to a SCOPE like {DbServer}+{DbName/Schema}+{EntityName})
NOTE: This is an technical disciminator and it is not required, that it is an human-readable
"frieldly-name". It can just be an Hash or Uid, so its NOT RECOMMENDED to use it as display label!
no parameters
**return value:** String



## .GetCapabilities
Returns an property bag which holds information about the implemented/supported capabilities of this IRepository.
no parameters
**return value:** [RepositoryCapabilities](#RepositoryCapabilities)



## .GetEntityRefs
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** Guid[] *(array)*



## .GetEntityRefsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** Guid[] *(array)*



## .GetEntityRefsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .GetEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [StudyScope](#StudyScope)[] *(array)*



## .GetEntitiesBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [StudyScope](#StudyScope)[] *(array)*



## .GetEntitiesByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
**return value:** [StudyScope](#StudyScope)[] *(array)*



## .GetEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required)|
**return value:** String[] *(array)*



## .CountAll
no parameters
**return value:** Int32



## .Count
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
**return value:** Int32



## .CountBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
**return value:** Int32



## .ContainsKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|key|Guid|**IN**-Param (required)|
**return value:** Boolean



## .AddOrUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .AddOrUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[StudyScope](#StudyScope)|**IN**-Param (required)|
**return value:** [StudyScope](#StudyScope)



## .TryUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .TryUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[StudyScope](#StudyScope)|**IN**-Param (required)|
**return value:** [StudyScope](#StudyScope)



## .TryAddEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[StudyScope](#StudyScope)|**IN**-Param (required)|
**return value:** Guid



## .MassupdateByKeys
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToUpdate|Guid[] *(array)*|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .Massupdate
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .MassupdateBySearchExpression
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .TryDeleteEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToDelete|Guid[] *(array)*|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .TryUpdateKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|currentKey|Guid|**IN**-Param (required)|
|newKey|Guid|**IN**-Param (required)|
**return value:** Boolean
# SubjectAddressStore
Provides CRUD access to stored SubjectAddresses (based on schema version '2.0.0')

### Methods:



## .GetOriginIdentity
Returns an string, representing the "Identity" of the current origin.
This can be used to discriminate multiple source repos.
(usually it should be related to a SCOPE like {DbServer}+{DbName/Schema}+{EntityName})
NOTE: This is an technical disciminator and it is not required, that it is an human-readable
"frieldly-name". It can just be an Hash or Uid, so its NOT RECOMMENDED to use it as display label!
no parameters
**return value:** String



## .GetCapabilities
Returns an property bag which holds information about the implemented/supported capabilities of this IRepository.
no parameters
**return value:** [RepositoryCapabilities](#RepositoryCapabilities)



## .GetEntityRefs
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** Guid[] *(array)*



## .GetEntityRefsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** Guid[] *(array)*



## .GetEntityRefsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .GetEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [SubjectAddress](#SubjectAddress)[] *(array)*



## .GetEntitiesBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [SubjectAddress](#SubjectAddress)[] *(array)*



## .GetEntitiesByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
**return value:** [SubjectAddress](#SubjectAddress)[] *(array)*



## .GetEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required)|
**return value:** String[] *(array)*



## .CountAll
no parameters
**return value:** Int32



## .Count
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
**return value:** Int32



## .CountBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
**return value:** Int32



## .ContainsKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|key|Guid|**IN**-Param (required)|
**return value:** Boolean



## .AddOrUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .AddOrUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[SubjectAddress](#SubjectAddress)|**IN**-Param (required)|
**return value:** [SubjectAddress](#SubjectAddress)



## .TryUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .TryUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[SubjectAddress](#SubjectAddress)|**IN**-Param (required)|
**return value:** [SubjectAddress](#SubjectAddress)



## .TryAddEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[SubjectAddress](#SubjectAddress)|**IN**-Param (required)|
**return value:** Guid



## .MassupdateByKeys
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToUpdate|Guid[] *(array)*|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .Massupdate
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .MassupdateBySearchExpression
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .TryDeleteEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToDelete|Guid[] *(array)*|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .TryUpdateKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|currentKey|Guid|**IN**-Param (required)|
|newKey|Guid|**IN**-Param (required)|
**return value:** Boolean
# SubjectIdentityStore
Provides CRUD access to stored SubjectIdentities (based on schema version '2.0.0')

### Methods:



## .GetOriginIdentity
Returns an string, representing the "Identity" of the current origin.
This can be used to discriminate multiple source repos.
(usually it should be related to a SCOPE like {DbServer}+{DbName/Schema}+{EntityName})
NOTE: This is an technical disciminator and it is not required, that it is an human-readable
"frieldly-name". It can just be an Hash or Uid, so its NOT RECOMMENDED to use it as display label!
no parameters
**return value:** String



## .GetCapabilities
Returns an property bag which holds information about the implemented/supported capabilities of this IRepository.
no parameters
**return value:** [RepositoryCapabilities](#RepositoryCapabilities)



## .GetEntityRefs
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** Guid[] *(array)*



## .GetEntityRefsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** Guid[] *(array)*



## .GetEntityRefsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .GetEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [SubjectIdentity](#SubjectIdentity)[] *(array)*



## .GetEntitiesBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** [SubjectIdentity](#SubjectIdentity)[] *(array)*



## .GetEntitiesByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
**return value:** [SubjectIdentity](#SubjectIdentity)[] *(array)*



## .GetEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required): An array of field names to be loaded|
|sortedBy|String[] *(array)*|**IN**-Param (required): An array of field names to be used for sorting the results (before 'limit' and 'skip' is processed). Use the character "^" as prefix for DESC sorting. Sample: ['^Age','Lastname']|
|limit|Int32?|**IN**-Param (optional)|
|skip|Int32?|**IN**-Param (optional)|
**return value:** String[] *(array)*



## .GetEntityFieldsByKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToLoad|Guid[] *(array)*|**IN**-Param (required)|
|includedFieldNames|String[] *(array)*|**IN**-Param (required)|
**return value:** String[] *(array)*



## .CountAll
no parameters
**return value:** Int32



## .Count
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
**return value:** Int32



## .CountBySearchExpression
NOTE: this method can only be used, if the 'SupportsStringBaseSearchExpressions'-Capability is given for this repository!
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
**return value:** Int32



## .ContainsKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|key|Guid|**IN**-Param (required)|
**return value:** Boolean



## .AddOrUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .AddOrUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[SubjectIdentity](#SubjectIdentity)|**IN**-Param (required)|
**return value:** [SubjectIdentity](#SubjectIdentity)



## .TryUpdateEntityFields
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** *Dict*<String,Object>



## .TryUpdateEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[SubjectIdentity](#SubjectIdentity)|**IN**-Param (required)|
**return value:** [SubjectIdentity](#SubjectIdentity)



## .TryAddEntity
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|entity|[SubjectIdentity](#SubjectIdentity)|**IN**-Param (required)|
**return value:** Guid



## .MassupdateByKeys
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToUpdate|Guid[] *(array)*|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .Massupdate
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|filter|[ExpressionTree](#ExpressionTree)|**IN**-Param (required): (from 'FUSE-fx.RepositoryContract')|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .MassupdateBySearchExpression
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|searchExpression|String|**IN**-Param (required)|
|fields|*Dict*<String,Object>|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .TryDeleteEntities
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|keysToDelete|Guid[] *(array)*|**IN**-Param (required)|
**return value:** Guid[] *(array)*



## .TryUpdateKey
#### Parameters:
|Name|Type|Description|
|----|----|-----------|
|currentKey|Guid|**IN**-Param (required)|
|newKey|Guid|**IN**-Param (required)|
**return value:** Boolean



# Models:



## AdditionalSubjectParticipationIdentifier
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|ParticipantIdentifier|String|(required): *this field has a max length of 50|
|IdentifierName|String|(required): *this field has a max length of 30|
|IdentifierValue|String|(required)|
|ResearchStudyUid|Guid|(required)|



## ExtendedFieldDescriptor
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|TechnicalName|String|(required)|
|IsRequired|Boolean|(required)|
|DisplayLabel|String|(required)|
|InputDescription|String|(optional)|
|RegularExpression|String|(optional)|



## IdentityDetails
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|GivenName|String|(required): the firstname a person (named as in the HL7 standard)|
|FamilyName|String|(required): the lastname a person (named as in the HL7 standard)|
|BirthDate|String|(required): date in format 'yyyy-MM-dd' (must NOT be a partial date for this usecase!)|
|ExtendedFields|*Dict*<String,String>|(optional): additional values for each 'extendedField' that is mandatory within (and specific to) the current IMS-System. To retrieve the declarations for such fields call 'GetExtendedFieldDescriptors'|



## Pseudonym
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|Kind|String|(required): in this shloud be something like 'SubjectIdentifer' or "SubjectIDentifier_FOO" for a study named "FOO"|
|Identifier|String|(required)|



## StudyExecutionScope
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|StudyExecutionIdentifier|Guid|(required): a global unique id of a concrete study execution (dedicated to a concrete institute) which is usually originated at the primary CRF or study management system ('SMS')|
|SiteUid|Guid|(required): the institute which is executing the study (this should be an invariant technical representation of the company name or a guid)|
|ResearchStudyUid|Guid|(required)|



## StudyScope
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|ResearchStudyUid|Guid|(required): the official invariant name of the study as given by the sponsor|
|ParticipantIdentifierSemantic|String|(required): for example "Screening-Number" or "Randomization-Number"|
|StudyWorkflowName|String|(required): *this field has a max length of 100|
|StudyWorkflowVersion|String|(required): *this field has a max length of 20|



## SubjectAddress
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|InternalRecordId|Guid|(required)|
|Street|String|(required)|
|HouseNumber|String|(required)|
|PostCode|String|(required)|
|City|String|(required)|
|State|String|(required)|
|Country|String|(required)|
|PhoneNumber|String|(optional): *this field is optional (use null as value)|



## SubjectIdentity
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|RecordId|Guid|(required)|
|FirstName|String|(optional): *this field is optional (use null as value)|
|LastName|String|(optional): *this field is optional (use null as value)|
|Gender|Int32|(optional): 0=Male / 1=Female / 2=Other *this field is optional|
|DateOfBirth|DateTime|(optional): *this field is optional|
|DateOfDeath|DateTime|(optional): *this field is optional|
|FullNamePattern|String|(optional): can be used to specify the full salutation including all academic grades by a string containing the placeholders: "{G}"=Gender {F}="FirstName" {L}="LastName". If not specified, a generic fallback can be used *this field is optional (use null as value)|
|Language|String|(optional): *this field is optional (use null as value)|
|Notes|String|(optional): *this field is optional (use null as value)|
|Email|String|(optional): *this field is optional (use null as value)|
|MobileNumber|String|(optional): *this field is optional (use null as value)|
|ResidentAddressId|Guid|(optional): *this field is optional|



## SubjectParticipation
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|ParticipantIdentifier|String|(required): pseudonym of the patient which can be a randomization or screening number (the exact semantic is defined per study) *this field has a max length of 50|
|ResearchStudyUid|Guid|(required)|
|CreationDateUtc|DateTime|(required)|
|CreatedForStudyExecutionIdentifier|Guid|(required)|
|SubjectIdentityRecordId|Guid|(optional): *this field is optional|



## AdditionalSubjectParticipationIdentifierIdentity
Composite Key, which represents the primary identity of a AdditionalSubjectParticipationIdentifier
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|(none)|||



## SubjectParticipationIdentity
Composite Key, which represents the primary identity of a SubjectParticipation
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|(none)|||



## ExpressionTree
(from 'FUSE-fx.RepositoryContract')
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|MatchAll|Boolean|(optional): true: AND-Relation | false: OR-Relation|
|Negate|Boolean|(optional): Negates the result|
|Predicates|*List*<[FieldPredicate](#FieldPredicate)>|(optional): Can contain ATOMIC predicates (FieldName~Value). NOTE: If there is more than one predicate with the same FieldName in combination with MatchAll=true, then this will lead to an subordinated OR-Expression dedicated to this field.|
|SubTree|*List*<[ExpressionTree](#ExpressionTree)>|(optional)|



## FieldPredicate
(from 'FUSE-fx.RepositoryContract')
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|FieldName|String|(optional)|
|Operator|String|(optional): Wellknown operators like '==' '!=' (see 'FieldOperators'-Contants).|
|Value|Object|(optional): The value to match! (NOTE: in th special case of using the 'in' operator, the given 'value' to match must NOT be scalar! Instead it must be an ARRAY. A match is given if a field equals to at least one value within that array.)|



## RepositoryCapabilities
(from 'FUSE-fx.RepositoryContract')
An property bag which holds information about the implemented/supported
capabilities of an IRepository.
#### Fields:
|Name|Type|Description|
|----|----|-----------|
|CanReadContent|Boolean|(optional): Indicates, that this repository offers access to load entities(classes) or some their entity fields (if this is false, then only EntityRefs are accessable)|
|CanUpdateContent|Boolean|(optional)|
|CanAddNewEntities|Boolean|(optional)|
|CanDeleteEntities|Boolean|(optional)|
|SupportsMassupdate|Boolean|(optional)|
|SupportsKeyUpdate|Boolean|(optional)|
|SupportsStringBasedSearchExpressions|Boolean|(optional)|
|RequiresExternalKeys|Boolean|(optional): Indicates, that entities can only be added to this repository, if ther key fields are pre-initialized by the caller. If false, then the persistence-technology behind the repository implementation will auto-generate a new key by its own.|
