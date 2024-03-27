import ApiService from "../api.service";

const EduStudyDurationService = {
  GetList(data) {
    return ApiService.post(`/EduStudyDuration/GetList`, data);
  },
  Get(id) {
    if (id == 0 || id == null || id == undefined || id == "") {
      return ApiService.get("/EduStudyDuration/Get");
    } else {
      return ApiService.get(`/EduStudyDuration/Get/${id}`);
    }
  },
  GetAsSelectList() {
    return ApiService.get("/EduStudyDuration/GetAsSelectList");
  },
  Update(data) {
    if (
      data.id == 0 ||
      data.id == undefined ||
      data.id == null ||
      data.id == ""
    ) {
      return ApiService.post("/EduStudyDuration/Create", data);
    } else {
      return ApiService.post("/EduStudyDuration/Update", data);
    }
  },
  Delete(id) {
    return ApiService.post(`/EduStudyDuration/Delete/${id}`);
  },
};
export default EduStudyDurationService;
