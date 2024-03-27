import ApiService from "../api.service";

const EduAreaService = {
  GetList(data) {
    return ApiService.post(`/EduArea/GetList`, data);
  },
  Get(id) {
    if (id == 0 || id == null || id == undefined || id == "") {
      return ApiService.get("/EduArea/Get");
    } else {
      return ApiService.get(`/EduArea/Get/${id}`);
    }
  },
  GetAsSelectList() {
    return ApiService.get("/EduArea/GetAsSelectList");
  },
  Update(data) {
    if (
      data.id == 0 ||
      data.id == undefined ||
      data.id == null ||
      data.id == ""
    ) {
      return ApiService.post("/EduArea/Create", data);
    } else {
      return ApiService.post("/EduArea/Update", data);
    }
  },
  Delete(id) {
    return ApiService.post(`/EduArea/Delete/${id}`);
  },
};
export default EduAreaService;
