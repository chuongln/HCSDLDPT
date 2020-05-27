import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { JobsService } from './../../../services/jobs.service';
import { DmProjectTypeDialogComponent } from './dm-project-type-dialog.component';

// Translate
import { CommonService } from './../../../services/common.service';
import { StorageService } from '../../../services/storage.service';
import { AuthConstants } from '../../../config/auth-constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dm-project-type',
  templateUrl: './dm-project-type.component.html'
})
export class DmProjectTypeComponent implements OnInit {
  displayedColumns = ['index', 'code', 'name', 'description', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  searchForm: FormGroup;
  selectedRow: any;
  permission: any;
  get fs() { return this.searchForm.controls; }

  constructor(
    private fb: FormBuilder,
    private jobsService: JobsService,
    private common: CommonService,
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
    if (!this.permission.DH_CV_DoUuTienCongVien._view) {
      this.router.navigate(['/']);
    }
  }
  onSearch() {
    this.getDmProjectType();
  }

  getDmProjectType() {
    this.jobsService.getDmProjectType({}, this.common.DH_CV_DoUuTienCongVien.View).subscribe(res => {
      if (res.error) {
        this.dataSource = new MatTableDataSource();
        this.common.messageErr(res);
      } else {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  openDmProjectTypeDialog(data: any): void {
    const dialogRef = this.dialog.open(DmProjectTypeDialogComponent, {
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
      data: { delete: 1, name: data.name }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        this.jobsService.deleteDmProjectType({ id: data.id }, this.common.DH_CV_DoUuTienCongVien.Delete).subscribe(res => {
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
