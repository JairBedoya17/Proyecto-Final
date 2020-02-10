import React from "react";
import LogoWhite from "../../../../assets/img/png/logo-white.png";
import SocialLink from "../../SocialLinks";

import "./MyInfo.scss";

export default function MyInfo() {
  return (
    <div className="my-info">
      <img src={LogoWhite} alt="LAB PUCE" />
      <h4>
        Este proyecto es realizado para la materia de graficacion y animacion.
      </h4>
      <SocialLink />
    </div>
  );
}
