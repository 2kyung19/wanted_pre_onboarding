import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { CarouselL, CarouselS } from "./Responsive";
import { slideList } from "./SlideList";

const Container = styled.div`
  width: 100%;
`;

const Slide = styled.div`
  width: ${(props) => props.width || `${1060 * 8 + 160}px`};
  display: flex;
  overflow: hidden;
  transition: ${(props) => props.animation || "transform 400ms"};
  transform: translateX(-${(props) => props.transform}px);
`;

const Box = styled.div`
  position: relative;
  width: ${(props) => props.width || "1060px"};
  height: ${(props) => props.height || 300}px;
  margin-left: 10px;
  margin-right: 10px;
`;

const Img = styled.div`
  width: 100%;
  height: ${(props) => props.height || 300}px;
  border-radius: 4px;
  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Description = styled.div`
  position: absolute;
  width: 330px;
  height: 146px;
  bottom: 28px;
  left: 34px;
  background-color: #ffffff;
  border-radius: 4px;
`;

const Hr = styled.hr`
  border: 0px;
  border-top: 1px solid #ececec;
  padding: 0px;
  margin: 0px;
`;

const H2 = styled.div`
  height: ${(props) => props.height || "auto"};
  margin-top: ${(props) => props.top || 0}px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 0px;
  text-align: ${(props) => props.align || "center"};
  font-size: ${(props) => props.font || 18}px;
  font-weight: ${(props) => props.weight || "normal"};
  font-family: sans-serif;
  color: ${(props) => props.color || "#333333"};
  line-height: ${(props) => props.line + props.font || props.font}px;
`;

const Link = styled.div`
  text-align: ${(props) => props.align || "center"};
  margin: ${(props) => props.margintb || 12}px;
  margin-left: ${(props) => props.marginlr || 20}px;
  margin-right: ${(props) => props.marginlr || 20}px;
  font-weight: bold;
  font-size: 14px;
  color: #3366ff;
`;

const useWindowSize = () => {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

const Carousel = () => {
  const width = useWindowSize();
  const [index, setIndex] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [animation, setAnimation] = useState("transform 500ms");
  const slideS = useRef(null);
  const slideL = useRef(null);
  const [smallSlide, setSmallSlide] = useState(0);
  const [largeSlide, setLargeSlide] = useState(0);

  const slideLeft = () => {
    if (index === 1) {
      setAnimation("none");
      setIndex(6);
    } else {
      setAnimation("transform 500ms");
      setIndex(index - 1);
    }
  };

  const slideRight = () => {
    if (index === 7) {
      setAnimation("none");
      setIndex(1);
    } else {
      setAnimation("transform 500ms");
      setIndex(index + 1);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches ? e.touches[0].clientX : e.clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches ? e.touches[0].clientX : e.clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 70) {
      slideRight();
    }

    if (touchStart - touchEnd < -70) {
      slideLeft();
    }
  };

  useEffect(() => {
    if (slideS.current !== null) {
      setSmallSlide(slideS.current.offsetWidth / 8);
    }
    if (slideL.current !== null) {
      setLargeSlide(slideL.current.offsetWidth / 8);
    }
    console.log(index, width);
  }, [index, width]);

  useEffect(() => {
    const loop = setInterval(() => {
      slideRight();
    }, 3000);

    return () => clearInterval(loop);
  }, [index]);

  return (
    <Container>
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
      >
        <CarouselS>
          <Slide
            width="calc(800% - 800px + 160px)"
            transform={smallSlide * index - 40}
            animation={animation}
            ref={slideS}
          >
            {slideList.map((s, index) => (
              <Box key={index} width="calc(100%/8)" height={281.94}>
                <Img src={s.src} height={183} />
                <H2 top={20} weight="bold">
                  {s.title}
                </H2>
                <H2 top={6} font={14} color="#666666">
                  {s.sub}
                </H2>
                <Link>
                  <span>바로가기 </span>
                  <span>{`>`}</span>
                </Link>
              </Box>
            ))}
          </Slide>
        </CarouselS>
        <CarouselL>
          <Slide
            transform={largeSlide * index - (width - 1060) / 2}
            animation={animation}
            ref={slideL}
          >
            {slideList.map((s, index) => (
              <Box key={index} height={300}>
                <Img src={s.src} />
                <Description>
                  <H2 font={20} line={10} top={20} align="left" weight="bold">
                    {s.title}
                  </H2>
                  <H2
                    font={14}
                    line={10}
                    height="44px"
                    align="left"
                    color="#333333"
                  >
                    {s.sub}
                  </H2>
                  <Hr />
                  <Link marginlr={21} margintb={16} align="left">
                    <span>바로가기 </span>
                    <span>{`>`}</span>
                  </Link>
                </Description>
              </Box>
            ))}
          </Slide>
        </CarouselL>
      </div>
    </Container>
  );
};

export default Carousel;
