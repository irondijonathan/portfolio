import "../styles/header.css";
import { ReactComponent as Arrow } from "../icons/arrow-down.svg";

function header() {
  return (
    <header>
      <div className="content">
        <div>
          <h1>Jonathan Irondi</h1>
          <h3>I love everything about code</h3>
          <h3>I aspire to be the best developer</h3>
        </div>
      </div>
      <div className="icon">
        <Arrow height={20} width={20} />
        <Arrow height={20} width={20} />
      </div>
    </header>
  );
}

export default header;
