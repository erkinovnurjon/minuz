<template>
  <b-overlay :show="show">
    <b-row>
      <b-col sm="12" md="12" lg="12">
        <b-card>
          <b-row>
            <b-col v-for="(item, index) in Data.studentUsers" :key="index">
              <h5>{{ $t("phoneNumber") }} : {{ item }}</h5>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12" md="3" lg="3">
              <div style="display: flex; justify-content: space-between">
                <div>
                  <fieldset>
                    <b-row>
                      <b-col sm="12" md="12" lg="12">
                        <div class="image-container">
                          <b-img
                            thumbnail
                            fluid
                            style="width: 240px; height: 240px"
                            class="thumbnail ml-auto mr-auto"
                            :src="`data:image/png;base64,${Data.photo}`"
                          />
                        </div>
                      </b-col>
                    </b-row>
                  </fieldset>
                </div>
                <div style="margin-top: 29px">
                  <b-button
                    variant="danger"
                    @click="$refs['DeleteImgModal'].show()"
                  >
                    {{ $t("DeleteImg") }}
                  </b-button>
                </div>
              </div>
            </b-col>
            <b-col sm="12" md="9" lg="9">
              <b-row>
                <b-col sm="12" md="4" lg="4">
                  <div class="form-group">
                    <label class="col-form-label" for>{{ $t("pinfl") }}</label>
                    <div>
                      <b-input-group>
                        <b-form-input
                          :placeholder="$t('pinfl')"
                          v-model="Data.pinfl"
                        />
                      </b-input-group>
                    </div>
                  </div>
                </b-col>
                <b-col sm="12" md="4" lg="4">
                  <div class="form-group">
                    <label class="col-form-label" for>{{ $t("inn") }}</label>
                    <div>
                      <b-input-group>
                        <b-form-input
                          :placeholder="$t('inn')"
                          v-model="Data.inn"
                        />
                      </b-input-group>
                    </div>
                  </div>
                </b-col>
                <b-col sm="12" md="4" lg="4">
                  <div class="form-group">
                    <label class="col-form-label" for>{{
                      $t("passportSeria")
                    }}</label>
                    <div>
                      <b-input-group>
                        <b-form-input
                          :placeholder="$t('passportSeria')"
                          v-model="Data.passportSeria"
                        />
                      </b-input-group>
                    </div>
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col sm="12" md="4" lg="4">
                  <div class="form-group">
                    <label class="col-form-label" for>{{
                      $t("passportNumber")
                    }}</label>
                    <div>
                      <b-input-group>
                        <b-form-input
                          :placeholder="$t('passportNumber')"
                          v-model="Data.passportNumber"
                        />
                      </b-input-group>
                    </div>
                  </div>
                </b-col>
                <b-col sm="12" md="4" lg="4">
                  <div class="form-group">
                    <label class="col-form-label" for>{{
                      $t("passportDate")
                    }}</label>
                    <div>
                      <b-input-group>
                        <b-form-input
                          :placeholder="$t('passportDate')"
                          v-model="Data.passportDate"
                          format="DD.MM.YYYY"
                          type="date"
                          @keyup="PassportDateValue"
                        />
                      </b-input-group>
                    </div>
                  </div>
                </b-col>
                <b-col sm="12" md="4" lg="4">
                  <div class="form-group">
                    <label class="col-form-label" for>{{
                      $t("passportExpiration")
                    }}</label>
                    <div>
                      <date-picker
                        v-model="Data.passportExpiration"
                        @keyup="PassportExpirationValue"
                        format="DD.MM.YYYY"
                        type="date"
                        :clearable="false"
                        :placeholder="$t('passportExpiration')"
                      >
                      </date-picker>
                    </div>
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col sm="12" md="4" lg="4">
                  <div class="form-group">
                    <label class="col-form-label" for>{{
                      $t("surnameLatin")
                    }}</label>
                    <div>
                      <b-input-group>
                        <b-form-input
                          :placeholder="$t('surnameLatin')"
                          v-model="Data.surnameLatin"
                        />
                      </b-input-group>
                    </div>
                  </div>
                </b-col>
                <b-col sm="12" md="4" lg="4">
                  <div class="form-group">
                    <label class="col-form-label" for>{{
                      $t("nameLatin")
                    }}</label>
                    <div>
                      <b-input-group>
                        <b-form-input
                          :placeholder="$t('nameLatin')"
                          v-model="Data.nameLatin"
                        />
                      </b-input-group>
                    </div>
                  </div>
                </b-col>
                <b-col sm="12" md="4" lg="4">
                  <div class="form-group">
                    <label class="col-form-label" for>{{
                      $t("patronymLatin")
                    }}</label>
                    <div>
                      <b-input-group>
                        <b-form-input
                          :placeholder="$t('patronymLatin')"
                          v-model="Data.patronymLatin"
                        />
                      </b-input-group>
                    </div>
                  </div>
                </b-col>
              </b-row>
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
          <b-row>
            <b-col sm="12" md="3" lg="3">
              <div class="form-group">
                <label class="col-form-label" for>{{ $t("surnameEng") }}</label>
                <div>
                  <b-input-group>
                    <b-form-input
                      :placeholder="$t('surnameEng')"
                      v-model="Data.surnameEng"
                    />
                  </b-input-group>
                </div>
              </div>
            </b-col>
            <b-col sm="12" md="3" lg="3">
              <div class="form-group">
                <label class="col-form-label" for>{{ $t("nameEng") }}</label>
                <div>
                  <b-input-group>
                    <b-form-input
                      :placeholder="$t('nameEng')"
                      v-model="Data.nameEng"
                    />
                  </b-input-group>
                </div>
              </div>
            </b-col>
            <b-col sm="12" md="3" lg="3">
              <label class="col-form-label" for>{{ $t("birthDate") }}</label>
              <div>
                <date-picker
                  v-model="Data.birthDate"
                  @keyup="BirthDateValue"
                  format="DD.MM.YYYY"
                  type="date"
                  :clearable="false"
                  :placeholder="$t('birthDate')"
                >
                </date-picker>
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
  BImg,
  BTd,
} from "bootstrap-vue";
import PersonService from "@/services/info/person.service";
import flatPickr from "vue-flatpickr-component";
import ManualService from "@/services/manual.service";

import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
export default {
  components: {
    BOverlay,
    BCard,
    BImg,
    BRow,
    flatPickr,
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
  created() {
    this.lang = localStorage.getItem("locale") || "ru";
    PersonService.Get(this.$route.params.id)
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
    PassportDateValue(value) {
      this.Data.passportDate = value;
    },
    PassportExpirationValue(value) {
      this.Data.passportExpiration = value;
    },
    BirthDateValue(value) {
      this.Data.birthDate = value;
    },
    DeleteImgData() {
      this.Data.photoId = null;
      this.Data.photo = null;
      //   this.Refresh();
      // console.log(this.Data);
    },
    check() {
      var self = this;

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
        self.Data.shortName === 0 ||
        self.Data.shortName === null ||
        self.Data.shortName === undefined ||
        self.Data.shortName === ""
      ) {
        this.makeToast(this.$t("shortnameNotCorrect"), 400);
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
    SaveData() {
      if (!this.check()) {
        return false;
      }
      PersonService.Update(this.Data)
        .then((res) => {
          this.makeToast(this.$t("SuccessMessage"), 200);
          this.$router.push({ path: "/info/nationality" });
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
