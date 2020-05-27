import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SysWorkflowService {

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  // Retrieve data with condition in body
  getWorkflow(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('sys/workflow/get', data, permission);
  }
  // // Create a new item
  // insertWorkflow(data: any, permission: any): Observable<any> {
  //   return this.httpService.postPermission('jobs/dm-priority/insert',data, permission);
  // }
  // // Update a item with condition {id: id}
  // editWorkflow(data: any, permission: any): Observable<any> {
  //   return this.httpService.postPermission('jobs/dm-priority/update',data, permission);
  // }
  // // Delete a item with id
  // deleteWorkflow(data: any, permission: any): Observable<any> {
  //   return this.httpService.postPermission('jobs/dm-priority/delete',data, permission);
  // }
  //#endregion

  //#region WorkFlowState
  // Retrieve data with condition in body
  getWorkFlowState(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('sys/workflow-state/get', data, permission);
  }
  //#endregion
  //#region WorkFlowStateAction
  // Retrieve data with condition in body
  getWorkFlowStateAction(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('sys/workflow-state-action/get', data, permission);
  }
  //#endregion
}
