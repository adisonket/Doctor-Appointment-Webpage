// import { Helmet, HelmetProvider } from "react-helmet-async";
import React, { useEffect } from "react";
import style from "./AdminHome.module.css";
import Sidebar from "./Component/Sidebar";
import RightSection from "./Component/RightSection";
import DeleteButton from "./Component/DeleteButton";

const AdminHome = () => {
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
  
      <Sidebar />
  
      {/* <!-- --------------
            end asid
          -------------------- --> */}
  
      {/* <!-- --------------
          start main part
        --------------- --> */}
  
      <main>
        <h1>Dashboard</h1>
  
        <div className={style.insights}>
  
          {/* <!-- start seling --> */}

          <div className={style.sales}>
            <span className="material-symbols-sharp">trending_up</span>
            <div className={style.middle}>
  
              <div className={style.left}>
                <h3>Total Users</h3>
                <h1>25,024</h1>
              </div>
              <div className={style.progress}>
                <svg>
                  <circle r="30" cy="40" cx="40"></circle>
                </svg>
                <div className={style.number}>
                  <p>80%</p>
                </div>
              </div>
  
            </div>
            <small>Last 24 Hours</small>
          </div>

          {/* <!-- end seling --> */}

          {/* <!-- start expenses --> */}

          <div className={style.expenses}>
            <span className="material-symbols-sharp">local_mall</span>
            <div className={style.middle}>
  
              <div className={style.left}>
                <h3>Total Appointments</h3>
                <h1>25,024</h1>
              </div>
              <div className={style.progress}>
                <svg>
                  <circle r="30" cy="40" cx="40"></circle>
                </svg>
                <div className={style.number}>
                  <p>80%</p>
                </div>
              </div>
  
            </div>
            <small>Last 24 Hours</small>
          </div>
          
          {/* <!-- end seling --> */}
          
          {/* <!-- start seling --> */}

          <div className={style.income}>
            <span className="material-symbols-sharp">stacked_line_chart</span>
            <div className={style.middle}>
  
              <div className={style.left}>
                <h3>Website Reach</h3>
                <h1> Top 95%</h1>
              </div>
              <div className={style.progress}>
                <svg>
                  <circle r="30" cy="40" cx="40"></circle>
                </svg>
                <div className={style.number}>
                  <p>95%</p>
                </div>
              </div>
  
            </div>
            <small>Last 24 Hours</small>
          </div>
          {/* <!-- end seling --> */}
  
        </div>
        {/* <!-- end insights --> */}


        <div className={style.recent_order}>
          <h2 className={style.heading}>Recent Users</h2>
  
  
  
  
          <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Role</th>
                <th> Contact No</th>
                <th> Email</th>
                <th>Action</th>
              </tr>
            </thead>
  
            <tbody>
              <tr>
                <td>dfdf</td>
                <td>fsdfsf</td>
                <td>Doctor</td>
                <td>dfdsfd</td>
                <td>dfdsfd</td>
                <td className={style.buttonContainer}>
                  {/* <!-- <button className="edit">Edit</button>  --> */}
  
                  <DeleteButton/>
                </td>
              </tr>
  
  
            </tbody>
          </table>
  
          {/* <!-- <a href="#">Show All</a> --> */}
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

export default AdminHome;
