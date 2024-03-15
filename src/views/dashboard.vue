<template>
  <div>
    <b-overlay :show="show" v-if="!!$can('AdminDashboardView', 'permissions')">
      <b-row class="jtd-dashboard">
        <b-col
          sm="12"
          md="12"
          style="positon: relative; bottom: -3vh"
        >
          <b-card class="mb-0 pb-0">
            <b-col  >
              <div class="d-flex">
            <div class="ml-2 mt-2 text-left" style="width: 20%">
            <b-button-group @click="Search">
              <b-button
                @click="filter.year = 2022"
                :variant="
                  filter.year == 2022 ? 'primary' : 'outline-primary'
                "
                size="md"
              >
                {{ $t("2022") }}
              </b-button>
              <b-button
                @click="filter.year = 2023"
                :variant="
                  filter.year == 2023 ? 'primary' : 'outline-primary'
                "
                size="md"
              >
                {{ $t("2023") }}
              </b-button>
              <b-button
                @click="filter.year = 2024"
                :variant="
                  filter.year == 2024 ? 'primary' : 'outline-primary'
                "
                size="md"
              >
                {{ $t("2024") }}
              </b-button>
            </b-button-group>
          </div>
          <div class="ml-2 mt-2 text-right" style="width: 160%">
            <b-button-group @click="Search">
            <b-button
              v-for="(item, index) in initiativtypelist"
              :key="index"
              @click="filter.initiativtypeid = item.id"
              :variant="
                filter.initiativtypeid == item.id
                  ? 'primary'
                  : 'outline-primary'
              "
              size="md"
            >
              {{ item.name }}
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
          class="mb-0 pb-0 mt-2"
          style="positon: relative; bottom: -3vh"
        >
          <b-card class="mb-0 pb-0">
            <b-row>
              <b-col class="" sm="12" md="9" lg="12">
                <div class="dashboard-title">
                  <h3 class="title">{{ $t("dashboard1") }}</h3>
                </div>
              </b-col>
            </b-row>
            <div class="mb-2 mt-2 d-flex justify-content-center">
              <apexchart
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
                  {{
                    $options.filters.currency(totalAll, {
                      symbol: "",
                      thousandsSeparator: " ",
                      fractionCount: 0,
                    })
                  }}
                </h4>
                <h4 style="color: white; font-size: 14px; wont-weight: 900">
                  {{ $t("totalCount") }}
                </h4>
              </div>
            </div>
          </b-card>
        </b-col>
        <b-col
          sm="12"
          md="6"
          class="mb-0 pb-0 mt-2"
          style="positon: relative; bottom: -3vh"
        >
          <b-card class="mb-3 pb-0">
            <b-row>
              <b-col class="" sm="12" md="9" lg="12">
                <div class="dashboard-title">
                  <h3 class="title">{{ $t("dashboard2") }}</h3>
                </div>
              </b-col>
            </b-row>
            <div class="mb-2 mt-2 d-flex justify-content-center">
              <apexchart
                type="donut"
                :options="optionsPie"
                :series="seriesPie"
              ></apexchart>
            </div>
          </b-card>
        </b-col>
        <b-row class="jtd-dashboard" style="margin-top: 20px;">
          <b-col lg="6" sm="12" md="6" >
            <b-card clas>
              <b-row>
                <b-col class="" sm="12">
                  <div class="dashboard-title">
                    <h3 class="title">{{ $t("dashboard3") }}</h3>
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
          <b-col lg="6" sm="12" md="6" >
            <b-card class="mt-0 pt-0">
              <b-row>
                <b-col class="" sm="12" >
                  <div class="dashboard-title">
                    <h3 class="title" style="margin-left: 70px;">{{ $t("dashboard4") }}</h3>
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
            </b-card>
          </b-col>
        </b-row>
      </b-row>
    </b-overlay>
    <div v-else-if="$can('Tsh5DashboardView', 'permissions')">
      <GTODashboard />
    </div>
    <div v-else>
      <h2 style="margin-top: 60px;">Ma'lumot topilmadi</h2>
    </div>
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
import GTODashboard from "./GTODashboard.vue";
import vSelect from "vue-select";
import customSelect from "./components/customSelect.vue";
import apexchart from "vue-apexcharts";
import ReportService from "@/services/report/report.service";
import HelperService from "@/services/others/helper.service";
// import GTOJTDDashboardService from "@/services/others/gtojtddashboard.service";
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
    GTODashboard,
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
      show: false,
      isBusy: false,
      items: [],
      InitiativTypeList:[],
      optionsPie: {},
      seriesPie: [1, 1],
      optionsDonutMale: {},
      seriesDonutMale: [1, 1, 1, 1],
      optionsBar: {},
      seriesBar: [],
      initiativtypelist:[],
      InitiativTypeList1:[],
      optionsOblast: {},
      seriesOblast: [],
      filter: {
        regionid: 0,
        year: 2024,
        oblastid: 0,
        regionsectorid: 0,
        seasonid:2,
        initiativtypeid:1
      },
      Data: {},
      totalCountInitiativ: 0,
      totalMale1: 0,
      totalMale2: 0,
      totalMale3: 0,
      totalMale4: 0,
      totalMale5: 0,
      totalFemale1: 0,
      totalFemale2: 0,
      totalFemale3: 0,
      totalFemale4: 0,
      totalFemale5: 0,
      totalCount: 0,
      totalAll: 0,
      totalAllMale: 0,
      totalAllFemale: 0,
    };
  },
  async created() {
   await HelperService.GetAllInitiativType()
      .then((res) => {
        this.initiativtypelist = res.data;
      })
      .catch((error) => {
        this.$message(error.response);
      });
    
    await this.Refresh();
    await this.calculate1();
    await this.refreshTotal();
    await this.dashboard2();
    this.GetRegistrationOfAthleteCountForDashboard();
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
    refreshTotal() {
      this.show = true;
      this.isBusy = true;
       ReportService.GetRegistrationOfAthleteCountByInitiativType(
        this.filter.year,
        this.filter.seasonid,
        this.filter.initiativtypeid
      ).then((res) => {
        this.InitiativTypeList = res.data.data[0];
        // const selectedValues =  this.InitiativTypeList.map(entry => entry.count)
      // Now you have the selected values with id, combinedValue in the selectedValues array
      // this.InitiativTypeList1 = selectedValues;
      this.calculate();
      this.calculateTotal()
        this.show = false;
        this.isBusy = false;
      });
    },
    calculateTotal() {
      this.totalCountInitiativ = this.InitiativTypeList.districtcount + this.InitiativTypeList.schoolcount + this.InitiativTypeList.profeducount + this.InitiativTypeList.highereducount
    },
    refreshTotal1() {
      this.totalMale1 = 0;
      this.totalFemale1 = 0;
      this.totalMale2 = 0;
      this.totalFemale2 = 0;
      this.totalMale3 = 0;
      this.totalFemale3 = 0;
      this.totalMale4 = 0;
      this.totalFemale4 = 0;
      this.totalMale5 = 0;
      this.totalFemale5 = 0;
      this.totalAll = 0;
      this.totalAllMale = 0;
      this.totalAllFemale = 0;
    },
    calculate1() {
      var self = this;
      self.refreshTotal1();
      self.items?.forEach(function (item) {
        self.totalMale1 += item.agecategory1count * 1;
        self.totalFemale1 += item.agecategory2count * 1;

        self.totalMale2 += item.agecategory3count * 1;
        self.totalFemale2 += item.agecategory4count * 1;

        self.totalMale3 += item.agecategory5count * 1;
        self.totalFemale3 += item.agecategory6count * 1;

        self.totalMale4 += item.agecategory7count * 1;
        self.totalFemale4 += item.agecategory8count * 1;

        self.totalMale5 += item.agecategory9count * 1;
        self.totalFemale5 += item.agecategory10count * 1;
        self.totalAll += item.totalcount * 1;
        self.totalAllMale += item.totalmalecount * 1;
        self.totalAllFemale += item.totalfemalecount * 1;
      });
          },
    calculate() {
      this.seriesDonutMale = [this.InitiativTypeList.districtcount ? this.InitiativTypeList.districtcount : 1, this.InitiativTypeList.schoolcount ? this.InitiativTypeList.schoolcount : 1, this.InitiativTypeList.profeducount ? this.InitiativTypeList.profeducount : 1, this.InitiativTypeList.highereducount ? this.InitiativTypeList.highereducount : 1 ],
      this.optionsDonutMale = {
        chart: {
          width: 450,
          type: "donut",
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
                    // eslint-disable-next-line radix
                    return `${parseFloat(val).toFixed(2)} ta`;
                  },
                },
                total: {
                  show: true,
                  fontSize: "1.5rem",
                  label: this.$t("Total"),
                  formatter() {
                    return this.totalCount == 0 ? "0%" : "100%";
                  },
                },
              },
            },
          },
        },
        fill: {
          type: 'gradient',
        },
        // colors: this.InitiativTypeList.length == 1?['#50B5FF']: this.InitiativTypeList.length ==2 ? ['#50B5FF','#F98BE9']:this.InitiativTypeList.length ==3 ? ['#50B5FF','#F98BE9','#50B5FF'] :this.InitiativTypeList.length ==3 ? ['#50B5FF','#F98BE9','#50B5FF','#F98BE9']:['#50B5FF'],
        labels: [this.$t('mfyname'), this.$t('organization'), this.$t('OrgProfEdu'), this.$t('oliytalim')],
        colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
        legend: {
          show: true,
          formatter: function(seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
          },
        },
        responsive: [{
          breakpoint: 700,
          options: {
            legend: {
                show: false
            }
          }
        }]
      };
    },
    async Search() {
      await this.Refresh();
      await this.refreshTotal();
      await this.calculate1();
      await this.dashboard2();
      this.GetRegistrationOfAthleteCountForDashboard();
    },
    GetRegistrationOfAthleteCountForDashboard() {
      this.show = true;
      ReportService.GetRegistrationOfAthleteCountForDashboard(
        this.filter.year,
        this.filter.seasonid,
        this.filter.initiativtypeid
      ).then((res) => {
        this.Data = res.data.data;
        this.show = false;
        const arr = res.data.data.map((item) => item.count);
        const max = Math.max(...arr);
        this.lowAverage = max * 0.3;
        this.highAverage = max * 0.7;
        // console.log(max); // 👉️ 3
        this.dataSource = [
          {
            day: res.data.data.map((item) => item.oblastname)[0],
            value: res.data.data.map((item) => item.count)[0],
          },
          {
            day: res.data.data.map((item) => item.oblastname)[1],
            value: res.data.data.map((item) => item.count)[1],
          },
          {
            day: res.data.data.map((item) => item.oblastname)[2],
            value: res.data.data.map((item) => item.count)[2],
          },
          {
            day: res.data.data.map((item) => item.oblastname)[3],
            value: res.data.data.map((item) => item.count)[3],
          },
          {
            day: res.data.data.map((item) => item.oblastname)[4],
            value: res.data.data.map((item) => item.count)[4],
          },
          {
            day: res.data.data.map((item) => item.oblastname)[5],
            value: res.data.data.map((item) => item.count)[5],
          },
          {
            day: res.data.data.map((item) => item.oblastname)[6],
            value: res.data.data.map((item) => item.count)[6],
          },
          {
            day: res.data.data.map((item) => item.oblastname)[7],
            value: res.data.data.map((item) => item.count)[7],
          },
          {
            day: res.data.data.map((item) => item.oblastname)[8],
            value: res.data.data.map((item) => item.count)[8],
          },
          {
            day: res.data.data.map((item) => item.oblastname)[9],
            value: res.data.data.map((item) => item.count)[9],
          },
          {
            day: res.data.data.map((item) => item.oblastname)[10],
            value: res.data.data.map((item) => item.count)[10],
          },
          {
            day: res.data.data.map((item) => item.oblastname)[11],
            value: res.data.data.map((item) => item.count)[11],
          },
          {
            day: res.data.data.map((item) => item.oblastname)[12],
            value: res.data.data.map((item) => item.count)[12],
          },
          {
            day: res.data.data.map((item) => item.oblastname)[13],
            value: res.data.data.map((item) => item.count)[13],
          },
        ];
          this.seriesOblast = [
            {
              name: "Jami",
              data: res.data.data.map((item) => item.count),
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
              type: 'gradient',
              gradient: {
                shade: 'dark',
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: .6,
                opacityTo: 1,
                stops: [0, 50, 100],
                colorStops: [
                {
                    offset: 10,
                    color: '#53A7F6',
                    opacity: 1
                  },
                  {
                    offset: 80,
                    color: '#39CC60',
                    opacity: 50
                  },
                  
                ]
              }
            },
            xaxis: {
              categories: res.data.data.map((item) => item.oblastname),
            },
          };
      });
    },
    async Refresh() {
      this.show = true;
      this.isBusy = true;
      await ReportService.GetRegistrationOfAthleteCountByCategory(
        this.filter.oblastid,
        this.filter.regionid,
        this.filter.regionsectorid,
        0,
        this.filter.year,
        this.filter.seasonid,
        this.filter.initiativtypeid
      ).then((res) => {
        this.items = res.data.data;
        this.totalCount = res.data.data.TotalCount;
        this.show = false;
        // this.calculate();

        this.seriesBar = [
          {
            name: "Jami",
            data: res.data.data.map(
              (item) => item.totalfemalecount + item.totalmalecount
            ),
          },
        ];
        this.optionsBar = {
          chart: {
            type: "bar",
            height: 330,
            width: 750,
          },
          colors: ["#36CB78"],
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
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: undefined,
              inverseColors: true,
              opacityFrom: .6,
              opacityTo: 1,
              stops: [0, 50, 100],
              colorStops: [
              {
                offset: 10,
                color: '#53A7F6',
                opacity: 1
              },
              {
                offset: 80,
                color: '#39CC60',
                opacity: 50
              },
              ]
            }
          },
          xaxis: {
            categories: res.data.data.map((item) => item.sporttypename),
          },
        };
        this.isBusy = false;
      });
    },
    dashboard2() {
      this.seriesPie = [this.totalAllMale, this.totalAllFemale];
      this.optionsPie = {
        chart: {
          width: 450,
          type: "donut",
        },
        legend: {
          show: true,
          position: "right",
          fontSize: "16px",
          fontFamily: "Montserrat",
          formatter: function(val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex] 
          }
        },

        dataLabels: {
          enabled: true,
          formatter(val) {
            // eslint-disable-next-line radix
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
                    // eslint-disable-next-line radix
                    return `${parseFloat(val).toFixed(2)} ta`;
                  },
                },
                total: {
                  show: true,
                  fontSize: "1.5rem",
                  label: this.$t("Total"),
                  formatter() {
                    return this.totalCount == 0 ? "0%" : "100%";
                  },
                },
              },
            },
          },
        },
        fill: {
          type: 'gradient',
        },
        colors: ['#50B5FF', '#F98BE9'],
        labels: [this.$t("Male"), this.$t("Female")],
      };
    },
  },
};
</script>
<style lang="scss">
.jtd-dashboard {
  width: 100%;
  margin-bottom: 30px;
  margin-left: 0 !important;
  .dashboard-title {
    background-color: #E8D5F2;
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
  background-color: #8568BC;
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
