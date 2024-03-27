import ApiService from "../api.service";

const NationalityService = {
  GetList(data) {
    return ApiService.post(`/nationality/GetList`, data);
  },
  Get(id) {
    if (id == 0 || id == null || id == undefined || id == "") {
      return ApiService.get("/nationality/Get");
    } else {
      return ApiService.get(`/nationality/Get/${id}`);
    }
  },
  GetAsSelectList() {
    return ApiService.get("/nationality/GetAsSelectList");
  },
  Delete(id) {
    return ApiService.post(`/nationality/Delete/${id}`);
  },
  Update(data) {
    if (
      data.id == 0 ||
      data.id == undefined ||
      data.id == null ||
      data.id == ""
    ) {
      return ApiService.post("/nationality/Create", data);
    } else {
      return ApiService.post("/nationality/Update", data);
    }
  },
};
export default NationalityService;
