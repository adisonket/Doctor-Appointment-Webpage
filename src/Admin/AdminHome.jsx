// import { Helmet, HelmetProvider } from "react-helmet-async";
import React, { useEffect } from "react";
import style from "./AdminHome.module.css";
import AdminPic from "../assets/images/admin.jpg";
import Adhip from "../assets/images/Adhip.jpg";
import Soumi from "../assets/images/Soumi.jpg";
import Sanket from "../assets/images/Sanket.jpg";

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
  
          <a href="#" className={style.active}>
            <span className="material-symbols-sharp">grid_view </span>
            <h3>Dashboard</h3>
          </a>
          <a href="admin_user.html">
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
  
                  <button type="submit" className={style.delete}>
                    <p className={style.buttonContainerP}>Delete</p>
                    <span className={style.iconWrapper}>
                      <svg className={style.icon} width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
                          stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
  
  
                    </span>
                  </button>
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

export default AdminHome;
