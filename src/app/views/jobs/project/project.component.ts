import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { JobsService } from './../../../services/jobs.service';
import { ProjectDialogComponent } from './project-dialog.component';
import { SysDmService } from './../../../services/sys-dm';
// Translate
import { CommonService } from './../../../services/common.service';

import { AttachFilesDialogComponent } from '../../shared/attach-files-dialog/attach-files-dialog.component';
import { CheckableSettings } from '@progress/kendo-angular-treeview';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from '../../../services/storage.service';
import { AuthConstants } from '../../../config/auth-constants';

// tslint:disable-next-line: class-name
interface select {
  value: number;
  display: string;
}
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {
  displayedColumns = ['index', 'code', 'name', 'tenKieuDuLieu', 'tenLoaiDuAn', 'id_account_manager', 'maLuongCongViec', 'allowEdit', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataTypes: select[] = [];
  searchForm: FormGroup;
  selectedRow: any;
  // treeView
  accounts: any;
  public id_account_managers: any[] = [];
  project_types: any;
  public id_project_types: any[] = [];
  permission: any;
  permissionAttachsFile: any = this.common.DH_CV_QuanLyDuAn.Insert;
  get fs() { return this.searchForm.controls; }

  constructor(
    private fb: FormBuilder,
    private jobsService: JobsService,
    private common: CommonService,
    private dmService: SysDmService,
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
    if (!this.permission.DH_CV_QuanLyDuAn._view) {
      this.router.navigate(['/']);
    }
    this.getProjectMembers();
    this.getDataTypes();
    this.getProjectType();
  }
  createSearchForm() {
    this.searchForm = this.fb.group(
      {
        id_project_types: [''],
        contents: [''],
        id_account_managers: [''],
        id_dataType: ['']
      });
  }

  onSearch() {
    this.fs['id_project_types'].setValue(this.id_project_types.toString());
    this.fs['id_account_managers'].setValue(this.id_account_managers.toString());
    this.getProject();
  }

  getProject() {
    this.jobsService.getProject(this.searchForm.value, this.common.DH_CV_QuanLyDuAn.View).subscribe(res => {
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
  getProjectMembers() {
    this.jobsService.getProjectManager({}, this.common.DH_CV_QuanLyDuAn.View).subscribe(res => {
      if (res.error) {
        this.common.messageErr(res);
      } else {
        this.accounts = res.data;
      }
    });
  }
  getDataTypes() {
    this.dmService.getDataType({}, this.common.DH_CV_QuanLyDuAn.View).subscribe(res => {
      if (res.error) {
        this.common.messageErr(res);
      } else {
        res.data.forEach(element => {
          this.dataTypes.push({ value: element.id, display: element.name });
        });
      }
    });
  }
  getProjectType() {
    this.jobsService.getDmProjectType({}, this.common.DH_CV_QuanLyDuAn.View).subscribe(res => {
      if (res.error) {
        this.common.messageErr(res);
      } else {
        this.project_types = res.data;
      }
    });
  }
  openProjectDialog(data: any): void {
    const dialogRef = this.dialog.open(ProjectDialogComponent, {
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
  openAttachFiles(data: any): void {
    const dialogRef = this.dialog.open(AttachFilesDialogComponent, {
      height: '80%',
      width: '700px',
      data: data
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
        // Edit portal_project
        this.jobsService.deleteProject({ id: data.id }, this.common.DH_CV_QuanLyDuAn.Delete).subscribe(res => {
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
  public get checkableSettings(): CheckableSettings {
    return {
      checkChildren: true,
      checkParents: false,
      enabled: true,
      mode: 'multiple',
      checkOnClick: false
    };
  }
  public children = (dataItem: any): Observable<any[]> => of(dataItem.children);
  public hasChildren(dataItem: any): boolean {
    return dataItem.children && dataItem.children.length > 0;
  }
}
