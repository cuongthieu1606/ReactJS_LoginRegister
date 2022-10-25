import axios from "axios";
import classNames from "classnames";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Date from "../../assets/fake-data/Date";
import Month from "../../assets/fake-data/Month";
import Year from "../../assets/fake-data/Year";
import styles from "./styles.scss";
import { MdClose } from "react-icons/md";

const cx = classNames.bind(styles);

const Register = () => {
  const [toggle, setToggle] = useState(false);
  const [form, setForm] = useState({
    lastname: "",
    firstname: "",
    phoneNumber: "",
    email: "",
    password: "",
    dateOfBirth: "",
    monthOfBirth: "",
    yearOfBirth: "",
    sex: "",
  });

  const handleOnChangeInputRegister = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    setToggle(!toggle);
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        ...form,
      };
      const response = await axios.post(
        "http://localhost:4000/api/auth/register",
        { ...newUser }
      );
      if (response.data.success) {
        console.log(response.data);
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className={cx("container")}>
      <div className={cx("modal")}>
        <div className={cx("modal-signup")}>
          <Link to="/login">
            <div className={cx("modal-close")} onClick={handleClick}>
              <MdClose />
            </div>
          </Link>

          <div className={cx("modal-signup-heading")}>
            <p className={cx("modal-signup-name")}>Đăng ký</p>

            <p className={cx("modal-signup-child-name")}>
              Nhanh chóng và dễ dàng.
            </p>
          </div>

          <form onChange={register}>
            <div className={cx("modal-signup-name")}>
              <input
                type="text"
                placeholder="Họ"
                onChange={handleOnChangeInputRegister}
                required
                value={form.firstname}
                name="firstname"
              />

              <input
                type="text"
                placeholder="Tên"
                onChange={handleOnChangeInputRegister}
                required
                value={form.lastname}
                name="lastname"
              />
            </div>

            <div className={cx("modal-signup-email")}>
              <input
                type="email"
                placeholder="Số di động hoặc email"
                onChange={handleOnChangeInputRegister}
                required
                value={form.email}
                name="email"
              />
            </div>

            <div className={cx("modal-signup-password")}>
              <input
                type="password"
                placeholder="Mật khẩu mới"
                onChange={handleOnChangeInputRegister}
                required
                value={form.password}
                name="password"
              />
            </div>

            <div className={cx("modal-date-birth")}>
              <label>Ngày sinh</label>

              <div className={cx("modal-date-alert")}>
                <a>&#63;</a>
              </div>
            </div>

            <div className={cx("modal-date-selection")}>
              <div className={cx("select-choice")}>
                <select
                  name="dateOfBirth"
                  id=""
                  onChange={handleOnChangeInputRegister}
                  value={form.dateOfBirth}
                >
                  {Date.map((date) => (
                    <option key={date} value={date}>
                      {date}
                    </option>
                  ))}
                </select>
              </div>
              <div className={cx("select-choice")}>
                <select
                  name="dateOfBirth"
                  id=""
                  onChange={handleOnChangeInputRegister}
                  value={form.monthOfBirth}
                >
                  {Month.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <div className={cx("select-choice")}>
                <select
                  name="dateOfBirth"
                  id=""
                  onChange={handleOnChangeInputRegister}
                  value={form.yearOfBirth}
                >
                  {Year.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={cx("modal-gender")}>
              <label>Giới tính</label>

              <div className={cx("modal-gender-alert")}>
                <a>&#63;</a>
              </div>
            </div>

            <div className={cx("modal-gender-choice")}>
              <div className="modal-gender-name">
                <label>Nữ</label>

                <input
                  onChange={handleOnChangeInputRegister}
                  type="radio"
                  name="sex"
                  required
                  value={form.sex}
                />
              </div>

              <div className={cx("modal-gender-name")}>
                <label>Nam</label>

                <input
                  onChange={handleOnChangeInputRegister}
                  type="radio"
                  name="sex"
                  required
                  value={form.sex}
                />
              </div>

              <div className={cx("modal-gender-name")}>
                <label>Tuỳ chỉnh</label>

                <input
                  onChange={handleOnChangeInputRegister}
                  type="radio"
                  name="sex"
                  required
                  value={form.sex}
                />
              </div>
            </div>

            <div className={cx("modal-signup-terms")}>
              <span>
                Người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ
                của bạn lên Facebook. <a href="#">Tìm hiểu thêm</a>.
              </span>
              <p>
                Bằng cách nhấp vào Đăng ký, bạn đồng ý với{" "}
                <a href="#">Điều khoản, Chính sách quyền riêng tư</a> và{" "}
                <a href="#">Chính sách cookie</a> của chúng tôi. Bạn có thể nhận
                được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
              </p>
            </div>

            <div className={cx("modal-signup-button")}>
              <button type="submit">Đăng ký</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
