import "./App.css";
import { useState } from "react";
import SideBar from "./components/SideBar/SideNav";
import styled from "styled-components";
import HomePage from "./components/HomePage/index";
import BackgroundVideo from "./components/BackgroundVideo/index";

function App() {
  const [infos, setInfos] = useState({
    name: "",
    picture: "",
    description: "",
  });

  const load = (info) => {
    // Pega as informações passadas através da prop submit e carrega elas no state
    setInfos(info);
  };

  const Main = styled.nav`
    display: flex;
    justify-content: space-between;
  `;

  const VerticalHr = styled.div`
    display: block;
    border: none;
    border: 2px solid white;
    opacity: 30%;
    margin: 30px;
    height: 100vh;
    width: 40px;

    @media screen and (max-width: 768px) {
      display: none;
    }
  `;

  const Title = styled.div`
    border-bottom: 5px solid #fcb001;
    width: fit-content;
    font-size: 13pt;
    text-align: center;
    margin: 30px auto;
    color: rgb(20, 189, 211);

    @media screen and (max-width: 768px) {
      font-size: 9pt;
    }
  `;

  return (
    <>
      <BackgroundVideo />
      <Title>
        <h1>Databank</h1>
      </Title>
      <Main>
        <SideBar submit={load} />
        <VerticalHr />
        <HomePage
          name={infos.name}
          picture={infos.picture}
          description={infos.description}
        />
      </Main>
    </>
  );
}

export default App;
