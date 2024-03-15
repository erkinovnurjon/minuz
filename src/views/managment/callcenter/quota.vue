<template>
  <b-card no-body>
    <div class="m-2">
      <b-row>
        <b-col
          cols="12"
          md="6"
          class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
        >
          <label>{{$t('Entries')}}</label>
          <v-select
            v-model="filter.perPage"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :options="filter.perPageOptions"
            :clearable="false"
            @input="Refresh"
            class="per-page-selector d-inline-block ml-50 mr-1"
          />
          <b-button
            variant="primary"
            :to="{ name: ismainquota ?  'EditschooladmissionquotaMain' : 'EditschooladmissionquotaAdditional',params : {id : 0 , ismainquota : true}}"
            v-if="$store.state.auth.organizationtype !== 4 && $can('SchoolAdmissionQuotaEdit', 'permissions')"
          >
            <feather-icon icon="PlusIcon"></feather-icon> {{ $t('create') }}
          </b-button>
        </b-col>
        <b-col md="2"></b-col>
        <b-col cols="12" md="4">
          <b-input-group class="text-right">
            <b-form-input v-model="filter.Search" :placeholder="$t('search')" />
            <b-input-group-append>
              <b-button @click="Refresh" variant="primary">
                <feather-icon icon="SearchIcon" />
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
    </div>

    <b-table
      ref="refInvoiceListTable"
      :items="items"
      responsive
      :fields="fields"
      primary-key="id"
      sticky-header="65vh"
      striped
      no-border-collapse
      :busy="isBusy"
      show-empty
      :empty-text="$t('NotFound')"
      class="position-relative"
      @sort-changed="SortChange"
    >
      <template #cell(status)="{ item }">
        <b-badge
          :variant="item.status == 'Утвержден' ? 'light-success' : item.status == 'Изменен' ? 'light-info' : item.status == 'Отменено' ? 'light-danger' : item.status == 'Не принято' ? 'light-danger' : item.status == 'Принято' ? 'light-success' : item.status == 'Отправлен' ? 'light-warning' : 'light-primary'"
        >
          {{ item.status }}
        </b-badge>
      </template>
      <template v-slot:table-busy>
        <div
          class="text-center text-primary my-2"
          style="vertical-align: middle"
        >
          <b-spinner class="align-middle mr-2"></b-spinner>
          <strong>{{$t('Loading')}}</strong>
        </div>
      </template>
      <template #cell(actions)="{ item }">
        <div class="text-center text-nowrap">
          <!-- <b-link v-if="(item.status !== 'Утвержден' && $store.state.auth.organizationtype !== 4) && $can('SchoolAdmissionQuotaEdit', 'permissions')" :to="{ name: ismainquota ?  'EditschooladmissionquotaMain' : 'EditschooladmissionquotaAdditional',params : {id : item.id}}"  v-b-tooltip.hover.top="$t('Edit')" style="margin-right : 5px">
            <feather-icon icon="EditIcon"></feather-icon>
          </b-link>
          
          <b-link v-if="(item.status !== 'Утвержден' && $store.state.auth.organizationtype !== 4) && $can('SchoolAdmissionQuotaDelete', 'permissions')" @click="$refs['DeleteModal'+item.id].show()" style="margin-right : 5px" v-b-tooltip.hover.top="$t('Delete')">
            <feather-icon icon="Trash2Icon"></feather-icon>
          </b-link>

          <b-link v-if="(item.status == 'Отменено' || item.status == 'Изменен' || item.status == 'Создан') && $store.state.auth.organizationtype !== 4 && $can('SchoolAdmissionQuotaApprove', 'permissions')" @click="$refs['ApproveModal'+item.id].show()" style="margin-right : 5px" v-b-tooltip.hover.top="$t('Approve')">
            <feather-icon icon="CheckCircleIcon" />
          </b-link>

          <b-link v-if="(item.status == 'Утвержден' && $store.state.auth.organizationtype !== 4) && $can('SchoolAdmissionQuotaCancelApproval', 'permissions')" @click="$refs['CancelApprovalModal'+item.id].show()" v-b-tooltip.hover.top="$t('CancelApproval')" style="margin-right : 5px">
            <feather-icon icon="XCircleIcon" />
          </b-link>

          <b-link v-if="((item.status == 'Утвержден' || item.status == 'Не принято') && $store.state.auth.organizationtype !== 4) && $can('SchoolAdmissionQuotaSend','permissions')" @click="$refs['SendModal'+item.id].show()" style="margin-right : 5px" v-b-tooltip.hover.top="$t('Send')">
            <feather-icon icon="SendIcon" />
          </b-link> -->

          <b-link  :to="{ name: 'Viewschooladmissionquota',params : {id : item.id},query : { sentlist : 'false', ismainquota : ismainquota } }"  v-b-tooltip.hover.top="$t('View')" style="margin-right : 5px">
            <feather-icon icon="EyeIcon"></feather-icon>
          </b-link>
        </div>
        <b-modal
          :ref="'DeleteModal'+item.id"
          :cancel-title="$t('Cancel')"
          :ok-title="$t('Accept')"
          cancel-variant="danger"
          ok-variant="success"
          @ok="Delete(item)"
        >
          <template #modal-title>
            {{ $t('Delete') }} <b-spinner v-if="DeleteLoading" small></b-spinner>
          </template>
          <b-card-text>
            <h5> ID :  {{ item.id }} </h5>
            <h5> {{ $t('WantDelete') }} </h5>
          </b-card-text>
        </b-modal>
        <b-modal
          :ref="'ApproveModal'+item.id"
          :cancel-title="$t('Cancel')"
          :ok-title="$t('Accept')"
          cancel-variant="danger"
          ok-variant="success"
          @ok="Approve(item)"
        >
          <template #modal-title>
            {{ $t('Approve') }} <b-spinner v-if="ApproveLoading" small></b-spinner>
          </template>
          <b-card-text>
            <h5> ID :  {{ item.id }} </h5>
            <h5> {{ $t('WantApprove') }} </h5>
          </b-card-text>
        </b-modal>
        <b-modal
          :ref="'CancelApprovalModal'+item.id"
          :cancel-title="$t('Cancel')"
          :ok-title="$t('Accept')"
          cancel-variant="danger"
          ok-variant="success"
          @ok="CancelApproval(item)"
        >
          <template #modal-title>
            {{ $t('CancelApproval') }} <b-spinner v-if="CancelApprovalLoading" small></b-spinner>
          </template>
          <b-card-text>
            <h5> ID :  {{ item.id }} </h5>
            <h5> {{ $t('WantCancelApproval') }} </h5>
          </b-card-text>
        </b-modal>
        <b-modal
          :ref="'AcceptModal'+item.id"
          :cancel-title="$t('Cancel')"
          :ok-title="$t('Accept')"
          cancel-variant="danger"
          ok-variant="success"
          @ok="Accept(item)"
        >
          <template #modal-title>
            {{ $t('Accept') }} <b-spinner v-if="AcceptLoading" small></b-spinner>
          </template>
          <b-card-text>
            <h5> ID :  {{ item.id }} </h5>
            <h5> {{ $t('WantAccept') }} </h5>
          </b-card-text>
        </b-modal>
        <b-modal
          :ref="'SendModal'+item.id"
          :cancel-title="$t('Cancel')"
          :ok-title="$t('Accept')"
          cancel-variant="danger"
          ok-variant="success"
          @ok="Send(item)"
        >
          <template #modal-title>
            {{ $t('Send') }} <b-spinner v-if="SendLoading" small></b-spinner>
          </template>
          <b-card-text>
            <h5> ID :  {{ item.id }} </h5>
            <h5> {{ $t('WantSend') }} </h5>
          </b-card-text>
        </b-modal>
      </template>
    </b-table>
    <div class="mx-2 mb-2">
      <b-row>
        <b-col
          cols="12"
          sm="6"
          class="d-flex align-items-center justify-content-center justify-content-sm-start"
        >
          <span class="text-muted"
            >{{$t('Showing')}} {{ firstNumber }} {{$t('to')}} {{ lastNumber }} {{$t('of')}}
            {{ filter.totalRows }} {{$t('entries')}}</span
          >
        </b-col>
        <!-- Pagination -->
        <b-col
          cols="12"
          sm="6"
          class="d-flex align-items-center justify-content-center justify-content-sm-end"
        >
          <b-pagination
            v-model="filter.currentPage"
            :total-rows="filter.totalRows"
            :per-page="filter.perPage"
            first-number
            last-number
            @input="Refresh"
            class="mb-0 mt-1 mt-sm-0"
            prev-class="prev-item"
            next-class="next-item"
          >
            <template #prev-text>
              <feather-icon icon="ChevronLeftIcon" size="18" />
            </template>
            <template #next-text>
              <feather-icon icon="ChevronRightIcon" size="18" />
            </template>
          </b-pagination>
        </b-col>
      </b-row>
    </div>
  </b-card>
