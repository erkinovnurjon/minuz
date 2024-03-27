import ApiService from "../api.service";

const BaseComputationAmountService = {
  GetList(data) {
    return ApiService.post(`/basecomputationamount/GetList`, data);
  },
  Get(id) {
    if (id == 0 || id == null || id == undefined || id == "") {
      return ApiService.get("/basecomputationamount/Get");
    } else {
      return ApiService.get(`/basecomputationamount/Get/${id}`);
    }
  },
  GetAsSelectList() {
    return ApiService.get("/basecomputationamount/GetAsSelectList");
  },
  Delete(id) {
    return ApiService.post(`/basecomputationamount/Delete/${id}`);
  },
  Update(data) {
    if (
      data.id == 0 ||
      data.id == undefined ||
      data.id == null ||
      data.id == ""
    ) {
      return ApiService.post("/basecomputationamount/Create", data);
    } else {
      return ApiService.post("/basecomputationamount/Update", data);
    }
  },
  GetCurrent() {
    return ApiService.get("/basecomputationamount/GetCurrent");
  },
};
export default BaseComputationAmountService;
