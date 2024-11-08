using MedicalResearch.IdentityManagement.Model;
using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.ObjectModel;

namespace MedicalResearch.IdentityManagement.StoreAccess {

  public static class ApiVersion {
    public const string SemanticVersion = "2.0.0";
  }

  /// <summary> Provides CRUD access to stored AdditionalSubjectParticipationIdentifiers (based on schema version '2.0.0') </summary>
  public partial interface IAdditionalSubjectParticipationIdentifierStore : System.Data.Fuse.IRepository<AdditionalSubjectParticipationIdentifier, AdditionalSubjectParticipationIdentifierIdentity> {
  }

/// <summary> Composite Key, which represents the primary identity of a AdditionalSubjectParticipationIdentifier </summary>
public class AdditionalSubjectParticipationIdentifierIdentity {
  public String ParticipantIdentifier;
  public String IdentifierName;
  public Guid ResearchStudyUid;
}

  /// <summary> Provides CRUD access to stored SubjectParticipations (based on schema version '2.0.0') </summary>
  public partial interface ISubjectParticipationStore : System.Data.Fuse.IRepository<SubjectParticipation, SubjectParticipationIdentity> {
  }

/// <summary> Composite Key, which represents the primary identity of a SubjectParticipation </summary>
public class SubjectParticipationIdentity {
  /// <summary> pseudonym of the patient which can be a randomization or screening number (the exact semantic is defined per study) </summary>
  public String ParticipantIdentifier;
  public Guid ResearchStudyUid;
}

  /// <summary> Provides CRUD access to stored StudyExecutionScopes (based on schema version '2.0.0') </summary>
  public partial interface IStudyExecutionScopeStore : System.Data.Fuse.IRepository<StudyExecutionScope, Guid> {
  }

  /// <summary> Provides CRUD access to stored StudyScopes (based on schema version '2.0.0') </summary>
  public partial interface IStudyScopeStore : System.Data.Fuse.IRepository<StudyScope, Guid> {
  }

  /// <summary> Provides CRUD access to stored SubjectAddresses (based on schema version '2.0.0') </summary>
  public partial interface ISubjectAddressStore : System.Data.Fuse.IRepository<SubjectAddress, Guid> {
  }

  /// <summary> Provides CRUD access to stored SubjectIdentities (based on schema version '2.0.0') </summary>
  public partial interface ISubjectIdentityStore : System.Data.Fuse.IRepository<SubjectIdentity, Guid> {
  }

}
