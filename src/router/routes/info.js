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
];
