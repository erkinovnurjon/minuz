import ApiService from "../api.service";

const CallCenterService = {
  GetParentListByPhoneNumber(phoneNumber) {
    return ApiService.get(
      `/CallCenter/GetParentListByPhoneNumber?phoneNumber=${phoneNumber}`
    );
  },
  GetParentListByDocument(documentSeries, documentNumber, dateOfBirth, pinfl) {
    return ApiService.get(
      `/CallCenter/GetParentListByDocument?documentSeries=${documentSeries}&documentNumber=${documentNumber}&dateOfBirth=${dateOfBirth}&pinfl=${pinfl}`
    );
  },
  GetChildrenListByPhoneNumber(phoneNumber) {
    return ApiService.get(
      `/CallCenter/GetChildrenListByPhoneNumber?phoneNumber=${phoneNumber}`
    );
  },
  GetChildrenListByDocument(documentSeries, documentNumber, dateOfBirth, pinfl) {
    return ApiService.get(
      `/CallCenter/GetChildrenListByDocument?documentSeries=${documentSeries}&documentNumber=${documentNumber}&dateOfBirth=${dateOfBirth}&pinfl=${pinfl}`
    );
  },
  GetAdmissionAppListByPhoneNumber(phoneNumber) {
    return ApiService.get(
      `/CallCenter/GetAdmissionAppListByPhoneNumber?phoneNumber=${phoneNumber}`
    );
  },
  GetAdmissionAppListByRegNumber(regNumber) {
    return ApiService.get(
      `/CallCenter/GetAdmissionAppListByRegNumber?regNumber=${regNumber}`
    );
  },
  GetAdmissionAppListByParentId(parentId) {
    return ApiService.get(
      `/CallCenter/GetAdmissionAppListByParentId?parentId=${parentId}`
    );
  },
  GetAdmissionAppListByChildrenId(childrenId) {
    return ApiService.get(
      `/CallCenter/GetAdmissionAppListByChildrenId?childrenId=${childrenId}`
    );
  },
  GetAdmAppReferenceByChildrenDocument(
    documentSeries,
    documentNumber,
    dateOfBirth
  ) {
    return ApiService.print(
      `/CallCenter/GetAdmAppReferenceByChildrenDocument?documentSeries=${documentSeries}&documentNumber=${documentNumber}&dateOfBirth=${dateOfBirth}`
    );
  },
  GetSmsSentToParent(phoneNumber) {
    return ApiService.get(
      `/CallCenter/GetSmsSentToParent?phoneNumber=${phoneNumber}`
    );
  },
};
export default CallCenterService;
