import ApiService from '../api.service'

const AccountService = {
    Login(data){
        return ApiService.post(`/account/Login`,data)
    },
    ChangeLanguage(data){
        return ApiService.post(`/account/ChangeLanguage`,data)
    },
    OneIdLogin(data){
        return ApiService.post(`/account/OneIdLogin`,data)
    },
    SelectRole(data){
        return ApiService.post(`/account/SelectRole`,data)
    },
    logout(){
        return ApiService.get(`/account/Logout`)
    }
}
export default AccountService;
    