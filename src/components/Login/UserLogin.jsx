import "@lottiefiles/lottie-player";
import style from '../css/UserLogin.module.css';
import { useState } from "react";
import LoginAnimation from "./LoginAnimation.jsx";
import { NavLink } from "react-router-dom";


const UserLogin = () => {

    const [isLoginActive, setIsLoginActive] = useState(false);

    return (
        <>

            <div className={style.body_user}>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={style["bg-video"]}
                >
                    <source
                        src="/src/assets/videos/istockphoto-1185213406-640_adpp_is.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                <div className={style.main_part}>
                    <div className={style.left_part}>
                        <div className={style.reg_login}>
                            {/* <div className={style["auth-wrapper"]} ref={wrapperRef}> */}
                            <div className={`${style["auth-wrapper"]} ${isLoginActive ? "login-active" : ""}`}>

                                <div className={style["auth-slider"]} id="auth-slider">
                                    {/* Registration */}
                                    <div className={style.registration}>
                                        <div className={style.registration_first}>
                                            <p className={style.registration_first_text}>START FOR FREE</p>
                                            <h3 className={style.registration_first_h3}>
                                                Create a new account{" "}
                                                <span className={style.registration_first_span}>.</span>
                                            </h3>
                                        </div>

                                        <div className={style.registration_first_sec_part}>
                                            <span className={style.registration_first_text}>Already A Member?</span>
                                            <button
                                                className={style.registration_first_button}
                                                onClick={() => setIsLoginActive(true)}
                                            >
                                                Log in
                                            </button>
                                        </div>

                                        <div className={style.registration_start_form}>
                                            <form className={style.registration_start_form_form}>
                                                <div className={style.registration_form}>
                                                    <input
                                                        type="text"
                                                        className={style.registration_name}
                                                        placeholder="First Name"
                                                        required
                                                    />
                                                    <input
                                                        type="text"
                                                        // id="regis_last"
                                                        // id={style[regis_last]}
                                                        className={`${style.registration_name} ${style.regis_last}`}
                                                        placeholder="Last Name"
                                                        required
                                                    />
                                                </div>

                                                <div className={style.registration_form}>
                                                    <input
                                                        type="email"
                                                        className={style.registration_email}
                                                        placeholder="Email"
                                                        required
                                                    />
                                                </div>

                                                <div className={style.registration_form}>
                                                    <input
                                                        type="password"
                                                        className={style.registration_pass}
                                                        placeholder="Password"
                                                        required
                                                    />
                                                </div>

                                                <NavLink to="/">
                                                <button
                                                    type="submit"
                                                    className={`${style.registration_submit} ${style.registration_form}`}
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    Create Account
                                                </button>
                                                </NavLink>
                                            </form>
                                        </div>
                                    </div>

                                    {/* Login */}
                                    <div className={style.login}>
                                        <div className={style.registration_first}>
                                            <p className={style.registration_first_text}>HEY</p>
                                            <h3 className={style.registration_first_h3}>
                                                Login to your account{" "}
                                                <span className={style.registration_first_span}>.</span>
                                            </h3>
                                        </div>

                                        <div className={style.registration_first_sec_part}>
                                            <span className={style.registration_first_text}>Don't have an account?</span>
                                            <button
                                                className={style.registration_first_button}
                                                onClick={() => setIsLoginActive(false)}
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                Sign Up
                                            </button>
                                        </div>

                                        <div className={style.registration_start_form}>
                                            <form className={style.registration_start_form_form_login}>
                                                <div className={style.registration_form}>
                                                    <input
                                                        type="email"
                                                        className={style.registration_email}
                                                        placeholder="Email"
                                                        required
                                                    />
                                                </div>

                                                <div className={style.registration_form}>
                                                    <input
                                                        type="password"
                                                        className={style.registration_pass}
                                                        placeholder="Password"
                                                        required
                                                    />
                                                </div>

                                                <NavLink to="/">
                                                    <button
                                                        type="submit"
                                                        className={`${style.registration_submit} ${style.registration_form}`}
                                                        style={{
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                        }}
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

                    {/* Right part with Lottie */}
                    <div className={style.right_part}>
                        <LoginAnimation></LoginAnimation>
                    </div>
                </div>
            </div>

        </>
    );
};

export default UserLogin;
