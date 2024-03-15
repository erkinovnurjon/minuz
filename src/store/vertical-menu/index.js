import { $themeConfig } from '@themeConfig'

export default {
  namespaced: true,
  state: {
    isVerticalMenuCollapsed: $themeConfig.layout.menu.isCollapsed,
    MicroterritoryFilter : {
      oblastid : 0,
      regionid : 0,
      mfyid : 0,
      streetid : 0,
      Search : ''
    },
    StatementFilter : {
      oblastid : 0,
      regionid : 0,
      organizationid : 0,
      Search : '',
      statusid : 0
    },
    TestResultFilter: {
      oblastId: 0,
      regionId: 0,
      organizationId : '',
      educationDirectionId : '',
      schoolSubjectId : '',
      educationLanguageId : "",
      admissionTypeId : 2
    },
    PaginationFilter: {
      id: 0,
      oblastid: 0,
      regionid: 0,
      regionsectorid: 0,
      mfyid: 0,
      genderid: 0,
      competitionstageid: 0,
      agecategoryid: 0,
      sporttypeid: 0,
      Search: "",
      Sort: "",
      Order: "asc",
      perPage: 20,
      currentPage: 1,
      perPageOptions: [10, 20, 50, 100],
      totalRows: 0,
      PageNumber: 0
    },
    TeamNextStageAppointmentFilter: {
      oblastid: 0,
      regionid: 0,
      regionsectorid: 0,
      mfyid: 0,
      genderid: 0,
      competitionstageid: 0,
      agecategoryid: 0,
      sporttypeid: 0,
      Search: "",
      Sort: "",
      Order: "asc",
      perPage: 20,
      currentPage: 1,
      perPageOptions: [10, 20, 50, 100],
      totalRows: 0,
      PageNumber: 0
    },
    AssessmentCriteria: null
  },
  getters: {},
  mutations: {
    UPDATE_VERTICAL_MENU_COLLAPSED(state, val) {
      state.isVerticalMenuCollapsed = val
    },
  },
  actions: {},
}
