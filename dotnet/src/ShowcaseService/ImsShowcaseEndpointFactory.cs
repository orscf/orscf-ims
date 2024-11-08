using MedicalResearch.IdentityManagement.StoreAccess;
using System;

namespace MedicalResearch.IdentityManagement {

  /// <summary>
  /// Provides convenience for bulk-registering factories for all endpoints, for example when hosting them via asp.net core webapi
  /// </summary>
  public static class ImsShowcaseEndpointFactory {

    public delegate void GetFactoryMethodsPerEndpointCallback(Type contractType, Func<object> endpointFactory);

    public static void GetFactoryMethodsPerEndpoint(GetFactoryMethodsPerEndpointCallback callback) {

      callback.Invoke(typeof(IImsApiInfoService), () => new ApiService());
      callback.Invoke(typeof(IUnblindingClearanceAwaiterService), () => new ApiService());
      callback.Invoke(typeof(IUnblindingClearanceGrantingService), () => new ApiService());
      callback.Invoke(typeof(IAgeEvaluationService), () => new ApiService());
      callback.Invoke(typeof(IPseudonymizationService), () => new ApiService());
      callback.Invoke(typeof(IUnblindingService), () => new ApiService());

      callback.Invoke(typeof(IAdditionalSubjectParticipationIdentifierStore), () => new AdditionalSubjectParticipationIdentifierStore());
      callback.Invoke(typeof(ISubjectParticipationStore), () => new SubjectParticipationStore());
      callback.Invoke(typeof(IStudyExecutionScopeStore), () => new StudyExecutionScopeStore());
      callback.Invoke(typeof(IStudyScopeStore), () => new StudyScopeStore());
      callback.Invoke(typeof(ISubjectAddressStore), () => new SubjectAddressStore());
      callback.Invoke(typeof(ISubjectIdentityStore), () => new SubjectIdentityStore());

    }

  }

}
