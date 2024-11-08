using MedicalResearch.IdentityManagement.StoreAccess;
using System;

namespace MedicalResearch.IdentityManagement {

  /// <summary>
  /// Provides convenience for bulk-registering controllers for all endpoints, for example when hosting them via asp.net core webapi
  /// </summary>
  public static class ImsEndpointRegister {

    /// <summary></summary>
    /// <param name="contractType"></param>
    /// <param name="preferredRoute"> WITHOUT the version-prefix and WITHOUT leading or trailing slash!</param>
    public delegate void GetContractsPerEndpointCallback(Type contractType, string preferredRoute);

    public static void GetContractsPerEndpoint(GetContractsPerEndpointCallback callback) {

      callback.Invoke(typeof(IImsApiInfoService), "ImsApiInfo");

      callback.Invoke(typeof(IUnblindingClearanceAwaiterService), "UnblindingClearanceAwaiter");
      callback.Invoke(typeof(IUnblindingClearanceGrantingService), "UnblindingClearanceGranting");
      callback.Invoke(typeof(IAgeEvaluationService), "IAgeEvaluation");
      callback.Invoke(typeof(IPseudonymizationService), "Pseudonymization");
      callback.Invoke(typeof(IUnblindingService), "Unblinding");

      callback.Invoke(typeof(IAdditionalSubjectParticipationIdentifierStore), "store/AdditionalSubjectParticipationIdentifier");
      callback.Invoke(typeof(ISubjectParticipationStore), "store/SubjectParticipation");
      callback.Invoke(typeof(IStudyExecutionScopeStore), "store/StudyExecutionScope");
      callback.Invoke(typeof(IStudyScopeStore), "store/StudyScope");
      callback.Invoke(typeof(ISubjectAddressStore), "store/SubjectAddress");
      callback.Invoke(typeof(ISubjectIdentityStore), "store/SubjectIdentity");

    }

  }

}
