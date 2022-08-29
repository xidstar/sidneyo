import React from 'react';

const ContactForm = () => {
  return (
    <form
      action="https://formspree.io/f/xwkanwye"
      method="POST"
    >
      <label>
        <p>Full name:</p>
        <input type="name" name="name" required></input>
      </label>
      <label>
        <p>Email:</p>
        <input type="email" name="_replyto" required></input>
      </label>
      <label>
        <p>Phone #:</p>
        <input type="phone" name="phone" required></input>
      </label>
      <label>
        <p>Message:</p>
        <textarea name="message" required></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  )
}

export default ContactForm;