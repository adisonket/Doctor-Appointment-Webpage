import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import style from "../AdminHome.module.css";

const Sidebar = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp";
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <aside>
        <div className={style.top}>
          <div className={style.logo}>
            <h2 className={style.heading}>
              Hi, <span className={style.danger}>ADHIP</span>
            </h2>
          </div>
          <div className={style.close} id="close_btn">
            <span className="material-symbols-sharp">close</span>
          </div>
        </div>

        <div className={style.sidebar}>
          <NavLink
            to="/adminhome"
            className={({ isActive }) =>
              isActive ? `${style.active}` : undefined
            }
          >
            <span className="material-symbols-sharp">grid_view</span>
            <h3>Dashboard</h3>
          </NavLink>

          <NavLink
            to="/adminuser"
            className={({ isActive }) =>
              isActive ? `${style.active}` : undefined
            }
          >
            <span className="material-symbols-sharp">person_outline</span>
            <h3>Users</h3>
          </NavLink>

          <NavLink
            to="/adminpayment"
            className={({ isActive }) =>
              isActive ? `${style.active}` : undefined
            }
          >
            <span className="material-symbols-sharp">currency_rupee_circle</span>
            <h3>Payments</h3>
          </NavLink>

          <NavLink
            to="/adminmsg"
            className={({ isActive }) =>
              isActive ? `${style.active}` : undefined
            }
          >
            <span className="material-symbols-sharp">mail_outline</span>
            <h3>Messages</h3>
            <span className={style.msg_count}>14</span>
          </NavLink>

          <NavLink
            to="/admin/reports"
            className={({ isActive }) =>
              isActive ? `${style.active}` : undefined
            }
          >
            <span className="material-symbols-sharp">report_gmailerrorred</span>
            <h3>Reports</h3>
          </NavLink>

          <NavLink
            to="/admin/settings"
            className={({ isActive }) =>
              isActive ? `${style.active}` : undefined
            }
          >
            <span className="material-symbols-sharp">settings</span>
            <h3>Settings</h3>
          </NavLink>

          <NavLink
            to="/admin/logout"
            className={({ isActive }) =>
              isActive ? `${style.active}` : undefined
            }
          >
            <span className="material-symbols-sharp">logout</span>
            <h3>Logout</h3>
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
