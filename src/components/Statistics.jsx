import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatisticCard = ({ end, suffix, separator, label }) => {
  const { ref, inView } = useInView({
    // triggerOnce: true,   // only trigger once
    threshold: 0.6,       // how much of the element must be visible
  });

  return (
    <div className="stat-card" ref={ref}>
      <div className="stat-number">
        {inView && (
          <CountUp
            end={end}
            duration={2.5}
            separator={separator}
            suffix={suffix}
          />
        )}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const Statistics = () => {
  return (
    <section id="statistics">
      <div className="header">
        <h1>Our Impact</h1>
        <p>Key performance metrics showcasing our growth and success.</p>
      </div>
      <div className="stats-grid">
        <StatisticCard end={500} suffix="+" label="Clients Served" />
        <StatisticCard end={95} suffix="%" label="Satisfaction Rate" />
        <StatisticCard end={200000} separator="," label="Calls Handled" />
        <StatisticCard end={25} label="Team Members" />
      </div>
    </section>
  );
};

export default Statistics;
