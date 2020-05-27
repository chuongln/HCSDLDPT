import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    // badge: {
    //   variant: 'info',
    //   text: 'NEW'
    // }
  },
  {
    name: 'Admin',
    url: '/admin',
    icon: 'icon-people',
    children: [
      {
        name: 'Account',
        url: '/admin/portal-account',
        icon: 'icon-user'
      }
    ]
  },
  {
    name: 'SCYK',
    url: '/scyk',
    icon: 'icon-setting',
    children: [
      {
        name: 'DM',
        url: '/scyk/mdtt',
        icon: 'icon-user',
        children: [
          {
            name: 'MDTT',
            url: '/scyk/mdtt',
            icon: 'icon-user'
          },
          {
            name: 'NT',
            url: '/scyk/nt',
            icon: 'icon-user'
          },
          {
            name: 'NSC',
            url: '/scyk/nsc',
            icon: 'icon-user'
          },
          {
            name: 'NNGR',
            url: '/scyk/nngr',
            icon: 'icon-user'
          },
          {
            name: 'DTXR',
            url: '/scyk/dtxr',
            icon: 'icon-user'
          },
          {
            name: 'MDAH',
            url: '/scyk/mdah',
            icon: 'icon-user'
          }
          ,
          {
            name: 'DTPH',
            url: '/scyk/dtph',
            icon: 'icon-user'
          }
        ]
      },

    ]
  },
  {
    divider: true
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  }
];
