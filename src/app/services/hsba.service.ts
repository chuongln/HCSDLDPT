import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class HsbaService {

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  //#region DmKetQuaDieuTri
  // Retrieve data with condition in body
  getDmKetQuaDieuTri(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('hsba/dm-ketquadieutri/get', data, permission);
  }
  // Create a new item
  insertDmKetQuaDieuTri(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('hsba/dm-ketquadieutri/insert', data, permission);
  }
  // Update a item with condition {id: id}
  editDmKetQuaDieuTri(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('hsba/dm-ketquadieutri/update', data, permission);
  }
  // Delete a item with id
  deleteDmKetQuaDieuTri(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('hsba/dm-ketquadieutri/delete', data, permission);
  }
  //#endregion

  //#region DmMauHoSo
  // Retrieve data with condition in body
  getDmMauHoSo(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('hsba/dm-mauhoso/get', data, permission);
  }
  // Create a new item
  insertDmMauHoSo(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('hsba/dm-mauhoso/insert', data, permission);
  }
  // Update a item with condition {id: id}
  editDmMauHoSo(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('hsba/dm-mauhoso/update', data, permission);
  }
  // Delete a item with id
  deleteDmMauHoSo(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('hsba/dm-mauhoso/delete', data, permission);
  }
  //#endregion

  //#region DmLoaiHoSo
  // Retrieve data with condition in body
  getDmLoaiHoSo(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('hsba/dm-loaihoso/get', data, permission);
  }
  // Create a new item
  insertDmLoaiHoSo(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('hsba/dm-loaihoso/insert', data, permission);
  }
  // Update a item with condition {id: id}
  editDmLoaiHoSo(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('hsba/dm-loaihoso/update', data, permission);
  }
  // Delete a item with id
  deleteDmLoaiHoSo(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('hsba/dm-loaihoso/delete', data, permission);
  }
  //#endregion

  //#region HoSoBenhAn
  // Retrieve data with condition in body
  getHoSoBenhAn(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('hsba/hosobenhan/get-list', data, permission);
  }
  // Create a new item
  insertHoSoBenhAn(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('hsba/hosobenhan/insert', data, permission);
  }
  // Update a item with condition {id: id}
  editHoSoBenhAn(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('hsba/hosobenhan/update', data, permission);
  }
  // Delete a item with id
  deleteHoSoBenhAn(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('hsba/hosobenhan/delete', data, permission);
  }
  getDanToc(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cb/dm-dantoc/get', data, permission);
  }
  getQuocGia(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cb/dm-quocgia/get', data, permission);
  }
  //#endregion

}
