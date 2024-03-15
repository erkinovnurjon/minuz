import ApiService from '../api.service'

const JTDDashboardService = {
  GetApplicantCountByGender(schoolYearId, docyear){
    return ApiService.get(`/gto/JTDDashboard/GetApplicantCountByGender?schoolYearId=${schoolYearId}&docyear=${docyear}`)
  },
  GetApplicantCountByOblast(schoolYearId, docyear){
    return ApiService.get(`/gto/JTDDashboard/GetApplicantCountByOblast?schoolYearId=${schoolYearId}&docyear=${docyear}`)
  },
  GetApplicantCountByAgeCategory(schoolYearId){
    return ApiService.get(`/gto/JTDDashboard/GetApplicantCountByAgeCategory?schoolYearId=${schoolYearId}`)
  },
  GetApplicantCountByDirection(schoolYearId, docyear){
    return ApiService.get(`/gto/JTDDashboard/GetApplicantCountByDirection?schoolYearId=${schoolYearId}&docyear=${docyear}`)
  },
  GetApplicatCountByJtdTestCategorytype(schoolYearId, docyear) {
    return ApiService.get(`/gto/JTDDashboard/GetApplicatCountByJtdTestCategorytype?schoolYearId=${schoolYearId}&docyear=${docyear}`)
  }
};
export default JTDDashboardService;
    