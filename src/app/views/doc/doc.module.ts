import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AngularMaterial } from '../../angular-material';
import { MomentModule } from 'ngx-moment';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EditorModule } from 'primeng/editor';
import { MatTabsModule } from '@angular/material/tabs';
// Translate
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LoaiVanBanComponent } from './dm/loaivanban/loaivanban.component';
import { HinhThucGuiNhanComponent } from './dm/hinhthucguinhan/hinhthucguinhan.component';
import { CoQuanBanHanhComponent } from './dm/coquanbanhanh/coquanbanhanh.component';
import { MucDoKhanComponent } from './dm/mucdokhan/mucdokhan.component';
import { MucDoMatComponent } from './dm/mucdomat/mucdomat.component';
import { LinhVucVanBanComponent } from './dm/linhvucvanban/linhvucvanban.component';
import { DialogUpdateDmComponent } from './dm/dialog/dialog-update-dm.component';
import { TaiLieuComponent } from './vanban/tailieu.component';
import { CanBoComponent } from './canbo/canbo.component';
import { DocRoutingModule } from '../doc/doc-routing.module';
import { DonViComponent } from './donvi/donvi.component';
import { DialogUpdateDonViComponent } from './donvi/dialog-update-donvi.component';
import { DialogUpdateCanBoComponent } from './canbo/dialog-update-canbo.component';
import { CongVanDenComponent } from './vanban/congvanden.component';
import { CongVanDiComponent } from './vanban/congvandi.component';
import { TreeModule } from 'primeng/tree';
import { DialogUpdateVanBanComponent } from './vanban/dialog-update-vanban.component';
import { QuillModule } from 'ngx-quill';
import { MatExpansionModule } from '@angular/material/expansion';
import { DialogDetailVanBanComponent } from './vanban/dialog-detail-vanban.component';
export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    LoaiVanBanComponent,
    HinhThucGuiNhanComponent,
    CoQuanBanHanhComponent,
    MucDoKhanComponent,
    MucDoMatComponent,
    LinhVucVanBanComponent,
    DialogUpdateDmComponent,
    TaiLieuComponent,
    CongVanDenComponent,
    CongVanDiComponent,
    CanBoComponent,
    DonViComponent,
    DialogUpdateDonViComponent,
    DialogUpdateCanBoComponent,
    DialogUpdateVanBanComponent,
    DialogDetailVanBanComponent,
  ],
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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AngularMaterial,
    MomentModule,
    MatProgressSpinnerModule,
    DocRoutingModule,
    InputTextareaModule,
    EditorModule,
    TreeViewModule,
    BsDropdownModule.forRoot(),
    MatTabsModule,
    TreeModule,
    QuillModule.forRoot({
      modules: {
        syntax: false,
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'indent': '-1' }, { 'indent': '+1' }],
          ['blockquote', 'code-block']
        ]
      }
    }),
    MatExpansionModule
  ],
  entryComponents: [
    DialogUpdateDmComponent,
    DialogUpdateDonViComponent,
    DialogUpdateCanBoComponent,
    DialogUpdateVanBanComponent,
    DialogDetailVanBanComponent,
  ],
})
export class DocModule { }
