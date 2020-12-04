import React, { useState } from "react";
import styled from "styled-components";

function Item(props) {
  const [isOpen, setIsOpen] = useState(false);

  const showSubNav = () => {
    setIsOpen(!isOpen);
  };
  const ItemStyle = styled.li`
    display: flex;
    border: 1px solid white;
    border-radius: 4px;
    color: white;
    width: 250px;
    background: rgb(20, 189, 211, 0.6);
    margin-top: 2px;
    margin-bottom: 2px;
    padding: 10px;
    cursor: pointer;
  `;

  const SubItemStyled = styled.li`
    border: 1px solid white;
    padding: 10px;
    color: white;
    list-style: none;
    border-radius: 4px;
    margin: 2px;
    transition: 0.1s ease-in-out;
    background-color: rgb(20, 189, 211, 0.1);

    cursor: pointer;

    &:hover {
      background-color: #fcb001;
    }
  `;

  const SideContainer = styled.div`
    max-width: 250px;
  `;

  return (
    <SideContainer>
      <ItemStyle onClick={props.row.subNav && showSubNav}>
        <div>
          {props.row.subNav && isOpen
            ? props.row.openIcon
            : props.row.closeIcon}
          {props.row.title}
        </div>
      </ItemStyle>
      <div>
        {isOpen &&
          props.row.subNav.map((item, index) => {
            return (
              // Passa informações para o parent através de props funcionais (SideNav é o parent)
              <SubItemStyled>
                <li
                  key={index}
                  onClick={() =>
                    props.submit({
                      name: item.name,
                      picture: item.image,
                      description: item.description,
                    })
                  }
                >
                  {item.name}
                </li>
              </SubItemStyled>
            );
          })}
      </div>
    </SideContainer>
  );
}

export default Item;
