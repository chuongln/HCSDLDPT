import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MucDoMatComponent } from './dm/mucdomat/mucdomat.component';
import { MucDoKhanComponent } from './dm/mucdokhan/mucdokhan.component';
import { LoaiVanBanComponent } from './dm/loaivanban/loaivanban.component';
import { LinhVucVanBanComponent } from './dm/linhvucvanban/linhvucvanban.component';
import { HinhThucGuiNhanComponent } from './dm/hinhthucguinhan/hinhthucguinhan.component';
import { CoQuanBanHanhComponent } from './dm/coquanbanhanh/coquanbanhanh.component';
import { DonViComponent } from './donvi/donvi.component';
import { CanBoComponent } from './canbo/canbo.component';
import { TaiLieuComponent } from './vanban/tailieu.component';
import { CongVanDiComponent } from './vanban/congvandi.component';
import { CongVanDenComponent } from './vanban/congvanden.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Doc'
    },
    children: [
      {
        path: '',
        redirectTo: 'tailieu'
      },
      {
        path: 'congvanden',
        component: CongVanDenComponent,
        data: {
          title: 'Van Ban'
        }
      },
      {
        path: 'congvandi',
        component: CongVanDiComponent,
        data: {
          title: 'Van Ban'
        }
      },
      {
        path: 'tailieu',
        component: TaiLieuComponent,
        data: {
          title: 'Van Ban'
        }
      },
      {
        path: 'donvingoai',
        component: DonViComponent,
        data: {
          title: 'Don Vi Ngoai'
        }
      },
      {
        path: 'donvingoai/canbo',
        component: CanBoComponent,
        data: {
          title: 'Can Bo'
        }
      },
      {
        path: 'coquanbanhanh',
        component: CoQuanBanHanhComponent,
        data: {
          title: 'Co Quan Ban Hanh'
        }
      },
      {
        path: 'hinhthucguinhan',
        component: HinhThucGuiNhanComponent,
        data: {
          title: 'Hinh Thuc Gui Nhan'
        }
      },
      {
        path: 'linhvucvanban',
        component: LinhVucVanBanComponent,
        data: {
          title: 'Linh Vuc Van Ban'
        }
      },
      {
        path: 'loaivanban',
        component: LoaiVanBanComponent,
        data: {
          title: 'Loai Van Ban'
        }
      },
      {
        path: 'mucdomat',
        component: MucDoMatComponent,
        data: {
          title: 'Muc Do Mat'
        }
      },
      {
        path: 'mucdokhan',
        component: MucDoKhanComponent,
        data: {
          title: 'Muc Do Khan'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocRoutingModule { }
