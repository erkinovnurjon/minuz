export default [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/views/dashboard.vue"),
    meta: {
      // resource: 'Auth',
      // redirectIfLoggedIn: true,
      pageTitle: "Dashboard",
      breadcrumb: [
        {
          text: "dashboard",
        },
        {
          text: "Dashboard",
          active: true,
        },
      ],
    },
  },
  {
    path: "/gto-dashboard",
    name: "GTODashboard",
    component: () => import("@/views/GTODashboard.vue"),
    meta: {
      resource: 'Auth',
      // redirectIfLoggedIn: true,
      pageTitle: "GTODashboard",
      breadcrumb: [
        {
          text: "gtodashboard",
        },
        {
          text: "GTODashboard",
          active: true,
        },
      ],
    },
  },
]