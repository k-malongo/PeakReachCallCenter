import { useParams } from "react-router-dom";
import emailjs from "emailjs-com";

import { useState } from "react";

export default function ApplyPage() {
  // const { jobId } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use a service like EmailJS or Node.js backend to handle emails
    const emailData = new FormData();
    emailData.append("name", formData.name);
    emailData.append("email", formData.email);
    emailData.append("phone", formData.phone);
    emailData.append("message", formData.message);
    emailData.append("cv", formData.cv);

    // Send data to a server or use EmailJS
    emailjs
      .sendForm(
        "service_ohjfqbs", // Your EmailJS Service ID
        "template_sna51sr", // Your EmailJS Template ID
        e.target, // Form element
        "r4lEAHv3sN667NYGD" // Your EmailJS User ID
      )
      .then(
        (result) => {
          alert("Application submitted successfully!" + result);
        },
        (error) => {
          alert("Error submitting the application.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="apply-container">
      <h2>Submit Your Application</h2>
      <form className="apply-form" onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Cover Letter / Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Upload CV:
          <input
            type="file"
            name="cv"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}
