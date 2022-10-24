import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import "./styles.scss";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
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

  return (
    <>
      <div className="container">
        <div className="main">
          <div className="main-left">
            <img
              className="facebook-logo"
              src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"
              alt=""
            />

            <h3 className="facebook-status">
              Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống
              của bạn.
            </h3>
          </div>

          <form onChange={login}>
            <div className="main-right">
              <div className="main-right-login">
                <div className="main-right-email">
                  <input
                    type="email"
                    placeholder="Email hoặc số điện thoại"
                    onChange={handleOnChangeInputLogin}
                    name="email"
                    value={form.email}
                  />
                </div>

                <div className="main-right-password">
                  <input
                    type={passwordShown ? "text" : "password"}
                    placeholder="Mật khẩu"
                    onChange={handleOnChangeInputLogin}
                    name="password"
                    value={form.password}
                  />
                  <span
                    className="main-right-password-show-hide"
                    onClick={togglePassword}
                  >
                    {passwordShown ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </span>
                </div>

                <div className="main-right-button">
                  <button onClick={login} type="submit">
                    Đăng nhập
                  </button>
                </div>

                <div className="main-right-link">
                  <a href="">Quên mật khẩu?</a>
                </div>

                <div className="main-right-line"></div>

                <div className="main-right-account">
                  <Link to="/register">
                    <button id="signup-account">Tạo tài khoản mới</button>
                  </Link>
                </div>
              </div>
              <div className="main-right-page-link">
                <span>
                  <a href="">Tạo Trang</a> dành cho người nổi tiếng, thương hiệu
                  hoặc doanh nghiệp.
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="footer">
        <Footer />
      </div>
    </>
  );
};

export default Login;
