import React from "react";
import styled from "styled-components";
import BarGraph from "./BarGraph";

const BarGraphWrapper = styled.div`
  display: flex;
  height: 100%;
  box-sizing: border-box;
  @media (max-width: 700px) {
    align-items: center;
    justify-content: center;
    flex-flow:column;
    flex-direction: column-reverse;
  }
`;

const GraphSectionWrapper = styled.div`
  align-self: center;
`;

const TextSectionWrapper = styled.div`
  font-family: Museo Sans;
  font-size: 40pt;
  color: #8e0e41;
  padding-top: 60px;
  
  padding-left: 25px @media (max-width: 1800px) {
    font-size: 30pt;
  }
  @media (max-width: 1500px) {
    font-size: 25pt;
  }
  @media (max-width: 1500px) {
    font-size: 20pt;
  }
  @media (max-width: 1170px) {
    font-size: 20pt;
  }
  @media (max-width: 700px) {
  display:flex;
  width:60vw;
  justify-content:space-between;
  align-items:center;
  }
  @media (max-width: 500px) {
    font-size: 15pt;
    }
`;

function GraphCompo() {
  const firstRandomNumber = Math.floor(Math.random() * 91);
  const secondRandomNumber = Math.floor(Math.random() * 91);

  return (
    <BarGraphWrapper>
      <GraphSectionWrapper>
        <BarGraph
          firstNumber={firstRandomNumber}
          secondNumber={secondRandomNumber}
        />
      </GraphSectionWrapper>
      <TextSectionWrapper>
        <div>January: {firstRandomNumber}</div>
        <div>February: {secondRandomNumber}</div>
      </TextSectionWrapper>
    </BarGraphWrapper>
  );
}

export default GraphCompo;
