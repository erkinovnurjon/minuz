<template>
  <div>
    <b-card>
      <div class="mb-3">
        <h4>Foydalanuvchi nomi: {{ Account.DisplayName }}</h4>
      </div>
      <b-row>
        <b-col>
          <b-button-group @click="Refresh">
              <b-button
                @click="filter.projectTypeId = 1"
                :variant="
                  filter.projectTypeId == 1 ? 'primary' : 'outline-primary'
                "
                size="md"
              >
                {{ $t("Infoname") }}
              </b-button>
              <b-button
                @click="filter.projectTypeId = 2"
                :variant="
                  filter.projectTypeId == 2 ? 'primary' : 'outline-primary'
                "
                size="md"
              >
                {{ $t("jtdsSchool") }}
              </b-button>
            </b-button-group>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col sm="12" md="3" class="mb-1" v-if="filter.projectTypeId == 1">
          <v-select
            :options="OblastList"
            v-model="filter.oblastId"
            :reduce="(item) => item.id"
            @input="ChangeOblastFilter"
            :placeholder="$t('region')"
            label="name"
            style="width: 100%"
          ></v-select>
        </b-col>
        <b-col sm="12" md="3" class="mb-1" v-if="filter.projectTypeId == 1">
          <v-select
            :options="RegionList"
            v-model="filter.regionId"
            :reduce="(item) => item.id"
            :placeholder="$t('Region')"
            @input="ChangeRegionFilter"
            label="name"
            style="width: 100%"
          ></v-select>
        </b-col>

        <!-- 2-tab -->
        <b-col sm="12" md="3" class="mb-1" v-if="filter.projectTypeId == 2">
          <v-select
            :options="OblastList"
            v-model="filter.oblastId"
            :reduce="(item) => item.id"
            @input="ChangeOblastFilter"
            :placeholder="$t('region')"
            label="name"
            style="width: 100%"
          ></v-select>
        </b-col>
        <b-col sm="12" md="3" class="mb-1" v-if="filter.projectTypeId == 2">
          <v-select
            :options="RegionList"
            v-model="filter.regionId"
            :reduce="(item) => item.id"
            :placeholder="$t('Region')"
            @input="ChangeRegionFilter"
            label="name"
            style="width: 100%"
          ></v-select>
        </b-col>
        <b-col sm="12" md="3" class="mb-1" v-if="filter.projectTypeId == 2">
          <v-select
            :options="OrganizationList"
            v-model="filter.organizationId"
            :reduce="(item) => item.id"
            :placeholder="$t('Organization')"
            @input="ChangeOrg"
            label="name"
            style="width: 100%"
          ></v-select>
        </b-col>
        <!-- <b-col v-if="filter.projectTypeId == 1" sm="12" md="12" lg="3">
          <label> {{ $t("Region") }} </label>
          <v-select
            v-model="Account.ManageUserOptions"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            label="name"
            :placeholder="$t('ChooseBelow')"
            :options="ManageUserOptionList"
            :reduce="(item) => item.id"
          />
        </b-col> -->
        <!-- <b-col sm="12" md="12" lg="3" v-if="filter.projectTypeId != 1&& !!filter.projectTypeId">
          <b-input-group>
            <b-form-input v-model="filterINN.inn" v-mask="'##########'" :placeholder="$t('inn')" />
            <b-input-group-append>
              <b-button @click="SearchInn" variant="primary">
                <feather-icon v-if="!SearchInnLoading" icon="SearchIcon" />
                <b-spinner v-if="SearchInnLoading" small></b-spinner>
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col> -->
        <b-col>
          <b-button variant="outline-success" @click="SaveInnData">
            <b-spinner v-if="SaveInnLoading" small></b-spinner> {{ $t("Save") }}
          </b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-table
          ref="refInvoiceListTable"
          :items="ManageUserOptionByUser"
          responsive
          :fields="fields"
          primary-key="id"
          sticky-header="65vh"
          no-border-collapse
          show-empty
          :empty-text="$t('NotFound')"
          class="position-relative"
        >
          <template #cell(statename)="{ item }">
            <b-badge
              :variant="item.statename == 'Пассив' ? 'light-danger' : 'light-success'"
            >
              {{ item.statename }}
            </b-badge>
          </template>
          <template #cell(username)="{ item }">
            <span>
              {{ item.username }} <br />
              <b>( {{ item.displayname }} ) </b>
            </span>
          </template>
          <template #cell(orgname)="{ item }" v-if="filter.projectTypeId == 1">
            <span>
              {{ item.orgname }} <br />
              <b>( {{ item.inn }} ) </b>
            </span>
          </template>
          <template #cell(actions)="{ item }">
            <div class="text-center">
              <b-link
                v-b-tooltip.hover.top="$t('Delete')"
                @click="SaveSidebar = true"
                style="margin-right: 7px"
              >
                <feather-icon @click="Delete(item)" icon="TrashIcon"></feather-icon>
              </b-link>
            </div>
          </template>
          <template v-slot:table-busy>
            <div
              class="text-center text-primary my-2"
              style="vertical-align: middle"
            >
              <b-spinner class="align-middle mr-2"></b-spinner>
              <strong>{{ $t("Loading") }}</strong>
            </div>
          </template>
        </b-table>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import {
  BButtonGroup,
  BButton,
  BPagination,
  BTable,
  BCol,
  BRow,
  BSpinner,
  BCard,
  VBTooltip,
  BTooltip,
  BBadge,
  BInputGroup,
  BFormInput,
  BInputGroupAppend,
  BLink,
  BSidebar,
  VBToggle,
  BModal,
  BFormGroup,
} from "bootstrap-vue";
import ApplicationService from "@/services/document/application.service";
import AccountService from "@/services/others/account.service";
import HelperService from "@/services/others/helper.service";
import OblastService from "@/services/info/oblast.service";
import RegionService from "@/services/info/region.service";
import OrganizationService from "@/services/managment/organization.service";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
export default {
  components: {
    BButtonGroup,
    BButton,
    BPagination,
    BTable,
    BCol,
    BRow,
    BSpinner,
    BCard,
    BBadge,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,
    BLink,
    BTooltip,
    BSidebar,
    BModal,
    BFormGroup,
  },
  data() {
    return {
      ManageUserOptionByUser: [],
      ProjectTypeList: [],
      OrganizationInn: {},
      ManageUserOptionList: [],
      OblastList: [],
      RegionList: [],
      OrganizationList: [],
      Account: {},
      filter: {
        id: 0,
        projectTypeId: 1,
        oblastId: 0,
        regionId: 0,
        organizationId: 0
      },
      filterINN: {
        inn: "",
      },
      UpdateDataInn: {
        id: 0,
        userid: 0,
        projectTypeId: 1,
        oblastId: 0,
        oblastname: "",
        regionId: 0,
        regionname: "",
        organizationid: 0,
        organizationname: "",
        stateid: 0,
        statename: ""
      },
      lang: "ru",
      SearchInnLoading: false,
      SaveInnLoading: false,
      DeleteLoading: false,
      fields: [
        {
          key: "id",
          label: this.$t("id"),
          thClass: "text-center",
          tdClass: "text-center",
          sortable: true,
        },
        {
          key: "oblastname",
          label: this.$t("oblastname"),
          thClass: "text-center",
          tdClass: "text-left",
          sortable: true,
        },
        {
          key: "regionname",
          label: this.$t("regionname"),
          thClass: "text-center",
          tdClass: "text-left",
          sortable: true,
        },
        {
          key: "organizationname",
          label: this.$t("organizationname"),
          thClass: "text-center",
          tdClass: "text-left",
          sortable: true,
        },
        {
          key: "statename",
          label: this.$t("status"),
          thClass: "text-center",
          tdClass: "text-center",
          sortable: true,
        },
        {
          key: "actions",
          label: this.$t("actions"),
          thClass: "text-center",
          tdClass: "text-center",
        },
      ],
    }
  },
  created() {
    this.lang = localStorage.getItem("locale") || "ru";
    HelperService.GetAllProjectType().then((res) => {
      this.ProjectTypeList = res.data
    });
    AccountService.Get(this.$route.params.id).then((res) => {
      this.Account = res.data;
      const lang = JSON.parse(localStorage.getItem("user_info")).lang || "ru";
      RegionService.GetAll(lang, res.data.oblastid).then((resp) => {
        this.ManageUserOptionList = resp.data;
      });
    });
    if (this.filter.projectTypeId == 1) {
      OblastService.GetAll(this.lang).then((res) => {
        this.OblastList = res.data;
      });
    } else {
      HelperService.GetAllErpOblast().then((res) => {
        this.OblastList = res.data;
      });
    }
    this.Refresh()
  },
  methods: {
    // ChangeManageUserOptionByUser() {
    //   this.OrganizationInn = {}
    //   AccountService.GetManageUserOptionByUserId(this.UpdateDataInn.userid, this.filter.projectTypeId).then((res) => {
    //     this.ManageUserOptionByUser = res.data
    //   })
    //   .catch((error) => {
    //       this.$message(error.response);
    //     });
    // },
    SearchInn() {
      this.SearchInnLoading = true;
      ApplicationService.GetAppAdmEduSchoolInfoByInn(this.filterINN.inn)
        .then((res) => {
          this.OrganizationInn = res.data.result;
          this.SearchInnLoading = false;
        })
        .catch((error) => {
          this.$message(error.response);
          this.SearchInnLoading = false;
        });
    },
    Refresh() {
      this.UpdateDataInn.userid = this.Account.ID
      AccountService.GetManageUserOptionByUserId(this.$route.params.id, this.filter.projectTypeId).then((res) => {
        this.ManageUserOptionByUser = res.data
      })
      .catch((error) => {
          this.$message(error.response);
        });
    },
    ChangeOrg() {},
    ChangeRegionFilter() {
      if (this.filter.projectTypeId == 1) {
        OrganizationService.GetAll(
          this.filter.oblastId,
          this.filter.regionId,
          0,
          false,
          0,
          0
        ).then((res) => {
          this.OrganizationList = res.data;
        });
      } else {
        HelperService.GetAllErpOrganizations(
          this.filter.oblastId,
          this.filter.regionId,
          0,
          0,
          0
        ).then((res) => {
          this.OrganizationList = res.data;
        });
      }

    },
    ChangeOblastFilter() {
      this.getRegionList();
    },
    getRegionList() {
      if(this.filter.projectTypeId == 1) {
        RegionService.GetAll(this.lang, this.filter.oblastId).then(
          (res) => {
            this.RegionList = res.data;
          }
        );
      } else {
        HelperService.GetAllErpRegion(this.filter.oblastId).then(
          (res) => {
            this.RegionList = res.data;
          }
        );
      }
    },
    ChangeOblast(item) {
      this.filter.oblastId = item.oblastid;
      this.filter.regionId = 0;
    },
    ChangeRegion(item) {
      this.filter.regionId = item.regionid;
      this.filter.organizationId = 0;
    },
    Clear() {
      (this.filter.oblastId = 0),
        (this.filter.regionId = 0),
        (this.filter.organizationId = 0),
      this.Refresh();
    },
    SaveInnData() {
      this.UpdateDataInn.userid = this.Account.ID
      this.UpdateDataInn.projectTypeId = this.filter.projectTypeId
      this.UpdateDataInn.oblastId = this.filter.oblastId
      this.UpdateDataInn.regionId = this.filter.regionId
      this.UpdateDataInn.organizationId = this.filter.organizationId
      this.SaveInnLoading = true;
      if(this.filter.projectTypeId == 1) {
        if (
          this.filter.regionId === null ||
          this.filter.regionId === undefined ||
          this.filter.regionId === ""
        ) {
          this.makeToast(this.$t("NotFound"), "danger");
          return false;
        }
      } else {
        if (
          this.filter.organizationId === null ||
          this.filter.organizationId === undefined ||
          this.filter.organizationId === ""
        ) {
          this.makeToast(this.$t("NotFound"), "danger");
          return false;
        }
      }
      AccountService.UpdateManageUserOption(
        this.UpdateDataInn
      )
        .then((res) => {
          this.SaveInnLoading = false;
          this.makeToast(this.$t("SaveSuccess"), "success");
          this.Refresh()
        })
        .catch((error) => {
          this.$message(error.response);
          this.SaveInnLoading = false;
        });
    },
    Delete(item) {
      this.DeleteLoading = true
          AccountService.Delete(item.id).then(res => {
          this.DeleteLoading = false
          this.Refresh()
          this.makeToast(this.$t('DeleteSuccess'),'success')
        }).catch(error => {
          this.DeleteLoading = false
          this.$message(error.response);
          
        })
    },
    makeToast(message, variant) {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: message,
          icon: variant == "success" ? "CheckSquareIcon" : "AlertTriangleIcon",
          variant: variant,
        },
      });
    },
  },
  directives: {
    "b-tooltip": VBTooltip,
    "b-toggle": VBToggle,
  },
}
</script>

<style>

</style>