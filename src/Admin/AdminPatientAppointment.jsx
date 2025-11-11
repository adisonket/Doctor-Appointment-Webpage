import React, { useEffect, useState } from "react";
import style from "./AdminHome.module.css";
import Sidebar from "./Component/Sidebar";
import RightSection from "./Component/RightSection";
import DeleteButton from "./Component/DeleteButton";
import { NavLink } from "react-router";

const AdminPatientAppointment = () => {
    

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
                    <h2>Patient Appointments</h2>
  




                    <table >
                        <thead>
                            <tr>
                                <th>Appointment ID</th>
                                <th>Doctor ID</th>
                                <th>Doctor Name</th>
                                <th> Appointment Date</th>
                                <th>  Appointment Time</th>
                                <th> Prescription</th>
                                <th> Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>dfdf</td>
                                <td>fsdfsf</td>
                                <td>sdfsfs</td>
                                <td>sdfsfs</td>
                                <td>sdfsfs</td>
                                <td>
                                    <NavLink to="/adminuser/patient/appointment/prescription">See Prescription</NavLink>
                                </td>

                                
                                <td className={style.status}>Paid</td>
                                <td className={style.buttonContainer}>

                                    <DeleteButton />
                                </td>
                            </tr>


                        </tbody>
                    </table>

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
  )
}

export default AdminPatientAppointment