import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
// Translate
import { CommonService } from '../../../services/common.service';

import { RolePermissionService } from './../../../services/role-permission.service';
import { RoleUpdateComponent } from './../dialog/role-update.component';
import { TreeNode } from 'primeng/api/treenode';
import { StorageService } from '../../../services/storage.service';
import { AuthConstants } from '../../../config/auth-constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html'
})
export class RoleComponent implements OnInit {
  displayedColumns1 = ['code', 'name', 'actions'];
  dataSource1: MatTableDataSource<any>;
  selectedRow1: boolean;
  displayedColumns2 = ['code', 'name', 'view', 'export', 'insert', 'update', 'delete', 'actions'];
  dataSource2: MatTableDataSource<any>;
  selectedRow2: boolean;
  loadTable1: boolean = false;
  loadTable2: boolean = true;
  show: boolean = false;
  rolePermissionTree: TreeNode[];
  role_id: number;
  cols: any[];
  @ViewChild(MatSort) sort: MatSort;
  permission: any;
  constructor(
    private common: CommonService,
    private roleService: RolePermissionService,
    public dialog: MatDialog,
    private router: Router,
    private storageService: StorageService
  ) {
    this.storageService.get(AuthConstants.PERMISSION).then(res => {
      this.permission = res;
    });
  }

  ngOnInit() {
    this.onSearch();
    if (!this.permission.HT_QuanLyNhomQuyen._view) {
      this.router.navigate(['/']);
    }
  }

  onSearch() {
      this.getRole();
  }
  getRole() {
    this.roleService.getRole({}, this.common.HT_QuanLyNhomQuyen.View).subscribe(res => {
      this.rolePermissionTree = [];
      this.role_id = null;
      this.loadTable1 = true;
      this.dataSource2 = new MatTableDataSource();
      if (res.error) {
        this.common.messageErr(res);
        this.dataSource1 = new MatTableDataSource();
      } else {
        this.dataSource1 = new MatTableDataSource(res.data);
        this.dataSource1.sort = this.sort;
      }
    });
  }
  getRolePermission() {
    this.roleService.getTablePermission({id_role: this.role_id}, this.common.HT_QuanLyNhomQuyen.View).subscribe(res => {
      this.loadTable2 = true;
      if (res.error) {
        this.common.messageErr(res);
        this.rolePermissionTree = [];
      } else {
        this.rolePermissionTree = res.data;
        this.cols = [
          { field: '_view', header: 'View' },
          { field: '_export', header: 'Export' },
          { field: '_insert', header: 'Insert' },
          { field: '_update', header: 'Update' },
          { field: '_delete', header: 'Delete' }
        ];
        this.convertTree(this.rolePermissionTree);
      }
    });
  }
  openUpdateDialog(data: any): void {
    const dialogRef = this.dialog.open(RoleUpdateComponent, {
      width: '700px',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onSearch();
        this.common.messageRes(result);
      }
    });
  }
  openDeleteDialog(data: any): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: {delete: 1, name: data.name}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        this.roleService.deleteRole({ id: data.id }, this.common.HT_QuanLyNhomQuyen.Delete)
        .subscribe(res => {
          if (res.error) {
            this.common.messageErr(res);
          } else {
            this.onSearch();
            this.common.messageRes(res.message);
          }
        });
      }
    });
  }
  onSubmit() {
    if (!this.role_id || !this.rolePermissionTree) {
      return;
    }
    this.deleteParent(this.rolePermissionTree);
    console.log(this.rolePermissionTree);
    this.roleService.updateRolePermission({id_role: this.role_id, data: this.rolePermissionTree}, this.common.HT_QuanLyNhomQuyen.Update)
    .subscribe(res => {
      this.show = false;
      if (res.error) {
        this.common.messageErr(res);
      } else {
        this.common.messageRes(res.message);
        this.onSearch();
      }
    });
  }

  deleteParent(nodes: TreeNode[]) {
    nodes.forEach(node => {
      delete node['parent'];
      if (node.children !== undefined) {
        node.children.forEach(child => {
          delete child['parent'];
        });
      } else {
        return;
      }
      this.deleteParent(node.children);
      node.children.forEach(child => {
        delete child['parent'];
      });
    });
  }
  convertTree(nodes: TreeNode[]) {
    nodes.forEach(node => {
      node.data._view = this.common.bitToValue(node.data._view);
      node.data._export = this.common.bitToValue(node.data._export);
      node.data._insert = this.common.bitToValue(node.data._insert);
      node.data._update = this.common.bitToValue(node.data._update);
      node.data._delete = this.common.bitToValue(node.data._delete);
      if (node.children !== undefined) {
        node.children.forEach(child => {
          child.data._view = this.common.bitToValue(child.data._view);
          child.data._export = this.common.bitToValue(child.data._export);
          child.data._insert = this.common.bitToValue(child.data._insert);
          child.data._update = this.common.bitToValue(child.data._update);
          child.data._delete = this.common.bitToValue(child.data._delete);
        });
      } else {
        return;
      }
      this.convertTree(node.children);
      node.children.forEach(child => {
        child.data._view = this.common.bitToValue(child.data._view);
        child.data._export = this.common.bitToValue(child.data._export);
        child.data._insert = this.common.bitToValue(child.data._insert);
        child.data._update = this.common.bitToValue(child.data._update);
        child.data._delete = this.common.bitToValue(child.data._delete);
      });
    });
  }
  onSelectedRow(row: any) {
    this.loadTable2 = false;
    this.role_id = row.id;
    this.getRolePermission();
    if (!this.selectedRow1) {
      this.selectedRow1 = row;
    } else {
      this.selectedRow1 = row;
    }
  }
  onSelectedRow2(row: any) {
    if (!this.selectedRow2) {
      this.selectedRow2 = row;
    } else {
      this.selectedRow2 = row;
    }
  }
}
