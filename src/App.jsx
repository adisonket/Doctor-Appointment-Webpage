import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Preloader from './Home/preloader';
import Homepage from './Home/homepage';
import AppointmentsDoctor from './Appointments/AppointmentsDocto';

function App() {
  return (
    <>
      <Preloader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/appointmentdoctor" element={<AppointmentsDoctor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
