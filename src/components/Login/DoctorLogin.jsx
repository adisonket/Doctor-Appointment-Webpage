import React, { useState } from 'react';
import "@lottiefiles/lottie-player";
import style from '../css/DoctorLogin.module.css';
import DocLoginAnimation from './DocLoginAnimation.jsx';
import { NavLink } from 'react-router';

const DoctorLogin = () => {
    const [isLoginActive, setIsLoginActive] = useState(false);

    const flipToLogin = () => {
        setIsLoginActive(true);
    };

    const flipToSignup = () => {
        setIsLoginActive(false);
    };

    return (
        <>
            <video autoPlay muted loop playsInline className={style['bg-video']}>
                <source src="/src/assets/videos/AdobeStock_734953970_Video_HD_Preview.mov" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={style['main_part']}>
                <div className={style['left_part']}>
                    <div className={style['reg_login']}>
                        <div className={`${style['auth-wrapper']} ${isLoginActive ? style['login-active'] : ''}`}>
                            <div className={style['auth-slider']} id="auth-slider">
                                <div className={style['registration']}>
                                    <div className={style['registration_first']}>
                                        <h3 className={style['registration_first_h3']}>
                                            Hey Doc
                                            <span>
                                                <dotlottie-wc
                                                    src="https://lottie.host/5df1e1fc-f5ec-4e1f-a457-0b92052c4cca/60tHJGk0jT.lottie"
                                                    style={{ width: '50px', height: '50px' }}
                                                    speed="1"
                                                    autoplay
                                                    loop
                                                ></dotlottie-wc>
                                            </span>
                                        </h3>
                                        <h3 className={style['registration_first_h3']} id="registration_first_h3_sec">
                                            Create a new account <span className={style['registration_first_span']}>.</span>
                                        </h3>
                                    </div>

                                    <div className={style['registration_first_sec_part']}>
                                        <span className={style['registration_first_text']}>Already A Member?</span>
                                        <button className={style['registration_first_button']} onClick={flipToLogin}>
                                            Log in
                                        </button>
                                    </div>

                                    <div className={style['registration_start_form']}>
                                        <form>
                                            <div className={style['registration_form']}>
                                                <input
                                                    type="text"
                                                    className={style['registration_name']}
                                                    placeholder="First Name"
                                                    required
                                                />
                                                <input
                                                    type="text"
                                                    // id="regis_last"
                                                    className={`${style.registration_name} ${style.regis_last}`}
                                                    placeholder="Last Name"
                                                    required
                                                />
                                            </div>
                                            <div className={style['registration_form']}>
                                                <input
                                                    type="email"
                                                    className={style['registration_email']}
                                                    placeholder="Email"
                                                    required
                                                />
                                            </div>
                                            <div className={style['registration_form']}>
                                                <input
                                                    type="password"
                                                    className={style['registration_pass']}
                                                    placeholder="Password"
                                                    required
                                                />
                                            </div>
                                            <div className={style['registration_form']}>
                                                <input
                                                    type="text"
                                                    className={style['registration_pass']}
                                                    placeholder="IMR Registration No."
                                                    required
                                                />
                                            </div>
                                            <NavLink to="/verifydoctor">
                                                <button
                                                    type="submit"
                                                    className={`${style['registration_submit']} ${style['registration_form']}`}
                                                >
                                                    Create Account
                                                </button>
                                            </NavLink>
                                        </form>
                                    </div>
                                </div>

                                <div className={style['login']}>
                                    <div className={style['registration_first']}>
                                        <p className={style['registration_first_text']}>HEY DOCTOR</p>
                                        <h3 className={style['registration_first_h3']}>
                                            Login to your account <span className={style['registration_first_span']}>.</span>
                                        </h3>
                                    </div>

                                    <div className={style['registration_first_sec_part']}>
                                        <span className={style['registration_first_text']}>Don't have an account?</span>
                                        <button className={style['registration_first_button']} onClick={flipToSignup}>
                                            Sign Up
                                        </button>
                                    </div>

                                    <div className={style['registration_start_form']}>
                                        <form>
                                            <div className={style['registration_form']}>
                                                <input
                                                    type="email"
                                                    className={style['registration_email']}
                                                    placeholder="Email"
                                                    required
                                                />
                                            </div>
                                            <div className={style['registration_form']}>
                                                <input
                                                    type="password"
                                                    className={style['registration_pass']}
                                                    placeholder="Password"
                                                    required
                                                />
                                            </div>
                                            <NavLink to="/doctorprofile">
                                                <button
                                                    type="submit"
                                                    className={`${style['registration_submit']} ${style['registration_form']}`}
                                                >
                                                    Login
                                                </button>
                                            </NavLink>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style['right_part']}>
                    <DocLoginAnimation></DocLoginAnimation>
                </div>
            </div>
        </>
    );
};

export default DoctorLogin;
