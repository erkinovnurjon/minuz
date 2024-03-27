import ApiService from "../api.service";

const BaseCalculationAmountService = {
  GetList(data) {
    return ApiService.post(`/basecalculationamount/GetList`, data);
  },
  Get(id) {
    if (id == 0 || id == null || id == undefined || id == "") {
      return ApiService.get("/basecalculationamount/Get");
    } else {
      return ApiService.get(`/basecalculationamount/Get/${id}`);
    }
  },
  GetAsSelectList() {
    return ApiService.get("/basecalculationamount/GetAsSelectList");
  },
  Delete(id) {
    return ApiService.post(`/basecalculationamount/Delete/${id}`);
  },
  Update(data) {
    if (
      data.id == 0 ||
      data.id == undefined ||
      data.id == null ||
      data.id == ""
    ) {
      return ApiService.post("/basecalculationamount/Create", data);
    } else {
      return ApiService.post("/basecalculationamount/Update", data);
    }
  },
  GetCurrent() {
    return ApiService.get("/basecalculationamount/GetCurrent");
  },
};
export default BaseCalculationAmountService;
