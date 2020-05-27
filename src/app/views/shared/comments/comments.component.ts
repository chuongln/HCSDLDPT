import { Component, Inject, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CommentsService } from './../../../services/comments.service';
import { RolePermissionService } from '../../../services/role-permission.service';
import { StorageService } from './../../../services/storage.service';
import { AuthConstants } from './../../../config/auth-constants';

// Translate
import { CommonService } from './../../../services/common.service';
import { isEmpty } from 'rxjs/operators';
import { SysDmService } from './../../../services/sys-dm';

// tslint:disable-next-line: class-name
interface select {
  value: number;
  display: string;
}
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html'
})
export class CommentsComponent {
  dataComments: any;
  commentsForm: FormGroup;
  submitted = false;
  roleLevels: select[] = [];
  portal_account_id: number;
  idEdit: number = 0;
  id_dataTypes: number;
  id_data: number;
  dataType: any;
  isEmptyComment: boolean = false;
  get f() { return this.commentsForm.controls; }
  constructor(
    private _http: HttpClient,
    private fb: FormBuilder,
    private common: CommonService,
    private dmService: SysDmService,
    private roleLevelService: RolePermissionService,
    private comments: CommentsService,
    private storageService: StorageService,
    public dialogRef: MatDialogRef<CommentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.storageService.get(AuthConstants.ID).then(res => {
      this.portal_account_id = res;
    });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.loadCombo();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  loadCombo() {
    this.id_data = this.data.id;
    this.getRoleLevels();
    this.getDataTypes();
    this.createFormComments();
  }
  //#region  Comments
  getDataTypes() {
    this.dmService.getDataType({}, this.data.permission).subscribe(res => {
      if (res.error) {
        this.common.messageErr(res);
      } else {
        res.data.forEach(element => {
          if (element.code === this.data.code) {
            this.id_dataTypes = element.id;
          }
        });
        this.getComments();
      }
    });
  }
  getComments() {
    // roleLevel laf tam thoi. Sau se bo di roleLevel va de tu service tu get.
    this.comments.getCommentsByIdData({ id_dataTypes: this.id_dataTypes, id_data: this.id_data, roleLevel: 5 }, this.data.permission)
      .subscribe(res => {
        if (res.error) {
          this.isEmptyComment = true;
        } else {
          this.isEmptyComment = false;
          this.dataComments = res.data;
        }
      });
  }
  createFormComments() {
    this.commentsForm = this.fb.group(
      {
        id_dataTypes: [this.id_dataTypes],
        id_data: [this.id_data],
        content: ['', [Validators.required]],
        viewableRoleLevel: ['0']
      });
  }
  onSubmit() {
    this.f['id_dataTypes'].setValue(this.id_dataTypes);
    this.submitted = true;
    // stop here if form is invalid
    if (this.commentsForm.invalid) {
      return;
    }
    if (this.idEdit === 0) {
      this.insertComments();
    } else {
      this.updateComments();
    }
  }
  insertComments() {
    this.comments.insertComments(this.commentsForm.value, this.data.permission)
      .subscribe(res => {
        if (res.error) {
          this.common.messageErr(res);
        } else {
          this.getComments();
          this.submitted = false;
          this.f['content'].setValue('');
        }
      });
  }
  updateComments() {
    this.comments.updateComments({ data: this.commentsForm.value, condition: { id: this.idEdit } }, this.data.permission)
      .subscribe(res => {
        console.log(res);
        if (res.error) {
          this.common.messageErr(res);
        } else {
          this.idEdit = 0;
          this.submitted = false;
          this.f['content'].setValue('');
          this.getComments();
        }
      });
  }

  deleteComments(data: any) {
    this.comments.deleteComments({ id: data.id }, this.data.permission)
      .subscribe(res => {
        if (res.error) {
          this.common.messageErr(res);
        } else {
          this.getComments();
        }
      });
  }
  getRoleLevels() {
    this.roleLevelService.getRoleLevel({}, this.data.permission)
      .subscribe(res => {
        if (res.error) {
          this.common.messageErr(res);
        } else {
          res.data.forEach(element => {
            this.roleLevels.push({ value: element.id, display: element.name });
          });
        }
      });
  }
  clickMethodDelete(data: any) {
    if (confirm('You sure delete comment')) {
      this.deleteComments(data);
    }
  }
  openEditComments(data: any) {
    this.idEdit = data.id;
    this.commentsForm.setValue({
      'id_dataTypes': this.id_dataTypes,
      'id_data': this.id_data,
      'content': data.content,
      'viewableRoleLevel': data.viewableRoleLevel
    });
  }
}

