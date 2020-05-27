import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
// Translate
import { CommonService } from './../../../services/common.service';
// import { BanDoService } from '../../../services/bando.service';

@Component({
  selector: 'app-dialog-update-duong',
  templateUrl: './dialog-update-duong.component.html',
})
export class DialogUpdateDuongComponent implements OnInit {
  duongForm: FormGroup;
  lastUpdateForm: FormGroup;
  submitted = false;
  // convenience getter for easy access to form fields
  get f() { return this.duongForm.controls; }

  constructor(
    private common: CommonService,
    private fb: FormBuilder,
    // private banDoService: BanDoService,
    public dialogRef: MatDialogRef<DialogUpdateDuongComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.createForm();
    console.log(this.data);
  }
  createForm() {
    this.duongForm = this.fb.group(
      {
        code: ['', [Validators.required]],
        name: ['', [Validators.required]],
        id_tuyenDuong: ['', [Validators.required]],
        id_ketCauMatDuongs: [''],
        diemDau: [''],
        diemCuoi: [''],
        chieuRongMatDuong: [''],
        chieuDai: [''],
        ghiChu: [''],
        toaDo: [null],
        sortOrder: [0, [Validators.required, Validators.min(0)]],
      });
    // if (this.data) {
    //   this.duongForm.setValue({
    //     'code': this.data.code,
    //     'name': this.data.name,
    //     'description': this.data.description,
    //     'sortOrder': this.data.sortOrder,
    //   });
    // }
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.duongForm.invalid) {
      return;
    }
    if (!this.data) {
      // this.banDoService.insertDmProjectType(this.duongForm.value, this.common.DH_CV_DoUuTienCongVien.Insert)
      //   .subscribe(res => {
      //     if (res.error) {
      //       this.common.messageErr(res);
      //     } else {
      //       this.dialogRef.close(res.message);
      //     }
      //   });
    } else {
      // this.banDoService.editDmProjectType({
      //   data: this.duongForm.value,
      //   condition: { id: this.data.id }
      // }, this.common.DH_CV_DoUuTienCongVien.Update)
      //   .subscribe(res => {
      //     if (res.error) {
      //       this.common.messageErr(res);
      //     } else {
      //       this.dialogRef.close(res.message);
      //     }
      //   });
    }

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
