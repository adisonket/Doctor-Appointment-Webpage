import React, { useState, useRef, useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import styles from "./Prescription.module.css";
import doctorPic from "../assets/images/Doctor_about 2.jpg"; 
import DocLogo from "../assets/images/doclogo2.png"; 
import Logo from "../assets/images/DOchub.png"; 

export default function ViewPrescription() {

    const today = new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    const handlePrint = () => {
        const card = document.querySelector(`.${styles.prescriptionCard}`);
        if (!card) {
          alert("Prescription content not found!");
          return;
        }
      
        html2canvas(card, {
          scale: 4, 
          useCORS: true,
          backgroundColor: "#0d1117",
        }).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF("p", "mm", "a4");
      
          const pageWidth = pdf.internal.pageSize.getWidth();
          const pageHeight = pdf.internal.pageSize.getHeight();
      
          const imgWidth = pageWidth;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
          let finalWidth = imgWidth;
          let finalHeight = imgHeight;
          let positionY = 0;
      
          if (imgHeight > pageHeight) {
            finalHeight = pageHeight;
            finalWidth = (canvas.width * finalHeight) / canvas.height;
          } else {
            positionY = (pageHeight - imgHeight) / 2;
          }
      
          pdf.addImage(imgData, "PNG", 0, positionY, finalWidth, finalHeight, "", "FAST");
          pdf.save(`Prescription_${today}.pdf`);
        });
      };
      


  return (
    
    <div className={styles.prescription}>

        <div className={styles.prescriptionHeader}>
            <div className={styles.date}>{today}</div>

            <div className={styles.headerLogo}>
                <img src={Logo} alt="Clinic Logo" className={styles.headerLogoImg} />
            </div>

              <div className={styles.printer} onClick={handlePrint} title="Save as PDF">
                  <div className={styles.paper}>
                      <svg viewBox="0 0 8 8" className={styles.svg}>
                          <path
                              fill="#0077FF"
                              d="M6.28951 1.3867C6.91292 0.809799 7.00842 0 7.00842 0C7.00842 0 6.45246 0.602112 5.54326 0.602112C4.82505 0.602112 4.27655 0.596787 4.07703 0.595012L3.99644 0.594302C1.94904 0.594302 0.290039 2.25224 0.290039 4.29715C0.290039 6.34206 1.94975 8 3.99644 8C6.04312 8 7.70284 6.34206 7.70284 4.29715C7.70347 3.73662 7.57647 3.18331 7.33147 2.67916C7.08647 2.17502 6.7299 1.73327 6.2888 1.38741L6.28951 1.3867ZM3.99679 6.532C2.76133 6.532 1.75875 5.53084 1.75875 4.29609C1.75875 3.06133 2.76097 2.06018 3.99679 2.06018C4.06423 2.06014 4.13163 2.06311 4.1988 2.06905L4.2414 2.07367C4.25028 2.07438 4.26057 2.0758 4.27406 2.07651C4.81533 2.1436 5.31342 2.40616 5.67465 2.81479C6.03589 3.22342 6.23536 3.74997 6.23554 4.29538C6.23554 5.53084 5.23439 6.532 3.9975 6.532H3.99679Z"
                          />
                          <path
                              fill="#0055BB"
                              d="M6.756 1.82386C6.19293 2.09 5.58359 2.24445 4.96173 2.27864C4.74513 2.17453 4.51296 2.10653 4.27441 2.07734C4.4718 2.09225 5.16906 2.07947 5.90892 1.66374C6.04642 1.58672 6.1743 1.49364 6.28986 1.38647C6.45751 1.51849 6.61346 1.6647 6.756 1.8235V1.82386Z"
                          />
                      </svg>
                  </div>
                  <div className={styles.dot}></div>
                  <div className={styles.output}>
                      <div className={styles.paperOut}></div>
                  </div>
              </div>
        </div>

        <div className={styles.prescriptionCard} >
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
                    <img src={DocLogo} alt="Clinic Logo" className={styles.clinicLogo} />
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
                        <b>Prescription :</b> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                </div>
            </div>
        </div>
    </div>



  );
}
