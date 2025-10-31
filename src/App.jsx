import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Preloader from './Home/preloader';
import Homepage from './Home/homepage';
import AppointmentsDoctor from './Appointments/AppointmentsDoctor';
import AppointmentsPatient from './Appointments/AppointmentsPatient';
import UserLogin from './components/Login/UserLogin.jsx'
import "@lottiefiles/lottie-player";
import DoctorLogin from './components/Login/DoctorLogin.jsx'
import DoctorEditProfile from './EditProfile/DoctorEditProfile.jsx'
import AdminLogin from './components/Login/AdminLogin.jsx'
import Payment from './components/Login/Payment.jsx'
import ReviewSuccess from './components/Login/Review.jsx'
import AdminHome from './Admin/AdminHome.jsx';
import Receipt from './components/Login/Receipt.jsx';
import AdminUser from './Admin/AdminUser.jsx';

function App() {
  return (
    <>
      <Preloader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/appointmentdoctor" element={<AppointmentsDoctor />} />
          <Route path="/appointmentpatient" element={<AppointmentsPatient />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/doclogin" element={<DoctorLogin />} />
          <Route path="/doctoreditprofile" element={<DoctorEditProfile />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/review" element={<ReviewSuccess />} />
          <Route path="/receipt" element={<Receipt/>} />

          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/adminuser" element={<AdminUser />} />
        </Routes>
      </BrowserRouter> 

    </>
  );
}

export default App;


// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import { useEffect } from "react";

// import Preloader from "./Home/preloader";
// import Homepage from "./Home/homepage";
// import AppointmentsDoctor from "./Appointments/AppointmentsDoctor";
// import AppointmentsPatient from "./Appointments/AppointmentsPatient";
// import UserLogin from "./components/Login/UserLogin.jsx";
// import "@lottiefiles/lottie-player";
// import DoctorLogin from "./components/Login/DoctorLogin.jsx";
// import DoctorEditProfile from "./EditProfile/DoctorEditProfile.jsx";
// import AdminLogin from "./components/Login/AdminLogin.jsx";
// import Payment from "./components/Login/Payment.jsx";
// import ReviewSuccess from "./components/Login/Review.jsx";
// import AdminHome from "./Admin/AdminHome.jsx";

// const AppRoutes = () => {
//   const location = useLocation();

//   useEffect(() => {
//     let addedLinks = [];

//     if (location.pathname === "/") {
//       const cssFiles = [
//         "/src/Home/homepage.css",
//         "/src/Home/homepage2.css"
//       ];

//       cssFiles.forEach((href) => {
//         const link = document.createElement("link");
//         link.rel = "stylesheet";
//         link.href = href;
//         document.head.appendChild(link);
//         addedLinks.push(link);
//       });
//     }

//     return () => {
//       addedLinks.forEach((link) => {
//         if (link.parentNode) link.parentNode.removeChild(link);
//       });
//     };
//   }, [location.pathname]);

//   return (
//     <Routes>
//       <Route path="/" element={<Homepage />} />
//       <Route path="/appointmentdoctor" element={<AppointmentsDoctor />} />
//       <Route path="/appointmentpatient" element={<AppointmentsPatient />} />
//       <Route path="/userlogin" element={<UserLogin />} />
//       <Route path="/doclogin" element={<DoctorLogin />} />
//       <Route path="/doctoreditprofile" element={<DoctorEditProfile />} />
//       <Route path="/adminlogin" element={<AdminLogin />} />
//       <Route path="/payment" element={<Payment />} />
//       <Route path="/review" element={<ReviewSuccess />} />
//       <Route path="/adminhome" element={<AdminHome />} />
//     </Routes>
//   );
// };

// function App() {
//   return (
//     <>
//       <Preloader />
//       <BrowserRouter>
//         <AppRoutes />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
