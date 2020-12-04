import { Data } from "./SidebarData";
import { useState } from "react";
import Item from "./SideItem";
import { FiMenu } from "react-icons/fi";
import styled from "styled-components";

function SideBar(props) {
  const load = (info) => {
    // Carrega as informações para o props submit, que o app vai jogar dentro do seu state
    props.submit(info);
  };

  const [hamburguerOpen, setOpen] = useState(false);

  const SideMenu = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px;
    height: 100%;

    @media (max-width: 768px) {
      display: ${({ open }) => (hamburguerOpen ? "flex" : "none")};
      position: ${({ open }) => (hamburguerOpen ? "fixed" : "relative")};
      background: rgba(0, 0, 0, 0.8);
      margin: 0;
      top: 0;
      padding-top: 80px;
    }
  `;

  const Menu = styled(FiMenu)`
    color: white;
  `;

  const MenuStyle = styled.div`
    transition: 0.25s;
    top: 0;
    position: fixed;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    display: none;
    margin: 10px;
    z-index: 999;

    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
  `;

  return (
    // A props submit está recebendo os valores passados pelo child e usando eles como arumento da arrow function
    <div>
      <MenuStyle>
        <Menu
          size="30px"
          open={hamburguerOpen}
          onClick={() => setOpen(!hamburguerOpen)}
        />
      </MenuStyle>
      <SideMenu>
        {Data.map((row, index) => {
          return <Item submit={load} row={row} key={index} />;
        })}
      </SideMenu>
    </div>
  );
}

export default SideBar;
