import ApiService from "../api.service";

const EduYearService = {
  GetList(data) {
    return ApiService.post(`/EduYear/GetList`, data);
  },
  Get(id) {
    if (id == 0 || id == null || id == undefined || id == "") {
      return ApiService.get("/EduYear/Get");
    } else {
      return ApiService.get(`/EduYear/Get/${id}`);
    }
  },
  GetAsSelectList() {
    return ApiService.get("/EduYear/GetAsSelectList");
  },
  Update(data) {
    if (
      data.id == 0 ||
      data.id == undefined ||
      data.id == null ||
      data.id == ""
    ) {
      return ApiService.post("/EduYear/Create", data);
    } else {
      return ApiService.post("/EduYear/Update", data);
    }
  },
  Delete(id) {
    return ApiService.post(`/EduYear/Delete/${id}`);
  },
};
export default EduYearService;
