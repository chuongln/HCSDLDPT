import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
// Translate
import { CommonService } from './../../../../services/common.service';
import { DocService } from './../../../../services/doc.service';

// tslint:disable-next-line: class-name
interface select {
  value: number;
  display: string;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-update-dm.component.html'
})
export class DialogUpdateDmComponent implements OnInit {
  public dmForm: FormGroup;
  submitted = false;
  parent_ids: select[] = [];
  mucDoMats: select[] = [];
  // convenience getter for easy access to form fields
  get f() { return this.dmForm.controls; }

  constructor(
    private common: CommonService,
    private fb: FormBuilder,
    private docService: DocService,
    public dialogRef: MatDialogRef<DialogUpdateDmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.createForm();
    this.currentLanguage();
  }
  currentLanguage() {
    return this.common.translate.currentLang;
  }
  createForm() {
    this.dmForm = this.fb.group(
      {
        parent_id: ['', [Validators.required]],
        code: ['', [Validators.required]],
        name: ['', [Validators.required]],
        mucDoMat: ['', [Validators.required]],
        level: ['', [Validators.required, Validators.min(0)]],
        description: [''],
        sortOrder: [0, [Validators.required, Validators.min(0)]],
      });
    if (this.data.body) {
      this.dmForm.setValue({
        'level': '',
        'parent_id': '',
        'mucDoMat': '',
        'code': this.data.body.code,
        'name': this.data.body.name,
        'description': this.data.body.description,
        'sortOrder': '',
      });
    }
    if (this.data.name === 'coQuanBanHanh' || this.data.name === 'linhVucVanBan') {
      if (this.data.body) {
        this.f.parent_id.setValue(this.data.body.parent_id);
        this.f.sortOrder.setValue(this.data.body.sortOrder);
      }
      this.f.mucDoMat.disable();
      this.f.level.disable();
      if (this.data.name === 'coQuanBanHanh') {
        this.getParentCoQuanBanHanh();
      } else if (this.data.name === 'linhVucVanBan') {
        this.getParentLinhVucVanBan();
      }
    } else if (this.data.name === 'mucDoMat' || this.data.name === 'mucDoKhan') {
      if (this.data.body) {
        this.f.level.setValue(this.data.body.level);
      }
      this.f.mucDoMat.disable();
      this.f.parent_id.disable();
      this.f.sortOrder.disable();
    } else if (this.data.name === 'hinhThucGuiNhan') {
      if (this.data.body) {
        this.f.sortOrder.setValue(this.data.body.sortOrder);
      }
      this.f.mucDoMat.disable();
      this.f.parent_id.disable();
      this.f.level.disable();
    } else if (this.data.name === 'loaiVanBan') {
      if (this.data.body) {
        this.f.sortOrder.setValue(this.data.body.sortOrder);
        this.f.mucDoMat.setValue(this.data.body.mucDoMat);
      }
      this.getParentLoaiVanBan();
      this.getMucDoMat();
      this.f.level.disable();
    }
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.dmForm.invalid) {
      return;
    }
    // kiểm tra xem thuộc loại danh mục gì để update theo danh mục tương ứng
    let updateRespone;
    if (!this.data.body) {
      if (this.data.name === 'coQuanBanHanh') {
        updateRespone = this.docService.addCoQuanBanHanh(this.dmForm.value, this.common.DH_VB_CoQuanBanHanh.Insert);
      } else if (this.data.name === 'hinhThucGuiNhan') {
        updateRespone = this.docService.addHinhThucGuiNhan(this.dmForm.value, this.common.DH_VB_HinhThucGuiNhan.Insert);
      } else if (this.data.name === 'linhVucVanBan') {
        updateRespone = this.docService.addLinhVucVanBan(this.dmForm.value, this.common.DH_VB_LinhVucVanBan.Insert);
      } else if (this.data.name === 'loaiVanBan') {
        updateRespone = this.docService.addLoaiVanBan(this.dmForm.value, this.common.DH_VB_LoaiVanBan.Insert);
      } else if (this.data.name === 'mucDoKhan') {
        updateRespone = this.docService.addMucDoKhan(this.dmForm.value, this.common.DH_VB_MucDoKhan.Insert);
      } else if (this.data.name === 'mucDoMat') {
        updateRespone = this.docService.addMucDoMat(this.dmForm.value, this.common.DH_VB_MucDoMat.Insert);
      }
    } else {
      if (this.data.name === 'coQuanBanHanh') {
        updateRespone = this.docService.editCoQuanBanHanh({
          data: this.dmForm.value,
          condition: { id: this.data.body.id }
        }, this.common.DH_VB_CoQuanBanHanh.Update);
      } else if (this.data.name === 'hinhThucGuiNhan') {
        updateRespone = this.docService.editHinhThucGuiNhan({
          data: this.dmForm.value,
          condition: { id: this.data.body.id }
        }, this.common.DH_VB_HinhThucGuiNhan.Update);
      } else if (this.data.name === 'linhVucVanBan') {
        updateRespone = this.docService.editLinhVucVanBan({
          data: this.dmForm.value,
          condition: { id: this.data.body.id }
        }, this.common.DH_VB_LinhVucVanBan.Update);
      } else if (this.data.name === 'loaiVanBan') {
        updateRespone = this.docService.editLoaiVanBan({
          data: this.dmForm.value,
          condition: { id: this.data.body.id }
        }, this.common.DH_VB_LoaiVanBan.Update);
      } else if (this.data.name === 'mucDoKhan') {
        updateRespone = this.docService.editMucDoKhan({
          data: this.dmForm.value,
          condition: { id: this.data.body.id }
        }, this.common.DH_VB_MucDoKhan.Update);
      } else if (this.data.name === 'mucDoMat') {
        updateRespone = this.docService.editMucDoMat({
          data: this.dmForm.value,
          condition: { id: this.data.body.id }
        }, this.common.DH_VB_MucDoMat.Update);
      }
    }
    if (updateRespone) {
      updateRespone.subscribe(res => {
        if (res.error) {
          this.common.messageErr(res);
        } else {
          this.dialogRef.close(res.message);
        }
      });
    }
  }
  getParentCoQuanBanHanh() {
    this.docService.getCoQuanBanHanh({}, this.common.DH_VB_CoQuanBanHanh.Insert)
      .subscribe(res => {
        if (!res.error) {
          res.data.forEach(element => {
            this.parent_ids.push({ value: element.id, display: element.name });
          });
        }
      });
  }
  getParentLinhVucVanBan() {
    this.docService.getLinhVucVanBan({}, this.common.DH_VB_LinhVucVanBan.Insert)
      .subscribe(res => {
        if (!res.error) {
          res.data.forEach(element => {
            this.parent_ids.push({ value: element.id, display: element.name });
          });
        }
      });
  }
  getParentLoaiVanBan() {
    this.docService.getLoaiVanBan({}, this.common.DH_VB_LoaiVanBan.Insert)
      .subscribe(res => {
        console.log(res);
        if (!res.error) {
          res.data.forEach(element => {
            this.parent_ids.push({ value: element.id, display: element.name });
          });
        }
      });
  }
  getMucDoMat() {
    this.docService.getMucDoMat({}, this.common.DH_VB_LoaiVanBan.Insert)
      .subscribe(res => {
        if (!res.error) {
          res.data.forEach(element => {
            this.mucDoMats.push({ value: element.id, display: element.name });
          });
        }
      });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
