import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  //#region CoQuanBanHanh
  getCoQuanBanHanh(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/dm-coquanbanhanh/get', data, permission);
  }

  addCoQuanBanHanh(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/dm-coquanbanhanh/insert', data, permission);
  }

  editCoQuanBanHanh(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/dm-coquanbanhanh/update', data, permission);
  }

  deleteCoQuanBanHanh(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/dm-coquanbanhanh/delete', data, permission);
  }
  //#endregion

  //#region HinhThucGuiNhan
  getHinhThucGuiNhan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/dm-hinhthucguinhan/get', data, permission);
  }

  addHinhThucGuiNhan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/dm-hinhthucguinhan/insert', data, permission);
  }

  editHinhThucGuiNhan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/dm-hinhthucguinhan/update', data, permission);
  }

  deleteHinhThucGuiNhan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/dm-hinhthucguinhan/delete', data, permission);
  }
  //#endregion

  //#region LinhVucVanBan
  getLinhVucVanBan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/dm-linhvucvanban/get', data, permission);
  }

  addLinhVucVanBan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/dm-linhvucvanban/insert', data, permission);
  }

  editLinhVucVanBan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/dm-linhvucvanban/update', data, permission);
  }

  deleteLinhVucVanBan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/dm-linhvucvanban/delete', data, permission);
  }
  //#endregion

  //#region LoaiVanBan
  getLoaiVanBan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/dm-loaivanban/get', data, permission);
  }

  addLoaiVanBan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/dm-loaivanban/insert', data, permission);
  }

  editLoaiVanBan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/dm-loaivanban/update', data, permission);
  }

  deleteLoaiVanBan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/dm-loaivanban/delete', data, permission);
  }
  //#endregion

  //#region MucDoMat
  getMucDoMat(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/dm-mucdomat/get', data, permission);
  }

  addMucDoMat(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/dm-mucdomat/insert', data, permission);
  }

  editMucDoMat(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/dm-mucdomat/update', data, permission);
  }

  deleteMucDoMat(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/dm-mucdomat/delete', data, permission);
  }
  //#endregion

  //#region MucDoKhan
  getMucDoKhan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/dm-mucdokhan/get', data, permission);
  }

  addMucDoKhan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/dm-mucdokhan/insert', data, permission);
  }

  editMucDoKhan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/dm-mucdokhan/update', data, permission);
  }

  deleteMucDoKhan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/dm-mucdokhan/delete', data, permission);
  }
  //#endregion

  //#region VanBan
  getVanBan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/vanban/get', data, permission);
  }
  getListVanBan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/vanban/get-list', data, permission);
  }
  addVanBan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/vanban/insert', data, permission);
  }
  editVanBan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/vanban/update', data, permission);
  }
  deleteVanBan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/vanban/delete', data, permission);
  }
  //#endregion

  //#region DonViNgoaiCanBo
  getDonViNgoaiCanBo(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/donvingoai-canbo/get', data, permission);
  }
  getListDonViNgoaiCanBo(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/donvingoai-canbo/get-list', data, permission);
  }
  addDonViNgoaiCanBo(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/donvingoai-canbo/insert', data, permission);
  }
  editDonViNgoaiCanBo(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/donvingoai-canbo/update', data, permission);
  }
  deleteDonViNgoaiCanBo(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/donvingoai-canbo/delete', data, permission);
  }
  //#endregion
  //#region DonViNgoai
  getDonViNgoai(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/donvingoai/get', data, permission);
  }
  getListDonViNgoai(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/donvingoai/get-list', data, permission);
  }
  addDonViNgoai(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/donvingoai/insert', data, permission);
  }
  editDonViNgoai(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/donvingoai/update', data, permission);
  }
  deleteDonViNgoai(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('doc/donvingoai/delete', data, permission);
  }
  //#endregion
}
