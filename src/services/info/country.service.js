import ApiService from "../api.service"

const CountryService = {
    GetList(data){
        return ApiService.post(`/country/GetList`,data)
    },
    Get(id){
        if(id == 0 || id == null || id == undefined || id == ''){
            return ApiService.get('/country/Get')
        } else{
            return ApiService.get(`/country/Get/${id}`)
        }
    },
    GetAsSelectList(){
        return ApiService.get('/country/GetAsSelectList')
    },
    Delete(id){
      return ApiService.post(`/country/Delete/${id}`)
  },
    Update(data){
        if(data.id == 0 || data.id == undefined || data.id == null || data.id == ''){
            return ApiService.post('/country/Create',data)
        } else{
            return ApiService.post('/country/Update',data)
        }
    }
}
export default CountryService
