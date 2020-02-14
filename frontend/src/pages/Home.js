import React from "react";
import { Helmet } from "react-helmet";
import MainBanner from "../components/Web/MainBanner";
import IntegrantesE from "../components/Web/IntegrantesE";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>LAB PUCE</title>
        <meta
          name="description"
          content="Home | Listado de salas"
          data-react-helmet="true"
        />
      </Helmet>
      <IntegrantesE />
    </>
  );
}
