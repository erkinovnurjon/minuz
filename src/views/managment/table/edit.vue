<template>
  <b-row>
    <b-col>
      <b-card accent-color="primary" class="pb-4">
        <b-card>
          <b-row class="mt-n1">
            <b-col sm="4">
              <label>{{ $t("shortname") }}</label>
              <b-form-input
                :placeholder="$t('shortname')"
                autocomplete="shortname"
                v-model="Table.shortname"
                disabled
              >
              </b-form-input>
            </b-col>
            <b-col sm="4">
              <label>{{ $t("fullname") }}</label>
              <b-form-input
                :placeholder="$t('fullname')"
                autocomplete="fullname"
                v-model="Table.fullname"
                disabled
              >
              </b-form-input>
            </b-col>
            <b-col sm="4">
              <label>{{ $t("dbtablename") }}</label>
              <b-form-input
                :placeholder="$t('dbtablename')"
                autocomplete="dbtablename"
                v-model="Table.dbtablename"
                disabled
              >
              </b-form-input>
            </b-col>
          </b-row>
          <b-row class="mt-3">
            <b-col class="text-right">
              <b-button variant="primary" @click="OpenTabrowModal">
                <feather-icon icon="PlusIcon"></feather-icon> {{ $t("Add") }}
              </b-button>
            </b-col>
          </b-row>
          <b-row class="mt-1">
            <b-col>
              <b-table
                :fields="fields"
                :items="Table.Tables"
                class="text-center"
                style="vertical-align: middle"
                bordered
                responsive
                :tbody-tr-class="rowClass"
                sticky-header="60vh"
                no-border-collapse
                small
              >
                <template #cell(actions)="{ item }">
                  <div class="text-center">
                    <b-link
                      @click="EditItem(item)"
                      class="mr-2"
                      v-c-tooltip="{ content: $t('Edit') }"
                    >
                      <feather-icon icon="EditIcon"></feather-icon>
                    </b-link>
                    <b-link
                      class="mr-2"
                      v-c-tooltip="{ content: $t('Delete') }"
                      @click="DeleteItem(item)"
                    >
                      <feather-icon icon="TrashIcon"></feather-icon>
                    </b-link>
                  </div>
                </template>
                <template v-slot:cell(ismultiple)="{ item }">
                  <p class="m-0">
                    {{ item.ismultiple === true ? $t("yes") : $t("no") }}
                  </p>
                </template>
                <template v-slot:cell(isrequired)="{ item }">
                  <p class="m-0">
                    {{ item.isrequired === true ? $t("yes") : $t("no") }}
                  </p>
                </template>
              </b-table>
            </b-col>
          </b-row>
          <b-modal
            :title="$t('Table')"
            v-model="tabrowModal"
            size="xl"
            modal-class="custom-size-modal"
            no-close-on-backdrop
            hide-footer
          >
            <b-row class="mt-2">
              <b-col sm="4">
                <label>{{ $t("code") }}</label>
                <b-form-input
                  type="number"
                  :placeholder="$t('code')"
                  autocomplete="ordercode"
                  v-model="tabrow.ordercode"
                >
                </b-form-input>
              </b-col>
              <b-col sm="4">
                <label>{{ $t("shortname") }}</label>
                <b-form-input
                  :placeholder="$t('shortname')"
                  autocomplete="shortname"
                  v-model="tabrow.shortname"
                >
                </b-form-input>
              </b-col>
              <b-col sm="4">
                <label>{{ $t("fullname") }}</label>
                <b-form-input
                  :placeholder="$t('fullname')"
                  autocomplete="fullname"
                  v-model="tabrow.fullname"
                >
                </b-form-input>
              </b-col>
            </b-row>
            <b-row class="mt-2">
              <b-col sm="4">
                <label>{{ $t("tableid") }}</label>
                <v-select
                    :options="tablelist"
                    :reduce="(item) => item.id"
                    label="name"
                    v-model="tabrow.tableid"
                    :placeholder="$t('ChooseBelow')"
                  >
                  </v-select>
              </b-col>
              <b-col sm="4">
                <label>{{ $t("tablerowid") }}</label>
                <b-form-input
                  :placeholder="$t('tablerowid')"
                  autocomplete="tablerowid"
                  v-model="tabrow.tablerowid"
                >
                </b-form-input>
              </b-col>
              <b-col sm="4">
                <label>{{ $t("isrequired") }}</label>
                <b-form-checkbox
                  v-model="tabrow.isrequired"
                  switch
                  class="mt-2 ml-1"
                ></b-form-checkbox>
              </b-col>
            </b-row>
            <b-row class="mt-2">
              <b-col sm="4">
                <label>{{ $t("Ismultiple") }}</label>
                <b-form-checkbox
                  v-model="tabrow.ismultiple"
                  switch
                  class="mt-2 ml-1"
                ></b-form-checkbox>
              </b-col>
              <b-col sm="4">
                <label>{{ $t("maxsize") }}</label>
                <b-form-input
                  type="number"
                  :placeholder="$t('maxsize')"
                  autocomplete="maxsize"
                  v-model="tabrow.maxsize"
                >
                </b-form-input>
              </b-col>
            </b-row>
            <b-row class="mt-2">
              <b-col class="text-right">
                <b-button size="sm" variant="primary" @click="OpenTabrow2Modal">
                  <feather-icon icon="PlusIcon"></feather-icon> {{ $t("Add") }}
                </b-button>
              </b-col>
            </b-row>
            <b-table
              :fields="fields1"
              :items="tabrow.Tables1"
              class="text-center mt-1"
              style="vertical-align: middle"
              bordered
              responsive
              :tbody-tr-class="rowClass"
              sticky-header="60vh"
              no-border-collapse
              small
            >
              <template #cell(actions)="{ item }">
                <div class="text-center">
                  <b-link
                    @click="EditItem2(item)"
                    class="mr-2"
                    v-c-tooltip="{ content: $t('Edit') }"
                  >
                    <feather-icon icon="EditIcon"></feather-icon>
                  </b-link>
                  <b-link
                    class="mr-2"
                    v-c-tooltip="{ content: $t('Delete') }"
                    @click="DeleteItem2(item)"
                  >
                    <feather-icon icon="TrashIcon"></feather-icon>
                  </b-link>
                </div>
              </template>
            </b-table>
            <b-modal
              :title="$t('tables1')"
              v-model="tabrow2Modal"
              size="lg"
              modal-class="custom-size-modal"
              no-close-on-backdrop
              hide-footer
            >
              <b-row>
                <b-col>
                  <div class="form-group form-row">
                    <label class="col-form-label col-sm-4" for>{{
                      $t("fileextension")
                    }}</label>
                    <v-select
                      :options="fileextensionlist"
                      :reduce="(item) => item.id"
                      :placeholder="$t('ChooseBelow')"
                      label="name"
                      v-model="tabrow1.fileextensionid"
                      class="col-sm-8"
                    ></v-select>
                  </div>
                </b-col>
              </b-row>
              <b-row class="mt-4">
                <b-col class="text-center">
                  <b-button
                    variant="danger"
                    @click="CloseTabrow1Modal"
                    class="mr-2"
                  >
                    <feather-icon icon="ArrowLeftIcon"></feather-icon>
                    {{ $t("back") }}
                  </b-button>
                  <b-button variant="success" @click="AddTabrow1">
                    <feather-icon icon="CheckIcon"></feather-icon>
                    {{ $t("Save") }}
                  </b-button>
                </b-col>
              </b-row>
            </b-modal>
            <b-row class="mt-4">
              <b-col class="text-center">
                <b-button
                  variant="danger"
                  @click="CloseTabrowModal"
                  class="mr-2"
                >
                  <feather-icon icon="ArrowLeftIcon"></feather-icon>
                  {{ $t("back") }}
                </b-button>
                <b-button variant="success" @click="AddTabrow">
                  <feather-icon icon="CheckIcon"></feather-icon>
                  {{ $t("Save") }}
                </b-button>
              </b-col>
            </b-row>
          </b-modal>
        </b-card>
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
  BIcon,
  BFormCheckbox,
} from "bootstrap-vue";
import TableService from "@/services/managment/table.service";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import flatPickr from "vue-flatpickr-component";
import FeatherIcon from "@/@core/components/feather-icon/FeatherIcon.vue";
import HelperService from "@/services/others/helper.service";
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
    flatPickr,
    BFormGroup,
    BModal,
    BCardText,
    BInputGroup,
    BInputGroupAppend,
    BTr,
    BTd,
    BIcon,
    FeatherIcon,
    BFormCheckbox,
  },
  directives: {
    "b-tooltip": VBTooltip,
    "b-modal": VBModal,
  },
  data() {
    return {
      SaveLoading: false,
      Table: {},
      tablelist:[],
      tabrow: {
        id: 0,
        ownerid: 0,
        ordercode: "",
        shortname: "",
        fullname: "",
        isrequired: true,
        ismultiple: true,
        tableid: 0,
      tablerowid: 0,
        maxsize: 0,
        Status: 1,
        Tables1: [],
      },
      tabrow1: {
        id: 0,
        ownerid: 0,
        fileextensionid: 0,
        Status: 1,
      },
      tabrowModal: false,
      tabrow2Modal: false,
      fields: [
        {
          key: "ordercode",
          label: this.$t("Code"),
          sortable: false,
          thClass:"text-center",
          tdClass:"text-center"
        },
        {
          key: "shortname",
          label: this.$t("shortname"),
          sortable: false,
          thClass:"text-center",
          tdClass:"text-left"
        },
        {
          key: "fullname",
          label: this.$t("fullname"),
          sortable: false,
          thClass:"text-center",
          tdClass:"text-left"
        },
        {
          key: "tablename",
          label: this.$t("tableid"),
          sortable: false,
          thClass:"text-center",
          tdClass:"text-center"
        },
        {
          key: "tablerowid",
          label: this.$t("tablerowid"),
          sortable: false,
          thClass:"text-center",
          tdClass:"text-center"
        },
        {
          key: "isrequired",
          label: this.$t("isrequired"),
          thClass:"text-center",
          tdClass:"text-center"
        },
        {
          key: "ismultiple",
          label: this.$t("Ismultiple"),
          thClass:"text-center",
          tdClass:"text-center"
        },
        {
          key: "maxsize",
          label: this.$t("maxsize"),
          thClass:"text-center",
          tdClass:"text-center"
        },
        {
          key: "actions",
          label: this.$t("actions"),
          thClass:"text-center",
          tdClass:"text-center"
        },
        {
          key: "actions",
          label: this.$t("actions"),
          thClass:"text-center",
          tdClass:"text-center"
        },
      ],
      fileextensionlist: [],
      fields1: [
        {
          key: "fileextensionname",
          label: this.$t("fileextensionname"),
          sortable: false,
        },
        {
          key: "actions",
          label: this.$t("actions"),
        },
      ],
      lang: localStorage.getItem("locale") || "ru",
      editedIndex: -1,
    };
  },
  created() {
    TableService.Get(this.$route.params.id).then((res) => {
      this.Table = res.data;
    });
    TableService.GetAll().then((res) => {
      this.tablelist = res.data;
    });
    HelperService.GetFileExtensionList().then((res) => {
      this.fileextensionlist = res.data;
    });
  },
  methods: {
    OpenTabrowModal() {
      this.tabrow = {
        id: 0,
        ownerid: 0,
        ordercode: "",
        shortname: "",
        fullname: "",
        isrequired: true,
        ismultiple: true,
        tableid: 0,
      tablerowid: 0,
        maxsize: 0,
        Status: 1,
        Tables1: [],
      };
      this.editedIndex = -1;
      this.tabrowModal = true;
    },
    AddTabrow() {
      var self = this;
      if (!!this.tabrow.tableid) {
        this.tabrow.tablename =
          this.tablelist.filter(
            (item) => this.tabrow.tableid === item.id
          )[0].name;
      }
      if (self.editedIndex > -1) {
        Object.assign(self.Table.Tables[self.editedIndex], self.tabrow);
      } else {
        self.Table.Tables.push(self.tabrow);
      }
      this.tabrowModal = false;
    },
    clearTabrow1() {
      this.$nextTick(() => {
        this.tabrow1 = {
          id: 0,
          ownerid: 0,
          fileextensionid: 0,
          Status: 1,
        };
        this.editedIndex1 = -1;
      });
    },
    OpenTabrow2Modal() {
      this.tabrow1 = {
        id: 0,
        ownerid: 0,
        fileextensionid: 0,
        fileextensionname: "",
        Status: 1,
      };
      this.editedIndex1 = -1;
      this.tabrow2Modal = true;
    },
    AddTabrow1() {
      var self = this;
      if (!!this.tabrow1.fileextensionid) {
        this.tabrow1.fileextensionname = this.fileextensionlist.filter(
          (item) => item.id == this.tabrow1.fileextensionid
        )[0].name;
      }
      if (self.editedIndex1 > -1) {
        Object.assign(self.tabrow.Tables1[self.editedIndex1], self.tabrow1);
      } else {
        self.tabrow.Tables1.push(self.tabrow1);
      }
      this.tabrow2Modal = false;
    },
    CloseTabrowModal() {
      this.tabrowModal = false;
    },
    CloseTabrow1Modal() {
      this.tabrow2Modal = false;
    },
    rowClass(item, type) {
      if (item.Status === 3) {
        return "d-none";
      }
    },
    EditItem(item) {
      if (item.Status === 0) {
        item.Status = 2;
      }
      this.editedIndex = this.Table.Tables.indexOf(item);
      this.tabrow = Object.assign({}, item);
      this.tabrowModal = true;
    },
    DeleteItem(item) {
      item.Status = 3;
    },
    EditItem2(item) {
      if (item.Status === 0) {
        item.Status = 2;
      }
      this.editedIndex1 = this.tabrow.Tables1.indexOf(item);
      this.tabrow1 = Object.assign({}, item);
      this.tabrow2Modal = true;
    },
    DeleteItem2(item) {
      item.Status = 3;
    },
    SaveData() {
      this.SaveLoading = true;
      this.tabrow.ownerid = this.$route.params.id;
      TableService.Update(this.Table)
        .then((res) => {
            this.makeToast(this.$t("SaveSuccess"), "success");
          this.$router.push({name : 'Table'});
        })
        .catch((err) => {
            this.SaveLoading = false;
          this.makeToast(this.$t(err.response.data.error), "danger");
        });
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
};
</script>
    
    <style>
</style>