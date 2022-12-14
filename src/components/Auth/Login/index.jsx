import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import styles from "./styles.scss";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import classNames from "classnames";
import Register from "../Register";

const cx = classNames.bind(styles);
const Login = () => {
  const [register, setRegister] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleOnChangeInputLogin = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        ...form,
      };
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        { ...newUser }
      );
      if (response.data.success) {
        console.log(response.data);
      }
    } catch (error) {
      throw error;
    }
  };
  const handleClickSwitchRegister = (e) => {
    e.preventDefault();
    setRegister(true);
  }

  return (
    <>
      <div className={cx("container")}>
        {
          register ? <div className={cx("overlay")}>
          <Register show={setRegister}/>
        </div> : <></>
        }
        <div className={cx("main")}>
          <div className={cx("main-left")}>
            <img
              className={cx("facebook-logo")}
              src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"
              alt=""
            />

            <h3 className={cx("facebook-status")}>
              Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống
              của bạn.
            </h3>
          </div>

          <form onChange={login}>
            <div className={cx("main-right")}>
              <div className={cx("main-right-login")}>
                <div className={cx("main-right-email")}>
                  <input
                    type="email"
                    placeholder="Email hoặc số điện thoại"
                    onChange={handleOnChangeInputLogin}
                    name="email"
                    value={form.email}
                  />
                </div>

                <div className={cx("main-right-password")}>
                  <input
                    type={passwordShown ? "text" : "password"}
                    placeholder="Mật khẩu"
                    onChange={handleOnChangeInputLogin}
                    name="password"
                    value={form.password}
                  />
                  <span
                    className={cx("main-right-password-show-hide")}
                    onClick={togglePassword}
                  >
                    {passwordShown ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </span>
                </div>

                <div className={cx("main-right-button")}>
                  <button onClick={login} type="submit">
                    Đăng nhập
                  </button>
                </div>

                <div className={cx("main-right-link")}>
                  <a href="#">Quên mật khẩu?</a>
                </div>

                <div className={cx("main-right-line")}></div>

                <div className={cx("main-right-account")}>
                    <button id="signup-account" onClick={handleClickSwitchRegister}>Tạo tài khoản mới</button>
                </div>
              </div>
              <div className={cx("main-right-page-link")}>
                <span>
                  <a href="">Tạo Trang</a> dành cho người nổi tiếng, thương hiệu
                  hoặc doanh nghiệp.
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class={cx("footer")}>
        <Footer />
      </div>
    </>
  );
};

export default Login;
