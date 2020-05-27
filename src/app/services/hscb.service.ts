import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class HscbService {
  constructor(
    private httpService: HttpService,
    private router: Router
  ){ }
    getDanhMucChucDanh(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-chucdanh/get', data, permission);
    }
  insertChucDanh(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cb/dm-chucdanh/insert', data, permission);
  }
  editChucDanh(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cb/dm-chucdanh/update', data, permission);
  }
  deleteChucDanh(data: any, permission: any): Observable<any> {
    return this.httpService.postPermission('cb/dm-chucdanh/delete', data, permission);
  }
    getDanhMucChucVu(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-chucvu/get', data, permission);
    }
    insertChucVu(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-chucvu/insert', data, permission);
    }
    editChucVu(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-chucvu/update', data, permission);
    }
    deleteChucVu(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-chucvu/delete', data, permission);
    }
    //Quốc gia
    getDanhMucQuocGia(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-quocgia/get', data, permission);
    }
    deleteQuocGia(data: any): Observable<any> {
      return this.httpService.post('cb/dm-quocgia/delete', data);
    }
    insertQuocGia(data: any): Observable<any> {
      return this.httpService.post('cb/dm-quocgia/insert', data);
    }
    editQuocGia(data: any): Observable<any> {
      return this.httpService.post('cb/dm-quocgia/update', data);
    }

    //Tôn giáo
    getDanhMucTonGiao(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-tongiao/get', data, permission);
    }
    deleteTonGiao(data: any): Observable<any> {
      return this.httpService.post('cb/dm-tongiao/delete', data);
    }
    insertTonGiao(data: any): Observable<any> {
      return this.httpService.post('cb/dm-tongiao/insert', data);
    }
    editTonGiao(data: any): Observable<any> {
      return this.httpService.post('cb/dm-tongiao/update', data);
    }

    //Dân tộc
    getDanhMucDanToc(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-dantoc/get', data, permission);
    }
    deleteDanToc(data: any): Observable<any> {
      return this.httpService.post('cb/dm-dantoc/delete', data);
    }
    insertDanToc(data: any): Observable<any> {
      return this.httpService.post('cb/dm-dantoc/insert', data);
    }
    editDanToc(data: any): Observable<any> {
      return this.httpService.post('cb/dm-dantoc/update', data);
    }

    //DM Tỉnh
    getDMTinh(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-tinh/get', data, permission);
    }
    deleteTinh(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-tinh/delete', data, permission);
    }
    insertTinh(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-tinh/insert', data, permission);
    }
    editTinh(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-tinh/update', data, permission);
    }

    //DM Huyện
    getDMHuyen(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-huyen/get', data, permission);
    }
    deleteHuyen(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-huyen/delete', data, permission);
    }
    insertHuyen(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-huyen/insert', data, permission);
    }
    editHuyen(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-huyen/update', data, permission);
    }

    //DM Xã
    getDMXa(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-xa/get', data, permission);
    }
    deleteXa(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-xa/delete', data, permission);
    }
    insertXa(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-xa/insert', data, permission);
    }
    editXa(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-xa/update', data, permission);
    }

    //Loại ngạch lương
    getLoaiNgachLuong(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-loaingachluong/get', data, permission);
    }

    //Thang bảng lương
    getThangBangLuong(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-thangbangluong/get', data, permission);
    }
    deleteThangBangLuong(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-thangbangluong/delete', data, permission);
    }
    insertThangBangLuong(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-thangbangluong/insert', data, permission);
    }
    editThangBangLuong(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-thangbangluong/update', data, permission);
    }

    //Ngạch lương
    getNgachLuong(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-ngachluong/get', data, permission);
    }
    deleteNgachLuong(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-ngachluong/delete', data, permission);
    }
    insertNgachLuong(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-ngachluong/insert', data, permission);
    }
    editNgachLuong(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-ngachluong/update', data, permission);
    }

    //Bậc lương
    getBacLuong(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-bacluong/get', data, permission);
    }
    deleteBacLuong(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-bacluong/delete', data, permission);
    }
    insertBacLuong(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-bacluong/insert', data, permission);
    }
    editBacLuong(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-bacluong/update', data, permission);
    }

    //Hệ số lương
    getHeSoLuong(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-hesoluong/get', data, permission);
    }
    deleteHeSoLuong(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-hesoluong/delete', data, permission);
    }
    insertHeSoLuong(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-hesoluong/insert', data, permission);
    }
    editHeSoLuong(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-hesoluong/update', data, permission);
    }

    //Nhóm vị trí việc làm
    getNhomViTriViecLam(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-nhomvitrivieclam/get', data, permission);
    }
    deleteNhomViTriViecLam(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-nhomvitrivieclam/delete', data, permission);
    }
    insertNhomViTriViecLam(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-nhomvitrivieclam/insert', data, permission);
    }
    editNhomViTriViecLam(data: any,permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-nhomvitrivieclam/update', data, permission);
    }

    //Vị trí việc làm
    getViTriViecLam(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-vitrivieclam/get', data, permission);
    }
    deleteViTriViecLam(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-vitrivieclam/delete', data, permission);
    }
    insertViTriViecLam(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-vitrivieclam/insert', data, permission);
    }
    editViTriViecLam(data: any,permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-vitrivieclam/update', data, permission);
    }

    //Phân loại trình độ ngoại ngữ
    getPhanLoaiTrinhDoNgoaiNgu(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-phanloaitrinhdo-ngoaingu/get', data, permission);
    }
    deletePhanLoaiTrinhDoNgoaiNgu(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-phanloaitrinhdo-ngoaingu/delete', data, permission);
    }
    insertPhanLoaiTrinhDoNgoaiNgu(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-phanloaitrinhdo-ngoaingu/insert', data, permission);
    }
    editPhanLoaiTrinhDoNgoaiNgu(data: any,permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-phanloaitrinhdo-ngoaingu/update', data, permission);
    }

    //Trình độ ngoại ngữ
    getTrinhDoNgoaiNgu(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-trinhdongoaingu/get', data, permission);
    }
    deleteTrinhDoNgoaiNgu(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-trinhdongoaingu/delete', data, permission);
    }
    insertTrinhDoNgoaiNgu(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-trinhdongoaingu/insert', data, permission);
    }
    editTrinhDoNgoaiNgu(data: any,permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-trinhdongoaingu/update', data, permission);
    }

    //Phân loại trình độ tin học
    getPhanLoaiTrinhDoTinHoc(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-phanloaitrinhdo-tinhoc/get', data, permission);
    }
    deletePhanLoaiTrinhDoTinHoc(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-phanloaitrinhdo-tinhoc/delete', data, permission);
    }
    insertPhanLoaiTrinhDoTinHoc(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-phanloaitrinhdo-tinhoc/insert', data, permission);
    }
    editPhanLoaiTrinhDoTinHoc(data: any,permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-phanloaitrinhdo-tinhoc/update', data, permission);
    }

    //Trình độ tin học
    getTrinhDoTinHoc(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-trinhdotinhoc/get', data, permission);
    }
    deleteTrinhDoTinHoc(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-trinhdotinhoc/delete', data, permission);
    }
    insertTrinhDoTinHoc(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-trinhdotinhoc/insert', data, permission);
    }
    editTrinhDoTinHoc(data: any,permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-trinhdotinhoc/update', data, permission);
    }

    //Phân loại bệnh
    getPhanLoaiBenh(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-phanloaibenh/get', data, permission);
    }
    deletePhanLoaiBenh(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-phanloaibenh/delete', data, permission);
    }
    insertPhanLoaiBenh(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-phanloaibenh/insert', data, permission);
    }
    editPhanLoaiBenh(data: any,permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-phanloaibenh/update', data, permission);
    }

    //Bệnh
    getBenh(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-benh/get', data, permission);
    }
    deleteBenh(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-benh/delete', data, permission);
    }
    insertBenh(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-benh/insert', data, permission);
    }
    editBenh(data: any,permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-benh/update', data, permission);
    }

    //Ngành
    getNganh(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-nganh/get', data, permission);
    }
    deleteNganh(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-nganh/delete', data, permission);
    }
    insertNganh(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-nganh/insert', data, permission);
    }
    editNganh(data: any,permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-nganh/update', data, permission);
    }

    //Chuyên ngành
    getChuyenNganh(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-chuyennganh/get', data, permission);
    }
    deleteChuyenNganh(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-chuyennganh/delete', data, permission);
    }
    insertChuyenNganh(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-chuyennganh/insert', data, permission);
    }
    editChuyenNganh(data: any,permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-chuyennganh/update', data, permission);
    }

    //Tình trạng hôn nhân
    getTinhTrangHonNhan(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-tinhtranghonnhan/get', data, permission);
    }
    deleteTinhTrangHonNhan(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-tinhtranghonnhan/delete', data, permission);
    }
    insertTinhTrangHonNhan(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-tinhtranghonnhan/insert', data, permission);
    }
    editTinhTrangHonNhan(data: any,permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-tinhtranghonnhan/update', data, permission);
    }

    //Văn bằng
    getVanBang(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-vanbang/get', data, permission);
    }
    deleteVanBang(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-vanbang/delete', data, permission);
    }
    insertVanBang(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-vanbang/insert', data, permission);
    }
    editVanBang(data: any,permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-vanbang/update', data, permission);
    }

    //Lý luận chính trị
    getLyLuanChinhTri(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-lyluanchinhtri/get', data, permission);
    }
    deleteLyLuanChinhTri(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-lyluanchinhtri/delete', data, permission);
    }
    insertLyLuanChinhTri(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-lyluanchinhtri/insert', data, permission);
    }
    editLyLuanChinhTri(data: any,permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-lyluanchinhtri/update', data, permission);
    }

    //Trình độ quản lý
    getTrinhDoQuanLy(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-trinhdoquanly/get', data, permission);
    }
    deleteTrinhDoQuanLy(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-trinhdoquanly/delete', data, permission);
    }
    insertTrinhDoQuanLy(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-trinhdoquanly/insert', data, permission);
    }
    editTrinhDoQuanLy(data: any,permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-trinhdoquanly/update', data, permission);
    }

    //Quản lý bệnh viện
    getQuanLyBenhVien(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-quanlybenhvien/get', data, permission);
    }
    deleteQuanLyBenhVien(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-quanlybenhvien/delete', data, permission);
    }
    insertQuanLyBenhVien(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-quanlybenhvien/insert', data, permission);
    }
    editQuanLyBenhVien(data: any,permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-quanlybenhvien/update', data, permission);
    }

    //Xếp loại
    getXepLoai(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-xeploai/get', data, permission);
    }
    deleteXepLoai(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-xeploai/delete', data, permission);
    }
    insertXepLoai(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-xeploai/insert', data, permission);
    }
    editXepLoai(data: any,permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-xeploai/update', data, permission);
    }

    //Xếp loại sức khỏe
    getXepLoaiSucKhoe(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-xeploaisuckhoe/get', data, permission);
    }
    deleteXepLoaiSucKhoe(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-xeploaisuckhoe/delete', data, permission);
    }
    insertXepLoaiSucKhoe(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-xeploaisuckhoe/insert', data, permission);
    }
    editXepLoaiSucKhoe(data: any,permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-xeploaisuckhoe/update', data, permission);
    }

    //Ngoại ngữ
    getNgoaiNgu(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-ngoaingu/get', data, permission);
    }
    deleteNgoaiNgu(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-ngoaingu/delete', data, permission);
    }
    insertNgoaiNgu(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-ngoaingu/insert', data, permission);
    }
    editNgoaiNgu(data: any,permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-ngoaingu/update', data, permission);
    }

    //Học hàm
    getHocHam(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-hocham/get', data, permission);
    }
    deleteHocHam(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-hocham/delete', data, permission);
    }
    insertHocHam(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-hocham/insert', data, permission);
    }
    editHocHam(data: any,permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-hocham/update', data, permission);
    }

    //Học vị
    getHocVi(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-hocvi/get', data, permission);
    }
    deleteHocvi(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-hocvi/delete', data, permission);
    }
    insertHocvi(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-hocvi/insert', data, permission);
    }
    editHocvi(data: any,permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-hocvi/update', data, permission);
    }

    //Cấp đào tạo
    getCapDaoTao(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-capdaotao/get', data, permission);
    }
    deleteCapDaoTao(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-capdaotao/delete', data, permission);
    }
    insertCapDaoTao(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-capdaotao/insert', data, permission);
    }
    editCapDaoTao(data: any,permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-capdaotao/update', data, permission);
    }

    //Quan hệ
    getQuanHe(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-quanhe/get', data, permission);
    }
    deleteQuanHe(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-quanhe/delete', data, permission);
    }
    insertQuanHe(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-quanhe/insert', data, permission);
    }
    editQuanHe(data: any,permission: any): Observable<any> {
      return this.httpService.postPermission('cb/dm-quanhe/update', data, permission);
    }
    // cán bộ bằng cấp
    getCanBoBangCap(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/bangcap/get', data, permission);
    }
    getCanBoBangCapByCanBo(data: any, permission): Observable<any>{
      return this.httpService.postPermission('cb/bangcap/getByCanBo', data, permission);
    }
    deleteCanBoBangCap(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/bangcap/delete', data, permission);
    }
    insertCanBoBangCap(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/bangcap/insert', data, permission);
    }
    editCanBoBangCap(data: any,permission: any): Observable<any> {
      return this.httpService.postPermission('cb/bangcap/update', data, permission);
    }
    // cán bộ
    getCanBo(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/canbo/get', data, permission);
    }
    getCanBoByDonVis(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/canbo/getby-donvis', data, permission);
    }
    deleteCanBo(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/canbo/delete', data, permission);
    }
    insertCanBo(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/canbo/insert', data, permission);
    }
    editCanBo(data: any,permission: any): Observable<any> {
      return this.httpService.postPermission('cb/canbo/update', data, permission);
    }
    // nhóm máu
    getNhomMau(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-nhommau/get', data, permission);
    }
    // Quá trình công tác
    getQuaTrinhCongTac(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/quatrinhcongtac/get', data, permission);
    }
    getQuaTrinhCongTacgetByCanBo(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/quatrinhcongtac/getByCanBo', data, permission);
    }
    deleteQuaTrinhCongTac(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/quatrinhcongtac/delete', data, permission);
    }
    insertQuaTrinhCongTac(data: any, permission: any): Observable<any> {
      return this.httpService.postPermission('cb/quatrinhcongtac/insert', data, permission);
    }
    editQuaTrinhCongTac(data: any,permission: any): Observable<any> {
      return this.httpService.postPermission('cb/quatrinhcongtac/update', data, permission);
    } 
      //loại Quá trình công tác
    getLoaiQuaTrinhCongTac(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-loaiquatrinhcongtac/get', data, permission);
    } 
    //lý do Quá trình công tác
    getLyDoQuaTrinhCongTac(data: any, permission: any): Observable<any>{
      return this.httpService.postPermission('cb/dm-loailydonghi/get', data, permission);
    }   
}