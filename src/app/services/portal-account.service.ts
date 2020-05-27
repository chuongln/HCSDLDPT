import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortalAccountService {

  constructor(
    private httpService: HttpService
  ) { }

  changePassword(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('portal-accounts/changePassword', data, permission);
  }

  search(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('portal-accounts/search', data, permission);
  }

  getCanBoChuaCoTaiKhoan(permission: any): Observable<any> {
    return this.httpService.postPermission('portal-accounts/getCanBoChuaCoTaiKhoan', {}, permission);
  }

  add(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('portal-accounts/add', data, permission);
  }

  edit(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('portal-accounts/edit', data, permission);
  }

  delete(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('portal-accounts/delete', data, permission);
  }
}
