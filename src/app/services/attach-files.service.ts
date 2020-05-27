import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class AttachFilesService {

    constructor(
        private httpService: HttpService,
        private router: Router
    ) { }

    getAttachFiles(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/attachfiles/get', data, permission);
    }
    insertAttachFiles(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/attachfiles/insert-multi', data, permission);
    }
    uploadAttachFiles(data: any, permission: any): Observable<any> {
        return this.httpService.postPermissionAttachFile('sys/attachfiles/uploads', data, permission);
    }
    deleteAttachFiles(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/attachfiles/delete', data, permission);
    }

    getAttachFilesDetail(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/attachfiles-detail/getbytablename', data, permission);
    }
    downloadAttachFiles(data: any, permission: any): Observable<any> {
        return this.httpService.downloadAttachFilePermission('sys/attachfiles/download', data, permission);
    }
    deleteAttachFilesDetail(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/attachfiles-detail/delete', data, permission);
    }
}
