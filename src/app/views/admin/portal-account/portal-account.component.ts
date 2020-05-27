import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PortalAccountService } from './../../../services/portal-account.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PortalAccountAddComponent } from './portal-account-add.component';
import { PortalAccountEditComponent } from './portal-account-edit.component';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { CommonService } from '../../../services/common.service';
import { StorageService } from '../../../services/storage.service';
import { AuthConstants } from '../../../config/auth-constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal-account',
  templateUrl: './portal-account.component.html'
})
export class PortalAccountComponent implements OnInit {
  displayedColumns = ['index', 'username', 'maCanBo', 'hoTen', 'lastAccessDate', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  searchForm: FormGroup;
  permission: any;
  get fs() { return this.searchForm.controls; }

  constructor(
    private fb: FormBuilder,
    private account: PortalAccountService,
    public dialog: MatDialog,
    private common: CommonService,
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
    if (!this.permission.HT_QuanLyNguoiDung._view) {
      this.router.navigate(['/']);
    }
  }

  createSearchForm() {
    this.searchForm = this.fb.group(
      {
        username: ['', []],
        maCanBo: ['', []],
        hoTen: ['', []]
      });
  }

  onSearch() {
    this.getAccount();
  }

  getAccount() {
    this.account.search(this.searchForm.value, this.common.HT_QuanLyNguoiDung.View).subscribe(res => {
      if (res.error) {
       this.common.messageErr(res);
      } else {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(PortalAccountAddComponent, {
      width: '700px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onSearch();
        this.common.messageRes(result);
      }
    });
  }

  openEditDialog(data: any): void {
    const dialogRef = this.dialog.open(PortalAccountEditComponent, {
      width: '700px',
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
      data: { delete: 1, name: data.username }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        // Edit portal_account
        this.account.delete({ portal_account_id: data.portal_account_id }, this.common.HT_QuanLyNguoiDung.Delete).subscribe(res => {
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
}
