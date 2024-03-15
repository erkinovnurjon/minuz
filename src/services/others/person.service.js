import ApiService from '../api.service'

const PersonService = {
    GetFromGovData(documentSeries,documentNumber,dateOfBirth,INN,identityDocumentId,pinfl){
        return ApiService.get(`/Person/GetFromGovData?documentSeries=${documentSeries}&documentNumber=${documentNumber}&dateOfBirth=${dateOfBirth}&INN=${INN}&identityDocumentId=${identityDocumentId}&pinfl=${pinfl}`)
    },
};
export default PersonService;