import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class TkytService {

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  //#region ToKhaiYTe
  // Retrieve data with condition in body
  getToKhaiYTe(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('tkyt/tokhai/get-list', data, permission);
  }
  getToKhaiYTeByCMND(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('tkyt/tokhai/get', data, permission);
  }
  // Create a new item
  insertToKhaiYTe(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('tkyt/tokhai/insert-all', data, permission);
  }
  // Update a item with condition {id: id}
  editToKhaiYTe(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('tkyt/tokhai/update', data, permission);
  }
  // Delete a item with id
  deleteToKhaiYTe(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('tkyt/tokhai/delete', data, permission);
  }
  //#endregion

  //#region ToKhaiChiTiet
  // Retrieve data with condition in body
  getToKhaiChiTiet(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('tkyt/tokhai-chitiet/get-list', data, permission);
  }
  // Create a new item
  insertToKhaiChiTiet(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('tkyt/tokhai-chitiet/insert', data, permission);
  }
  // Update a item with condition {id: id}
  editToKhaiChiTiet(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('tkyt/tokhai-chitiet/update', data, permission);
  }
  // Delete a item with id
  deleteToKhaiChiTiet(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('tkyt/tokhai-chitiet/delete', data, permission);
  }
  //#endregion

  //#region YeuToDichTe
  // Retrieve data with condition in body
  getYeuToDichTe(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('tkyt/dm-yeutodichte/get', data, permission);
  }
  // Create a new item
  insertYeuToDichTe(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('tkyt/dm-yeutodichte/insert', data, permission);
  }
  // Update a item with condition {id: id}
  editYeuToDichTe(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('tkyt/dm-yeutodichte/update', data, permission);
  }
  // Delete a item with id
  deleteYeuToDichTe(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('tkyt/dm-yeutodichte/delete', data, permission);
  }
  //#endregion

  //#region DoiTuong
  // Retrieve data with condition in body
  getDoiTuong(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('tkyt/dm-doituong/get', data, permission);
  }
  // Create a new item
  insertDoiTuong(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('tkyt/dm-doituong/insert', data, permission);
  }
  // Update a item with condition {id: id}
  editDoiTuong(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('tkyt/dm-doituong/update', data, permission);
  }
  // Delete a item with id
  deleteDoiTuong(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('tkyt/dm-doituong/delete', data, permission);
  }
  //#endregion


}
