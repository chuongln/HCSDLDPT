
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SysDmService {

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }
  getDataType(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('sys/data-types/get', data, permission);
  }
}
