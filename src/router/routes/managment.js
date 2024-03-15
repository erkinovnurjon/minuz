export default [
  {
    path: '/managment/organization',
    name: 'organization',
    component: () => import('@/views/managment/organization/index.vue'),
    meta: {
      pageTitle: 'Organization',
      breadcrumb: [
        {
          text: 'Management',
        },
        {
          text: 'Organization',
          active: true,
        },
      ]
    },
  },
  {
    path: '/managment/organization/view/id=:id',
    name: 'ViewOrganization',
    component: () => import('@/views/managment/organization/view.vue'),
    meta: {
      pageTitle: 'ViewOrganization',
      breadcrumb: [
        {
          text: 'Management',
        },
        {
          text: 'Organization',
          active: true,
        },
        {
          text: 'ViewOrganization'
        },
      ]
    },
  },
  {
    path: '/managment/organizationtype',
    name: 'organizationtype',
    component: () => import('@/views/managment/organizationtype/index.vue'),
    meta: {
      pageTitle: 'OrganizationType',
      breadcrumb: [
        {
          text: 'Management',
        },
        {
          text: 'OrganizationType',
          active: true,
        },
        
      ]
    },
  },
  {
    path: '/managment/user',
    name: 'user',
    component: () => import('@/views/managment/user/index.vue'),
    meta: {
      pageTitle: 'User',
      breadcrumb: [
        {
          text: 'Management',
        },
        {
          text: 'User',
          active: true,
        },
      ]
    },
  },
  {
    path: '/managment/role',
    name: 'role',
    component: () => import('@/views/managment/role/index.vue'),
    meta: {
      pageTitle: 'Role',
      breadcrumb: [
        {
          text: 'Management',
        },
        {
          text: 'Role',
          active: true,
        },
      ]
    },
  },
  {
    path: '/managment/role/edit/id=:id',
    name: 'EditRole',
    component: () => import('@/views/managment/role/edit.vue'),
    meta: {
      pageTitle: 'EditRole',
      breadcrumb: [
        {
          text: 'Management',
        },
        {
          text: 'Role',
          active: true,
        },
        {
          text: 'EditRole',
          active: true,
        },
      ]
    },
  },
  {
    path: '/managment/table',
    name: 'Table',
    component: () => import('@/views/managment/table/index.vue'),
    meta: {
      pageTitle: 'Table',
      breadcrumb: [
        {
          text: 'Management',
        },
        {
          text: 'Table',
          active: true,
        },
      ]
    },
  },
  {
    path: '/managment/table/edit/id=:id',
    name: 'EditTable',
    component: () => import('@/views/managment/table/edit.vue'),
    meta: {
      pageTitle: 'EditTable',
      breadcrumb: [
        {
          text: 'Management',
        },
        {
          text: 'Table',
          active: true,
        },
        {
          text: 'EditTable',
          active: true,
        },
      ]
    },
  },
  {
    path: '/managment/fillgroupformbyedudirection',
    name: 'fillgroupformbyedudirection',
    component: () => import('@/views/managment/fillgroupformbyedudirection/index.vue'),
    meta: {
      pageTitle: 'fillgroupformbyedudirection',
      breadcrumb: [
        {
          text: 'Management',
        },
        {
          text: 'fillgroupformbyedudirection',
          active: true,
        },
        
      ]
    },
  },
  {
    path: '/managment/user/view/id=:id',
    name: 'ViewUser',
    component: () => import('@/views/managment/user/view.vue'),
    meta: {
      pageTitle: 'ViewUser',
      breadcrumb: [
        {
          text: 'Management',
        },
        {
          text: 'Organization',
          active: true,
        },
        {
          text: 'ViewUser'
        },
      ]
    },
  },
  {
    path: "/managment/callcenter",
    name: "callcenter",
    component: () => import("@/views/managment/callcenter/index.vue"),
    meta: {
      pageTitle: "CallCenter",
      breadcrumb: [
        {
          text: "Document",
        },
        {
          text: "CallCenter",
          active: true,
        },
      ],
    },
  },
  {
    path: "/managment/callcenter/statement",
    name: "statement",
    component: () => import("@/views/managment/callcenter/statement.vue"),
    meta: {
      pageTitle: "Statement",
      breadcrumb: [
        {
          text: "Document",
        },
        {
          text: "Statement",
          active: true,
        },
      ],
    },
  },
  // {
  //   path: '/document/callcenter/ParentListByPhoneNumber',
  //   name: 'ParentListByPhoneNumber',
  //   component: () => import('@/views/document/callcenter/ParentListByPhoneNumber.vue'),
  //   meta: {
  //     pageTitle: 'ParentListByPhoneNumber',
  //     breadcrumb: [
  //       {
  //         text: 'Document',
  //       },
  //       {
  //         text: 'ParentListByPhoneNumber',
  //         active: true,
  //       },
  //     ]
  //   },
  // },
  // {
  //   path: '/document/callcenter/GetChildrenListByPhoneNumber',
  //   name: 'GetChildrenListByPhoneNumber',
  //   component: () => import('@/views/document/callcenter/GetChildrenListByPhoneNumber.vue'),
  //   meta: {
  //     pageTitle: 'GetChildrenListByPhoneNumber',
  //     breadcrumb: [
  //       {
  //         text: 'Document',
  //       },
  //       {
  //         text: 'GetChildrenListByPhoneNumber',
  //         active: true,
  //       },
  //     ]
  //   },
  // },
  // {
  //   path: '/document/callcenter/GetAdmissionAppListByPhoneNumber',
  //   name: 'GetAdmissionAppListByPhoneNumber',
  //   component: () => import('@/views/document/callcenter/GetAdmissionAppListByPhoneNumber.vue'),
  //   meta: {
  //     pageTitle: 'GetAdmissionAppListByPhoneNumber',
  //     breadcrumb: [
  //       {
  //         text: 'Document',
  //       },
  //       {
  //         text: 'GetAdmissionAppListByPhoneNumber',
  //         active: true,
  //       },
  //     ]
  //   },
  // },
  // {
  //   path: '/document/callcenter/GetAdmissionAppListByRegNumber',
  //   name: 'GetAdmissionAppListByRegNumber',
  //   component: () => import('@/views/document/callcenter/GetAdmissionAppListByRegNumber.vue'),
  //   meta: {
  //     pageTitle: 'GetAdmissionAppListByRegNumber',
  //     breadcrumb: [
  //       {
  //         text: 'Document',
  //       },
  //       {
  //         text: 'GetAdmissionAppListByRegNumber',
  //         active: true,
  //       },
  //     ]
  //   },
  // },
  // {
  //   path: '/document/callcenter/GetAdmissionAppListByParentId',
  //   name: 'GetAdmissionAppListByParentId',
  //   component: () => import('@/views/document/callcenter/GetAdmissionAppListByParentId.vue'),
  //   meta: {
  //     pageTitle: 'GetAdmissionAppListByParentId',
  //     breadcrumb: [
  //       {
  //         text: 'Document',
  //       },
  //       {
  //         text: 'GetAdmissionAppListByParentId',
  //         active: true,
  //       },
  //     ]
  //   },
  // },
  // {
  //   path: '/document/callcenter/GetAdmissionAppListByChildrenId',
  //   name: 'GetAdmissionAppListByChildrenId',
  //   component: () => import('@/views/document/callcenter/GetAdmissionAppListByChildrenId.vue'),
  //   meta: {
  //     pageTitle: 'GetAdmissionAppListByChildrenId',
  //     breadcrumb: [
  //       {
  //         text: 'Document',
  //       },
  //       {
  //         text: 'GetAdmissionAppListByChildrenId',
  //         active: true,
  //       },
  //     ]
  //   },
  // },
  {
    path: "/managment/callcenter/GetParentListByDocument",
    name: "GetParentListByDocument",
    component: () => import("@/views/managment/callcenter/GetParentListByDocument.vue"),
    meta: {
      pageTitle: "GetParentListByDocument",
      breadcrumb: [
        {
          text: "Document",
        },
        {
          text: "GetParentListByDocument",
          active: true,
        },
      ],
    },
  },
  {
    path: "/managment/callcenter/GetChildrenListByDocument",
    name: "GetChildrenListByDocument",
    component: () =>
      import("@/views/managment/callcenter/GetChildrenListByDocument.vue"),
    meta: {
      pageTitle: "GetChildrenListByDocument",
      breadcrumb: [
        {
          text: "Document",
        },
        {
          text: "GetChildrenListByDocument",
          active: true,
        },
      ],
    },
  },
  {
    path: "/managment/callcenter/quota",
    name: "quota",
    component: () => import("@/views/managment/callcenter/quota.vue"),
    meta: {
      pageTitle: "Quota",
      breadcrumb: [
        {
          text: "Document",
        },
        {
          text: "Quota",
          active: true,
        },
      ],
    },
  },
]
