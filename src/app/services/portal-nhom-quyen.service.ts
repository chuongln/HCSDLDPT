import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortalNhomQuyenService {

  constructor(
    private httpService: HttpService
  ) { }

  get(data: any): Observable<any> {
    return this.httpService.post('portal-nhom-quyens/get', data);
  }
}
