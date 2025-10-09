import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Preloader from './Home/preloader';
import Homepage from './Home/homepage';
import AppointmentsDoctor from './Appointments/AppointmentsDoctor';
import AppointmentsPatient from './Appointments/AppointmentsPatient';

function App() {
  return (
    <>
      <Preloader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/appointmentdoctor" element={<AppointmentsDoctor />} />
          <Route path="/appointmentpatient" element={<AppointmentsPatient />} />
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
