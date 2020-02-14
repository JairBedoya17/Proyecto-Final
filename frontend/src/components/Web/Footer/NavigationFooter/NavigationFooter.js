import React from "react";
import { Row, Col, Icon } from "antd";
import { Link } from "react-router-dom";

import "./NavigationFooter.scss";

export default function NavigationFooter() {
  return (
    <Row className="navigation-footer">
      <Col>
        <h3>Navegación</h3>
      </Col>
      <Col md={12}>
        <RenderListLeft />
      </Col>
    </Row>
  );
}

function RenderListLeft() {
  return (
    <ul>
      <li>
        <a href="http://localhost:3000/admin/login">
          <Icon type="user" spin /> Iniciar sesión
        </a>
      </li>
    </ul>
  );
}
