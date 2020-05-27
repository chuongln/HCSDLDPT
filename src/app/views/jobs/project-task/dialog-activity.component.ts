import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
// Translate
import { CommonService } from './../../../services/common.service';
import { JobsService } from './../../../services/jobs.service';

import { PortalAccountService } from '../../../services/portal-account.service';
import { SysWorkflowService } from '../../../services/sys-workflow';

// tslint:disable-next-line: class-name
interface select {
  value: number;
  display: string;
}

@Component({
  selector: 'app-dialog-activity',
  templateUrl: './dialog-activity.component.html'
})
export class DialogActivityComponent implements OnInit {
  activityForm: FormGroup;
  submitted = false;
  id_task: string;
  sysWorkflowStateActions: select[] = [];
  accounts: select[] = [];
  stateActions: any;
  id_assign: number;
  // convenience getter for easy access to form fields
  get f() { return this.activityForm.controls; }

  constructor(
    private common: CommonService,
    private fb: FormBuilder,
    private jobsService: JobsService,
    private workflowService: SysWorkflowService,
    public dialogRef: MatDialogRef<DialogActivityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.createForm();
    this.loadCombo();
  }
  createForm() {
    this.id_task = this.data.id;
    this.activityForm = this.fb.group(
      {
        id_task: [this.id_task],
        comment: [null],
        id_account_incharge: [this.data.id_account_incharge],
        assignTo: [this.data.assignTo],
        id_sys_workflow_state_action: ['', [Validators.required]],
      });
  }
  loadCombo() {
    console.log('1');
    this.getMember();
    this.getSysWorkflowStateAction();
    this.id_assign = this.data.id_account_incharge;
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.activityForm.invalid) {
      return;
    }
    this.jobsService.insertProjectTaskActivity(this.activityForm.value, this.common.DH_CV_QuanLyCongViec.Insert)
      .subscribe(res => {
        if (res.error) {
          this.common.messageErr(res);
        } else {
          this.updateTask();
        }
      });

  }
  getMember() {
    this.jobsService.getProjectMember({ id_project: this.data.id_project }, this.common.DH_CV_QuanLyCongViec.Insert)
      .subscribe(res => {
        if (!res.error) {
          res.data.forEach(element => {
            this.accounts.push({ value: element.id_portal_account, display: element.fullname + ' (' + element.username + ')' });
          });
        }
      });
  }
  getSysWorkflowStateAction() {
    this.workflowService.getWorkFlowStateAction({
      id_workflow_state: this.data.id_sys_workflow_state
    }, this.common.DH_CV_QuanLyCongViec.Insert)
      .subscribe(res => {
        if (!res.error) {
          this.stateActions = res.data;
          res.data.forEach(element => {
            this.sysWorkflowStateActions.push({ value: element.id, display: element.name });
          });
        }
      });
  }
  updateTask() {
    const next_state = this.getNextState(this.f['id_sys_workflow_state_action'].value);
    const data = { data: { id_sys_workflow_state: next_state, assignTo: this.id_assign }, condition: { id: this.id_task } };
    this.jobsService.editProjectTask(data, this.common.DH_CV_QuanLyCongViec.Insert)
      .subscribe(res => {
        if (res.error) {
          this.common.messageErr(res);
        } else {
          this.dialogRef.close(res.message);
        }
      });
  }
  getNextState(id) {
    return this.stateActions.find(x => x.id === id).next_state;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
