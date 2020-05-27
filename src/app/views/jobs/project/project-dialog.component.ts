import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { JobsService } from './../../../services/jobs.service';
// Translate
import { CommonService } from './../../../services/common.service';
import { PortalAccountService } from '../../../services/portal-account.service';
import { SysWorkflowService } from './../../../services/sys-workflow';
import { SysDmService } from '../../../services/sys-dm';
import * as dateFormat from 'dateformat';

// tslint:disable-next-line: class-name
interface select {
  value: number;
  display: string;
}

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html'
})
export class ProjectDialogComponent implements OnInit {
  projectForm: FormGroup;
  lastUpdateForm: FormGroup;
  submitted = false;
  dataTypes: select[] = [];
  projectTypes: select[] = [];
  accountManagers: select[] = [];
  sysWorkflows: select[] = [];

  // convenience getter for easy access to form fields
  get f() { return this.projectForm.controls; }

  constructor(
    private common: CommonService,
    private fb: FormBuilder,
    private jobsService: JobsService,
    private workflowService: SysWorkflowService,
    private accountService: PortalAccountService,
    private dmService: SysDmService,
    public dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.loadCombo();
    this.createForm();
  }
  createForm() {
    this.projectForm = this.fb.group(
      {
        id_sys_dataTypes: ['', [Validators.required]],
        id_project_type: [null],
        code: ['', [Validators.required]],
        name: [null, [Validators.required]],
        description: [''],
        id_account_manager: ['', [Validators.required]],
        id_sys_workflow: ['', [Validators.required]],
        allowEdit: ['', [Validators.required]],
        startDate: [null],
        dueDate: [null],
        finishDate: [null],
      });
    if (this.data.body) {
      this.setValueForm();
    }
  }
  loadCombo() {
    this.getAccountManager();
    this.getDataTypes();
    this.getProjectType();
    this.getSysWorkflow();
  }
  getDataTypes() {
    this.dmService.getDataType({}, this.common.DH_CV_QuanLyDuAn.Insert).subscribe(res => {
      if (res.error) {
        this.common.messageErr(res);
      } else {
        res.data.forEach(element => {
          if (element.allowCreateProject.data[0] === 1) {
            this.dataTypes.push({ value: parseInt(element.id, 10), display: element.name });
          }
        });
      }
    });
  }
  getProjectType() {
    this.jobsService.getDmProjectType({}, this.common.DH_CV_QuanLyDuAn.Insert)
      .subscribe(res => {
        if (!res.error) {
          res.data.forEach(element => {
            this.projectTypes.push({ value: parseInt(element.id, 10), display: element.name });
          });
        }
      });
  }
  getAccountManager() {
    this.accountService.search({ username: '', maCanBo: '', hoTen: '' }, this.common.DH_CV_QuanLyDuAn.Insert)
      .subscribe(res => {
        if (!res.error) {
          res.data.forEach(element => {
            this.accountManagers.push({ value: element.portal_account_id, display: element.hoTen + ' (' + element.username + ')' });
          });
        }
      });
  }
  getSysWorkflow() {
    this.workflowService.getWorkflow({}, this.common.DH_CV_QuanLyDuAn.Insert)
      .subscribe(res => {
        if (!res.error) {
          res.data.forEach(element => {
            this.sysWorkflows.push({ value: element.id, display: element.name });
          });
        }
      });
  }
  setValueForm() {
    this.projectForm.setValue({
      'id_sys_dataTypes': parseInt(this.data.body.id_sys_dataTypes, 10),
      'id_project_type': parseInt(this.data.body.id_project_type, 10),
      'code': this.data.body.code,
      'name': this.data.body.name,
      'description': this.data.body.description,
      'id_account_manager': this.data.body.id_account_manager,
      'id_sys_workflow': this.data.body.id_sys_workflow,
      'allowEdit': this.data.body.allowEdit,
      'dueDate': null,
      'startDate': null,
      'finishDate': null,
    });
    if (this.data.body.dueDate) {
      this.f.dueDate.setValue(dateFormat(this.data.body.dueDate, 'yyyy-mm-dd', true));
    }
    if (this.data.body.startDate) {
      this.f.dueDate.setValue(dateFormat(this.data.body.startDate, 'yyyy-mm-dd', true));
    }
    if (this.data.body.finishDate) {
      this.f.dueDate.setValue(dateFormat(this.data.body.finishDate, 'yyyy-mm-dd', true));
    }
    if (this.data.allowEdit === 0) {
      this.f.id_sys_dataTypes.disable();
      this.f.id_project_type.disable();
      this.f.code.disable();
      this.f.name.disable();
      this.f.id_sys_workflow.disable();
      this.f.allowEdit.disable();
    }
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.projectForm.invalid) {
      return;
    }
    if (this.f.dueDate.value === '') {
      this.f.dueDate.setValue(null);
    }
    if (this.f.startDate.value === '') {
      this.f.startDate.setValue(null);
    }
    if (this.f.finishDate.value === '') {
      this.f.finishDate.setValue(null);
    }
    if (this.data.body) {
      this.jobsService.editProject({
        data: this.projectForm.value,
        condition: { id: this.data.body.id }
      }, this.common.DH_CV_QuanLyDuAn.Update)
        .subscribe(res => {
          if (res.error) {
            this.common.messageErr(res);
          } else {
            this.dialogRef.close(res.message);
          }
        });
    } else {
      this.jobsService.insertProject(this.projectForm.value, this.common.DH_CV_QuanLyDuAn.Insert).subscribe(res => {
        if (res.error) {
          this.common.messageErr(res);
        } else {
          this.dialogRef.close(res.message);
        }
      });
    }

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
