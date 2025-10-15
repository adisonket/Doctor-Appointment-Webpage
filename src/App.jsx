import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Preloader from './Home/preloader';
import Homepage from './Home/homepage';
import AppointmentsDoctor from './Appointments/AppointmentsDoctor';
import AppointmentsPatient from './Appointments/AppointmentsPatient';
import UserLogin from './components/Login/UserLogin.jsx'
import PatientEditProfile from './EditProfile/PatientEditProfile.jsx'
import "@lottiefiles/lottie-player";
import DoctorLogin from './components/Login/DoctorLogin.jsx'
import DoctorEditProfile from './EditProfile/DoctorEditProfile.jsx'
import AdminLogin from './components/Login/AdminLogin.jsx'
import Payment from './components/Login/Payment.jsx'
import ReviewSuccess from './components/Login/Review.jsx'

function App() {
  return (
    <>
      {/* <Preloader /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/appointmentdoctor" element={<AppointmentsDoctor />} />
          <Route path="/appointmentpatient" element={<AppointmentsPatient />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/patienteditprofile" element={<PatientEditProfile />} />
          <Route path="/doclogin" element={<DoctorLogin />} />
          <Route path="/doctoreditprofile" element={<DoctorEditProfile />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/review" element={<ReviewSuccess />} />
        </Routes>
      </BrowserRouter> 

    </>
  );
}

export default App;
