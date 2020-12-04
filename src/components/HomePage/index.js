import React from "react";
import { Page } from "./HomeStyles";

function HomePage(props) {
  return (
    <Page>
      <img src={props.picture} alt="" />
      <h1>{props.name}</h1>
      <pre>{props.description}</pre>
    </Page>
  );
}

export default HomePage;
