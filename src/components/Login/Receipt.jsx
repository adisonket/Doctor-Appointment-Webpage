import React, { useEffect, useState } from "react";
import styles from "../css/Receipt.module.css";
import done from "/src/assets/images/done.png";

const Receipt = () => {
  const [paymentId, setPaymentId] = useState("");
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {

    const id = "PAY-" + Math.random().toString(36).substring(2, 9).toUpperCase();
    setPaymentId(id);

    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const formattedTime = now.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
    setDateTime(`${formattedDate}, ${formattedTime}`);
  }, []);

  const handleDownload = () => {
    window.print(); 
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.dateTime}>{dateTime}</p>
        <button onClick={handleDownload} className={styles.Btn}>
          <svg
            className={styles.svgIcon}
            viewBox="0 0 384 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
          </svg>
          <span className={styles.icon2}></span>
          <span className={styles.tooltip}>Download PDF</span>
        </button>

      </div>

      <div className={styles.card}>
        <div className={styles.titleRow}>
          <h2 className={styles.title}>Hi Adhip Halder,</h2>
          <div className={styles.badges}>
            <button className={styles.green}>
              <img src={done} alt="confirmed" className={styles.icon} />
              Payment Confirmed
            </button>
          </div>

        </div>


        <p className={styles.subtitle}>
          Thank you for your order
        </p>

        <h3 className={styles.heading}>Order Details</h3> <hr />
        <div className={styles.detailsSection}>
          <div className={styles.left}>
            <p><span>Transaction ID </span> {paymentId}</p>
            <p><span>Patient Name </span> Abc</p>
            <p><span>Doctor Name </span> Dr. Abc</p>
            <p><span>Payment Method </span> UPI</p>
          </div>
          <div className={styles.right}>
            <p><span>Amount </span> ₹2,000</p>
            <p><span>Tax </span> ₹360</p>
            <p className={styles.total}><span>Total </span> ₹2,360</p>
          </div>
        </div>

        <div className={styles.footer}>
          <p>
            This is a computer-generated receipt and does not require a
            signature.
          </p>
          <a href="">
            For any queries, contact <span>support@dochub.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
