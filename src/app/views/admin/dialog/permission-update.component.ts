import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { TreeNode } from 'primeng/api';

// Translate
import { RolePermissionService } from '../../../services/role-permission.service';
import { CommonService } from '../../../services/common.service';
@Component({
  selector: 'app-permission-update',
  templateUrl: './permission-update.component.html'
})
export class PermissionUpdateComponent implements OnInit {
  permissionForm: FormGroup;
  lastUpdateForm: FormGroup;
  submitted = false;
  permissionTrees: TreeNode[];
  selectedParent: TreeNode;
  // convenience getter for easy access to form fields
  get f() { return this.permissionForm.controls; }

  constructor(
    private common: CommonService,
    private fb: FormBuilder,
    private rolePermissionService: RolePermissionService,
    public dialogRef: MatDialogRef<PermissionUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.getPermissonTree();
    this.createForm();
  }
  createForm() {
    this.permissionForm = this.fb.group(
      {
        parent_id: [null, [Validators.required]],
        code: ['', [Validators.required]],
        name: ['', [Validators.required]],
        description: [''],
        sortOrder: [0, [Validators.required, Validators.min(0)]],
      });

  }
  setValueForm() {
    if (this.data) {
      this.permissionForm.setValue({
        'parent_id': this.data.parent_id,
        'code': this.data.code,
        'name': this.data.name,
        'description': this.data.description,
        'sortOrder': this.data.sortOrder,
      });
      if (this.permissionTrees) {
        this.checkNode(this.permissionTrees, this.data.parent_id);
      }
    }
  }
  getPermissonTree() {
    this.rolePermissionService.getTreePermission({}, this.common.HT_QuanLyQuyen.Insert).subscribe(res => {
      if (res.error) {
        this.common.messageErr(res);
      } else {
        this.permissionTrees = res.data;
        this.setValueForm();
      }
    });
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.permissionForm.invalid) {
      return;
    }
    if (this.data) {
      if (this.data.parent_id !== 0 || (this.data.parent_id === 0 && this.permissionForm.controls.parent_id.value === 0)) {
        this.rolePermissionService.updatePermission({
          data: this.permissionForm.value,
          condition: { id: this.data.id }
        }, this.common.HT_QuanLyQuyen.Update)
          .subscribe(res => {
            if (res.error) {
              this.common.messageErr(res);
            } else {
              this.dialogRef.close(res.message);
            }
          });
      } else {
        this.common.messageErr({ error: { message: 'Fail' } });
      }
    } else {
      this.rolePermissionService.insertPermission(this.permissionForm.value, this.common.HT_QuanLyQuyen.Insert )
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
  nodeSelect(event) {
    if (this.permissionForm.controls.parent_id.value === event.node.data) {
      this.nodeUnselect(event);
    } else {
      this.permissionForm.controls.parent_id.setValue(event.node.data);
    }
  }
  nodeUnselect(event) {
    this.permissionForm.controls.parent_id.setValue(null);
    this.selectedParent = null;
  }
  // chi check cho select 1 node (khong multi)
  checkNode(nodes: TreeNode[], str: number) {
    nodes.forEach(node => {
      if (str === node.data) {
        this.selectedParent = (node);
      }
      if (node.children !== undefined) {
        node.children.forEach(child => {
          if (str === child.data && !str === node.data) {
            node.partialSelected = true;
            child.parent = node;
          }
          if (str === node.data) {
            child.parent = node;
          }
        });
      } else {
        return;
      }
      this.checkNode(node.children, str);
      node.children.forEach(child => {
        if (child.partialSelected) {
          node.partialSelected = true;
        }
      });
    });
  }
}
