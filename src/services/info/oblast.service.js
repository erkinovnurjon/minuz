import ApiService from '../api.service'

const OblastService = {
    GetAll(lang){
        return ApiService.get(`/Oblast/GetAll?lang=${lang}`)
    },
    GetAllOblast(){
        return ApiService.get('/sportexam/AbiturientInfo/GetAllOblast')
    },
    GetList(Search,SortColumn, OrderType, PageNumber, PageLimit){
        return ApiService.get(`/Oblast/GetList?Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}`)
    }
}
export default OblastService