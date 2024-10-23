import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Header() {
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
                  info@peakreachcallcenterltd.com
                </a>
              </p>
            </div>
            <div className="icon">
              <PhoneIcon className="icon-color"/>
              <p>
                <span hidden>phone: </span>+254797561335/+254780520824
              </p>
            </div>
          </div>
          <button className="action">Request A Quote</button>
        </div>
      </div>
    </div>
  );
}
