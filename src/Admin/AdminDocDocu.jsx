import React, { useEffect,useState } from "react";
import style from "./AdminDocDocu.module.css";
import Sidebar from "./Component/Sidebar";
import RightSection from "./Component/RightSection";
import DocPic from "../assets/images/Adhip.jpg";
import CertificateImg from "../assets/images/4.jpeg";

const AdminDocDocu = () => {
    const [status, setStatus] = useState(null);


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
                <h1>Documents View</h1>
        
        
        
                <div className={style.DocPic}>
                    <img src={DocPic} alt=""/>
                </div>
        
                <div className={style.postWall}>
                    <div className={style.username}>
                        <div className={style.profileImg2}></div>
                        <span className={style.usernameHover}>adhiphalder</span>
                        <p> • 22 hr. ago</p>
        
                    </div>
        
                    <h3>Medical Registration Certificate</h3>
        
                    <p className={style.postPara}>
                        <b style={{ color: "#868998" }}>Medical Council of India (MCI)</b>

                    </p>
        
                    <p className={style.postPara}>
                        Valid Upto : March, 2028
                    </p>
        
                    <div className={style.postImg}>
        
                        <img src={CertificateImg} alt=""/>
                    </div>
        
                </div>
        
                <div className={style.postWall}>
                      <div className={style.username}>
                          <div className={style.profileImg2}></div>
                          <span className={style.usernameHover}>adhiphalder</span>
                          <p> • 22 hr. ago</p>

                      </div>
        
                    <h3>MBBS Degree Certificate</h3>
        
                    <p className={style.postPara}>
                        <b style={{color:"#868998"}}>University Name : Abc University</b>
                    </p>
        
                    <p className={style.postPara}>
                        <b style={{color:"#868998"}}>Institute Name : Abc Institute</b>
                    </p>
        
                    <p className={style.postPara}>
                        Passout Batch : 2021
                    </p>
        
                    <p className={style.postPara}>
                        Aggregate Percentage : 81%
                    </p>
        
                    <div className={style.postImg}>
        
                        <img src={CertificateImg} alt=""/>
                    </div>
        
                </div>
        
                <div className={style.postWall}>
                    <div className={style.username}>
                        <div className={style.profileImg2}></div>
                        <span className={style.usernameHover}>adhiphalder</span>
                        <p> • 22 hr. ago</p>

                    </div>
        
                    <h3>Specialization Degree or Diploma</h3>
        
                    <div className={style.degrees}>
        
                        <div className={style.degree1}>
                            <p className={style.postPara}>
                                <b style={{color:"#868998"}}>1. MD</b>
                            </p>
        
                            <p className={style.postPara}>
                                <b style={{color:"#868998"}} >Institute Name : Abc Institute</b>
                            </p>
        
                            <p className={style.postPara}>
                                Duration : 123 Years
                            </p>
        
        
                            <div className={style.postImg}>
        
                                <img src={CertificateImg} alt=""/>
                            </div>
                        </div>
        
                        <div className={style.degree2}>
                            <p className={style.postPara}>
                                <b style={{color:"#868998"}}>2. MS</b>
                            </p>
        
                            <p className={style.postPara}>
                                <b style={{color:"#868998"}}>Institute Name : Abc Institute</b>
                            </p>
        
                            <p className={style.postPara}>
                                Duration : 123 Years
                            </p>
        
        
                            <div className={style.postImg}>
        
                                <img src={CertificateImg} alt=""/>
                            </div>
                        </div>
                    </div>
        
        
        
                </div>
        
                <div className={style.postWall}>
                    <div className={style.username}>
                        <div className={style.profileImg2}></div>
                        <span className={style.usernameHover}>adhiphalder</span>
                        <p> • 22 hr. ago</p>

                    </div>
        
                    <h3>Experience Certificates</h3>
        
                    <div className={style.degrees}>
        
                        <div className={style.degree1}>
                            <p className={style.postPara}>
                                <b style={{color:"#868998"}}>1. Clinic</b>
                            </p>
        
                            <p className={style.postPara}>
                                Clinic Name : Abc
                            </p>
        
                            <p className={style.postPara}>
                                Duration : 123 Years
                            </p>
        
        
                            <div className={style.postImg}>
        
                                <img src={CertificateImg} alt=""/>
                            </div>
                        </div>
        
                        <div className={style.degree2}>
                            <p className={style.postPara}>
                                <b style={{color:"#868998"}}>2. Hospital</b>
                            </p>
        
                            <p className={style.postPara}>
                                Hospital Name : Abc
                            </p>
        
                            <p className={style.postPara}>
                                Duration : 123 Years
                            </p>
        
        
                            <div className={style.postImg}>
        
                                <img src={CertificateImg} alt=""/>
                            </div>
                        </div>
                    </div>
        
        
        
                </div>
        
                <div className={style.postWall}>
                    <div className={style.username}>
                        <div className={style.profileImg2}></div>
                        <span className={style.usernameHover}>adhiphalder</span>
                        <p> • 22 hr. ago</p>
        
                    </div>
        
                    <h3>Government-Issued ID Proof</h3>
        
                    <p className={style.postPara}>
                        ID Type : Aadhaar Card
                    </p>
        
                    <p className={style.postPara}>
                        ID Number : 6732 8921 7392 1927
                    </p>
        
                    <div className={style.postImg}>
        
                        <img src={CertificateImg} alt=""/>
                    </div>
        
                </div>
        
                {/* <div className={style.statusToggle}>
                    <input type="checkbox" id="verified" />
                    <label htmlFor="verified" className={`${style.switch} ${style.verified}`} >
                        <h3>VERIFIED</h3>
                    </label>
        
                    <input type="checkbox" id="pending" />
                    <label htmlFor="pending" className={`${style.switch} ${style.pending}`}>
                        <h3>PENDING</h3>
                    </label>
        
                    <input type="checkbox" id="rejected" />
                    <label htmlFor="rejected" className={`${style.switch} ${style.rejected}`}>
                        <h3>REJECTED</h3>
                    </label>
                </div> */}

                <div className={style.statusToggle}>
                    <label
                        className={`${style.switch} ${status === "verified" ? style.verifiedActive : ""}`}
                        onClick={() => setStatus("verified")}
                    >
                        <h3>VERIFIED</h3>
                    </label>

                    <label
                        className={`${style.switch} ${status === "pending" ? style.pendingActive : ""}`}
                        onClick={() => setStatus("pending")}
                    >
                        <h3>PENDING</h3>
                    </label>

                    <label
                        className={`${style.switch} ${status === "rejected" ? style.rejectedActive : ""}`}
                        onClick={() => setStatus("rejected")}
                    >
                        <h3>REJECTED</h3>
                    </label>
                </div>

                <div className={style.postWall} style={{ marginBottom: "15px" }} >
        
        
                    <h3>Remarks (Optional)</h3>
        
                    <div className={style.remarks}>
                        <textarea placeholder="Add your remarks here..."></textarea>
                    </div>

                      <button className={style.sendBtn}>
                          <div className={style.svgWrapper1}>
                              <div className={style.svgWrapper}>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                      <path fill="none" d="M0 0h24v24H0z"></path>
                                      <path
                                          fill="currentColor"
                                          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                      ></path>
                                  </svg>
                              </div>
                          </div>
                          <span>Send</span>
                      </button>

        
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

export default AdminDocDocu