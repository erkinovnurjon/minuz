<template>
  <b-overlay :show="show">
    <b-row>
      <b-col sm="12" md="12" lg="12">
        <b-card>
          <b-row>
            <b-col sm="12" md="3" lg="3">
              <div class="form-group">
                <label class="col-form-label" for>{{ $t("onDate") }}</label>
                <div>
                  <custom-date-picker
                    v-model="Data.onDate"
                    @keyup="OnDateValue"
                    format="DD.MM.YYYY"
                    type="date"
                    :clearable="false"
                    :placeholder="$t('onDate')"
                  >
                  </custom-date-picker>
                </div>
              </div>
            </b-col>
            <b-col sm="12" md="3" lg="3">
              <div class="form-group">
                <label class="col-form-label" for>{{ $t("offDate") }}</label>
                <div>
                  <custom-date-picker
                    v-model="Data.offDate"
                    @keyup="OffDateValue"
                    format="DD.MM.YYYY"
                    type="date"
                    :clearable="false"
                    :placeholder="$t('offDate')"
                  >
                  </custom-date-picker>
                </div>
              </div>
            </b-col>
            <b-col sm="12" md="3" lg="3">
              <div class="form-group">
                <label class="col-form-label" for>{{
                  $t("baseAmountCount")
                }}</label>
                <div>
                  <b-input-group>
                    <b-form-input
                      :placeholder="$t('baseAmountCount')"
                      v-model="Data.amount"
                      type="number"
                      @input="FindmaxComissionAmount"
                    />
                  </b-input-group>
                </div>
              </div>
            </b-col>
            <b-col sm="12" md="3" lg="3">
              <div class="form-group">
                <label class="col-form-label" for>{{
                  $t("comissionPercentMax")
                }}</label>
                <div>
                  <b-input-group>
                    <b-form-input
                      :placeholder="$t('comissionPercentMax')"
                      v-model="Data.maxcomissionPercentMax"
                      type="number"
                      @input="FindmaxComissionAmount"
                    />
                  </b-input-group>
                </div>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12" md="3" lg="3">
              <div class="form-group">
                <label class="col-form-label" for>{{
                  $t("maxComissionAmount")
                }}</label>
                <div>
                  <b-input-group>
                    <b-form-input
                      :placeholder="$t('maxComissionAmount')"
                      v-model="Data.maxComissionAmount"
                      type="number"
                      disabled
                      required
                    />
                  </b-input-group>
                </div>
              </div>
            </b-col>
            <b-col sm="12" md="3" lg="3">
              <div class="form-group">
                <label class="col-form-label" for>{{
                  $t("comissionPercent")
                }}</label>
                <div>
                  <b-input-group>
                    <b-form-input
                      :placeholder="$t('comissionPercent')"
                      v-model="Data.comissionPercent"
                      type="number"
                      disabled
                      required
                      @input="FindComissionAmount"
                    />
                  </b-input-group>
                </div>
              </div>
            </b-col>
            <b-col sm="12" md="3" lg="3">
              <div class="form-group">
                <label class="col-form-label" for>{{
                  $t("ComissionAmount")
                }}</label>
                <div>
                  <b-input-group>
                    <b-form-input
                      :placeholder="$t('ComissionAmount')"
                      v-model="Data.ComissionAmount"
                      type="number"
                      disabled
                      required
                    />
                  </b-input-group>
                </div>
              </div>
            </b-col>
            <b-col sm="12" md="3" lg="3">
              <div style="margin-top: 35px" class="form-group">
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
import BaseComputationAmountService from "@/services/info/basecomputationamount.service";
import ManualService from "@/services/manual.service";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

import customDatePicker from "@/views/components/customDatePicker.vue";
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
    customDatePicker,
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
      loading: false,
      Data: {},
      StateList: [],
      SaveLoading: false,
    };
  },
  created() {
    this.lang = localStorage.getItem("locale") || "ru";
    BaseComputationAmountService.Get(this.$route.params.id)
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
  },
  methods: {
    FindmaxComissionAmount() {
      this.Data.maxComissionAmount =
        (this.Data.amount * this.Data.maxComissionPercentage) / 100;
      this.FindComissionAmount();
    },
    FindComissionAmount() {
      this.Data.comissionAmount =
        ((this.Data.amount * (this.Data.maxComissionPercentage / 100)) /
          this.Data.comissionPercentage) *
        (100 - this.Data.comissionPercentage);
    },
    OffDateValue(value) {
      this.Data.offDate = value;
    },
    OnDateValue(value) {
      this.Data.onDate = value;
    },
    // check() {
    //   if (
    //     this.Data.eduYear === 0 ||
    //     this.Data.eduYear === null ||
    //     this.Data.eduYear === undefined ||
    //     this.Data.eduYear === ""
    //   ) {
    //     this.makeToast(this.$t("bankNameNotCorrect"), "danger");
    //     return false;
    //   }
    //   if (
    //     this.Data.eduYear === 0 ||
    //     this.Data.eduYear === null ||
    //     this.Data.eduYear === undefined ||
    //     this.Data.eduYear === ""
    //   ) {
    //     this.makeToast(this.$t("bankCodeNotCorrect"), "danger");
    //     return false;
    //   }
    //   return true;
    // },
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
      this.SaveLoading = true;
      BaseComputationAmountService.Update(this.Data)
        .then((res) => {
          this.makeToast(this.$t("SuccessMessage"), 200);
          this.$router.push({ path: "/info/basecomputationamount" });
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
