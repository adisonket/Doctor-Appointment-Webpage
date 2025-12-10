import React, { useEffect } from "react";
import style from "./AdminHome.module.css";
import Sidebar from "./Component/Sidebar";
import RightSection from "./Component/RightSection";
import DeleteButton from "./Component/DeleteButton";

const AdminDocAppointment = () => {
    

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
                      <h2>Doctor Appointments</h2>





                      <table >
                          <thead>
                              <tr>
                                  <th>Appointment ID</th>
                                  <th>Patient ID</th>
                                  <th>Patient Name</th>
                                  <th> Appointment Date</th>
                                  <th> Appointment Time</th>
                                  <th> Status</th>
                                  <th>Action</th>
                              </tr>
                          </thead>

                          <tbody>
                              <tr>
                                  <td>1</td>
                                  <td>4</td>
                                  <td>Soumi Ghosh</td>
                                  <td>12/12/2025</td>
                                  <td>10:00</td>


                                  <td className={style.status}>Paid</td>
                                  <td className={style.buttonContainer}>

                                      <DeleteButton/>
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

export default AdminDocAppointment