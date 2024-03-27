import ApiService from "../api.service";

const RegionService = {
  GetList(data) {
    return ApiService.post(`/Region/GetList`, data);
  },
  Get(id) {
    if (id == 0 || id == null || id == undefined || id == "") {
      return ApiService.get("/Region/Get");
    } else {
      return ApiService.get(`/Region/Get/${id}`);
    }
  },
  GetAsSelectList(countryId) {
    return ApiService.get(`/Region/GetAsSelectList/${countryId}`);
  },
  Delete(id) {
    return ApiService.post(`/Region/Delete/${id}`);
  },
  Update(data) {
    if (
      data.id == 0 ||
      data.id == undefined ||
      data.id == null ||
      data.id == ""
    ) {
      return ApiService.post("/Region/Create", data);
    } else {
      return ApiService.post("/Region/Update", data);
    }
  },
};
export default RegionService;
