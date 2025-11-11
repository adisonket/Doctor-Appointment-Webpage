import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Preloader from './Home/preloader';
import Homepage from './Home/homepage';
import AppointmentsDoctor from './Appointments/AppointmentsDoctor';
import AppointmentsPatient from './Appointments/AppointmentsPatient';
import UserLogin from './components/Login/UserLogin.jsx';
import PatientEditProfile from './EditProfile/PatientEditProfile.jsx';
import BookAppointment from './BookAppointment/BookAppointment.jsx';
import "@lottiefiles/lottie-player";
import DoctorLogin from './components/Login/DoctorLogin.jsx'
import DoctorEditProfile from './EditProfile/DoctorEditProfile.jsx'
import AdminLogin from './components/Login/AdminLogin.jsx'
import Payment from './components/Login/Payment.jsx'
import ReviewSuccess from './components/Login/Review.jsx'
import AdminHome from './Admin/AdminHome.jsx';
import Receipt from './components/Login/Receipt.jsx';
import AdminUser from './Admin/AdminUser.jsx';
import DoctorSelection from "./ChoosingDoc_web/DoctorSelection";
import DoctorProfile from "./ChoosingDoc_web/DoctorProfile";
import PatientProfile from "./PatientProfile/PatientProfile.jsx"
import Prescription from './Prescription/Prescription.jsx';
import ViewPrescription from './Prescription/ViewPrescription.jsx';
import AdminDocDocu from './Admin/AdminDocDocu.jsx';
import AdminDocAppointment from './Admin/AdminDocAppointment.jsx';
import AdminPatientAppointment from './Admin/AdminPatientAppointment.jsx';
import AdminPrescription from './Admin/AdminPrescription.jsx';
import AdminPayment from './Admin/AdminPayment.jsx';
import AdminMsg from './Admin/AdminMsg.jsx';


function App() {
  return (
    <>
      {/* <Preloader /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/patientprofile" element={<PatientProfile />} />
          <Route path="/patienteditprofile" element={<PatientEditProfile />} />
          <Route path="/appointmentpatient" element={<AppointmentsPatient />} />
          <Route path="/doctorselection" element={<DoctorSelection />} />
          <Route path="/bookappointment" element={<BookAppointment />} />
          <Route path="/doclogin" element={<DoctorLogin />} />
          <Route path="/doctorprofile" element={<DoctorProfile />} />
          <Route path="/doctoreditprofile" element={<DoctorEditProfile />} />
          <Route path="/appointmentdoctor" element={<AppointmentsDoctor />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/review" element={<ReviewSuccess />} />
          <Route path="/receipt" element={<Receipt/>} />
<<<<<<< HEAD
          <Route path="/doctorselection" element={<DoctorSelection />} />
          <Route path="/doctorprofile" element={<DoctorProfile />} />
          <Route path="/patientprofile" element={<PatientProfile />} />
          <Route path="/prescription" element={<Prescription/>} />
          <Route path="/viewprescription" element={<ViewPrescription/>} />

=======
>>>>>>> 10f2f0fc18c0909796818efd57c81a978edfc14b

          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/adminuser" element={<AdminUser />} />
          <Route path="/adminuser/doc/document" element={<AdminDocDocu />} />
          <Route path="/adminuser/doc/appointment" element={<AdminDocAppointment />} />
          <Route path="/adminuser/patient/appointment" element={<AdminPatientAppointment />} />
          <Route path="/adminuser/patient/appointment/prescription" element={<AdminPrescription />} />
          <Route path="/adminpayment" element={<AdminPayment />} />
          <Route path="/adminmsg" element={<AdminMsg />} />

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
