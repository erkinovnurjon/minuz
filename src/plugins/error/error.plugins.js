import ErrorComponent from './error.component.vue'
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import ApiService from '@/services/api.service';
import store from '@/store';
 const Modal = {
    install(Vue,options){
        Vue.prototype.$message = function(data){
            console.log(data);
            if(data.status === 500){
                var ComponentClass = Vue.extend(ErrorComponent)
                var instance = new ComponentClass({
                    propsData: { visible : true,data : data.data }
                })
                instance.$mount()
            }
            if(data.status == 400){
                this.$toast({
                    component: ToastificationContent,
                    props: {
                      title: data.data.error,
                      icon: "AlertCircleIcon",
                      variant: "danger",
                    },
                });
            }
            if(data.status == 200 || data.status == 204){
                this.$toast({
                    component: ToastificationContent,
                    props: {
                      title: data.message,
                      icon: "CheckSquareIcon",
                      variant: "success",
                    },
                });
            }
            if(data.status === 403){
                this.$toast({
                    component: ToastificationContent,
                    props: {
                      title: data,
                      icon: "CheckSquareIcon",
                      variant: "danger",
                    },
                });
            }
        },
        Vue.prototype.$notification = function(message,variant){
            this.$toast({
                component: ToastificationContent,
                props: {
                  title: message,
                  icon: variant == "success" ? "CheckSquareIcon" : 'AlertCircleIcon',
                  variant: variant,
                },
            });
        },
        Vue.prototype.$getstatuscolor = function(item){
            return  item.statusid == 1 ? 'primary' : 
                    item.statusid == 2 ? 'success' : 
                    item.statusid == 3 ? 'danger' : 
                    item.statusid == 4 ? 'info' : 
                    item.statusid == 5 ? 'danger' : 
                    item.statusid == 6 ? 'primary' : 
                    item.statusid == 7 ? 'info' : 
                    item.statusid == 8 ? 'danger' : 
                    item.statusid == 9 ? 'success' : 
                    item.statusid == 10 ? 'danger' : 
                    item.statusid == 11 ? 'danger' : 
                    item.statusid == 12 ? 'warning' : 
                    item.statusid == 13 ? 'danger' : 
                    item.statusid == 14 ? 'warning' : 
                    item.statusid == 15 ? 'success' : 
                    item.statusid == 16 ? 'danger' : 
                    item.statusid == 17 ? 'danger' : 
                    item.statusid == 24 ? 'danger' : 
                    item.statusid == 18 ? 'success' :
                    item.statusid == 26 ? 'success' :  
                    item.statusid == 26 ? 'success' : 
                    item.statusid == 20 ? 'primary' : 
                    item.statusid == 46 ? 'primary' : 
                    item.statusid == 47 ? 'primary' : 
                    item.statusid == 30 ? 'danger' : 
                    item.statusid == 19 ? 'success' :  'primary'
        }    
    }
}
export default Modal