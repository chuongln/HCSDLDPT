import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BanDoRoutingModule } from './bando-routing.module';
import { BanDoComponent } from './bando.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletDrawModule } from '@asymmetrik/ngx-leaflet-draw';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AngularMaterial } from '../../angular-material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {TabViewModule} from 'primeng/tabview';
import { DialogUpdateDuongComponent } from './dialog/dialog-update-duong.component';

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    BanDoComponent,
    DialogUpdateDuongComponent
  ],
  entryComponents: [
    DialogUpdateDuongComponent
  ],
  imports: [
    CommonModule,
    BanDoRoutingModule,
    LeafletModule,
    LeafletDrawModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AngularMaterial,
    BsDropdownModule.forRoot(),
    MatTabsModule,
    TabViewModule
  ]
})
export class BanDoModule { }
