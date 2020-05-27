import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
// Translate
import { CommonService } from './../../../services/common.service';
import { DocService } from './../../../services/doc.service';

@Component({
  selector: 'app-dialog-update-donvi',
  templateUrl: './dialog-update-donvi.component.html'
})
export class DialogUpdateDonViComponent implements OnInit {
  donViForm: FormGroup;
  lastUpdateForm: FormGroup;
  submitted = false;
  // convenience getter for easy access to form fields
  get f() { return this.donViForm.controls; }

  constructor(
    private common: CommonService,
    private fb: FormBuilder,
    private docService: DocService,
    public dialogRef: MatDialogRef<DialogUpdateDonViComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.donViForm = this.fb.group(
      {
        code: ['', [Validators.required]],
        name: ['', [Validators.required]],
        description: [''],
        sortOrder: [0, [Validators.required, Validators.min(0)]],
      });
    if (this.data) {
      this.donViForm.setValue({
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
    if (this.donViForm.invalid) {
      return;
    }
    if (!this.data) {
      this.docService.addDonViNgoai(this.donViForm.value, this.common.DH_VB_DonViNgoai.Insert)
        .subscribe(res => {
          if (res.error) {
            this.common.messageErr(res);
          } else {
            this.dialogRef.close(res.message);
          }
        });
    } else {
      this.docService.editDonViNgoai({ data: this.donViForm.value, condition: { id: this.data.id } }, this.common.DH_VB_DonViNgoai.Update)
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
