import React from "react";
import "./styles.scss";

const text1 = [
  "Tiếng Việt",
  "English (UK)",
  "中文(台灣)",
  "한국어",
  "日本語",
  "Français (France)",
  "ภาษาไทย",
  "Español",
  "Português (Brasil)",
  "Deutsch",
  "Italiano",
];

const text2 = [
  "Đăng ký",
  "Đăng nhập",
  "Messenger",
  "Facebook",
  "LiteWatch",
  "Địa điểm",
  "Trò chơi",
  "Marketplace",
  "Meta Pay",
  "Oculus",
  "Portal",
  "Instagram",
  "Bulletin",
  "Địa phương",
  "Chiến dịch gây quỹ",
  "Dịch vụ",
  "Trung tâm thông tin bỏ phiếu",
  "Nhóm",
  "Giới thiệu",
  "Tạo quảng cáo",
  "Tạo Trang",
  "Nhà phát triển",
  "Tuyển dụng",
  "Quyền riêng tư",
  "Cookie",
  "Lựa chọn quảng cáo",
  "Điều khoản",
  "Trợ giúp",
  "Tải thông tin liên hệ lên & đối tượng không phải người dùng",
  "Cài đặt",
  "Nhật ký hoạt động",
];

const Footer = () => {
  return (
    <>
      <div class="footer-link">
        {text1.map(text => (
          <a href="#"> {text}</a>
        ))}
      </div>
      <div class="footer-link-1">
        <hr />
      </div>
      <div class="footer-link">
        {text2.map(text2 => (
          <a href="#"> {text2}</a>
        ))}
      </div>

      <div class="facebook-2020">
        <a href="">Meta © 2022</a>
      </div>
    </>
  );
};

export default Footer;
