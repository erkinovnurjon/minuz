import ApiService from "../api.service";

const ReportService = {
  GetRegistrationOfAthleteCount(oblastid, regionid, regionsectorid, mfyid, year, seasonid, initiativtypeid) {
    return ApiService.get(
      `/tshb5/Report/GetRegistrationOfAthleteCount?oblastid=${oblastid}&regionid=${regionid}&regionsectorid=${regionsectorid}&mfyid=${mfyid}&year=${year}&seasonid=${seasonid}&initiativtypeid=${initiativtypeid}`
    );
  },
  GetRegistrationOfAthleteCountByInitiativType(year, seasonid, initiativtypeid) {
    return ApiService.get(
      `/tshb5/Report/GetRegistrationOfAthleteCountByInitiativType?year=${year}&seasonid=${seasonid}&initiativtypeid=${initiativtypeid}`
    );
  },
  PrintRegistrationOfAthleteCount(oblastid, regionid, regionsectorid, mfyid, year, seasonid, initiativtypeid) {
    return ApiService.print(
      `/tshb5/Report/PrintRegistrationOfAthleteCount?oblastid=${oblastid}&regionid=${regionid}&regionsectorid=${regionsectorid}&mfyid=${mfyid}&year=${year}&seasonid=${seasonid}&initiativtypeid=${initiativtypeid}`
    );
  },
  GetFormGroupCreatedTeams(oblastid, regionid, regionsectorid, mfyid, formgroupid, docyear, Search, SortColumn, OrderType, PageNumber, PageLimit, organizationid, initiativtypeid, isparticipants, seasonid) {
    return ApiService.get(
      `/tshb5/Report/GetFormGroupCreatedTeams?oblastid=${oblastid}&regionid=${regionid}&regionsectorid=${regionsectorid}&mfyid=${mfyid}&formgroupid=${formgroupid}&docyear=${docyear}&Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}&organizationid=${organizationid}&initiativtypeid=${initiativtypeid}&isparticipants=${isparticipants}&seasonid=${seasonid}`
    );
  },
  GetFormGroupCreatedTeamsEduInfo(oblastid, regionid, formgroupid, docyear, Search, SortColumn, OrderType, PageNumber, PageLimit, organizationid, initiativtypeid, isparticipants, seasonid) {
    return ApiService.get(
      `/tshb5/Report/GetFormGroupCreatedTeamsEduInfo?oblastid=${oblastid}&regionid=${regionid}&formgroupid=${formgroupid}&docyear=${docyear}&Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}&organizationid=${organizationid}&initiativtypeid=${initiativtypeid}&isparticipants=${isparticipants}&seasonid=${seasonid}`
    );
  },
  PrintFormGroupCreatedTeamsEduInfo(oblastid, regionid, formgroupid, docyear, Search, SortColumn, OrderType, PageNumber, PageLimit, organizationid, initiativtypeid, isparticipants, seasonid) {
    return ApiService.print(
      `/tshb5/Report/PrintFormGroupCreatedTeam?oblastid=${oblastid}&regionid=${regionid}&formgroupid=${formgroupid}&docyear=${docyear}&Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}&organizationid=${organizationid}&initiativtypeid=${initiativtypeid}&isparticipants=${isparticipants}&seasonid=${seasonid}`
    );
  },
  GetRegistrationUsers(personId, pinfl, personName, mobileNumber, documentseria, documentnumber, dateofbirth, haslocation, isParij, Search, SortColumn, OrderType, PageNumber, PageLimit) {
    return ApiService.get(
      `/tshb5/Report/GetRegistrationUsers?personId=${personId}&pinfl=${pinfl}&personName=${personName}&mobileNumber=${mobileNumber}&documentseria=${documentseria}&documentnumber=${documentnumber}&dateofbirth=${dateofbirth}&haslocation=${haslocation}&isParij=${isParij}&Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}`
    );
  },
  PrintRegistrationUsers(personId, pinfl, personName, mobileNumber, documentseria, documentnumber, dateofbirth, haslocation, isParij, Search, SortColumn, OrderType, PageNumber, PageLimit) {
    return ApiService.print(
      `/tshb5/Report/PrintRegistrationUsers?personId=${personId}&pinfl=${pinfl}&personName=${personName}&mobileNumber=${mobileNumber}&documentseria=${documentseria}&documentnumber=${documentnumber}&dateofbirth=${dateofbirth}&haslocation=${haslocation}&isParij=${isParij}&Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}`
    );
  },

  PrintFormGroupCreatedTeam(oblastid, regionid, regionsectorid, mfyid, formgroupid, Search, SortColumn, OrderType, PageNumber, PageLimit, lang, IsStartPageFromZero, initiativTypeId) {
    return ApiService.print(
      `/tshb5/Report/PrintFormGroupCreatedTeam?oblastid=${oblastid}&regionid=${regionid}&regionsectorid=${regionsectorid}&mfyid=${mfyid}&formgroupid=${formgroupid}&Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}&lang=${lang}&IsStartPageFromZero=${IsStartPageFromZero}&initiativTypeId=${initiativTypeId}`
    );
  },
  GetSportTypeReport(oblastid, regionid, regionsectorid, mfyid,docyear) {
    return ApiService.get(
      `/tshb5/Report/GetSportTypeReport?oblastid=${oblastid}&regionid=${regionid}&regionsectorid=${regionsectorid}&mfyid=${mfyid}&docyear=${docyear}`
    );
  },
  PrintSportTypeReport(oblastid, regionid, regionsectorid, mfyid) {
    return ApiService.print(
      `/tshb5/Report/PrintSportTypeReport?oblastid=${oblastid}&regionid=${regionid}&regionsectorid=${regionsectorid}&mfyid=${mfyid}`
    );
  },
  GetAgeTypeReport(oblastid, regionid, regionsectorid, mfyid, docyear) {
    return ApiService.get(
      `/tshb5/Report/GetAgeTypeReport?oblastid=${oblastid}&regionid=${regionid}&regionsectorid=${regionsectorid}&mfyid=${mfyid}&docyear=${docyear}`
    );
  },
  GetReportSportLevel(docyear, oblastid, regionid, competitionstageid, Lang, SortColumn, OrderType, PageNumber, PageLimit) {
    return ApiService.get(
      `/tshb5/Report/GetReportSportLevel?docyear=${docyear}&oblastid=${oblastid}&regionid=${regionid}&competitionstageid=${competitionstageid}&Lang=${Lang}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}`
    );
  },
  GetReportSportLevelCountByMfy(docyear, oblastid, regionid, regionsectorid, mfyid, SortColumn, OrderType, PageNumber, PageLimit) {
    return ApiService.get(
      `/tshb5/Report/GetReportSportLevelCountByMfy?docyear=${docyear}&oblastid=${oblastid}&regionid=${regionid}&regionsectorid=${regionsectorid}&mfyid=${mfyid}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}`
    );
  },
  GetReportTeamnextStageMahalla(docyear, oblastid, regionid, organizationId, seasonid, sportleagueid, agecategoryid, sporttypeid, genderid, sportrankid, sporttypecategoryid) {
    return ApiService.get(
      `/tshb5/Report/GetReportTeamnextStageMahalla?docyear=${docyear}&oblastid=${oblastid}&regionid=${regionid}&organizationId=${organizationId}&seasonid=${seasonid}&sportleagueid=${sportleagueid}&agecategoryid=${agecategoryid}&sporttypeid=${sporttypeid}&genderid=${genderid}&sportrankid=${sportrankid}&sporttypecategoryid=${sporttypecategoryid}`
    );
  },
  GetReportTeamnextStageSchool(docyear, oblastid, regionid, organizationId, seasonid, sportleagueid, agecategoryid, sporttypeid, genderid, sportrankid, sporttypecategoryid) {
    return ApiService.get(
      `/tshb5/Report/GetReportTeamnextStageSchool?docyear=${docyear}&oblastid=${oblastid}&regionid=${regionid}&organizationId=${organizationId}&seasonid=${seasonid}&sportleagueid=${sportleagueid}&agecategoryid=${agecategoryid}&sporttypeid=${sporttypeid}&genderid=${genderid}&sportrankid=${sportrankid}&sporttypecategoryid=${sporttypecategoryid}`
    );
  },
  GetReportTeamnextStageProfEdu(docyear, oblastid, regionid, organizationId, seasonid, sportleagueid, agecategoryid, sporttypeid, genderid, sportrankid, sporttypecategoryid) {
    return ApiService.get(
      `/tshb5/Report/GetReportTeamnextStageProfEdu?docyear=${docyear}&oblastid=${oblastid}&regionid=${regionid}&organizationId=${organizationId}&seasonid=${seasonid}&sportleagueid=${sportleagueid}&agecategoryid=${agecategoryid}&sporttypeid=${sporttypeid}&genderid=${genderid}&sportrankid=${sportrankid}&sporttypecategoryid=${sporttypecategoryid}`
    );
  },
  GetReportTeamnextStageHigherEdu(docyear, oblastid, regionid, organizationId, seasonid, sportleagueid, agecategoryid, sporttypeid, genderid, sportrankid, sporttypecategoryid) {
    return ApiService.get(
      `/tshb5/Report/GetReportTeamnextStageHigherEdu?docyear=${docyear}&oblastid=${oblastid}&regionid=${regionid}&organizationId=${organizationId}&seasonid=${seasonid}&sportleagueid=${sportleagueid}&agecategoryid=${agecategoryid}&sporttypeid=${sporttypeid}&genderid=${genderid}&sportrankid=${sportrankid}&sporttypecategoryid=${sporttypecategoryid}`
    );
  },
  PrintReportTeamnextStageMahalla(docyear, oblastid, regionid, organizationId, seasonid, sportleagueid, agecategoryid, sporttypeid, genderid, sportrankid, sporttypecategoryid) {
    return ApiService.print(
      `/tshb5/Report/PrintReportTeamnextStageMahalla?docyear=${docyear}&oblastid=${oblastid}&regionid=${regionid}&organizationId=${organizationId}&seasonid=${seasonid}&sportleagueid=${sportleagueid}&agecategoryid=${agecategoryid}&sporttypeid=${sporttypeid}&genderid=${genderid}&sportrankid=${sportrankid}&sporttypecategoryid=${sporttypecategoryid}`
    );
  },
  PrintReportTeamnextStageSchool(docyear, oblastid, regionid, organizationId, seasonid, sportleagueid, agecategoryid, sporttypeid, genderid, sportrankid, sporttypecategoryid) {
    return ApiService.print(
      `/tshb5/Report/PrintReportTeamnextStageSchool?docyear=${docyear}&oblastid=${oblastid}&regionid=${regionid}&organizationId=${organizationId}&seasonid=${seasonid}&sportleagueid=${sportleagueid}&agecategoryid=${agecategoryid}&sporttypeid=${sporttypeid}&genderid=${genderid}&sportrankid=${sportrankid}&sporttypecategoryid=${sporttypecategoryid}`
    );
  },
  PrintReportTeamnextStageProfEdu(docyear, oblastid, regionid, organizationId, seasonid, sportleagueid, agecategoryid, sporttypeid, genderid, sportrankid, sporttypecategoryid) {
    return ApiService.print(
      `/tshb5/Report/PrintReportTeamnextStageProfEdu?docyear=${docyear}&oblastid=${oblastid}&regionid=${regionid}&organizationId=${organizationId}&seasonid=${seasonid}&sportleagueid=${sportleagueid}&agecategoryid=${agecategoryid}&sporttypeid=${sporttypeid}&genderid=${genderid}&sportrankid=${sportrankid}&sporttypecategoryid=${sporttypecategoryid}`
    );
  },
  PrintReportTeamnextStageHigherEdu(docyear, oblastid, regionid, organizationId, seasonid, sportleagueid, agecategoryid, sporttypeid, genderid, sportrankid, sporttypecategoryid) {
    return ApiService.print(
      `/tshb5/Report/PrintReportTeamnextStageHigherEdu?docyear=${docyear}&oblastid=${oblastid}&regionid=${regionid}&organizationId=${organizationId}&seasonid=${seasonid}&sportleagueid=${sportleagueid}&agecategoryid=${agecategoryid}&sporttypeid=${sporttypeid}&genderid=${genderid}&sportrankid=${sportrankid}&sporttypecategoryid=${sporttypecategoryid}`
    );
  },
  PrintReportSportLevel(oblastid, regionid, competitionstageid, Lang, isschool) {
    return ApiService.print(
      `/tshb5/Report/PrintReportSportLevel?oblastid=${oblastid}&regionid=${regionid}&competitionstageid=${competitionstageid}&Lang=${Lang}&isschool=${isschool}`
    );
  },
  PrintAgeTypeReport(oblastid, regionid, regionsectorid, mfyid) {
    return ApiService.print(
      `/tshb5/Report/PrintAgeTypeReport?oblastid=${oblastid}&regionid=${regionid}&regionsectorid=${regionsectorid}&mfyid=${mfyid}`
    );
  },
  GetRegistrationOfAthleteCountForDashboard(year, seasonid, initiativtypeid) {
    return ApiService.get(`/tshb5/Report/GetRegistrationOfAthleteCountForDashboard?year=${year}&seasonid=${seasonid}&initiativtypeid=${initiativtypeid}`);
  },
  GetFormGroupCount(oblastid, regionid, regionsectorid, mfyid, docyear) {
    return ApiService.get(
      `/tshb5/Report/GetFormGroupCount?oblastid=${oblastid}&regionid=${regionid}&regionsectorid=${regionsectorid}&mfyid=${mfyid}&docyear=${docyear}`
    );
  },
  GetRegistrationOfAthleteCountByCategory(oblastid, regionid, regionsectorid, mfyid, year, seasonid, initiativtypeid) {
    return ApiService.get(`/tshb5/Report/GetRegistrationOfAthleteCountByCategory?oblastid=${oblastid}&regionid=${regionid}&regionsectorid=${regionsectorid}&mfyid=${mfyid}&year=${year}&seasonid=${seasonid}&initiativtypeid=${initiativtypeid}`)
  },
  GetOtmExamGroupCount(oblastid, regionid, schoolYearId, organizationTypeId, schoolTypeId, isByHigherEduClassifier, higherEduClassifierId, educationFormTypeId, educationLanguageId, genderId, showAllRegion, showAllOrganization) {
    return ApiService.get(`/sportexam/Report/GetOtmExamGroupCount?oblastid=${oblastid}&regionid=${regionid}&schoolYearId=${schoolYearId}&organizationTypeId=${organizationTypeId}&schoolTypeId=${schoolTypeId}&isByHigherEduClassifier=${isByHigherEduClassifier}&higherEduClassifierId=${higherEduClassifierId}&educationFormTypeId=${educationFormTypeId}&educationLanguageId=${educationLanguageId}&genderId=${genderId}&showAllRegion=${showAllRegion}&showAllOrganization=${showAllOrganization}`)
  },
  GetOtmExamGroupCountByOrganization(oblastid, regionid, schoolYearId, organizationTypeId, schoolTypeId, isByHigherEduClassifier, higherEduClassifierId, educationFormTypeId, educationLanguageId, genderId, showAllRegion, showAllOrganization) {
    return ApiService.get(`/sportexam/Report/GetOtmExamGroupCountByOrganization?oblastid=${oblastid}&regionid=${regionid}&schoolYearId=${schoolYearId}&organizationTypeId=${organizationTypeId}&schoolTypeId=${schoolTypeId}&isByHigherEduClassifier=${isByHigherEduClassifier}&higherEduClassifierId=${higherEduClassifierId}&educationFormTypeId=${educationFormTypeId}&educationLanguageId=${educationLanguageId}&genderId=${genderId}&showAllRegion=${showAllRegion}&showAllOrganization=${showAllOrganization}`)
  },
  PrintOtmExamGroupCount(oblastid, regionid, schoolYearId, organizationTypeId, schoolTypeId, isByHigherEduClassifier, higherEduClassifierId, educationFormTypeId, educationLanguageId, genderId, showAllRegion, showAllOrganization) {
    return ApiService.printtemp(`/sportexam/Report/PrintOtmExamGroupCount?oblastid=${oblastid}&regionid=${regionid}&schoolYearId=${schoolYearId}&organizationTypeId=${organizationTypeId}&schoolTypeId=${schoolTypeId}&isByHigherEduClassifier=${isByHigherEduClassifier}&higherEduClassifierId=${higherEduClassifierId}&educationFormTypeId=${educationFormTypeId}&educationLanguageId=${educationLanguageId}&genderId=${genderId}&showAllRegion=${showAllRegion}&showAllOrganization=${showAllOrganization}`)
  },
  GetSportSchoolExamGroupCount(oblastid, regionid, schoolYearId, organizationTypeId, schoolTypeId, isBySportTypeClassifier, sportTypeClassifierId, educationFormTypeId, educationLanguageId, genderId, showAllRegion, showAllOrganization) {
    return ApiService.get(`/sportexam/Report/GetSportSchoolExamGroupCount?oblastid=${oblastid}&regionid=${regionid}&schoolYearId=${schoolYearId}&organizationTypeId=${organizationTypeId}&schoolTypeId=${schoolTypeId}&isBySportTypeClassifier=${isBySportTypeClassifier}&sportTypeClassifierId=${sportTypeClassifierId}&educationFormTypeId=${educationFormTypeId}&educationLanguageId=${educationLanguageId}&genderId=${genderId}&showAllRegion=${showAllRegion}&showAllOrganization=${showAllOrganization}`)
  },
  GetOtmExamGroupResult(schoolYearId, organizationId, higherEduClassifierId, educationFormTypeId, educationLanguageId, genderId) {
    return ApiService.get(`/sportexam/Report/GetOtmExamGroupResult?schoolYearId=${schoolYearId}&organizationId=${organizationId}&higherEduClassifierId=${higherEduClassifierId}&educationFormTypeId=${educationFormTypeId}&educationLanguageId=${educationLanguageId}&genderId=${genderId}`)
  },
  PrintSportSchoolExamGroupCount(oblastId, regionId, schoolYearId, organizationTypeId, schoolTypeId,
    isBySportTypeClassifier, sportTypeClassifierId, genderId, showAllRegion, showAllOrganization) {
    return ApiService.printtemp(`/sportexam/Report/PrintSportSchoolExamGroupCount?oblastid=${oblastId}&regionid=${regionId}&schoolYearId=${schoolYearId}&organizationTypeId=${organizationTypeId}&schoolTypeId=${schoolTypeId}&isBySportTypeClassifier=${isBySportTypeClassifier}&sportTypeClassifierId=${sportTypeClassifierId}&genderId=${genderId}&showAllRegion=${showAllRegion}&showAllOrganization=${showAllOrganization}`)
  },
  GetSportSchoolAdmissionQuotaReport(schoolyearid, oblastid, regionid, organizationid, schoolgradeid, sporttypeclassifierid, schooltypeid, showAllRegion, showAllOrganization) {
    return ApiService.get(`/sportexam/Report/GetSportSchoolAdmissionQuotaReport?schoolyearid=${schoolyearid}&oblastid=${oblastid}&regionid=${regionid}&organizationid=${organizationid}&schoolgradeid=${schoolgradeid}&sporttypeclassifierid=${sporttypeclassifierid}&schooltypeid=${schooltypeid}&showAllRegion=${showAllRegion}&showAllOrganization=${showAllOrganization}`)
  },
  PrintSportSchoolAdmissionQuotaReport(schoolyearid, oblastid, regionid, organizationid, schoolgradeid, sporttypeclassifierid, schooltypeid, showAllRegion, showAllOrganization) {
    return ApiService.get(`/sportexam/Report/PrintSportSchoolAdmissionQuotaReport?schoolyearid=${schoolyearid}&oblastid=${oblastid}&regionid=${regionid}&organizationid=${organizationid}&schoolgradeid=${schoolgradeid}&sporttypeclassifierid=${sporttypeclassifierid}&schooltypeid=${schooltypeid}&showAllRegion=${showAllRegion}&showAllOrganization=${showAllOrganization}`)
  },
  GetReportExamResultOTM(oblastId, regionId, organizationId, highereduclassifierId, examtypeid, Search, SortColumn, OrderType, PageNumber, PageLimit) {
    return ApiService.get(`/sportexam/AbiturientInfo/GetReportExamResultOTM?oblastId=${oblastId}&regionId=${regionId}&organizationId=${organizationId}&highereduclassifierId=${highereduclassifierId}&examtypeid=${examtypeid}&Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}`)
  },
  PrintReportExamResultOTM(oblastId, regionId, organizationId, highereduclassifierId, examtypeid, Search, SortColumn, OrderType, PageNumber, PageLimit) {
    return ApiService.print(`/sportexam/AbiturientInfo/PrintReportExamResultOTM?oblastId=${oblastId}&regionId=${regionId}&organizationId=${organizationId}&highereduclassifierId=${highereduclassifierId}&examtypeid=${examtypeid}&Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}`)
  },
  GetReportExamResultSportSchool(oblastId, regionId, organizationId, sporttypeclassifierId, Search, SortColumn, OrderType, PageNumber, PageLimit) {
    return ApiService.get(`/sportexam/AbiturientInfo/GetReportExamResultSportSchool?oblastId=${oblastId}&regionId=${regionId}&organizationId=${organizationId}&sporttypeclassifierId=${sporttypeclassifierId}&Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}`)
  },
  PrintReportExamResultSportSchool(oblastId, regionId, organizationId, sporttypeclassifierId, Search, SortColumn, OrderType, PageNumber, PageLimit) {
    return ApiService.print(`/sportexam/AbiturientInfo/PrintReportExamResultSportSchool?oblastId=${oblastId}&regionId=${regionId}&organizationId=${organizationId}&sporttypeclassifierId=${sporttypeclassifierId}&Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}`)
  },
  PrintRegistrationOfAthleteEduSchool(
    oblastid,
    regionid,
    organizationid,
    genderid,
    sporttypeid,
    agecategoryid,
    docyear,
    personname,
    personpinfl,
    youthleaderassignmentpinfl,
    youthleaderassignmentname,
    Search,
    Lang,
    SortColumn,
    OrderType,
    Offset,
    PageNumber,
    PageLimit,
    IsStartPageFromZero,
    seasonid
  ) {
    return ApiService.print(
      `/tshb5/Report/PrintRegistrationOfAthleteEduSchool?oblastid=${oblastid}&regionid=${regionid}&organizationid=${organizationid}&genderid=${genderid}&sporttypeid=${sporttypeid}&agecategoryid=${agecategoryid}&docyear=${docyear}&personname=${personname}&personpinfl=${personpinfl}&youthleaderassignmentpinfl=${youthleaderassignmentpinfl}&youthleaderassignmentname=${youthleaderassignmentname}&Search=${Search}&Lang=${Lang}&SortColumn=${SortColumn}&OrderType=${OrderType}&Offset=${Offset}&PageNumber=${PageNumber}&PageLimit=${PageLimit}&IsStartPageFromZero=${IsStartPageFromZero}&seasonid=${seasonid}`
    );
  },
  PrintRegistrationOfAthleteOrgProfEdu(
    oblastid,
    regionid,
    organizationid,
    genderid,
    sporttypeid,
    agecategoryid,
    docyear,
    personname,
    personpinfl,
    youthleaderassignmentpinfl,
    youthleaderassignmentname,
    Search,
    Lang,
    SortColumn,
    OrderType,
    Offset,
    PageNumber,
    PageLimit,
    IsStartPageFromZero,
    seasonid
  ) {
    return ApiService.print(
      `/tshb5/Report/PrintRegistrationOfAthleteOrgProfEdu?oblastid=${oblastid}&regionid=${regionid}&organizationid=${organizationid}&genderid=${genderid}&sporttypeid=${sporttypeid}&agecategoryid=${agecategoryid}&docyear=${docyear}&personname=${personname}&personpinfl=${personpinfl}&youthleaderassignmentpinfl=${youthleaderassignmentpinfl}&youthleaderassignmentname=${youthleaderassignmentname}&Search=${Search}&Lang=${Lang}&SortColumn=${SortColumn}&OrderType=${OrderType}&Offset=${Offset}&PageNumber=${PageNumber}&PageLimit=${PageLimit}&IsStartPageFromZero=${IsStartPageFromZero}&seasonid=${seasonid}`
    );
  },
  GetTSHB5AthleteReport(oblastId, docyear, seasonid, sportTypeCategoryId, initiativTypeId) {
    return ApiService.get(`/tshb5/Report/GetTSHB5AthleteReport?oblastId=${oblastId}&docyear=${docyear}&seasonid=${seasonid}&sportTypeCategoryId=${sportTypeCategoryId}&initiativTypeId=${initiativTypeId}`)
  },
  PrintTSHB5AthleteReport(oblastId, docyear, seasonid, sportTypeCategoryId, initiativTypeId) {
    return ApiService.print(`/tshb5/Report/PrintTSHB5AthleteReport?oblastId=${oblastId}&docyear=${docyear}&seasonid=${seasonid}&sportTypeCategoryId=${sportTypeCategoryId}&initiativTypeId=${initiativTypeId}`)
  },
  PrintTSHB5AthleteReportFull(oblastId, docyear, seasonid, initiativTypeId, sportTypeCategoryId) {
    return ApiService.print(`/tshb5/Report/PrintTSHB5AthleteReportFull?oblastId=${oblastId}&docyear=${docyear}&seasonid=${seasonid}&sportTypeCategoryId=${sportTypeCategoryId}&initiativTypeId=${initiativTypeId}`)
  },
  GetReportCount(oblastid, regionid, mfyid, regionsectorid, genderid, sporttypeid, agecategoryid, sporttypecategoryid, docyear, youthleaderassignmentname) {
    return ApiService.get(`/tshb5/Report/GetReportCount?oblastid=${oblastid}&regionid=${regionid}&mfyid=${mfyid}&regionsectorid=${regionsectorid}&genderid=${genderid}&sporttypeid=${sporttypeid}&agecategoryid=${agecategoryid}&sporttypecategoryid=${sporttypecategoryid}&docyear=${docyear}&youthleaderassignmentname=${youthleaderassignmentname}`)
  },
  PrintReportCount(oblastid, regionid, mfyid, regionsectorid, genderid, sporttypeid, agecategoryid, sporttypecategoryid, docyear, youthleaderassignmentname) {
    return ApiService.print(`/tshb5/Report/PrintReportCount?oblastid=${oblastid}&regionid=${regionid}&mfyid=${mfyid}&regionsectorid=${regionsectorid}&genderid=${genderid}&sporttypeid=${sporttypeid}&agecategoryid=${agecategoryid}&sporttypecategoryid=${sporttypecategoryid}&docyear=${docyear}&youthleaderassignmentname=${youthleaderassignmentname}`)
  },
};
export default ReportService;
