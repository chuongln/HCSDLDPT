import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DonViService {

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  getTree(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('donvis/getTree', data, permission);
  }
  getTreeToValue(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('donvis/getTree-value', data, permission);
  }
  getCanBo(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cb/canbo/getby-donvis', data, permission);
  }
}
