export default function About() {
  return (
    <div id="about">
      <div className="main">
        <div className="header">
          <h2 className="title">about peak reach call center</h2>
          <h3 className="subtitle">World-Class Contact Center</h3>
        </div>

        <p className="description">
          Our agents are fully bilingual, bi-cultural, well educated and have
          expertise in a wide array of business functions such as Debt
          Collection, Customer Service.
        </p>

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
          <p>Learn More</p>
          <p>&#8594;</p>
        </button>
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
