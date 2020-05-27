import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';

import * as moment from 'moment';

// Translate
import { CommonService } from './../../../services/common.service';
import { StorageService } from './../../../services/storage.service';
import { AuthConstants } from '../../../config/auth-constants';
import { DocService } from './../../../services/doc.service';
import { DialogUpdateDonViComponent } from './dialog-update-donvi.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donvi',
  templateUrl: './donvi.component.html'
})
export class DonViComponent implements OnInit {
  displayedColumns = ['index', 'code', 'name', 'description', 'actions'];
  dataSource: MatTableDataSource<any>;
  selectedRow: boolean;
  today: String;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  permission: any;
  searchForm: FormGroup;
  get fs() { return this.searchForm.controls; }

  constructor(
    private common: CommonService,
    private fb: FormBuilder,
    private docService: DocService,
    public dialog: MatDialog,
    private router: Router,
    private storageService: StorageService
  ) {
    this.storageService.get(AuthConstants.PERMISSION).then(res => {
      this.permission = res;
    });
  }

  ngOnInit() {
    this.createSearchForm();
    this.onSearch();
    if (!this.permission.DH_VB_DonViNgoai._view) {
      this.router.navigate(['/']);
    }
  }

  createSearchForm() {
    this.searchForm = this.fb.group(
      {
        id_donVis: [null],
        tuNgay: [null],
        denNgay: [null]
      });
  }

  onSearch() {
    this.getDonVi();
  }
  getDonVi() {
    this.docService.getDonViNgoai(this.searchForm.value, this.common.DH_VB_DonViNgoai.View).subscribe(res => {
      if (res.error) {
        this.common.messageErr(res);
        this.dataSource = new MatTableDataSource();
      } else {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }
  // openDetailDialog(data: any): void {

  //   const dialogRef = this.dialog.open(DialogDetailDonViComponent, {
  //     width: '500px',
  //     data: data
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //   });
  // }
  openUpdateDialog(data: any): void {
    const dialogRef = this.dialog.open(DialogUpdateDonViComponent, {
      width: '700px',
      height: '80%',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onSearch();
        this.common.messageRes(result);
      }
    });
  }
  openDeleteDialog(data: any): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: { delete: 1, name: data.maSoSuCo }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        this.docService.deleteDonViNgoai({ id: data.id }, this.common.DH_VB_DonViNgoai.Delete).subscribe(res => {
          if (res.error) {
            this.common.messageErr(res);
          } else {
            this.onSearch();
            this.common.messageRes(res.message);
          }
        });
      }
    });
  }
  onSelectedRow(row: any) {
    if (!this.selectedRow) {
      this.selectedRow = row;
    } else {
      this.selectedRow = row;
    }
  }
}
