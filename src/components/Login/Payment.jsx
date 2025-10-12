import "@lottiefiles/lottie-player";
import React, { useRef, useState, useEffect } from 'react';
import style from '../css/Payment.module.css';
import AddAnimation from "./AddAnimation.jsx";
import mastercardLogo from '/src/assets/images/Mastercard_2019_logo.png';

const Payment = () => {
    const sliderRef = useRef(null);
    const cardBtnRef = useRef(null);
    const upiBtnRef = useRef(null);

    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardExpiry, setCardExpiry] = useState('');
    const [cardCvv, setCardCvv] = useState('');

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = 'translateX(0%)';
        }
        if (cardBtnRef.current) {
            cardBtnRef.current.classList.add(style.active_payment_button);
        }
    }, []);

    const handleCardClick = () => {
        if (sliderRef.current) sliderRef.current.style.transform = 'translateX(0%)';
        cardBtnRef.current.classList.add(style.active_payment_button);
        upiBtnRef.current.classList.remove(style.active_payment_button);
    };

    const handleUpiClick = () => {
        if (sliderRef.current) sliderRef.current.style.transform = 'translateX(-50%)';
        upiBtnRef.current.classList.add(style.active_payment_button);
        cardBtnRef.current.classList.remove(style.active_payment_button);
    };

    const handleExpiryInput = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 3) {
            value = value.slice(0, 2) + '/' + value.slice(2, 6);
        }
        setCardExpiry(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const match = cardExpiry.match(/^(0[1-9]|1[0-2])\/(\d{4})$/);
        if (!match) {
            alert('Invalid expiry format. Use MM/YYYY.');
            return;
        }

        const enteredMonth = parseInt(match[1], 10);
        const enteredYear = parseInt(match[2], 10);

        const today = new Date();
        const currentMonth = today.getMonth() + 1;
        const currentYear = today.getFullYear();

        if (enteredYear < 2025 || enteredYear > 2099 ||
            (enteredYear === currentYear && enteredMonth < currentMonth)) {
            alert('Invalid expiry date.');
            return;
        }


        alert('Payment submitted');
    };

    return (

        <div className={style.body_part}>
            <div className={style.payment}>
                <div className={style.payment_left_upper}>
                    <div className={style.credit_card}>
                        <div className={style.credit_card_front}>
                            <div className={style.credit_card_front_img}>
                                <img src={mastercardLogo} className={style.credit_card_front_logo} alt="" />
                            </div>
                            <div className={style.credit_card_front_num}>
                                <p>{cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ')}</p>
                                <p className={style.credit_card_front_num_sec}>
                                    <span>VALID THRU</span>
                                    <span>{cardExpiry}</span>
                                </p>
                            </div>
                            <div className={style.credit_card_front_name}>
                                <span>{cardName.toUpperCase()}</span>
                                <div className={style.credit_card_front_name_sec}>
                                    <span>{'*'.repeat(cardCvv.length)}</span>
                                </div>
                            </div>
                        </div>

                        <div className={style.credit_card_front_add}>
                            <button className={style.credit_card_front_add_button}>
                                Add New
                                <AddAnimation></AddAnimation>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={style.payment_middle}></div>

                <div className={style.payment_left}>
                    <div className={style.payment_details}>
                        <div className={`${style.payment_details_ammount} ${style.payment_details_att}`} style={{ marginTop: 0 }}>
                            <span className={style.payment_font_green}>Booking Ammount</span>
                            <span>Rs. 2800</span>
                        </div>
                        <div className={`${style.payment_details_tax} ${style.payment_details_att}`}>
                            <span className={style.payment_font_green}>Total Tax</span>
                            <span>504</span>
                        </div>
                        <div className={`${style.payment_details_total} ${style.payment_details_att}`}>
                            <span className={style.payment_font_green}>Total Ammount</span>
                            <span>Rs. 3304</span>
                        </div>
                    </div>

                    <div className={style.payment_left_between}></div>

                    <div className={style.payment_options}>
                        <div className={style.payment_method}>
                            <span className={style.payment_font_green}>Payment Options:</span>
                            <div className={style.payment_options_button}>
                                <button ref={cardBtnRef} onClick={handleCardClick} className={style.payment_button_styles}>Card</button>
                                <button ref={upiBtnRef} onClick={handleUpiClick} className={style.payment_button_styles}>UPI</button>
                            </div>
                        </div>

                        <div className={style.payment_slider_container}>
                            <div className={style.payment_slider_wrapper} ref={sliderRef}>
                                <div className={style.payment_slide}>
                                    <form className={style.payment_options_card_form} onSubmit={handleSubmit}>
                                        <input
                                            type="text"
                                            placeholder="Enter 16 Digits Card Number"
                                            className={style.payment_options_card_inp}
                                            maxLength="16"
                                            pattern="\d{16}"
                                            value={cardNumber}
                                            onChange={(e) => setCardNumber(e.target.value.replace(/[^0-9]/g, '').slice(0, 16))}
                                            required
                                        />

                                        <input
                                            type="text"
                                            placeholder="Cardholder Name"
                                            maxLength="22"
                                            className={style.payment_options_card_name}
                                            value={cardName}
                                            onChange={(e) => setCardName(e.target.value.replace(/[^a-zA-Z\s]/g, ''))}
                                            required
                                        />

                                        <div className={style.mmcvv}>
                                            <input
                                                type="text"
                                                name="expiry"
                                                placeholder="MM/YYYY"
                                                className={style.payment_options_card_date}
                                                pattern="(0[1-9]|1[0-2])\/[0-9]{4}"
                                                maxLength="7"
                                                value={cardExpiry}
                                                onChange={handleExpiryInput}
                                                required
                                            />
                                            <input
                                                type="password"
                                                inputMode="numeric"
                                                placeholder="CVV"
                                                className={style.payment_options_card_cvv}
                                                maxLength="4"
                                                pattern="\d{3,4}"
                                                value={cardCvv}
                                                onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, ''))}
                                                required
                                            />
                                        </div>

                                        <button className={`${style.payment_button_styles} ${style.payment_checkout}`} type="submit" style={{ marginTop: 8 }}>
                                            Checkout
                                        </button>
                                    </form>
                                </div>

                                <div className={style.payment_slide}>
                                    <form className={style.payment_options_upi_form}>
                                        <input type="email" placeholder="Enter your VPA" className={style.payment_options_upi_inp} />
                                        <button className={`${style.payment_button_styles} ${style.payment_checkout}`} type="submit">
                                            Checkout
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.payment_middle}></div>

                <div className={style.payment_right}>
                    <div className={style.patient_details}>
                        <div className={`${style.patient_details_name} ${style.payment_right_pad}`}>
                            <span className={style.payment_font_green}>Patient Name:</span>
                            <span>Priya Halder</span>
                        </div>
                        <div className={`${style.patient_details_age} ${style.payment_right_pad}`}>
                            <span className={style.payment_font_green}>Age:</span>
                            <span>22 <span>(F)</span></span>
                        </div>
                    </div>

                    <div className={style.appoinment_details}>
                        <div className={`${style.appoinment_details_date} ${style.payment_right_pad}`}>
                            <span className={style.payment_font_green}>Appoinment Date:</span>
                            <span>22/07/2025</span>
                        </div>
                        <div className={`${style.appoinment_details_time} ${style.payment_right_pad}`}>
                            <span className={style.payment_font_green}>Time:</span>
                            <span>11:00 AM</span>
                        </div>
                    </div>

                    <div className={style.doctor_details}>
                        <div className={`${style.doctor_details_name} ${style.payment_right_pad}`}>
                            <span className={style.payment_font_green}>Doctor Name:</span>
                            <div className={style.doctor_details_name_sec}>
                                <span>Dr. Mohammad Singh Dubey</span>
                                <span>MBBS(Cal), MD(Dehli), DM(Cardio)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;