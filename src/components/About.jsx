export default function About() {
  return (
    <div id="about">
      <div className="aboutleft">
        <div className="abouttopic">
          <p>ABOUT PEAK REACH CALL CENTER</p>
        </div>

        <div className="aboutheader">
          <p>
            World-Class
            <br />
            Contact Center
          </p>
        </div>

        <div className="content">
          <p>
            Our agents are fully bilingual, bi-cultural, well educated and have
            expertise in a wide array of business functions such as Debt
            Collection, Customer Service.
          </p>
        </div>

        <div className="stats_container">
          <div className="stat">
            <div className="statsvalue">
              <p>Customer Service</p>
              <p>55%</p>
            </div>
            <div className="statspercent">
              <div className="stat_colored"></div>
              <div className="stat_colorless"></div>
            </div>
          </div>

          <div className="stat">
            <div className="statsvalue">
              <p>Sales/Lead Generation</p>
              <p>32%</p>
            </div>
            <div className="statspercent">
              <div className="stat_colored"></div>
              <div className="stat_colorless"></div>
            </div>
          </div>
        </div>
        <button className="action">
          <p>Learn More</p><p>&#8594;</p>
        </button>
      </div>

      <div className="aboutimg">
        <div className="imagecard">
          <img src="/images/about.jpg" alt="" />
          <img src="/images/header.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
