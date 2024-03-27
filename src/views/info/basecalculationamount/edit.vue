<template>
  <b-overlay :show="show">
    <b-row>
      <b-col sm="12" md="12" lg="12">
        <b-card>
          <b-row>
            <b-col sm="12" md="4" lg="4">
              <div class="form-group">
                <label class="col-form-label" for>{{ $t("amount") }}</label>
                <div>
                  <b-input-group>
                    <b-form-input
                      :placeholder="$t('amount')"
                      v-model="Data.amount"
                      type="number"
                    />
                  </b-input-group>
                </div>
              </div>
            </b-col>
            <b-col sm="12" md="4" lg="4">
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
            <b-col v-if="Data.id !== 0" sm="12" md="4" lg="4">
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
import BaseCalculationAmountService from "@/services/info/basecalculationamount.service";
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
      loading: false,
      Data: {},
      StateList: [],
      SaveLoading: false,
    };
  },
  created() {
    this.lang = localStorage.getItem("locale") || "ru";
    BaseCalculationAmountService.Get(this.$route.params.id)
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
      BaseCalculationAmountService.Update(this.Data)
        .then((res) => {
          this.makeToast(this.$t("SuccessMessage"), 200);
          this.$router.push({ path: "/info/basecalculationamount" });
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
