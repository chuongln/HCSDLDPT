import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../../shared/confirmation-dialog/confirmation-dialog.component';
// Translate
import { CommonService } from '../../../../services/common.service';
import { DialogUpdateDmComponent } from '../dialog/dialog-update-dm.component';
import { DocService } from '../../../../services/doc.service';
import { StorageService } from '../../../../services/storage.service';
import { AuthConstants } from '../../../../config/auth-constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coquanbanhanh',
  templateUrl: './coquanbanhanh.component.html',
})
export class CoQuanBanHanhComponent implements OnInit {
  displayedColumns = ['code', 'name', 'parent_id', 'description', 'actions'];
  dataSource: MatTableDataSource<any>;
  selectedRow: boolean;
  @ViewChild(MatSort) sort: MatSort;
  permission: any;
  constructor(
    private common: CommonService,
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
    this.onSearch();
    this.currentLanguage();
    if (!this.permission.DH_VB_CoQuanBanHanh._view) {
      this.router.navigate(['/']);
    }
  }
  onSearch() {
    this.getCoQuanBanHanh();
  }
  //#region getCoQuanBanHanh ((1))
  getCoQuanBanHanh() {
    this.docService.getCoQuanBanHanh({}, this.common.DH_VB_CoQuanBanHanh.View).subscribe(res => {
      if (res.error) {
        this.common.messageErr(res);
        this.dataSource = new MatTableDataSource();
      } else {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.sort = this.sort;
      }
    });
  }
  //#endregion

  openUpdateDmDialog(data: any): void {
    const dialogRef = this.dialog.open(DialogUpdateDmComponent, {
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
        this.docService.deleteCoQuanBanHanh({ id: data.id }, this.common.DH_VB_CoQuanBanHanh.Delete)
          .subscribe(res => {
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
  currentLanguage() {
    return this.common.translate.currentLang;
  }
  onSelectedRow(row: any) {
    if (!this.selectedRow) {
      this.selectedRow = row;
    } else {
      this.selectedRow = row;
    }
  }
}
