import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ChamCongService {

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  //#region KyHieuChamCong
  // Retrieve data with condition in body
  getKyHieuChamCong(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/dm-kyhieuchamcong/get', data, permission);
  }
  // Create a new item
  insertKyHieuChamCong(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/dm-kyhieuchamcong/insert', data, permission);
  }
  // Update a item with condition {id: id}
  editKyHieuChamCong(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/dm-kyhieuchamcong/update', data, permission);
  }
  // Delete a item with id
  deleteKyHieuChamCong(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/dm-kyhieuchamcong/delete', data, permission);
  }
  //#endregion

  //#region NhomKyHieuChamCong
  // Retrieve data with condition in body
  getNhomKyHieuChamCong(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/dm-nhomtongcong/get', data, permission);
  }
  // Create a new item
  insertNhomKyHieuChamCong(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/dm-nhomtongcong/insert', data, permission);
  }
  // Update a item with condition {id: id}
  editNhomKyHieuChamCong(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/dm-nhomtongcong/update', data, permission);
  }
  // Delete a item with id
  deleteNhomKyHieuChamCong(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/dm-nhomtongcong/delete', data, permission);
  }
  //#endregion

  //#region PhanNhomKyHieuChamCong
  // Retrieve data with condition in body
  getPhanNhomKyHieuChamCong(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/dm-nhomtongcong-kyhieu/get', data, permission);
  }
  // Create a new item
  insertPhanNhomKyHieuChamCong(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/dm-nhomtongcong-kyhieu/insert', data, permission);
  }
  // Update a item with condition {id: id}
  editPhanNhomKyHieuChamCong(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/dm-nhomtongcong-kyhieu/update', data, permission);
  }
  // Delete a item with id
  deletePhanNhomKyHieuChamCong(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/dm-nhomtongcong-kyhieu/delete', data, permission);
  }
  //#endregion

  //#region NgayNghi
  // Retrieve data with condition in body
  getNgayNghi(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/ngaynghi/get', data, permission);
  }
  getListNgayNghi(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/ngaynghi/getlist', data, permission);
  }
  // Create a new item
  insertNgayNghi(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/ngaynghi/insert', data, permission);
  }
  // Update a item with condition {id: id}
  editNgayNghi(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/ngaynghi/update', data, permission);
  }
  // Delete a item with id
  deleteNgayNghi(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/ngaynghi/delete', data, permission);
  }
  //#endregion

  //#region NgayLamBu
  // Retrieve data with condition in body
  getNgayLamBu(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/ngaylambu/get', data, permission);
  }
  // Create a new item
  insertNgayLamBu(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/ngaylambu/insert', data, permission);
  }
  // Update a item with condition {id: id}
  editNgayLamBu(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/ngaylambu/update', data, permission);
  }
  // Delete a item with id
  deleteNgayLamBu(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/ngaylambu/delete', data, permission);
  }
  //#endregion

  //#region DangKyNghiLamViec
  // Retrieve data with condition in body
  getDangKyNghiLamViec(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/dangkynghilamviec/get-list', data, permission);
  }
  getTicketType(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/ticket-type/get', data, permission);
  }
  // Create a new item
  insertDangKyNghiLamViec(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/dangkynghilamviec/insert', data, permission);
  }
  // Update a item with condition {id: id}
  editDangKyNghiLamViec(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/dangkynghilamviec/update', data, permission);
  }
  // Delete a item with id
  deleteDangKyNghiLamViec(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cc/dangkynghilamviec/delete', data, permission);
  }
  //#endregion
}
