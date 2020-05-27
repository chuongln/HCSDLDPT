import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ChangePassComponent } from './change-pass.component';
import { ChangePassRoutingModule } from './change-pass-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChangePassRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ ChangePassComponent ]
})
export class ChangePassModule { }
