import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import validator from "validator";

export default function Contact() {
    const form = useRef();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userId = process.env.REACT_APP_EMAILJS_USER_ID;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, userId)
      .then((result) => {
        console.log(result.text);
        setShowSuccessAlert(true);
        form.current.reset();
       
      }, (error) => {
        console.log(error.text);
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
  


  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validateEmail = () => {
    if (!validator.isEmail(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePhone = () => {
    if (!validator.isMobilePhone(phone, "any", { strictMode: false })) {
      setPhoneError("Invalid phone number");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.isEmail(email) && validator.isMobilePhone(phone, "any", { strictMode: false })) {
      console.log("Form is valid. Submitting...");
    } else {
      validateEmail();
      validatePhone();
    }
  };
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex justify-center">
        <form ref={form} onSubmit={sendEmail}
          name="contact"
          className="md:w-1/2 flex flex-col w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="fullname"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-400">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              onBlur={validatePhone} 
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
             <span className="text-red-500">{phoneError}</span>
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onBlur={validateEmail} 
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <span className="text-red-500">{emailError}</span>
          </div>
          <div className="relative mb-4">
            <label
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit" onClick={sendEmail} onSubmit={handleSubmit}
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
