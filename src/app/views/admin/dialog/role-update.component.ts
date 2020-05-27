import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
// Translate
import { LanguageService } from '../../../services/language.service';
import { RolePermissionService } from '../../../services/role-permission.service';
import { CommonService } from '../../../services/common.service';
@Component({
  selector: 'app-role-update',
  templateUrl: './role-update.component.html'
})
export class RoleUpdateComponent implements OnInit {
  roleForm: FormGroup;
  lastUpdateForm: FormGroup;
  submitted = false;
  // convenience getter for easy access to form fields
  get f() { return this.roleForm.controls; }

  constructor(
    private common: CommonService,
    private fb: FormBuilder,
    private rolePermissionService: RolePermissionService,
    public dialogRef: MatDialogRef<RoleUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.roleForm = this.fb.group(
      {
        code: ['', [Validators.required]],
        name: ['', [Validators.required]],
        description: [''],
        sortOrder: [0, [Validators.required, Validators.min(0)]],
      });
    if (this.data) {
      this.roleForm.setValue({
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
    if (this.roleForm.invalid) {
      return;
    }
    if (this.data) {
      this.rolePermissionService.updateRole({
        data: this.roleForm.value,
        condition: { id: this.data.id }
      }, this.common.HT_QuanLyNhomQuyen.Insert)
        .subscribe(res => {
          if (res.error) {
            this.common.messageErr(res);
          } else {
            this.dialogRef.close(res.message);
          }
        });
    } else {
      this.rolePermissionService.insertRole(this.roleForm.value, this.common.HT_QuanLyNhomQuyen.Update)
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
