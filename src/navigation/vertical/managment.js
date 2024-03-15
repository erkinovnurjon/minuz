export default [
    {
      header: 'Management',
      visible:[
        "OrganizationView",
        "OrganizationTypeView",
        "ManagementView",
        "UserView",
        "RoleView",
      ],
    },
    {
      title: 'Management',
      icon: 'SettingsIcon',
      visible:[
        "OrganizationView",
        "OrganizationTypeView",
        "ManagementView",
        "UserView",
        "RoleView",
        "CallCenterView"
      ],
    children : [
          {
            title : 'Organization',
            route: 'organization',
           visible : 'OrganizationView'
          },
          {
            title : 'OrganizationType',
            route: 'organizationtype',
           // visible : "OrganizationView"
           visible : "OrganizationTypeView"
          },
          {
            title : 'fillgroupformbyedudirection',
            route: 'fillgroupformbyedudirection',
            visible : "ManagementView"
          },
          {
            title : 'Table',
            route: 'Table',
           visible:"TableView"
          },
          {
            title : 'User',
            route: 'user',
           visible : 'UserView'
          },
          {
            title : 'Role',
            route: 'role',
           visible : 'RoleView'
          },
          {
            title: "CallCenter",
            route: "callcenter",
            visible: 'CallCenterView',
          },
      ]
    }
  ]
  