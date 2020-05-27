import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
// Translate
import { CommonService } from '../../../services/common.service';
import { DocService } from '../../../services/doc.service';
import * as moment from 'moment';
import * as dateFormat from 'dateformat';
import { TreeNode } from 'primeng/api/treenode';
import { DonViService } from '../../../services/don-vi.service';
import { SysDmService } from '../../../services/sys-dm';

// tslint:disable-next-line: class-name
interface select {
  value: number;
  display: string;
}
@Component({
  selector: 'app-dialog-detail-vanban',
  templateUrl: './dialog-detail-vanban.component.html'
})
export class DialogDetailVanBanComponent implements OnInit {
  vanBanForm: FormGroup;
  submitted = false;
  today: string;
  // convenience getter for easy access to form fields
  get f() { return this.vanBanForm.controls; }
  loaiVanBans: select[] = [];
  linhVucVanBans: select[] = [];
  mucDoMats: select[] = [];
  mucDoKhans: select[] = [];
  coQuanBanHanhs: select[] = [];
  hinhThucGuiNhans: select[] = [];
  donViNgoais: select[] = [];
  canBoNgoais: select[] = [];
  canBos: select[] = [];
  donVis: TreeNode[];
  selectedDonVis: TreeNode;
  constructor(
    private common: CommonService,
    private fb: FormBuilder,
    private docService: DocService,
    private donVi: DonViService,
    private dmService: SysDmService,
    public dialogRef: MatDialogRef<DialogDetailVanBanComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.createForm();
    this.loadDm();
    this.loadDonVis();
    this.vanBanForm.disable();
  }
  createForm() {
    this.vanBanForm = this.fb.group(
      {
        id_sys_dataTypes: [null, [Validators.required]],
        soHieu: [null, [Validators.required]],
        soVaoSo: [null, [Validators.required]],
        trichYeu: [null, [Validators.required]],
        tomTat: [null],
        id_dm_loaiVanBan: [null, [Validators.required]],
        id_dm_linhVucVanBan: [null],
        id_dm_mucDoKhan: [null, [Validators.required]],
        id_dm_mucDoMat: [null, [Validators.required]],
        id_dm_coQuanBanHanh: [null, [Validators.required]],
        ngayBanHanh: [moment().format('YYYY-MM-DD'), [Validators.required]],
        ngayHetHieuLuc: [null],
        id_dm_hinhThucGuiNhan: [null, [Validators.required]],
        isDonViNgoai: [null, [Validators.required]],
        id_donvi_thucHien: [null, [Validators.required]],
        id_canbo_ThucHien: [null],
        ngayThucHien: [moment().format('YYYY-MM-DD'), [Validators.required]],
        ngayKy: [null],
        id_canbo_ky: [null],
        nguoiKy: [null],
        id_canbo_kyNhay: [null],
        nguoiKyNhay: [null],
      });
    if (this.data.body) {
      this.vanBanForm.setValue({
        'id_sys_dataTypes': this.data.body.id_sys_dataTypes,
        'soHieu': this.data.body.soHieu,
        'soVaoSo': this.data.body.soVaoSo,
        'trichYeu': this.data.body.trichYeu,
        'tomTat': this.data.body.tomTat,
        'id_dm_loaiVanBan': this.data.body.id_dm_loaiVanBan,
        'id_dm_linhVucVanBan': this.data.body.id_dm_linhVucVanBan,
        'id_dm_mucDoKhan': this.data.body.id_dm_mucDoKhan,
        'id_dm_mucDoMat': this.data.body.id_dm_mucDoMat,
        'id_dm_coQuanBanHanh': this.data.body.id_dm_coQuanBanHanh,
        'ngayBanHanh': dateFormat(this.data.body.ngayBanHanh, 'yyyy-mm-dd', true),
        'ngayHetHieuLuc': dateFormat(this.data.body.ngayHetHieuLuc, 'yyyy-mm-dd', true),
        'id_dm_hinhThucGuiNhan': this.data.body.id_dm_hinhThucGuiNhan,
        'isDonViNgoai': this.data.body.isDonViNgoai.data[0],
        'id_donvi_thucHien': this.data.body.id_donvi_thucHien,
        'id_canbo_ThucHien': this.data.body.id_canbo_ThucHien,
        'ngayThucHien': dateFormat(this.data.body.ngayThucHien, 'yyyy-mm-dd', true),
        'ngayKy': null,
        'id_canbo_ky': this.data.body.id_canbo_ky,
        'nguoiKy': this.data.body.nguoiKy,
        'id_canbo_kyNhay': this.data.body.id_canbo_kyNhay,
        'nguoiKyNhay': this.data.body.nguoiKyNhay
      });
      if (this.data.body.ngayKy) {
        this.f.ngayKy.setValue(dateFormat(this.data.body.ngayKy, 'yyyy-mm-dd', true));
      }
      if (this.data.body.isDonViNgoai.data[0] === 1) {
        this.getCanBoDonViNgoai();
      }
    }
    if (!this.f.id_sys_dataTypes.value) {
      this.getDataTypes();
    }
  }
  onSubmit() {
  }
  getDataTypes() {
    this.dmService.getDataType({}, this.common.DHBV.View).subscribe(res => {
      if (res.error) {
        this.common.messageErr(res);
      } else {
        res.data.forEach(element => {
          if (element.code === this.data.type) {
            this.f.id_sys_dataTypes.setValue(element.id);
          }
        });
      }
    });
  }
  loadDm() {
    this.docService.getCoQuanBanHanh({}, this.common.DHBV.View).subscribe(res => {
      if (!res.error) {
        res.data.forEach(element => {
          this.coQuanBanHanhs.push({ value: element.id, display: element.name });
        });
      }
    });
    this.docService.getDonViNgoai({}, this.common.DHBV.View).subscribe(res => {
      if (!res.error) {
        res.data.forEach(element => {
          this.donViNgoais.push({ value: element.id, display: element.name });
        });
      }
    });
    this.docService.getHinhThucGuiNhan({}, this.common.DHBV.View).subscribe(res => {
      if (!res.error) {
        res.data.forEach(element => {
          this.hinhThucGuiNhans.push({ value: element.id, display: element.name });
        });
      }
    });
    this.docService.getLinhVucVanBan({}, this.common.DHBV.View).subscribe(res => {
      if (!res.error) {
        res.data.forEach(element => {
          this.linhVucVanBans.push({ value: element.id, display: element.name });
        });
      }
    });
    this.docService.getLoaiVanBan({}, this.common.DHBV.View).subscribe(res => {
      if (!res.error) {
        res.data.forEach(element => {
          this.loaiVanBans.push({ value: element.id, display: element.name });
        });
      }
    });
    this.docService.getMucDoKhan({}, this.common.DHBV.View).subscribe(res => {
      if (!res.error) {
        res.data.forEach(element => {
          this.mucDoKhans.push({ value: element.id, display: element.name });
        });
      }
    });
    this.docService.getMucDoMat({}, this.common.DHBV.View).subscribe(res => {
      if (!res.error) {
        res.data.forEach(element => {
          this.mucDoMats.push({ value: element.id, display: element.name });
        });
      }
    });
  }
  getCanBoDonViNgoai() {
    this.docService.getDonViNgoaiCanBo({id_doc_donvi: this.f.id_donvi_thucHien.value}, this.common.DHBV.View)
    .subscribe(res => {
      if (!res.error) {
        this.canBoNgoais = [];
        res.data.forEach(element => {
          this.canBoNgoais.push({ value: element.id, display: element.hoTen });
        });
      } else {
        this.canBoNgoais = [];
      }
    });
  }
  loadDonVis() {
    this.today = moment().format('YYYY/MM/DD');
    this.donVi.getTreeToValue({ id_trungTam: 1, tuNgay: this.today, denNgay: this.today }, this.common.DHBV.View)
    .subscribe(res => {
      if (res.error) {
        this.common.messageErr(res);
      } else {
        this.donVis = res.data;
        if (this.donVis && this.data.body && this.data.body.isDonViNgoai.data[0] === 0 && this.data.body.id_donvi_thucHien) {
          this.checkNode(this.donVis, this.data.body.id_donvi_thucHien);
          this.getCanBos();
        }
      }
    });
  }
  getCanBos() {
    this.donVi.getCanBo({ id_donVis: this.f.id_donvi_thucHien.value, ngay: this.today }, this.common.DHBV.View)
    .subscribe(res => {
      if (!res.error) {
        this.canBos = [];
        res.data.forEach(element => {
          this.canBos.push({ value: element.canbo_id, display: element.hoTen });
        });
      } else {
        this.canBos = [];
      }
    });
  }
  nodeSelectDonVi(event) {
    if (this.vanBanForm.controls.id_donvi_thucHien.value === event.node.data) {
      this.nodeUnselectDonVi(event);
    } else {
      this.vanBanForm.controls.id_donvi_thucHien.setValue(event.node.data);
      this.getCanBos();
    }
  }
  nodeUnselectDonVi(event) {
    this.vanBanForm.controls.id_donvi_thucHien.setValue(null);
    this.selectedDonVis = null;
    this.canBos = [];
  }
  // chi check cho select 1 node (khong multi)
  checkNode(nodes: TreeNode[], str: number) {
    nodes.forEach(node => {
      if (str === node.data) {
        this.selectedDonVis = (node);
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
  onNoClick(): void {
    this.dialogRef.close();
  }
}
