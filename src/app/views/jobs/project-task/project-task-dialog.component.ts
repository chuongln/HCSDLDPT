import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
// Translate
import { CommonService } from './../../../services/common.service';
import { JobsService } from './../../../services/jobs.service';

import { PortalAccountService } from '../../../services/portal-account.service';
import { SysWorkflowService } from '../../../services/sys-workflow';
import * as dateFormat from 'dateformat';

// tslint:disable-next-line: class-name
interface select {
  value: number;
  display: string;
}

@Component({
  selector: 'app-project-task-dialog',
  templateUrl: './project-task-dialog.component.html'
})
export class ProjectTaskDialogComponent implements OnInit {
  projectTaskForm: FormGroup;
  lastUpdateForm: FormGroup;
  submitted = false;
  id_project: string;
  sysWorkflowStates: select[] = [];
  prioritys: select[] = [];
  accounts: select[] = [];
  tasks: select[] = [];
  components: select[] = [];
  projects: select[] = [];
  // convenience getter for easy access to form fields
  get f() { return this.projectTaskForm.controls; }

  constructor(
    private common: CommonService,
    private fb: FormBuilder,
    private jobsService: JobsService,
    private workflowService: SysWorkflowService,
    private accountService: PortalAccountService,
    public dialogRef: MatDialogRef<ProjectTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.createForm();
    this.loadCombo();
  }
  createForm() {
    if (this.data.id_project) {
      this.id_project = this.data.id_project;
    }
    this.projectTaskForm = this.fb.group(
      {
        id_project: [this.id_project],
        isSubTask: [0, [Validators.required]],
        parent_id: [null],
        code: ['', [Validators.required]],
        summary: ['', [Validators.required]],
        id_dm_priority: ['', [Validators.required]],
        duration: [null],
        description: [null],
        dueDate: [null],
        completePercent: [null],
        id_components: [null],
        id_account_incharge: ['', [Validators.required]],
        assignTo: ['', [Validators.required]],
        id_sys_workflow_state: ['', [Validators.required]],
      });
    if (this.data.body) {
      this.projectTaskForm.setValue({
        'id_project': this.data.body.id_project,
        'isSubTask': '' + this.data.body.isSubTask.data[0],
        'parent_id': this.data.body.parent_id,
        'code': this.data.body.code,
        'summary': this.data.body.summary,
        'id_dm_priority': this.data.body.id_dm_priority,
        'duration': this.data.body.duration,
        'description': this.data.body.description,
        'dueDate': null,
        'completePercent': this.data.body.completePercent,
        'id_components': parseInt(this.data.body.id_components, 10),
        'id_account_incharge': this.data.body.id_account_incharge,
        'assignTo': this.data.body.assignTo,
        'id_sys_workflow_state': this.data.body.id_sys_workflow_state,
      });
      if (this.data.body.dueDate) {
        this.f.dueDate.setValue(dateFormat(this.data.body.dueDate, 'yyyy-mm-dd', true));
      }
    }
    if (this.data.subTask) {
      this.f.parent_id.setValue(this.data.subTask.parent_id);
      this.f.isSubTask.setValue('1');
      this.f.code.setValue(this.data.subTask.code + '_Sub1');
      this.f.id_components.setValue(this.data.subTask.id_components);
      this.f.id_dm_priority.setValue(this.data.subTask.id_dm_priority);
      if (this.data.subTask.isSubTask.data[0] === 1) {
        this.dialogRef.close();
      }
    }
  }
  loadCombo() {
    this.getAccount();
    this.getComponent();
    this.getPriority();
    this.getSysWorkflowState();
    this.getTask();
    this.getProject();
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.projectTaskForm.invalid) {
      return;
    }
    if (this.f.dueDate.value === '') {
      this.f.dueDate.setValue(null);
    }
    this.f['isSubTask'].setValue(parseInt(this.f['isSubTask'].value, 10));
    if (!this.data.body) {
      this.jobsService.insertProjectTask(this.projectTaskForm.value, this.common.DH_CV_QuanLyCongViec.Insert)
        .subscribe(res => {
          if (res.error) {
            this.common.messageErr(res);
          } else {
            this.dialogRef.close(res.message);
          }
        });
    } else {
      this.jobsService.editProjectTask({
        data: this.projectTaskForm.value,
        condition: { id: this.data.body.id }
      }, this.common.DH_CV_QuanLyCongViec.Update)
        .subscribe(res => {
          if (res.error) {
            this.common.messageErr(res);
          } else {
            this.dialogRef.close(res.message);
          }
        });
    }
  }
  getAccount() {
    this.accounts = [];
    this.jobsService.getProjectMember({ id_project: this.f.id_project.value }, this.common.DH_CV_QuanLyCongViec.Insert)
      .subscribe(res => {
        if (!res.error) {
          res.data.forEach(element => {
            this.accounts.push({ value: element.id_portal_account, display: element.fullname + ' (' + element.username + ')' });
          });
        }
      });
  }
  getSysWorkflowState() {
    this.sysWorkflowStates = [];
    this.jobsService.getStateByProject({ id: this.f.id_project.value }, this.common.DH_CV_QuanLyCongViec.Insert)
      .subscribe(res => {
        if (!res.error) {
          res.data.forEach(element => {
            this.sysWorkflowStates.push({ value: element.id, display: element.name });
          });
        }
      });
  }
  getPriority() {
    this.jobsService.getDmPriority({}, this.common.DH_CV_QuanLyCongViec.Insert)
      .subscribe(res => {
        if (!res.error) {
          res.data.forEach(element => {
            this.prioritys.push({ value: element.id, display: element.name });
          });
        }
      });
  }
  getProject() {
    this.jobsService.getProject({}, this.common.DH_CV_QuanLyCongViec.Insert)
      .subscribe(res => {
        if (!res.error) {
          res.data.forEach(element => {
            this.projects.push({ value: element.id, display: element.name });
          });
        }
      });
  }
  getTask() {
    this.jobsService.getProjectTask({}, this.common.DH_CV_QuanLyCongViec.Insert)
      .subscribe(res => {
        if (!res.error) {
          res.data.forEach(element => {
            this.tasks.push({ value: element.id, display: element.code });
          });
        }
      });
  }
  getComponent() {
    this.jobsService.getProjectComponent({}, this.common.DH_CV_QuanLyCongViec.Insert)
      .subscribe(res => {
        if (!res.error) {
          res.data.forEach(element => {
            this.components.push({ value: element.id, display: element.name });
          });
        }
      });
  }
  onSelectProject() {
    this.getAccount();
    this.getSysWorkflowState();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
