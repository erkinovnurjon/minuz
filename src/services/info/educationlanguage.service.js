import ApiService from '../api.service'

const EducationLanguageService = {
    GetAll(lang){
        return ApiService.get(`/EducationLanguage/GetAll?lang=${lang}`)
    }, 
    GetList(Search,SortColumn, OrderType, PageNumber, PageLimit){
        return ApiService.get(`/EducationLanguage/GetList?Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}`)
    }
}
export default EducationLanguageService