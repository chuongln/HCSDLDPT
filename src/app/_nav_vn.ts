import { INavData } from '@coreui/angular';

export const navItemsVn: INavData[] = [
  {
    name: 'Trang chủ',
    url: '/dashboard',
    icon: 'icon-speedometer',
    attributes: {collapse: true},

  },
  {
    name: 'Quản trị',
    url: '/admin',
    icon: 'icon-people',
    children: [
      {
        name: 'Tài khoản',
        url: '/admin/portal-account',
        icon: 'icon-user' ,
        attributes: {rel: 'noopener' },

      },
      {
        name: 'Quyền',
        url: '/admin/permission',
        icon: 'icon-user',       attributes: {collapse: true},
      },
      {
        name: 'Nhóm quyền',
        url: '/admin/role',
        icon: 'icon-user',       attributes: {collapse: true},
      },
    ]
  },
  {
    name: 'Báo cáo hàng ngày',
    icon: 'icon-people',
    url: '/report',
    attributes: {collapse: true},
    children: [
      {
        name: 'Tình hình khám bệnh',
        url: '/report/tinhhinhkhambenh',
        icon: 'icon-user',
      },
      {
        name: 'Tình hình bệnh nhân',
        url: '/report/tinhhinhbenhnhan',
        icon: 'icon-user',
      },
    ]
  },
  {
    name: 'Hồ sơ bệnh án',
    url: '/hsba',
    icon: 'icon-people',
    children: [
      {
        name: 'Hồ sơ bệnh án',
        url: '/hsba/hosobenhan',
        icon: 'icon-user'
      },
      {
        name: 'Danh mục',
        icon: 'icon-user',
        children: [
          {
            name: 'Kết quả điều trị',
            url: '/hsba/ketquadieutri',
            icon: 'fa fa-terminal'
          },
          {
            name: 'Loại hồ sơ',
            url: '/hsba/loaihoso',
            icon: 'fa fa-terminal'
          },
          {
            name: 'Mẫu hồ hơ',
            url: '/hsba/mauhoso',
            icon: 'fa fa-terminal'
          }
        ]
      },
    ]
  },
  {
    name: 'Quản lý văn bản',
    url: '/jobs',
    icon: 'icon-people',
    children: [
      {
        name: 'Công văn đến',
        url: '/doc/congvanden',
        icon: 'icon-user'
      },
      {
        name: 'Công văn đi',
        url: '/doc/congvandi',
        icon: 'icon-user'
      },
      {
        name: 'Tài liệu - Văn bản',
        url: '/doc/tailieu',
        icon: 'icon-user'
      },
      {
        name: 'Đơn vị ngoài',
        url: '/doc/donvingoai',
        icon: 'icon-user'
      },
      {
        name: 'Cán bộ đơn vị ngoài',
        url: '/doc/donvingoai/canbo',
        icon: 'icon-user'
      },
      {
        name: 'Danh mục',
        icon: 'icon-user',
        url: '/doc/donvingoai/canbo',
        attributes: {collapse: true},
        children: [
          {
            name: 'Loại văn bản',
            url: '/doc/loaivanban',
            icon: 'fa fa-terminal'
          },
          {
            name: 'Hình thức gửi nhận',
            url: '/doc/hinhthucguinhan',
            icon: 'fa fa-terminal'
          },
          {
            name: 'Cơ quan ban hành',
            url: '/doc/coquanbanhanh',
            icon: 'fa fa-terminal'
          },
          {
            name: 'Lĩnh vực văn bản',
            url: '/doc/linhvucvanban',
            icon: 'fa fa-terminal'
          },
          {
            name: 'Mức độ khẩn',
            url: '/doc/mucdokhan',
            icon: 'fa fa-terminal'
          },
          {
            name: 'Mức độ mật',
            url: '/doc/mucdomat',
            icon: 'fa fa-terminal'
          },
        ]
      },
    ]
  },
  {
    name: 'Chấm công',
    url: '/chamcong',
    icon: 'icon-people',
    attributes: {collapse: true},
    children: [
      {
        name: 'Đăng ký nghỉ làm việc',
        url: '/chamcong/dangkynghilamviec',
        icon: 'icon-user'
      },
      {
        name: 'Ngày nghỉ',
        url: '/chamcong/ngaynghi',
        icon: 'icon-user'
      },
      {
        name: 'Ngày làm bù',
        url: '/chamcong/ngaylambu',
        icon: 'icon-user',
        attributes: {collapse: true}
      },
      {
        name: 'Danh mục',
        icon: 'icon-user',
        attributes: {collapse: true},
        children: [
          {
            name: 'Ký hiệu chấm công',
            url: '/chamcong/kyhieuchamcong',
            icon: 'fa fa-terminal'
          },
          {
            name: 'Nhóm ký hiệu chấm công',
            url: '/chamcong/nhomkyhieuchamcong',
            icon: 'fa fa-terminal'
          },
        ]
      },
    ]
  },
  {
    name: 'Quản lý công việc',
    url: '/jobs',
    icon: 'icon-people',
    children: [
      {
        name: 'Quản lý dự án',
        url: '/jobs/project',
        icon: 'icon-user'
      },
      {
        name: 'Quản lý công việc',
        url: '/jobs/project/task',
        icon: 'icon-user'
      },
      {
        name: 'Danh mục loại dự án',
        url: '/jobs/project-type',
        icon: 'icon-user'
      },
    ]
  },
  {
    name: 'Sự cố y khoa',
    url: '/scyk',
    icon: 'icon-user',
    children: [
      {
        name: 'Danh mục',
        url: '/scyk/mdtt',
        icon: 'icon-user',
        attributes: {collapse: true},
        children: [
          {
            name: 'Theo mức độ tổn thương',
            url: '/scyk/mdtt',
            icon: 'fa fa-terminal'
          },
          {
            name: 'Sự cố y khoa nghiêm trọng',
            url: '/scyk/nt',
            icon: 'fa fa-terminal'
          },
          {
            name: 'Nhóm sự cố',
            url: '/scyk/nsc',
            icon: 'fa fa-terminal'
          },
          {
            name: 'Nhóm nguyên nhân gây ra sự cố',
            url: '/scyk/nngr',
            icon: 'fa fa-terminal'
          },
          {
            name: 'Đối tượng xảy ra sự cố',
            url: '/scyk/dtxr',
            icon: 'fa fa-terminal'
          },
          {
            name: 'Đối tượng phát hiện sự cố',
            url: '/scyk/dtph',
            icon: 'fa fa-terminal'
          },
          {
            name: 'Mức độ ảnh hưởng đến tổ chức',
            url: '/scyk/mdah',
            icon: 'fa fa-terminal'
          },
          {
            name: 'Xuất bản báo cáo',
            url: '/scyk/xuatban',
            icon: 'fa fa-terminal'
          }
        ]
      },
      {
        name: 'Báo cáo',
        url: '/scyk/baocao',
        icon: 'icon-user'
      },
      {
        name: 'Tạo báo cáo',
        url: '/scyk/baocao/insert',
        icon: 'icon-user'
      },
      {
        name: 'Thống kê báo cáo',
        url: '/scyk/baocao/thongke',
        icon: 'icon-user'
      },
      {
        name: 'Bản tin an toàn',
        url: '/scyk/bantinantoan',
        icon: 'icon-user'
      },
      {
        name: 'Sự cố quan trọng',
        url: '/scyk/sucoquantrong',
        icon: 'icon-user'
      }
    ]
  },
  {
    name: 'Quản lý chất lượng',
    url: '/clbv',
    icon: 'icon-people',
    children: [
      {
        name: 'Tiêu chí - Tiểu mục',
        url: '/clbv/tieuchi-tieumuc',
        icon: 'icon-user'
      },
      {
        name: 'Đợt kiểm tra',
        url: '/clbv/dot-kiem-tra',
        icon: 'icon-user'
      },
      {
        name: 'Chấm điểm',
        url: '/clbv/cham-diem',
        icon: 'icon-user'
      },
      {
        name: 'KQ tiểu mục của tiêu chí',
        url: '/clbv/ketqua-tieumuc-tieuchi',
        icon: 'icon-user'
      },
      {
        name: 'Thống kê KQ đợt kiểm tra',
        url: '/clbv/tk-ketqua-kiemtra',
        icon: 'icon-user'
      },
    ]
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  }
];
