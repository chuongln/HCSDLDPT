import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BanDoComponent } from './bando.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Map'
    },
       component: BanDoComponent
  }
      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BanDoRoutingModule { }
