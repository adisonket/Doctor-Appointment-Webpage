import React from 'react';
import "@lottiefiles/lottie-player";
import style from '../css/AdminLogin.module.css';
import AdminLoginAnimation from './AdminLoginAnimation.jsx';


const AdminLogin = () => {
  return (
    <div className={style['reg_login']}>
      <div className={style['main_part']}>

        <div className={style['leftpart']}>
          <h1 className={style['leftpart_h1']}>
            Welcome Admin
            <span className={style['leftpart_h1_span']}>.</span>
          </h1>

          <div className={style['login']}>
            <form method="get">
              <div className={style['login_div']}>
                <input
                  type="text"
                  className={style['login_input']}
                  name="login_id"
                  id="login_id"
                  placeholder="Admin ID"
                  required
                />
              </div>

              <div className={`${style['login_div']} ${style['login_div_sec']}`}>
                <input
                  type="password"
                  className={style['login_input']}
                  name="login_password"
                  id="login_password"
                  placeholder="Admin Password"
                  required
                />
              </div>

              <button className={style['login_button']}>Submit</button>
            </form>
          </div>
        </div>

        <div className={style['rightpart']}>
            <AdminLoginAnimation></AdminLoginAnimation>
        </div>

      </div>
    </div>
  );
};

export default AdminLogin;