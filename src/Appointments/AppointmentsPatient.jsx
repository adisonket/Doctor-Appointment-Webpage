import { useState } from "react";
import style from "./AppointmentsPatient.module.css";

const appointments = [
  {
    appointmentId: 1,
    drName: "Dr. Ram Pal",
    drRole: "Consultant - Interventional Cardiologist",
    appointmentDate: "10/10/2025",
    appointmenTime: "11:00",
    meetLink: "https://meet.google.com/vtr-tprp-dcc",
  },
  {
    appointmentId: 2,
    drName: "Dr. Rimita Ghosh",
    drRole: "Consultant - Orthopaedic (Hand & Wrist) Surgeon",
    appointmentDate: "10/10/2025",
    appointmenTime: "15:00",
    meetLink: "https://meet.google.com/vtr-tprp-dcc",
  },
  {
    appointmentId: 3,
    drName: "Dr. Shyam Das",
    drRole: "Consultant - Orthopaedic (Hand & Wrist) Surgeon",
    appointmentDate: "11/10/2025",
    appointmenTime: "13:00",
    meetLink: "https://meet.google.com/vtr-tprp-dcc",
  },
  {
    appointmentId: 4,
    drName: "Dr. Priya Banerjee",
    drRole: "Consultant - Orthopaedic (Hand & Wrist) Surgeon",
    appointmentDate: "11/10/2025",
    appointmenTime: "14:00",
    meetLink: "https://meet.google.com/vtr-tprp-dcc",
  },
  {
    appointmentId: 5,
    drName: "Dr. Ram Ganguly",
    drRole: "Consultant - Orthopaedic (Hand & Wrist) Surgeon",
    appointmentDate: "12/10/2025",
    appointmenTime: "13:00",
    meetLink: "https://meet.google.com/vtr-tprp-dcc",
  },
];

const AppointmentsPatient = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const DateTime = (dateStr, timeStr) => {
    const [day, month, year] = dateStr.split("/").map(Number);
    const [hours, minutes] = timeStr.split(":").map(Number);
    return new Date(year, month - 1, day, hours, minutes);
  };

  const now = new Date();
  const fourDaysLater = new Date();
  fourDaysLater.setDate(now.getDate() + 4);

  const fourDaysBefore = new Date();
  fourDaysBefore.setDate(now.getDate() - 4);

  const upcomingAppointments = appointments.filter((appt) => {
    const appointmentDateTime = DateTime(
      appt.appointmentDate,
      appt.appointmenTime
    );
    return appointmentDateTime >= now && appointmentDateTime <= fourDaysLater;
  });

  const historyAppointments = appointments.filter((appt) => {
    const appointmentDateTime = DateTime(
      appt.appointmentDate,
      appt.appointmenTime
    );
    return appointmentDateTime < now && appointmentDateTime >= fourDaysBefore;
  });

  const currentAppointments =
    activeTab === "upcoming" ? upcomingAppointments : historyAppointments;

  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.header}>
          <h2>My Appointments</h2>
          <div className={style.subheader}>
            <h2
              className={`${style.tab} ${
                activeTab === "upcoming" ? style.activeTab : ""
              }`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming
            </h2>
            <h2
              className={`${style.tab} ${
                activeTab === "history" ? style.activeTab : ""
              }`}
              onClick={() => setActiveTab("history")}
            >
              History
            </h2>
          </div>
        </div>

        <div
          className={`${style.appointmentInfo} ${
            activeTab === "upcoming" ? style.fadeIn : style.fadeOut
          }`}
        >
          {currentAppointments.length > 0 ? (
            currentAppointments.map((appt) => {
              const appointmentDateTime = DateTime(
                appt.appointmentDate,
                appt.appointmenTime
              );
              const isPast = appointmentDateTime < now;

              return (
                <div className={style.appointments} key={appt.appointmentId}>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <h3>{appt.drName}</h3>
                        </td>
                        <td>
                          <p>
                            <b>Date :</b> {appt.appointmentDate}
                          </p>
                        </td>
                        <td>
                          <p className={style.meetLink}>
                            <b>Meet Link : </b>
                            {!isPast && appt.meetLink ? (
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
                      <tr>
                        <td>
                          <h5>{appt.drRole}</h5>
                        </td>
                        <td>
                          <p>
                            <b>Time :</b> {appt.appointmenTime}
                          </p>
                        </td>
                        <td colSpan="3">
                          <button type="submit" class="btn btn-secondary">
                            <span class="text text-1">View PDF</span>

                            <span class="text text-2" aria-hidden="true">
                              View PDF
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr></tr>
                    </tbody>
                  </table>
                </div>
              );
            })
          ) : (
            <div className={style.noAppointments}>
              <h4>No Appointments</h4>
            </div>
          )}
        </div>
      </div>
      <div class="footer-bottom">
        <p class="copyright">
          &copy; 2025 DOCHUB. All Rights Reserved | Crafted by{" "}
          <a
            href="https://www.linkedin.com/in/sanket-adhikary-020888253/"
            target="_blank"
            class="link"
          >
            Sanket Adhikary
          </a>
        </p>
      </div>
    </div>
  );
};

export default AppointmentsPatient;
