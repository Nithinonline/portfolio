import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Styles from "./ContactUs.module.css"

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ihvdt19', 'template_0fctx9a', form.current, '5MeQZxb-uORfzhRJ_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className={Styles.feedback} type="text" name="Nithin" />
      <label>Email</label>
      <input className={Styles.feedback} type="email" name="from_name" />
      <label>Message</label>
      <textarea className={Styles.feedback} name="message" />
      <input type="submit" value="Send" onClick={()=>{alert("Email is send successfully")}} />
    </form>
  );
};