import ApiService from "../api.service";

const ConditionsForApplyStudentResidenceService = {
  GetList(data) {
    return ApiService.post(`/conditionsforapplystudentresidence/GetList`, data);
  },
  Get(id) {
    if (id == 0 || id == null || id == undefined || id == "") {
      return ApiService.get("/conditionsforapplystudentresidence/Get");
    } else {
      return ApiService.get(`/conditionsforapplystudentresidence/Get/${id}`);
    }
  },
  GetAsSelectList() {
    return ApiService.get(
      "/conditionsforapplystudentresidence/GetAsSelectList"
    );
  },
  Delete(id) {
    return ApiService.post(`/conditionsforapplystudentresidence/Delete/${id}`);
  },
  Update(data) {
    if (
      data.id == 0 ||
      data.id == undefined ||
      data.id == null ||
      data.id == ""
    ) {
      return ApiService.post(
        "/conditionsforapplystudentresidence/Create",
        data
      );
    } else {
      return ApiService.post(
        "/conditionsforapplystudentresidence/Update",
        data
      );
    }
  },
  GetCurrent() {
    return ApiService.get("/conditionsforapplystudentresidence/GetCurrent");
  },
};
export default ConditionsForApplyStudentResidenceService;
