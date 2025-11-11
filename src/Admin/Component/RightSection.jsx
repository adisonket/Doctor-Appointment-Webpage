import React, { useEffect } from "react";
import style from "../AdminHome.module.css";
import AdminPic from "../../assets/images/admin.jpg";
import Adhip from "../../assets/images/Adhip.jpg";
import Soumi from "../../assets/images/Soumi.jpg";
import Sanket from "../../assets/images/Sanket.jpg";


const RightSection = () => {
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href =
          "https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp";
        document.head.appendChild(link);
      }, []);
  return (
    <>
          <div className={style.right}>

              <div className={style.top}>
                  <button id={style.menu_bar}>
                      <span className="material-symbols-sharp">menu</span>
                  </button>

                  <div className={style.themeToggler}>
                      <span className="material-symbols-sharp">light_mode</span>

                      <span className={`material-symbols-sharp ${style.active}`}>dark_mode</span>
                  </div>





                  <div className={style.profile}>
                      <div className={style.info}>
                          <p><b>Adhip</b></p>
                          <p>Admin</p>
                          <small className={style.textMuted}></small>
                      </div>
                      <div className={style.profilePhoto}>
                          <img src={AdminPic} alt="" />
                      </div>
                  </div>
              </div>

              <div className={style.recent_updates}>
                  <h2 className={style.heading}>Recent Update</h2>
                  <div className={style.updates}>
                      <div className={style.update}>
                          <div className={style.profilePhoto}>
                              <img src={Soumi} alt="" />
                          </div>
                          <div className={style.message}>
                              <p><b>Soumi</b> Recently book an appointment</p>
                          </div>
                      </div>
                      <div className={style.update}>
                          <div className={style.profilePhoto}>
                              <img src={Adhip} alt="" />
                          </div>
                          <div className={style.message}>
                              <p><b>Adhip</b> Upload profile picture</p>
                          </div>
                      </div>
                      <div className={style.update}>
                          <div className={style.profilePhoto}>
                              <img src={Sanket} alt="" />
                          </div>
                          <div className={style.message}>
                              <p><b>Sanket</b> registered as a doctor</p>
                          </div>
                      </div>

                  </div>
              </div>


          </div>
    </>
  )
}

export default RightSection