import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { JobsService } from './../../../services/jobs.service';
import { ProjectMemberDialogComponent } from './project-member-dialog.component';

// Translate
import { CommonService } from './../../../services/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../../../services/storage.service';
import { AuthConstants } from '../../../config/auth-constants';

@Component({
  selector: 'app-project-member',
  templateUrl: './project-member.component.html'
})
export class ProjectMemberComponent implements OnInit {
  displayedColumns = ['index', 'id_portal_account', 'isLeader', 'description', 'id_sys_workflow_state', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  selectedRow: any;
  id_project: string;
  code_project: string;
  permission: any;

  constructor(
    private route: ActivatedRoute,
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
    if (!this.permission.DH_CV_ThanhVienDuAn._view) {
      this.router.navigate(['/']);
    }
  }
  onSearch() {
    this.id_project = this.route.snapshot.paramMap.get('id_project');
    this.getProjectMember();
  }

  getProjectMember() {
    this.jobsService.getProjectMember({ id_project: this.id_project }, this.common.DH_CV_ThanhVienDuAn.View).subscribe(res => {
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

  openProjectMemberDialog(data: any): void {
    const dialogRef = this.dialog.open(ProjectMemberDialogComponent, {
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
        this.jobsService.deleteProjectMember({ id: data.id }, this.common.DH_CV_ThanhVienDuAn.Delete).subscribe(res => {
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
