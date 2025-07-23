import { Helmet } from "react-helmet";

<Helmet>
  <title>Peak Reach | About</title>
  <meta name="description" content="Explore Peak Reach - your premier partner in global customer contact solutions." />
  <link rel="canonical" href="https://www.peakreach.co.ke/" />
</Helmet>

export default function About() {
  return (
    <div id="about">
      <div className="main">
        <div className="header">
          <h2 className="title">about peak reach call center</h2>
          <h3 className="subtitle">World-Class Contact Center</h3>
        </div>

        <p className="description">
          At Peak Reach, we are a premier customer experience partner delivering world-class contact center solutions across voice, chat, email, and social media. Our mission is to help businesses increase customer satisfaction, streamline support, and grow their brand reputation through personalized, scalable, and cost-effective communication services.
With a dedicated team of highly trained agents, advanced technology infrastructure, and a commitment to excellence, we serve clients across various industries including e-commerce, telecommunications, fintech, and healthcare. Whether you need 24/7 support, technical assistance, sales outreach, or back-office processing, we tailor our solutions to meet your exact needs.
<br />Why choose us?
<br />
<br />✅99% Customer Satisfaction Rate 

<br />✅ Multilingual Support & Global Coverage

<br />✅ Fast Onboarding & Flexible Plans 

<br />✅ PCI-DSS & GDPR Compliant


 <br />Partner with us and turn every interaction into an opportunity to delight your customers.
        </p>

        <div className="stats_container">
          <div className="stat">
            {/* <div className="statsvalue">
              <p>Customer Service</p>
              <p>55%</p>
            </div>
            <div className="statspercent">
              <div className="stat_colored"></div>
              <div className="stat_colorless"></div>
            </div> */}

            <div>
              <b>Leverage technology to empower people</b>
              <p>Utilize technology for access to information, skill training, community building, e-commerce, remote work, and feedback mechanisms to empower individuals.</p>
            </div>
          </div>

          {/* <div className="stat">
            <div className="statsvalue">
              <p>Sales/Lead Generation</p>
              <p>32%</p>
            </div>
            <div className="statspercent" >
              <div className="stat_colored"></div>
              <div className="stat_colorless"></div>
            </div>
          </div> */}
        </div>

        {/* <button className="action">
          <p>Learn More</p>
          <p>&#8594;</p>
        </button> */}
      </div>

      <div className="background">
        <div className="imagecard">
          <img src="/images/about.jpg" alt="" />
          <img src="/images/header.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
