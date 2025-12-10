import React, { useState } from 'react';
import style from '../css/Review.module.css';
import '@lottiefiles/lottie-player';
import PaySuccessAnimation from './PaySuccessAnimation.jsx';
import ReciptAnimation from './ReciptAnimation.jsx';
import { NavLink } from 'react-router';

const Review = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState('');

    const triggerPopup = (msg) => {
        setMessage(msg);
        setShowPopup(true);
        setTimeout(() => {
        setShowPopup(false);
        }, 2000);
    };

    const copyToClipboard = () => {
        const textToCopy = "#83867343";
        navigator.clipboard.writeText(textToCopy)
        .then(() => triggerPopup("Copied: " + textToCopy))
        .catch(() => triggerPopup("Failed to copy!"));
    };

    return (
        <div className={style.body_part}>
            <div className={style.main_part}>

                {/* <div id="copyPopup" style={{ display: 'block' }} className="show">
                    {popupMessage}
                </div> */}

                <div
                    className={`${style.copyPopup} ${showPopup ? style.show : ''}`}>
                    {message}
                </div>        


                <div className={style.pay_conf_review}>
                    <div className={style.payment_conf}>
                        <div className={style.payment_conf_first}>

                            <PaySuccessAnimation></PaySuccessAnimation>

                            <div className={style.payment_conf_first_sec}>
                                <h3>Payment Successful</h3>
                                <p className={style.payment_conf_first_sec_p}>You have successfully booked your appointment!</p>
                            </div>

                            <div className={style.payment_conf_first_third}>
                                <button className={style.payment_conf_copy_button} onClick={() => copyToClipboard('#83867343')}>
                                    <ReciptAnimation></ReciptAnimation>
                                    <span className={style.payment_conf_copy_button_span}>#83867343</span>
                                </button>
                            </div>
                        </div>

                        <div className={style.payment_conf_sec}>
                            <div className={style.payment_conf_sec_one}>
                                <div className={style.payment_conf_sec_one_divs}>
                                    <span>Time / Date</span>
                                    <span>26.07.2025, 19:56</span>
                                </div>
                                <div className={style.payment_conf_sec_one_divs}>
                                    <span>Ref. Number</span>
                                    <span>000250268276</span>
                                </div>
                                <div className={style.payment_conf_sec_one_divs}>
                                    <span>Payment Method</span>
                                    <span>Debit Card</span>
                                </div>
                                <div className={style.payment_conf_sec_one_divs}>
                                    <span>Sender Name</span>
                                    <span>Dochub Pvt. Ltd.</span>
                                </div>
                            </div>

                            <div className={style.payment_conf_sec_mid}></div>

                            <div className={style.payment_conf_sec_sec}>
                                <div className={style.payment_conf_sec_sec_divs}>
                                    <span>Amount</span>
                                    <span>Rs. 2000</span>
                                </div>
                                <div className={style.payment_conf_sec_sec_divs}>
                                    <span>Tax</span>
                                    <span>Rs. 360</span>
                                </div>
                                <div className={style.payment_conf_sec_sec_divs}>
                                    <span>Total</span>
                                    <span>Rs. 2360</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
                        <NavLink to="/receipt">
                            <button className={style.review_submit_button} type="submit">
                                Download 
                            </button>
                        </NavLink>
                    </div>
                    <div className={style.review}>
                        <form className={style.review_form}>
                            <textarea
                                name="review_input"
                                className={style.review_input}
                                placeholder="Enter Your Review"
                                required
                            ></textarea>
                            <NavLink to="/">
                                <button className={style.review_submit_button} type="submit">Submit</button>
                            </NavLink>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;