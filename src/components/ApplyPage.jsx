
import { useNavigate } from "react-router-dom";


import { useState } from "react";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    cv: null,
  });

  const [errorMessage, setErrorMessage] = useState(""); // For error messages
  const [isSubmitting, setIsSubmitting] = useState(false); // For disabling the button during submission
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error message
    setErrorMessage("");

    // Check if CV is uploaded
    if (!formData.cv) {
      setErrorMessage("Please upload your CV before submitting.");
      return;
    }

    // Check file size (e.g., limit to 5MB)
    if (formData.cv && formData.cv.size > 5 * 1024 * 1024) {
      setErrorMessage("File size should not exceed 5MB.");
      return;
    }

    setIsSubmitting(true); // Disable the button
    const emailData = new FormData();
    emailData.append("name", formData.name);
    emailData.append("email", formData.email);
    emailData.append("phone", formData.phone);
    emailData.append("message", formData.message);
    emailData.append("cv", formData.cv);

    fetch("https://vercel.com/kmalongos-projects/email-backend/5MPQUJzAJBzzq3QUtkqUpFLwdn9C", {
      method: "POST",
      body: emailData,
    })
      .then((response) => {
        setIsSubmitting(false); // Re-enable the button

        if (response.ok) {
          console.log("Application submitted successfully!");
          alert("Application submitted successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            cv: null,
          }); // Reset form data
          navigate("/careers"); // Redirect to the careers page

        } else {
          response.json().then((data) => {
            const error = data.error || "An unknown error occurred.";
            setErrorMessage(error);
          });
        }
      })
      .catch((error) => {
        setIsSubmitting(false); // Re-enable the button
        setErrorMessage("Unable to submit the application. Please try again later.");
        console.error("Error:", error);
      });
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
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
}

