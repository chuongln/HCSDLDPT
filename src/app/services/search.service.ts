import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  //#region 
  get(data: any): Observable<any> {
    return this.httpService.postFile('predict', data);
  } 
  getData(data: any): Observable<any> {
    return this.httpService.getData(data);
  }
  search(data: any): Observable<any> {
    return this.httpService.post('predict', data);
  }

  edit(data: any): Observable<any> {
    return this.httpService.post('predict', data);
  }

  delete(data: any): Observable<any> {
    return this.httpService.post('predict', data);
  }
  //#endregion

}
