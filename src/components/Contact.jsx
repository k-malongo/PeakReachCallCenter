import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import { TextField, Button } from "@mui/material";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  // const [sent, setSent] = useState(false);

  // const handleSendEmail = () => {
  //   const subject = `Message from ${name}`;
  //   const body = encodeURIComponent(
  //     `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  //   );
  //   window.location.href = `mailto:vokemalosh32@gmail.com?subject=${subject}&body=${body}`;
  //   console.log("Email.sent")
  // };
  const sendEmail = () => {
    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);

    // Set up the template params for EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };
    console.log(templateParams);

    // Replace 'your_service_id', 'your_template_id', and 'your_user_id' with actual values from EmailJS
    emailjs
      .send(
        "service_ohjfqbs", // Your EmailJS Service ID
        "template_sna51sr", // Your EmailJS Template ID
        templateParams,
        "r4lEAHv3sN667NYGD" // Your EmailJS User ID
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setLoading(false);
          // setSent(true); // Show success message
          setName("");
          setEmail("");
          setMessage(""); // Clear fields after submission
          
        },
        (error) => {
          console.log("Failed to send email.", error.text);
          setLoading(false);
        
        }
      );
  };

  return (
    <div id="contact">
      <MapContainer
        center={[1.3107, 36.8219]}
        zoom={1}
        scrollWheelZoom={false}
        style={{ height: "550px", zIndex: 1 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[1.3107, 36.8219]}>
          <Popup>HQ</Popup>
        </Marker>
      </MapContainer>

      <div className="contact_container">
        <div className="background"></div>
        <div className="form">
          <div className="container">
            <h2 className="title">contact us</h2>
            <TextField
              label="Name"
              fullWidth
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Email"
              fullWidth
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Your Message"
              multiline
              rows={4}
              fullWidth
              className="input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              className="action"
              onClick={sendEmail} // Use onClick instead of onSubmit
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </Button>

            {/* Display success or failure messages */}
            {/* {sent ? <p>Email sent successfully!</p> : <p>Email failed to send.</p>} */}
            {/* {!sent && !loading && <p>Email failed to send.</p>} */}
          </div>
        </div>
      </div>
    </div>
  );
}
