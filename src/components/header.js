import "../styles/header.css";
import { ReactComponent as Arrow } from "../icons/arrow-down.svg";
import { ReactComponent as Github } from "../icons/github.svg";
import { ReactComponent as Twitter } from "../icons/twitter.svg";
import { ReactComponent as Instagram } from "../icons/instagram.svg";
import { ReactComponent as Email } from "../icons/email.svg";
function header() {
  return (
    <header>
      <div className="content">
        <div className = "profilelinks">
          <div className="links">
            <Github height={30} width={30} />
          </div>
          <div className="links">
            <Twitter height={30} width={30}/>
          </div>
          <div className="links">
          <Instagram height={30} width={30}/>
          </div>
          <div className="links">
          <Email height={30} width={30}/>
          </div>
        </div>
        <div>
          <h1>Jonathan Irondi</h1>
          <h3>I love everything about code</h3>
          <h3>I aspire to be the best developer</h3>
        </div>
      </div>
      <div className="icon">
        <Arrow height={20} width={20} />
      </div>
    </header>
  );
}

export default header;
