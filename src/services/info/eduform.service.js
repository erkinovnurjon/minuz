import ApiService from "../api.service";

const EduFormService = {
  GetList(data) {
    return ApiService.post(`/EduForm/GetList`, data);
  },
  Get(id) {
    return ApiService.get(`/EduForm/Get/${id}`);
  },
  Update(data) {
    return ApiService.post("/EduForm/Update", data);
  },
};
export default EduFormService;
