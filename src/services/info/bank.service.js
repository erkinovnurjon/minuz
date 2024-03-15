import ApiService from "../api.service";

const BankService = {
  GetList(data) {
    return ApiService.post(`/Bank/GetList`, data);
  },
  Get(id) {
    if (id == 0 || id == null || id == undefined || id == "") {
      return ApiService.get("/Bank/Get");
    } else {
      return ApiService.get(`/Bank/Get/${id}`);
    }
  },
  GetAsSelectList() {
    return ApiService.get("/Bank/GetAsSelectList");
  },
  Update(data) {
    if (
      data.id == 0 ||
      data.id == undefined ||
      data.id == null ||
      data.id == ""
    ) {
      return ApiService.post("/Bank/Create", data);
    } else {
      return ApiService.post("/Bank/Update", data);
    }
  },
  Delete(id) {
    return ApiService.post(`/Bank/Delete/${id}`);
  },
};
export default BankService;
