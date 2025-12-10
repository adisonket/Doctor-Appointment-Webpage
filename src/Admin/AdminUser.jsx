// import { Helmet, HelmetProvider } from "react-helmet-async";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./AdminHome.module.css";
import Sidebar from "./Component/Sidebar";
import RightSection from "./Component/RightSection";
import DeleteButton from "./Component/DeleteButton";


const AdminUser = () => {
  const [selectedUser, setSelectedUser] = useState("doctor");


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
            <h1>Users</h1>


          <div className={style.recent_order}>
            <h2>Choose User</h2>

            <div className={style.radioInputs}>
              <label className={style.radio}>
                <input
                  type="radio"
                  name="radio"
                  value="doctor"
                  checked={selectedUser === "doctor"}
                  onChange={() => setSelectedUser("doctor")}
                />
                <span className={style.name}>Doctor</span>
              </label>

              <label className={style.radio}>
                <input
                  type="radio"
                  name="radio"
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
                    <td>125698</td>
                    <td>Tousif</td>
                    <td>6290261670</td>
                    <td>mehmodtousik@gmail.com</td>
                    <td className={style.link}>
                      <NavLink to="/adminuser/doc/document">See Documents</NavLink>
                    </td>
                    <td>
                      <NavLink to="/adminuser/doc/appointment">See Appointments</NavLink>

                    </td>
                    <td className={style.status}>Verified</td>
                    <td className={style.buttonContainer}>
                      <DeleteButton/>
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
                    <td>Raja Hansda</td>
                    <td>6987521548</td>
                    <td>hansdaraja@gmail.com</td>
                    <td>Male</td>
                    <td>
                      <NavLink to="/adminuser/patient/appointment">See Appointments</NavLink>
                    </td>
                    <td>07/07/2025</td>
                    <td className={style.buttonContainer}>
                      <DeleteButton/>
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

      <RightSection/>
    </div>
    </>
  );
};

export default AdminUser;
