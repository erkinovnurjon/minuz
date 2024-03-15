<template>
  <b-overlay :show="previewshow">
    <b-row>
      <b-col cols="12">
        <b-card>
          <b-tabs v-model="tabIndex" content-class="mt-2">
            <b-tab :title="$t('ParentDocument')" lazy>
              <b-card no-body>
                <b-tabs pills >
                  <b-tab :title="$t('personalInfo')" active>
                    <b-row>
                      <b-col cols="12" md="8" lg="8">
                      <div class="d-flex">
                        <div class="mr-2" style="width:100%">
                          <b-form-input
                            v-mask="'AA'"
                            :placeholder="$t('series')"
                            v-model="filter.documentSeries"
                            @input="updateDocumentSeries"
                          />
                        </div>
                        <div class="mr-2" style="width:100%">
                          <b-form-input
                            v-mask="'#######'"
                            type="number"
                            :placeholder="$t('documentnumber')"
                            v-model="filter.documentNumber"
                          />
                        </div>
                        <div class="mr-2" style="width:100%">
                            <!-- <date-picker
                              v-model="filter.dateofbirth"
                              style="width: 80%"
                              v-mask="'##.##.####'"
                              size="sm"
                              lang="ru"
                              :placeholder="$t('dateOfbirth')"
                              value-type="format"
                              format="DD.MM.YYYY"
                            /> -->

                            <custom-date-picker
                              v-model="filter.dateofbirth"
                              style="width: 100%"
                              size="sm"
                              format="DD.MM.YYYY"
                              type="date"
                              :clearable="false"
                              :placeholder="$t('dateofbirth')"
                            ></custom-date-picker>
                        </div>
                        <div class="mr-2" style="width:100%">
                          <b-form-input
                            v-mask="'##############'"
                            :placeholder="$t('pinfl')"
                            v-model="filter.pinfl"
                          />
                        </div>
                        <div>
                          <b-button @click="Refresh" size="md" variant="primary">
                            <feather-icon icon="SearchIcon" />
                          </b-button>
                        </div>
                      </div>
                    </b-col>
                    </b-row>
                  </b-tab>
                  <b-tab :title="$t('phone')">
                    <b-row>
                      <b-col cols="12" md="4">
                        <b-input-group class="text-right">
                          <b-form-input
                            v-mask="'+###-##-###-##-##'"
                            v-model="filter2.phoneNumber"
                            :placeholder="$t('phonenumber')"
                          />

                          <b-input-group-append>
                            <b-button @click="Refresh2" variant="primary">
                              <feather-icon icon="SearchIcon" />
                            </b-button>
                          </b-input-group-append>

                          <b-input-group-append>
                            <b-button @click="SmsRefresh" variant="info">
                              <feather-icon icon="MailIcon" />
                            </b-button>
                          </b-input-group-append>
                        </b-input-group>
                      </b-col>
                    </b-row>
                  </b-tab>
                </b-tabs>
              </b-card>
              <b-card class="mt-3">
                <b-row>
                  <b-col sm="12" md="12" lg="12" v-for="(item, index) in sms" :key="index">
                    <b-card
                      class="mt-2"
                      :class="'card-border-success'"
                      style="background-color: #f8f8f8"
                    >
                      <h2 class="mb-1">{{ $t("SMSINFO") }}</h2>
                      <table>
                        <tbody>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("smsdateofsent") }} :</td>
                            <td class="pb-1">
                              <span class="font-weight-bold">{{ item.smsdateofsent }}</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("smstext") }} :</td>
                            <td class="font-weight-bold pb-1">{{ item.smstext }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </b-card>
                  </b-col>
                </b-row>
              </b-card>
              <b-card class="mt-3">
                <b-row>
                  <b-col sm="12" md="6" lg="6" v-for="(item, index) in list" :key="index">
                    <b-card
                      class="mt-2"
                      :class="'card-border-success'"
                      style="background-color: #f8f8f8"
                    >
                      <h2 class="mb-1">{{ $t("ParentInfo") }}</h2>
                      <table>
                        <tbody>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("fullname") }} :</td>
                            <td class="pb-1">
                              <span class="font-weight-bold">{{ item.fullname }}</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("dateofbirth") }} :</td>
                            <td class="font-weight-bold pb-1">{{ item.dateofbirth }}</td>
                          </tr>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("documentseries") }} :</td>
                            <td class="font-weight-bold pb-1">{{ item.documentseries }}</td>
                          </tr>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("documentnumber") }} :</td>
                            <td class="font-weight-bold pb-1">{{ item.documentnumber }}</td>
                          </tr>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("pinfl") }} :</td>
                            <td class="font-weight-bold pb-1">{{ item.pinfl }}</td>
                          </tr>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("phonenumber") }} :</td>
                            <td class="font-weight-bold pb-1">{{ item.mobilenumber }}</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="font-weight-bold text-right">
                              <b-button variant="primary" @click="ViewChild">
                                {{
                                $t("ViewAdmissionApp")
                                }}
                              </b-button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </b-card>
                  </b-col>
                  <b-col sm="12" md="6" lg="6" v-for="(item, index) in list" :key="index">
                    <b-card
                      class="mt-2"
                      :class="'card-border-success'"
                      style="background-color: #f8f8f8"
                    >
                      <h2 class="mb-1">{{ $t("liveplace") }}</h2>
                      <table>
                        <tbody>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("kinshipdegreename") }} :</td>
                            <td class="pb-1">
                              <span class="font-weight-bold">{{ item.kinshipdegreename }}</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("Country") }} :</td>
                            <td class="font-weight-bold pb-1">{{ item.livecountryname }}</td>
                          </tr>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("Oblast") }} :</td>
                            <td class="font-weight-bold pb-1">{{ item.liveoblastname }}</td>
                          </tr>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("Region") }} :</td>
                            <td class="font-weight-bold pb-1">{{ item.liveregionname }}</td>
                          </tr>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("mfy") }} :</td>
                            <td class="font-weight-bold pb-1">{{ item.livemfyname }}</td>
                          </tr>
                          <tr>
                            <td class="pr-1 pb-1 text-primary">{{ $t("street") }} :</td>
                            <td class="font-weight-bold pb-1 text-primary">{{ item.livestreetname }}</td>
                          </tr>
                          <tr>
                            <td class="pr-1 pb-1 text-primary">{{ $t("streethousename") }} :</td>
                            <td
                              class="font-weight-bold pb-1 text-primary"
                            >{{ item.livestreethousename }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </b-card>
                  </b-col>
                </b-row>
              </b-card>
            </b-tab>
            <b-tab :title="$t('ChildrenDocument')" lazy>
              <b-card no-body>
                <b-tabs pills >
                  <b-tab :title="$t('personalInfo')" active>
                    <b-row>
                      <b-col cols="12" md="9" lg="9">
                      <div class="d-flex">
                        <div class="mr-2" style="width: 100%">
                          <v-select
                            :options="IdentityDocumentList"
                            :reduce="(item) => item.id"
                            label="name"
                            @input="ChangeIdentityDocument"
                            v-model="filter1.identitydocumentid"
                            :placeholder="$t('identitydocument')"
                          ></v-select>
                        </div>
                        <div class="mr-2" style="width: 100%">
                          <v-select
                            :options="GetChildren"
                            :reduce="(item) => item.name"
                            label="name"
                            v-model="filter1.documentSeries"
                            v-if="filter1.identitydocumentid == 1"
                            :placeholder="$t('ChooseBelow')"
                          ></v-select>
                          <b-form-input
                            v-mask="'AA'"
                            v-if="filter1.identitydocumentid != 1"
                            v-model="filter1.documentSeries"
                            placeholder="AA"
                            @input="updateDocumentSeries"
                          />
                        </div>
                        <div class="mr-2" style="width: 100%">
                          <b-form-input
                            v-model="filter1.documentNumber"
                            v-mask="'#######'"
                            placeholder="8888888"
                          />
                        </div>
                        <div class="mr-2" style="width: 100%">
                            <custom-date-picker
                              v-model="filter.dateofbirth"
                              style="width: 100%"
                              size="sm"
                              format="DD.MM.YYYY"
                              type="date"
                              :clearable="false"
                              :placeholder="$t('dateofbirth')"
                            ></custom-date-picker>
                        </div>
                        <div class="mr-2" style="width:100%" v-if="filter1.identitydocumentid != 1">
                          <b-form-input
                            v-mask="'##############'"
                            :placeholder="$t('pinfl')"
                            v-model="filter1.pinfl"
                          />
                        </div>
                        <div>
                          <b-button @click="Refresh1" size="md" variant="primary">
                            <feather-icon icon="SearchIcon" />
                          </b-button>
                        </div>
                      </div>
                    </b-col>
                    </b-row>
                  </b-tab>
                  <b-tab :title="$t('phone')">
                    <b-row>
                      <b-col cols="12" md="3">
                        <b-input-group class="text-right">
                          <b-form-input
                            v-mask="'+###-##-###-##-##'"
                            :placeholder="$t('phonenumber')"
                            v-model="filter3.phoneNumber"
                          />
                          <b-input-group-append>
                            <b-button @click="Refresh3" variant="primary">
                              <feather-icon icon="SearchIcon" />
                            </b-button>
                          </b-input-group-append>
                        </b-input-group>
                      </b-col>
                      <!-- <b-col md="1"></b-col>
                      <b-col md="2">-->
                      <!-- <div> -->
                      <!-- <b-form-input
                        :placeholder="$t('series')"
                        v-model="filter1.documentSeries"
                      />-->
                      <!-- <v-select
                            :options="GetChildren"
                            :reduce="(item) => item.name"
                            :placeholder="$t('ChooseBelow')"
                            label="name"
                            v-model="filter1.documentSeries"
                          ></v-select></div
                      ></b-col>
                      <b-col md="2">
                        <b-form-input
                          :placeholder="$t('documentnumber')"
                          v-model="filter1.documentNumber"
                        />
                      </b-col>-->
                      <!-- <b-col cols="12" md="3">
                      <b-input-group style="height: 28px">-->
                      <!-- <flat-pickr
                          v-model="filter1.dateOfBirth"
                          class="form-control"
                          :placeholder="$t('dateOfbirth')"
                          :config="config"
                      />-->
                      <!-- <date-picker
                            v-model="filter1.dateOfBirth"
                            style="width: 80%"
                            class="ml-1"
                            size="sm"
                            lang="ru"
                            :placeholder="$t('dateOfbirth')"
                            value-type="format"
                            format="DD.MM.YYYY"
                          ></date-picker>
                          <b-input-group-append>
                            <b-button
                              @click="Refresh1"
                              size="sm"
                              variant="primary"
                            >
                              <feather-icon icon="SearchIcon" />
                            </b-button>
                          </b-input-group-append>
                        </b-input-group>
                      </b-col>-->
                    </b-row>
                  </b-tab>
                </b-tabs>
              </b-card>
              <b-card class="mt-3">
                <b-row>
                  <b-col md="2"></b-col>
                  <b-col sm="12" md="8" lg="8" v-for="(item, index) in doc" :key="index">
                    <b-card
                      class="mt-2"
                      :class="'card-border-success'"
                      style="background-color: #f8f8f8"
                    >
                      <h2 class="mb-1">{{ $t("ChildrenInfo") }}</h2>
                      <table>
                        <tbody>
                          <tr>
                            <td class="pr-5 pb-1">{{ $t("fullname") }} :</td>
                            <td class="pr-5"></td>
                            <td class="pb-1">
                              <span class="font-weight-bold">{{ item.fullname }}</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("ParentInfo") }} :</td>
                            <td class="pr-5"></td>
                            <td class="font-weight-bold pb-1">{{ item.parentfullname }}</td>
                          </tr>
                          <tr></tr>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("dateofbirth") }} :</td>
                            <td class="pr-5"></td>
                            <td class="font-weight-bold pb-1">{{ item.dateofbirth }}</td>
                          </tr>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("identitydocumentname") }} :</td>
                            <td class="pr-5"></td>
                            <td class="font-weight-bold pb-1">{{ item.identitydocumentname }}</td>
                          </tr>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("documentseries") }} :</td>
                            <td class="pr-5"></td>
                            <td class="font-weight-bold pb-1">{{ item.documentseries }}</td>
                          </tr>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("documentnumber") }} :</td>
                            <td class="pr-5"></td>
                            <td class="font-weight-bold pb-1">{{ item.documentnumber }}</td>
                          </tr>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("pinfl") }} :</td>
                            <td class="pr-5"></td>
                            <td class="font-weight-bold pb-1">{{ item.pinfl }}</td>
                          </tr>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("phonenumber") }} :</td>
                            <td class="pr-5"></td>
                            <td class="font-weight-bold pb-1">{{ item.mobilenumber }}</td>
                          </tr>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("admissiontype") }} :</td>
                            <td class="pr-5"></td>
                            <td class="font-weight-bold pb-1">{{ item.admissiontypename }}</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="font-weight-bold text-right">
                              <b-button variant="primary" @click="ViewParent">
                                {{
                                $t("ViewAdmissionApp")
                                }}
                              </b-button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </b-card>
                  </b-col>
                  <b-col md="2"></b-col>
                </b-row>
              </b-card>
            </b-tab>
            <b-tab :title="$t('AdmissionApp')" lazy>
              <b-card no-body>
                <div class="m-2">
                  <b-row>
                    <b-col cols="12" md="4">
                      <b-input-group class="text-right">
                        <b-form-input
                          v-mask="'+###-##-###-##-##'"
                          :placeholder="$t('phonenumber')"
                          v-model="filter4.phoneNumber"
                        />
                        <b-input-group-append>
                          <b-button @click="Refresh4" variant="primary">
                            <feather-icon icon="SearchIcon" />
                          </b-button>
                        </b-input-group-append>
                      </b-input-group>
                    </b-col>
                    <b-col md="4"></b-col>
                    <b-col cols="12" md="4">
                      <b-input-group>
                        <b-form-input
                          v-mask="'####-####-####'"
                          :placeholder="$t('regnumber')"
                          v-model="filter5.regNumber"
                        />

                        <b-input-group-append>
                          <b-button @click="Refresh5" variant="primary">
                            <feather-icon icon="SearchIcon" />
                          </b-button>
                        </b-input-group-append>
                      </b-input-group>
                    </b-col>
                  </b-row>
                </div>
              </b-card>
              <b-card v-for="(item, index) in Admission" :key="index" class="mt-3">
                <b-row>
                  <b-col sm="12" md="6" lg="6">
                    <b-card
                      class="mt-2"
                      :class="'card-border-success'"
                      style="background-color: #f8f8f8"
                    >
                      <h2 class="mb-1">{{ $t("applicantname") }}</h2>
                      <table>
                        <tbody>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("childrenfullname") }} :</td>
                            <td class="pb-1">
                              <span class="font-weight-bold">{{ item.childrenname }}</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("applicationtypename") }} :</td>
                            <td class="font-weight-bold pb-1">{{ item.applicationtypename }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </b-card>
                  </b-col>
                  <b-col sm="12" md="6" lg="6">
                    <b-card
                      class="mt-2"
                      :class="'card-border-success'"
                      style="background-color: #f8f8f8"
                    >
                      <h2 class="mb-1">{{ $t("AdmissionApp") }}</h2>
                      <table>
                        <tbody>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("admissionAppDocNumber") }} :</td>
                            <td class="pb-1">
                              <span class="font-weight-bold">{{ item.docnumber }}</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("dateofcreated") }} :</td>
                            <td class="pb-1">
                              <span class="font-weight-bold">{{ item.dateofcreated }}</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="pr-1 pb-1">{{ $t("phonenumber") }} :</td>
                            <td class="font-weight-bold pb-1">{{ item.phonenumber }}</td>
                          </tr>
                          <tr>
                            <td class="pr-1 pb-1 text-primary">{{ $t("schoolyear") }} :</td>
                            <td class="font-weight-bold pb-1 text-primary">{{ item.schoolyearname }}</td>
                          </tr>
                          <tr>
                            <td class="pr-1 pb-1 text-primary">{{ $t("status") }} :</td>
                            <td class="font-weight-bold pb-1 text-primary">{{ item.statusname }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </b-card>
                  </b-col>
                </b-row>
              </b-card>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-col>
    </b-row>
    <b-row v-if="tabIndex == 3 && !!license.url">
      <b-col>
        <b-card>
          <iframe :src="license.url" width="100%" height="700px"></iframe>
        </b-card>
      </b-col>
    </b-row>
  </b-overlay>
</template>

<script>
import {
  BRow,
  BCol,
  BCard,
  BImg,
  BCardImg,
  BOverlay,
  BTable,
  BTab,
  BTabs,
  BTooltip,
  BSpinner,
  BButton,
  BPagination,
  BBadge,
  BInputGroup,
  BFormInput,
  BInputGroupAppend,
  BFormDatepicker
} from "bootstrap-vue";
// import FeatherIcon from "@/@core/components/feather-icon/FeatherIcon.vue";
import CallCenterService from "@/services/others/callcenter.service";
import Statement from "@/views/managment/callcenter/statement.vue";
import HelperService from "@/services/others/helper.service";
import flatPickr from "vue-flatpickr-component";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import CustomDatePicker from "@/views/components/customDatePicker.vue";
import IdentityDocumentService from "@/services/info/identitydocument.service";
export default {
  components: {
    BRow,
    BCol,
    BCard,
    BImg,
    BOverlay,
    BCardImg,
    BTable,
    BTab,
    BTabs,
    flatPickr,
    BTooltip,
    BSpinner,
    BBadge,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,
    Statement,
    ToastificationContent,
    BButton,
    BPagination,
    BFormDatepicker,
    CustomDatePicker
  },
  data() {
    return {
      GetChildren: [],
      tabIndex: 0,
      previewshow: false,
      items: [],
      list: [],
      sms: [],
      doc: [],
      Admission: [],
      filter: {
        documentSeries: "",
        documentNumber: "",
        dateOfBirth: "",
        pinfl: ""
      },
      filter2: {
        phoneNumber: "+998"
      },
      filter3: {
        phoneNumber: "+998"
      },
      filter1: {
        documentSeries: "",
        documentNumber: "",
        dateOfBirth: "",
        IdentityDocumentId: 0,
        pinfl: ""
      },
      filter4: {
        phoneNumber: "+998"
      },
      filter5: {
        regNumber: ""
      },
      filter6: {
        parentId: ""
      },
      filter7: {
        childrenId: ""
      },
      license: {
        identitydocumentid: 0,
        documentSeries: "",
        documentNumber: "",
        dateOfBirth: "",
        url: ""
      },
      config: {
        dateFormat: "d.m.Y"
      },
      isBusy: false,
      LicenseLoading: false,
      IdentityDocumentList: []
    };
  },
  created() {
    this.show = true;
    HelperService.GetAllIdentityDocSeries(this.filter1.IdentityDocumentId).then(
      res1 => {
        this.GetChildren = res1.data;
      }
    );
    IdentityDocumentService.GetAll()
      .then(res => {
        this.IdentityDocumentList = res.data.result;
      })
      .catch(error => {
        this.$message(error.response);
      });
  },
  methods: {
    updateDocumentSeries(value) {
      this.filter.documentSeries = value.toUpperCase();
      this.filter1.documentSeries = value.toUpperCase();
    },
    // forceFileDownload(response, name) {
    //     var blob = new Blob([response.data],{type: 'application/pdf'});
    //     const url = window.URL.createObjectURL(blob);
    //     const link = document.createElement("a");
    //     link.href = url;
    //     link.setAttribute("download", name + ".pdf"); //or any other extension
    //     document.body.appendChild(link);
    //     link.click();
    //     window.open(url, '_blank');
    // },
    BindValue(value) {
      this.license.dateOfBirth = value;
    },
    RefreshPdf() {
      this.LicenseLoading = true;
      CallCenterService.GetAdmAppReferenceByChildrenDocument(
        this.license.documentSeries,
        this.license.documentNumber,
        this.license.dateOfBirth
      )
        .then(res => {
          this.LicenseLoading = false;
          var blob = new Blob([res.data], { type: "application/pdf" });
          this.license.url = window.URL.createObjectURL(blob);
        })
        .catch(error => {
          this.LicenseLoading = false;
          this.makeToast(error.response.data.error, "danger");
          console.log(error.response.data);
        });
    },
    ChangeIdentityDocument() {
      this.filter1.documentSeries = "";
      this.filter1.documentNumber = "";
      this.filter1.dateOfBirth = "";
    },
    Refresh1() {
      this.isBusy = true;

      CallCenterService.GetChildrenListByDocument(
        this.filter1.documentSeries,
        this.filter1.documentNumber,
        this.filter1.dateOfBirth,
        this.filter1.pinfl
      )
        .then(res => {
          this.doc = res.data;
          this.isBusy = false;
        })
        .catch(error => {
          this.makeToast(error.response.data.error, "danger");
        });
    },
    makeToast(message, variant) {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: message,
          icon: variant == "success" ? "CheckSquareIcon" : "AlertTriangleIcon",
          variant: variant
        }
      });
    },
    Refresh2() {
      this.isBusy = true;
      CallCenterService.GetParentListByPhoneNumber(this.filter2.phoneNumber)
        .then(res => {
          this.list = res.data;
          this.isBusy = false;
        })
        .catch(error => {
          this.makeToast(error.response.data.error, "danger");
        });
    },
    SmsRefresh() {
      CallCenterService.GetSmsSentToParent(this.filter2.phoneNumber)
        .then(res => {
          this.sms = res.data;
          this.isBusy = false;
        })
        .catch(error => {
          this.makeToast(error.response.data.error, "danger");
        });
    },
    ViewChild() {
      (this.tabIndex += 2),
        CallCenterService.GetAdmissionAppListByParentId(
          (this.filter6.parentId = this.list[0].id)
        ).then(res => {
          this.Admission = res.data;
          this.isBusy = false;
        });
    },
    ViewParent() {
      this.tabIndex++,
        CallCenterService.GetAdmissionAppListByChildrenId(
          (this.filter7.childrenId = this.doc[0].id)
        ).then(res => {
          this.Admission = res.data;
          this.isBusy = false;
        });
    },
    Refresh4() {
      this.isBusy = true;
      CallCenterService.GetAdmissionAppListByPhoneNumber(
        this.filter4.phoneNumber
      )
        .then(res => {
          this.Admission = res.data;
          this.isBusy = false;
        })
        .catch(error => {
          this.makeToast(error.response.data.error, "danger");
          console.log(error.response);
        });
    },
    Refresh5() {
      this.isBusy = true;
      CallCenterService.GetAdmissionAppListByRegNumber(this.filter5.regNumber)
        .then(res => {
          this.Admission = res.data;
          this.isBusy = false;
        })
        .catch(error => {
          this.makeToast(error.response.data.error, "danger");
        });
    },
    Refresh3() {
      this.isBusy = true;
      CallCenterService.GetChildrenListByPhoneNumber(this.filter3.phoneNumber)
        .then(res => {
          this.doc = res.data;
          this.isBusy = false;
        })
        .catch(error => {
          this.makeToast(error.response.data.error, "danger");
        });
    },
    Refresh() {
      this.isBusy = true;
      CallCenterService.GetParentListByDocument(
        this.filter.documentSeries,
        this.filter.documentNumber,
        this.filter.dateOfBirth,
        this.filter.pinfl
      )
        .then(res => {
          this.list = res.data;
          this.isBusy = false;
        })
        .catch(error => {
          this.makeToast(error.response.data.error, "danger");
        });
    },
    statement() {
      this.$router.push({ name: "statement" });
    },
    quota() {
      this.$router.push({ name: "quota" });
    },
    ParentListByPhoneNumber() {
      this.$router.push({ name: "ParentListByPhoneNumber" });
    },
    GetChildrenListByPhoneNumber() {
      this.$router.push({ name: "GetChildrenListByPhoneNumber" });
    },
    GetAdmissionAppListByPhoneNumber() {
      this.$router.push({ name: "GetAdmissionAppListByPhoneNumber" });
    },
    GetParentListByDocument() {
      this.$router.push({ name: "GetParentListByDocument" });
    },
    GetChildrenListByDocument() {
      this.$router.push({ name: "GetChildrenListByDocument" });
    },
    GetAdmissionAppListByRegNumber() {
      this.$router.push({ name: "GetAdmissionAppListByRegNumber" });
    },
    GetAdmissionAppListByParentId() {
      this.$router.push({ name: "GetAdmissionAppListByParentId" });
    },
    GetAdmissionAppListByChildrenId() {
      this.$router.push({ name: "GetAdmissionAppListByChildrenId" });
    }
  }
};
</script>

<style>
.cl-icon :hover {
  color: rgb(97, 76, 236);
}
.cl-card {
  height: 230px;
  width: 250px;
}
.card-border-success {
  border-top: 6px solid rgb(24, 173, 69);
}
.card-border-warning {
  border-top: 6px solid rgb(255, 145, 0);
}
@media (min-width: 576px) {
  .modal-dialog.modal-xl {
    max-width: 96%;
  }
}
@media screen and (max-width: 554px) {
  .cl-card {
    margin-left: auto !important;
    margin-right: auto !important;
    padding-left: 10px;
  }
}
@media screen and (max-width: 553px) {
  .cl-card {
    padding: 0 10px;
    width: 100%;
    height: 250px;
  }
}
@media screen and (width: 576px) {
  .cl-card {
    padding: 0 5px;
    margin-left: auto !important;
    margin-right: auto !important;
  }
}
.per-page-selector {
  width: 90px;
}

.invoice-filter-select {
  min-width: 190px;
}
</style>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
@import "@core/scss/vue/libs/vue-flatpicker.scss";
</style>