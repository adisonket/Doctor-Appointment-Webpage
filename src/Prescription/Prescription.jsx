import React, { useState, useRef, useEffect } from "react";
import styles from "./Prescription.module.css";
import doctorPic from "../assets/images/Doctor_about 2.jpg"; 
import Logo from "../assets/images/doclogo2.png"; 
import { NavLink } from "react-router";

export default function Prescription() {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  }, [text]);

  return (
    <div className={styles.prescription}>
      <div className={styles.prescriptionCard}>
        <div className={styles.doctorInfo}>
          <div className={styles.docprofile}>
            <img src={doctorPic} alt="Doctor" className={styles.doctorImg} />
            <div className={styles.docDetails}>
              <div className={styles.docName}>Dr. Adhip Halder</div>
              <div className={styles.docQual}>MBBS MD MS</div>
              <div className={styles.docSpec}>Cardiologist</div>
              <div className={styles.docAddress}>123 Health Avenue, Kolkata</div>
              <div className={styles.docAddress}>+91 96XXXXXX</div>
            </div>
          </div>

          <div className={styles.logoSection}>
            <img
              src={Logo}
              alt="Clinic Logo"
              className={styles.clinicLogo}
            />
          </div>
        </div>

        <div className={styles.sectionTitle}>Prescription</div>

        <div className={styles.prescriptionBox}>
          <div className={styles.field}>
            <div className={styles.fieldLabel}>
              <b>Patient Name :</b> Adhip Halder
            </div>
          </div>

          <div className={styles.field}>
            <div className={styles.fieldLabel}>
              <b>Age :</b> 29
            </div>
          </div>

          <div className={styles.field}>
            <div className={styles.fieldLabel}>
              <b>Prescription </b>
            </div>
            <textarea
              ref={textareaRef}
              className={styles.fieldTextarea}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write prescription here..."
            ></textarea>
          </div>


        </div>
        <NavLink to="/viewprescription">
          <button className={styles.continueApplication}>
            <div>
              <div className={styles.pencil}></div>
              <div className={styles.folder}>
                <div className={styles.top}>
                  <svg viewBox="0 0 24 27">
                    <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                  </svg>
                </div>
                <div className={styles.paper}></div>
              </div>
            </div>
            Submit
          </button>
        </NavLink>
      </div>
    </div>

  );
}
