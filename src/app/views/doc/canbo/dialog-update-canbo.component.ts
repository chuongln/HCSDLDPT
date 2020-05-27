import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
// Translate
import { CommonService } from '../../../services/common.service';
import { DocService } from '../../../services/doc.service';

// tslint:disable-next-line: class-name
interface select {
  value: number;
  display: string;
}
@Component({
  selector: 'app-dialog-update-canbo',
  templateUrl: './dialog-update-canbo.component.html'
})
export class DialogUpdateCanBoComponent implements OnInit {
  canBoForm: FormGroup;
  lastUpdateForm: FormGroup;
  submitted = false;
  donVis: select[] = [];

  // convenience getter for easy access to form fields
  get f() { return this.canBoForm.controls; }

  constructor(
    private common: CommonService,
    private fb: FormBuilder,
    private docService: DocService,
    public dialogRef: MatDialogRef<DialogUpdateCanBoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.createForm();
    this.getDonViNgoai();
  }
  createForm() {
    this.canBoForm = this.fb.group(
      {
        ma: [null],
        hoTen: ['', [Validators.required]],
        gioiTinh: [null],
        chucVu: [null],
        chucDanh: [null],
        boPhan: [null],
        ghiChu: [null],
        id_doc_donvi: [null],
      });
    if (this.data) {
      this.canBoForm.setValue({
        'ma': this.data.ma,
        'hoTen': this.data.hoTen,
        'gioiTinh': parseInt(this.data.gioiTinh, 10),
        'chucVu': this.data.chucVu,
        'chucDanh': this.data.chucDanh,
        'boPhan': this.data.boPhan,
        'ghiChu': this.data.ghiChu,
        'id_doc_donvi': this.data.id_doc_donvi,
      });
    }
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.canBoForm.invalid) {
      return;
    }
    if (!this.data) {
      this.docService.addDonViNgoaiCanBo(this.canBoForm.value, this.common.DH_VB_CanBo.Insert)
        .subscribe(res => {
          if (res.error) {
            this.common.messageErr(res);
          } else {
            this.dialogRef.close(res.message);
          }
        });
    } else {
      this.docService.editDonViNgoaiCanBo({ data: this.canBoForm.value, condition: { id: this.data.id } }, this.common.DH_VB_CanBo.Update)
        .subscribe(res => {
          if (res.error) {
            this.common.messageErr(res);
          } else {
            this.dialogRef.close(res.message);
          }
        });
    }
  }
  getDonViNgoai() {
    this.docService.getDonViNgoai({}, this.common.DH_VB_CanBo.Insert).subscribe(res => {
      if (res.error) {
        this.common.messageErr(res);
      } else {
        res.data.forEach(element => {
          this.donVis.push({ value: element.id, display: element.name });
        });
      }
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
