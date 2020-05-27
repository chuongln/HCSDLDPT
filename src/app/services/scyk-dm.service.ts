import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class ScykDmService {

    constructor(
        private httpService: HttpService,
        private router: Router
    ) { }

    //#region HinhThucBaoCao
    getHinhThucBaoCao(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-hinhthucbaocao/get', data, permission);
    }

    addHinhThucBaoCao(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-hinhthucbaocao/insert', data, permission);
    }

    editHinhThucBaoCao(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-hinhthucbaocao/update', data, permission);
    }

    deleteHinhThucBaoCao(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-hinhthucbaocao/delete', data, permission);
    }
    //#endregion

    //#region CapDoNguyCo
    getCapDoNguyCo(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-capdonguyco/get', data, permission);
    }

    addCapDoNguyCo(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-capdonguyco/insert', data, permission);
    }

    editCapDoNguyCo(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-capdonguyco/update', data, permission);
    }

    deleteCapDoNguyCo(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-capdonguyco/delete', data, permission);
    }
    //#endregion

    //#region PhanLoaiSuCo
    getPhanLoaiSuCo(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-phanloaisuco/get', data, permission);
    }

    addPhanLoaiSuCo(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-phanloaisuco/insert', data, permission);
    }

    editPhanLoaiSuCo(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-phanloaisuco/update', data, permission);
    }

    deletePhanLoaiSuCo(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-phanloaisuco/delete', data, permission);
    }
    //#endregion

    //#region NhomSuCoNghiemTrong
    getNhomSuCoNghiemTrong(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-nhomsuconghiemtrong/get', data, permission);
    }

    addNhomSuCoNghiemTrong(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-nhomsuconghiemtrong/insert', data, permission);
    }

    editNhomSuCoNghiemTrong(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-nhomsuconghiemtrong/update', data, permission);
    }

    deleteNhomSuCoNghiemTrong(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-nhomsuconghiemtrong/delete', data, permission);
    }
    //#endregion

    //#region SuCoNghiemTrong
    getSuCoNghiemTrong(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-suconghiemtrong/get', data, permission);
    }

    addSuCoNghiemTrong(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-suconghiemtrong/insert', data, permission);
    }

    editSuCoNghiemTrong(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-suconghiemtrong/update', data, permission);
    }

    deleteSuCoNghiemTrong(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-suconghiemtrong/delete', data, permission);
    }
    //#endregion

    //#region NhomSuCo
    getNhomSuCo(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-nhomsuco/get', data, permission);
    }

    addNhomSuCo(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-nhomsuco/insert', data, permission);
    }

    editNhomSuCo(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-nhomsuco/update', data, permission);
    }

    deleteNhomSuCo(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-nhomsuco/delete', data, permission);
    }
    //#endregion

    //#region LoaiSuCoTheoNhom
    getLoaiSuCoTheoNhom(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-loaisucotheonhom/get', data, permission);
    }

    addLoaiSuCoTheoNhom(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-loaisucotheonhom/insert', data, permission);
    }

    editLoaiSuCoTheoNhom(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-loaisucotheonhom/update', data, permission);
    }

    deleteLoaiSuCoTheoNhom(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-loaisucotheonhom/delete', data, permission);
    }
    //#endregion

    //#region NguyenNhan
    getNguyenNhan(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-nguyennhan/get', data, permission);
    }

    addNguyenNhan(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-nguyennhan/insert', data, permission);
    }

    editNguyenNhan(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-nguyennhan/update', data, permission);
    }

    deleteNguyenNhan(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-nguyennhan/delete', data, permission);
    }
    //#endregion

    //#region LoaiSuCoTheoNguyenNhan
    getLoaiSuCoTheoNguyenNhan(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-loaisucotheonguyennhan/get', data, permission);
    }

    addLoaiSuCoTheoNguyenNhan(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-loaisucotheonguyennhan/insert', data, permission);
    }

    editLoaiSuCoTheoNguyenNhan(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-loaisucotheonguyennhan/update', data, permission);
    }

    deleteLoaiSuCoTheoNguyenNhan(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-loaisucotheonguyennhan/delete', data, permission);
    }
    //#endregion

    //#region DoiTuongXayRaSuCo
    getDoiTuongXayRaSuCo(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-doituongxayrasuco/get', data, permission);
    }

    addDoiTuongXayRaSuCo(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-doituongxayrasuco/insert', data, permission);
    }

    editDoiTuongXayRaSuCo(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-doituongxayrasuco/update', data, permission);
    }

    deleteDoiTuongXayRaSuCo(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-doituongxayrasuco/delete', data, permission);
    }
    //#endregion

    //#region MucDoAnhHuongToChuc
    getMucDoAnhHuongToChuc(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-mucdoanhhuongtochuc/get', data, permission);
    }

    addMucDoAnhHuongToChuc(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-mucdoanhhuongtochuc/insert', data, permission);
    }

    editMucDoAnhHuongToChuc(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-mucdoanhhuongtochuc/update', data, permission);
    }

    deleteMucDoAnhHuongToChuc(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-mucdoanhhuongtochuc/delete', data, permission);
    }
    //#endregion
    //#region DoiTuongPhatHienSuCo
    getDoiTuongPhatHienSuCo(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-doituongphathiensuco/get', data, permission);
    }

    addDoiTuongPhatHienSuCo(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-doituongphathiensuco/insert', data, permission);
    }

    editDoiTuongPhatHienSuCo(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-doituongphathiensuco/update', data, permission);
    }

    deleteDoiTuongPhatHienSuCo(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-doituongphathiensuco/delete', data, permission);
    }
    //#endregion
    //#region XuatBan
    getXuatBan(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-xuatban/get', data, permission);
    }

    addXuatBan(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-xuatban/insert', data, permission);
    }

    editXuatBan(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-xuatban/update', data, permission);
    }

    deleteXuatBan(data: any, permission: any): Observable<any> {
        return this.httpService.postPermission('scyk/dm-xuatban/delete', data, permission);
    }
    //#endregion
}
