import ApiService from "../api.service";

const ExceptionReasonService = {
  GetList(data) {
    return ApiService.post(`/exceptionreason/GetList`, data);
  },
  Get(id) {
    if (id == 0 || id == null || id == undefined || id == "") {
      return ApiService.get("/exceptionreason/Get");
    } else {
      return ApiService.get(`/exceptionreason/Get/${id}`);
    }
  },
  GetAsSelectList() {
    return ApiService.get("/exceptionreason/GetAsSelectList");
  },
  Delete(id) {
    return ApiService.post(`/exceptionreason/Delete/${id}`);
  },
  Update(data) {
    if (
      data.id == 0 ||
      data.id == undefined ||
      data.id == null ||
      data.id == ""
    ) {
      return ApiService.post("/exceptionreason/Create", data);
    } else {
      return ApiService.post("/exceptionreason/Update", data);
    }
  },
  Held(data) {
    return ApiService.post(`/exceptionreason/Held`, data);
  },
  CancelHeld(data) {
    return ApiService.post(`/exceptionreason/CancelHeld`, data);
  },
};
export default ExceptionReasonService;
