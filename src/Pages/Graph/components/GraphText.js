import React from "react";
import styled from "styled-components";

const GraphTextContainer = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  font-family: Museo Sans;
  color: #8e0e41;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  @media(max-width:700px){
    align-items: center;
  }
`;

const MainHeading = styled.div`
  font-size: 136pt;
 
  @media (max-width: 1500px) {
    font-size: 90pt;
  }
  @media (max-width: 1300px) {
    font-size: 80pt;
  }
  @media (max-width: 1170px) {
    font-size: 65pt;
  }
  @media (max-width: 700px) {
    font-size: 21pt;
    justify-content: center;
  }
  @media (max-width: 370px) {
    font-size: 19pt;
    justify-content: center;
  }
  @media (max-width: 332px) {
    font-size: 17pt;
    justify-content: center;
  }
  @media (max-width: 300px) {
    font-size: 16pt;
    justify-content: center;
  }
`;

const SubHeading = styled.div`
  font-size: 80pt;
  @media (max-width: 1500px) {
    font-size: 60pt;
  }
  @media (max-width: 1400px) {
    font-size: 50pt;
  }
  @media (max-width: 1170px) {
    font-size: 40pt;
  }
  @media (max-width: 700px) {
    font-size: 15pt;
    justify-content: center;
  }
`;

function GraphText() {
  return (
    <GraphTextContainer>
      <MainHeading>Canadian Election Bar Chart</MainHeading>
      <SubHeading>Election turnout</SubHeading>
    </GraphTextContainer>
  );
}

export default GraphText;
