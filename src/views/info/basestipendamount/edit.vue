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
                /></div
            ></b-col>
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
import BaseStipendAmountService from "@/services/info/basestipendamount.service";
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
      Data: {},
      stateid: null,
      StateList: [],

      SaveLoading: false,
      loading: false,

      lang: "ru",
      editedIndex1: -1,
    };
  },
  props: {},
  created() {
    this.lang = localStorage.getItem("locale") || "ru";
    BaseStipendAmountService.Get(this.$route.params.id).then((res) => {
      this.show = false;
      this.Data = res.data;
    });
    ManualService.StateSelectList().then((res) => {
      this.StateList = res.data;
    });
  },
  methods: {
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
      BaseStipendAmountService.Update(this.Data)
        .then((res) => {
          this.makeToast(this.$t("SaveSuccess"), "success");
          this.$router.push({ name: "basestipendamount" });
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
