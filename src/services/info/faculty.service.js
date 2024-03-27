import ApiService from "../api.service";

const FacultyService = {
  GetList(data) {
    return ApiService.post(`/Faculty/GetList`, data);
  },
  Get(id) {
    if (id == 0 || id == null || id == undefined || id == "") {
      return ApiService.get("/Faculty/Get");
    } else {
      return ApiService.get(`/Faculty/Get/${id}`);
    }
  },
  GetAsSelectList(organizationId) {
    if (
      organizationId == 0 ||
      organizationId == null ||
      organizationId == undefined ||
      organizationId == ""
    ) {
      return ApiService.get("/Faculty/GetAsSelectList");
    } else {
      return ApiService.get(
        `/Faculty/GetAsSelectList?organizationId=${organizationId}`
      );
    }
  },
  SyncWithHemis(data) {
    return ApiService.get("/Faculty/SyncWithHemis", data);
  },
  Update(data) {
    if (
      data.id == 0 ||
      data.id == undefined ||
      data.id == null ||
      data.id == ""
    ) {
      return ApiService.post("/Faculty/Create", data);
    } else {
      return ApiService.post("/Faculty/Update", data);
    }
  },
  Delete(id) {
    return ApiService.post(`/Faculty/Delete/${id}`);
  },
};
export default FacultyService;
