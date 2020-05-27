import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ReportDailyService {

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  //#region TinhHinhBenhNhan
  // Retrieve data with condition in body
  getTinhHinhBenhNhan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('report/tinhhinhbenhnhan/get', data, permission);
  }
  getListTinhHinhBenhNhan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('report/tinhhinhbenhnhan/get-list', data, permission);
  }
  // Create a new item
  insertTinhHinhBenhNhan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('report/tinhhinhbenhnhan/insert', data, permission);
  }
  // Update a item with condition {id: id}
  editTinhHinhBenhNhan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('report/tinhhinhbenhnhan/update', data, permission);
  }
  // Delete a item with id
  deleteTinhHinhBenhNhan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('report/tinhhinhbenhnhan/delete', data, permission);
  }
  //#endregion

  //#region TinhHinhKhamBenh
  // Retrieve data with condition in body
  getTinhHinhKhamBenh(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('report/tinhhinhkhambenh/get', data, permission);
  }
  getListTinhHinhKhamBenh(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('report/tinhhinhkhambenh/get-list', data, permission);
  }
  // Create a new item
  insertTinhHinhKhamBenh(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('report/tinhhinhkhambenh/insert', data, permission);
  }
  // Update a item with condition {id: id}
  editTinhHinhKhamBenh(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('report/tinhhinhkhambenh/update', data, permission);
  }
  // Delete a item with id
  deleteTinhHinhKhamBenh(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('report/tinhhinhkhambenh/delete', data, permission);
  }
  //#endregion
}
