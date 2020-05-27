// Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AngularMaterial } from '../../angular-material';
import { MomentModule } from 'ngx-moment';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule} from 'primeng/treetable';
import { TreeViewModule } from '@progress/kendo-angular-treeview';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Components Routing
import { AdminRoutingModule } from './admin-routing.module';
import { PortalAccountComponent } from './portal-account/portal-account.component';
import { PortalAccountAddComponent } from './portal-account/portal-account-add.component';
import { PortalAccountEditComponent } from './portal-account/portal-account-edit.component';
import { RoleComponent } from './role/role.component';
import { PermissionComponent } from './permission/permission.component';
// Translate
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RoleUpdateComponent } from './dialog/role-update.component';
import { PermissionUpdateComponent } from './dialog/permission-update.component';

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    BsDropdownModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AngularMaterial,
    MomentModule,
    MatProgressSpinnerModule,
    TreeModule,
    TreeTableModule,
    TreeViewModule
  ],
  entryComponents: [
    PortalAccountAddComponent,
    PortalAccountEditComponent,
    RoleUpdateComponent,
    PermissionUpdateComponent,
  ],
  declarations: [
    PortalAccountComponent,
    PortalAccountAddComponent,
    PortalAccountEditComponent,
    RoleComponent,
    PermissionComponent,
    RoleUpdateComponent,
    PermissionUpdateComponent
  ]
})
export class AdminModule { }
