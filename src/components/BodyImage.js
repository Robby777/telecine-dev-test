import React, { useEffect } from "react";
import styled from "styled-components";
import BImageNews from "../assets/Desktop_Assets/Green_Header_Image.png";
import GraphImage from "../assets/Desktop_Assets/Graph_img.jpg";
import { withRouter } from "react-router";

const BodyImageWrapper = styled.div`
  height: auto;
  position: relative;
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    height: 100px;
  }
`;
const BodyImageNews = styled.img`
  padding: 0;
  margin: 0;
  min-height: 100px;
  width: 100%;
  //    @media(max-width:1100px){
  //     width:98vw;
  //    }
  @media (max-width: 700px) {
    width: 0vw;
  }
`;
const GallaryText = styled.h1`
   position:absolute;
   left:10%;
   color:#fff;
   z-index:2;
   @media(max-width:800px){
       font-size:25px;
   }
   @media(max-width:500px){
    font-size:20px;
   }
   @media(max-width:400px){
    font-size:15px;
   }
}

`;
const SmallScreenDiv = styled.div`
   position:absolute;
    z-index:-1;
   color:#fff;
   top:0%;
   width:100%;
   @media(max-width:700px){
    height:100px;
    z-index:2;
    background-color:${(props) => props.colorCode};
   }

}`;
const BodyImage = (props) => {
  var PathName = window.location.pathname;
  useEffect(() => {}, [PathName]);
  return (
    <BodyImageWrapper>
      <SmallScreenDiv
        colorCode={PathName === "/graph" ? "#8e0e41" : "#32936f"}
      />
      <GallaryText>
        {PathName === "/graph" ? "Graph" : "News Gallery"}
      </GallaryText>
      <BodyImageNews
        src={PathName === "/graph" ? GraphImage : BImageNews}
        alt="body image"
      />
    </BodyImageWrapper>
  );
};

export default withRouter(BodyImage);
