import ApiService from '../api.service'

const IdentityDocumentService = {
    GetAll(lang, ClearCache) {
        return ApiService.get(`/IdentityDocument/GetAll?lang=${lang}&ClearCache=${ClearCache}`)
    },
    GetList(Search,SortColumn, OrderType, PageNumber, PageLimit){
        return ApiService.get(`/IdentityDocument/GetList?Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}`)
    }
}
export default IdentityDocumentService