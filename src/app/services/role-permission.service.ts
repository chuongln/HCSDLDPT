import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class RolePermissionService {

    constructor(
        private httpService: HttpService,
        private router: Router
    ) { }

    getRoleLevel(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/role-level/get', data, permission);
    }
    insertRoleLevel(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/role-level/insert', data, permission);
    }
    updateRoleLevel(data: any, permission: any): Observable<any> {
        console.log(data);
        return this.httpService.postPermission('sys/role-level/update', data, permission);
    }
    deleteRoleLevel(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/role-level/delete', data, permission);
    }

    getRoleLevelDetail(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/role-level-detail/getbytablename', data, permission);
    }
    getRole(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/role/get', data, permission);
    }
    insertRole(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/role/insert', data, permission);
    }
    updateRole(data: any, permission: any): Observable<any> {
        console.log(data);
        return this.httpService.postPermission('sys/role/update', data, permission);
    }
    deleteRole(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/role/delete', data, permission);
    }
    getPermission(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/permission/get', data, permission);
    }
    insertPermission(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/permission/insert', data, permission);
    }
    updatePermission(data: any, permission: any): Observable<any> {
        console.log(data);
        return this.httpService.postPermission('sys/permission/update', data, permission);
    }
    deletePermission(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/permission/delete', data, permission);
    }

    getTreePermission(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/permission/gettree-value', data, permission);
    }
    insertRolePermission(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/role-permission/insert', data, permission);
    }
    updateRolePermission(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/role-permission/update-role-permission', data, permission);
    }
    getRolePermission(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/role-permission/getbyrole', data, permission);
    }
    getTablePermission(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/role-permission/gettablebyrole', data, permission);
    }
    updateListAccountRole(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/account-role/update-list', data, permission);
    }
    getRoleByIdAccount(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/account-role/getallrolebyaccount', data, permission);
    }
    updateRoleIdAccount(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('sys/account-role/update-list', data, permission);
    }
}
