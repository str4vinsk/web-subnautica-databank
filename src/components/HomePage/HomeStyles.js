import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  width: 70%;
  padding-top: 30px;
  align-items: flex-start;
  height: 100%;
  float: right;
  flex-direction: column;

  img {
    width: 70%;
  }

  h1 {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  pre {
    width: 70%;
    margin-bottom: 70px;
    text-align: left;
    white-space: pre-line;
    white-space: -moz-pre-line;
    white-space: -pre-line;
    white-space: -o-pre-line;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    margin: 0 auto;
  }
`;
