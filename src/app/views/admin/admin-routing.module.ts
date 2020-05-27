import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalAccountComponent } from './portal-account/portal-account.component';
import { RoleComponent } from './role/role.component';
import { PermissionComponent } from './permission/permission.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Admin'
    },
    children: [
      {
        path: '',
        redirectTo: 'portal-account'
      },
      {
        path: 'portal-account',
        component: PortalAccountComponent,
        data: {
          title: 'Account'
        }
      },
      {
        path: 'role',
        component: RoleComponent,
        data: {
          title: 'Role'
        }
      },
      {
        path: 'permission',
        component: PermissionComponent,
        data: {
          title: 'Permission'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
