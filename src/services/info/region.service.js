import ApiService from '../api.service'

const RegionService = {
    GetAll(lang, OblastID){
        return ApiService.get(`/Region/GetAll?lang=${lang}&OblastID=${OblastID}`)
    }, 
    GetAllRegion(oblastName){
        return ApiService.get(`/sportexam/AbiturientInfo/GetAllRegion?oblastName=${oblastName}`)
    }, 
    GetList(Search,SortColumn, OrderType, PageNumber, PageLimit){
        return ApiService.get(`/Region/GetList?Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}`)
    }
}
export default RegionService