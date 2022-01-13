import React from "react";
import styled from "styled-components";
import { CarouselL, CarouselS } from "./Responsive";
import Swipe from "./Swipe";

import slide1 from "../images/slide/slide_1.jpeg";
import slide2 from "../images/slide/slide_2.jpeg";
import slide3 from "../images/slide/slide_3.jpeg";
import slide4 from "../images/slide/slide_4.jpeg";
import slide5 from "../images/slide/slide_5.jpeg";
import slide6 from "../images/slide/slide_6.jpeg";
import slide7 from "../images/slide/slide_7.jpeg";
import slide8 from "../images/slide/slide_8.jpeg";
import slide9 from "../images/slide/slide_9.jpeg";
import slide10 from "../images/slide/slide_10.jpeg";
import slide11 from "../images/slide/slide_11.jpeg";

const Container = styled.div`
  width: 100%;
`;

const Slide = styled.div`
  width: ${(props) => props.width || `${1060 * 13}px`};
  display: flex;
  overflow: hidden;
`;

const Img = styled.div`
  position: relative;
  width: ${(props) => props.width || "1060px"};
  height: ${(props) => props.height || 300}px;
  border-radius: 4px;
  background-image: url("${(props) => props.url}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: 10px;
  margin-right: 10px;
`;

const Carousel = () => {
  return (
    <Container>
      <Swipe>
        <CarouselS>
          <Slide width="calc(1300% - 1040px)">
            <Img url={slide11} width="calc(100%/13)" height={183} />
            <Img url={slide1} width="calc(100%/13)" height={183} />
            <Img url={slide2} width="calc(100%/13)" height={183} />
            <Img url={slide3} width="calc(100%/13)" height={183} />
            <Img url={slide4} width="calc(100%/13)" height={183} />
            <Img url={slide5} width="calc(100%/13)" height={183} />
            <Img url={slide6} width="calc(100%/13)" height={183} />
            <Img url={slide7} width="calc(100%/13)" height={183} />
            <Img url={slide8} width="calc(100%/13)" height={183} />
            <Img url={slide9} width="calc(100%/13)" height={183} />
            <Img url={slide10} width="calc(100%/13)" height={183} />
            <Img url={slide11} width="calc(100%/13)" height={183} />
            <Img url={slide1} width="calc(100%/13)" height={183} />
          </Slide>
        </CarouselS>
        <CarouselL>
          <Slide>
            <Img url={slide11} />
            <Img url={slide1} />
            <Img url={slide2} />
            <Img url={slide3} />
            <Img url={slide4} />
            <Img url={slide5} />
            <Img url={slide6} />
            <Img url={slide7} />
            <Img url={slide8} />
            <Img url={slide9} />
            <Img url={slide10} />
            <Img url={slide11} />
            <Img url={slide1} />
          </Slide>
        </CarouselL>
      </Swipe>
    </Container>
  );
};

export default Carousel;
