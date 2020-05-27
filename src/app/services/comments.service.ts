import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class CommentsService {

    constructor(
        private httpService: HttpService,
        private router: Router
    ) { }

    getComments(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/comments/get', data, permission);
    }
    getCommentsByIdData(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/comments/getbyid-data', data, permission);
    }
    insertComments(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/comments/insert', data, permission);
    }
    updateComments(data: any, permission: any): Observable<any> {
        console.log(data, permission);
        return this.httpService.postPermission('sys/comments/update', data, permission);
    }
    deleteComments(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/comments/delete', data, permission);
    }
}
