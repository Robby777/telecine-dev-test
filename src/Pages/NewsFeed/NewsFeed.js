import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import NewsCompo from "./components/NewsCompo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slider.css";

const SliderWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: calc(100vh - 329px);
`;

const NewsFeed = (props) => {
  const [jsonData, setJsonData] = useState();

  let settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slides",
  };
  const data = async () => {
    await axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://feeds.npr.org/1001/feed.json"
      )
      .then((response) => {
        setJsonData(response.data.items.slice(0, 10));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {jsonData &&
          jsonData.map((data, index) => (
            <NewsCompo key={index} imageSrc={data.image} newsText={data} />
          ))}
      </Slider>
    </SliderWrapper>
  );
};

export default NewsFeed;
