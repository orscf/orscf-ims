using MedicalResearch.IdentityManagement.Model;
using System;
using System.Data.Fuse;
using System.Data.Fuse.Convenience;
using System.Data.Fuse.Ef;
using System.Data.Fuse.Ef.InstanceManagement;

namespace MedicalResearch.IdentityManagement.StoreAccess {

  /// <summary> Provides CRUD access to stored AdditionalSubjectParticipationIdentifiers (based on schema version '2.0.0') </summary>
  public class AdditionalSubjectParticipationIdentifierStore : ModelVsEntityRepository<AdditionalSubjectParticipationIdentifier, MedicalResearch.IdentityManagement.Persistence.AdditionalSubjectParticipationIdentifierEntity, AdditionalSubjectParticipationIdentifierIdentity>, IAdditionalSubjectParticipationIdentifierStore {

    private static EfRepository<MedicalResearch.IdentityManagement.Persistence.AdditionalSubjectParticipationIdentifierEntity, AdditionalSubjectParticipationIdentifierIdentity> CreateInnerEfRepo() {
      IDbContextInstanceProvider dbContextInstanceProvider = new ShortLivingDbContextInstanceProvider<
        MedicalResearch.IdentityManagement.Persistence.EF.IdentityManagementDbContext
      >();
      return new EfRepository<MedicalResearch.IdentityManagement.Persistence.AdditionalSubjectParticipationIdentifierEntity, AdditionalSubjectParticipationIdentifierIdentity>(dbContextInstanceProvider);
    }

    public AdditionalSubjectParticipationIdentifierStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<AdditionalSubjectParticipationIdentifier, MedicalResearch.IdentityManagement.Persistence.AdditionalSubjectParticipationIdentifierEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored SubjectParticipations (based on schema version '2.0.0') </summary>
  public class SubjectParticipationStore : ModelVsEntityRepository<SubjectParticipation, MedicalResearch.IdentityManagement.Persistence.SubjectParticipationEntity, SubjectParticipationIdentity>, ISubjectParticipationStore {

    private static EfRepository<MedicalResearch.IdentityManagement.Persistence.SubjectParticipationEntity, SubjectParticipationIdentity> CreateInnerEfRepo() {
      IDbContextInstanceProvider dbContextInstanceProvider = new ShortLivingDbContextInstanceProvider<
        MedicalResearch.IdentityManagement.Persistence.EF.IdentityManagementDbContext
      >();
      return new EfRepository<MedicalResearch.IdentityManagement.Persistence.SubjectParticipationEntity, SubjectParticipationIdentity>(dbContextInstanceProvider);
    }

    public SubjectParticipationStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<SubjectParticipation, MedicalResearch.IdentityManagement.Persistence.SubjectParticipationEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored StudyExecutionScopes (based on schema version '2.0.0') </summary>
  public class StudyExecutionScopeStore : ModelVsEntityRepository<StudyExecutionScope, MedicalResearch.IdentityManagement.Persistence.StudyExecutionScopeEntity, Guid>, IStudyExecutionScopeStore {

    private static EfRepository<MedicalResearch.IdentityManagement.Persistence.StudyExecutionScopeEntity, Guid> CreateInnerEfRepo() {
      IDbContextInstanceProvider dbContextInstanceProvider = new ShortLivingDbContextInstanceProvider<
        MedicalResearch.IdentityManagement.Persistence.EF.IdentityManagementDbContext
      >();
      return new EfRepository<MedicalResearch.IdentityManagement.Persistence.StudyExecutionScopeEntity, Guid>(dbContextInstanceProvider);
    }

    public StudyExecutionScopeStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<StudyExecutionScope, MedicalResearch.IdentityManagement.Persistence.StudyExecutionScopeEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored StudyScopes (based on schema version '2.0.0') </summary>
  public class StudyScopeStore : ModelVsEntityRepository<StudyScope, MedicalResearch.IdentityManagement.Persistence.StudyScopeEntity, Guid>, IStudyScopeStore {

    private static EfRepository<MedicalResearch.IdentityManagement.Persistence.StudyScopeEntity, Guid> CreateInnerEfRepo() {
      IDbContextInstanceProvider dbContextInstanceProvider = new ShortLivingDbContextInstanceProvider<
        MedicalResearch.IdentityManagement.Persistence.EF.IdentityManagementDbContext
      >();
      return new EfRepository<MedicalResearch.IdentityManagement.Persistence.StudyScopeEntity, Guid>(dbContextInstanceProvider);
    }

    public StudyScopeStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<StudyScope, MedicalResearch.IdentityManagement.Persistence.StudyScopeEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored SubjectAddresses (based on schema version '2.0.0') </summary>
  public class SubjectAddressStore : ModelVsEntityRepository<SubjectAddress, MedicalResearch.IdentityManagement.Persistence.SubjectAddressEntity, Guid>, ISubjectAddressStore {

    private static EfRepository<MedicalResearch.IdentityManagement.Persistence.SubjectAddressEntity, Guid> CreateInnerEfRepo() {
      IDbContextInstanceProvider dbContextInstanceProvider = new ShortLivingDbContextInstanceProvider<
        MedicalResearch.IdentityManagement.Persistence.EF.IdentityManagementDbContext
      >();
      return new EfRepository<MedicalResearch.IdentityManagement.Persistence.SubjectAddressEntity, Guid>(dbContextInstanceProvider);
    }

    public SubjectAddressStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<SubjectAddress, MedicalResearch.IdentityManagement.Persistence.SubjectAddressEntity>()
    ) {
    }

  }

  /// <summary> Provides CRUD access to stored SubjectIdentities (based on schema version '2.0.0') </summary>
  public class SubjectIdentityStore : ModelVsEntityRepository<SubjectIdentity, MedicalResearch.IdentityManagement.Persistence.SubjectIdentityEntity, Guid>, ISubjectIdentityStore {

    private static EfRepository<MedicalResearch.IdentityManagement.Persistence.SubjectIdentityEntity, Guid> CreateInnerEfRepo() {
      IDbContextInstanceProvider dbContextInstanceProvider = new ShortLivingDbContextInstanceProvider<
        MedicalResearch.IdentityManagement.Persistence.EF.IdentityManagementDbContext
      >();
      return new EfRepository<MedicalResearch.IdentityManagement.Persistence.SubjectIdentityEntity, Guid>(dbContextInstanceProvider);
    }

    public SubjectIdentityStore() : base(
      CreateInnerEfRepo(), new ModelVsEntityParams<SubjectIdentity, MedicalResearch.IdentityManagement.Persistence.SubjectIdentityEntity>()
    ) {
    }

  }

}
