import ApiService from '../api.service'

const SchoolYearService = {
    GetAll(lang){
        return ApiService.get(`/SchoolYear/GetAll?lang=${lang}`)
    }, 
    GetList(Search,SortColumn, OrderType, PageNumber, PageLimit){
        return ApiService.get(`/SchoolYear/GetList?Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}`)
    },
    GetDefault(){
        return ApiService.get(`/SchoolYear/GetDefault`)
    },
    GetDefaultAdmissionSchoolYear(){
        return ApiService.get(`/SchoolYear/GetDefaultAdmissionSchoolYear`)
    }
}
export default SchoolYearService