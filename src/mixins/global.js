import ToastificationContent from '@core/components/toastification/ToastificationContent.vue';

export default {
   components: {},
   data() {
      return {};
   },
   computed: {},
   methods: {
      isEmpty(obj) {
         for (const prop in obj) {
            if (Object.hasOwn(obj, prop)) {
               return false;
            }
         }
         return true;
      },
      forceFileDownload(response, name) {
         var { headers } = response;
         var blob = new Blob([response.data]);
         const url = window.URL.createObjectURL(blob);
         const link = document.createElement('a');
         link.href = url;
         link.setAttribute('download', name + '.xlsx'); //or any other extension
         document.body.appendChild(link);
         link.click();
      },
      currency(amount) {
         return this.$options.filters.currency(
            amount,

            {
               symbol: '',
               thousandsSeparator: ' ',
               fractionCount: 0
            }
         );
      },
      getColor(item) {
         if (item.statusId == 24 || item.statusId == 25 || item.statusId == 23 || item.statusId == 5 || item.statusId == 3 || item.statusId == 10) {
            return 'danger';
         } else if (
            item.statusId == 13 ||
            item.statusId == 11 ||
            item.statusId == 26 ||
            item.statusId == 9 ||
            item.statusId == 14 ||
            item.statusId == 16 ||
            item.statusId == 17 ||
            item.statusId == 18 ||
            item.statusId == 21 ||
            item.statusId == 34
         ) {
            return 'success';
         } else if (item.statusId == 28) {
            return 'info';
         } else if (item.statusId == 29) {
            return 'warning';
         } else if (item.statusId == 7 || item.statusId == 27 || item.statusId == 33) {
            return 'primary';
         } else {
            return 'info';
         }
      },
      getColorStatus(item) {
         if (
            item.prtnContractStatusId == 24 ||
            item.prtnContractStatusId == 25 ||
            item.prtnContractStatusId == 23 ||
            item.prtnContractStatusId == 5 ||
            item.prtnContractStatusId == 3 ||
            item.prtnContractStatusId == 10
         ) {
            return 'danger';
         } else if (
            item.prtnContractStatusId == 13 ||
            item.prtnContractStatusId == 11 ||
            item.prtnContractStatusId == 26 ||
            item.prtnContractStatusId == 9 ||
            item.prtnContractStatusId == 14 ||
            item.prtnContractStatusId == 16 ||
            item.prtnContractStatusId == 17 ||
            item.prtnContractStatusId == 18 ||
            item.prtnContractStatusId == 21 ||
            item.prtnContractStatusId == 2
         ) {
            return 'success';
         } else if (item.prtnContractStatusId == 6) {
            return 'warning';
         } else if (item.prtnContractStatusId == 7) {
            return 'info';
         } else if (item.prtnContractStatusId == 1) {
            return 'primary';
         } else {
            return 'primary';
         }
      },
      makeToast(message, variant) {
         this.$toast({
            component: ToastificationContent,
            props: {
               title: message,
               icon: variant == 'success' ? 'CheckSquareIcon' : 'AlertTriangleIcon',
               variant: variant
            }
         });
      }
   }
};
