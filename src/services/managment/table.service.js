import ApiService from '../api.service'

const TableService = {
    GetList(Search,SortColumn,OrderType,PageNumber,PageLimit){
        return ApiService.get(`/Table/GetList?Search=${Search}&SortColumn=${SortColumn}&OrderType=${OrderType}&PageNumber=${PageNumber}&PageLimit=${PageLimit}`)
    },
    Get(id){
        return ApiService.get(`/Table/Get?id=${id}`)
    },
    GetAll(){
        return ApiService.get(`/Table/GetAll`)
    },
    Update(data){
        return ApiService.post('/Table/Update',data)
    },
    Delete(id){
        return ApiService.delete(`/Table/Delete?id=${id}`)
    }
};
export default TableService;
    