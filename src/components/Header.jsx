import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";

export default function Header() {

  function handleRequest(){
    <>
    </>
  }
  return (
    <div id="header">
      <img
        className="background"
        src="/images/header.jpg"
        alt="header background"
      />

      <div className="content">
        <div className="card">
          <h2 className="title">
            Empowering Customer Experiences with Innovation and Sustainability
            in Global Premier Call Center
          </h2>
          <h3 className="description">
            PeakReach is a Global call center where customer satisfaction,
            advanced technology, and sustainability converge. Our exceptional
            workforce builds long-term relationships, delivering unparalleled
            service and ensuring customer service excellence.
          </h3>
          <div className="contacts">
            Contact :
            <div className="icon">
              <MailIcon className="icon-color"/>
              <p>
                <span hidden>email: </span>
                <a href="mailto:info@peakreachcallcenterltd.com">
                  info@peakreach.co.ke
                </a>
              </p>
            </div>
            <div className="icon">
              <PhoneIcon className="icon-color"/>
              <p>
                <span hidden>phone: </span><a href="tel:+254797561335">254723217873/+254780520824</a>+
              </p>
            </div>
          </div>
          <button className="action" onClick={handleRequest}>
          <Link to="/#contact">Request A Quote</Link>

          </button>
        </div>
      </div>
    </div>
  );
}
