import React, { useState } from "react";
import styled from "styled-components";
import SideDrawer from "../SideDrawer";

const DrawerToggleDiv = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 21px 0;
  margin-right: 1%;
  box-sizing: border-box;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
  @media (max-width: 650px) {
    padding: 10px 0;
  }
`;
const DrawerDiv = styled.div`
  width: 100%;
  height: 5px;
  background-color: black;
  @media (min-width: 700px) {
    display: none;
  }
`;
const DrawerToggle = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <DrawerToggleDiv onClick={sideDrawerToggleHandler}>
      {showSideDrawer && (
        <SideDrawer
          setShowSideDrawer={setShowSideDrawer}
          open={showSideDrawer}
        />
      )}
      {!showSideDrawer && <DrawerDiv></DrawerDiv>}
      {!showSideDrawer && <DrawerDiv></DrawerDiv>}
      {!showSideDrawer && <DrawerDiv></DrawerDiv>}
    </DrawerToggleDiv>
  );
};
export default DrawerToggle;
