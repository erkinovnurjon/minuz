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
          <b-row v-if="Data.id !== 0">
            <b-col sm="12" md="4" lg="4">
              <label class="col-form-label" for>{{
                $t("EduSemesterType")
              }}</label>
              <div class="form-group">
                <v-select
                  :options="EduSemesterTypeList"
                  :reduce="(item) => item.value"
                  :placeholder="$t('ChooseBelow')"
                  label="text"
                  v-model="Data.eduSemesterTypeId"
                ></v-select>
              </div>
            </b-col>
            <b-col sm="12" md="4" lg="4">
              <label class="col-form-label" for>{{ $t("EduLevel") }}</label>
              <div class="form-group">
                <v-select
                  :options="EduLevelList"
                  :reduce="(item) => item.value"
                  :placeholder="$t('ChooseBelow')"
                  label="text"
                  v-model="Data.eduLevelId"
                ></v-select>
              </div>
            </b-col>
            <b-col v-if="Data.id !== 0" sm="12" md="4" lg="4">
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
import EduSemesterService from "@/services/info/edusemester.service";
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
      EduSemesterTypeList: [],
      EduLevelList: [],
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
        { key: "actions", label: this.$t("actions"), thClass: "text-center" },
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
    EduSemesterService.Get(this.$route.params.id)
      .then((res) => {
        this.loading = false;
        this.Data = res.data;
        // this.Data.stateId = null;
        if (this.$route.params.id == 0) {
          this.Data.stateId = null;
          this.Data.eduSemesterTypeId = null;
          this.Data.eduLevelId = null;
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
    ManualService.EduSemesterTypeSelectList()
      .then((res) => {
        this.EduSemesterTypeList = res.data;
      })
      .catch((error) => {
        this.makeToast(error.response.data);
        this.loading = false;
      });
    ManualService.EduLevelSelectList()
      .then((res) => {
        this.EduLevelList = res.data;
      })
      .catch((error) => {
        this.makeToast(error.response.data);
        this.loading = false;
      });
    ManualService.LanguageSelectList().then((res) => {
      this.LanguageList = res.data;
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
        this.makeToast(this.$t("shortnameNotCorrect"), 400);
        return false;
      }
      if (
        self.Data.fullName === 0 ||
        self.Data.fullName === null ||
        self.Data.fullName === undefined ||
        self.Data.fullName === ""
      ) {
        this.makeToast(this.$t("fullnameNotCorrect"), 400);
        return false;
      }
      if (
        self.Data.eduSemesterTypeId === 0 ||
        self.Data.eduSemesterTypeId === null ||
        self.Data.eduSemesterTypeId === undefined ||
        self.Data.eduSemesterTypeId === ""
      ) {
        this.makeToast(this.$t("edusemestertypeNotSelect"), 400);
        return false;
      }
      if (
        self.Data.eduLevelId === 0 ||
        self.Data.eduLevelId === null ||
        self.Data.eduLevelId === undefined ||
        self.Data.eduLevelId === ""
      ) {
        this.makeToast(this.$t("eduyearNotSelect"), 400);
        return false;
      }
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
      EduSemesterService.Update(this.Data)
        .then((res) => {
          this.makeToast(this.$t("SuccessMessage"), 200);
          this.$router.push({ path: "/info/edusemester" });
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
