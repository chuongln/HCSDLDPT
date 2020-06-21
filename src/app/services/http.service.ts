import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { StorageService } from '../services/storage.service';
import { AuthConstants } from '../config/auth-constants';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  token: string;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {

  }


  post_authenticate(serviceName: string, data: any) {
    const url = 'http://192.168.1.40:8080/server_war/rest/public/auth/login';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
    return this.http.post(url, JSON.stringify(data), options);
  }

  post(serviceName: string, data: any) {
    const form = new FormData();
    form.append('category', data);
    const url = 'http://139.162.10.81:5000/search';
    const headers = new HttpHeaders({
      'cache-control': 'no-cache',
      'Postman-Token': 'c36f9733-dffe-4a9a-9481-cf198eeccd6a',
    });
    const options = {
      headers: headers,
      'async': true,
      'crossDomain': true,
      'processData': false,
      'contentType': false,
      'mimeType': 'multipart/form-data',
    };
    return this.http.post<any>(url, form, options);
  }

  postAttachFile(serviceName: string, data: any) {
    const url = environment.apiUrl + serviceName;
    const headers = new HttpHeaders({
      'Postman-Token': 'c36f9733-dffe-4a9a-9481-cf198eeccd6a',
      'cache-control': 'no-cache'
    });
    const options = { headers: headers };

    options.headers.append('Access-Control-Allow-Origin', 'http://139.162.10.81:5000');
    options.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    options.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    options.headers.append('Access-Control-Allow-Credentials', 'true');

    return this.http.post<any>(url, data, options);
  }

  get(serviceName: string) {
    const url = environment.apiUrl + serviceName;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Postman-Token': 'c36f9733-dffe-4a9a-9481-cf198eeccd6a'
    });
    const options = { headers: headers };
    return this.http.get(url, options);
  }

  downloadAttachFile(serviceName: string, data: any) {
    const url = environment.apiUrl + serviceName;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Postman-Token': 'c36f9733-dffe-4a9a-9481-cf198eeccd6a'
    });
    const options = { headers: headers };
    return this.http.post<any>(url, data, { ...options, responseType: 'blob' as 'json' });
  }

  postPermission(serviceName: string, data: any, permission: any) {
    const url = environment.apiUrl + serviceName;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Postman-Token': 'c36f9733-dffe-4a9a-9481-cf198eeccd6a',
      'x-access-permission': `${JSON.stringify(permission)}`
    });
    const options = { headers: headers };
    return this.http.post<any>(url, JSON.stringify(data), options);
  }
  postPermissionAttachFile(serviceName: string, data: any, permission: any) {
    const url = environment.apiUrl + serviceName;
    const headers = new HttpHeaders({
      // 'Content-Type': 'multipart/form-data',
      'Postman-Token': 'c36f9733-dffe-4a9a-9481-cf198eeccd6a',
      'x-access-permission': `${JSON.stringify(permission)}`
    });
    const options = { headers: headers };
    return this.http.post<any>(url, data, options);
  }
  downloadAttachFilePermission(serviceName: string, data: any, permission: any) {
    const url = environment.apiUrl + serviceName;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-permission': `${JSON.stringify(permission)}`,
      'Postman-Token': 'c36f9733-dffe-4a9a-9481-cf198eeccd6a'
    });
    const options = { headers: headers };
    return this.http.post<any>(url, data, { ...options, responseType: 'blob' as 'json' });
  }

  getData(data: any): Observable<any> {
    return from(
      fetch(
        'http://139.162.10.81:5000/predict', // the url you are trying to access
        {
          headers: {
            'Content-Type': 'application/json',
            'Postman-Token': 'c36f9733-dffe-4a9a-9481-cf198eeccd6a',
            'mimeType': 'multipart/form-data',
          },
          method: 'POST', // GET, POST, PUT, DELETE
          mode: 'no-cors', // the most important option
          body: data,
        }
      ));
  }


  postFile(serviceName: string, data: any) {
    const form = new FormData();
    form.append('image', data);
    const url = 'http://139.162.10.81:5000/predict';
    const headers = new HttpHeaders({
      'cache-control': 'no-cache',
      'Postman-Token': 'c36f9733-dffe-4a9a-9481-cf198eeccd6a',
    });
    const options = {
      headers: headers,
      'async': true,
      'crossDomain': true,
      'processData': false,
      'contentType': false,
      'mimeType': 'multipart/form-data',
    };
    return this.http.post<any>(url, form, options);
  }
}
