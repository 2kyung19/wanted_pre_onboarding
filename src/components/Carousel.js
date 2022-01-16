import React, { useState, useEffect, useRef } from "react";
import useWindowSize from "../hooks/useWindowSize";
import styled from "styled-components";
import { slideList } from "./SlideList";

const Container = styled.div`
  width: 100%;
`;

const Slide = styled.div`
  width: ${(props) => props.width || `${1084 * 10}px`};
  display: flex;
  overflow: hidden;
  transition: transform ${(props) => props.speed}ms;
  transform: translateX(-${(props) => props.transform}px);
`;

const Box = styled.div`
  position: relative;
  width: ${(props) => props.width || "1060px"};
  height: ${(props) => props.height || 300}px;
  margin-left: ${(props) => props.margin || 12}px;
  margin-right: ${(props) => props.margin || 12}px;
`;

const Img = styled.div`
  width: 100%;
  height: ${(props) => props.height || 300}px;
  border-radius: 4px;
  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat
  filter: ${(props) => props.filter || "brightness(50%)"};
`;

const Description = styled.div`
  position: absolute;
  width: 330px;
  height: 146px;
  bottom: 28px;
  left: 24px;
  transition: opacity 200ms;
  opacity: ${(props) => props.opacity || 0};
  background: #ffffff;
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

const LinkIcon = styled.svg`
  position: relative;
  top: ${(props) => props.top || 2}px;
  width: ${(props) => props.size || 14}px;
  height: ${(props) => props.size || 14}px;
  fill: ${(props) => props.color || "#3366ff"};
`;

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SlideBtn = styled.div`
  position: fixed;
  width: 30px;
  height: 60px;
  border-radius: 15px;
  top: 195px;
  left: ${(props) => props.left}px;
  right: ${(props) => props.right}px;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1;
`;

const Carousel = () => {
  const [loading, setLoad] = useState(0);
  const width = useWindowSize(); // window width size

  const [slideBoxS, setSlideBoxS] = useState(0);
  const [slideBoxL, setSlideBoxL] = useState(0);

  const [slide, setSlide] = useState(false);
  const [index, setIndex] = useState(0); // start slide
  const [speed, setSpeed] = useState(0); // auto slide speed
  const slideS = useRef(null);
  const slideL = useRef(null);

  const [touchStart, setTouchStart] = useState(0); // swipe
  const [touchEnd, setTouchEnd] = useState(0); // swipe

  // slide image filter & description
  const changeSlideStyle = (now, next, later) => {
    if (slideL.current !== null) {
      slideL.current.children[now].children[0].style.filter = "brightness(50%)";
      slideL.current.children[next].children[0].style.filter =
        "brightness(100%)";
      slideL.current.children[later].children[0].style.filter =
        "brightness(50%)";

      if (next === 7 || next === 1) {
        slideL.current.children[next].children[1].style.transition =
          "opacity 0ms";
      } else {
        slideL.current.children[now].children[1].style.transition =
          "opacity 200ms";
        slideL.current.children[next].children[1].style.transition =
          "opacity 200ms";
        slideL.current.children[later].children[1].style.transition =
          "opacity 200ms";
      }
      slideL.current.children[now].children[1].style.opacity = "0";
      slideL.current.children[next].children[1].style.opacity = "1";
      slideL.current.children[later].children[1].style.opacity = "0";
    }
    if (slideS.current !== null) {
      slideS.current.children[now].children[0].style.filter = "brightness(50%)";
      slideS.current.children[next].children[0].style.filter =
        "brightness(100%)";
      slideS.current.children[later].children[0].style.filter =
        "brightness(50%)";
    }
  };

  const moveSlideLeft = () => {
    if (index <= 1) {
      setTimeout(() => {
        changeSlideStyle(index, 7, 6);
      }, 300);

      setSpeed(0);
      setIndex(7);

      setTimeout(() => {
        changeSlideStyle(7, 6, 5);
        setSpeed(500);
        setIndex(6);
      }, 300);
    } else {
      changeSlideStyle(index, index - 1, index - 2);
      setSpeed(500);
      setIndex(index - 1);
    }
  };

  const moveSlideRight = () => {
    if (index >= 7) {
      changeSlideStyle(index, 1, 2);
      setSpeed(0);
      setIndex(1);

      setTimeout(() => {
        changeSlideStyle(2, 3, 4);
        setSpeed(500);
        setIndex(2);
      }, 300);
    } else {
      changeSlideStyle(index, index + 1, index + 2);
      setSpeed(500);
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
    if (touchStart - touchEnd > 70) moveSlideRight();
    if (touchStart - touchEnd < -70) moveSlideLeft();
  };

  // window width -> slide box width 변경
  useEffect(() => {
    try {
      changeSlideStyle(index - 1, index, index + 1);

      setSlide(true);
      setSpeed(0);
    } catch {
      console.log("loading!");
    }
    if (slideS.current !== null) setSlideBoxS(slideS.current.offsetWidth / 10);
    if (slideL.current !== null) setSlideBoxL(slideL.current.offsetWidth / 10);
  }, [index, width]);

  // auto slide
  useEffect(() => {
    const loop = setInterval(() => {
      if (slide) moveSlideRight();
    }, 4000);

    return () => clearInterval(loop);
  }, [index]);

  useEffect(() => {
    if (loading < 2) {
      moveSlideRight();
      setLoad(loading + 1);
    }
  }, [loading]);

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
        {width < 1200 ? (
          <Slide
            width="calc(1000% - 1000px + 200px)"
            ref={slideS}
            transform={slideBoxS * index - 40}
            speed={speed}
          >
            {slideList.map((s, index) => (
              <Box
                key={index}
                width="calc(100%/10)"
                height={281.94}
                margin={10}
              >
                <Img src={s.src} height={183} />
                <H2 top={20} weight="bold">
                  {s.title}
                </H2>
                <H2 top={6} font={14} color="#666666">
                  {s.sub}
                </H2>
                <Link>
                  <span>바로가기 </span>
                  <LinkIcon viewBox="0 0 18 18">
                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                  </LinkIcon>
                </Link>
              </Box>
            ))}
          </Slide>
        ) : (
          <>
            <SlideBtn right={(width - 1060) / 2 - 75} onClick={moveSlideRight}>
              <Center>
                <LinkIcon viewBox="0 0 18 18" size={16} color="rgb(51,51,51)">
                  <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                </LinkIcon>
              </Center>
            </SlideBtn>
            <SlideBtn left={(width - 1060) / 2 - 75} onClick={moveSlideLeft}>
              <Center>
                <LinkIcon viewBox="0 0 18 18" size={16} color="rgb(51,51,51)">
                  <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z" />
                </LinkIcon>
              </Center>
            </SlideBtn>
            <Slide
              transform={slideBoxL * index - (width - 1084) / 2}
              ref={slideL}
              speed={speed}
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
                      <LinkIcon viewBox="0 0 18 18">
                        <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                      </LinkIcon>
                    </Link>
                  </Description>
                </Box>
              ))}
            </Slide>
          </>
        )}
      </div>
    </Container>
  );
};

export default Carousel;
