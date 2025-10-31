// import { Helmet, HelmetProvider } from "react-helmet-async";
import React, { useEffect, useState } from "react";
import style from "./AdminHome.module.css";
import AdminPic from "../assets/images/admin.jpg";
import Adhip from "../assets/images/Adhip.jpg";
import Soumi from "../assets/images/Soumi.jpg";
import Sanket from "../assets/images/Sanket.jpg";

const AdminUser = () => {
    const [selectedUser, setSelectedUser] = useState("doctor");
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp";
    document.head.appendChild(link);
  }, []);



  return (
    <>
    <div className={style.container}>
      <aside>
  
        <div className={style.top}>
          <div className={style.logo}>
            <h2 className={style.heading}>Hi, <span className={style.danger}>ADHIP</span> </h2>
          </div>
          <div className={style.close} id="close_btn">
            <span className="material-symbols-sharp">
              close
            </span>
          </div>
        </div>
        
        {/* <!-- end top --> */}

        <div className={style.sidebar}>

            <a href="admin_home.html">
                <span className="material-symbols-sharp">grid_view </span>
                <h3>Dashboard</h3>
            </a>
            <a href="#" className={style.active}>
                <span className="material-symbols-sharp">person_outline </span>
                <h3>Users</h3>
            </a>
            <a href="admin_payment.html">
                <span className="material-symbols-sharp">currency_rupee_circle</span>
                <h3>Payments</h3>
            </a>
            <a href="admin_msg.html">
                <span className="material-symbols-sharp">mail_outline </span>
                <h3>Messages</h3>
                <span className={style.msg_count}>14</span>
            </a>

            <a href="#">
                <span className="material-symbols-sharp">report_gmailerrorred </span>
                <h3>Reports</h3>
            </a>
            <a href="#">
                <span className="material-symbols-sharp">settings </span>
                <h3>settings</h3>
            </a>

            <a href="#">
                <span className="material-symbols-sharp">logout </span>
                <h3>logout</h3>
            </a>



        </div>
  
      </aside>
      {/* <!-- --------------
            end asid
          -------------------- --> */}
  
      {/* <!-- --------------
          start main part
        --------------- --> */}
  
        <main>
            <h1>Users</h1>


            <div className={style.recent_order}>
                <h2>Choose User</h2>

                <div className={style.radioInputs}>
                    <label className={style.radio}>
                        <input
                            type="radio"
                            name="userType"
                            value="doctor"
                            checked={selectedUser === "doctor"}
                            onChange={() => setSelectedUser("doctor")}
                        />
                        <span className={style.name}>Doctor</span>
                    </label>

                    <label className={style.radio}>
                        <input
                            type="radio"
                            name="userType"
                            value="patient"
                            checked={selectedUser === "patient"}
                            onChange={() => setSelectedUser("patient")}
                        />
                        <span className={style.name}>Patient</span>
                    </label>
                </div>

                {selectedUser === "doctor" && (
                    <table id="doctorTable">
                        <thead>
                            <tr>
                                <th>Doctor ID</th>
                                <th>Name</th>
                                <th>Contact No</th>
                                <th>Email</th>
                                <th>Documents</th>
                                <th>Appointments</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>D101</td>
                                <td>Dr. Smith</td>
                                <td>9876543210</td>
                                <td>smith@example.com</td>
                                <td className={style.link}>
                                    <a href="#">See Documents</a>
                                </td>
                                <td>
                                    <a href="#">See Appointments</a>
                                </td>
                                <td className={style.status}>Verified</td>
                                <td>
                                    <button type="button" className={style.delete}>
                                        <p className={style.buttonContainerP}>Delete</p>
                                        <span className={style.iconWrapper}>
                                            <svg
                                                className={style.icon}
                                                width="30"
                                                height="30"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
                                                    stroke="#000"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )}

                {selectedUser === "patient" && (
                    <table id="patientTable">
                        <thead>
                            <tr>
                                <th>Patient ID</th>
                                <th>Name</th>
                                <th>Contact No</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Appointments</th>
                                <th>Date Of Join</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>P201</td>
                                <td>John Doe</td>
                                <td>9876543210</td>
                                <td>john@example.com</td>
                                <td>Male</td>
                                <td>
                                    <a href="#">See Appointments</a>
                                </td>
                                <td>2024-06-12</td>
                                <td>
                                    <button type="button" className={style.delete}>
                                        <p className={style.buttonContainerP}>Delete</p>
                                        <span className={style.iconWrapper}>
                                            <svg
                                                className={style.icon}
                                                width="30"
                                                height="30"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
                                                    stroke="#000"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </div>

        </main>
      {/* <!------------------
            end main
            -------------------> */}
  
      {/* <!----------------
            start right main 
          ----------------------> */}

      <div className={style.right}>
  
        <div className={style.top}>
          <button id={style.menu_bar}>
            <span className="material-symbols-sharp">menu</span>
          </button>
  
          <div className={style.themeToggler}>
            <span className={`material-symbols-sharp ${style.active}`}>light_mode</span>

            <span className="material-symbols-sharp">dark_mode</span>
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
    </div>
    </>
  );
};

export default AdminUser;
