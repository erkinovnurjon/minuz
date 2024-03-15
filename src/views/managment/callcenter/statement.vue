<template>
  <b-card no-body>
    <div class="m-2">
      <b-row>
        <b-col
          cols="12"
          :md="filter.typeid == 5 ? 2 : 5"
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
        </b-col>
        <b-col cols="12" md="3">
          <v-select
            v-model="filter.typeid"
            :options="TypeList"
            label="name"
            :reduce="item => item.id"
            :placeholder="$t('ChooseBelow')"
            @input="changesearchtype"
          />
        </b-col>
        <b-col cols="12" md="3" v-if="filter.typeid == 5">
          <v-select
            v-model="filter.educationlanguageid"
            :options="EducationLanguageList"
            label="name"
            :reduce="item => item.id"
            :placeholder="$t('ChooseBelow')"
          />
        </b-col>
        
        <b-col cols="12" md="4">
          <b-input-group class="text-right">
            <b-form-input v-if="filter.typeid !== 4" v-model="filter.fakeSearch" :placeholder="filter.typeid == 1 ? $t('documentseries') : filter.typeid == 2 ? $t('docnumber') : filter.typeid == 3 ? $t('pinfl') : filter.typeid == 4 ? $t('admissionAppDocNumber') : filter.typeid == 6 ? $t('documentseries') : $t('search')" />
            <cleave
              v-if="filter.typeid == 4"
              v-model="filter.Search1"
              class="form-control"
              :raw="false"
              :options="delimiter"
              :placeholder="'0000-0000-0000'"
            />
            <cleave
              v-if="filter.typeid == 6"
              v-model="filter.Search1"
              class="form-control"
              :raw="false"
              :options="docnumber"
              :placeholder="$t('docnumber')"
            />
            <b-input-group-append>
              <b-button @click="Refresh" variant="primary">
                <feather-icon icon="SearchIcon" />
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
    </div>
    <b-row>
      <b-col cols="12" md="12">
        <b-button-group @click="Refresh" class="ml-2 mb-2">
          <b-button @click="filter.admissiontypeid = 1" :variant="filter.admissiontypeid == 1 ? 'primary' : 'outline-primary'" size="sm"> {{$t('1-синфга қабул')}} </b-button>
          <b-button @click="filter.admissiontypeid = 2" :variant="filter.admissiontypeid == 2 ? 'primary' : 'outline-primary'" size="sm"> {{$t('Ихтисослаштирилган мактаб-интернатига(7-синф)')}} </b-button>

          <b-button @click="filter.admissiontypeid = 3" :variant="filter.admissiontypeid == 3 ? 'primary' : 'outline-primary'" size="sm"> {{$t('Ихтисослаштирилган мактабга(5-синф)')}} </b-button>
        </b-button-group>
      </b-col>
    </b-row>
    <!-- <b-row>
      <b-col cols="12" md="12">
        <b-button-group @click="Refresh" class="ml-2 mb-2">
          <b-button v-for="item in AdmissionTypeList" :key="item.id" @click="filter.admissiontypeid = item.id" :variant="filter.admissiontypeid == item.id ? 'primary' : 'outline-primary'" size="sm"> {{ item.shortname }} </b-button>
          </b-button-group>
      </b-col>
    </b-row> -->
    <b-table
      ref="refInvoiceListTable"
      :items="items"
      responsive
      :fields="fields"
      primary-key="id"
      sticky-header="65vh"
      no-border-collapse
      :busy="isBusy"
      show-empty
      :empty-text="$t('NotFound')"
      class="position-relative"
      @sort-changed="SortChange"
    >
      <template #cell(status)="{ item }">
        <b-badge
          :variant="item.status == 'Пассив' ? 'light-danger' : 'light-success'"
        >
          {{ item.status }}
        </b-badge>
      </template>
      <template #head(docnumber)>
        <div style="width: 150px">
          {{ $t('docnumber') }}
        </div>
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
import { BButton, BPagination, BTable, BCol, BRow, BSpinner, BCard, BTooltip, BBadge, BInputGroup, BFormInput, BInputGroupAppend, BButtonGroup } from 'bootstrap-vue'
// import AdmissionApplicationService from '@/services/document/admissionapplication.service';
import HelperService from '@/services/others/helper.service'
import EducationLanguageService from '@/services/info/educationlanguage.service'
import Cleave from 'vue-cleave-component'
// import 'cleave.js/dist/addons/cleave-phone.us'

