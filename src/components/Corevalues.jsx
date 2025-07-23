
const values = [
  {
    icon: "🌿",
    title: "Growth",
    description: "Cultivate curiosity and courage to expand yourself and our business.",
  },
  {
    icon: "🙌",
    title: "Connection",
    description: "Build genuine relationships through empathy, love, and communication.",
  },
  {
    icon: "🌍",
    title: "Freedom",
    description: "Create disciplined freedom for yourself and others.",
  },
  {
    icon: "🚀",
    title: "Believe",
    description: "Break limiting beliefs—create new ones that serve you and the team.",
  },
  {
    icon: "❤️‍🩹",
    title: "Health",
    description: "Prioritize self-care to maintain a balanced mind, body, and spirit.",
  },
];

const CoreValues = () => {
  return (
    <section className="core-values">
      <h2 className="core-values-title">Our Core Values</h2>
      <div className="core-values-container">
        {values.map((val, i) => (
          <div className="value-card" key={i}>
            <div className="value-icon">{val.icon}</div>
            <h3 className="value-title">{val.title}</h3>
            <p className="value-description">{val.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
