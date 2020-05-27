import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PortalAccountService } from './../../../services/portal-account.service';
import { DonViService } from './../../../services/don-vi.service';
import { CheckableSettings } from '@progress/kendo-angular-treeview';
import { Observable, of } from 'rxjs';
import { RolePermissionService } from '../../../services/role-permission.service';
import * as moment from 'moment';
import { CommonService } from '../../../services/common.service';
// tslint:disable-next-line: class-name
interface select {
  value: number;
  display: string;
}

@Component({
  selector: 'app-portal-account',
  templateUrl: './portal-account-edit.component.html'
})
export class PortalAccountEditComponent implements OnInit {
  accountForm: FormGroup;
  submitted = false;
  canBos: select[] = [];
  nhomQuyens: select[] = [];
  public id_donVis: any[] = [];
  public id_roles: any[] = [];
  donViTree: any;
  roleTree: any;
  today: string;
  expandedKeys: any[] = [];
  loadTree1: boolean = false;
  loadTree2: boolean = false;
  // convenience getter for easy access to form fields
  get f() { return this.accountForm.controls; }

  constructor(
    private fb: FormBuilder,
    private account: PortalAccountService,
    private donVi: DonViService,
    private roleService: RolePermissionService,
    private common: CommonService,
    public dialogRef: MatDialogRef<PortalAccountEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
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
        username: ['', [Validators.required, Validators.email]],
        password: ['', []],
        id_donVis: ['', []],
        id_portal_nhomQuyen: ['']
      });

    this.accountForm.setValue({
      'username': this.data.username,
      'password': '',
      'id_donVis': this.data.id_donVis,
      'id_portal_nhomQuyen': this.data.id_portal_nhomQuyen
    });
    if (this.data.id_donVis) {
      let i;
      i = this.data.id_donVis.split(',');
      i.forEach(element => {
        this.id_donVis.push(parseInt(element, 10));
      });
    }
  }

  loadCombo() {
    this.today = moment().format('YYYY/MM/DD');
    this.account.getCanBoChuaCoTaiKhoan(this.common.HT_QuanLyNguoiDung.Update).subscribe(res => {
      if (res.error) {
        this.common.messageErr(res);
      } else {
        res.data.forEach(element => {
          this.canBos.push({ value: element.canbo_id, display: element.hoTen });
        });
      }
    });
    this.donVi.getTreeToValue({ id_trungTam: 1, tuNgay: this.today, denNgay: this.today }, this.common.HT_QuanLyNguoiDung.Update)
      .subscribe(res => {
        this.loadTree1 = true;
        if (res.error) {
          this.common.messageErr(res);
        } else {
          this.donViTree = res.data;
          this.getAllParentTextProperties(this.donViTree);
        }
      });
    this.roleService.getRoleByIdAccount({ id_portal_account: this.data.portal_account_id }, this.common.HT_QuanLyNguoiDung.Update)
      .subscribe(res => {
        this.loadTree2 = true;
        if (res.error) {
          this.common.messageErr(res);
        } else {
          this.roleTree = res.data;
          res.data.forEach(element => {
            if (element.id_portal_account) {
              this.id_roles.push(element.id_role);
            }
          });
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
    // Edit portal_account
    this.account.edit({ id_portal_account: this.data.portal_account_id, ...this.accountForm.value }, this.common.HT_QuanLyNguoiDung.Update)
      .subscribe(res => {
        if (res.error) {
          this.common.messageErr(res);
        } else {
          this.roleService.updateListAccountRole({
            id_portal_account: this.data.portal_account_id,
            id_roles: this.id_roles.toString()
          },
            this.common.HT_QuanLyNhomQuyen.Update)
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
  getAllParentTextProperties(items: Array<any>) {
    items.forEach(i => {
      if (i.children) {
        this.expandedKeys.push(i.label);
        this.getAllParentTextProperties(i.children);
      }
    });
    this.expandedKeys = this.expandedKeys.slice();
  }
}
