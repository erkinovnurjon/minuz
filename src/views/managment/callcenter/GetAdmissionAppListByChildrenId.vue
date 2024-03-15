<template>
  <b-card no-body>
    <div class="m-2">
      <b-row>
        <b-col
          cols="12"
          md="6"
          class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
        >
        </b-col>
        <b-col md="2"> <v-select
            v-model="filter.childrenId"
            :options="ChildrenList"
            label="name"
            :reduce="item => item.id"
            :placeholder="$t('ChooseBelow')"
          /></b-col>
        <b-col cols="12" md="4">
              <b-button @click="Refresh" variant="primary">
                <feather-icon icon="SearchIcon" />
              </b-button>
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
      no-border-collapse
      :busy="isBusy"
      show-empty
      :empty-text="$t('NotFound')"
      class="position-relative"
    >
      <template #cell(status)="{ item }">
        <b-badge
          :variant="item.status == 'Пассив' ? 'light-danger' : 'light-success'"
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
          <strong>{{$t("Loading")}}</strong>
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
          
          >
        </b-col>
        <b-col
          cols="12"
          sm="6"
          class="d-flex align-items-center justify-content-center justify-content-sm-end"
        >
        </b-col>
      </b-row>
    </div>
  </b-card>
</template>

<script>
import { BButton, BPagination, BTable, BCol, BRow, BSpinner, BCard, BTooltip, BBadge, BInputGroup, BFormInput, BInputGroupAppend } from 'bootstrap-vue'
import CallCenterService from "@/services/others/callcenter.service";

export default {
  components : {
    BButton, BPagination, BTable, BCol, BRow, BSpinner, BCard, BTooltip, BBadge, BInputGroup, BFormInput, BInputGroupAppend
  },
  data() {
    return {
      items: [],
      ParentList : [],
      fields: [
        {
          key: "phonenumber",
          label: this.$t('phonenumber'),
          thClass: "text-center",
          tdClass: "text-center",
          sortable: true,
        },
        {
          key: "shortname",
          label: this.$t('shortname'),
          thClass: "text-center",
          sortable: true,
        },
        {
          key: "fullname",
          label: this.$t('fullname'),
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
      ],
      filter: {
        childrenId : 0,
      },
      isBusy: false,
    };
  },
  computed : {

  },
  created() {
    this.Refresh();
  },
  methods: {
    Refresh() {
      this.isBusy = true;
      CallCenterService.GetAdmissionAppListByChildrenId(
        this.filter.childrenId,
      ).then((res) => {
        this.items = res.data.rows;
        this.isBusy = false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}

.invoice-filter-select {
  min-width: 190px;

  ::v-deep .vs__selected-options {
    flex-wrap: nowrap;
  }

  ::v-deep .vs__selected {
    width: 100px;
  }
}
</style>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>