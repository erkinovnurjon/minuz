import ApiService from '../api.service'

const GroupFormByEduDirectionService = {
  GetList(schoolYearId, higHerEduClassifierId, educationFormTypemId, educationLanguageId, genderId, Search, SortColumn, OrderType, PageNumber, PageLimit,sportTypeClassifierId, isOtm, examtypeid) {
    return ApiService.get(`/sportexam/GroupFormByEduDirection/GetList?schoolYearId=${schoolYearId}&higHerEduClassifierId=${higHerEduClassifierId}&educationFormTypemId=${educationFormTypemId}&educationLanguageId=${educationLanguageId}&genderId=${genderId}&Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}&sportTypeClassifierId=${sportTypeClassifierId}&isOtm=${isOtm}&examtypeid=${examtypeid}`)
  },
  Get(id) {
    return ApiService.get(`/sportexam/GroupFormByEduDirection/Get?id=${id}`)
  },
  FillGroupFormByEduDirection() {
    return ApiService.get(`/sportexam/GroupFormByEduDirection/FillGroupFormByEduDirection`)
  },
  FillGroupFormByEduDirectionSet(organizationId, organizationInn, isOtm, examtypeid) {
    return ApiService.get(`/sportexam/GroupFormByEduDirection/FillGroupFormByEduDirection?organizationId=${organizationId}&organizationInn=${organizationInn}&isOtm=${isOtm}&examtypeid=${examtypeid}`)
  },
  GroupFormByApplicationNumber(applicationNumber, examgroupId) {
    return ApiService.get(`/sportexam/GroupFormByEduDirection/GroupFormByApplicationNumber?applicationNumber=${applicationNumber}&examgroupId=${examgroupId}`)
  }
}
export default GroupFormByEduDirectionService