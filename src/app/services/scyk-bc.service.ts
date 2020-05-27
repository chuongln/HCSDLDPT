import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ScykBaoCaoService {

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  //#region BaoCao
  getBaoCao(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao/getdanhsachbaocao', data, permission);
  }
  getBaoCaoById(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao/get', data, permission);
  }
  insertBaoCao(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao/taobaocao', data, permission);
  }
  insertCongViec(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao/create-task', data, permission);
  }
  editBaoCao(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao/update', data, permission);
  }

  deleteBaoCao(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao/delete', data, permission);
  }
  //#endregion
  //#region inBaoCao []
  getBaoCaoDoiTuong(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-doituong/getbyid_baocao', data, permission);
  }
  getBaoCaoChungKien(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-chungkien/get', data, permission);
  }
  getBaoCaoNguoiPhatHien(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-nguoiphathien/getbyid_baocao', data, permission);
  }
  insertDoiTuong(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-doituong/insert', data, permission);
  }
  insertChungKien(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-chungkien/insert', data, permission);
  }
  insertNguoiPhatHien(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-nguoiphathien/insert', data, permission);
  }
  editDoiTuong(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-doituong/update', data, permission);
  }
  editChungKien(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-chungkien/update', data, permission);
  }
  editNguoiPhatHien(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-nguoiphathien/delete', data, permission);
  }
  deleteDoiTuong(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-doituong/delete', data, permission);
  }
  deleteChungKien(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-chungkien/delete', data, permission);
  }
  deleteNguoiPhatHien(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-nguoiphathien/delete', data, permission);
  }
  //#endregion
  //#region PhanTichNhanVien
  getPhanTichNhanVien(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-phantich-nhanvien/get', data, permission);
  }
  getPhanLoaiTheoNguyenNhan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-phanloaitheonguyennhan/getAllDmByID_BaoCao', data, permission);
  }
  getPhanLoaiTheoNhom(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-phanloaitheonhom/getAllDmByID_BaoCao', data, permission);
  }
  insertPhanTichNhanVien(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-phantich-nhanvien/insert', data, permission);
  }
  insertPhanLoaiTheoNguyenNhan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-phanloaitheonguyennhan/insert', data, permission);
  }
  insertPhanLoaiTheoNhom(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-phanloaitheonhom/insert', data, permission);
  }
  editPhanTichNhanVien(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-phantich-nhanvien/update', data, permission);
  }
  updateListPhanLoaiTheoNguyenNhan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-phanloaitheonguyennhan/update-list', data, permission);
  }
  updateListPhanLoaiTheoNhom(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-phanloaitheonhom/update-list', data, permission);
  }
  deletePhanTichNhanVien(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-phantich-nhanvien/delete', data, permission);
  }
  deletePhanLoaiTheoNguyenNhan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-phanloaitheonguyennhan/delete', data, permission);
  }
  deletePhanLoaiTheoNhom(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-phanloaitheonhom/delete', data, permission);
  }
  //#endregion

  //#region PhanTichChuyenGia
  getAnhHuongToChuc(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-anhhuongtochuc/getAllDmByID_BaoCao', data, permission);
  }
  insertAnhHuongToChuc(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-anhhuongtochuc/insert', data, permission);
  }
  updateListAnhHuongToChuc(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-anhhuongtochuc/update-list', data, permission);
  }
  editAnhHuongToChuc(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-anhhuongtochuc/update', data, permission);
  }
  deleteAnhHuongToChuc(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-anhhuongtochuc/delete', data, permission);
  }
  getPhanTichChuyenGia(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-phantich-chuyengia/get', data, permission);
  }
  insertPhanTichChuyenGia(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-phantich-chuyengia/insert', data, permission);
  }
  editPhanTichChuyenGia(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-phantich-chuyengia/update', data, permission);
  }
  deletePhanTichChuyenGia(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-phantich-chuyengia/delete', data, permission);
  }
  //#endregion

  //#region Thong ke
  thongKeTheoThoiGian(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao/thongketheothoigian', data, permission);
  }
  thongKeTheoHinhThucBaoCao(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao/thongketheohinhthucbaocao', data, permission);
  }
  thongKeTheoNguyenNhanSuCo(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao/thongketheonguyennhan', data, permission);
  }
  thongKeTheoNhomSuCo(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao/thongketheonhom', data, permission);
  }
  thongKeTheoDonViBaoCao(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao/thongketheodonvi', data, permission);
  }
  thongKeTheoNguoiTaoBaoCao(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao/thongketheonguoitaobaocao', data, permission);
  }
  thongKeTheoAnhHuongNguoiBenh(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao/thongkeanhhuongtoinguoibenh', data, permission);
  }
  thongKeTheoAnhHuongToChuc(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao/thongkeanhhuongtoitochuc', data, permission);
  }
  getBanTinAnToan(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao/bantinantoan', data, permission);
  }
  getSuCoQuanTrong(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao/sucoquantrong', data, permission);
  }
  //#endregion
  //#region Xuat ban bao cao
  getXuatBanBaoCao(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-xuatban/getAllDmByID_BaoCao', data, permission);
  }
  updateListXuatBanBaoCao(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('scyk/baocao-xuatban/update-list', data, permission);
  }
  //#endregion
}
