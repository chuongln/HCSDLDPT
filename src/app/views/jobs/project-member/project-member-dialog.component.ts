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
  selector: 'app-project-member-dialog',
  templateUrl: './project-member-dialog.component.html'
})
export class ProjectMemberDialogComponent implements OnInit {
  projectMemberForm: FormGroup;
  lastUpdateForm: FormGroup;
  submitted = false;
  id_project: string;
  sysWorkflowStates: select[] = [];
  accounts: select[] = [];
  // convenience getter for easy access to form fields
  get f() { return this.projectMemberForm.controls; }

  constructor(
    private common: CommonService,
    private fb: FormBuilder,
    private jobsService: JobsService,
    private workflowService: SysWorkflowService,
    private accountService: PortalAccountService,
    public dialogRef: MatDialogRef<ProjectMemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.createForm();
    this.getSysWorkflowState();
    this.getAccount();
  }
  createForm() {
    this.id_project = this.data.id_project;
    this.projectMemberForm = this.fb.group(
      {
        id_project: [this.id_project],
        id_sys_workflow_state: [null, [Validators.required]],
        isLeader: [null, [Validators.required]],
        id_portal_account: [null, [Validators.required]],
        description: [''],
        sortOrder: [0, [Validators.required, Validators.min(0)]],
      });
    if (this.data.body) {
      this.projectMemberForm.setValue({
        'id_project': this.id_project,
        'id_sys_workflow_state': this.data.body.id_sys_workflow_state,
        'isLeader': '' + this.data.body.isLeader.data[0],
        'id_portal_account': this.data.body.id_portal_account,
        'description': this.data.body.description,
        'sortOrder': this.data.body.sortOrder,
      });
    }
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.projectMemberForm.invalid) {
      return;
    }
    this.f['isLeader'].setValue(parseInt(this.f['isLeader'].value, 10));
    if (!this.data.body) {
      this.jobsService.insertProjectMember(this.projectMemberForm.value, this.common.DH_CV_ThanhVienDuAn.Insert)
        .subscribe(res => {
          if (res.error) {
            this.common.messageErr(res);
          } else {
            this.dialogRef.close(res.message);
          }
        });
    } else {
      this.jobsService.editProjectMember({
        data: this.projectMemberForm.value,
        condition: { id: this.data.body.id }
      }, this.common.DH_CV_ThanhVienDuAn.Update)
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
    this.accountService.search({ username: '', maCanBo: '', hoTen: '' }, this.common.DH_CV_ThanhVienDuAn.Insert)
      .subscribe(res => {
        if (!res.error) {
          res.data.forEach(element => {
            this.accounts.push({ value: element.portal_account_id, display: element.hoTen + ' (' + element.username + ')' });
          });
        }
      });
  }
  getSysWorkflowState() {
    this.jobsService.getStateByProject({ id: this.data.id_project }, this.common.DH_CV_ThanhVienDuAn.Insert)
      .subscribe(res => {
        if (!res.error) {
          res.data.forEach(element => {
            this.sysWorkflowStates.push({ value: element.id, display: element.name });
          });
        }
      });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
