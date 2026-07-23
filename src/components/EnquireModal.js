"use client";

import { useState, useEffect } from "react";
import styles from "./EnquireModal.module.css";

export default function EnquireModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    domain: "",
    candidates: "",
    deliveryMode: "",
    location: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    
    if (!formData.email.trim()) {
      newErrors.email = "Work email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    } else {
      // Suggest work email if personal email is entered
      const personalDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "aol.com"];
      const emailDomain = formData.email.split("@")[1]?.toLowerCase();
      if (personalDomains.includes(emailDomain)) {
        newErrors.email = "Please use your company work email (e.g. name@company.com).";
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?[\d\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid contact number.";
    }

    if (!formData.company.trim()) newErrors.company = "Company name is required.";
    if (!formData.domain) newErrors.domain = "Please select a training domain.";
    if (!formData.candidates) newErrors.candidates = "Please enter estimated candidates size.";
    else if (parseInt(formData.candidates) < 1) newErrors.candidates = "Candidates size must be at least 1.";
    if (!formData.deliveryMode) newErrors.deliveryMode = "Please select a delivery mode.";
    if (!formData.location.trim()) newErrors.location = "City/Location is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Clear form details
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          domain: "",
          candidates: "",
          deliveryMode: "",
          location: "",
          message: ""
        });
      } else {
        const data = await response.json();
        setErrors({ submit: data.error || "Submission failed. Please try again." });
      }
    } catch (err) {
      setErrors({ submit: "Network error occurred. Please verify your connection." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.closeIcon}>
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {!isSubmitted ? (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formHeader}>
              <h2 className={styles.title}>Enterprise Up-Skilling Enquiry</h2>
              <p className={styles.subtitle}>Fill in your organizational needs below, and our corporate advisory division will connect with you.</p>
            </div>

            {errors.submit && <div className={styles.submitError}>{errors.submit}</div>}

            <div className={styles.formGrid}>
              {/* Full Name */}
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                />
                {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
              </div>

              {/* Work Email */}
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">Work Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@company.com"
                  className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                />
                {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
              </div>

              {/* Contact Phone */}
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +1 555-0199"
                  className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
                />
                {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
              </div>

              {/* Company Name */}
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="company">Company Name *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Acme Corporation"
                  className={`${styles.input} ${errors.company ? styles.inputError : ""}`}
                />
                {errors.company && <span className={styles.errorMsg}>{errors.company}</span>}
              </div>

              {/* Domain Dropdown */}
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="domain">Training Domain *</label>
                <select
                  id="domain"
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  className={`${styles.select} ${errors.domain ? styles.inputError : ""}`}
                >
                  <option value="">Select Domain</option>
                  <option value="Product & Innovation">Product & Innovation Hub</option>
                  <option value="Generative AI">Gen-AI Mastery</option>
                  <option value="Leadership Strategy">Leadership Elevation</option>
                  <option value="Tech & Data Science">Tech & Data Insights</option>
                  <option value="Operations Excellence">Operations Excellence</option>
                  <option value="Digital Transformation">Digital Enterprise</option>
                </select>
                {errors.domain && <span className={styles.errorMsg}>{errors.domain}</span>}
              </div>

              {/* Estimated Candidates */}
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="candidates">No. of Candidates *</label>
                <input
                  type="number"
                  id="candidates"
                  name="candidates"
                  min="1"
                  value={formData.candidates}
                  onChange={handleChange}
                  placeholder="e.g. 25"
                  className={`${styles.input} ${errors.candidates ? styles.inputError : ""}`}
                />
                {errors.candidates && <span className={styles.errorMsg}>{errors.candidates}</span>}
              </div>

              {/* Delivery Mode Dropdown */}
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="deliveryMode">Delivery Preference *</label>
                <select
                  id="deliveryMode"
                  name="deliveryMode"
                  value={formData.deliveryMode}
                  onChange={handleChange}
                  className={`${styles.select} ${errors.deliveryMode ? styles.inputError : ""}`}
                >
                  <option value="">Select Mode</option>
                  <option value="Live Virtual Cohort">Cohort Live Online</option>
                  <option value="In-Person Corporate">In-Person Corporate Workshop</option>
                  <option value="Self-Paced Hybrid">Self-Paced Hybrid</option>
                </select>
                {errors.deliveryMode && <span className={styles.errorMsg}>{errors.deliveryMode}</span>}
              </div>

              {/* Location */}
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="location">City/Location *</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Bengaluru, India"
                  className={`${styles.input} ${errors.location ? styles.inputError : ""}`}
                />
                {errors.location && <span className={styles.errorMsg}>{errors.location}</span>}
              </div>
            </div>

            {/* Message Box */}
            <div className={`${styles.formGroup} ${styles.messageGroup}`}>
              <label className={styles.label} htmlFor="message">Message / Custom Requirements</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Briefly describe your objectives, key challenges, or timeline preferences..."
                rows="3"
                className={styles.textarea}
              />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
              {isSubmitting ? (
                <span className={styles.spinner}></span>
              ) : (
                "Submit Request"
              )}
            </button>
          </form>
        ) : (
          <div className={styles.successScreen}>
            <div className={styles.successIconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={styles.successIcon}>
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h2 className={styles.successTitle}>Enquiry Received!</h2>
            <p className={styles.successText}>
              Thank you for submitting your upskilling requirements. An Accredian corporate advisory consultant will review your specifications and contact you at your work email within 24 business hours.
            </p>
            <button className={styles.dismissBtn} onClick={handleReset}>
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
