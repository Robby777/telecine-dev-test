import React from 'react';
import styled from "styled-components";
import LeftArrowButton from "../../../assets/Desktop_Assets/Left_Arrow_Button.png";
import RightArrowButton from "../../../assets/Desktop_Assets/Right_Arrow_Button.png";
import NewsText from "./NewsText";

const NewsWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-flow:column;
    width:100%;
`
const ImageContainer = styled.div`
    width:80%;
    margin:auto;
    display:flex;
    justify-content:center;
    align-item:center;
    position:relative;
    margin-bottom:3rem;
    @media(max-width:500px){
        width:100%;
      }
`
const LeftArrow = styled.img`
    position:absolute;
    top: 39%;
    z-index:1;
    height: 4rem;
    left:0%;
    cursor:pointer;
    transition:all .2s ease-in-out;
    :hover{
        background-color:lightgray;
        border-radius:50%;
        transform:scale(1.1);
    }
    @media(max-width:850px){
        height: 3rem;
    }
    @media(max-width:700px){
    height: 2rem;
    }
    @media(max-width:500px){
        top: 81%;
        left: 2%;
        background-color:#fff;
        border-radius:50%;
        opacity:.4;
        :hover{
            background-color:#fff;
            border-radius:50%;
        }
        
    }
   

`
const RightArrow = styled.img`
    position:absolute;
    position: absolute;
    z-index:1;
    top: 39%;
    height: 4rem;
    right: 0%;
    cursor:pointer;
    transition:all .2s ease-in-out;
    :hover{
        background-color:lightgray;
        border-radius:50%;
        transform:scale(1.1);
        
    }
    @media(max-width:850px){
        height: 3rem;
    }
    @media(max-width:700px){
        height: 2rem;
    }
    @media(max-width:500px){
        top: 81%;
        right: 2%;
        background-color:#fff;
        border-radius:50%;
        opacity:.4;
        :hover{
            background-color:#fff;
            border-radius:50%;
        }
    }
`
const NewsImage = styled.img`
    width:60%;
    height:50vh;
    // object-fit:contain;
    @media(max-width:850px){
        width:70%;
        height:40vh;
    }
    @media(max-width:700px){
    width:75%;
    height:35vh;
    }
    @media(max-width:500px){
        width:100%;
        height:35vh;
    }
`

const NewsCompo = (props) => {
    return (
        <NewsWrapper>
            <ImageContainer>
                <LeftArrow src={LeftArrowButton} alt="left arrow" onClick={() => document.querySelector('.slick-prev').click()} />
                <NewsImage src={props.imageSrc} alt="neews Image" />
                <RightArrow src={RightArrowButton} alt="right arrrow" onClick={() => document.querySelector('.slick-next').click()} />
            </ImageContainer>
            <NewsText newsData={props.newsText} />
        </NewsWrapper>
    );
}

export default NewsCompo;