import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
// Translate
import { CommonService } from './../../../services/common.service';
import { JobsService } from './../../../services/jobs.service';

@Component({
  selector: 'app-project-component-dialog',
  templateUrl: './project-component-dialog.component.html'
})
export class ProjectComponentDialogComponent implements OnInit {
  projectComponentForm: FormGroup;
  lastUpdateForm: FormGroup;
  submitted = false;
  id_project: string;
  // convenience getter for easy access to form fields
  get f() { return this.projectComponentForm.controls; }

  constructor(
    private common: CommonService,
    private fb: FormBuilder,
    private jobsService: JobsService,
    public dialogRef: MatDialogRef<ProjectComponentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.id_project = this.data.id_project;
    this.projectComponentForm = this.fb.group(
      {
        id_project: [this.id_project],
        name: ['', [Validators.required]],
        description: [''],
        sortOrder: [0, [Validators.required, Validators.min(0)]],
      });
    if (this.data.body) {
      this.projectComponentForm.setValue({
        'id_project': this.id_project,
        'name': this.data.body.name,
        'description': this.data.body.description,
        'sortOrder': this.data.body.sortOrder,
      });
    }
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.projectComponentForm.invalid) {
      return;
    }
    if (!this.data.body) {
      this.jobsService.insertProjectComponent(this.projectComponentForm.value, this.common.DH_CV_ThanhPhanDuAn.Insert)
        .subscribe(res => {
          if (res.error) {
            this.common.messageErr(res);
          } else {
            this.dialogRef.close(res.message);
          }
        });
    } else {
      this.jobsService.editProjectComponent({
        data: this.projectComponentForm.value,
        condition: { id: this.data.body.id }
      }, this.common.DH_CV_ThanhPhanDuAn.Update)
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
