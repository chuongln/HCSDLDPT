import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
// Translate
import { CommonService } from '../../../services/common.service';
import { RolePermissionService } from './../../../services/role-permission.service';
import { PermissionUpdateComponent } from './../dialog/permission-update.component';
import { StorageService } from '../../../services/storage.service';
import { AuthConstants } from '../../../config/auth-constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html'
})
export class PermissionComponent implements OnInit {
  displayedColumns1 = ['code', 'name', 'description'];
  dataSource1: MatTableDataSource<any>;
  selectedRow1: boolean;
  loadTable1: boolean = true;
  @ViewChild(MatSort) sort: MatSort;
  permission: any;
  constructor(
    private common: CommonService,
    private permissionService: RolePermissionService,
    public dialog: MatDialog,
    private router: Router,
    private storageService: StorageService
  ) {
    this.storageService.get(AuthConstants.PERMISSION).then(res => {
      this.permission = res;
    });
  }

  ngOnInit() {
    this.loadTable1 = false;
    this.onSearch();
    if (!this.permission.HT_QuanLyQuyen._view) {
      this.router.navigate(['/']);
    }
  }

  onSearch() {
    this.getPermission();
  }
  getPermission() {
    this.permissionService.getPermission({}, this.common.HT_QuanLyQuyen.View).subscribe(res => {
      this.loadTable1 = true;
      if (res.error) {
        this.common.messageErr(res);
        this.dataSource1 = new MatTableDataSource();
      } else {
        this.dataSource1 = new MatTableDataSource(res.data);
        this.dataSource1.sort = this.sort;
      }
    });
  }

  openUpdateDialog(data: any): void {
    const dialogRef = this.dialog.open(PermissionUpdateComponent, {
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
      data: { delete: 1, name: data.name }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        if (data.parent_id !== 0) {
          this.permissionService.deletePermission({ id: data.id }, this.common.HT_QuanLyQuyen.Delete)
            .subscribe(res => {
              if (res.error) {
                this.common.messageErr(res);
              } else {
                this.onSearch();
                this.common.messageRes(res.message);
              }
            });
        } else {
          this.common.messageErr({ error: { message: 'Fail' } });
        }
      }
    });
  }
  onSelectedRow(row: any) {
    if (!this.selectedRow1) {
      this.selectedRow1 = row;
    } else {
      this.selectedRow1 = row;
    }
  }
}
