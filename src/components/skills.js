import "../styles/skills.css";
import Skill from "./skill";

import { ReactComponent as HtmlIcon } from "../icons/html5.svg";
import { ReactComponent as CssIcon } from "../icons/css3.svg";
import { ReactComponent as JsIcon } from "../icons/js.svg";
import { ReactComponent as PythonIcon } from "../icons/python.svg";
import { ReactComponent as ReactIcon } from "../icons/react.svg";

function skills() {
  return (
    <div className="skills">
      <h2>Stacks</h2>
      <hr />
      <div className="skills-container">
        <Skill title="html">
          <HtmlIcon />
        </Skill>
        <Skill title="css">
          <CssIcon />
        </Skill>
        <Skill title="javascript">
          <JsIcon />
        </Skill>
        <Skill title="python">
          <PythonIcon />
        </Skill>
        <Skill title="react.js">
          <ReactIcon />
        </Skill>
      </div>
    </div>
  );
}

export default skills;
