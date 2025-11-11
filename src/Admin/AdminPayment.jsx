import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./AdminHome.module.css";
import Sidebar from "./Component/Sidebar";
import RightSection from "./Component/RightSection";
import DeleteButton from "./Component/DeleteButton";

const AdminPayment = () => {
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
                <h1>Payments</h1>


                {/* <!-- end insights --> */}
                <div className={style.recent_order}>
                    <h2>Total Payments</h2>




                    <table>
                        <thead>
                            <tr>
                                <th>Payment ID</th>
                                <th>User ID</th>
                                <th>Doctor ID</th>
                                <th>Status</th>
                                <th>Receipt</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>dfdf</td>
                                <td>fsdfsf</td>
                                <td>dfdsfd</td>
                                <td className={style.status}>Paid</td>
                                <td>
                                    <a href="">Download Receipt</a>
                                </td>
                                <td>dhchjdhschsg</td>
                                <td>dhchjdhschsg</td>
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
            <RightSection />

        </div>
    </>
  )
}

export default AdminPayment