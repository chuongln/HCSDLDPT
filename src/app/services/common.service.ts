import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
@Injectable({ providedIn: 'root' })
export class CommonService {
  language$ = new ReplaySubject<LangChangeEvent>(1);
  translate = this.translateService;
  public ALL: any = {
    View: { 'code': 'ALL', 'action': '_view' },
    Export: { 'code': 'ALL', 'action': '_export' },
    Insert: { 'code': 'ALL', 'action': '_insert' },
    Update: { 'code': 'ALL', 'action': '_update' },
    Delete: { 'code': 'ALL', 'action': '_delete' },
  };
  public QTHT: any = {
    View: { 'code': 'QTHT', 'action': '_view' },
    Export: { 'code': 'QTHT', 'action': '_export' },
    Insert: { 'code': 'QTHT', 'action': '_insert' },
    Update: { 'code': 'QTHT', 'action': '_update' },
    Delete: { 'code': 'QTHT', 'action': '_delete' },
  };
  public HSCB: any = {
    View: { 'code': 'HSCB', 'action': '_view' },
    Export: { 'code': 'HSCB', 'action': '_export' },
    Insert: { 'code': 'HSCB', 'action': '_insert' },
    Update: { 'code': 'HSCB', 'action': '_update' },
    Delete: { 'code': 'HSCB', 'action': '_delete' },
  };
  public DHBV: any = {
    View: { 'code': 'DHBV', 'action': '_view' },
    Export: { 'code': 'DHBV', 'action': '_export' },
    Insert: { 'code': 'DHBV', 'action': '_insert' },
    Update: { 'code': 'DHBV', 'action': '_update' },
    Delete: { 'code': 'DHBV', 'action': '_delete' },
  };
  public SCYK: any = {
    View: { 'code': 'SCYK', 'action': '_view' },
    Export: { 'code': 'SCYK', 'action': '_export' },
    Insert: { 'code': 'SCYK', 'action': '_insert' },
    Update: { 'code': 'SCYK', 'action': '_update' },
    Delete: { 'code': 'SCYK', 'action': '_delete' },
  };
  public CLBV: any = {
    View: { 'code': 'CLBV', 'action': '_view' },
    Export: { 'code': 'CLBV', 'action': '_export' },
    Insert: { 'code': 'CLBV', 'action': '_insert' },
    Update: { 'code': 'CLBV', 'action': '_update' },
    Delete: { 'code': 'CLBV', 'action': '_delete' },
  };
  public QLCC: any = {
    View: { 'code': 'QLCC', 'action': '_view' },
    Export: { 'code': 'QLCC', 'action': '_export' },
    Insert: { 'code': 'QLCC', 'action': '_insert' },
    Update: { 'code': 'QLCC', 'action': '_update' },
    Delete: { 'code': 'QLCC', 'action': '_delete' },
  };
  public BCDK: any = {
    View: { 'code': 'BCDK', 'action': '_view' },
    Export: { 'code': 'BCDK', 'action': '_export' },
    Insert: { 'code': 'BCDK', 'action': '_insert' },
    Update: { 'code': 'BCDK', 'action': '_update' },
    Delete: { 'code': 'BCDK', 'action': '_delete' },
  };
  public HT_QuanLyNguoiDung: any = {
    View: { 'code': 'HT_QuanLyNguoiDung', 'action': '_view' },
    Export: { 'code': 'HT_QuanLyNguoiDung', 'action': '_export' },
    Insert: { 'code': 'HT_QuanLyNguoiDung', 'action': '_insert' },
    Update: { 'code': 'HT_QuanLyNguoiDung', 'action': '_update' },
    Delete: { 'code': 'HT_QuanLyNguoiDung', 'action': '_delete' },
  };
  public HT_QuanLyQuyen: any = {
    View: { 'code': 'HT_QuanLyQuyen', 'action': '_view' },
    Export: { 'code': 'HT_QuanLyQuyen', 'action': '_export' },
    Insert: { 'code': 'HT_QuanLyQuyen', 'action': '_insert' },
    Update: { 'code': 'HT_QuanLyQuyen', 'action': '_update' },
    Delete: { 'code': 'HT_QuanLyQuyen', 'action': '_delete' },
  };
  public HT_QuanLyNhomQuyen: any = {
    View: { 'code': 'HT_QuanLyNhomQuyen', 'action': '_view' },
    Export: { 'code': 'HT_QuanLyNhomQuyen', 'action': '_export' },
    Insert: { 'code': 'HT_QuanLyNhomQuyen', 'action': '_insert' },
    Update: { 'code': 'HT_QuanLyNhomQuyen', 'action': '_update' },
    Delete: { 'code': 'HT_QuanLyNhomQuyen', 'action': '_delete' },
  };
  public HT_ThamSoHeThong: any = {
    View: { 'code': 'HT_ThamSoHeThong', 'action': '_view' },
    Export: { 'code': 'HT_ThamSoHeThong', 'action': '_export' },
    Insert: { 'code': 'HT_ThamSoHeThong', 'action': '_insert' },
    Update: { 'code': 'HT_ThamSoHeThong', 'action': '_update' },
    Delete: { 'code': 'HT_ThamSoHeThong', 'action': '_delete' },
  };
  public HT_NhatKyHeThong: any = {
    View: { 'code': 'HT_NhatKyHeThong', 'action': '_view' },
    Export: { 'code': 'HT_NhatKyHeThong', 'action': '_export' },
    Insert: { 'code': 'HT_NhatKyHeThong', 'action': '_insert' },
    Update: { 'code': 'HT_NhatKyHeThong', 'action': '_update' },
    Delete: { 'code': 'HT_NhatKyHeThong', 'action': '_delete' },
  };
  public SC_MucDoTonThuong: any = {
    View: { 'code': 'SC_MucDoTonThuong', 'action': '_view' },
    Export: { 'code': 'SC_MucDoTonThuong', 'action': '_export' },
    Insert: { 'code': 'SC_MucDoTonThuong', 'action': '_insert' },
    Update: { 'code': 'SC_MucDoTonThuong', 'action': '_update' },
    Delete: { 'code': 'SC_MucDoTonThuong', 'action': '_delete' },
  };
  public SC_NghiemTrong: any = {
    View: { 'code': 'SC_NghiemTrong', 'action': '_view' },
    Export: { 'code': 'SC_NghiemTrong', 'action': '_export' },
    Insert: { 'code': 'SC_NghiemTrong', 'action': '_insert' },
    Update: { 'code': 'SC_NghiemTrong', 'action': '_update' },
    Delete: { 'code': 'SC_NghiemTrong', 'action': '_delete' },
  };
  public SC_NhomSuCo: any = {
    View: { 'code': 'SC_NhomSuCo', 'action': '_view' },
    Export: { 'code': 'SC_NhomSuCo', 'action': '_export' },
    Insert: { 'code': 'SC_NhomSuCo', 'action': '_insert' },
    Update: { 'code': 'SC_NhomSuCo', 'action': '_update' },
    Delete: { 'code': 'SC_NhomSuCo', 'action': '_delete' },
  };
  public SC_NguyenNhanGayRa: any = {
    View: { 'code': 'SC_NguyenNhanGayRa', 'action': '_view' },
    Export: { 'code': 'SC_NguyenNhanGayRa', 'action': '_export' },
    Insert: { 'code': 'SC_NguyenNhanGayRa', 'action': '_insert' },
    Update: { 'code': 'SC_NguyenNhanGayRa', 'action': '_update' },
    Delete: { 'code': 'SC_NguyenNhanGayRa', 'action': '_delete' },
  };
  public SC_DoiTuongXayRa: any = {
    View: { 'code': 'SC_DoiTuongXayRa', 'action': '_view' },
    Export: { 'code': 'SC_DoiTuongXayRa', 'action': '_export' },
    Insert: { 'code': 'SC_DoiTuongXayRa', 'action': '_insert' },
    Update: { 'code': 'SC_DoiTuongXayRa', 'action': '_update' },
    Delete: { 'code': 'SC_DoiTuongXayRa', 'action': '_delete' },
  };
  public SC_AnhHuongToChuc: any = {
    View: { 'code': 'SC_AnhHuongToChuc', 'action': '_view' },
    Export: { 'code': 'SC_AnhHuongToChuc', 'action': '_export' },
    Insert: { 'code': 'SC_AnhHuongToChuc', 'action': '_insert' },
    Update: { 'code': 'SC_AnhHuongToChuc', 'action': '_update' },
    Delete: { 'code': 'SC_AnhHuongToChuc', 'action': '_delete' },
  };
  public SC_DoiTuongPhatHien: any = {
    View: { 'code': 'SC_DoiTuongPhatHien', 'action': '_view' },
    Export: { 'code': 'SC_DoiTuongPhatHien', 'action': '_export' },
    Insert: { 'code': 'SC_DoiTuongPhatHien', 'action': '_insert' },
    Update: { 'code': 'SC_DoiTuongPhatHien', 'action': '_update' },
    Delete: { 'code': 'SC_DoiTuongPhatHien', 'action': '_delete' },
  };
  public SC_DanhMucXuatBan: any = {
    View: { 'code': 'SC_DanhMucXuatBan', 'action': '_view' },
    Export: { 'code': 'SC_DanhMucXuatBan', 'action': '_export' },
    Insert: { 'code': 'SC_DanhMucXuatBan', 'action': '_insert' },
    Update: { 'code': 'SC_DanhMucXuatBan', 'action': '_update' },
    Delete: { 'code': 'SC_DanhMucXuatBan', 'action': '_delete' },
  };
  public SC_BaoCao: any = {
    View: { 'code': 'SC_BaoCao', 'action': '_view' },
    Export: { 'code': 'SC_BaoCao', 'action': '_export' },
    Insert: { 'code': 'SC_BaoCao', 'action': '_insert' },
    Update: { 'code': 'SC_BaoCao', 'action': '_update' },
    Delete: { 'code': 'SC_BaoCao', 'action': '_delete' },
  };
  public SC_PhanTichChuyenGia: any = {
    View: { 'code': 'SC_PhanTichChuyenGia', 'action': '_view' },
    Export: { 'code': 'SC_PhanTichChuyenGia', 'action': '_export' },
    Insert: { 'code': 'SC_PhanTichChuyenGia', 'action': '_insert' },
    Update: { 'code': 'SC_PhanTichChuyenGia', 'action': '_update' },
    Delete: { 'code': 'SC_PhanTichChuyenGia', 'action': '_delete' },
  };
  public SC_PhanTichNhanVien: any = {
    View: { 'code': 'SC_PhanTichNhanVien', 'action': '_view' },
    Export: { 'code': 'SC_PhanTichNhanVien', 'action': '_export' },
    Insert: { 'code': 'SC_PhanTichNhanVien', 'action': '_insert' },
    Update: { 'code': 'SC_PhanTichNhanVien', 'action': '_update' },
    Delete: { 'code': 'SC_PhanTichNhanVien', 'action': '_delete' },
  };
  public SC_ThongKeBaoCao: any = {
    View: { 'code': 'SC_ThongKeBaoCao', 'action': '_view' },
    Export: { 'code': 'SC_ThongKeBaoCao', 'action': '_export' },
    Insert: { 'code': 'SC_ThongKeBaoCao', 'action': '_insert' },
    Update: { 'code': 'SC_ThongKeBaoCao', 'action': '_update' },
    Delete: { 'code': 'SC_ThongKeBaoCao', 'action': '_delete' },
  };
  public SC_BanTinAnToan: any = {
    View: { 'code': 'SC_BanTinAnToan', 'action': '_view' },
    Export: { 'code': 'SC_BanTinAnToan', 'action': '_export' },
    Insert: { 'code': 'SC_BanTinAnToan', 'action': '_insert' },
    Update: { 'code': 'SC_BanTinAnToan', 'action': '_update' },
    Delete: { 'code': 'SC_BanTinAnToan', 'action': '_delete' },
  };
  public SC_SuCoQuanTrong: any = {
    View: { 'code': 'SC_SuCoQuanTrong', 'action': '_view' },
    Export: { 'code': 'SC_SuCoQuanTrong', 'action': '_export' },
    Insert: { 'code': 'SC_SuCoQuanTrong', 'action': '_insert' },
    Update: { 'code': 'SC_SuCoQuanTrong', 'action': '_update' },
    Delete: { 'code': 'SC_SuCoQuanTrong', 'action': '_delete' },
  };
  public SC_XuatBanBaoCao: any = {
    View: { 'code': 'SC_XuatBanBaoCao', 'action': '_view' },
    Export: { 'code': 'SC_XuatBanBaoCao', 'action': '_export' },
    Insert: { 'code': 'SC_XuatBanBaoCao', 'action': '_insert' },
    Update: { 'code': 'SC_XuatBanBaoCao', 'action': '_update' },
    Delete: { 'code': 'SC_XuatBanBaoCao', 'action': '_delete' },
  };
  public DH_VB_LoaiVanBan: any = {
    View: { 'code': 'DH_VB_LoaiVanBan', 'action': '_view' },
    Export: { 'code': 'DH_VB_LoaiVanBan', 'action': '_export' },
    Insert: { 'code': 'DH_VB_LoaiVanBan', 'action': '_insert' },
    Update: { 'code': 'DH_VB_LoaiVanBan', 'action': '_update' },
    Delete: { 'code': 'DH_VB_LoaiVanBan', 'action': '_delete' },
  };
  public DH_VB_HinhThucGuiNhan: any = {
    View: { 'code': 'DH_VB_HinhThucGuiNhan', 'action': '_view' },
    Export: { 'code': 'DH_VB_HinhThucGuiNhan', 'action': '_export' },
    Insert: { 'code': 'DH_VB_HinhThucGuiNhan', 'action': '_insert' },
    Update: { 'code': 'DH_VB_HinhThucGuiNhan', 'action': '_update' },
    Delete: { 'code': 'DH_VB_HinhThucGuiNhan', 'action': '_delete' },
  };
  public DH_VB_CoQuanBanHanh: any = {
    View: { 'code': 'DH_VB_CoQuanBanHanh', 'action': '_view' },
    Export: { 'code': 'DH_VB_CoQuanBanHanh', 'action': '_export' },
    Insert: { 'code': 'DH_VB_CoQuanBanHanh', 'action': '_insert' },
    Update: { 'code': 'DH_VB_CoQuanBanHanh', 'action': '_update' },
    Delete: { 'code': 'DH_VB_CoQuanBanHanh', 'action': '_delete' },
  };
  public DH_VB_LinhVucVanBan: any = {
    View: { 'code': 'DH_VB_LinhVucVanBan', 'action': '_view' },
    Export: { 'code': 'DH_VB_LinhVucVanBan', 'action': '_export' },
    Insert: { 'code': 'DH_VB_LinhVucVanBan', 'action': '_insert' },
    Update: { 'code': 'DH_VB_LinhVucVanBan', 'action': '_update' },
    Delete: { 'code': 'DH_VB_LinhVucVanBan', 'action': '_delete' },
  };
  public DH_VB_MucDoKhan: any = {
    View: { 'code': 'DH_VB_MucDoKhan', 'action': '_view' },
    Export: { 'code': 'DH_VB_MucDoKhan', 'action': '_export' },
    Insert: { 'code': 'DH_VB_MucDoKhan', 'action': '_insert' },
    Update: { 'code': 'DH_VB_MucDoKhan', 'action': '_update' },
    Delete: { 'code': 'DH_VB_MucDoKhan', 'action': '_delete' },
  };
  public DH_VB_MucDoMat: any = {
    View: { 'code': 'DH_VB_MucDoMat', 'action': '_view' },
    Export: { 'code': 'DH_VB_MucDoMat', 'action': '_export' },
    Insert: { 'code': 'DH_VB_MucDoMat', 'action': '_insert' },
    Update: { 'code': 'DH_VB_MucDoMat', 'action': '_update' },
    Delete: { 'code': 'DH_VB_MucDoMat', 'action': '_delete' },
  };
  public DH_VB_CongVanDi: any = {
    View: { 'code': 'DH_VB_CongVanDi', 'action': '_view' },
    Export: { 'code': 'DH_VB_CongVanDi', 'action': '_export' },
    Insert: { 'code': 'DH_VB_CongVanDi', 'action': '_insert' },
    Update: { 'code': 'DH_VB_CongVanDi', 'action': '_update' },
    Delete: { 'code': 'DH_VB_CongVanDi', 'action': '_delete' },
  };
  public DH_VB_CongVanDen: any = {
    View: { 'code': 'DH_VB_CongVanDen', 'action': '_view' },
    Export: { 'code': 'DH_VB_CongVanDen', 'action': '_export' },
    Insert: { 'code': 'DH_VB_CongVanDen', 'action': '_insert' },
    Update: { 'code': 'DH_VB_CongVanDen', 'action': '_update' },
    Delete: { 'code': 'DH_VB_CongVanDen', 'action': '_delete' },
  };
  public DH_CV_QuanLyCongViec: any = {
    View: { 'code': 'DH_CV_QuanLyCongViec', 'action': '_view' },
    Export: { 'code': 'DH_CV_QuanLyCongViec', 'action': '_export' },
    Insert: { 'code': 'DH_CV_QuanLyCongViec', 'action': '_insert' },
    Update: { 'code': 'DH_CV_QuanLyCongViec', 'action': '_update' },
    Delete: { 'code': 'DH_CV_QuanLyCongViec', 'action': '_delete' },
  };
  public DH_CongViec: any = {
    View: { 'code': 'DH_CongViec', 'action': '_view' },
    Export: { 'code': 'DH_CongViec', 'action': '_export' },
    Insert: { 'code': 'DH_CongViec', 'action': '_insert' },
    Update: { 'code': 'DH_CongViec', 'action': '_update' },
    Delete: { 'code': 'DH_CongViec', 'action': '_delete' },
  };
  public DH_CV_ThanhVienDuAn: any = {
    View: { 'code': 'DH_CV_ThanhVienDuAn', 'action': '_view' },
    Export: { 'code': 'DH_CV_ThanhVienDuAn', 'action': '_export' },
    Insert: { 'code': 'DH_CV_ThanhVienDuAn', 'action': '_insert' },
    Update: { 'code': 'DH_CV_ThanhVienDuAn', 'action': '_update' },
    Delete: { 'code': 'DH_CV_ThanhVienDuAn', 'action': '_delete' },
  };
  public DH_CV_ThanhPhanDuAn: any = {
    View: { 'code': 'DH_CV_ThanhPhanDuAn', 'action': '_view' },
    Export: { 'code': 'DH_CV_ThanhPhanDuAn', 'action': '_export' },
    Insert: { 'code': 'DH_CV_ThanhPhanDuAn', 'action': '_insert' },
    Update: { 'code': 'DH_CV_ThanhPhanDuAn', 'action': '_update' },
    Delete: { 'code': 'DH_CV_ThanhPhanDuAn', 'action': '_delete' },
  };
  public DH_CV_DoUuTienCongVien: any = {
    View: { 'code': 'DH_CV_DoUuTienCongVien', 'action': '_view' },
    Export: { 'code': 'DH_CV_DoUuTienCongVien', 'action': '_export' },
    Insert: { 'code': 'DH_CV_DoUuTienCongVien', 'action': '_insert' },
    Update: { 'code': 'DH_CV_DoUuTienCongVien', 'action': '_update' },
    Delete: { 'code': 'DH_CV_DoUuTienCongVien', 'action': '_delete' },
  };
  public DH_CV_LoaiDuAn: any = {
    View: { 'code': 'DH_CV_LoaiDuAn', 'action': '_view' },
    Export: { 'code': 'DH_CV_LoaiDuAn', 'action': '_export' },
    Insert: { 'code': 'DH_CV_LoaiDuAn', 'action': '_insert' },
    Update: { 'code': 'DH_CV_LoaiDuAn', 'action': '_update' },
    Delete: { 'code': 'DH_CV_LoaiDuAn', 'action': '_delete' },
  };
  public DH_VB_TaiLieuVanBan: any = {
    View: { 'code': 'DH_VB_TaiLieuVanBan', 'action': '_view' },
    Export: { 'code': 'DH_VB_TaiLieuVanBan', 'action': '_export' },
    Insert: { 'code': 'DH_VB_TaiLieuVanBan', 'action': '_insert' },
    Update: { 'code': 'DH_VB_TaiLieuVanBan', 'action': '_update' },
    Delete: { 'code': 'DH_VB_TaiLieuVanBan', 'action': '_delete' },
  };
  public DH_BC_TinhHinhBenhNhan: any = {
    View: { 'code': 'DH_BC_TinhHinhBenhNhan', 'action': '_view' },
    Export: { 'code': 'DH_BC_TinhHinhBenhNhan', 'action': '_export' },
    Insert: { 'code': 'DH_BC_TinhHinhBenhNhan', 'action': '_insert' },
    Update: { 'code': 'DH_BC_TinhHinhBenhNhan', 'action': '_update' },
    Delete: { 'code': 'DH_BC_TinhHinhBenhNhan', 'action': '_delete' },
  };
  public DH_BC_TinhHinhKhamBenh: any = {
    View: { 'code': 'DH_BC_TinhHinhKhamBenh', 'action': '_view' },
    Export: { 'code': 'DH_BC_TinhHinhKhamBenh', 'action': '_export' },
    Insert: { 'code': 'DH_BC_TinhHinhKhamBenh', 'action': '_insert' },
    Update: { 'code': 'DH_BC_TinhHinhKhamBenh', 'action': '_update' },
    Delete: { 'code': 'DH_BC_TinhHinhKhamBenh', 'action': '_delete' },
  };
  public DH_CV_QuanLyDuAn: any = {
    View: { 'code': 'DH_CV_QuanLyDuAn', 'action': '_view' },
    Export: { 'code': 'DH_CV_QuanLyDuAn', 'action': '_export' },
    Insert: { 'code': 'DH_CV_QuanLyDuAn', 'action': '_insert' },
    Update: { 'code': 'DH_CV_QuanLyDuAn', 'action': '_update' },
    Delete: { 'code': 'DH_CV_QuanLyDuAn', 'action': '_delete' },
  };
  public DH_VanBan: any = {
    View: { 'code': 'DH_VanBan', 'action': '_view' },
    Export: { 'code': 'DH_VanBan', 'action': '_export' },
    Insert: { 'code': 'DH_VanBan', 'action': '_insert' },
    Update: { 'code': 'DH_VanBan', 'action': '_update' },
    Delete: { 'code': 'DH_VanBan', 'action': '_delete' },
  };
  public DH_HSBA: any = {
    View: { 'code': 'DH_HSBA', 'action': '_view' },
    Export: { 'code': 'DH_HSBA', 'action': '_export' },
    Insert: { 'code': 'DH_HSBA', 'action': '_insert' },
    Update: { 'code': 'DH_HSBA', 'action': '_update' },
    Delete: { 'code': 'DH_HSBA', 'action': '_delete' },
  };
  public DH_HS_KetQuaDieuTri: any = {
    View: { 'code': 'DH_HS_KetQuaDieuTri', 'action': '_view' },
    Export: { 'code': 'DH_HS_KetQuaDieuTri', 'action': '_export' },
    Insert: { 'code': 'DH_HS_KetQuaDieuTri', 'action': '_insert' },
    Update: { 'code': 'DH_HS_KetQuaDieuTri', 'action': '_update' },
    Delete: { 'code': 'DH_HS_KetQuaDieuTri', 'action': '_delete' },
  };
  public DH_HS_LoaiHoSo: any = {
    View: { 'code': 'DH_HS_LoaiHoSo', 'action': '_view' },
    Export: { 'code': 'DH_HS_LoaiHoSo', 'action': '_export' },
    Insert: { 'code': 'DH_HS_LoaiHoSo', 'action': '_insert' },
    Update: { 'code': 'DH_HS_LoaiHoSo', 'action': '_update' },
    Delete: { 'code': 'DH_HS_LoaiHoSo', 'action': '_delete' },
  };
  public DH_HS_MauHoSo: any = {
    View: { 'code': 'DH_HS_MauHoSo', 'action': '_view' },
    Export: { 'code': 'DH_HS_MauHoSo', 'action': '_export' },
    Insert: { 'code': 'DH_HS_MauHoSo', 'action': '_insert' },
    Update: { 'code': 'DH_HS_MauHoSo', 'action': '_update' },
    Delete: { 'code': 'DH_HS_MauHoSo', 'action': '_delete' },
  };
  public DH_HS_HoSoBenhAn: any = {
    View: { 'code': 'DH_HS_HoSoBenhAn', 'action': '_view' },
    Export: { 'code': 'DH_HS_HoSoBenhAn', 'action': '_export' },
    Insert: { 'code': 'DH_HS_HoSoBenhAn', 'action': '_insert' },
    Update: { 'code': 'DH_HS_HoSoBenhAn', 'action': '_update' },
    Delete: { 'code': 'DH_HS_HoSoBenhAn', 'action': '_delete' },
  };
  public DH_VB_DonViNgoai: any = {
    View: { 'code': 'DH_VB_DonViNgoai', 'action': '_view' },
    Export: { 'code': 'DH_VB_DonViNgoai', 'action': '_export' },
    Insert: { 'code': 'DH_VB_DonViNgoai', 'action': '_insert' },
    Update: { 'code': 'DH_VB_DonViNgoai', 'action': '_update' },
    Delete: { 'code': 'DH_VB_DonViNgoai', 'action': '_delete' },
  };
  public DH_VB_CanBo: any = {
    View: { 'code': 'DH_VB_CanBo', 'action': '_view' },
    Export: { 'code': 'DH_VB_CanBo', 'action': '_export' },
    Insert: { 'code': 'DH_VB_CanBo', 'action': '_insert' },
    Update: { 'code': 'DH_VB_CanBo', 'action': '_update' },
    Delete: { 'code': 'DH_VB_CanBo', 'action': '_delete' },
  };
  public CC_DangKyNghi: any = {
    View: { 'code': 'CC_DangKyNghi', 'action': '_view' },
    Export: { 'code': 'CC_DangKyNghi', 'action': '_export' },
    Insert: { 'code': 'CC_DangKyNghi', 'action': '_insert' },
    Update: { 'code': 'CC_DangKyNghi', 'action': '_update' },
    Delete: { 'code': 'CC_DangKyNghi', 'action': '_delete' },
  };
  public CC_NgayNghi: any = {
    View: { 'code': 'CC_NgayNghi', 'action': '_view' },
    Export: { 'code': 'CC_NgayNghi', 'action': '_export' },
    Insert: { 'code': 'CC_NgayNghi', 'action': '_insert' },
    Update: { 'code': 'CC_NgayNghi', 'action': '_update' },
    Delete: { 'code': 'CC_NgayNghi', 'action': '_delete' },
  };
  public CC_NgayLamBu: any = {
    View: { 'code': 'CC_NgayLamBu', 'action': '_view' },
    Export: { 'code': 'CC_NgayLamBu', 'action': '_export' },
    Insert: { 'code': 'CC_NgayLamBu', 'action': '_insert' },
    Update: { 'code': 'CC_NgayLamBu', 'action': '_update' },
    Delete: { 'code': 'CC_NgayLamBu', 'action': '_delete' },
  };
  public CC_KyHieuChamCong: any = {
    View: { 'code': 'CC_KyHieuChamCong', 'action': '_view' },
    Export: { 'code': 'CC_KyHieuChamCong', 'action': '_export' },
    Insert: { 'code': 'CC_KyHieuChamCong', 'action': '_insert' },
    Update: { 'code': 'CC_KyHieuChamCong', 'action': '_update' },
    Delete: { 'code': 'CC_KyHieuChamCong', 'action': '_delete' },
  };
  public CC_NhomKyHieuChamCong: any = {
    View: { 'code': 'CC_NhomKyHieuChamCong', 'action': '_view' },
    Export: { 'code': 'CC_NhomKyHieuChamCong', 'action': '_export' },
    Insert: { 'code': 'CC_NhomKyHieuChamCong', 'action': '_insert' },
    Update: { 'code': 'CC_NhomKyHieuChamCong', 'action': '_update' },
    Delete: { 'code': 'CC_NhomKyHieuChamCong', 'action': '_delete' },
  };
  public CC_PhanNhomKyHieuChamCong: any = {
    View: { 'code': 'CC_PhanNhomKyHieuChamCong', 'action': '_view' },
    Export: { 'code': 'CC_PhanNhomKyHieuChamCong', 'action': '_export' },
    Insert: { 'code': 'CC_PhanNhomKyHieuChamCong', 'action': '_insert' },
    Update: { 'code': 'CC_PhanNhomKyHieuChamCong', 'action': '_update' },
    Delete: { 'code': 'CC_PhanNhomKyHieuChamCong', 'action': '_delete' },
  };
  public TKYT_DoiTuong: any = {
    View: { 'code': 'TKYT_DoiTuong', 'action': '_view' },
    Export: { 'code': 'TKYT_DoiTuong', 'action': '_export' },
    Insert: { 'code': 'TKYT_DoiTuong', 'action': '_insert' },
    Update: { 'code': 'TKYT_DoiTuong', 'action': '_update' },
    Delete: { 'code': 'TKYT_DoiTuong', 'action': '_delete' },
  };
  public TKYT_YeuToDichTe: any = {
    View: { 'code': 'TKYT_YeuToDichTe', 'action': '_view' },
    Export: { 'code': 'TKYT_YeuToDichTe', 'action': '_export' },
    Insert: { 'code': 'TKYT_YeuToDichTe', 'action': '_insert' },
    Update: { 'code': 'TKYT_YeuToDichTe', 'action': '_update' },
    Delete: { 'code': 'TKYT_YeuToDichTe', 'action': '_delete' },
  };
  public TKYT_ToKhaiYTe: any = {
    View: { 'code': 'TKYT_ToKhaiYTe', 'action': '_view' },
    Export: { 'code': 'TKYT_ToKhaiYTe', 'action': '_export' },
    Insert: { 'code': 'TKYT_ToKhaiYTe', 'action': '_insert' },
    Update: { 'code': 'TKYT_ToKhaiYTe', 'action': '_update' },
    Delete: { 'code': 'TKYT_ToKhaiYTe', 'action': '_delete' },
  };
  public TKYT_TaoToKhaiYTe: any = {
    View: { 'code': 'TKYT_TaoToKhaiYTe', 'action': '_view' },
    Export: { 'code': 'TKYT_TaoToKhaiYTe', 'action': '_export' },
    Insert: { 'code': 'TKYT_TaoToKhaiYTe', 'action': '_insert' },
    Update: { 'code': 'TKYT_TaoToKhaiYTe', 'action': '_update' },
    Delete: { 'code': 'TKYT_TaoToKhaiYTe', 'action': '_delete' },
  };
  public CLBV_TieuChi_TIeuMuc: any = {
    View: { 'code': 'CLBV_TieuChi_TIeuMuc', 'action': '_view' },
    Export: { 'code': 'CLBV_TieuChi_TIeuMuc', 'action': '_export' },
    Insert: { 'code': 'CLBV_TieuChi_TIeuMuc', 'action': '_insert' },
    Update: { 'code': 'CLBV_TieuChi_TIeuMuc', 'action': '_update' },
    Delete: { 'code': 'CLBV_TieuChi_TIeuMuc', 'action': '_delete' },
  };
  public CLBV_DotKiemTra: any = {
    View: { 'code': 'CLBV_DotKiemTra', 'action': '_view' },
    Export: { 'code': 'CLBV_DotKiemTra', 'action': '_export' },
    Insert: { 'code': 'CLBV_DotKiemTra', 'action': '_insert' },
    Update: { 'code': 'CLBV_DotKiemTra', 'action': '_update' },
    Delete: { 'code': 'CLBV_DotKiemTra', 'action': '_delete' },
  };
  public CLBV_ChamDiem: any = {
    View: { 'code': 'CLBV_ChamDiem', 'action': '_view' },
    Export: { 'code': 'CLBV_ChamDiem', 'action': '_export' },
    Insert: { 'code': 'CLBV_ChamDiem', 'action': '_insert' },
    Update: { 'code': 'CLBV_ChamDiem', 'action': '_update' },
    Delete: { 'code': 'CLBV_ChamDiem', 'action': '_delete' },
  };
  public CLBV_ChiTietKetQuaTieuMuc: any = {
    View: { 'code': 'CLBV_ChiTietKetQuaTieuMuc', 'action': '_view' },
    Export: { 'code': 'CLBV_ChiTietKetQuaTieuMuc', 'action': '_export' },
    Insert: { 'code': 'CLBV_ChiTietKetQuaTieuMuc', 'action': '_insert' },
    Update: { 'code': 'CLBV_ChiTietKetQuaTieuMuc', 'action': '_update' },
    Delete: { 'code': 'CLBV_ChiTietKetQuaTieuMuc', 'action': '_delete' },
  };
  public CLBV_KetQuaKiemTraCacDot: any = {
    View: { 'code': 'CLBV_KetQuaKiemTraCacDot', 'action': '_view' },
    Export: { 'code': 'CLBV_KetQuaKiemTraCacDot', 'action': '_export' },
    Insert: { 'code': 'CLBV_KetQuaKiemTraCacDot', 'action': '_insert' },
    Update: { 'code': 'CLBV_KetQuaKiemTraCacDot', 'action': '_update' },
    Delete: { 'code': 'CLBV_KetQuaKiemTraCacDot', 'action': '_delete' },
  };
  public DM_DanToc: any = {
    View: { 'code': 'DM_DanToc', 'action': '_view' },
    Export: { 'code': 'DM_DanToc', 'action': '_export' },
    Insert: { 'code': 'DM_DanToc', 'action': '_insert' },
    Update: { 'code': 'DM_DanToc', 'action': '_update' },
    Delete: { 'code': 'DM_DanToc', 'action': '_delete' },
  };
  public DM_QuocGia: any = {
    View: { 'code': 'DM_QuocGia', 'action': '_view' },
    Export: { 'code': 'DM_QuocGia', 'action': '_export' },
    Insert: { 'code': 'DM_QuocGia', 'action': '_insert' },
    Update: { 'code': 'DM_QuocGia', 'action': '_update' },
    Delete: { 'code': 'DM_QuocGia', 'action': '_delete' },
  };
  public DM_TonGiao: any = {
    View: { 'code': 'DM_TonGiao', 'action': '_view' },
    Export: { 'code': 'DM_TonGiao', 'action': '_export' },
    Insert: { 'code': 'DM_TonGiao', 'action': '_insert' },
    Update: { 'code': 'DM_TonGiao', 'action': '_update' },
    Delete: { 'code': 'DM_TonGiao', 'action': '_delete' },
  };
  public HSCB_Tinh_Huyen_Xa: any = {
    View: { 'code': 'HSCB_Tinh_Huyen_Xa', 'action': '_view' },
    Export: { 'code': 'HSCB_Tinh_Huyen_Xa', 'action': '_export' },
    Insert: { 'code': 'HSCB_Tinh_Huyen_Xa', 'action': '_insert' },
    Update: { 'code': 'HSCB_Tinh_Huyen_Xa', 'action': '_update' },
    Delete: { 'code': 'HSCB_Tinh_Huyen_Xa', 'action': '_delete' },
  };
  public HSCB_ViTriViecLam: any = {
    View: { 'code': 'HSCB_ViTriViecLam', 'action': '_view' },
    Export: { 'code': 'HSCB_ViTriViecLam', 'action': '_export' },
    Insert: { 'code': 'HSCB_ViTriViecLam', 'action': '_insert' },
    Update: { 'code': 'HSCB_ViTriViecLam', 'action': '_update' },
    Delete: { 'code': 'HSCB_ViTriViecLam', 'action': '_delete' },
  };
  public HSCB_TrinhDoTinHoc: any = {
    View: { 'code': 'HSCB_TrinhDoTinHoc', 'action': '_view' },
    Export: { 'code': 'HSCB_TrinhDoTinHoc', 'action': '_export' },
    Insert: { 'code': 'HSCB_TrinhDoTinHoc', 'action': '_insert' },
    Update: { 'code': 'HSCB_TrinhDoTinHoc', 'action': '_update' },
    Delete: { 'code': 'HSCB_TrinhDoTinHoc', 'action': '_delete' },
  };
  public HSCB_TrinhDoNgoaiNgu: any = {
    View: { 'code': 'HSCB_TrinhDoNgoaiNgu', 'action': '_view' },
    Export: { 'code': 'HSCB_TrinhDoNgoaiNgu', 'action': '_export' },
    Insert: { 'code': 'HSCB_TrinhDoNgoaiNgu', 'action': '_insert' },
    Update: { 'code': 'HSCB_TrinhDoNgoaiNgu', 'action': '_update' },
    Delete: { 'code': 'HSCB_TrinhDoNgoaiNgu', 'action': '_delete' },
  };
  public HSCB_ChuyenNganh: any = {
    View: { 'code': 'HSCB_ChuyenNganh', 'action': '_view' },
    Export: { 'code': 'HSCB_ChuyenNganh', 'action': '_export' },
    Insert: { 'code': 'HSCB_ChuyenNganh', 'action': '_insert' },
    Update: { 'code': 'HSCB_ChuyenNganh', 'action': '_update' },
    Delete: { 'code': 'HSCB_ChuyenNganh', 'action': '_delete' },
  };
  public HSCB_Benh: any = {
    View: { 'code': 'HSCB_Benh', 'action': '_view' },
    Export: { 'code': 'HSCB_Benh', 'action': '_export' },
    Insert: { 'code': 'HSCB_Benh', 'action': '_insert' },
    Update: { 'code': 'HSCB_Benh', 'action': '_update' },
    Delete: { 'code': 'HSCB_Benh', 'action': '_delete' },
  };
  public HSCB_TinhTrangHonNhan: any = {
    View: { 'code': 'HSCB_TinhTrangHonNhan', 'action': '_view' },
    Export: { 'code': 'HSCB_TinhTrangHonNhan', 'action': '_export' },
    Insert: { 'code': 'HSCB_TinhTrangHonNhan', 'action': '_insert' },
    Update: { 'code': 'HSCB_TinhTrangHonNhan', 'action': '_update' },
    Delete: { 'code': 'HSCB_TinhTrangHonNhan', 'action': '_delete' },
  };
  public HSCB_VanBang: any = {
    View: { 'code': 'HSCB_VanBang', 'action': '_view' },
    Export: { 'code': 'HSCB_VanBang', 'action': '_export' },
    Insert: { 'code': 'HSCB_VanBang', 'action': '_insert' },
    Update: { 'code': 'HSCB_VanBang', 'action': '_update' },
    Delete: { 'code': 'HSCB_VanBang', 'action': '_delete' },
  };
  public HSCB_LyLuanChinhTri: any = {
    View: { 'code': 'HSCB_LyLuanChinhTri', 'action': '_view' },
    Export: { 'code': 'HSCB_LyLuanChinhTri', 'action': '_export' },
    Insert: { 'code': 'HSCB_LyLuanChinhTri', 'action': '_insert' },
    Update: { 'code': 'HSCB_LyLuanChinhTri', 'action': '_update' },
    Delete: { 'code': 'HSCB_LyLuanChinhTri', 'action': '_delete' },
  };
  public HSCB_TrinhDoQuanLy: any = {
    View: { 'code': 'HSCB_TrinhDoQuanLy', 'action': '_view' },
    Export: { 'code': 'HSCB_TrinhDoQuanLy', 'action': '_export' },
    Insert: { 'code': 'HSCB_TrinhDoQuanLy', 'action': '_insert' },
    Update: { 'code': 'HSCB_TrinhDoQuanLy', 'action': '_update' },
    Delete: { 'code': 'HSCB_TrinhDoQuanLy', 'action': '_delete' },
  };
  public HSCB_QuanLyBenhVien: any = {
    View: { 'code': 'HSCB_QuanLyBenhVien', 'action': '_view' },
    Export: { 'code': 'HSCB_QuanLyBenhVien', 'action': '_export' },
    Insert: { 'code': 'HSCB_QuanLyBenhVien', 'action': '_insert' },
    Update: { 'code': 'HSCB_QuanLyBenhVien', 'action': '_update' },
    Delete: { 'code': 'HSCB_QuanLyBenhVien', 'action': '_delete' },
  };
  public HSCB_XepLoai: any = {
    View: { 'code': 'HSCB_XepLoai', 'action': '_view' },
    Export: { 'code': 'HSCB_XepLoai', 'action': '_export' },
    Insert: { 'code': 'HSCB_XepLoai', 'action': '_insert' },
    Update: { 'code': 'HSCB_XepLoai', 'action': '_update' },
    Delete: { 'code': 'HSCB_XepLoai', 'action': '_delete' },
  };
  public HSCB_XepLoaiSucKhoe: any = {
    View: { 'code': 'HSCB_XepLoaiSucKhoe', 'action': '_view' },
    Export: { 'code': 'HSCB_XepLoaiSucKhoe', 'action': '_export' },
    Insert: { 'code': 'HSCB_XepLoaiSucKhoe', 'action': '_insert' },
    Update: { 'code': 'HSCB_XepLoaiSucKhoe', 'action': '_update' },
    Delete: { 'code': 'HSCB_XepLoaiSucKhoe', 'action': '_delete' },
  };
  public HSCB_NgoaiNgu: any = {
    View: { 'code': 'HSCB_NgoaiNgu', 'action': '_view' },
    Export: { 'code': 'HSCB_NgoaiNgu', 'action': '_export' },
    Insert: { 'code': 'HSCB_NgoaiNgu', 'action': '_insert' },
    Update: { 'code': 'HSCB_NgoaiNgu', 'action': '_update' },
    Delete: { 'code': 'HSCB_NgoaiNgu', 'action': '_delete' },
  };
  public HSCB_HocHam: any = {
    View: { 'code': 'HSCB_HocHam', 'action': '_view' },
    Export: { 'code': 'HSCB_HocHam', 'action': '_export' },
    Insert: { 'code': 'HSCB_HocHam', 'action': '_insert' },
    Update: { 'code': 'HSCB_HocHam', 'action': '_update' },
    Delete: { 'code': 'HSCB_HocHam', 'action': '_delete' },
  };
  public HSCB_HocVi: any = {
    View: { 'code': 'HSCB_HocVi', 'action': '_view' },
    Export: { 'code': 'HSCB_HocVi', 'action': '_export' },
    Insert: { 'code': 'HSCB_HocVi', 'action': '_insert' },
    Update: { 'code': 'HSCB_HocVi', 'action': '_update' },
    Delete: { 'code': 'HSCB_HocVi', 'action': '_delete' },
  };
  public HSCB_CapDaoTao: any = {
    View: { 'code': 'HSCB_CapDaoTao', 'action': '_view' },
    Export: { 'code': 'HSCB_CapDaoTao', 'action': '_export' },
    Insert: { 'code': 'HSCB_CapDaoTao', 'action': '_insert' },
    Update: { 'code': 'HSCB_CapDaoTao', 'action': '_update' },
    Delete: { 'code': 'HSCB_CapDaoTao', 'action': '_delete' },
  };
  public HSCB_QuanHe: any = {
    View: { 'code': 'HSCB_QuanHe', 'action': '_view' },
    Export: { 'code': 'HSCB_QuanHe', 'action': '_export' },
    Insert: { 'code': 'HSCB_QuanHe', 'action': '_insert' },
    Update: { 'code': 'HSCB_QuanHe', 'action': '_update' },
    Delete: { 'code': 'HSCB_QuanHe', 'action': '_delete' },
  };
  public HSCB_Luong_Co_Ban: any = {
    View: { 'code': 'HSCB_Luong_Co_Ban', 'action': '_view' },
    Export: { 'code': 'HSCB_Luong_Co_Ban', 'action': '_export' },
    Insert: { 'code': 'HSCB_Luong_Co_Ban', 'action': '_insert' },
    Update: { 'code': 'HSCB_Luong_Co_Ban', 'action': '_update' },
    Delete: { 'code': 'HSCB_Luong_Co_Ban', 'action': '_delete' },
  };
  public HSCB_ChucDanh: any = {
    View: { 'code': 'HSCB_ChucDanh', 'action': '_view' },
    Export: { 'code': 'HSCB_ChucDanh', 'action': '_export' },
    Insert: { 'code': 'HSCB_ChucDanh', 'action': '_insert' },
    Update: { 'code': 'HSCB_ChucDanh', 'action': '_update' },
    Delete: { 'code': 'HSCB_ChucDanh', 'action': '_delete' },
  };
  public HSCB_ChucVu: any = {
    View: { 'code': 'HSCB_ChucVu', 'action': '_view' },
    Export: { 'code': 'HSCB_ChucVu', 'action': '_export' },
    Insert: { 'code': 'HSCB_ChucVu', 'action': '_insert' },
    Update: { 'code': 'HSCB_ChucVu', 'action': '_update' },
    Delete: { 'code': 'HSCB_ChucVu', 'action': '_delete' },
  };
  public HSCB_CanBo: any = {
    View: { 'code': 'HSCB_CanBo', 'action': '_view' },
    Export: { 'code': 'HSCB_CanBo', 'action': '_export' },
    Insert: { 'code': 'HSCB_CanBo', 'action': '_insert' },
    Update: { 'code': 'HSCB_CanBo', 'action': '_update' },
    Delete: { 'code': 'HSCB_CanBo', 'action': '_delete' },
  };
  public HSCB_CanBoBangCap: any = {
    View: { 'code': 'HSCB_CanBoBangCap', 'action': '_view' },
    Export: { 'code': 'HSCB_CanBoBangCap', 'action': '_export' },
    Insert: { 'code': 'HSCB_CanBoBangCap', 'action': '_insert' },
    Update: { 'code': 'HSCB_CanBoBangCap', 'action': '_update' },
    Delete: { 'code': 'HSCB_CanBoBangCap', 'action': '_delete' },
  };
  public HSCB_QuaTrinhCongTac: any = {
    View: { 'code': 'HSCB_QuaTrinhCongTac', 'action': '_view' },
    Export: { 'code': 'HSCB_QuaTrinhCongTac', 'action': '_export' },
    Insert: { 'code': 'HSCB_QuaTrinhCongTac', 'action': '_insert' },
    Update: { 'code': 'HSCB_QuaTrinhCongTac', 'action': '_update' },
    Delete: { 'code': 'HSCB_QuaTrinhCongTac', 'action': '_delete' },
  };
  public navData: any;
  constructor(
    private translateService: TranslateService,
    private toastrService: ToastrService,
  ) { }

  setInitState() {
    this.translateService.addLangs(['en', 'vi']);
    const browserLang = (this.translate.getBrowserLang().includes('vi')) ? 'en' : 'vi';
    this.setLang(browserLang);
  }

  setLang(lang: string) {
    this.translateService.onLangChange.pipe(take(1)).subscribe(result => {
      this.language$.next(result);
    });
    this.translateService.use(lang);
  }
  bitToValue = (value) => {
    if (value == null) {
      return 0;
    } else if (value.data) {
      return value.data[0];
    } else {
      return value ? 1 : 0;
    }
  }
  messageRes(message: any) {
    this.toastrService.success(this.translate.instant(message));
  }
  messageErr(res: any) {
    if (res.error && res.error.message) {
      this.toastrService.error(this.translate.instant(res.error.message));
    } else if (res.error) {
      this.toastrService.error(this.translate.instant(res.error));
    }
  }
}

