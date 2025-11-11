import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./AdminHome.module.css";
import Sidebar from "./Component/Sidebar";
import RightSection from "./Component/RightSection";
import DeleteButton from "./Component/DeleteButton";

const AdminMsg = () => {
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
                <h1>Messages</h1>
        
        
                {/* <!-- end insights --> */}
                <div className={style.recent_order}>
                    <h2>Total Messages</h2>
        
        
        
        
                    <table>
                        <thead>
                            <tr>
                                <th>Message ID</th>
                                <th>Name</th>
                                <th>Email Address</th>
                                <th>Message</th>
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
                                <td>dhchjdhschsg</td>
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

export default AdminMsg