export default {
  components : {
    BButton, BPagination, BTable, BCol, BRow, BSpinner, BCard, BTooltip, BBadge, BInputGroup, BFormInput, BInputGroupAppend, BButtonGroup, Cleave
  },
  data() {
    return {
      items: [],
      AdmissionTypeList : [],
      EducationLanguageList : [],
      delimiter: {
        delimiter: '-',
        blocks: [4, 4, 4],
      },
      docnumber: {
        blocks: [7],
      },
      fields: [
        {
          key: "docnumber",
          label: this.$t('docnumber'),
          thClass: "text-center",
          tdClass: "text-center",
          sortable: true,
        },
        {
          key: "childrendocumentseries",
          label: this.$t('childrendocumentseries'),
          thClass: "text-center",
          tdClass: "text-center",
          sortable: true,
        },
        {
          key: "childrendocumentnumber",
          label: this.$t('childrendocumentnumber'),
          thClass: "text-center",
          tdClass: "text-center",
          sortable: true,
        },
        {
          key: "childrenfullname",
          label: this.$t('fullname'),
          thClass: "text-center",
          tdClass: "text-center",
          sortable: true,
        },
        // {
        //   key: "childrenpinfl",
        //   label: this.$t('childrenpinfl'),
        //   thClass: "text-center",
        //   sortable: true,
        // },
        {
          key: "parentfullname",
          label: this.$t('parentfullname'),
          thClass: "text-center",
          sortable: true,
        },
        // {
        //   key: "parentparentpinfl",
        //   label: this.$t('parentparentpinfl'),
        //   thClass: "text-center",
        //   sortable: true,
        // },
        {
          key: "schoolyear",
          label: this.$t('schoolyear'),
          thClass: "text-center",
          sortable: true,
        },
        {
          key: "oblast",
          label: this.$t('Oblast'),
          thClass: "text-center",
          sortable: true,
        },
        {
          key: "region",
          label: this.$t('Region'),
          thClass: "text-center",
          sortable: true,
        },
        {
          key: "organization",
          label: this.$t('Organization'),
          thClass: "text-center",
          sortable: true,
        },
        {
          key: "edulanguage",
          label: this.$t('educationlanguage'),
          thClass: "text-center",
          sortable: true,
        },
        {
          key: "status",
          label: this.$t('status'),
          thClass: "text-center",
          tdClass: "text-center",
          sortable: true,
        },
        // { key : 'actions', label : 'actions',thClass : 'text-center', tdClass : 'text-center' }
      ],
      filter: {
        Search: "",
        fakeSearch : "",
        Search1 : "",
        Sort: "",
        Order: "asc",
        perPage: 20,
        currentPage: 1,
        perPageOptions: [10, 20, 50, 100],
        totalRows : 0,
        admissiontypeid : 1,
        pinfl : "",
        documentseries : "",
        documentnumber : "",
        admissionAppDocNumber : "",
        educationlanguageid : 0,
        isthisaschool : false, 
        typeid : 0
      },
      isBusy: false,
      lang : '',
      TypeList : [
        // { id : 1, name : this.$t('documentseries') },
        // { id : 2, name : this.$t('documentnumber') },
        { id : 6, name : this.$t('seriesandnumber') },
        { id : 3, name : this.$t('pinfl') },
        { id : 4, name : this.$t('admissionAppDocNumber') },
        { id : 5, name : this.$t('educationlanguage') },
        
      ]
    };
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
    this.lang = localStorage.getItem('locale') || 'ru'
    HelperService.GetAllAdmissionType().then(res => {
      this.AdmissionTypeList = res.data
    })
    EducationLanguageService.GetAll(this.lang).then(res => {
      this.EducationLanguageList = res.data
    })
    this.filter.educationlanguageid = 0
    this.Refresh();
  },
  methods: {
    SortChange(data) {
      this.filter.Sort = data.sortBy;
      this.filter.Order = data.sortDesc ? "desc" : "asc";
      this.Refresh();
    },
    changesearchtype(){
      this.filter.fakeSearch = ''
      this.filter.documentseries = ''
      this.filter.documentnumber = ''
      this.filter.pinfl = ''
      this.filter.admissionAppDocNumber = ''
      this.filter.educationlanguageid = 0
    },
    Refresh() {
      if(this.filter.typeid == 1){
        this.filter.documentseries = this.filter.fakeSearch
      }
      if(this.filter.typeid == 2){
        this.filter.documentnumber = this.filter.fakeSearch
      }
      if(this.filter.typeid == 3){
        this.filter.pinfl = this.filter.fakeSearch
      }
      if(this.filter.typeid == 4){
        this.filter.admissionAppDocNumber = this.filter.Search1
      }
      if(this.filter.typeid == 6){
        this.filter.documentseries = this.filter.fakeSearch
        this.filter.documentnumber = this.filter.Search1
      }

      this.isBusy = true;
      // AdmissionApplicationService.GetList(
      //   this.filter.Search,
      //   this.filter.Sort,
      //   this.filter.Order,
      //   this.filter.currentPage,
      //   this.filter.perPage,
      //   this.filter.admissiontypeid,
      //   this.filter.pinfl,
      //   this.filter.documentseries,
      //   this.filter.documentnumber,
      //   this.filter.admissionAppDocNumber,
      //   this.filter.educationlanguageid,
      //   this.filter.isthisaschool,
      //   0
      // ).then((res) => {
      //   this.items = res.data.result.rows;
      //   this.filter.totalRows = res.data.total
      //   this.isBusy = false;
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>