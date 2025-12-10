import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./BookAppointment.module.css";
import doctorImage from "../assets/images/Doctor_about 1.jpg";

const BookAppointment = () => {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [message, setMessage] = useState("");
  const sliderRef = useRef(null);

  const doctor = {
    name: "Dr. Aadhrika Adhikary",
    degrees: "MBBS, MD (Cardiology)",
    specialist: "Cardiologist",
    experience: "5+ years of experience",
    fee: "2800",
    image: doctorImage,
    availability: {
      Monday: ["10:00 AM", "11:30 AM", "2:00 PM", "4:00 PM", "6:00 PM"],
      Tuesday: ["9:30 AM", "12:00 PM", "3:00 PM", "5:00 PM"],
      Wednesday: ["10:00 AM", "1:00 PM", "3:30 PM", "6:00 PM"],
      Thursday: ["9:00 AM", "11:30 AM", "2:00 PM", "4:30 PM"],
      Friday: ["10:00 AM", "1:00 PM", "3:30 PM", "6:00 PM"],
      Saturday: ["9:30 AM", "12:00 PM", "3:00 PM"],
    },
  };

  // 🔹 Generate next 15 days
  useEffect(() => {
    const today = new Date();
    const days = [];
    for (let i = 0; i < 15; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);
      const dayName = d.toLocaleDateString("en-US", { weekday: "long" });
      const dateStr = d.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
      });
      days.push({
        date: dateStr,
        day: dayName,
        fullDate: d,
        available: doctor.availability.hasOwnProperty(dayName),
      });
    }
    setDates(days);
  }, []);

  // 🔹 Convert AM/PM → 24hr float
  const parseTime = (time) => {
    let [t, mod] = time.split(" ");
    let [h, m] = t.split(":").map(Number);
    if (mod === "PM" && h < 12) h += 12;
    if (mod === "AM" && h === 12) h = 0;
    return h + m / 60;
  };

  // 🔹 Handle date click
  const handleDateSelect = (dateObj) => {
    setSelectedDate(dateObj);
    setSelectedTime("");
    setMessage("");

    if (!dateObj.available) {
      setAvailableTimes([]);
      return;
    }

    const now = new Date();
    const currentHour = now.getHours() + now.getMinutes() / 60;
    const dayName = dateObj.fullDate.toLocaleDateString("en-US", {
      weekday: "long",
    });
    let slots = doctor.availability[dayName] || [];

    const isToday =
      dateObj.fullDate.getDate() === now.getDate() &&
      dateObj.fullDate.getMonth() === now.getMonth() &&
      dateObj.fullDate.getFullYear() === now.getFullYear();

    // 🔹 If today and after 8:00 PM → show message & disable booking
    if (isToday && currentHour >= 20) {
      setAvailableTimes([]);
      setMessage("You can't book an appointment after 8:00 PM.");
      return;
    }

    // 🔹 Filter past times for today
    if (isToday) {
      slots = slots.filter((time) => parseTime(time) > currentHour);
    }

    setAvailableTimes(slots);
  };

  // 🔹 Slider controls
  const slideLeft = () => {
    if (sliderRef.current) {
      const boxWidth = sliderRef.current.firstChild.offsetWidth + 12;
      sliderRef.current.scrollBy({ left: -boxWidth, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      const boxWidth = sliderRef.current.firstChild.offsetWidth + 12;
      sliderRef.current.scrollBy({ left: boxWidth, behavior: "smooth" });
    }
  };

  // 🔹 Handle time select (allow reselection)
  const handleTimeSelect = (time) => {
    setSelectedTime(time === selectedTime ? "" : time);
  };

  return (
    <div className={styles.bookApp_body}>
      <div className={styles.container}>
        {/* 🩺 Top Section */}
        <div className={styles.topSection}>
          <div className={styles.imageBox}>
            <img src={doctor.image} alt="Doctor" className={styles.image} />
          </div>
          <div className={styles.infoBox}>
            <p className={styles.para_name}>{doctor.name}</p>
            <p><strong>Degrees:</strong> {doctor.degrees}</p>
            <p><strong>Specialist:</strong> {doctor.specialist}</p>
            <p><strong>Experience:</strong> {doctor.experience}</p>
          </div>
        </div>

        <h2 className={styles.heading}>Book Appointment</h2>

        {/* 📅 Date Slider */}
        <div className={styles.sliderWrapper}>
          <button className={styles.arrow} onClick={slideLeft}>
            <FaArrowLeft />
          </button>
          <div className={styles.dateSlider} ref={sliderRef}>
            {dates.map((d, i) => (
              <div
                key={i}
                className={`${styles.dateBox} ${
                  selectedDate === d ? styles.selected : ""
                }`}
                onClick={() => handleDateSelect(d)}
              >
                <p>{d.date} {d.day.slice(0, 3)}</p>
                <p className={d.available ? styles.available : styles.notAvailable}>
                  {d.available ? "Available" : "Not Available"}
                </p>
              </div>
            ))}
          </div>
          <button className={styles.arrow} onClick={slideRight}>
            <FaArrowRight />
          </button>
        </div>

        {/* 🕓 Time Section */}
        {availableTimes.length > 0 && (
          <div className={styles.timeSection}>
            <h3>Select Time</h3>
            <div className={styles.timeSlots}>
              {availableTimes.map((time, index) => (
                <button
                  key={index}
                  className={`${styles.timeButton} ${
                    selectedTime === time ? styles.selectedTime : ""
                  }`}
                  onClick={() => handleTimeSelect(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedTime && (
          <div className={styles.feeSection}>
            <p><strong>Consultation Fee:</strong> {doctor.fee}</p>
            <a href="/payment">
              <button className={styles.bookButton}>Book</button>
            </a>
          </div>
        )}

        {/* 🔔 Message Section */}
        {message && <p className={styles.message}>{message}</p>}
      </div>

      {/* 🔹 Footer */}
      <div className={styles.bichi}>
        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2025 DOCHUB. All Rights Reserved | Crafted by{" "}
            <a
              href="https://www.linkedin.com/in/sk-toushik-mehmood-3429b1246/"
              target="_blank"
              className="link"
              rel="noreferrer"
            >
              Sk Toushik Mehmood
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
