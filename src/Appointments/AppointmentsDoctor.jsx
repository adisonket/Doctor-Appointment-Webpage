import { useState, useEffect, useRef } from "react";
import style from "./AppointmentsDoctor.module.css";

const appointments = [
  {
    appointmentId: 1,
    appointmentDate: "11/10/2025",
    appointmentTime: "20:30",
    patientName: "Adhip Halder",
    gender: "Male",
    description: "N/A",
    meetLink: "https://meet.google.com/vtr-tprp-dcc",
  },
  {
    appointmentId: 2,
    appointmentDate: "11/10/2025",
    appointmentTime: "22:00",
    patientName: "Mriganka Adhikary",
    gender: "Male",
    description: "N/A",
    meetLink: "https://meet.google.com/vtr-tprp-dcc",
  },
  {
    appointmentId: 3,
    appointmentDate: "11/10/2025",
    appointmentTime: "23:00",
    patientName: "Tousif Mehmood",
    gender: "Male",
    description: "N/A",
    meetLink: "https://meet.google.com/vtr-tprp-dcc",
  },
  {
    appointmentId: 4,
    appointmentDate: "12/10/2025",
    appointmentTime: "13:00",
    patientName: "Soumi Ghosh",
    gender: "Female",
    description: "N/A",
    meetLink: "https://meet.google.com/vtr-tprp-dcc",
  },
  {
    appointmentId: 5,
    appointmentDate: "12/10/2025",
    appointmentTime: "21:00",
    patientName: "Sanket Adhikary",
    gender: "Male",
    description: "N/A",
    meetLink: "https://meet.google.com/vtr-tprp-dcc",
  },
  {
    appointmentId: 6,
    appointmentDate: "13/10/2025",
    appointmentTime: "13:00",
    patientName: "Adhip Halder",
    gender: "Male",
    description: "N/A",
    meetLink: "https://meet.google.com/vtr-tprp-dcc",
  },
  {
    appointmentId: 7,
    appointmentDate: "13/10/2025",
    appointmentTime: "21:00",
    patientName: "Adhip Halder",
    gender: "Male",
    description: "N/A",
    meetLink: "https://meet.google.com/vtr-tprp-dcc",
  },
  {
    appointmentId: 8,
    appointmentDate: "14/10/2025",
    appointmentTime: "13:00",
    patientName: "Adhip Halder",
    gender: "Male",
    description: "N/A",
    meetLink: "https://meet.google.com/vtr-tprp-dcc",
  },
];

const getNextFourDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 4; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const formatted = d.toLocaleDateString("en-GB");
    dates.push(formatted);
  }
  return dates;
};

const isUpcomingAppointment = (appointmentDate, appointmentTime) => {
  const now = new Date();
  const [day, month, year] = appointmentDate.split("/").map(Number);
  const [hours, minutes] = appointmentTime.split(":").map(Number);

  const appointmentDateTime = new Date(year, month - 1, day, hours, minutes);

  const expiryTime = new Date(appointmentDateTime.getTime() + 5 * 60000);

  if (appointmentDateTime.toDateString() === now.toDateString()) {
    return expiryTime >= now;
  } else {
    return appointmentDateTime > now;
  }
};

const AppointmentsDoctor = () => {
  const dateOptions = getNextFourDates();
  const [selectedDate, setSelectedDate] = useState(dateOptions[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredAppointments = appointments.filter(
    (appt) =>
      appt.appointmentDate === selectedDate &&
      isUpcomingAppointment(appt.appointmentDate, appt.appointmentTime)
  );

  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.header}>
          <h1 id={style.header}>Appointments</h1>
          <h2 id={style.dateHeading}>Date :</h2>

          <div
            className={style.customDropdown}
            ref={dropdownRef}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={style.selected}>{selectedDate}</div>
            <div className={`${style.options} ${isOpen ? style.open : ""}`}>
              {dateOptions.map((date) => (
                <div
                  key={date}
                  className={style.option}
                  onClick={() => {
                    setSelectedDate(date);
                    setIsOpen(false);
                  }}
                >
                  {date}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={style.appointmentInfo}>
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((appt) => (
              <div className={style.appointments} key={appt.appointmentId}>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          <b>Appointment ID:</b> {appt.appointmentId}
                        </p>
                      </td>
                      <td>
                        <p>
                          <b>Date:</b> {appt.appointmentDate}
                        </p>
                      </td>
                      <td>
                        <p>
                          <b>Time:</b> {appt.appointmentTime}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <b>Patient Name:</b> {appt.patientName}
                        </p>
                      </td>
                      <td>
                        <p>
                          <b>Gender:</b> {appt.gender}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={style.meetLink}>
                          <b>Meet Link:</b>{" "}
                          {appt.meetLink ? (
                            <a
                              href={appt.meetLink}
                              id={style.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Join Meeting
                            </a>
                          ) : (
                            <span id={style.noLink}>Link not available</span>
                          )}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className={style.buttonContainer}>
                  <button type="submit" className="btn btn-secondary">
                    <span className="text text-1">Documents</span>
                    <span className="text text-2" aria-hidden="true">
                      Documents
                    </span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className={style.noAppointments}>
              <h4>No Appointments for this date</h4>
            </div>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          &copy; 2025 DOCHUB. All Rights Reserved | Crafted by{" "}
          <a
            href="https://www.linkedin.com/in/sanket-adhikary-020888253/"
            target="_blank"
            className="link"
          >
            Sanket Adhikary
          </a>
        </p>
      </div>
    </div>
  );
};

export default AppointmentsDoctor;