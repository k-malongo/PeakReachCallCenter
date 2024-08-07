import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { TextField, Button } from "@mui/material";

export default function Contact() {
  return (
    <div id="contact">
      <MapContainer
        center={[1.3107, 36.8219]}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: "600px", zIndex: 1 }}
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
            <TextField label="Name" fullWidth className="input" />
            <TextField label="Email" fullWidth className="input" />
            <TextField
              label="Your Message"
              multiline
              rows={4}
              fullWidth
              className="input"
            />
            <Button className="action">send</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
