import ApiService from "../api.service";

const EduSpecialityService = {
  GetList(data) {
    return ApiService.post(`/EduSpeciality/GetList`, data);
  },
  Get(id) {
    if (id == 0 || id == null || id == undefined || id == "") {
      return ApiService.get("/EduSpeciality/Get");
    } else {
      return ApiService.get(`/EduSpeciality/Get/${id}`);
    }
  },
  GetAsSelectList(eduareaId, eduFacultyId, organizationId) {
    let url = `/EduSpeciality/GetAsSelectList`;
    let isQuestionMark = true;
    if (eduareaId !== undefined) {
      url = `${url}?eduareaId=${eduareaId}`;
      isQuestionMark = false;
    }
    if (eduFacultyId !== undefined) {
      url = `${url}${
        isQuestionMark ? "?" : "&"
      }eduFacultyId=${eduFacultyId}&organizationId=${organizationId}`;
    }
    return ApiService.get(url);
  },
  Update(data) {
    if (
      data.id == 0 ||
      data.id == undefined ||
      data.id == null ||
      data.id == ""
    ) {
      return ApiService.post("/EduSpeciality/Create", data);
    } else {
      return ApiService.post("/EduSpeciality/Update", data);
    }
  },
  SyncWithHemis(organizationId) {
    if (
      organizationId == 0 ||
      organizationId == null ||
      organizationId == undefined ||
      organizationId == ""
    ) {
      return ApiService.get("/EduSpeciality/SyncWithHemis");
    } else {
      return ApiService.get(
        `/EduSpeciality/SyncWithHemis?organizationId=${organizationId}`
      );
    }
  },
  Delete(id) {
    return ApiService.post(`/EduSpeciality/Delete/${id}`);
  },
};
export default EduSpecialityService;
