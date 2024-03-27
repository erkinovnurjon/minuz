import ApiService from "../api.service";

const EduSemesterService = {
  GetList(data) {
    return ApiService.post(`/EduSemester/GetList`, data);
  },
  Get(id) {
    if (id == 0 || id == undefined || id == null || id == "") {
      return ApiService.get("/EduSemester/Get");
    } else {
      return ApiService.get(`/EduSemester/Get/${id}`);
    }
  },
  GetAsSelectList() {
    return ApiService.get("/EduSemester/GetAsSelectList");
  },
  Delete(id) {
    return ApiService.post(`/EduSemester/Delete/${id}`);
  },
  Update(data) {
    if (
      data.id == 0 ||
      data.id == undefined ||
      data.id == null ||
      data.id == ""
    ) {
      return ApiService.post("/EduSemester/Create", data);
    } else {
      return ApiService.post("/EduSemester/Update", data);
    }
  },
};
export default EduSemesterService;
