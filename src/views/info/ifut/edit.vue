<template>
  <b-overlay :show="show">
    <b-row>
      <b-col sm="12" md="12" lg="12">
        <b-card>
          <b-row>
            <b-col sm="12" md="4" lg="4">
              <div class="form-group">
                <label class="col-form-label" for>{{ $t("oked") }}</label>
                <b-input-group>
                  <b-form-input
                    :placeholder="$t('oked')"
                    v-model="Data.IfutName"
                  />
                </b-input-group>
              </div>
            </b-col>
            <b-col sm="12" md="4" lg="4">
              <div class="form-group">
                <label class="col-form-label" for>{{ $t("shortname") }}</label>
                <div>
                  <b-input-group>
                    <b-form-input
                      :placeholder="$t('shortname')"
                      v-model="Data.shortname"
                    />
                    <b-input-group-append>
                      <b-button
                        variant="primary"
                        @click="OpenTranslateModal('shortname')"
                      >
                        <feather-icon icon="GlobeIcon"></feather-icon>
                      </b-button>
                    </b-input-group-append>
                  </b-input-group>
                </div>
              </div>
            </b-col>
            <b-col sm="12" md="4" lg="4">
              <div class="form-group">
                <label class="col-form-label" for>{{ $t("fullname") }}</label>
                <div>
                  <b-input-group>
                    <b-form-input
                      :placeholder="$t('fullname')"
                      type="number"
                      v-model="Data.fullname"
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
            <b-col v-if="Data.id !== 0" sm="12" md="4" lg="4">
              <div class="form-group">
                <v-select
                  :label="$t('stateId')"
                  :options="StateList"
                  :placeholder="$t('ChooseBelow')"
                  v-model="Data.stateId"
                  required
                  type="select"
                />
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
import OkedService from "../../../services/info/oked.service";
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
      fieldsConditionsForApplyStudentResidence: [
        {
          key: "index",
          label: this.$t("ordercode"),
        },
        {
          key: "conditionType",
          label: this.$t("conditiontype"),
        },
        {
          key: "conditionValue",
          label: this.$t("conditionInfo"),
        },
        {
          key: "actions",
          thClass: "text-right",
          widht: "23px",
          label: this.$t("actions"),
        },
      ],
      filter: {},
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
    this.lang = localStorage.getItem("locale") || "ru";
    OkedService.Get(this.$route.params.id)
      .then((res) => {
        this.loading = false;
        this.Data = res.data;
        if (this.$route.params.id == 0) {
          this.Data.stateId = null;
        }
      })
      .catch((error) => {
        this.makeToast(error.response.data);
        this.loading = false;
      });
    ManualService.StateSelectList().then((res) => {
      this.StateList = res.data;
    });
    ManualService.LanguageSelectList().then((res) => {
      this.LanguageList = res.data;
    });
  },
  methods: {
    check() {
      if (
        this.Ifut.IfutName === 0 ||
        this.Ifut.IfutName === null ||
        this.Ifut.IfutName === undefined ||
        this.Ifut.IfutName === ""
      ) {
        this.makeToast(this.$t("IfutNameNotCorrect"), "danger");
        return false;
      }
      if (
        this.Ifut.IfutCode === 0 ||
        this.Ifut.IfutCode === null ||
        this.Ifut.IfutCode === undefined ||
        this.Ifut.IfutCode === ""
      ) {
        this.makeToast(this.$t("IfutCodeNotCorrect"), "danger");
        return false;
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
      OkedService.Update(this.Data)
        .then((res) => {
          this.makeToast(this.$t("SaveSuccess"), "success");
          this.$router.push({ name: "ifut" });
        })
        .catch((err) => {
          this.makeToast(this.$t(err), "danger");
        });
    },
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-flatpicker.scss";
</style>
