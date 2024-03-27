import ApiService from "../api.service";

const EduSpecialityClassifierService = {
  GetList(data) {
    return ApiService.post(`/EduSpecialityClassifier/GetList`, data);
  },
  Get(id) {
    if (id == 0 || id == null || id == undefined || id == "") {
      return ApiService.get("/EduSpecialityClassifier/Get");
    } else {
      return ApiService.get(`/EduSpecialityClassifier/Get/${id}`);
    }
  },
  GetAsSelectList(eduareaId, eduTypeId, parentOnly) {
    return ApiService.get(
      `/EduSpecialityClassifier/GetAsSelectList?eduareaId=${eduareaId}&eduTypeId=${eduTypeId}&parentOnly=${parentOnly}`
    );
  },
  Update(data) {
    if (
      data.id == 0 ||
      data.id == undefined ||
      data.id == null ||
      data.id == ""
    ) {
      return ApiService.post("/EduSpecialityClassifier/Create", data);
    } else {
      return ApiService.post("/EduSpecialityClassifier/Update", data);
    }
  },
  Delete(id) {
    return ApiService.post(`/EduSpecialityClassifier/Delete/${id}`);
  },
};
export default EduSpecialityClassifierService;
