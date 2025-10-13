import React, { useState } from 'react';
import style from './DoctorEditProfile.module.css';


function DoctorEditProfile() {
   const [doctorData, setDoctorData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    specialty: '',
    image: null,
    years_of_experience: '',
    imr_registration_no: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({ ...doctorData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDoctorData({
        ...doctorData,
        image: URL.createObjectURL(file),
      });
    }
  };
  
  const experienceOptions = {
    zero_to_two: '0 - 2 years',
    three_to_four: '3 - 4 years',
    above_four: '4+ years',
  };
  
  
  
  
  return (

    <div className={style.body_part}>

      <div className={style.doctoredit_container}>
        <div className={style.doctoredit_form_container}>
          <form className={style.doctoredit_form}>
          <h2>Edit Profile</h2>
            <div className={style.doctoredit_name}>
              <input
                type="text"
                name="firstname"
                value={doctorData.firstname}
                onChange={handleChange}
                placeholder='First Name'
                className={style.doctoredit_name_input}
              />

              <input
                type="text"
                name="lastname"
                value={doctorData.lastname}
                onChange={handleChange}
                placeholder='Last Name'
                className={style.doctoredit_name_input}
              />
            </div>

            <div className={style.doctoredit_contact}>
              <input
                type="email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                value={doctorData.email}
                onChange={handleChange}
                placeholder='Email'
                className={style.doctoredit_contact_input}
              />

              <input
                type="tel"
                name="phone"
                maxlength="10"
                value={doctorData.phone}
                onChange={handleChange}
                placeholder='Phone'
                className={style.doctoredit_contact_input}
              />
            </div>

            
            <div className={style.doctoredit_selection}>
              <div className={style.doctoredit_specialty}>
                <label>Specialty</label>
                <select
                  name="specialty"
                  value={doctorData.specialty}
                  onChange={handleChange}
                  className={style.doctoredit_select}
                >
                  <option value="">Select Specialty</option>
                  <option value="Cardiologist">Cardiologist</option>
                  <option value="Dermatologist">Dermatologist</option>
                  <option value="Neurologist">Neurologist</option>
                  <option value="Pediatrician">Pediatrician</option>
                  <option value="General Physician">General Physician</option>
                </select>
              </div>

              <div className={style.doctoredit_experience}>
                <label>Year of Experience</label>
                <select
                  name="years_of_experience"
                  value={doctorData.years_of_experience}
                  onChange={handleChange}
                  className={style.doctoredit_select}
                >
                  <option value="">Experience</option>
                  {Object.entries(experienceOptions).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>

              </div>
            </div>

            <div className={style.doctoredit_registraion_no}>
              <input
                type="text"
                name="imr_registration_no"
                maxlength="12"
                value={doctorData.imr_registration_no}
                onChange={handleChange}
                placeholder='IMR Registration No.'
                className={style.doctoredit_imr}
              />
            </div>

            <label>Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />

            <div>
              <button type="submit" className={style.doctoredit_button}>
                  Save Changes
              </button>
            </div>
          </form>
        </div>

        <div className={style.doctoredit_preview_container}>
          <div className={style.doctoredit_preview_card}>
            {doctorData.image && (
              <img
                src={doctorData.image}
                alt="Doctor"
                className={style.doctoredit_preview_image}
              />
            )}
            <div className={`${style.doctoredit_preview_item} ${doctorData.firstname || doctorData.lastname ? style.centered : ''}`}>
              <strong>Name: </strong> {doctorData.firstname} {doctorData.lastname}
            </div>

            <div className={`${style.doctoredit_preview_item} ${doctorData.email ? style.centered : ''}`}>
              <strong>Email: </strong> {doctorData.email}
            </div>

            <div className={`${style.doctoredit_preview_item} ${doctorData.phone ? style.centered : ''}`}>
              <strong>Phone: </strong> {doctorData.phone}
            </div>

            <div className={`${style.doctoredit_preview_item} ${doctorData.specialty ? style.centered : ''}`}>
              <strong>Specialty: </strong> {doctorData.specialty}
            </div>

            <div className={`${style.doctoredit_preview_item} ${doctorData.years_of_experience ? style.centered : ''}`}>
              <strong>Years of Experience: </strong> {experienceOptions[doctorData.years_of_experience] || ''}
            </div>

            <div className={`${style.doctoredit_preview_item} ${doctorData.imr_registration_no ? style.centered : ''}`}>
              <strong>IMR Registration No.: </strong> {doctorData.imr_registration_no}
            </div>
            {/* <p><strong>Name: </strong> {doctorData.firstname} {doctorData.lastname}</p> */}
            {/* <p><strong>Last Name:</strong> {doctorData.lastname}</p> */}
            {/* <p><strong>Email: </strong> {doctorData.email}</p> */}
            {/* <p><strong>Phone: </strong> {doctorData.phone}</p> */}
            {/* <p><strong>Specialty: </strong> {doctorData.specialty}</p> */}
            {/* <p><strong>Years of Experience:</strong> {doctorData.years_of_experience}</p> */}
            {/* <p><strong>Years of Experience: </strong> {experienceOptions[doctorData.years_of_experience] || ' '}</p> */}
            {/* <p><strong>IMR Registration No.: </strong> {doctorData.imr_registration_no}</p> */}
          </div>
        </div>
      </div>

      <div class="footer-bottom">

                <p class="copyright">
                  &copy; 2025 DOCHUB. All Rights Reserved | Crafted by <a
                    href="https://www.linkedin.com/in/sk-toushik-mehmood-3429b1246/" target="_blank" class="link">Sk Toushik Mehmood</a>
                </p>

      </div>

    </div>

  );
}

export default DoctorEditProfile;
