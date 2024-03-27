import ApiService from "../api.service";

const OrganizationService = {
  GetList(data) {
    return ApiService.post(`/Organization/GetList`, data);
  },
  Get(id) {
    if (id == 0 || id == null || id == undefined || id == "") {
      return ApiService.get("/Organization/Get");
    } else {
      return ApiService.get(`/Organization/Get/${id}`);
    }
  },
  GetAsSelectList(districtId) {
    if (
      districtId == 0 ||
      districtId == null ||
      districtId == undefined ||
      districtId == ""
    ) {
      return ApiService.get("/Organization/GetAsSelectList");
    } else {
      return ApiService.get(
        `/Organization/GetAsSelectList?districtId=${districtId}`
      );
    }
  },
  OrganizationAccountGetAsSelectList(orgId) {
    if (orgId === undefined) {
      return ApiService.get("/Organization/OrganizationAccountGetAsSelectList");
    }
    return ApiService.get(
      `/Organization/OrganizationAccountGetAsSelectList?orgId=${orgId}`
    );
  },
  Update(data) {
    if (
      data.id == 0 ||
      data.id == undefined ||
      data.id == null ||
      data.id == ""
    ) {
      return ApiService.post("/Organization/Create", data);
    } else {
      return ApiService.post("/Organization/Update", data);
    }
  },
  Delete(id) {
    return ApiService.post(`/Organization/Delete/${id}`);
  },
};
export default OrganizationService;
