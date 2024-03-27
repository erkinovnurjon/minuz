export default [
  {
    path: "/info/bank",
    name: "bank",
    component: () => import("@/views/info/bank/index.vue"),
    meta: {
      pageTitle: "Bank",
      breadcrumb: [
        {
          text: "bank",
        },
        {
          text: "Bank",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/bank/edit/id=:id",
    name: "EditBank",
    component: () => import("@/views/info/bank/edit.vue"),
    meta: {
      pageTitle: "Bank",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "Bank",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/ifut",
    name: "ifut",
    component: () => import("@/views/info/ifut/index.vue"),
    meta: {
      pageTitle: "Ifut",
      breadcrumb: [
        {
          text: "ifut",
        },
        {
          text: "Ifut",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/ifut/edit/id=:id",
    name: "EditIfut",
    component: () => import("@/views/info/ifut/edit.vue"),
    meta: {
      pageTitle: "Ifut",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "Ifut",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/basecalculationamount",
    name: "basecalculationamount",
    component: () => import("@/views/info/basecalculationamount/index.vue"),
    meta: {
      pageTitle: "basecalculationamount",
      breadcrumb: [
        {
          text: "basecalculationamount",
        },
        {
          text: "basecalculationamount",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/basecalculationamount/edit/id=:id",
    name: "EditBasecalculationamount",
    component: () => import("@/views/info/basecalculationamount/edit.vue"),
    meta: {
      pageTitle: "basecalculationamount",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "basecalculationamount",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/basestipendamount",
    name: "basestipendamount",
    component: () => import("@/views/info/basestipendamount/index.vue"),
    meta: {
      pageTitle: "basestipendamount",
      breadcrumb: [
        {
          text: "basestipendamount",
        },
        {
          text: "basestipendamount",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/basestipendamount/edit/id=:id",
    name: "Editbasestipendamount",
    component: () => import("@/views/info/basestipendamount/edit.vue"),
    meta: {
      pageTitle: "basestipendamount",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "basestipendamount",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/basecomputationamount",
    name: "basecomputationamount",
    component: () => import("@/views/info/basecomputationamount/index.vue"),
    meta: {
      pageTitle: "basecomputationamount",
      breadcrumb: [
        {
          text: "basecomputationamount",
        },
        {
          text: "basecomputationamount",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/basecomputationamount/edit/id=:id",
    name: "Editbasecomputationamount",
    component: () => import("@/views/info/basecomputationamount/edit.vue"),
    meta: {
      pageTitle: "basecomputationamount",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "basecomputationamount",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/country",
    name: "country",
    component: () => import("@/views/info/country/index.vue"),
    meta: {
      pageTitle: "Country",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "Country",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/country/edit/id=:id",
    name: "EditCountry",
    component: () => import("@/views/info/country/edit.vue"),
    meta: {
      pageTitle: "country",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "country",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/region",
    name: "region",
    component: () => import("@/views/info/region/index.vue"),
    meta: {
      pageTitle: "Region",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "Region",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/region/edit/id=:id",
    name: "EditRegion",
    component: () => import("@/views/info/region/edit.vue"),
    meta: {
      pageTitle: "Region",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "Region",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/district",
    name: "district",
    component: () => import("@/views/info/district/index.vue"),
    meta: {
      pageTitle: "district",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "district",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/district/edit/id=:id",
    name: "EditDistrict",
    component: () => import("@/views/info/district/edit.vue"),
    meta: {
      pageTitle: "district",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "district",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/faculty",
    name: "faculty",
    component: () => import("@/views/info/faculty/index.vue"),
    meta: {
      pageTitle: "Faculty",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "Faculty",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/faculty/edit/id=:id",
    name: "EditFaculty",
    component: () => import("@/views/info/faculty/edit.vue"),
    meta: {
      pageTitle: "Faculty",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "Faculty",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/eduarea",
    name: "eduarea",
    component: () => import("@/views/info/eduarea/index.vue"),
    meta: {
      pageTitle: "eduarea",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "eduarea",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/eduarea/edit/id=:id",
    name: "EditEduarea",
    component: () => import("@/views/info/eduarea/edit.vue"),
    meta: {
      pageTitle: "eduarea",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "eduarea",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/eduspecialityclassifier",
    name: "eduspecialityclassifier",
    component: () => import("@/views/info/eduspecialityclassifier/index.vue"),
    meta: {
      pageTitle: "eduspecialityclassifier",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "eduspecialityclassifier",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/eduspecialityclassifier/edit/id=:id",
    name: "Editeduspecialityclassifier",
    component: () => import("@/views/info/eduspecialityclassifier/edit.vue"),
    meta: {
      pageTitle: "eduspecialityclassifier",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "eduspecialityclassifier",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/eduspeciality",
    name: "eduspeciality",
    component: () => import("@/views/info/eduspeciality/index.vue"),
    meta: {
      pageTitle: "eduspeciality",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "eduspeciality",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/eduspeciality/edit/id=:id",
    name: "Editeduspeciality",
    component: () => import("@/views/info/eduspeciality/edit.vue"),
    meta: {
      pageTitle: "eduspeciality",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "eduspeciality",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/eduyear",
    name: "eduyear",
    component: () => import("@/views/info/eduyear/index.vue"),
    meta: {
      pageTitle: "eduyear",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "eduyear",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/eduyear/edit/id=:id",
    name: "Editeduyear",
    component: () => import("@/views/info/eduyear/edit.vue"),
    meta: {
      pageTitle: "eduyear",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "eduyear",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/edusemester",
    name: "edusemester",
    component: () => import("@/views/info/edusemester/index.vue"),
    meta: {
      pageTitle: "edusemester",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "edusemester",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/edusemester/edit/id=:id",
    name: "Editedusemester",
    component: () => import("@/views/info/edusemester/edit.vue"),
    meta: {
      pageTitle: "edusemester",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "edusemester",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/organizationaccount",
    name: "organizationaccount",
    component: () => import("@/views/info/organizationaccount/index.vue"),
    meta: {
      pageTitle: "organizationaccount",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "organizationaccount",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/organizationaccount/edit/id=:id",
    name: "Editorganizationaccount",
    component: () => import("@/views/info/organizationaccount/edit.vue"),
    meta: {
      pageTitle: "organizationaccount",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "organizationaccount",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/edustudyduration",
    name: "edustudyduration",
    component: () => import("@/views/info/edustudyduration/index.vue"),
    meta: {
      pageTitle: "edustudyduration",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "edustudyduration",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/edustudyduration/edit/id=:id",
    name: "Editedustudyduration",
    component: () => import("@/views/info/edustudyduration/edit.vue"),
    meta: {
      pageTitle: "edustudyduration",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "edustudyduration",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/exceptionreason",
    name: "exceptionreason",
    component: () => import("@/views/info/exceptionreason/index.vue"),
    meta: {
      pageTitle: "exceptionreason",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "exceptionreason",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/exceptionreason/edit/id=:id",
    name: "Editexceptionreason",
    component: () => import("@/views/info/exceptionreason/edit.vue"),
    meta: {
      pageTitle: "exceptionreason",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "exceptionreason",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/citizenship",
    name: "citizenship",
    component: () => import("@/views/info/citizenship/index.vue"),
    meta: {
      pageTitle: "citizenship",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "citizenship",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/citizenship/edit/id=:id",
    name: "Editcitizenship",
    component: () => import("@/views/info/citizenship/edit.vue"),
    meta: {
      pageTitle: "citizenship",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "citizenship",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/nationality",
    name: "nationality",
    component: () => import("@/views/info/nationality/index.vue"),
    meta: {
      pageTitle: "nationality",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "nationality",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/nationality/edit/id=:id",
    name: "Editnationality",
    component: () => import("@/views/info/nationality/edit.vue"),
    meta: {
      pageTitle: "nationality",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "nationality",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/eduform",
    name: "eduform",
    component: () => import("@/views/info/eduform/index.vue"),
    meta: {
      pageTitle: "eduform",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "eduform",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/eduform/edit/id=:id",
    name: "Editeduform",
    component: () => import("@/views/info/eduform/edit.vue"),
    meta: {
      pageTitle: "eduform",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "eduform",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/person",
    name: "person",
    component: () => import("@/views/info/person/index.vue"),
    meta: {
      pageTitle: "person",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "person",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/person/edit/id=:id",
    name: "Editperson",
    component: () => import("@/views/info/person/edit.vue"),
    meta: {
      pageTitle: "person",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "person",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/studentcategory",
    name: "studentcategory",
    component: () => import("@/views/info/studentcategory/index.vue"),
    meta: {
      pageTitle: "studentcategory",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "studentcategory",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/studentcategory/edit/id=:id",
    name: "Editstudentcategory",
    component: () => import("@/views/info/studentcategory/edit.vue"),
    meta: {
      pageTitle: "studentcategory",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "studentcategory",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/masterstudentresult",
    name: "masterstudentresult",
    component: () => import("@/views/info/masterstudentresult/index.vue"),
    meta: {
      pageTitle: "masterstudentresult",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "masterstudentresult",
          active: true,
        },
      ],
    },
  },
  {
    path: "/info/masterstudentresult/edit/id=:id",
    name: "Editmasterstudentresult",
    component: () => import("@/views/info/masterstudentresult/edit.vue"),
    meta: {
      pageTitle: "masterstudentresult",
      breadcrumb: [
        {
          text: "Info",
        },
        {
          text: "masterstudentresult",
          active: true,
        },
      ],
    },
  },
];
