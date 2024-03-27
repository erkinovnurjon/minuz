import ApiService from "../api.service";

const BaseStipendAmountService = {
  GetList(data) {
    return ApiService.post(`/basestipendamount/GetList`, data);
  },
  Get(id) {
    if (id == 0 || id == null || id == undefined || id == "") {
      return ApiService.get("/basestipendamount/Get");
    } else {
      return ApiService.get(`/basestipendamount/Get/${id}`);
    }
  },
  GetAsSelectList() {
    return ApiService.get("/basestipendamount/GetAsSelectList");
  },
  Delete(id) {
    return ApiService.post(`/basestipendamount/Delete/${id}`);
  },
  Update(data) {
    if (
      data.id == 0 ||
      data.id == undefined ||
      data.id == null ||
      data.id == ""
    ) {
      return ApiService.post("/basestipendamount/Create", data);
    } else {
      return ApiService.post("/basestipendamount/Update", data);
    }
  },
  GetCurrent() {
    return ApiService.get("/basestipendamount/GetCurrent");
  },
};
export default BaseStipendAmountService;
