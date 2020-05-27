import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { JobsService } from './../../../services/jobs.service';
import { ProjectComponentDialogComponent } from './project-component-dialog.component';

// Translate
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from './../../../services/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../../../services/storage.service';
import { AuthConstants } from '../../../config/auth-constants';

@Component({
  selector: 'app-project-component',
  templateUrl: './project-component.component.html'
})
export class ProjectComponentComponent implements OnInit {
  displayedColumns = ['index', 'name', 'description', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  selectedRow: any;
  id_project: string;
  permission: any;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private jobsService: JobsService,
    private translateService: TranslateService,
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
    if (!this.permission.DH_CV_ThanhPhanDuAn._view) {
      this.router.navigate(['/']);
    }
  }


  onSearch() {
    this.id_project = this.route.snapshot.paramMap.get('id_project');
    this.getProjectComponent();
  }

  getProjectComponent() {
    this.jobsService.getProjectComponent({ id_project: this.id_project }, this.common.DH_CV_ThanhPhanDuAn.View).subscribe(res => {
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

  openProjectComponentDialog(data: any): void {
    const dialogRef = this.dialog.open(ProjectComponentDialogComponent, {
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
      data: `Do you confirm the deletion project component "${data.name}?"`
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        this.jobsService.deleteProjectComponent({ id: data.id }, this.common.DH_CV_ThanhPhanDuAn.Delete).subscribe(res => {
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
