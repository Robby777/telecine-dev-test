import React from "react";
import styled from "styled-components";

const NewsTextContainer = styled.div`
  width: 100%;
  padding: 0px 3rem;
  box-sizing: border-box;
  @media (max-width: 500px) {
    position: relative;
    top: -45px;
  }
`;
const NewsTitle = styled.h1`
  color: #32936f;
  text-align: left;
  font-family: Museo Sans;
  font-size: 42pt;
  @media (max-width: 700px) {
    font-size: 22pt;
  }
  @media (max-width: 428px) {
    font-size: 18pt;
  }
  @media (max-width: 380px) {
    font-size: 15pt;
  }
`;
const NewsSummary = styled.p`
  color: #000000;
  text-align: left;
  font-family: Museo Sans;
  font-size: 21pt;
  @media(max-width:700px){
    font-size: 16pt;
  }
  @media (max-width: 428px) {
    font-size: 13pt;
  }
  @media (max-width: 380px) {
    font-size: 12pt;
  }
`;

function NewsText(props) {
  return (
    <NewsTextContainer>
      <NewsTitle>{props.newsData.title}</NewsTitle>
      <NewsSummary>{props.newsData.summary}</NewsSummary>
    </NewsTextContainer>
  );
}

export default NewsText;
