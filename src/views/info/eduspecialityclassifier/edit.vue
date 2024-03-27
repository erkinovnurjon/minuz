<template>
  <b-overlay :show="show">
    <b-row>
      <b-col sm="12" md="12" lg="12">
        <b-card>
          <b-row>
            <b-col sm="12" md="4">
              <div class="form-group">
                <label class="col-form-label" for>{{ $t("code") }}</label>
                <div>
                  <b-input-group>
                    <b-form-input
                      :placeholder="$t('code')"
                      v-model="Data.code"
                    />
                  </b-input-group>
                </div>
              </div>
            </b-col>
            <b-col sm="12" md="4">
              <div class="form-group">
                <label class="col-form-label" for>{{ $t("shortName") }}</label>
                <div>
                  <b-input-group>
                    <b-form-input
                      :placeholder="$t('shortName')"
                      v-model="Data.shortName"
                    />
                    <b-input-group-append>
                      <b-button
                        variant="primary"
                        @click="OpenTranslateModal('shortName')"
                      >
                        <feather-icon icon="GlobeIcon"></feather-icon>
                      </b-button>
                    </b-input-group-append>
                  </b-input-group>
                </div>
              </div>
            </b-col>
            <b-col sm="12" md="4">
              <div class="form-group">
                <label class="col-form-label" for>{{ $t("fullname") }}</label>
                <div>
                  <b-input-group>
                    <b-form-input
                      :placeholder="$t('fullname')"
                      v-model="Data.fullName"
                    />
                    <b-input-group-append>
                      <b-button
                        variant="primary"
                        @click="OpenTranslateModal('fullname')"
                      >
                        <feather-icon icon="GlobeIcon"></feather-icon>
                      </b-button>
                    </b-input-group-append>
                  </b-input-group>
                </div>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12" md="4" lg="4">
              <label class="col-form-label" for>{{ $t("eduArea") }}</label>
              <div class="form-group">
                <v-select
                  :options="EduAreaList"
                  :reduce="(item) => item.value"
                  :placeholder="$t('ChooseBelow')"
                  label="text"
                  required
                  v-model="Data.eduAreaId"
                ></v-select>
              </div>
            </b-col>
            <b-col sm="12" md="4" lg="4">
              <label class="col-form-label" for>{{ $t("eduType") }}</label>
              <div class="form-group">
                <v-select
                  :options="EduTypeList"
                  :reduce="(item) => item.value"
                  :placeholder="$t('ChooseBelow')"
                  label="text"
                  required
                  v-model="Data.eduTypeId"
                ></v-select>
              </div>
            </b-col>
            <b-col sm="12" md="4" lg="4">
              <label class="col-form-label" for>{{
                $t("childrenIdsList")
              }}</label>
              <div class="form-group">
                <v-select
                  :options="ChildrenList"
                  :reduce="(item) => item.value"
                  :placeholder="$t('ChooseBelow')"
                  label="text"
                  required
                  v-model="Data.childrenIdsList"
                ></v-select>
              </div>
            </b-col>
          </b-row>
          <b-row v-if="Data.id !== 0">
            <b-col sm="12" md="4" lg="4">
              <label class="col-form-label" for>{{ $t("state") }}</label>
              <div class="form-group">
                <v-select
                  :options="StateList"
                  :reduce="(item) => item.value"
                  :placeholder="$t('ChooseBelow')"
                  label="text"
                  v-model="Data.stateId"
                ></v-select>
              </div>
            </b-col>
          </b-row>
          <b-row class="mt-3">
            <b-col sm="12" md="6" lg="6" class="text-left"> </b-col>
            <b-col sm="12" md="6" lg="6" class="text-right">
              <b-button @click="SaveData" size="sm" variant="outline-success">
                <feather-icon icon="CheckIcon"></feather-icon> {{ $t("Save") }}
              </b-button>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-modal
      size="lg"
      :title="$t('Translates')"
      v-model="TranslateModal"
      hide-footer
      no-close-on-backdrop
    >
      <b-table
        :fields="TranslateFields"
        :items="TranslateItems"
        responsive="sm"
        striped
        bordered
        small
      >
        <template v-slot:thead-top>
          <b-tr>
            <b-td>
              <v-select
                :options="LanguageList"
                :reduce="(item) => item.id"
                :placeholder="$t('ChooseBelow')"
                label="text"
                v-model="TranslateItem.languageId"
                @input="ChangeTranslate"
              ></v-select>
            </b-td>
            <b-td>
              <b-form-input
                :placeholder="$t('fullname')"
                v-model="TranslateItem.translatetext"
              />
            </b-td>
            <b-td class="text-center">
              <b-button variant="primary" @click="AddTranslate">
                <feather-icon icon="PlusIcon"></feather-icon>
              </b-button>
            </b-td>
          </b-tr>
        </template>
        <template #cell(translatetext)="{ item }">
          <b-form-input
            :placeholder="$t('fullname')"
            v-model="item.translatetext"
          />
        </template>
      </b-table>
      <b-row>
        <b-col class="text-right">
          <b-button @click="TranslateModal = false" variant="success">
            {{ $t("Save") }}
          </b-button>
        </b-col>
      </b-row>
    </b-modal>
  </b-overlay>
