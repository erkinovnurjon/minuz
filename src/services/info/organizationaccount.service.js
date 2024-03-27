import ApiService from "../api.service";

const OrganizationAccountService = {
  GetList(data) {
    return ApiService.post(`/OrganizationAccount/GetList`, data);
  },
  SaveAsExecel(data) {
    return ApiService.post(`/OrganizationAccount/SaveAsExecel`, data);
  },
  Get(id) {
    if (id == 0 || id == null || id == undefined || id == "") {
      return ApiService.get("/OrganizationAccount/Get");
    } else {
      return ApiService.get(`/OrganizationAccount/Get/${id}`);
    }
  },
  Delete(id) {
    return ApiService.post(`/OrganizationAccount/Delete/${id}`);
  },
  GetAsSelectList(orgId) {
    return ApiService.get(`/OrganizationAccount/GetAsSelectList/${orgId}`);
  },
  Update(data) {
    if (
      data.id == 0 ||
      data.id == undefined ||
      data.id == null ||
      data.id == ""
    ) {
      return ApiService.post("/OrganizationAccount/Create", data);
    } else {
      return ApiService.post("/OrganizationAccount/Update", data);
    }
  },
};
export default OrganizationAccountService;
