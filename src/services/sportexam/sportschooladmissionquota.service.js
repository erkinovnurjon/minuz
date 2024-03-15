import ApiService from '../api.service'

const SportSchoolAdmissionQuotaService = {
    GetList(schoolYearId, schoolTypeId, organizationTypeId, statusId, Search,SortColumn,OrderType,PageNumber,PageLimit, oblastId, regionId, organizationId) {
        return ApiService.get(
            `/sportexam/SportSchoolAdmissionQuota/GetList?schoolYearId=${schoolYearId}&organizationId=${organizationId}&schoolTypeId=${schoolTypeId}&organizationTypeId=${organizationTypeId}&statusId=${statusId}&regionId=${regionId}&Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}&oblastId=${oblastId}`
        );
    },
    Delete(id) {
        return ApiService.delete(`/sportexam/SportSchoolAdmissionQuota/Delete?id=${id}`);
    },
    Get(id, IsClone) {
        return ApiService.get(`/sportexam/SportSchoolAdmissionQuota/Get?id=${id}&IsClone=${IsClone}`);
    },
    Update(data) {
        return ApiService.post("/sportexam/SportSchoolAdmissionQuota/Update", data);
    },
    Approve(id) {
        return ApiService.post(`/sportexam/SportSchoolAdmissionQuota/Approve?id=${id}`);
    },
    CancelApproval(id) {
        return ApiService.post(`/sportexam/SportSchoolAdmissionQuota/CancelApproval?id=${id}`);
    }
}
export default SportSchoolAdmissionQuotaService