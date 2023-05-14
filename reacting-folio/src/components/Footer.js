import React from 'react';

import GitHub from "../assets/github-mark.png";
import LinkedInLogo from "../assets/LI-In-Bug.png";

const Footer = () => {
  return (
    <div>
      <ul className="flex justify-center mx-auto">
        <li>
          <a href="https://github.com/hef9874">
            <img src={GitHub} alt="gitHub Logo" style={{width: '50px'}}/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/hef9874/">
            <img src={LinkedInLogo} alt="linkedIn Logo" style={{width: '50px'}} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;