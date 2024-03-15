import ApiService from "../api.service";

const ApplicationService = {
  GetList(
    Search,
    SortColumn,
    OrderType,
    PageNumber,
    PageLimit,
    applicationtypeid,
    pinfl,
    documentSeries,
    documentNumber,
    docnumber,
    statusId,
    oblastid,
    regionid,
    genderid,
    organizationId,
    IsMyGov,
    mygov_task_id
) {
    return ApiService.get(
        `/myapplication/Application/GetList?Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}&applicationtypeid=${applicationtypeid}&pinfl=${pinfl}&documentSeries=${documentSeries}&documentNumber=${documentNumber}&docnumber=${docnumber}&statusId=${statusId}&oblastid=${oblastid}&regionid=${regionid}&genderid=${genderid}&organizationId=${organizationId}&IsMyGov=${IsMyGov}&mygov_task_id=${mygov_task_id}`
    );
},
  Get(id) {
    return ApiService.get(`/myapplication/Application/Get?id=${id}`);
  },
  GetAppAdmEduSchoolInfoByInn(orginn) {
    return ApiService.get(`/myapplication/Application/GetAppAdmEduSchoolInfoByInn?orginn=${orginn}`);
  },
  Accepted(admAppId, DocNumber) {
    return ApiService.post(`/myapplication/Application/Accepted?admAppId=${admAppId}&DocNumber=${DocNumber}`)
  },
  Cancel(admAppId, description, DocNumber) {
    return ApiService.post(`/myapplication/Application/Cancel?admAppId=${admAppId}&description=${description}&DocNumber=${DocNumber}`)
  },
  AcceptedApplicationForComission(id) {
    return ApiService.post(`/myapplication/Application/Accepted?id=${id}`)
  },
  CancelApplicationForComission(id, description) {
    return ApiService.post(`/myapplication/Application/Cancel?id=${id}&description=${description}`)
  },
  PrintSMandISMReport(
    Search,
    SortColumn,
    OrderType,
    PageNumber,
    PageLimit,
    applicationtypeid,
    pinfl,
    documentSeries,
    documentNumber,
    docnumber,
    statusId,
    oblastid,
    regionid,
    genderid,
    organizationId,
    IsMyGov,
    mygov_task_id
) {
    return ApiService.print(
        `/myapplication/Application/PrintSMandISMReport?Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}&applicationtypeid=${applicationtypeid}&pinfl=${pinfl}&documentSeries=${documentSeries}&documentNumber=${documentNumber}&docnumber=${docnumber}&statusId=${statusId}&oblastid=${oblastid}&regionid=${regionid}&genderid=${genderid}&organizationId=${organizationId}&IsMyGov=${IsMyGov}&mygov_task_id=${mygov_task_id}`
    );
},
  GetApplicationByNumber(applicationNumber) {
    return ApiService.get(`/myapplication/Application/GetApplicationByNumber?applicationNumber=${applicationNumber}`)
},
};
export default ApplicationService;
