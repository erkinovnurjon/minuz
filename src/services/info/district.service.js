import ApiService from "../api.service";

const DistrictService = {
  GetList(data) {
    return ApiService.post(`/District/GetList`, data);
  },
  Get(id) {
    if (id == 0 || id == null || id == undefined || id == "") {
      return ApiService.get("/District/Get");
    } else {
      return ApiService.get(`/District/Get/${id}`);
    }
  },
  GetAsSelectList(regionId) {
    return ApiService.get(`/District/GetAsSelectList/${regionId}`);
  },
  Delete(id) {
    return ApiService.post(`/District/Delete/${id}`);
  },
  Update(data) {
    if (
      data.id == 0 ||
      data.id == undefined ||
      data.id == null ||
      data.id == ""
    ) {
      return ApiService.post("/District/Create", data);
    } else {
      return ApiService.post("/District/Update", data);
    }
  },
};
export default DistrictService;
