using System;
using System.Collections.Generic;
using System.Data.AccessControl;
using System.Linq;
using Hl7.Fhir.Model;
using MedicalResearch.IdentityManagement;
using MedicalResearch.IdentityManagement.Model;
using MedicalResearch.IdentityManagement.Persistence;
using MedicalResearch.IdentityManagement.Persistence.EF;
using Microsoft.EntityFrameworkCore;

namespace MedicalResearch.IdentityManagement {

  partial class ApiService : IPseudonymizationService {

    public bool GetOrCreatePseudonym(string givenName, string familyName, string birthDate, string[] pseudonymKindsToReturn, Dictionary<string, string> extendedFields, out Pseudonym[] pseudonyms, out bool wasCreatedNewly) {

      if (this.GetExisitingPseudonym( givenName, familyName, birthDate, pseudonymKindsToReturn, extendedFields, out pseudonyms)) {
        wasCreatedNewly = false;
        return true;
      }

      var parsedBirthDate = DateTime.Parse(birthDate);
      string generatedPseudonym = null;
      using (var db = new IdentityManagementDbContext()) {

        StudyScopeEntity study = (
          from s in db.StudyScopes
          where s.ResearchStudyUid == Guid.Empty 
          select s
        ).SingleOrDefault();

        if (study == null) {
          study = new StudyScopeEntity {
            ResearchStudyUid = Guid.Empty,
            StudyWorkflowName = "",
            StudyWorkflowVersion = "",
            ParticipantIdentifierSemantic = "generated Pseudonym"
          };
          //if (!AccessControlContext.Current.ValidateEntityScope(study)) {
          //  wasCreatedNewly = false;
          //  pseudonyms = null;
          //  return false;
          //}
          db.StudyScopes.Add(study);
        }

        StudyExecutionScopeEntity execution = (
          from s in db.StudyExecutionScopes
          where s.ResearchStudyUid == Guid.Empty && s.SiteUid == Guid.Empty
          select s
        ).SingleOrDefault();

        if (execution == null) {
          execution = new StudyExecutionScopeEntity {
            ResearchStudyUid = Guid.Empty,
            SiteUid = Guid.Empty
          };
          //if (!AccessControlContext.Current.ValidateEntityScope(execution)) {
          //  wasCreatedNewly = false;
          //  pseudonyms = null;
          //  return false;
          //}
          db.StudyExecutionScopes.Add(execution);
        }

        SubjectIdentityEntity subjectIdentity = (
          from p in db.SubjectIdentities
          where
            p.FirstName.ToLower() == givenName.ToLower() &&
            p.LastName.ToLower() == familyName.ToLower() &&
            p.DateOfBirth == parsedBirthDate
          select p
        ).SingleOrDefault();

        if (subjectIdentity == null) {
          subjectIdentity = new SubjectIdentityEntity {
            FirstName = givenName,
            LastName = familyName,
            DateOfBirth = parsedBirthDate
          };
          db.SubjectIdentities.Add(subjectIdentity);
        }

        generatedPseudonym = Guid.NewGuid().ToString().ToLower().Replace("-", "");
        var subjectParticipation = new SubjectParticipationEntity {
          ParticipantIdentifier = generatedPseudonym,
          CreationDateUtc = DateTime.UtcNow,
          CreatedForStudyExecutionIdentifier = execution.StudyExecutionIdentifier,
          SubjectIdentityRecordId = subjectIdentity.RecordId
        };
        db.SubjectParticipations.Add(subjectParticipation);

        try {
          db.SaveChanges();
          wasCreatedNewly = true;
          pseudonyms = new Pseudonym[] { new Pseudonym { Identifier = generatedPseudonym, Kind = "primary" } };
          return true;
        }
        catch (Exception ex) {
          wasCreatedNewly = false;
          pseudonyms = null;
          return false;
        }

      };
    }

    public bool GetExisitingPseudonym(string givenName, string familyName, string birthDate, string[] pseudonymKindsToReturn, Dictionary<string, string> extendedFields, out Pseudonym[] pseudonyms) {

      var parsedBirthDate = DateTime.Parse(birthDate);

      using (var db = new IdentityManagementDbContext()) {

        string participantIdentifier = (
          from
            p in db.SubjectParticipations.AsNoTracking().AccessScopeFiltered()
          where
            p.Identity.FirstName.ToLower() == givenName.ToLower() &&
            p.Identity.LastName.ToLower() == familyName.ToLower() &&
            p.Identity.DateOfBirth == parsedBirthDate
          select
            p.ParticipantIdentifier
        ).SingleOrDefault();

        if (string.IsNullOrWhiteSpace(participantIdentifier)) {
          pseudonyms = null;
          return false;
        }
        else {
          pseudonyms = new Pseudonym[] { new Pseudonym { Identifier=participantIdentifier, Kind= "primary" } };
          return true;
        }

      };

    }

  }

}
