import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';

// Translate
import { CommonService } from '../../../services/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogUpdateVanBanComponent } from './dialog-update-vanban.component';
import { StorageService } from '../../../services/storage.service';
import { AuthConstants } from '../../../config/auth-constants';
import { DocService } from '../../../services/doc.service';
import { SysDmService } from '../../../services/sys-dm';
import { AttachFilesDialogComponent } from '../../shared/attach-files-dialog/attach-files-dialog.component';
import { CommentsComponent } from '../../shared/comments/comments.component';
import { DialogDetailVanBanComponent } from './dialog-detail-vanban.component';

// tslint:disable-next-line: class-name
interface select {
  value: number;
  display: string;
}
@Component({
  selector: 'app-tailieu',
  templateUrl: './vanban.component.html'
})
export class TaiLieuComponent implements OnInit {
  displayedColumns = ['index', 'soVaoSo', 'trichYeu', 'ngayBanHanh', 'ngayHetHieuLuc', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  selectedRow: any;
  id_project: string;
  code_project: string;
  permission: any;
  loaivanban: string;
  searchForm: FormGroup;
  codeDataType: string = 'TAI_LIEU';
  loaiVanBans: select[] = [];
  linhVucVanBans: select[] = [];
  mucDoMats: select[] = [];
  mucDoKhans: select[] = [];
  coQuanBanHanhs: select[] = [];
  hinhThucGuiNhans: select[] = [];
  get fs() { return this.searchForm.controls; }
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private docService: DocService,
    private common: CommonService,
    public dialog: MatDialog,
    private router: Router,
    private dmService: SysDmService,
    private storageService: StorageService
  ) {
    this.storageService.get(AuthConstants.PERMISSION).then(res => {
      this.permission = res;
    });
  }

  ngOnInit() {
    this.createSearchForm();
    this.onSearch();
    if (!this.permission.DH_VB_TaiLieuVanBan._view) {
      this.router.navigate(['/']);
    }
    this.loadDm();
  }
  createSearchForm() {
    this.searchForm = this.fb.group(
      {
        id_dataType: [null],
        soVaoSo: [null],
        trichYeu: [null],
        id_dm_loaiVanBan: [null],
        id_dm_linhVucVanBan: [null],
        id_dm_mucDoKhan: [null],
        id_dm_mucDoMat: [null],
        id_dm_coQuanBanHanh: [null],
        id_dm_hinhThucGuiNhan: [null],
        ngayBanHanhTu: [null],
        ngayBanHanhDen: [null],
        ngayThucHienTu: [null],
        ngayThucHienDen: [null],
        id_account_assign: [null],
        id_account_incharge: [null],
        id_workflow_state: [null]
      });
    this.getDataTypes();
  }
  onSearch() {
    if (this.fs.ngayBanHanhTu.value === '') {
      this.fs.ngayBanHanhTu.setValue(null);
    }
    if (this.fs.ngayBanHanhDen.value === '') {
      this.fs.ngayBanHanhDen.setValue(null);
    }
    if (this.fs.ngayThucHienTu.value === '') {
      this.fs.ngayThucHienTu.setValue(null);
    }
    if (this.fs.ngayThucHienDen.value === '') {
      this.fs.ngayThucHienDen.setValue(null);
    }
    this.getVanBan();
  }
  getDataTypes() {
    this.dmService.getDataType({}, this.common.DH_VB_TaiLieuVanBan.View).subscribe(res => {
      if (res.error) {
        this.common.messageErr(res);
      } else {
        res.data.forEach(element => {
          if (element.code === this.codeDataType) {
            this.fs.id_dataType.setValue(element.id);
          }
        });
        this.onSearch();
      }
    });
  }
  getVanBan() {
    this.docService.getListVanBan(this.searchForm.value, this.common.DH_VB_TaiLieuVanBan.View).subscribe(res => {
      if (res.error) {
        // this.common.messageErr(res);
        this.common.messageErr(res);
        this.dataSource = new MatTableDataSource();
      } else {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }
  openDetailDialog(data: any): void {
    const dialogRef = this.dialog.open(DialogDetailVanBanComponent, {
      width: '700px',
      height: '80%',
      data: data
    });
  }
  openUpdateDialog(data: any): void {
    const dialogRef = this.dialog.open(DialogUpdateVanBanComponent, {
      width: '700px',
      height: '80%',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onSearch();
        this.common.messageRes(result);
      }
    });
  }
  openAttachFiles(data: any): void {
    const dialogRef = this.dialog.open(AttachFilesDialogComponent, {
      height: '80%',
      width: '700px',
      data: data
    });
  }
  openComments(data: any): void {
    const dialogRef = this.dialog.open(CommentsComponent, {
      height: '80%',
      width: '800px',
      data: data
    });
  }
  openDeleteDialog(data: any): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: { delete: 1, name: data.name }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        this.docService.deleteVanBan({ id: data.id }, this.common.DH_VB_TaiLieuVanBan.Delete).subscribe(res => {
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
  loadDm() {
    this.docService.getCoQuanBanHanh({}, this.common.DH_VB_TaiLieuVanBan.View).subscribe(res => {
      if (!res.error) {
        res.data.forEach(element => {
          this.coQuanBanHanhs.push({ value: element.id, display: element.name });
        });
      }
    });
    this.docService.getHinhThucGuiNhan({}, this.common.DH_VB_TaiLieuVanBan.View).subscribe(res => {
      if (!res.error) {
        res.data.forEach(element => {
          this.hinhThucGuiNhans.push({ value: element.id, display: element.name });
        });
      }
    });
    this.docService.getLinhVucVanBan({}, this.common.DH_VB_TaiLieuVanBan.View).subscribe(res => {
      if (!res.error) {
        res.data.forEach(element => {
          this.linhVucVanBans.push({ value: element.id, display: element.name });
        });
      }
    });
    this.docService.getLoaiVanBan({}, this.common.DH_VB_TaiLieuVanBan.View).subscribe(res => {
      if (!res.error) {
        res.data.forEach(element => {
          this.loaiVanBans.push({ value: element.id, display: element.name });
        });
      }
    });
    this.docService.getMucDoKhan({}, this.common.DH_VB_TaiLieuVanBan.View).subscribe(res => {
      if (!res.error) {
        res.data.forEach(element => {
          this.mucDoKhans.push({ value: element.id, display: element.name });
        });
      }
    });
    this.docService.getMucDoMat({}, this.common.DH_VB_TaiLieuVanBan.View).subscribe(res => {
      if (!res.error) {
        res.data.forEach(element => {
          this.mucDoMats.push({ value: element.id, display: element.name });
        });
      }
    });
  }
  onSelectedRow(row: any) {
    if (!this.selectedRow) {
      this.selectedRow = row;
    } else {
      this.selectedRow = row;
    }
  }
}
