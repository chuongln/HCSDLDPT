import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { JobsService } from '../../../services/jobs.service';
import { ProjectTaskDialogComponent } from './project-task-dialog.component';

// Translate
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from '../../../services/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AttachFilesDialogComponent } from '../../shared/attach-files-dialog/attach-files-dialog.component';
import { ProjectTaskActivityComponent } from './project-task-activity.component';
import { DialogActivityComponent } from './dialog-activity.component';
import { DialogTaskComponent } from './dialog-task.component';
import { StorageService } from '../../../services/storage.service';
import { AuthConstants } from '../../../config/auth-constants';
import { CommentsComponent } from '../../shared/comments/comments.component';

@Component({
  selector: 'app-project-task-detail',
  templateUrl: './project-task-detail.component.html'
})
export class ProjectTaskDetailComponent implements OnInit {
  selectedRow: any;
  id_project: string;
  id_task: string;
  data_task: any;
  dataActivitys: any[];
  code_task: string;
  account_id: number;
  permissionAttachsFile: any = this.common.DH_CV_QuanLyCongViec.Insert;
  permissionComment: any = this.common.DH_CV_QuanLyCongViec.View;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private jobsService: JobsService,
    private router: Router,
    private storageService: StorageService,
    private common: CommonService,
    public dialog: MatDialog
  ) {
    this.storageService.get(AuthConstants.ID).then(res => {
      this.account_id = res;
    });
  }

  ngOnInit() {
    this.onSearch();
  }
  onSearch() {
    this.getProjectTask();
  }

  getProjectTask() {
    this.code_task = this.route.snapshot.paramMap.get('code_task');
    this.jobsService.getListProjectTask({ task_code: this.code_task }, this.common.DH_CV_QuanLyCongViec.View).subscribe(res => {
      if (res.error) {
        this.common.messageErr(res);
        this.router.navigate(['/jobs/project/task']);
      } else {
        this.data_task = res.data[0];
        this.id_task = res.data[0].id;
      }
    });
  }
  openProjectTaskDialog(data: any): void {
    const dialogRef = this.dialog.open(ProjectTaskDialogComponent, {
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
  openComments(data: any): void {
    const dialogRef = this.dialog.open(CommentsComponent, {
      height: '80%',
      width: '800px',
      data: data
    });
  }
  // View log Activity openDialogActivity
  openActivityLog(data: any): void {
    const dialogRef = this.dialog.open(ProjectTaskActivityComponent, {
      width: '70%',
      height: '80%',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.common.messageRes(result);
      }
    });
  }
  openDialogActivity(data: any): void {
    console.log(data);
    const dialogRef = this.dialog.open(DialogActivityComponent, {
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
  openDialogTask(data: any): void {
    const dialogRef = this.dialog.open(DialogTaskComponent, {
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
  openDialogNghiepVu(data: any): void {
    const dialogRef = null;
    // if (this.data_task.tableName === 'scyk_baocao') {
    //   if (this.data_task.state_code === 'XAC_MINH') {
    //     dialogRef = this.dialog.open(BaoCaoDetailComponent, {
    //       height: '80%',
    //       width: '1000px',
    //       data: data
    //     });
    //   } else if (this.data_task.state_code === 'NHAN_VIEN') {
    //     dialogRef = this.dialog.open(PhanTichNhanVienComponent, {
    //       height: '80%',
    //       width: '800px',
    //       data: data
    //     });
    //   } else if (this.data_task.state_code === 'CHUYEN_GIA') {
    //     dialogRef = this.dialog.open(PhanTichChuyenGiaComponent, {
    //       height: '80%',
    //       width: '800px',
    //       data: data
    //     });
    //   } else if (this.data_task.state_code === 'XUAT_BAN') {
    //     dialogRef = this.dialog.open(XuatBanDialogComponent, {
    //       width: '400px',
    //       data: data
    //     });
    //   }
    // }
    if (dialogRef) {
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.onSearch();
          this.common.messageRes(result);
        }
      });
    }
  }
}
