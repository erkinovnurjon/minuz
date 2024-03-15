import ApiService from "../api.service";

const HelperService = {
  GetStateList() {
    return ApiService.get("/Helper/GetStateList");
  },
  GetStatusList(admissiontypeid) {
    return ApiService.get(
      `/Helper/GetStatusList?admissiontypeid=${admissiontypeid}`
    );
  },
  GetModuleList(lang) {
    return ApiService.get(`/Helper/GetModuleList?lang=${lang}`);
  },
  GetRoleList() {
    return ApiService.get(`/Helper/GetRoleList`);
  },
  GetLanguageList() {
    return ApiService.get(`/Helper/GetLanguageList`);
  },
  GetCategoriesList() {
    return ApiService.get(`/Helper/GetCategoriesList`);
  },
  GetAllExamtype() {
    return ApiService.get(`/Helper/GetAllExamtype`);
  },
  GetAllTeachersInSchool(organizationid) {
    if (organizationid === null || organizationid === undefined) {
      organizationid = 0;
    }
    return ApiService.get(
      `/Helper/GetAllTeachersInSchool?organizationid=${organizationid}`
    );
  },
  GetAllOrgCoach(organizationid) {
    if (organizationid === null || organizationid === undefined) {
      organizationid = 0;
    }
    return ApiService.get(
      `/Helper/GetAllOrgCoach?organizationid=${organizationid}`
    );
  },
  GetPersonCountInSchool(organizationid) {
    return ApiService.get(
      `/Helper/GetPersonCountInSchool?organizationid=${organizationid}`
    );
  },
  GetAllAdmissionType() {
    return ApiService.get(`/Helper/GetAllAdmissionType`);
  },
  GetAllQuoteType() {
    return ApiService.get(`/Helper/GetAllQuoteType`);
  },
  DeleteParentUserData(mobilenumber, documentseriesnumber) {
    return ApiService.get(
      `/Helper/DeleteParentUserData?mobilenumber=${mobilenumber}&documentseriesnumber=${documentseriesnumber}`
    );
  },
  SyncErpTables() {
    return ApiService.get(`/Helper/SyncErpTables`);
  },
  UpdateParentUserMobileNumber(
    oldmobilenumber,
    newmobilenumber,
    documentseriesnumber
  ) {
    return ApiService.get(
      `/Helper/UpdatePersonUserMobileNumber?oldmobilenumber=${oldmobilenumber}&newmobilenumber=${newmobilenumber}&documentseriesnumber=${documentseriesnumber}`
    );
  },
  ChangePersonUserPassword(
    username,
    newpassword,
    confirmedpassword,
    documentseriesnumber
  ) {
    return ApiService.get(
      `/Helper/ChangePersonUserPassword?username=${username}&newpassword=${newpassword}&confirmedpassword=${confirmedpassword}&documentseriesnumber=${documentseriesnumber}`
    );
  },
  GetAllIdentityDocSeries(IdentityDocumentId) {
    return ApiService.get(
      `/Helper/GetAllIdentityDocSeries?IdentityDocumentId=${IdentityDocumentId}`
    );
  },
  GetAllIdentityDocument(isParent) {
    return ApiService.get(
      `/Helper/GetAllIdentityDocument?isParent=${isParent}`
    );
  },
  GetAllKinshipDegree() {
    return ApiService.get(`/Helper/GetAllKinshipDegree`);
  },
  GetGenderList(lang) {
    return ApiService.get(`/Helper/GetGenderList?lang=${lang}`);
  },
  InsertSchoolAdmissionAppCountInfo() {
    return ApiService.get(`/Helper/InsertSchoolAdmissionAppCountInfo`);
  },
  SyncErpTables() {
    return ApiService.get(`/Helper/SyncErpTables`);
  },
  GetAllScoreCalculationType() {
    return ApiService.get(`/Helper/GetAllScoreCalculationType`);
  },
  GetAllScoreType() {
    return ApiService.get(`/Helper/GetAllScoreType`);
  },
  GetAllJTDTestCategoryType(lang) {

    return ApiService.get(`/Helper/GetAllJTDTestCategoryType?lang=${lang}`);
  },
  GetResultInputTypeList(lang) {

    return ApiService.get(`/Helper/GetResultInputTypeList?lang=${lang}`);
  },
  GetPersonOrganizationInfo(pinfl, lang) {

    return ApiService.get(`/Helper/GetPersonOrganizationInfo?pinfl=${pinfl}&lang=${lang}`);
  },
  GetErpChildrenOrgInfo(documentseries, documentnumber, dateofbirth, lang) {

    return ApiService.get(`/Helper/GetErpChildrenOrgInfo?documentseries=${documentseries}&documentnumber=${documentnumber}&dateofbirth=${dateofbirth}&lang=${lang}`);
  },
  GetFileExtensionList() {
    return ApiService.get('/Helper/GetFileExtensionList')
  },
  GetAllInitiativType() {
    return ApiService.get('/Helper/GetAllInitiativType')
  },
  GetAllSportGroupCategoryType() {
    return ApiService.get(`/Helper/GetAllSportGroupCategoryType`)
  },
  GetAllapplicaTiontype() {
    return ApiService.get(`/Helper/GetAllapplicaTiontype`)
  },
  GetAllCommissionCategory(isAll) {
    if (isAll == null || isAll === undefined) {
      isAll = true;
    }
    return ApiService.get(`/Helper/GetAllCommissionCategory?isAll=${isAll}`)
  },
  GetAllQualificationCategory() {
    return ApiService.get(`/Helper/GetAllQualificationCategory`)
  },
  SyncErpSportHelperTables() {
    return ApiService.get(`/Helper/SyncErpSportHelperTables`)
  },
  GetAllSchoolGrade() {
    return ApiService.get(`/Helper/GetAllSchoolGrade`)
  },
  GetAllCommissionType(commissioncategoryid, isAll) {
    if (isAll == null || isAll === undefined) {
      isAll = true;
    }
    return ApiService.get(`/Helper/GetAllCommissionType?commissioncategoryid=${commissioncategoryid}&isAll=${isAll}`)
  },
  GetAllErpOblast() {
    return ApiService.get(`/Helper/GetAllErpOblast`)
  },
  GetAllErpRegion(oblastid) {
    return ApiService.get(`/Helper/GetAllErpRegion?oblastid=${oblastid}`)
  },
  GetAllErpOrganizations(oblastid, regionid, organizationtypeid, schooltypeid, schoollegalformid) {
    return ApiService.get(`/Helper/GetAllErpOrganizations?oblastid=${oblastid}&regionid=${regionid}&organizationtypeid=${organizationtypeid}&schooltypeid=${schooltypeid}&schoollegalformid=${schoollegalformid}`)
  },
  GetAllSportSelectionType() {
    return ApiService.get(`/sportsct/Helper/GetAllSportSelectionType`)
  },
  GetAllSportSelectionSystem() {
    return ApiService.get(`/sportsct/Helper/GetAllSportSelectionSystem`)
  },
  GetAllSeason(){
    return ApiService.get(`/Helper/GetAllSeason`)
  },
  GetAllOrgProfEdu(){
    return ApiService.get(`/Helper/GetAllOrgProfEdu`)
  },
  GetAllProjectType() {
    return ApiService.get(`/Helper/GetAllProjectType`)
  },

  GetAllSportGroup(organizationId, sportTypeClassifierId, schoolYearId, showOnlyFormed, showOnlyHaveFreePlace){
    return ApiService.get(`/Helper/GetAllSportGroup?organizationId=${organizationId}&sportTypeClassifierId=${sportTypeClassifierId}&schoolYearId=${schoolYearId}&showOnlyFormed=${showOnlyFormed}&showOnlyHaveFreePlace=${showOnlyHaveFreePlace}`)
  },
  GetAthleteInfo(pinfl){
    return ApiService.get(`/Helper/GetAthleteInfo?pinfl=${pinfl}`)
  }
};
export default HelperService;