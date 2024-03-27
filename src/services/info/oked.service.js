import ApiService from "../api.service";

const OkedService = {
  GetList(data) {
    return ApiService.post(`/Oked/GetList`, data);
  },
  SaveAsExecel(data) {
    return ApiService.post(`/Oked/SaveAsExecel`, data);
  },
  Get(id) {
    if (id == 0 || id == null || id == undefined || id == "") {
      return ApiService.get("/Oked/Get");
    } else {
      return ApiService.get(`/Oked/Get/${id}`);
    }
  },
  Delete(id) {
    return ApiService.post(`/Oked/Delete/${id}`);
  },
  GetAsSelectList() {
    return ApiService.get("/Oked/GetAsSelectList");
  },
  Update(data) {
    if (
      data.id == 0 ||
      data.id == undefined ||
      data.id == null ||
      data.id == ""
    ) {
      return ApiService.post("/Oked/Create", data);
    } else {
      return ApiService.post("/Oked/Update", data);
    }
  },
};
export default OkedService;
