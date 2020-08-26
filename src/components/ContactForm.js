import React, { Component } from "react";
import { motion } from "framer-motion";
import Axios from "axios";

class ContactForm extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    subject: "",
    phone: null,
    company: "",
    message: "",
    sent: false,
    buttonText: "Submit",
    buttonDisabled: false,
  };

  resetForm = () => {
    this.setState({
      fname: "",
      lname: "",
      email: "",
      subject: "",
      phone: null,
      company: "",
      message: "",
      buttonText: "Message sent!",
      buttonDisabled: true
    });
  };

  formSubmit = (e) => {
    e.preventDefault();

    this.setState({ buttonText: "...Sending message" });

    let formData = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      subject: this.state.subject,
      phone: this.state.phone,
      company: this.state.company,
      message: this.state.message,
    };

    Axios.post("https://portfolio-contactform-api.herokuapp.com/api/v1", formData)
      .then((res) => {
        if (res.data.success) {
          this.setState({ sent: true, buttonDisabled: true });
        } else {
          this.setState({ buttonDisabled: false });
        }
      })
      .then(() => {
        this.resetForm();
      })
      .catch(() => {
        Error("Message could not be sent!");
        this.setState({ buttonDisabled: false });
      });
  };

  render() {
    return (
      <div id="contact-container">
        <motion.h1
          id="contact-title"
          initial={{ x: -100, opacity: -10 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Let's talk!
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
            transition={{ delay: 0.8, duration: 1 }}
            onSubmit={this.formSubmit}
          >
            <div className="field">
              <label className="label">First name *</label>
              <div className="control">
                <input
                  id="fname-input"
                  className="input"
                  type="text"
                  name="fname"
                  onChange={(e) => this.setState({ fname: e.target.value })}
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
                  name="lname"
                  onChange={(e) => this.setState({ lname: e.target.value })}
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
                  name="email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Subject *</label>
              <div className="control">
                <input
                  id="subject-input"
                  className="input"
                  name="subject"
                  onChange={(e) => this.setState({ subject: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Phone</label>
              <div className="control">
                <input
                  id="phone-input"
                  className="input"
                  type="number"
                  name="phone"
                  onChange={(e) => this.setState({ phone: e.target.value })}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Company</label>
              <div className="control">
                <input
                  id="company-input"
                  className="input"
                  type="text"
                  name="company"
                  onChange={(e) => this.setState({ company: e.target.value })}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Message *</label>
              <div className="control">
                <textarea
                  className="textarea"
                  rows="8"
                  name="message"
                  onChange={(e) => this.setState({ message: e.target.value })}
                  required
                ></textarea>
              </div>
            </div>

            <div className="control">
              <button
                id="contact-submit"
                className="button is-black"
                type="submit"
                name="submit"
                disabled={this.state.buttonDisabled}
              >
                {this.state.buttonText}
              </button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    );
  }
}

export default ContactForm;
