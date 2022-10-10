import React from "react";
import { useNavigate } from "react-router-dom";
function Contact() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Contact</h1>
      React has been designed from the start for gradual adoption, and you can
      use as little or as much React as you need. Whether you want to get a
      taste of React, add some interactivity to a simple HTML page, or start a
      complex React-powered app, the links in this section will help you get
      started. Online Playgrounds If you’re interested in playing around with
      React, you can use an online code playground. Try a Hello World template
      on CodePen, CodeSandbox, or Stackblitz. If you prefer to use your own text
      editor, you can also download this HTML file, edit it, and open it from
      the local filesystem in your browser. It does a slow runtime code
      transformation, so we’d only recommend using this for simple demos. Add
      React to a Website You can add React to an HTML page in one minute. You
      can then either gradually expand its presence, or keep it contained to a
      few dynamic widgets. Create a New React App When starting a React project,
      a simple HTML page with script tags might still be the best option. It
      only takes a minute to set up! As your application grows, you might want
      to consider a more integrated setup. There are several JavaScript
      toolchains we recommend for larger applications. Each of them can work
      with little to no configuration and lets you take full advantage of the
      rich React ecosystem.
      <div className="btnn">
        <button onClick={() => navigate("/")}>Go to Home</button>
        <button onClick={() => navigate("/about")}>Go to About</button>
      </div>
    </>
  );
}

export default Contact;
