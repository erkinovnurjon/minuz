<template>
  <div>
    <b-overlay :show="show">
      <b-row class="jtd-dashboard">
        <b-col sm="12" md="12" style="positon: relative; bottom: -3vh">
          <b-card class="mb-0 pb-0">
            <b-col>
              <div class="d-flex">
                <div class="ml-2 mt-2 text-left" style="width: 20%">
                  <b-button-group @click="Refresh">
                  <b-button
                    @click="filter.docyear = 2022"
                    :variant="
                      filter.docyear == 2022 ? 'primary' : 'outline-primary'
                    "
                    size="md"
                  >
                    {{ $t("2022") }}
                  </b-button>
                  <b-button
                    @click="filter.docyear = 2023"
                    :variant="
                      filter.docyear == 2023 ? 'primary' : 'outline-primary'
                    "
                    size="md"
                  >
                    {{ $t("2023") }}
                  </b-button>
                  <b-button
                @click="filter.docyear = 2024"
                :variant="
                  filter.docyear == 2024 ? 'primary' : 'outline-primary'
                "
                size="md"
              >
                {{ $t("2024") }}
              </b-button>
                </b-button-group>
                </div>
              </div>
            </b-col>
          </b-card>
        </b-col>
        <b-col
          sm="12"
          md="6"
          class="mb-0 pb-0"
          style="positon: relative; bottom: -3vh"
        >
          <b-card class="mb-0 pb-0">
            <b-col class="mb-3">
              <div class="dashboard-title">
                <h3 class="title">{{ $t("jtdtestdashboard1") }}</h3>
              </div>
            </b-col>
            <div class="mb-2 mt-2 d-flex justify-content-center">
              <apexchart
                width="530"
                type="donut"
                :options="optionsDonutMale"
                :series="seriesDonutMale"
              ></apexchart>
            </div>
            <div
              class="m-0 p-0 totalCount"
              style="z-index: 2; display: flex; justify-content: center"
            >
              <div class="m-0 p-0 text-center cardStyle">
                <h4 style="color: white; font-size: 26px; wont-weight: 900">
                  {{ totalCount }}
                </h4>
                <h4 style="color: white; font-size: 14px; wont-weight: 900">
                  {{ $t("jtdtestall") }}
                </h4>
              </div>
            </div>
          </b-card>
        </b-col>
        <b-col
          sm="12"
          md="6"
          class="mb-0 pb-0"
          style="positon: relative; bottom: -3vh"
        >
          <b-card class="mb-3 pb-0">
            <b-row>
              <b-col class="" sm="12" md="12">
                <div class="dashboard-title">
                  <h3 class="title">{{ $t("jtdtestdashboard2") }}</h3>
                </div>
              </b-col>
            </b-row>
            <div class="mb-2 mt-2 d-flex justify-content-center">
              <apexchart
                width="460"
                type="donut"
                :options="optionsPie"
                :series="seriesPie"
              ></apexchart>
            </div>
          </b-card>
        </b-col>
        <b-row class="jtd-dashboard" style="margin-top: 20px">
          <b-col lg="6" sm="12" md="6">
            <b-card clas>
              <b-row>
                <b-col class="" sm="12">
                  <div class="dashboard-title">
                    <h3 class="title">{{ $t("jtdtestdashboard3") }}</h3>
                  </div>
                </b-col>
              </b-row>
              <apexchart
                width="500"
                type="bar"
                style="height: 350px"
                :options="optionsBar"
                :series="seriesBar"
              ></apexchart>
            </b-card>
          </b-col>
          <b-col lg="6" sm="12" md="6">
            <b-card class="mt-0 pt-0">
              <b-row>
                <b-col class="" sm="12">
                  <div class="dashboard-title">
                    <h3 class="title" style="margin-left: 70px">
                      {{ $t("jtdtestdashboard4") }}
                    </h3>
                  </div>
                </b-col>
              </b-row>
              <apexchart
                width="500"
                type="bar"
                style="height: 350px"
                :options="optionsOblast"
                :series="seriesOblast"
              ></apexchart>
              <!-- <DxChart
                id="chart"
                :customize-point="customizePoint"
                :customize-label="customizeLabel"
                :data-source="dataSource"
                :rotated="true"
              >
                <DxCommonSeriesSettings
                  argument-field="state"
                  type="bar"
                  hover-mode="allArgumentPoints"
                  selection-mode="allArgumentPoints"
                >
                  <DxLabel :visible="true">
                    <DxFormat :precision="0" type="fixedPoint" />
                  </DxLabel>
                </DxCommonSeriesSettings>
                <DxSeries
                  argument-field="day"
                  value-field="value"
                  type="bar"
                  color="#F4CA16"
                />
                <DxTooltip :enabled="true" />
                <DxValueAxis :max-value-margin="0.01">
                  <DxVisualRange :start-value="0" />
                </DxValueAxis>
  
                <DxLegend :visible="false" />
                <DxExport :enabled="true" />
              </DxChart> -->
            </b-card>
          </b-col>
        </b-row>
      </b-row>
    </b-overlay>
  </div>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BOverlay,
  BTabs,
  BTab,
  BFormInput,
  BIcon,
  BButton,
  BInputGroup,
  BInputGroupAppend,
  BButtonGroup,
} from "bootstrap-vue";
import vSelect from "vue-select";
import customSelect from "./components/customSelect.vue";
import apexchart from "vue-apexcharts";
import ReportService from "@/services/report/report.service";
import GTOJTDDashboardService from "@/services/others/gtojtddashboard.service";
import SchoolYearService from "@/services/info/schoolyear.service";
import {
  DxChart,
  DxSeries,
  DxValueAxis,
  DxVisualRange,
  DxCommonSeriesSettings,
  DxLabel,
  DxConstantLine,
  DxLegend,
  DxExport,
  DxTooltip,
  DxFormat,
} from "devextreme-vue/chart";
import dashboard from "@/navigation/horizontal/dashboard";
export default {
  components: {
    BCard,
    vSelect,
    BRow,
    BCol,
    BOverlay,
    customSelect,
    apexchart,
    BTabs,
    BTab,
    DxChart,
    DxSeries,
    DxValueAxis,
    DxTooltip,
    DxVisualRange,
    DxLabel,
    DxConstantLine,
    DxLegend,
    DxCommonSeriesSettings,
    DxFormat,
    DxExport,
    BFormInput,
    BIcon,
    BButton,
    BInputGroup,
    BInputGroupAppend,
    BButtonGroup,
  },
  data() {
    return {
      highAverage: 8,
      lowAverage: 0,
      dataSource: [],
      docyearlist: [],
      lang: "",
      show: false,
      isBusy: false,
      items: [],
      optionsPie: {},
      seriesPie: [1, 1],
      optionsDonutMale: {},
      seriesDonutMale: [1, 1, 1, 1, 1],
      optionsBar: {},
      seriesBar: [],
      optionsOblast: {},
      seriesOblast: [],
      totalCount: {},
      filter: {
        schoolYearId: 0,
        docyear: 2024,
      },
      Data: {},
    };
  },
  created() {
    this.lang = localStorage.getItem("locale") || "ru";
    this.GetApplicantCountByOblast();
    this.GetApplicantCountByDirection();
    this.GetApplicantCountByGender();
    this.GetApplicatCountByJtdTestCategorytype();
  },
  methods: {
    customizePoint({ value }) {
      if (value > this.highAverage) {
        return { color: "#36CB78", hoverStyle: { color: "#36CB78" } };
      }
      if (value < this.lowAverage) {
        return { color: "#FF7C7C", hoverStyle: { color: "#FF7C7C" } };
      }
      return null;
    },

    customizeLabel({ value }) {
      if (value > this.highAverage) {
        return {
          visible: true,
          backgroundColor: "#36CB78",
          customizeText({ valueText }) {
            return `${valueText}`;
          },
        };
      }
      return null;
    },

    customizeText({ valueText }) {
      return `${valueText}&#176F`;
    },
    Refresh() {
      this.GetApplicantCountByOblast();
      this.GetApplicantCountByDirection();
      this.GetApplicantCountByGender();
      this.GetApplicatCountByJtdTestCategorytype();
    },

    GetApplicantCountByOblast() {
      this.show = true;
      GTOJTDDashboardService.GetApplicantCountByOblast(
        this.filter.schoolYearId,
        this.filter.docyear
      ).then((res) => {
        this.Data = res.data.data;
        this.show = false;
        const arr = res.data.data.map((item) => item.applicantcount);
        const max = Math.max(...arr);
        this.lowAverage = max * 0.3;
        this.highAverage = max * 0.7;
        this.seriesOblast = [
          {
            name: "Jami",
            data: res.data.data.map((item) => item.applicantcount),
          },
        ];

        this.optionsOblast = {
          chart: {
            type: "bar",
            height: 330,
            width: 750,
            stacked: true,
          },

          dataLabels: {
            enabled: true,
            formatter: function (val) {
              return val;
            },
            offsetX: 0,
            style: {
              fontSize: "12px",
              colors: ["#FFF"],
            },
          },
          plotOptions: {
            bar: {
              horizontal: true,
              borderRadius: 15,
              endingShape: "rounded",
            },
          },
          fill: {
            opacity: 1,
            colors: undefined,
            type: "gradient",
            gradient: {
              shade: "dark",
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: undefined,
              inverseColors: true,
              opacityFrom: 0.6,
              opacityTo: 1,
              stops: [0, 50, 100],
              colorStops: [
                {
                  offset: 10,
                  color: "#53A7F6",
                  opacity: 1,
                },
                {
                  offset: 80,
                  color: "#39CC60",
                  opacity: 50,
                },
              ],
            },
          },
          xaxis: {
            categories: res.data.data.map((item) => item.oblastname),
          },
        };
      });
    },

    GetApplicantCountByDirection() {
      GTOJTDDashboardService.GetApplicantCountByDirection(
        this.filter.schoolYearId,
        this.filter.docyear
      ).then((res) => {
        this.isBusy = false;
        // console.log(res.data.data.jtdtestdirectionname);
        this.seriesDonutMale = [
          ...res.data.data.map((item) => item.applicantcount),
        ];
        this.optionsDonutMale = {
          legend: {
            show: true,
            position: "right",
            fontSize: "16px",
            fontFamily: "Montserrat",
          },
          colors: ["#B759EB", "#50B5FF", "#82C43C", "#FF974A"],
          dataLabels: {
            enabled: true,
            formatter(val) {
              return `${parseFloat(val).toFixed(2)} %`;
            },
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: "2rem",
                    fontFamily: "Montserrat",
                  },
                  value: {
                    fontSize: "1rem",
                    fontFamily: "Montserrat",
                    formatter(val) {
                      return `${parseFloat(val).toFixed(2)} ta`;
                    },
                  },

                  total: {
                    show: true,
                    fontSize: "1.5rem",
                    label: this.$t("Total"),
                    formatter(w) {
                      return w.globals.seriesTotals.reduce((a, b) => {
                        return a + b == true ? "0%" : "100%";
                      }, 0);
                    },
                  },
                },
              },
            },
          },
          labels: [...res.data.data.map((item) => item.jtdtestdirectionname)],
        };
      });
    },

    GetApplicantCountByGender() {
      GTOJTDDashboardService.GetApplicantCountByGender(
        this.filter.schoolYearId,
        this.filter.docyear
      ).then((res) => {
        this.totalCount = res.data.data.applicantcount;
        this.seriesPie = [
          res.data.data.manapplicantcount,
          res.data.data.womanapplicantcount,
        ];
        this.optionsPie = {
          legend: {
            show: true,
            position: "right",
            fontSize: "16px",
            fontFamily: "Montserrat",
          },

          dataLabels: {
            enabled: true,
            formatter(val) {
              return `${parseFloat(val).toFixed(2)} %`;
            },
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: "2rem",
                    fontFamily: "Montserrat",
                  },
                  value: {
                    fontSize: "1rem",
                    fontFamily: "Montserrat",

                    formatter: function (val) {
                      return `${parseFloat(val).toFixed(2)} ta`;
                    },
                  },
                  total: {
                    show: true,
                    fontSize: "1.5rem",
                    label: this.$t("Total"),
                    formatter() {
                      return this.totalCount == 0 ? "0 ta" : "100%";
                    },
                  },
                },
              },
            },
          },
          colors: ["#50B5FF", "#F98BE9"],
          labels: [this.$t("Male"), this.$t("Female")],
        };
      });
    },

    GetApplicatCountByJtdTestCategorytype() {
      this.show = true;
      GTOJTDDashboardService.GetApplicatCountByJtdTestCategorytype(
        this.filter.schoolYearId,
        this.filter.docyear
      ).then((res) => {
        this.Data = res.data.data;
        this.show = false;
        const arr = res.data.data.map((item) => item.applicantcount);
        const max = Math.max(...arr);
        this.lowAverage = max * 0.3;
        this.highAverage = max * 0.7;
        this.seriesBar = [
          {
            name: "Jami",
            data: res.data.data.map((item) => item.applicantcount),
          },
        ];

        this.optionsBar = {
          chart: {
            type: "bar",
            height: 330,
            width: 750,
            stacked: true,
          },

          dataLabels: {
            enabled: true,
            formatter: function (val) {
              return val;
            },
            offsetX: 0,
            style: {
              fontSize: "12px",
              colors: ["#FFF"],
            },
          },
          plotOptions: {
            bar: {
              horizontal: true,
              borderRadius: 15,
              endingShape: "rounded",
            },
          },
          fill: {
            opacity: 1,
            colors: undefined,
            type: "gradient",
            gradient: {
              shade: "dark",
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: undefined,
              inverseColors: true,
              opacityFrom: 0.6,
              opacityTo: 1,
              stops: [0, 50, 100],
              colorStops: [
                {
                  offset: 10,
                  color: "#53A7F6",
                  opacity: 1,
                },
                {
                  offset: 80,
                  color: "#39CC60",
                  opacity: 50,
                },
              ],
            },
          },
          xaxis: {
            categories: res.data.data.map(
              (item) => item.jtdtestcategorytypename
            ),
          },
        };
      });
    },

    // GetApplicatCountByJTDTestDirection() {
    //   this.show = true;
    //   GTOJTDDashboardService.GetApplicatCountByJTDTestDirection(
    //     this.filter.schoolYearId
    //   ).then((res) => {
    //     this.Data = res.data.data;
    //     this.show = false;
    //     const arr = res.data.data.map((item) => item.applicantcount);
    //     const max = Math.max(...arr);
    //     this.lowAverage = max * 0.3;
    //     this.highAverage = max * 0.7;
    //       this.seriesBar = [
    //         {
    //           name: "Jami",
    //           data: res.data.data.map((item) => item.applicantcount),
    //         },
    //       ];

    //       this.optionsBar = {
    //         chart: {
    //           type: "bar",
    //           height: 330,
    //           width: 750,
    //           stacked: true,
    //         },

    //         dataLabels: {
    //           enabled: true,
    //           formatter: function (val) {
    //             return val;
    //           },
    //           offsetX: 0,
    //           style: {
    //             fontSize: "12px",
    //             colors: ["#FFF"],
    //           },
    //         },
    //         plotOptions: {
    //           bar: {
    //             horizontal: true,
    //             borderRadius: 15,
    //             endingShape: "rounded",
    //           },
    //         },
    //         fill: {
    //           opacity: 1,
    //           colors: undefined,
    //           type: 'gradient',
    //           gradient: {
    //             shade: 'dark',
    //             type: "horizontal",
    //             shadeIntensity: 0.5,
    //             gradientToColors: undefined,
    //             inverseColors: true,
    //             opacityFrom: .6,
    //             opacityTo: 1,
    //             stops: [0, 50, 100],
    //             colorStops: [
    //             {
    //                 offset: 10,
    //                 color: '#53A7F6',
    //                 opacity: 1
    //               },
    //               {
    //                 offset: 80,
    //                 color: '#39CC60',
    //                 opacity: 50
    //               },

    //             ]
    //           }
    //         },
    //         xaxis: {
    //           categories: res.data.data.map((item) => item.directionname),
    //         },
    //       };
    //   });
    // },
  },
};
</script>

<style lang="scss">
.jtd-dashboard {
  width: 100%;
  margin-bottom: 30px;
  margin-left: 0 !important;
  .dashboard-title {
    background-color: #e8d5f2;
    width: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    border-radius: 20px;
    .title {
      margin-bottom: 0;
      line-height: 20px;
      margin-left: 20px;
      color: #111;
      font-size: 20px;
      font-weight: 600;
    }
  }
}
.totalCount {
  position: absolute;
  bottom: -110px;
  right: -110px;
}
.cardStyle {
  text-align: center;
  display: flex !important;
  flex-direction: column;
  justify-content: center !important;
  align-content: center !important;
  align-items: center !important;
  background-color: #8568bc;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.scroll-item {
  max-height: 400px;
  overflow-y: auto;
}
</style>
