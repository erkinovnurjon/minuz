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
        <b-col md="2">
          <div>
            <flat-pickr
              v-model="filter.dateOfBirth"
              class="form-control"
              :placeholder="$t('dateOfbirth')"
              :config="config"
            />
            </div
        ></b-col>
        <b-col md="1 ">
          <b-form-input
            :placeholder="$t('series')"
            v-model="filter.documentSeries"
          />
        </b-col>
        <b-col cols="12" md="3">
          <b-input-group class="text-right">
            <b-form-input
              :placeholder="$t('documentnumber')"
              v-model="filter.documentNumber"
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
    <b-col sm='12' md="6" lg="6">
                <b-card class="mt-2">
                    <table>
                        <tbody>
                            <tr>
                                <td class="pr-1 pb-1">
                                    {{ $t('fullname') }} :
                                </td>
                                <td class="pb-1"><span class="font-weight-bold"> {{ items[0].fullname }} </span></td>
                            </tr>
                            <tr>
                                <td class="pr-1 pb-1">
                                    {{ $t('dateofbirth') }} :
                                </td>
                                <td class="font-weight-bold pb-1"> {{ items[0].dateofbirth }} </td>
                            </tr>
                            <tr>
                                <td class="pr-1 pb-1">
                                    {{ $t('documentseries') }} :
                                </td>
                                <td class="font-weight-bold pb-1"> {{ items[0].documentseries }} </td>
                            </tr>
                            <tr>
                                <td class="pr-1 pb-1">
                                    {{ $t('documentnumber') }} :
                                </td>
                                <td class="font-weight-bold pb-1"> {{ items[0].documentnumber }} </td>
                            </tr>
                        </tbody>
                    </table>
                </b-card>
            </b-col>
                <b-col sm='12' md="6" lg="6">
                <b-card class="mt-2">
                    <table>
                        <tbody>
                            <tr>
                                <td class="pr-1 pb-1">
                                    {{ $t('pinfl') }} :
                                </td>
                                <td class="pb-1"><span class="font-weight-bold"> {{ items.pinfl }} </span></td>
                            </tr>
                            <tr>
                                <td class="pr-1 pb-1">
                                    {{ $t('parentname') }} :
                                </td>
                                <td class="font-weight-bold pb-1"> {{ items.parentname }} </td>
                            </tr>
                            <tr>
                                <td class="pr-1 pb-1">
                                    {{ $t('region') }} :
                                </td>
                                <td class="font-weight-bold pb-1"> {{ items.region }} </td>
                            </tr>
                            <tr>
                                <td class="pr-1 pb-1">
                                    {{ $t('Organization') }} :
                                </td>
                                <td class="font-weight-bold pb-1"> {{ items.Organization }} </td>
                            </tr>
                        </tbody>
                    </table>
                </b-card>
            </b-col>
  </b-row>
  </b-card>
</template>

<script>
import {
  BButton,
  BPagination,
  BTable,
  BCol,
  BRow,
  BSpinner,
  BCard,
  BTooltip,
  BBadge,
  BInputGroup,
  BFormInput,
  BInputGroupAppend,
} from "bootstrap-vue";
import CallCenterService from "@/services/others/callcenter.service";
import flatPickr from 'vue-flatpickr-component';
export default {
  components: {
    BButton,
    BPagination,
    BTable,
    BCol,
    BRow,
    flatPickr,
    BSpinner,
    BCard,
    BTooltip,
    BBadge,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,
  },
  data() {
    return {
      items: [],
      fields: [
        {
          key: "fullname",
          label: this.$t("fullname"),
          thClass: "text-center",
          tdClass: "text-center",
          sortable: true,
        },
        {
          key: "dateofbirth",
          label: this.$t("dateofbirth"),
          thClass: "text-center",
          sortable: true,
        },
        {
          key: "documentseries",
          label: this.$t("documentseries"),
          thClass: "text-center",
          sortable: true,
        },
        {
          key: "documentnumber",
          label: this.$t("documentnumber"),
          thClass: "text-center",
          tdClass: "text-center",
          sortable: true,
        },
         {
          key: "pinfl",
          label: this.$t("pinfl"),
          thClass: "text-center",
          sortable: true,
        },
        {
          key: "parentname",
          label: this.$t("parentname"),
          thClass: "text-center",
          tdClass: "text-center",
          sortable: true,
        },
      ],
      filter: {
        documentSeries: "",
        documentNumber: "",
        dateOfBirth: "",
      },
       config : {
                dateFormat : 'd.m.Y'
            },
      isBusy: false,
    };
  },
  computed: {},
  created() {
    this.Refresh();
  },
  methods: {
    Refresh() {
      this.isBusy = true;
      CallCenterService.GetChildrenListByDocument(
        this.filter.documentSeries,
        this.filter.documentNumber,
        this.filter.dateOfBirth
      ).then((res) => {
        this.items = res.data;
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