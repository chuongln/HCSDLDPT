import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PortalAccountService } from './../../../services/portal-account.service';
import { PortalNhomQuyenService } from './../../../services/portal-nhom-quyen.service';
import { DonViService } from './../../../services/don-vi.service';
import { RolePermissionService } from './../../../services/role-permission.service';
import * as moment from 'moment';
import { CheckableSettings } from '@progress/kendo-angular-treeview';
import { Observable, of } from 'rxjs';
import { CommonService } from '../../../services/common.service';

// tslint:disable-next-line: class-name
interface select {
  value: number;
  display: string;
}

@Component({
  selector: 'app-portal-account',
  templateUrl: './portal-account-add.component.html'
})
export class PortalAccountAddComponent implements OnInit {
  accountForm: FormGroup;
  submitted = false;
  today: string;
  canBos: select[] = [];
  nhomQuyens: select[] = [];
  public id_donVis: any[] = [];
  public id_roles: any[] = [];
  donViTree: any;
  roleTree: any;
  loadTree1: boolean = false;
  loadTree2: boolean = false;
  public expandedKeys: any[] = [];
  // convenience getter for easy access to form fields
  get f() { return this.accountForm.controls; }

  constructor(
    private fb: FormBuilder,
    private account: PortalAccountService,
    private nhomQuyen: PortalNhomQuyenService,
    private donVi: DonViService,
    private common: CommonService,
    private roleService: RolePermissionService,
    public dialogRef: MatDialogRef<PortalAccountAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.loadCombo();
    this.createForm();
  }

  createForm() {
    this.accountForm = this.fb.group(
      {
        id_canbo: [null],
        username: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        id_donVis: ['', []],
        fullname: [null],
      });
  }

  loadCombo() {
    this.today = moment().format('YYYY/MM/DD');
    this.account.getCanBoChuaCoTaiKhoan(this.common.HT_QuanLyNguoiDung.Insert).subscribe(res => {
      if (res.error) {
        this.common.messageErr(res);
      } else {
        res.data.forEach(element => {
          this.canBos.push({ value: element.canbo_id, display: element.hoTen });
        });
      }
    });
    this.donVi.getTreeToValue({ id_trungTam: 1, tuNgay: this.today, denNgay: this.today }, this.common.HT_QuanLyNguoiDung.Insert)
      .subscribe(res => {
        this.loadTree1 = true;
        if (res.error) {
          this.common.messageErr(res);
        } else {
          this.donViTree = res.data;
          this.getAllParentTextProperties(this.donViTree);
        }
      });
    this.roleService.getRole({}, this.common.HT_QuanLyNguoiDung.Insert).subscribe(res => {
      this.loadTree2 = true;
      if (res.error) {
        this.common.messageErr(res);
      } else {
        this.roleTree = res.data;
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.accountForm.invalid) {
      return;
    }

    this.f.id_donVis.setValue(this.id_donVis.toString());
    // Add portal_account
    this.account.add(this.accountForm.value, this.common.HT_QuanLyNguoiDung.Insert).subscribe(res => {
      if (res.error) {
        this.common.messageErr(res);
      } else {
        console.log(res);
        this.roleService.updateListAccountRole({
          id_portal_account: res.data[0].id,
          id_roles: this.id_roles.toString()
        }, this.common.HT_QuanLyNhomQuyen.Insert)
          .subscribe(resRole => {
            if (resRole.error) {
              this.common.messageErr(res);
            } else {
            }
          });
        this.dialogRef.close(res.message);
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  getAllParentTextProperties(items: Array<any>) {
    items.forEach(i => {
      if (i.children) {
        this.expandedKeys.push(i.label);
        this.getAllParentTextProperties(i.children);
      }
    });
    this.expandedKeys = this.expandedKeys.slice();
  }
  public get checkableSettings(): CheckableSettings {
    return {
      checkChildren: true,
      checkParents: false,
      enabled: true,
      mode: 'multiple',
      checkOnClick: false
    };
  }
  public children = (dataItem: any): Observable<any[]> => of(dataItem.children);
  // public hasChildren = (dataItem: any): boolean => !!dataItem.children;
  public hasChildren(dataItem: any): boolean {
    // Check if the parent node has children.
    return dataItem.children && dataItem.children.length > 0;
  }
}
