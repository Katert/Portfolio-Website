import React, { Component } from "react";
import { motion } from "framer-motion";

class ContactForm extends Component {
  render() {
    return (
      <div id="contact-container">
        <motion.h1
          id="contact-title"
          initial={{ x: 100, opacity: -10 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact
        </motion.h1>
        <motion.div
          id="contact-section"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <motion.form
            initial={{ x: 50, opacity: -1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="field">
              <label className="label">First name *</label>
              <div className="control">
                <input
                  id="fname-input"
                  className="input"
                  type="text"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Last name *</label>
              <div className="control">
                <input
                  id="lname-input"
                  className="input"
                  type="text"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">E-mail *</label>
              <div className="control">
                <input
                  id="email-input"
                  className="input"
                  type="email"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Phone</label>
              <div className="control">
                <input id="phone-input" className="input" type="number" />
              </div>
            </div>

            <div className="field">
              <label className="label">Company</label>
              <div className="control">
                <input id="company-input" className="input" type="text" />
              </div>
            </div>

            <div className="field">
              <label className="label">Message *</label>
              <div className="control">
                <textarea className="textarea" rows="8" required></textarea>
              </div>
            </div>

            <div className="control">
              <button
                id="contact-submit"
                className="button is-black"
                type="submit"
              >
                Submit
              </button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    );
  }
}

export default ContactForm;
