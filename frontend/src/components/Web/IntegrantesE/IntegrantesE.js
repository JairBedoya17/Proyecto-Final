import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import Aaron from "../../../assets/img/jpg/aaron.png";
import Jair from "../../../assets/img/jpg/Jair.jpg";
import Jhonny from "../../../assets/img/jpg/Jhonny.jpg";
import Kristy from "../../../assets/img/jpg/Kristy.jpeg";

import "./IntegrantesE.scss";

export default function IntegrantesE() {
  return (
    <Row className="home-courses">
      <Col lg={24} className="home-courses__title">
        <h2>Integrantes del proyecto</h2>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={Aaron}
              title="Aaron Jaramillo"
              subtitle="Estudiante de la Carrera de Sistemas"
              link="https://aaronjaramillo.me/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={Jair}
              title="Jair Bedoya"
              subtitle="Estudiante de la Carrera de Sistemas"
              link="https://jairbedoya.com/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={Jhonny}
              title="Jhonny Guevara"
              subtitle="Estudiante de la Carrera de Sistemas"
              link="https://jhonnyguevara.me/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={Kristy}
              title="Kristy Mina"
              subtitle="Estudiante de la Carrera de Sistemas"
              link="https://kristymina.com/"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

function CardCourse(props) {
  const { image, title, subtitle, link } = props;
  const { Meta } = Card;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card
        className="home-courses__card"
        cover={<img src={image} alt={title} />}
        actions={[<Button>BLOG PERSONAL</Button>]}
      >
        <Meta title={title} description={subtitle} />
      </Card>
    </a>
  );
}
