import React, { useEffect, useState } from "react";
import style from "./AdminDocDocu.module.css";
import Sidebar from "./Component/Sidebar";
import RightSection from "./Component/RightSection";
import CertificateImg from "../assets/images/Prescription.png";
import DownloadButton from "./Component/DownloadButton";

const AdminPrescription = () => {
  return (
    <>
        <div className={style.container}>
            <Sidebar />
            {/* <!-- --------------
                    end asid
                    -------------------- --> */}
        
            {/* <!-- --------------
                    start main part
                    --------------- --> */}
        
            <main>
                <h1>Prescription</h1>
        
                <div className={style.postWall}>
                      <div className={style.username}>
                          <div className={style.profileImg2}></div>
                          <span className={style.usernameHover}>adhiphalder</span>
                          <p> • 22 hr. ago</p>

                      </div>
        
                    <div className={style.case}>
                        <h3>Case on Pneumonia</h3>
        
                        <p className={style.postPara}>
                            Report Date : 23-11-2025
                        </p>
        
        
                    </div>
        
                    <div className={style.postImg}>

        
                        <img src={CertificateImg} alt=""/>
                    </div>
        
                    <DownloadButton/>
        
        
                </div>
        
                <div className={style.postWall} style={{marginBottom: '20px'}}>
                      <div className={style.username}>
                          <div className={style.profileImg2}></div>
                          <span className={style.usernameHover}>adhiphalder</span>
                          <p> • 22 hr. ago</p>

                      </div>
        
                    <h3>Case on Minor Heart Attack</h3>
        
                    <div className={style.degrees}>
        
                        <div className={style.degree1}>
                            <p className={style.postPara}>
                                <b style={{color:"#868998"}}>1. ECG Report</b>
                            </p>
        
        
                            <p className={style.postPara}>
                                Report Date : 12-12-2023
                            </p>
        
        
                            <div className={style.postImg}>

        
                                <img src={CertificateImg} alt=""/>
                            </div>
                        </div>
        
                        <div className={style.degree2}>
                            <p className={style.postPara}>
                                <b style={{color:"#868998"}}>2. Additional Report</b>
                            </p>
        
        
                            <p className={style.postPara}>
                                Report Date : 14-12-2023
                            </p>
        
        
                            <div className={style.postImg}>
        
                                <img src={CertificateImg} alt=""/>
                            </div>
                        </div>
                    </div>
        
                    <DownloadButton/>
        
        
        
                </div>
        
        
        
            </main>
        
            {/* <!------------------
                    end main
                    -------------------> */}
        
            {/* <!----------------
                    start right main 
                    ----------------------> */}
            <RightSection />
        
        </div>
    </>
  )
}

export default AdminPrescription