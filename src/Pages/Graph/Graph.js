import React from "react";
import styled from "styled-components";
import GraphCompo from "./components/GraphCompo";
import GraphText from "./components/GraphText";

const GraphWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 200px);
  background-color: #fff;
  min-height: calc(100vh - 329px);
  margin-top: 30px;
  @media (max-width: 700px) {
    flex-flow: column;
    justify-content: flex-start;
  }
`;
const GraphFirstSection = styled.div`
  width: 100%
  height: auto;
  border: none;
  text-align: left;
`;
const GraphSecondSection = styled.div`
  width: 100%
  height: auto;
  border: none;
  min-width: 45vw;
`;

function Graph(props) {
  return (
    <GraphWrapper>
      <GraphFirstSection>
        <GraphText />
      </GraphFirstSection>
      <GraphSecondSection>
        <GraphCompo />
      </GraphSecondSection>
    </GraphWrapper>
  );
}

export default Graph;
