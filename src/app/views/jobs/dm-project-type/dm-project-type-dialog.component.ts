import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
// Translate
import { CommonService } from './../../../services/common.service';
import { JobsService } from './../../../services/jobs.service';

@Component({
  selector: 'app-dm-project-type-dialog',
  templateUrl: './dm-project-type-dialog.component.html',
})
export class DmProjectTypeDialogComponent implements OnInit {
  projectTypeForm: FormGroup;
  lastUpdateForm: FormGroup;
  submitted = false;
  // convenience getter for easy access to form fields
  get f() { return this.projectTypeForm.controls; }

  constructor(
    private common: CommonService,
    private fb: FormBuilder,
    private jobsService: JobsService,
    public dialogRef: MatDialogRef<DmProjectTypeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.projectTypeForm = this.fb.group(
      {
        code: ['', [Validators.required]],
        name: ['', [Validators.required]],
        description: [''],
        sortOrder: [0, [Validators.required, Validators.min(0)]],
      });
    if (this.data) {
      this.projectTypeForm.setValue({
        'code': this.data.code,
        'name': this.data.name,
        'description': this.data.description,
        'sortOrder': this.data.sortOrder,
      });
    }
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.projectTypeForm.invalid) {
      return;
    }
    if (!this.data) {
      this.jobsService.insertDmProjectType(this.projectTypeForm.value, this.common.DH_CV_DoUuTienCongVien.Insert)
        .subscribe(res => {
          if (res.error) {
            this.common.messageErr(res);
          } else {
            this.dialogRef.close(res.message);
          }
        });
    } else {
      this.jobsService.editDmProjectType({
        data: this.projectTypeForm.value,
        condition: { id: this.data.id }
      }, this.common.DH_CV_DoUuTienCongVien.Update)
        .subscribe(res => {
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