</template>

<script>
import { BButton, BPagination, BTable, BCol, BRow, BSpinner, BCard, BTooltip, BBadge, BInputGroup, BFormInput, BInputGroupAppend, BLink,VBTooltip,BModal,VBModal,BCardText,BDropdown,BDropdownItem,BFormTextarea } from 'bootstrap-vue'
import SportSchoolAdmissionQuotaService from "@/services/sportexam/sportschooladmissionquota.service";
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
export default {
  components : {
    BButton, BPagination, BTable, BCol, BRow, BSpinner, BCard, BTooltip, BBadge, BInputGroup, BFormInput, BInputGroupAppend, BLink,BModal,BCardText,BDropdown,BDropdownItem,BFormTextarea
  },
  directives: {
    'b-tooltip': VBTooltip,
    'b-modal': VBModal
  },
  data() {
    return {
      items: [],
      fields: [
        {
          key: "id",
          label: this.$t('id'),
          thClass: "text-center",
          tdClass: "text-center",
          sortable: true,
        },
        {
          key: "ondate",
          label: this.$t('ondate'),
          thClass: "text-center",
          tdClass: "text-center",
          sortable: true,
        },
        {
          key: "schoolyear",
          label: this.$t('SchoolYear'),
          thClass: "text-center",
          tdClass: "text-center",
          sortable: true,
        },
        {
          key: "admissiontypename",
          label: this.$t('admissiontype'),
          thClass: "text-center",
          sortable: true,
        },
        {
          key: "oblastname",
          label: this.$t('Oblast'),
          thClass: "text-center",
          sortable: true,
        },
        {
          key: "regionname",
          label: this.$t('Region'),
          thClass: "text-center",
          sortable: true,
        },
        {
          key: "organizationname",
          label: this.$t('School'),
          thClass: "text-center",
          sortable: true,
        },
        {
          key: "mainquota",
          label: this.$t('mainquota'),
          thClass: "text-center",
          sortable: true,
        },
        // {
        //   key: "additionalquota",
        //   label: this.$t('additionalquota'),
        //   thClass: "text-center",
        //   sortable: true,
        // },
        // {
        //   key: "totalquota",
        //   label: this.$t('totalquota'),
        //   thClass: "text-center",
        //   sortable: true,
        // },
        {
          key: "status",
          label: this.$t('status'),
          thClass: "text-center",
          tdClass: "text-center",
          sortable: true,
        },
        { key : 'actions', label : this.$t('actions'),thClass : 'text-center', tdClass : 'text-center' }
      ],
      filter: {
        Search: "",
        Sort: "",
        Order: "asc",
        perPage: 20,
        currentPage: 1,
        perPageOptions: [10, 20, 50, 100],
        totalRows : 0,
        description : ''
      },
      isBusy: false,
      ApproveLoading : false,
      DeleteLoading : false,
      CancelApprovalLoading : false,
      AcceptLoading : false,
      RejectLoading : false,
      SendLoading : false
    };
  },
  props : {
    ismainquota : {
      type : Boolean
    }
  },
  computed : {
    firstNumber() {
      return (this.filter.currentPage - 1) * this.filter.perPage + 1;
    },
    lastNumber() {
      if (this.filter.totalRows < this.filter.perPage) {
        return this.filter.totalRows;
      } else {
        if (this.filter.currentPage * this.filter.perPage > this.filter.totalRows) {
          return this.filter.totalRows;
        } else {
          return this.filter.currentPage * this.filter.perPage;
        }
      }
    },
  },
  created() {
    this.Refresh();
  },
  methods: {
    SortChange(data) {
      this.filter.Sort = data.sortBy;
      this.filter.Order = data.sortDesc ? "desc" : "asc";
      this.Refresh();
    },
    Delete(item){
      this.DeleteLoading = true
      SchoolAdmissionQuotaService.Delete(item.id).then(res => {
        this.DeleteLoading = false
        this.Refresh()
        this.makeToast(this.$t('DeleteSuccess'),'success')
      }).catch(error => {
        this.DeleteLoading = false
        this.makeToast(error.response.data.error,'danger')
        
      })
    },
    Approve(item){
      this.ApproveLoading = true
      SchoolAdmissionQuotaService.Approve(item.id).then(res => {
        this.ApproveLoading = false
        this.Refresh()
        this.makeToast(this.$t('ApproveSuccess'),'success')
      }).catch(error => {
        this.ApproveLoading = false
        this.makeToast(error.response.data.error,'danger')
        
      })
    },
    Accept(item){
      this.AcceptLoading = true
      SchoolAdmissionQuotaService.Accept(item.id).then(res => {
        this.AcceptLoading = false
        this.Refresh()
        this.makeToast(this.$t('AcceptSuccess'),'success')
      }).catch(error => {
        this.AcceptLoading = false
        this.makeToast(error.response.data.error,'danger')
        
      })
    },
    Reject(item){
      this.RejectLoading = true
      SchoolAdmissionQuotaService.Reject(item.id, this.filter.description).then(res => {
        this.RejectLoading = false
        this.Refresh()
        this.makeToast(this.$t('RejectSuccess'),'success')
      }).catch(error => {
        this.RejectLoading = false
        this.makeToast(error.response.data.error,'danger')
        
      })
      this.filter.description = ''
    },
    Send(item){
      this.SendLoading = true
      SchoolAdmissionQuotaService.Send(item.id).then(res => {
        this.SendLoading = false
        this.Refresh()
        this.makeToast(this.$t('SendSuccess'),'success')
      }).catch(error => {
        this.SendLoading = false
        this.makeToast(error.response.data.error,'danger')
        
      })
    },
    CancelApproval(item){
      this.CancelApprovalLoading = true
      SchoolAdmissionQuotaService.CancelApproval(item.id).then(res => {
        this.CancelApprovalLoading = false
        this.Refresh()
        this.makeToast(this.$t('CancelApprovalSuccess'),'success')
      }).catch(error => {
        this.CancelApprovalLoading = false
        this.makeToast(error.response.data.error,'danger')
        
      })
    },
    Refresh() {
      this.isBusy = true;
      SchoolAdmissionQuotaService.GetList(
        this.filter.Search,
        this.filter.Sort,
        this.filter.Order,
        this.filter.currentPage,
        this.filter.perPage,
        this.ismainquota
      ).then((res) => {
        this.items = res.data.rows;
        this.filter.totalRows = res.data.total
        this.isBusy = false;
      });
    },
    makeToast(message,variant){
        this.$toast({
            component: ToastificationContent,
            props: {
                title: message,
                icon: variant == 'success' ? 'CheckSquareIcon' : 'AlertTriangleIcon',
                variant: variant,
            },
        })
    },
  },
  watch : {
    ismainquota : {
      handler(newValue,oldValue){
        this.Refresh()
      }
    }
  }
};
</script>

<style lang="scss" scoped>

</style>