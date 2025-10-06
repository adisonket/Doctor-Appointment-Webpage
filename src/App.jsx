import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Preloader from './Home/preloader';
import Homepage from './Home/homepage';
import AppointmentsDoctor from './Appointments/AppointmentsDoctor';

function App() {
  return (
    <>
      <Preloader />
      <BrowserRouter>
        <Routes>
          <Route path="/appointmentdoctor" element={<AppointmentsDoctor />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
