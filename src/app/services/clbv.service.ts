import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ClbvService {

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  //#region TieuChi
  // Retrieve data with condition in body
  getTieuChi(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('clbv/dm-tieuchi/get', data, permission);
  }
  // Create a new item
  insertTieuChi(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('clbv/dm-tieuchi/insert', data, permission);
  }
  // Update a item with condition {id: id}
  editTieuChi(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('clbv/dm-tieuchi/update', data, permission);
  }
  // Delete a item with id
  deleteTieuChi(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('clbv/dm-tieuchi/delete', data, permission);
  }
  //#endregion

  //#region TieuMuc
  // Retrieve data with condition in body
  getTieuMuc(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('clbv/dm-tieumuc/get', data, permission);
  }
  // Create a new item
  insertTieuMuc(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('clbv/dm-tieumuc/insert', data, permission);
  }
  // Update a item with condition {id: id}
  editTieuMuc(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('clbv/dm-tieumuc/update', data, permission);
  }
  // Delete a item with id
  deleteTieuMuc(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('clbv/dm-tieumuc/delete', data, permission);
  }
  //#endregion

  //#region DotKiemTra
  // Retrieve data with condition in body
  getDotKiemTra(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('clbv/dotkiemtra/get', data, permission);
  }
  // Create a new item
  insertDotKiemTra(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('clbv/dotkiemtra/insert', data, permission);
  }
  // Update a item with condition {id: id}
  editDotKiemTra(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('clbv/dotkiemtra/update', data, permission);
  }
  // Delete a item with id
  deleteDotKiemTra(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('clbv/dotkiemtra/delete', data, permission);
  }
  //#endregion

  //#region ChamDiem
  // get đợt kiểm tra theo id_portal_account
  getDotKiemTraByPortal_Account(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('clbv/chamdiem/getDotKiemTraByidAccount', data, permission);
  }

  // get đợt kiểm tra theo id_portal_account
  getTieuChiByPortal_Account(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('clbv/chamdiem/getTieuChiByidAccount', data, permission);
  }
  // Get danh sách các tiểu mục theo đợt và tiêu chí để chấm điểm
  getTieuMucByDotKiemTra_TieuChi(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('clbv/chamdiem/getTieuMucTheoTieuChiAndDot', data, permission);
  }
  // Update chấm điểm tiểu mục theo danh sách đã get lên
  updateChamDiemTieuMuc(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('clbv/chamdiem/update', data, permission);
  }
  //#endregion

  //#region ThongKe_BaoCao
  // get báo cao chi tiết kết quả các tiểu mục của tiêu chí theo đợt kiểm tra
  getKetQuaTieuMucTieuChiTheoDot(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('clbv/baocao/ketQuaTieuMucTieuChiTheoDot', data, permission);
  }

  // get thống kê kết quả kiểm tra các đợt theo khoảng thời gian
  getThongKeKetQuaCacDotTheoKhoangThoiGian(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('clbv/baocao/thongKeKetQuaCacDotTheoKhoangThoiGian', data, permission);
  }
  //#endregion
}
