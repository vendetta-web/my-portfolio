import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import validator from "validator";
import { socialLinks } from "../data";

export default function Contact() {
  const form = useRef();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userId = process.env.REACT_APP_EMAILJS_USER_ID;

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validateEmail = () => {
    if (!validator.isEmail(email)) {
      setEmailError("Invalid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePhone = () => {
    if (!validator.isMobilePhone(phone, "any", { strictMode: false })) {
      setPhoneError("Invalid phone number");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const validateForm = () => {
    const emailValid = validateEmail();
    const phoneValid = validatePhone();
    return emailValid && phoneValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    emailjs.sendForm(serviceId, templateId, form.current, userId)
      .then((result) => {
        console.log(result.text);
        setShowSuccessAlert(true);
        form.current.reset();
        setEmail("");
        setPhone("");
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to send message. Please try again.',
          icon: 'error',
          timer: 3000,
          showConfirmButton: false,
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  useEffect(() => {
    if (showSuccessAlert) {
      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully.',
        icon: 'success',
        timer: 3000,
        showConfirmButton: false,
        onClose: () => setShowSuccessAlert(false),
      });
    }
  }, [showSuccessAlert]);

  return (
    <section id="contact" className="contact-section section-pad">
      <div className="contact-orb contact-orb-one"></div>
      <div className="contact-orb contact-orb-two"></div>
      <div className="section-shell contact-grid">
        <div className="contact-copy reveal">
          <span className="eyebrow eyebrow-dark">LET'S CONNECT</span>
          <h2>Have a project in mind?</h2>
          <p>
            I'm always open to new opportunities, interesting projects or just having a conversation about technology, Salesforce or web development.
          </p>
          <div className="contact-quote">
            <i className="fa-solid fa-quote-left"></i>
            <p>Good software solves problems.<br />Better software creates opportunities.</p>
          </div>
          <div className="social-row contact-socials">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} name="contact" className="contact-form reveal">
          <div className="form-heading">
            <span>Send a message</span>
            <i className="fa-regular fa-paper-plane"></i>
          </div>

          <label>
            Name
            <input type="text" id="name" name="fullname" placeholder="Your name" required />
          </label>

          <div className="form-two-col">
            <label>
              Phone
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone number"
                onBlur={validatePhone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <span className="form-error">{phoneError}</span>
            </label>

            <label>
              Email
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                onBlur={validateEmail}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span className="form-error">{emailError}</span>
            </label>
          </div>

          <label>
            Message
            <textarea id="message" name="message" placeholder="Tell me what you're working on..." required />
          </label>

          <button type="submit" disabled={isSubmitting} className="btn btn-primary form-submit">
            {isSubmitting ? (
              <>
                <i className="fa-solid fa-spinner fa-spin" style={{ marginRight: '8px' }}></i>
                Sending...
              </>
            ) : (
              <>
                Send Message <i className="fa-solid fa-arrow-right"></i>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}