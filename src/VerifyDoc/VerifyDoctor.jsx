// import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import styles from "./VerifyDoctor.module.css";
import { NavLink } from "react-router";

export default function VerifyDoctor() {
  const [formData, setFormData] = useState({
    passport: null,
    medicalCert: null,
    mbbsCert: null,
    specializationCerts: [null],
    experienceCerts: [null],
    idProof: null,
  });

  const [passportPreview, setPassportPreview] = useState(null);
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [filePreviews, setFilePreviews] = useState({
    medicalCert: null,
    mbbsCert: null,
    specializationCerts: [null],
    experienceCerts: [null],
    idProof: null,
  });

  // Medical Registration
  const [medicalValidUpto, setMedicalValidUpto] = useState("");
  const [isDateValid, setIsDateValid] = useState(false);

  // DOB Validation
  const [isDobValid, setIsDobValid] = useState(false);
  const [dobError, setDobError] = useState("");

  // MBBS Details
  const [mbbsDetails, setMbbsDetails] = useState({
    universityName: "",
    instituteName: "",
    passoutYear: "",
    percentage: "",
  });

  // Specialization Details (can have multiple)
  const [specializationList, setSpecializationList] = useState([
    { designation: "", institute: "", duration: "" }
  ]);

  // Experience Details (can have multiple)
  const [experienceList, setExperienceList] = useState([
    { placeType: "Select", name: "", duration: "" }
  ]);

  // Government ID
  const [govId, setGovId] = useState({
    idType: "Aadhaar Card",
    idNumber: "",
    dob: "",
  });

  // Calculate Age from DOB
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  };

  // Handle DOB Change with Validation
  const handleDobChange = (selectedDob) => {
    setGovId({ ...govId, dob: selectedDob });
    
    if (selectedDob) {
      const age = calculateAge(selectedDob);
      
      if (age < 18) {
        setIsDobValid(false);
        setDobError(`You must be at least 18 years old. Current age: ${age} years`);
      } else {
        setIsDobValid(true);
        setDobError("");
      }
    } else {
      setIsDobValid(false);
      setDobError("");
    }
  };

  // ID Type validation patterns
  const getIdPattern = (idType) => {
    switch (idType) {
      case "Aadhaar Card":
        return /^\d{0,12}$/;
      case "PAN Card":
        return /^[A-Z]{0,5}\d{0,4}[A-Z]?$/;
      case "Driving License":
        return /^[A-Z0-9-]{0,20}$/;
      case "Passport":
        return /^[A-Z0-9]{0,15}$/;
      case "Voter ID":
        return /^[A-Z]{0,3}\d{0,7}$/;
      default:
        return /^[A-Z0-9]{0,20}$/;
    }
  };

  const getIdPlaceholder = (idType) => {
    switch (idType) {
      case "Aadhaar Card":
        return "Enter 12 digit Aadhaar number";
      case "PAN Card":
        return "e.g., ABCDE1234F";
      case "Driving License":
        return "e.g., MH12-20200012345";
      case "Passport":
        return "e.g., A2096457";
      case "Voter ID":
        return "e.g., ABC1234567";
      default:
        return "Enter ID number";
    }
  };

  const getIdMaxLength = (idType) => {
    switch (idType) {
      case "Aadhaar Card":
        return 12;
      case "PAN Card":
        return 10;
      case "Driving License":
        return 20;
      case "Passport":
        return 15;
      case "Voter ID":
        return 10;
      default:
        return 20;
    }
  };

  const handleIdNumberChange = (value) => {
    const upperValue = value.toUpperCase();
    const pattern = getIdPattern(govId.idType);
    
    if (pattern.test(upperValue)) {
      setGovId({ ...govId, idNumber: upperValue });
    }
  };

  const createFilePreview = (file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        return reader.result;
      };
      reader.readAsDataURL(file);
      return new Promise((resolve) => {
        reader.onloadend = () => resolve(reader.result);
      });
    }
    return null;
  };

  const handleFileChange = async (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, [field]: file });
      if (file.type.startsWith('image/')) {
        const preview = await createFilePreview(file);
        setFilePreviews({ ...filePreviews, [field]: preview });
      }
    }
  };

  const handlePassportChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, passport: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPassportPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Validate Medical Registration Date
  const handleMedicalDateChange = (e) => {
    const selectedDate = e.target.value;
    setMedicalValidUpto(selectedDate);
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selected = new Date(selectedDate);
    
    if (selected > today) {
      setIsDateValid(true);
    } else {
      setIsDateValid(false);
      setFormData({ ...formData, medicalCert: null });
      setFilePreviews({ ...filePreviews, medicalCert: null });
    }
  };

  // Handle MBBS input changes
  const handleMbbsChange = (field, value) => {
    setMbbsDetails({ ...mbbsDetails, [field]: value });
  };

  // Handle Specialization
  const handleSpecializationChange = (index, field, value) => {
    const updated = [...specializationList];
    updated[index][field] = value;
    setSpecializationList(updated);
  };

  const handleSpecializationFileChange = async (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updatedCerts = [...formData.specializationCerts];
      updatedCerts[index] = file;
      setFormData({ ...formData, specializationCerts: updatedCerts });

      if (file.type.startsWith('image/')) {
        const preview = await createFilePreview(file);
        const updatedPreviews = [...filePreviews.specializationCerts];
        updatedPreviews[index] = preview;
        setFilePreviews({ ...filePreviews, specializationCerts: updatedPreviews });
      }
    }
  };

  const addSpecialization = () => {
    setSpecializationList([
      ...specializationList,
      { designation: "", institute: "", duration: "" }
    ]);
    setFormData({
      ...formData,
      specializationCerts: [...formData.specializationCerts, null]
    });
    setFilePreviews({
      ...filePreviews,
      specializationCerts: [...filePreviews.specializationCerts, null]
    });
  };

  const removeSpecialization = (index) => {
    if (specializationList.length > 1) {
      const updated = specializationList.filter((_, i) => i !== index);
      const updatedCerts = formData.specializationCerts.filter((_, i) => i !== index);
      const updatedPreviews = filePreviews.specializationCerts.filter((_, i) => i !== index);
      setSpecializationList(updated);
      setFormData({ ...formData, specializationCerts: updatedCerts });
      setFilePreviews({ ...filePreviews, specializationCerts: updatedPreviews });
    }
  };

  // Handle Experience
  const handleExperienceChange = (index, field, value) => {
    const updated = [...experienceList];
    updated[index][field] = value;
    setExperienceList(updated);
  };

  const handleExperienceFileChange = async (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updatedCerts = [...formData.experienceCerts];
      updatedCerts[index] = file;
      setFormData({ ...formData, experienceCerts: updatedCerts });

      if (file.type.startsWith('image/')) {
        const preview = await createFilePreview(file);
        const updatedPreviews = [...filePreviews.experienceCerts];
        updatedPreviews[index] = preview;
        setFilePreviews({ ...filePreviews, experienceCerts: updatedPreviews });
      }
    }
  };

  const addExperience = () => {
    setExperienceList([
      ...experienceList,
      { placeType: "Select", name: "", duration: "" }
    ]);
    setFormData({
      ...formData,
      experienceCerts: [...formData.experienceCerts, null]
    });
    setFilePreviews({
      ...filePreviews,
      experienceCerts: [...filePreviews.experienceCerts, null]
    });
  };

  const removeExperience = (index) => {
    if (experienceList.length > 1) {
      const updated = experienceList.filter((_, i) => i !== index);
      const updatedCerts = formData.experienceCerts.filter((_, i) => i !== index);
      const updatedPreviews = filePreviews.experienceCerts.filter((_, i) => i !== index);
      setExperienceList(updated);
      setFormData({ ...formData, experienceCerts: updatedCerts });
      setFilePreviews({ ...filePreviews, experienceCerts: updatedPreviews });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isDateValid) {
      alert("Please select a valid future date for Medical Registration Certificate");
      return;
    }

    if (!isDobValid) {
      alert("You must be at least 18 years old to register");
      return;
    }
    
    const submissionData = {
      documents: formData,
      medicalRegistration: { validUpto: medicalValidUpto },
      mbbsDetails,
      specialization: specializationList,
      experience: experienceList,
      governmentId: govId,
    };
    
    console.log("Form Data Submitted:", submissionData);
    alert("Documents uploaded successfully!");
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Image Popup Modal */}
      {showImagePopup && passportPreview && (
        <div className={styles.imagePopupOverlay} onClick={() => setShowImagePopup(false)}>
          <div className={styles.imagePopupContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closePopupButton}
              onClick={() => setShowImagePopup(false)}
            >
              ✕
            </button>
            <img 
              src={passportPreview} 
              alt="Passport Full View" 
              className={styles.popupImage}
            />
          </div>
        </div>
      )}

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <span className={styles.icon}>🏥</span>
          </div>
          <h1 className={styles.title}>Doctor Verification</h1>
          <p className={styles.subtitle}>
            Please upload all required documents for verification
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Passport Image */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.stepNumber}>1</span>
              <h3 className={styles.sectionTitle}>Passport Size Photo</h3>
            </div>
            <div className={styles.uploadArea}>
              <div 
                className={styles.uploadCircle}
                onClick={() => passportPreview && setShowImagePopup(true)}
                style={{ cursor: passportPreview ? 'pointer' : 'default' }}
              >
                {passportPreview ? (
                  <img
                    src={passportPreview}
                    alt="Passport Preview"
                    className={styles.previewImage}
                  />
                ) : (
                  <span className={styles.cameraIcon}>📸</span>
                )}
              </div>
              <label className={styles.uploadLabel}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePassportChange}
                  className={styles.uploadInput}
                />
                <span className={styles.uploadButton}>
                  {passportPreview ? "Change Photo" : "Upload Photo"}
                </span>
              </label>
              {formData.passport && (
                <p className={styles.fileName}>{formData.passport.name}</p>
              )}
            </div>
          </div>

          {/* Medical Registration Certificate */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.stepNumber}>2</span>
              <h3 className={styles.sectionTitle}>
                Medical Registration Certificate
              </h3>
            </div>
            <div className={styles.infoBox}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>
                  📅 Valid Until
                </label>
                <input
                  type="date"
                  value={medicalValidUpto}
                  onChange={handleMedicalDateChange}
                  className={styles.inputField}
                  placeholder="Select Date"
                  required
                />
                {medicalValidUpto && !isDateValid && (
                  <p className={styles.errorMessage}>
                    ⚠️ Please select a future date. Past dates are not acceptable.
                  </p>
                )}
              </div>
            </div>
            <label className={styles.fileInputLabel}>
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => handleFileChange(e, "medicalCert")}
                className={styles.hiddenInput}
                required
                disabled={!isDateValid}
              />
              <span 
                className={`${styles.customFileButton} ${!isDateValid ? styles.disabledButton : ''}`}
              >
                {formData.medicalCert ? "✓ Uploaded" : "📄 Choose File"}
              </span>
              {formData.medicalCert && (
                <span className={styles.fileNameSmall}>
                  {formData.medicalCert.name}
                </span>
              )}
            </label>
            {filePreviews.medicalCert && (
              <div className={styles.previewContainer}>
                <p className={styles.previewLabel}>Preview:</p>
                <img 
                  src={filePreviews.medicalCert} 
                  alt="Medical Certificate Preview" 
                  className={styles.documentPreview}
                />
              </div>
            )}
          </div>

          {/* MBBS Degree Certificate */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.stepNumber}>3</span>
              <h3 className={styles.sectionTitle}>MBBS Degree Certificate</h3>
            </div>
            <div className={styles.infoBox}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>
                  🎓 University Name
                </label>
                <input
                  type="text"
                  value={mbbsDetails.universityName}
                  onChange={(e) => handleMbbsChange("universityName", e.target.value)}
                  className={styles.inputField}
                  placeholder="Enter university name"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>
                  🏛️ Institute Name
                </label>
                <input
                  type="text"
                  value={mbbsDetails.instituteName}
                  onChange={(e) => handleMbbsChange("instituteName", e.target.value)}
                  className={styles.inputField}
                  placeholder="Enter institute name"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>
                  📆 Passout Year
                </label>
                <input
                  type="number"
                  value={mbbsDetails.passoutYear}
                  onChange={(e) => handleMbbsChange("passoutYear", e.target.value)}
                  className={`${styles.inputField} ${styles.noSpinner}`}
                  placeholder="e.g., 2020"
                  min="1950"
                  max={new Date().getFullYear()}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>
                  📊 Aggregate Percentage
                </label>
                <input
                  type="number"
                  value={mbbsDetails.percentage}
                  onChange={(e) => handleMbbsChange("percentage", e.target.value)}
                  className={`${styles.inputField} ${styles.noSpinner}`}
                  placeholder="e.g., 85"
                  min="0"
                  max="100"
                  step="0.01"
                  required
                />
              </div>
            </div>
            <label className={styles.fileInputLabel}>
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => handleFileChange(e, "mbbsCert")}
                className={styles.hiddenInput}
                required
              />
              <span className={styles.customFileButton}>
                {formData.mbbsCert ? "✓ Uploaded" : "📄 Choose File"}
              </span>
              {formData.mbbsCert && (
                <span className={styles.fileNameSmall}>
                  {formData.mbbsCert.name}
                </span>
              )}
            </label>
            {filePreviews.mbbsCert && (
              <div className={styles.previewContainer}>
                <p className={styles.previewLabel}>Preview:</p>
                <img 
                  src={filePreviews.mbbsCert} 
                  alt="MBBS Certificate Preview" 
                  className={styles.documentPreview}
                />
              </div>
            )}
          </div>

          {/* Specialization */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.stepNumber}>4</span>
              <h3 className={styles.sectionTitle}>
                Specialization Degree/Diploma
              </h3>
            </div>

            {specializationList.map((spec, index) => (
              <div key={index} className={styles.dynamicSection}>
                {index > 0 && (
                  <div className={styles.sectionDivider}>
                    <span>Specialization {index + 1}</span>
                  </div>
                )}
                <div className={styles.infoBox}>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>
                      👨‍⚕️ Designation
                    </label>
                    <input
                      type="text"
                      value={spec.designation}
                      onChange={(e) =>
                        handleSpecializationChange(index, "designation", e.target.value)
                      }
                      className={styles.inputField}
                      placeholder="e.g., MD, MS, DNB"
                      required
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>
                      🏛️ Institute Name
                    </label>
                    <input
                      type="text"
                      value={spec.institute}
                      onChange={(e) =>
                        handleSpecializationChange(index, "institute", e.target.value)
                      }
                      className={styles.inputField}
                      placeholder="Enter institute name"
                      required
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>
                      ⏱️ Duration (Years)
                    </label>
                    <input
                      type="number"
                      value={spec.duration}
                      onChange={(e) =>
                        handleSpecializationChange(index, "duration", e.target.value)
                      }
                      className={`${styles.inputField} ${styles.noSpinner}`}
                      placeholder="e.g., 3"
                      min="1"
                      max="10"
                      required
                    />
                  </div>
                </div>

                <label className={styles.fileInputLabel}>
                  <input
                    type="file"
                    accept="image/*,application/pdf"
                    onChange={(e) => handleSpecializationFileChange(e, index)}
                    className={styles.hiddenInput}
                    required
                  />
                  <span className={styles.customFileButton}>
                    {formData.specializationCerts[index] ? "✓ Uploaded" : "📄 Choose File"}
                  </span>
                  {formData.specializationCerts[index] && (
                    <span className={styles.fileNameSmall}>
                      {formData.specializationCerts[index].name}
                    </span>
                  )}
                </label>

                {filePreviews.specializationCerts[index] && (
                  <div className={styles.previewContainer}>
                    <p className={styles.previewLabel}>Preview:</p>
                    <img 
                      src={filePreviews.specializationCerts[index]} 
                      alt={`Specialization ${index + 1} Preview`} 
                      className={styles.documentPreview}
                    />
                  </div>
                )}

                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeSpecialization(index)}
                    className={styles.removeButton}
                  >
                    ✕ Remove
                  </button>
                )}
              </div>
            ))}

            <button type="button" onClick={addSpecialization} className={styles.addMore}>
              + Add More Specialization
            </button>
          </div>

          {/* Experience Certificate */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.stepNumber}>5</span>
              <h3 className={styles.sectionTitle}>Experience Certificate</h3>
            </div>

            {experienceList.map((exp, index) => (
              <div key={index} className={styles.dynamicSection}>
                {index > 0 && (
                  <div className={styles.sectionDivider}>
                    <span>Experience {index + 1}</span>
                  </div>
                )}
                <div className={styles.infoBox}>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>
                      🏢 Place Type
                    </label>
                    <select
                      value={exp.placeType}
                      onChange={(e) =>
                        handleExperienceChange(index, "placeType", e.target.value)
                      }
                      className={styles.selectInput}
                      required
                    >
                      <option value="Select">Select</option>
                      <option value="Clinic">Clinic</option>
                      <option value="Hospital">Hospital</option>
                      <option value="Nursing Home">Nursing Home</option>
                      <option value="Medical College">Medical College</option>
                    </select>
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>
                      🏥 Name
                    </label>
                    <input
                      type="text"
                      value={exp.name}
                      onChange={(e) =>
                        handleExperienceChange(index, "name", e.target.value)
                      }
                      className={styles.inputField}
                      placeholder="Enter clinic/hospital name"
                      required
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>
                      ⏱️ Duration (Years)
                    </label>
                    <input
                      type="number"
                      value={exp.duration}
                      onChange={(e) =>
                        handleExperienceChange(index, "duration", e.target.value)
                      }
                      className={`${styles.inputField} ${styles.noSpinner}`}
                      placeholder="e.g., 5"
                      min="0"
                      step="0.5"
                      required
                    />
                  </div>
                </div>

                <label className={styles.fileInputLabel}>
                  <input
                    type="file"
                    accept="image/*,application/pdf"
                    onChange={(e) => handleExperienceFileChange(e, index)}
                    className={styles.hiddenInput}
                    required
                  />
                  <span className={styles.customFileButton}>
                    {formData.experienceCerts[index] ? "✓ Uploaded" : "📄 Choose File"}
                  </span>
                  {formData.experienceCerts[index] && (
                    <span className={styles.fileNameSmall}>
                      {formData.experienceCerts[index].name}
                    </span>
                  )}
                </label>

                {filePreviews.experienceCerts[index] && (
                  <div className={styles.previewContainer}>
                    <p className={styles.previewLabel}>Preview:</p>
                    <img 
                      src={filePreviews.experienceCerts[index]} 
                      alt={`Experience ${index + 1} Preview`} 
                      className={styles.documentPreview}
                    />
                  </div>
                )}

                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeExperience(index)}
                    className={styles.removeButton}
                  >
                    ✕ Remove
                  </button>
                )}
              </div>
            ))}

            <button type="button" onClick={addExperience} className={styles.addMore}>
              + Add More Experience
            </button>
          </div>

          {/* Government ID */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.stepNumber}>6</span>
              <h3 className={styles.sectionTitle}>Government Issued ID</h3>
            </div>
            <div className={styles.infoBox}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>
                  🆔 ID Type
                </label>
                <select
                  value={govId.idType}
                  onChange={(e) => setGovId({ ...govId, idType: e.target.value, idNumber: "" })}
                  className={styles.selectInput}
                  required
                >
                  <option value="Aadhaar Card">Aadhaar Card</option>
                  <option value="PAN Card">PAN Card</option>
                  <option value="Driving License">Driving License</option>
                  <option value="Passport">Passport</option>
                  <option value="Voter ID">Voter ID</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>
                  🔢 ID Number
                </label>
                <input
                  type="text"
                  value={govId.idNumber}
                  onChange={(e) => handleIdNumberChange(e.target.value)}
                  className={styles.inputField}
                  placeholder={getIdPlaceholder(govId.idType)}
                  maxLength={getIdMaxLength(govId.idType)}
                  required
                />
                <p className={styles.idHint}>
                  {govId.idType === "Aadhaar Card" && "12 digits only"}
                  {govId.idType === "PAN Card" && "Format: ABCDE1234F"}
                  {govId.idType === "Driving License" && "Alphanumeric with hyphens allowed"}
                  {govId.idType === "Passport" && "Alphanumeric, 8-15 characters"}
                  {govId.idType === "Voter ID" && "3 letters followed by 7 digits"}
                </p>
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>
                  📆 Date of Birth
                </label>
                <input
                  type="date"
                  value={govId.dob}
                  onChange={(e) => handleDobChange(e.target.value)}
                  className={`${styles.inputField} ${!isDobValid && govId.dob ? styles.invalidInput : ''}`}
                  max={new Date().toISOString().split('T')[0]}
                  required
                />
                {dobError && (
                  <p className={styles.errorMessage}>
                    ⚠️ {dobError}
                  </p>
                )}
                {isDobValid && govId.dob && (
                  <p className={styles.successMessage}>
                    ✓ Age verified: {calculateAge(govId.dob)} years old
                  </p>
                )}
                <p className={styles.idHint}>
                  You must be at least 18 years old to register
                </p>
              </div>
            </div>
            <label className={styles.fileInputLabel}>
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => handleFileChange(e, "idProof")}
                className={styles.hiddenInput}
                required
              />
              <span className={styles.customFileButton}>
                {formData.idProof ? "✓ Uploaded" : "📄 Choose File"}
              </span>
              {formData.idProof && (
                <span className={styles.fileNameSmall}>
                  {formData.idProof.name}
                </span>
              )}
            </label>
            {filePreviews.idProof && (
              <div className={styles.previewContainer}>
                <p className={styles.previewLabel}>Preview:</p>
                <img 
                  src={filePreviews.idProof} 
                  alt="ID Proof Preview" 
                  className={styles.documentPreview}
                />
              </div>
            )}
          </div>
          <NavLink to="/">
            <button type="submit" className={styles.saveButton}>
              Submit for Verification
            </button>
          </NavLink>
        </form>
      </div>
    </div>
  );
}