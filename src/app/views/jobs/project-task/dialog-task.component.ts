import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
// Translate
import { CommonService } from '../../../services/common.service';
import { JobsService } from '../../../services/jobs.service';

import { PortalAccountService } from '../../../services/portal-account.service';
import { SysWorkflowService } from '../../../services/sys-workflow';

// tslint:disable-next-line: class-name
interface select {
  value: number;
  display: string;
}

@Component({
  selector: 'app-dialog-task',
  templateUrl: './dialog-task.component.html'
})
export class DialogTaskComponent implements OnInit {
  dialogTaskForm: FormGroup;
  submitted = false;
  id_task: string;
  accounts: select[] = [];
  id_assign: number;
  // convenience getter for easy access to form fields
  get f() { return this.dialogTaskForm.controls; }

  constructor(
    private common: CommonService,
    private fb: FormBuilder,
    private jobsService: JobsService,
    private workflowService: SysWorkflowService,
    public dialogRef: MatDialogRef<DialogTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.createForm();
    this.loadCombo();
  }
  createForm() {
    this.id_task = this.data.body.id;
    if (this.data.dialog === 'people') {
      this.dialogTaskForm = this.fb.group(
        {
          id_account_incharge: [this.data.body.id_account_incharge],
          assignTo: [this.data.body.assignTo],
        });
    } else if (this.data.dialog === 'percent') {
      this.dialogTaskForm = this.fb.group(
        {
          completePercent: [this.data.body.completePercent, [Validators.required, Validators.min(0)]],
        });
    }

  }
  loadCombo() {
    this.getMember();
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.dialogTaskForm.invalid) {
      return;
    }
    this.jobsService.editProjectTask({
      data: this.dialogTaskForm.value,
      condition: { id: this.id_task }
    }, this.common.DH_CV_QuanLyCongViec.Update)
      .subscribe(res => {
        if (res.error) {
          this.common.messageErr(res);
        } else {
          this.dialogRef.close(res.message);
        }
      });

  }
  getMember() {
    this.jobsService.getProjectMember({ id_project: this.data.body.id_project }, this.common.DH_CV_QuanLyCongViec.Update)
      .subscribe(res => {
        if (!res.error) {
          res.data.forEach(element => {
            this.accounts.push({ value: element.id_portal_account, display: element.fullname + ' (' + element.username + ')' });
          });
        }
      });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
