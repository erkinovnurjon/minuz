import ApiService from '../api.service'

const OrganizationTypeService = {
    GetAll(lang){
        return ApiService.get(`/OrganizationType/GetAll?lang=${lang}`)
    }, 
    GetList(Search,SortColumn, OrderType, PageNumber, PageLimit){
        return ApiService.get(`/OrganizationType/GetList?Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}`)
    }
}
export default OrganizationTypeService