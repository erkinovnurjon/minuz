import ApiService from "../api.service";

const CitizenshipService = {
  GetList(data) {
    return ApiService.post(`/Citizenship/GetList`, data);
  },
  Get(id) {
    if (id == 0 || id == null || id == undefined || id == "") {
      return ApiService.get("/Citizenship/Get");
    } else {
      return ApiService.get(`/Citizenship/Get/${id}`);
    }
  },
  Delete(id) {
    return ApiService.post(`/Citizenship/Delete/${id}`);
  },
  GetAsSelectList() {
    return ApiService.get("/Citizenship/GetAsSelectList");
  },
  Update(data) {
    if (
      data.id == 0 ||
      data.id == undefined ||
      data.id == null ||
      data.id == ""
    ) {
      return ApiService.post("/citizenship/Create", data);
    } else {
      return ApiService.post("/citizenship/Update", data);
    }
  },
};
export default CitizenshipService;
