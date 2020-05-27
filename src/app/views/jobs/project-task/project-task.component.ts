import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { JobsService } from './../../../services/jobs.service';
import { ProjectTaskDialogComponent } from './project-task-dialog.component';

// Translate
import { CommonService } from './../../../services/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AttachFilesDialogComponent } from '../../shared/attach-files-dialog/attach-files-dialog.component';
import { SysWorkflowService } from '../../../services/sys-workflow';
import { CheckableSettings } from '@progress/kendo-angular-treeview';
import { Observable, of } from 'rxjs';
import { saveAs } from 'file-saver';
import { StorageService } from '../../../services/storage.service';
import { AuthConstants } from '../../../config/auth-constants';

// tslint:disable-next-line: class-name
interface select {
  value: number;
  display: string;
}
@Component({
  selector: 'app-project-task',
  templateUrl: './project-task.component.html'
})
export class ProjectTaskComponent implements OnInit {
  displayedColumns = ['index', 'code', 'summary', 'nguoiPhuTrach', 'trangThai', 'dueDate', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  searchForm: FormGroup;
  selectedRow: any;
  code_project: string = null;
  id_project: string;
  prioritys: select[] = [];
  // Treeview
  accounts: any;
  projects: any;
  sysWorkflowStates: any;
  public id_projects: any[] = [];
  public assignTos: any[] = [];
  public id_account_incharges: any[] = [];
  public id_sys_workflow_states: any[] = [];
  permission: any;
  permissionAttachsFile: any = this.common.DH_CV_QuanLyCongViec.Insert;
  permissionComment: any = this.common.DH_CV_QuanLyCongViec.View;

  get fs() { return this.searchForm.controls; }

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private jobsService: JobsService,
    private common: CommonService,
    private workflowService: SysWorkflowService,
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
    if (!this.permission.DH_CV_QuanLyCongViec._view) {
      this.router.navigate(['/']);
    }
    this.getProject();
    this.getPriority();
    this.getWorkflowState();
    this.getProjectMembers();
  }
  createSearchForm() {
    if (this.route.snapshot.paramMap.get('code_project')) {
      this.code_project = this.route.snapshot.paramMap.get('code_project');
    }
    this.searchForm = this.fb.group(
      {
        id_projects: [''],
        id_states: [''],
        id_incharges: [''],
        id_assigns: [''],
        contents: [''],
        id_prioritys: [''],
        createDateFrom: [null],
        createDateTo: [null],
        dueDateFrom: [null],
        dueDateTo: [null],
        project_code: this.code_project
      });
  }

  onSearch() {
    this.fs['id_projects'].setValue(this.id_projects.toString());
    this.fs['id_incharges'].setValue(this.id_account_incharges.toString());
    this.fs['id_assigns'].setValue(this.assignTos.toString());
    this.fs['id_states'].setValue(this.id_sys_workflow_states.toString());
    this.getProjectTask();
  }

  getProjectTask() {

    this.jobsService.getListProjectTask(this.searchForm.value, this.common.DH_CV_QuanLyCongViec.View)
      .subscribe(res => {
        if (res.error) {
          this.dataSource = new MatTableDataSource();
          this.common.messageErr(res);
        } else {
          if (this.code_project) {
            this.id_project = res.data[0].id_project;
          }
          this.dataSource = new MatTableDataSource(res.data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      });
  }
  exportProjectTask() {
    console.log(this.searchForm.value);
    this.jobsService.exportProjectTaskList(this.searchForm.value, this.common.DH_CV_QuanLyCongViec.Export)
      .subscribe(res => {
        if (res.error) {
          this.common.messageErr(res);
        } else {
          saveAs(new File([res], res.type));
        }
      });
  }
  getProject() {
    this.jobsService.getProjectByCode({}, this.common.DH_CV_QuanLyCongViec.View)
      .subscribe(res => {
        if (!res.error) {
          this.projects = res.data;
        }
      });
  }
  getProjectMembers() {
    this.jobsService.getProjectMembers({}, this.common.DH_CV_QuanLyCongViec.View)
      .subscribe(res => {
        if (!res.error) {
          this.accounts = res.data;
        }
      });
  }
  getPriority() {
    this.jobsService.getDmPriority({}, this.common.DH_CV_QuanLyCongViec.View)
      .subscribe(res => {
        if (!res.error) {
          res.data.forEach(element => {
            this.prioritys.push({ value: element.id, display: element.name });
          });
        }
      });
  }
  getWorkflowState() {
    this.workflowService.getWorkFlowState({}, this.common.DH_CV_QuanLyCongViec.View)
      .subscribe(res => {
        if (!res.error) {
          this.sysWorkflowStates = res.data;
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
  openDeleteDialog(data: any): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: { delete: 1, name: data.code }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        this.jobsService.deleteProjectTask({ id: data.id }, this.common.DH_CV_QuanLyCongViec.Delete).subscribe(res => {
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