</template>

<script>
import {
  BOverlay,
  BCard,
  BRow,
  BCol,
  BFormInput,
  BTabs,
  BTab,
  BButton,
  BTable,
  BLink,
  BFormGroup,
  VBTooltip,
  BModal,
  VBModal,
  BCardText,
  BInputGroup,
  BInputGroupAppend,
  BTr,
  BTd,
} from "bootstrap-vue";
import EduSpecialityClassifierService from "@/services/info/eduspecialityclassifier.service";
import EduAreaService from "@/services/info/eduarea.service";
import ManualService from "../../../services/manual.service";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
export default {
  components: {
    BOverlay,
    BCard,
    BRow,
    BCol,
    BFormInput,
    BTabs,
    BTab,
    BButton,
    BTable,
    BLink,
    BFormGroup,
    BModal,
    BCardText,
    BInputGroup,
    BInputGroupAppend,
    BTr,
    BTd,
  },
  directives: {
    "b-tooltip": VBTooltip,
    "b-modal": VBModal,
  },
  data() {
    return {
      show: false,
      Data: {},
      filter: {},
      StateList: [],
      EduAreaList: [],
      EduTypeList: [],
      ChildrenList: [],
      TranslateModal: false,
      TranslateFields: [
        {
          key: "language",
          label: this.$t("language"),
          class: "text-center",
        },
        {
          key: "translatetext",
          label: this.$t("translatetext"),
          class: "text-center",
        },
        {
          key: "actions",
          label: this.$t("actions"),
          thClass: "text-center",
        },
      ],
      TranslateItem: {
        tableid: 0,
        tablerowid: 0,
        languageId: 0,
        language: "",
        columnname: "",
        translatetext: "",
      },
      LanguageList: [],
      TranslateItems: [],
      lang: "ru",
      editedIndex1: -1,
    };
  },
  props: {},
  created() {
    this.loading = true;
    EduSpecialityClassifierService.Get(this.$route.params.id)
      .then((res) => {
        this.loading = false;
        this.Data = res.data;
        EduSpecialityClassifierService.GetAsSelectList(
          this.Data.eduAreaId,
          this.Data.eduTypeId,
          true
        )
          // eslint-disable-next-line no-shadow
          .then((res) => {
            this.ChildrenList = res.data;
          })
          .catch((error) => {
            this.makeToast(error.response.data);
            this.loading = false;
          });
        if (this.$route.params.id == 0) {
          this.Data.stateId = null;
          this.Data.eduAreaId = null;
          this.Data.eduTypeId = null;
        }
      })
      .catch((error) => {
        this.makeToast(error.response.data);
        this.loading = false;
      });
    ManualService.StateSelectList()
      .then((res) => {
        this.StateList = res.data;
      })
      .catch((error) => {
        this.makeToast(error.response.data);
        this.loading = false;
      });
    ManualService.EduTypeSelectList()
      .then((res) => {
        this.EduTypeList = res.data;
      })
      .catch((error) => {
        this.makeToast(error.response.data);
        this.loading = false;
      });
    EduAreaService.GetAsSelectList()
      .then((res) => {
        this.EduAreaList = res.data;
      })
      .catch((error) => {
        this.makeToast(error.response.data);
        this.loading = false;
      });
  },
  methods: {
    check() {
      var self = this;
      if (
        self.Data.code === 0 ||
        self.Data.code === null ||
        self.Data.code === undefined ||
        self.Data.code === ""
      ) {
        this.makeToast(this.$t("codeNotCorrect"), 400);
        return false;
      }
      if (
        self.Data.shortName === 0 ||
        self.Data.shortName === null ||
        self.Data.shortName === undefined ||
        self.Data.shortName === ""
      ) {
        this.makeToast(this.$t("shortNameNotCorrect"), 400);
        return false;
      }
      if (
        self.Data.fullName === 0 ||
        self.Data.fullName === null ||
        self.Data.fullName === undefined ||
        self.Data.fullName === ""
      ) {
        this.makeToast(this.$t("fullNameNotCorrect"), 400);
        return false;
      }
      if (
        self.Data.eduAreaId === 0 ||
        self.Data.eduAreaId === null ||
        self.Data.eduAreaId === undefined ||
        self.Data.eduAreaId === ""
      ) {
        this.makeToast(this.$t("eduAreaIdNotCorrect"), 400);
        return false;
      }
      if (
        self.Data.eduTypeId === 0 ||
        self.Data.eduTypeId === null ||
        self.Data.eduTypeId === undefined ||
        self.Data.eduTypeId === ""
      ) {
        this.makeToast(this.$t("eduTypeIdNotCorrect"), 400);
        return false;
      }
      // if (
      //   self.Data.childrenIdsList === 0 ||
      //   self.Data.childrenIdsList === null ||
      //   self.Data.childrenIdsList === undefined ||
      //   self.Data.childrenIdsList === ""
      // ) {
      //   this.makeToast(this.$t("childrenIdsListNotCorrect"), 400);
      //   return false;
      // }
      if (self.Data.id !== 0) {
        if (
          self.Data.stateId === 0 ||
          self.Data.stateId === null ||
          self.Data.stateId === undefined ||
          self.Data.stateId === ""
        ) {
          this.makeToast(this.$t("stateNotSelect"), 400);
          return false;
        }
      }
      return true;
    },
    ChangeTranslate() {
      this.TranslateItem.language = !!this.TranslateItem.languageId
        ? this.LanguageList.filter(
            (item) => item.id == this.TranslateItem.languageId
          )[0].text
        : "";
    },
    clearLangTable(columnname) {
      this.TranslateItem = {
        tableid: 0,
        tablerowid: 0,
        languageId: 0,
        language: "",
        columnname: columnname,
        translatetext: "",
      };
    },
    AddTranslate() {
      if (
        this.TranslateItem.languageId === null ||
        this.TranslateItem.languageId === undefined ||
        this.TranslateItem.languageId === 0 ||
        this.TranslateItem.languageId === ""
      ) {
        this.makeToast(this.$t("notSelectLang"), "danger");
        return false;
      }
      if (
        this.Data.translates.filter(
          (item) =>
            // eslint-disable-next-line implicit-arrow-linebreak
            item.languageId === this.TranslateItem.languageId &&
            item.columnname == this.TranslateItem.columnname
        ).length > 0
      ) {
        this.makeToast(this.$t("AlreadySelectLang"), "danger");
        return false;
      }
      this.Data.translates.push(this.TranslateItem);
      this.GetTranslateItems(this.TranslateItem.columnname);
      this.clearLangTable(this.TranslateItem.columnname);
    },
    OpenTranslateModal(columnname) {
      this.TranslateModal = true;
      this.GetTranslateItems(columnname);
      this.clearLangTable(columnname);
    },
    GetTranslateItems(columnname) {
      this.TranslateItems = this.Data.translates.filter(
        (item) => item.columnname == columnname
      );
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
    rowClass(item, type) {
      if (item.Status === 3) return "d-none";
    },
    SaveData() {
      if (!this.check()) {
        return false;
      }
      this.SaveLoading = true;
      EduSpecialityClassifierService.Update(this.Data)
        .then((res) => {
          this.makeToast(this.$t("SuccessMessage"), 200);
          this.$router.push({ path: "/info/eduspecialityclassifier" });
          this.SaveLoading = false;
        })
        .catch((error) => {
          this.SaveLoading = false;
          this.makeToast(error.response.data);
        });
    },
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-flatpicker.scss";
</style>
