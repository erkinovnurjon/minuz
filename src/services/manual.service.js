import ApiService from "./api.service";

const ManualService = {
  StateSelectList() {
    return ApiService.get("/manual/StateSelectList");
  },
  LanguageSelectList() {
    return ApiService.get("/manual/LanguageSelectList");
  },
  GetModulSelectList() {
    return ApiService.get("/manual/GetModuleSelectList");
  },
  IdentityDocumentTypeSelectList() {
    return ApiService.get(`/manual/IdentityDocumentTypeSelectList`);
  },
  GenderSelectList() {
    return ApiService.get(`/manual/GenderSelectList`);
  },
  StudentCategorySelectList() {
    return ApiService.get(`/manual/StudentCategorySelectList`);
  },
  ApplicationTypeSelectList() {
    return ApiService.get(`/manual/ApplicationTypeSelectList`);
  },
  ApplicationPurposeSelectList() {
    return ApiService.get(`/manual/ApplicationPurposeSelectList`);
  },
  EduTypeSelectList() {
    return ApiService.get(`/manual/EduTypeSelectList`);
  },
  EduLanguageSelectList() {
    return ApiService.get(`/manual/EduLanguageSelectList`);
  },
  EduSemesterTypeSelectList() {
    return ApiService.get(`/manual/EduSemesterTypeSelectList`);
  },
  EduFormSelectList() {
    return ApiService.get(`/manual/EduFormSelectList`);
  },
  EduContractTypeSelectList() {
    return ApiService.get(`/manual/EduContractTypeSelectList`);
  },
  ContractSideTypeSelectList() {
    return ApiService.get(`/manual/ContractSideTypeSelectList`);
  },
  EduContractSumTypeSelectList() {
    return ApiService.get(`/manual/EduContractSumTypeSelectList`);
  },
  SocialCategorySelectList() {
    return ApiService.get(`/manual/SocialCategorySelectList`);
  },
  EduFacultyTypeSelectList() {
    return ApiService.get(`/manual/EduFacultyTypeSelectList`);
  },
  FacultySelectList(organizationId) {
    if (
      organizationId == 0 ||
      organizationId == null ||
      organizationId == undefined ||
      organizationId == ""
    ) {
      return ApiService.get("/manual/FacultySelectList");
    } else {
      return ApiService.get(
        `/manual/FacultySelectList?organizationId=${organizationId}`
      );
    }
  },
  EduLevelSelectList() {
    return ApiService.get(`/manual/EduLevelSelectList`);
  },
  AdmissionTypeSelectList() {
    return ApiService.get(`/manual/AdmissionTypeSelectList`);
  },
  StudentSelectList(FacultyId, SpecialityId, EduGroupId) {
    return ApiService.get(
      `/manual/StudentSelectList?FacultyId=${FacultyId}&SpecialityId=${SpecialityId}&EduGroupId=${EduGroupId}`
    );
  },
  AmountMeasureSelectList() {
    return ApiService.get(`/manual/AmountMeasureSelectList`);
  },
  StatusSelectList() {
    return ApiService.get(`/manual/StatusSelectList`);
  },
  EduLevelGroupSelectList() {
    return ApiService.get(`/manual/EduLevelGroupSelectList`);
  },
  StudentPaymentDirectionSelectList() {
    return ApiService.get(`/manual/StudentPaymentDirectionSelectList`);
  },
  PaymentSystemTypeSelectList() {
    return ApiService.get(`/manual/PaymentSystemTypeSelectList`);
  },
  ConditionTypeSelectList() {
    return ApiService.get(`/manual/ConditionTypeSelectList`);
  },
  PrivilegeSelectList() {
    return ApiService.get(`/manual/PrivilegeSelectList`);
  },
  PriorityTypeSelectList() {
    return ApiService.get(`/manual/PriorityTypeSelectList`);
  },
  StudentResidenceTypeSelectList() {
    return ApiService.get(`/manual/StudentResidenceTypeSelectList`);
  },
  DataEntryMethodTypeSelectList() {
    return ApiService.get(`/manual/DataEntryMethodTypeSelectList`);
  },
  DataEntryMethodTypeSelectList() {
    return ApiService.get(`/manual/DataEntryMethodTypeSelectList`);
  },
  StudentResidenceDiscountSelectList() {
    return ApiService.get(`/manual/StudentResidenceDiscountSelectList`);
  },
  EduLevelClassificationSelectList() {
    return ApiService.get(`/manual/EduLevelClassificationSelectList`);
  },
  StudentResidenceSelectList(organizationId, facultyId) {
    if (!facultyId)
      return ApiService.get(
        `/manual/StudentResidenceSelectList?organizationId=${organizationId}`
      );
    else
      return ApiService.get(
        `/manual/StudentResidenceSelectList?organizationId=${organizationId}&facultyId=${facultyId}`
      );
  },
  StudentResidenceTableSelectList(studentResidenceId) {
    return ApiService.get(
      `/manual/StudentResidenceTableSelectList/${studentResidenceId}`
    );
  },
  StudentResidenceTableFacultyList(studentResidenceId, facultyId) {
    return ApiService.get(
      `/manual/StudentResidenceTableFacultyList/${studentResidenceId}/${facultyId}`
    );
  },
};
export default ManualService;
