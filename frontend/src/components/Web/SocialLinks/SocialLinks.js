import React from "react";
import { ReactComponent as GitHubIcon } from "../../../assets/img/svg/github.svg";

import "./SocialLinks.scss";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://github.com/https-github-com-Jaky-Maiky/Proyecto-Final"
        className="github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </a>
    </div>
  );
}
