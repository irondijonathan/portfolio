import "../styles/skill.css";

function skill({ title, children }) {
  return (
    <div className="skill-container">
      <div className="skill-icon">{children}</div>
      <h3>{title}</h3>
    </div>
  );
}

export default skill;
