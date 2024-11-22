import { Link } from "react-router-dom";

export default function Careers() {
  return (
    <div id="careers">
      <div className="head_wrapper">
        <div className="home">
          <Link to="/">Go back to home</Link>
        </div>
        <div className="heading">
          <p>CAREERS</p>
        </div>
      </div>
      <div className="impact-sourcing">
        <header className="header">
          <h1>
            <span className="impact">PEAK</span> REACH
          </h1>
        </header>
        <div className="content">
          <div className="text-section">
            <h2>
              UPLIFTING OUR YOUTH THROUGH DEMAND-LED TRAINING... IT’S WHAT WE
              DO.
            </h2>
            <p>
              Educating those willing and eager to learn delivers a long-term
              solution to our continent’s unemployment crisis. We are in the
              business of building careers for the youth, being fully informed
              that the first step towards gainful employment can lead to a
              lifetime of opportunities and growth.
            </p>
            <p>
              A non-profit company, CareerBox identifies and trains candidates
              from underprivileged townships and places them in entry-level
              digitally enabled jobs.
            </p>
          </div>
          <div className="image-section">
            <img src="/public/images/girl1.jpg" alt="Professional Woman" />
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
