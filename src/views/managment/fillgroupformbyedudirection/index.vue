<template>
  <b-card no-body>
    <div class="m-2">
      <b-row>
        <b-col
          cols="12"
          md="12"
          class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
        >
          <b-button
            v-if="$can('FillGroupFormByEduDirectionEdit', 'permissions')"
            variant="primary"
            @click="
              modalVisible = true;
              filter.isOtm = true;
            "
          >
            <b-spinner v-if="SincLoading" small></b-spinner>
            <feather-icon
              v-if="!SincLoading"
              icon="RefreshCwIcon"
            ></feather-icon>
            {{ $t("FormByEduDirection") }} ({{ $t("otm") }})
          </b-button>
          <b-button
            v-if="$can('FillGroupFormByEduDirectionView', 'permissions')"
            variant="primary"
            @click="
              modalVisible = true;
              filter.isOtm = false;
            "
            class="ml-2"
          >
            <b-spinner v-if="SincLoading" small></b-spinner>
            <feather-icon
              v-if="!SincLoading"
              icon="RefreshCwIcon"
            ></feather-icon>
            {{ $t("FormByEduDirection") }} ({{ $t("sporteduinst") }})
          </b-button>
          <b-button
            v-if="$can('AdminView', 'permissions')"
            variant="primary"
            @click="SyncErpSportHelperTables"
            class="ml-2"
          >
            <b-spinner v-if="SincHelperLoading" small></b-spinner>
            <feather-icon
              v-if="!SincHelperLoading"
              icon="RefreshCwIcon"
            ></feather-icon>
            {{ $t("SyncErpSportHelperTables") }}
          </b-button>
          <b-button
            v-if="$can('FillGroupFormByEduDirectionView', 'permissions')"
            variant="primary"
            @click="modalVisibleExamGroup = true"
            class="ml-2"
          >
            <b-spinner v-if="Loading" small></b-spinner>
            <feather-icon v-if="!Loading" icon="RefreshCwIcon"></feather-icon>
            {{ $t("GetAllExamGroup") }}
          </b-button>
          <b-button
            v-if="$can('ChangePersonUserPasswordView', 'permissions')"
            variant="primary"
            @click="changePasswordModal = true"
            class="ml-2"
          >
            <b-spinner v-if="ChangeLoading" small></b-spinner>
            <feather-icon
              v-if="!ChangeLoading"
              icon="RefreshCwIcon"
            ></feather-icon>
            {{ $t("changePasswordModal") }}
          </b-button>
          <!-- <b-button
              variant="primary"
              :to="{ name: 'EditBank',params : {id : 0}}"
                v-if="$can('OrganizationEdit', 'permissions')"
            >
              <feather-icon icon="PlusIcon"></feather-icon> Add Record
            </b-button> -->
        </b-col>
      </b-row>
    </div>
    <b-modal
      @ok="NewMobileModalFunc"
      :cancel-title="$t('back')"
      :ok-title="$t('Approve')"
      cancel-variant="danger"
      ok-variant="success"
      @close="modechangePasswordClose"
      @hidden="modechangePasswordClose"
      v-model="changePasswordModal"
      :title="$t('changePasswordModal')"
    >
      <div class="form-group form-row">
        <label class="col-form-label col-sm-5" for>{{
          $t("MobileNumber")
        }}</label>
        <div class="col-sm-7">
          <cleave
            v-model="filterChangePassword.oldmobilenumber"
            class="form-control"
            :raw="false"
            :options="options.oldmobilenumber"
            placeholder="+998-90-123-45-67"
          />
        </div>
      </div>
      <div class="form-group form-row">
        <label class="col-form-label col-sm-5" for>{{
          $t("documentseriesnumber")
        }}</label>
        <div class="col-sm-7">
          <cleave
            v-model="filterChangePassword.documentseriesnumber"
            class="form-control"
            :raw="false"
            :options="options.documentseriesnumber"
            placeholder="AA1234567"
          />
        </div>
      </div>
      <div class="form-group form-row">
        <label class="col-form-label col-sm-5" for>{{
          $t("newpassword")
        }}</label>
        <div class="col-sm-7">
          <b-form-input
            type="password"
            v-model="filterChangePassword.newpassword"
            :placeholder="$t('****')"
          />
        </div>
      </div>
      <div class="form-group form-row">
        <label class="col-form-label col-sm-5" for>{{
          $t("confirmedpassword")
        }}</label>
        <div class="col-sm-7">
          <b-form-input
            type="password"
            v-model="filterChangePassword.confirmedpassword"
            :placeholder="$t('****')"
          />
        </div>
      </div>
    </b-modal>
    <b-modal
      size="lg"
      @close="modeClose"
      @hidden="modeClose"
      no-close-on-backdrop
      v-model="modalVisible"
      title=""
    >
      <b-row>
        <b-col lg="6" md="6" sm="11" class="text-left mt-2">
          <label for>{{ $t("examtype") }}</label>
          <v-select
            :options="ExamTypeList"
            :reduce="(item) => item.id"
            label="name"
            v-model="form.examtypeid"
            :placeholder="$t('ChooseBelow')"
          ></v-select>
        </b-col>
        <b-col lg="6" md="6" sm="11" class="text-left mt-2">
          <label for>{{ $t("Oblast") }}</label>
          <v-select
            :options="OblastList"
            :reduce="(item) => item.id"
            label="name"
            v-model="form.oblastid"
            :placeholder="$t('ChooseBelow')"
            @input="ChangeOblast"
          ></v-select>
        </b-col>
        <b-col lg="6" md="6" sm="11" class="text-left mt-2">
          <label for>{{ $t("Region") }}</label>
          <v-select
            :options="RegionList"
            :reduce="(item) => item.id"
            label="name"
            v-model="form.regionid"
            :placeholder="$t('ChooseBelow')"
            @input="ChangeRegion"
          >
          </v-select>
        </b-col>
        <b-col lg="6" md="6" sm="11" class="text-left mt-2">
          <label for>{{ $t("Organization") }}</label>
          <v-select
            v-model="form.organizationid"
            :reduce="(item) => item.id"
            label="name"
            :options="OrganizationList"
            :placeholder="$t('Organization')"
            @input="ChangeOrg"
          >
          </v-select>
        </b-col>
        <b-col lg="6" md="6" sm="11" class="text-left mt-2">
          <label for>{{ $t("inn") }}</label>
          <b-form-input
            v-model="form.organizationinn"
            :placeholder="$t('inn')"
          />
        </b-col>
      </b-row>
      <template #modal-footer>
        <b-button
          variant="success"
          size="sm"
          class="float-right"
          @click="submitForm"
        >
          <b-spinner small v-if="saving"></b-spinner> {{ $t("Save") }}
        </b-button>
      </template>
    </b-modal>
    <b-modal
      size="xl"
      @close="modeClose"
      @hidden="modeClose"
      no-close-on-backdrop
      v-model="modalVisibleExamGroup"
      title=""
    >
      <b-row>
        <b-col lg="5" md="6" sm="11" class="text-left mt-2">
          <label for>{{ $t("docnumber1") }}</label>
          <div class="d-flex">
            <b-form-input
              v-model="form.applicationNumber"
              v-mask="'####-####-####'"
              :placeholder="$t('0000-0000-0000')"
            />
            <b-button
              @click="GetApplicationByNumber"
              variant="primary"
              class="d-flex ml-2"
              ><feather-icon
                style="margin-right: 8px"
                icon="SearchIcon"
              />Qidirish</b-button
            >
          </div>
        </b-col>
      </b-row>
      <b-row class="m-2" v-if="applicationByNumber.applicationtypename">
        <b-col xs="12" sm="12" md="6" lg="6">
          <h4>{{ $t("applicationinfo") }}</h4>
          <b-list-group>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              <span> {{ $t("docnumber") }} : </span>
              <span class="font-weight-bold">
                {{ applicationByNumber.docnumber }}
              </span>
            </b-list-group-item>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              <span> {{ $t("schoolyear") }} : </span>
              <span class="font-weight-bold">
                {{ applicationByNumber.schoolyearname }}
              </span>
            </b-list-group-item>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              <span> {{ $t("personname") }} : </span>
              <span class="font-weight-bold">
                {{ applicationByNumber.applicantname }}
              </span>
            </b-list-group-item>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              <span> {{ $t("pinfl") }} : </span>
              <span class="font-weight-bold">
                {{ applicationByNumber.personpinfl }}
              </span>
            </b-list-group-item>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              <span> {{ $t("mobilenumber") }} : </span>
              <span class="font-weight-bold">
                {{ applicationByNumber.mobilenumber }}
              </span>
            </b-list-group-item>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              <span> {{ $t("applicationtypename") }} : </span>
              <span class="font-weight-bold">
                {{ applicationByNumber.applicationtypename }}
              </span>
            </b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col xs="12" sm="12" md="6" lg="6">
          <b-list-group>
            <h4>{{ $t("applicant") }}</h4>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              <span> {{ $t("applicantname") }} : </span>
              <span class="font-weight-bold">
                {{ applicationByNumber.applicant.fullname }}
              </span>
            </b-list-group-item>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              <span> {{ $t("dateofbirth") }} : </span>
              <span class="font-weight-bold">
                {{ applicationByNumber.applicant.dateofbirth }}
              </span>
            </b-list-group-item>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              <span> {{ $t("passportseries") }} : </span>
              <span class="font-weight-bold">
                {{ applicationByNumber.applicant.documentseries }}
                {{ applicationByNumber.applicant.documentnumber }}
              </span>
            </b-list-group-item>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              <span> {{ $t("applicantpinfl") }} : </span>
              <span class="font-weight-bold">
                {{ applicationByNumber.applicant.pinfl }}
              </span>
            </b-list-group-item>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              <span> {{ $t("gender") }} : </span>
              <span class="font-weight-bold">
                {{ applicationByNumber.applicant.gendername }}
              </span>
            </b-list-group-item>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              <span> {{ $t("status") }} : </span>
              <span class="font-weight-bold">
                <b-badge
                  :variant="
                    applicationByNumber.statusname == 'Утвержден'
                      ? 'light-success'
                      : applicationByNumber.statusname == 'Принято'
                      ? 'light-success'
                      : applicationByNumber.statusname == 'Изменен'
                      ? 'light-info'
                      : applicationByNumber.statusname == 'Отменено'
                      ? 'light-danger'
                      : 'light-primary'
                  "
                  >{{ applicationByNumber.statusname }}</b-badge
                >
              </span>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="6" md="6" sm="11" class="text-left mt-2">
          <label for>{{ $t("applicationtypename") }}</label>
          <v-select
            :options="AllExamGroupList"
            :reduce="(item) => item.id"
            label="name"
            @input="changeExamGroup"
            v-model="form.name"
            :placeholder="$t('ChooseBelow')"
          ></v-select>
        </b-col>
      </b-row>
      <template #modal-footer>
        <b-button
          variant="success"
          size="sm"
          class="float-right"
          @click="SaveGroupFormByApplicationNumber"
        >
          <b-spinner small v-if="saving"></b-spinner> {{ $t("Save") }}
        </b-button>
      </template>
    </b-modal>
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
  BModal,
  VBM,
  BForm,
  BFormGroup,
  BListGroup,
  BListGroupItem,
} from "bootstrap-vue";
import GroupFormByEduDirectionService from "@/services/sportexam/groupformbyedudirection.service";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import OblastService from "@/services/info/oblast.service";
import RegionService from "@/services/info/region.service";
import OrganizationService from "@/services/managment/organization.service";
import HelperService from "@/services/others/helper.service";
import ApplicationService from "@/services/document/application.service";
import FeatherIcon from "../../../@core/components/feather-icon/FeatherIcon.vue";
import CustomLabel from "../../components/customLabel.vue";
import ExamGroupService from "@/services/sportexam/examgroup.service";
import Cleave from "vue-cleave-component";
export default {
  components: {
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
    BModal,
    BForm,
    BFormGroup,
    BListGroup,
    BListGroupItem,
    FeatherIcon,
    CustomLabel,
    Cleave,
  },
  directives: {},
  data() {
    return {
      items: [],
      saving: false,
      RegionList: [],
      OblastList: [],
      ExamTypeList: [],
      OrganizationList: [],
      applicationByNumber: {},
      AllExamGroupList: [],
      form: {
        oblastid: "",
        regionid: "",
        organizationid: "",
        organizationinn: "",
        examtypeid: 2,
        applicationNumber: "",
        schoolyearid: 0,
        highereduclassifierid: 0,
        educationformtypeid: 0,
        educationlanguageid: 0,
        sportTypeClassifierid: 0,
        examgroupId: 0,
        id: 0,
        name: "",
        organizationId: 0,
      },
      filterChangePassword: {
        Search: "",
        Sort: "",
        Order: "asc",
        perPage: 20,
        currentPage: 1,
        perPageOptions: [10, 20, 50, 100],
        totalRows: 0,
        mobilenumber: "+998",
        documentseriesnumber: "",
        oldmobilenumber: "+998",
        newmobilenumber: "+998",
        documentseriesnumber: "",
        confirmedpassword: "",
        newpassword: "",
        startdate: "",
      },
      options: {
        oldmobilenumber: {
          delimiters: ["-"],
          blocks: [4, 2, 3, 2, 2],
          uppercase: true,
        },
        documentseriesnumber: {
          delimiters: [""],
          blocks: [15],
          uppercase: false,
        },
      },
      changePasswordModal: false,
      modalVisible: false,
      modalVisibleExamGroup: false,
      SincHelperLoading: false,
      filter: {
        Search: "",
        Sort: "",
        Order: "asc",
        perPage: 20,
        currentPage: 1,
        perPageOptions: [10, 20, 50, 100],
        totalRows: 0,
        isOtm: null,
      },
      SincLoading: false,
      isBusy: false,
      Loading: false,
      lang: "uz_latn",
    };
  },
  computed: {},
  created() {
    this.lang = localStorage.getItem("locale") || "uz_latn";
    OblastService.GetAll(this.lang)
      .then((res) => {
        this.OblastList = res.data;
      })
      .catch((error) => {
        this.$message(error.response);
      });
    HelperService.GetAllExamtype(this.lang)
      .then((res) => {
        this.ExamTypeList = res.data;
      })
      .catch((error) => {
        this.$message(error.response);
      });
  },
  methods: {
    modeClose() {
      this.modalVisible = false;
      this.form = {
        oblastid: "",
        regionid: "",
        organizationid: "",
        organizationinn: "",
        examtypeid: 2,
      };
    },
    check() {
      if (
        this.filterChangePassword.oldmobilenumber === 0 ||
        this.filterChangePassword.oldmobilenumber === null ||
        this.filterChangePassword.oldmobilenumber === undefined ||
        this.filterChangePassword.oldmobilenumber === "" ||
        this.filterChangePassword.oldmobilenumber.length != 17
      ) {
        this.makeToast(this.$t("oldmobilenumberNotCorrect"), "danger");
        return false;
      }
      if (
        this.filterChangePassword.documentseriesnumber === 0 ||
        this.filterChangePassword.documentseriesnumber === null ||
        this.filterChangePassword.documentseriesnumber === undefined ||
        this.filterChangePassword.documentseriesnumber === ""
      ) {
        this.makeToast(this.$t("documentseriesnumberNotCorrect"), "danger");
        return false;
      }
      if (
        this.filterChangePassword.newpassword === 0 ||
        this.filterChangePassword.newpassword === null ||
        this.filterChangePassword.newpassword === undefined ||
        this.filterChangePassword.newpassword === ""
      ) {
        this.makeToast(this.$t("newpasswordNotCorrect"), "danger");
        return false;
      }
      if (
        this.filterChangePassword.confirmedpassword === 0 ||
        this.filterChangePassword.confirmedpassword === null ||
        this.filterChangePassword.confirmedpassword === undefined ||
        this.filterChangePassword.confirmedpassword === ""
      ) {
        this.makeToast(this.$t("confirmedpasswordNotCorrect"), "danger");
        return false;
      }
      if (
        this.filterChangePassword.confirmedpassword !=
        this.filterChangePassword.newpassword
      ) {
        this.makeToast(this.$t("passwordNotEqual"), "danger");
        return false;
      }
      return true;
    },
    NewMobileModalFunc() {
      if (!this.check()) {
        return false;
      }
      HelperService.ChangePersonUserPassword(
        this.filterChangePassword.oldmobilenumber,
        this.filterChangePassword.newpassword,
        this.filterChangePassword.confirmedpassword,
        this.filterChangePassword.documentseriesnumber
      )
        .then((res) => {
          this.makeToast(this.$t("SaveSuccess"), "success");
        })
        .catch((error) => {
          this.$message(error.response);
        });
    },
    async submitForm() {
      try {
        this.saving = true;
        await GroupFormByEduDirectionService.FillGroupFormByEduDirectionSet(
          this.form.organizationid,
          this.form.organizationinn,
          this.filter.isOtm,
          this.form.examtypeid
        );
        this.makeToast(this.$t("SaveSuccess"), "success");
        this.saving = false;
        this.modeClose();
      } catch (error) {
        this.saving = false;
        this.$message(error.response);
      }
    },
    ChangeOrg() {
      this.form.organizationinn = "";
    },
    ChangeOblast() {
      this.form.regionid = "";
      this.form.organizationid = "";
      this.form.organizationinn = "";
      this.getregionList();
    },
    getOrgonizationList() {
      OrganizationService.GetAll(this.form.oblastid, this.form.regionid, 0)
        .then((res) => {
          this.OrganizationList = res.data;
        })
        .catch((error) => {
          this.$message(error.response);
        });
    },
    getregionList() {
      RegionService.GetAll(this.lang, this.form.oblastid)
        .then((res) => {
          this.RegionList = res.data;
        })
        .catch((error) => {
          this.$message(error.response);
        });
    },
    modechangePasswordClose() {
      this.changePasswordModal = false;
      this.filterChangePassword.newpassword = "";
      this.filterChangePassword.confirmedpassword = "";
      this.filterChangePassword.documentseriesnumber = "";
      this.filterChangePassword.oldmobilenumber = "+998";
    },
    ChangeRegion() {
      this.form.organizationid = "";
      this.form.organizationinn = "";
      this.getOrgonizationList();
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
    Refresh() {
      this.SincLoading = true;
      GroupFormByEduDirectionService.FillGroupFormByEduDirection()
        .then((res) => {
          this.SincLoading = false;
          this.makeToast(this.$t("CancelSuccess"), "success");
        })
        .catch((error) => {
          this.SincLoading = false;
          this.$message(error.response);
        });
    },
    SyncErpSportHelperTables() {
      this.SincHelperLoading = true;
      HelperService.SyncErpSportHelperTables()
        .then((res) => {
          this.SincHelperLoading = false;
          this.makeToast(this.$t("SincSuccess"), "success");
        })
        .catch((error) => {
          this.SincHelperLoading = false;
          this.$message(error.response);
        });
    },
    GetApplicationByNumber() {
      this.Loading = true;
      ApplicationService.GetApplicationByNumber(this.form.applicationNumber)
        .then((res) => {
          this.Loading = false;
          this.applicationByNumber = res.data.result;
          this.form.sportTypeClassifierid =
            this.applicationByNumber.AdmissionDataTable.tosporttypeclassifierid;
          ExamGroupService.GetGetAllExamGroup(
            this.form.schoolyearid,
            this.form.highereduclassifierid,
            this.form.educationformtypeid,
            this.form.educationlanguageid,
            this.form.sportTypeClassifierid,
            (this.filter.isOtm = false),
            (this.form.organizationId =
              this.applicationByNumber.AdmissionDataTable.toorganizationid),
            this.lang
          ).then((res) => {
            this.AllExamGroupList = res.data;
          });
        })
        .catch((error) => {
          this.Loading = false;
          this.$message(error.response);
        });
    },
    SaveGroupFormByApplicationNumber() {
      this.Loading = false;
      GroupFormByEduDirectionService.GroupFormByApplicationNumber(
        this.form.applicationNumber,
        this.form.examgroupId
      )
        .then((res) => {
          this.Loading = false;
          this.makeToast(this.$t("SaveSuccess"), "success");
        })
        .catch((error) => {
          this.Loading = false;
          this.$message(error.response);
        });
    },
    changeExamGroup() {
      this.form.examgroupId = this.AllExamGroupList[0].id;
      // this.ApproveData.personCoachName = this.PersonCoachList.filter(
      //   (item) => this.ApproveData.personCoachId === item.personcoachid
      // )[0].personcoachname;
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
</style>
