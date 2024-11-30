import { Link } from "react-router-dom";
import { Button } from "@mui/material";


/* eslint-disable react/prop-types */


// MUI
import PlaceIcon from "@mui/icons-material/Place";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer({ openPopup }) {
  return (
    <div id="footer">
      <div className="content">
        <div className="sections">
          <div className="card about">
            <h4>about us</h4>
            <ul>
              <p>
                Interested in a face-to-face discussion? We welcome you to
                schedule a meeting with us. Please email or phone to arrange a
                convenient time to visit our office.
              </p>
              <div className="socials">
                <a href="https://www.facebook.com">
                  <FacebookIcon />
                </a>
                <a href="https://www.twitter.com">
                  <XIcon />
                </a>
                <a href="https://www.instagram.com">
                  <InstagramIcon />
                </a>
                <a href="https://www.linkedin.com">
                  <LinkedInIcon />
                </a>
              </div>
            </ul>
          </div>

          <div className="card links">
            <h4>get started</h4>
            <ul>
              <li>
                <p>
                  <Link to="/#services">Services</Link>
                </p>
              </li>
              <li>
                <p>
                  <Link to="/#faq">FAQs</Link>
                </p>
              </li>
              <li>
                <p>
                  <Link to="/#team">Our Team</Link>
                </p>
              </li>
              <li>
                <p>
                  <Link to="/#contact">Contact</Link>
                </p>
              </li>
              <li>
                <p>
                  <Link to="/careers">Careers</Link>
                </p>
              </li>
            </ul>
          </div>

          <div className="card legal">
            <h4>legal</h4>
            <ul>
              <li>
                <p>
                  <Link>Terms and Conditions</Link>
                </p>
              </li>
             
              <li>
                <p>
                  <Link>Acceptable Use Notice</Link>
                </p>
              </li>
              <li>
                <p>
                  <Link>Cookies Policy</Link>
                </p>
              </li>
            </ul>
            <Button
              className="footer_popup"
              onClick={openPopup}
            >
              Privacy Policy
            </Button>
          </div>

          <div className="card contact">
            <h4>contact</h4>
            <ul>
              <li>
                <div className="icon">
                  <MailIcon />
                </div>
                <p>
                  <span hidden>email: </span>
                  <a href="mailto:info@peakreachcallcenterltd.com">info@peakreachcallcenterltd.com
                  </a>
                </p>
              </li>
              <li>
                <div className="icon">
                  <PhoneIcon />
                </div>
                <p>
                  <span hidden>phone: </span>+254797561335/+254780520824
                </p>
              </li>
              <li>
                <div className="icon">
                  <PlaceIcon />
                </div>
                <p>
                  <span hidden>address: </span>We are a global company
                </p>
              </li>
            </ul>
          </div>
        </div>

        <p className="copyright">Copyright Ⓒ Peak Reach Call Center Ltd</p>
      </div>
    </div>
  );
}
