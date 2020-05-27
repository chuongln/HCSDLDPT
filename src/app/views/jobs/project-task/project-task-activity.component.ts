import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
// Translate
import { CommonService } from './../../../services/common.service';
import { JobsService } from './../../../services/jobs.service';

import { SysWorkflowService } from '../../../services/sys-workflow';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-project-task-activity',
  templateUrl: './project-task-activity.component.html'
})
export class ProjectTaskActivityComponent implements OnInit {
  displayedColumns = ['index', 'tenState', 'tenAction', 'tenNguoiThucHien', 'tenNguoiPhuTrach', 'comment'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  selectedRow: any;

  // convenience getter for easy access to form fields

  constructor(
    private common: CommonService,
    private jobsService: JobsService,
    public dialogRef: MatDialogRef<ProjectTaskActivityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.disableClose = false;
  }

  ngOnInit() {
    this.getProjectTaskActivity();
  }
  getProjectTaskActivity() {
    this.jobsService.getProjectTaskActivityByTask({ task_id: this.data.id }, this.common.DH_CV_QuanLyCongViec.View).subscribe(res => {
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
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSelectedRow(row: any) {
    if (!this.selectedRow) {
      this.selectedRow = row;
    } else {
      this.selectedRow = row;
    }
  }
}
