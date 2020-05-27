import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router
  ) { }

  refreshToken() {
    this.httpService.refreshToken();
  }

  getToken(postData: any): Observable<any> {
    return this.httpService.post_authenticate('auth/token', postData);
  }

  getUserInfo(): Observable<any> {
    return this.httpService.get('auth/getUserInfo');
  }

  logout() {
    this.storageService.clear().then(res => {
      this.router.navigate(['/login']);
    });
  }
}
