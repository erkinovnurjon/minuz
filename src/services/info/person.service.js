import ApiService from "../api.service";

const PersonService = {
  GetList(data) {
    return ApiService.post(`/Person/GetList`, data);
  },
  Get(id) {
    if (id == 0 || id == null || id == undefined || id == "") {
      return ApiService.get("/Person/Get");
    } else {
      return ApiService.get(`/Person/Get/${id}`);
    }
  },
  GetPersonInfo(Seria, Number, DateOfBirth) {
    return ApiService.get(
      `/Person/GetPersonInfo/Seria=${Seria}&Number=${Number}&DateOfBirth=${DateOfBirth}`
    );
  },
  GetAsSelectList() {
    return ApiService.get("/Person/GetAsSelectList");
  },
  Update(data) {
    if (
      data.id == 0 ||
      data.id == undefined ||
      data.id == null ||
      data.id == ""
    ) {
      return ApiService.post("/Person/Create", data);
    } else {
      return ApiService.post("/Person/Update", data);
    }
  },
  Delete(id) {
    return ApiService.post(`/Person/Delete/${id}`);
  },
  GetByPassportdataWithPhoto(data) {
    return ApiService.post(`/Person/GetByPassportdataWithPhoto`, data);
  },
};
export default PersonService;
