using MedicalResearch.IdentityManagement.Model;
using System;
using System.Data.Fuse;
using System.Data.Fuse.Convenience;
using System.Data.Fuse.Ef;

namespace MedicalResearch.IdentityManagement.StoreAccess {

  /// <summary> Provides CRUD access to stored AdditionalSubjectParticipationIdentifiers (based on schema version '1.5.0') </summary>
  public class AdditionalSubjectParticipationIdentifierStore : ModelVsEntityRepository<AdditionalSubjectParticipationIdentifier, MedicalResearch.IdentityManagement.Persistence.AdditionalSubjectParticipationIdentifierEntity, AdditionalSubjectParticipationIdentifierIdentity>, IAdditionalSubjectParticipationIdentifierStore {

    private static EfRepository<MedicalResearch.IdentityManagement.Persistence.AdditionalSubjectParticipationIdentifierEntity, AdditionalSubjectParticipationIdentifierIdentity> CreateInnerEfRepo() {
      var context = new MedicalResearch.IdentityManagement.Persistence.EF.IdentityManagementDbContext();
      return new EfRepository<MedicalResearch.IdentityManagement.Persistence.AdditionalSubjectParticipationIdentifierEntity, AdditionalSubjectParticipationIdentifierIdentity>(context);
    }

    public AdditionalSubjectParticipationIdentifierStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<AdditionalSubjectParticipationIdentifier, MedicalResearch.IdentityManagement.Persistence.AdditionalSubjectParticipationIdentifierEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored SubjectParticipations (based on schema version '1.5.0') </summary>
  public class SubjectParticipationStore : ModelVsEntityRepository<SubjectParticipation, MedicalResearch.IdentityManagement.Persistence.SubjectParticipationEntity, SubjectParticipationIdentity>, ISubjectParticipationStore {

    private static EfRepository<MedicalResearch.IdentityManagement.Persistence.SubjectParticipationEntity, SubjectParticipationIdentity> CreateInnerEfRepo() {
      var context = new MedicalResearch.IdentityManagement.Persistence.EF.IdentityManagementDbContext();
      return new EfRepository<MedicalResearch.IdentityManagement.Persistence.SubjectParticipationEntity, SubjectParticipationIdentity>(context);
    }

    public SubjectParticipationStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<SubjectParticipation, MedicalResearch.IdentityManagement.Persistence.SubjectParticipationEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored StudyExecutionScopes (based on schema version '1.5.0') </summary>
  public class StudyExecutionScopeStore : ModelVsEntityRepository<StudyExecutionScope, MedicalResearch.IdentityManagement.Persistence.StudyExecutionScopeEntity, Guid>, IStudyExecutionScopeStore {

    private static EfRepository<MedicalResearch.IdentityManagement.Persistence.StudyExecutionScopeEntity, Guid> CreateInnerEfRepo() {
      var context = new MedicalResearch.IdentityManagement.Persistence.EF.IdentityManagementDbContext();
      return new EfRepository<MedicalResearch.IdentityManagement.Persistence.StudyExecutionScopeEntity, Guid>(context);
    }

    public StudyExecutionScopeStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<StudyExecutionScope, MedicalResearch.IdentityManagement.Persistence.StudyExecutionScopeEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored StudyScopes (based on schema version '1.5.0') </summary>
  public class StudyScopeStore : ModelVsEntityRepository<StudyScope, MedicalResearch.IdentityManagement.Persistence.StudyScopeEntity, Guid>, IStudyScopeStore {

    private static EfRepository<MedicalResearch.IdentityManagement.Persistence.StudyScopeEntity, Guid> CreateInnerEfRepo() {
      var context = new MedicalResearch.IdentityManagement.Persistence.EF.IdentityManagementDbContext();
      return new EfRepository<MedicalResearch.IdentityManagement.Persistence.StudyScopeEntity, Guid>(context);
    }

    public StudyScopeStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<StudyScope, MedicalResearch.IdentityManagement.Persistence.StudyScopeEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored SubjectAddresses (based on schema version '1.5.0') </summary>
  public class SubjectAddressStore : ModelVsEntityRepository<SubjectAddress, MedicalResearch.IdentityManagement.Persistence.SubjectAddressEntity, Guid>, ISubjectAddressStore {

    private static EfRepository<MedicalResearch.IdentityManagement.Persistence.SubjectAddressEntity, Guid> CreateInnerEfRepo() {
      var context = new MedicalResearch.IdentityManagement.Persistence.EF.IdentityManagementDbContext();
      return new EfRepository<MedicalResearch.IdentityManagement.Persistence.SubjectAddressEntity, Guid>(context);
    }

    public SubjectAddressStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<SubjectAddress, MedicalResearch.IdentityManagement.Persistence.SubjectAddressEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored SubjectIdentities (based on schema version '1.5.0') </summary>
  public class SubjectIdentityStore : ModelVsEntityRepository<SubjectIdentity, MedicalResearch.IdentityManagement.Persistence.SubjectIdentityEntity, Guid>, ISubjectIdentityStore {

    private static EfRepository<MedicalResearch.IdentityManagement.Persistence.SubjectIdentityEntity, Guid> CreateInnerEfRepo() {
      var context = new MedicalResearch.IdentityManagement.Persistence.EF.IdentityManagementDbContext();
      return new EfRepository<MedicalResearch.IdentityManagement.Persistence.SubjectIdentityEntity, Guid>(context);
    }

    public SubjectIdentityStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<SubjectIdentity, MedicalResearch.IdentityManagement.Persistence.SubjectIdentityEntity>()
    ) {
    }

  }

}
