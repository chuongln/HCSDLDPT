import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  //#region DmPriority
  // Retrieve data with condition in body
  getDmPriority(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/dm-priority/get', data, permission);
  }
  // Create a new item
  insertDmPriority(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/dm-priority/insert', data, permission);
  }
  // Update a item with condition {id: id}
  editDmPriority(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/dm-priority/update', data, permission);
  }
  // Delete a item with id
  deleteDmPriority(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/dm-priority/delete', data, permission);
  }
  //#endregion

  //#region DmProjectType
  // Retrieve data with condition in body
  getDmProjectType(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/dm-project-type/get', data, permission);
  }
  // Create a new item
  insertDmProjectType(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/dm-project-type/insert', data, permission);
  }
  // Update a item with condition {id: id}
  editDmProjectType(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/dm-project-type/update', data, permission);
  }
  // Delete a item with id
  deleteDmProjectType(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/dm-project-type/delete', data, permission);
  }
  //#endregion

  //#region Project
  // Retrieve data with condition in body
  getProject(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project/getlist', data, permission);
  }
  getProjectByCode(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project/get', data, permission);
  }
  // Create a new item
  insertProject(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project/insert', data, permission);
  }
  // Update a item with condition {id: id}
  editProject(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project/update', data, permission);
  }
  // Delete a item with id
  deleteProject(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project/delete', data, permission);
  }
  getStateByProject(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project/get-state', data, permission);
  }
  //#endregion

  //#region Project Component
  // Retrieve data with condition in body
  getProjectComponent(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project-component/get', data, permission);
  }
  // Create a new item
  insertProjectComponent(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project-component/insert', data, permission);
  }
  // Update a item with condition {id: id}
  editProjectComponent(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project-component/update', data, permission);
  }
  // Delete a item with id
  deleteProjectComponent(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project-component/delete', data, permission);
  }
  //#endregion

  //#region Project Task
  // Retrieve data with condition in body
  getProjectTask(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project-task/get', data, permission);
  }
  getListProjectTask(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project-task/getlist', data, permission);
  }
  // Export File
  exportProjectTaskList(data: any, permission: any): Observable<any> {
    return this.httpService.downloadAttachFilePermission('jobs/project-task/export-task-list', data, permission);
  }
  // Create a new item
  insertProjectTask(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project-task/insert', data, permission);
  }
  // Update a item with condition {id: id}
  editProjectTask(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project-task/update', data, permission);
  }
  // Delete a item with id
  deleteProjectTask(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project-task/delete', data, permission);
  }
  //#endregion

  //#region Project Member
  // Retrieve data with condition in body
  getProjectMember(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project-member/getbyproject', data, permission);
  }
  getProjectManager(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project/get-all-manager', data, permission);
  }
  getProjectMembers(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project-member/getbyprojects', data, permission);
  }
  // Create a new item
  insertProjectMember(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project-member/insert', data, permission);
  }
  // Update a item with condition {id: id}
  editProjectMember(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project-member/update', data, permission);
  }
  // Delete a item with id
  deleteProjectMember(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project-member/delete', data, permission);
  }
  //#endregion
    //#region Project Task Activity
  // Retrieve data with condition in body
  getProjectTaskActivity(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project-task-activity/get', data, permission);
  }
  getProjectTaskActivityByTask(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project-task-activity/getbytask', data, permission);
  }
  // Create a new item
  insertProjectTaskActivity(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project-task-activity/insert', data, permission);
  }
  // Update a item with condition {id: id}
  editProjectTaskActivity(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project-task-activity/update', data, permission);
  }
  // Delete a item with id
  deleteProjectTaskActivity(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('jobs/project-task-activity/delete', data, permission);
  }
  //#endregion
}
