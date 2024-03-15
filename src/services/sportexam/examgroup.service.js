import ApiService from '../api.service'

const ExamGroupService = {
  GetList(
    schoolYearId,
    higHerEduClassifierId,
    educationFormTypemId,
    educationLanguageId,
    genderId,
    Search,
    SortColumn,
    OrderType,
    PageNumber,
    PageLimit,
    withoutTable,
    isOtm,
    sportTypeClassifierId,
    examtypeid
  ) {
    return ApiService.get(
      `/sportexam/ExamGroup/GetList?schoolYearId=${schoolYearId}&higHerEduClassifierId=${higHerEduClassifierId}&educationFormTypemId=${educationFormTypemId}&educationLanguageId=${educationLanguageId}&genderId=${genderId}&Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}&withoutTable=${withoutTable}&isOtm=${isOtm}&sportTypeClassifierId=${sportTypeClassifierId}&examtypeid=${examtypeid}`
    );
  },
  Delete(id) {
    return ApiService.delete(`/sportexam/ExamGroup/Delete?id=${id}`);
  },
  Get(id) {
    return ApiService.get(`/sportexam/ExamGroup/Get?id=${id}`);
  },
  Update(data) {
    return ApiService.post("/sportexam/ExamGroup/Update", data);
  },
  Approve(id) {
    return ApiService.post(`/sportexam/ExamGroup/Approve?id=${id}`);
  },
  CancelApproval(id) {
    return ApiService.post(`/sportexam/ExamGroup/CancelApproval?id=${id}`);
  },
  GetGetAllExamGroup(
    schoolyearid, highereduclassifierid, educationformtypeid, educationlanguageid, sportTypeClassifierid, isOtm, organizationId
  ) {
    return ApiService.get(
      `/sportexam/ExamGroup/GetGetAllExamGroup?schoolyearid=${schoolyearid}&highereduclassifierid=${highereduclassifierid}&educationformtypeid=${educationformtypeid}&educationlanguageid=${educationlanguageid}&sportTypeClassifierid=${sportTypeClassifierid}&isOtm=${isOtm}&organizationId=${organizationId}`
    );
  },
};
export default ExamGroupService;
