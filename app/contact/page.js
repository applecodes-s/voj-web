"use client"; // ✅ Mark this file as a Client Component

import { useState } from "react";
import Layout from "@/components/layout/Layout";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      // Example: POST to backend API
      try {
        // Replace '/api/contact' with your backend endpoint
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          setSuccess("Message sent successfully!");
          setFormData({ username: "", email: "", message: "" });
        } else {
          setSuccess("Failed to send message. Try again later.");
        }
      } catch (err) {
        console.error(err);
        setSuccess("An error occurred. Please try again.");
      }
    } else {
      setErrors(validationErrors);
      setSuccess("");
    }
    const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
  };

  return (
    <Layout headerStyle={4} footerStyle={4} breadcrumbTitle="Contact">
      {/* Contact Page Section */}
      <section className="contact-page-section">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <div className="title">Get in touch</div>
            <h2>
              With us<span className="theme_color"></span>
            </h2>
            <div className="separate"></div>
            <div className="text">
              We'd love to hear from you. Reach out to us for prayer requests,
              <br />
              ministry inquiries, or any questions you may have.
            </div>
          </div>
          <div className="row clearfix">
            {/* Form Column */}
            <div className="form-column col-lg-8 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="title-box">
                  <h4>Drop us a line</h4>
                  <div className="text">
                    Your email address will not be published. Required fields
                    are marked *
                  </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form">
                  <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="row clearfix">
                      <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <textarea
                          name="message"
                          placeholder="Your Comment"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                        {errors.message && (
                          <p className="error">{errors.message}</p>
                        )}
                      </div>

                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <input
                          type="text"
                          name="username"
                          placeholder="Your Name"
                          value={formData.username}
                          onChange={handleChange}
                        />
                        {errors.username && (
                          <p className="error">{errors.username}</p>
                        )}
                      </div>

                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                      </div>

                      <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <button
                          type="submit"
                          className="theme-btn btn-style-four clearfix"
                        >
                          <span className="icon flaticon-arrow-pointing-to-right"></span>
                          Send
                        </button>
                      </div>
                      {success && <p className="success">{success}</p>}
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Info Column */}
            <div className="info-column col-lg-4 col-md-12 col-sm-12">
              <div className="inner-column">
                <ul className="info-list">
                  <li>
                    <strong>Voice of Jesus <br /> Ministries International</strong>
                    N G O Colony <br />
                    Anna Nagar <br />
                    Ramanathapuram <br />
                    Tamil Nadu 623 501
                  </li>
                  <li>
                    <strong>Opening Hours</strong>
                    Monday – Friday 09:00 – 23:00 <br /> Saturday 09:00 – 22:00
                  </li>
                  <li>
                    <strong>Contact</strong>
                    +91 9788404333 <br />
                    +91 9788404222
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
