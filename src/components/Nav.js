import React from "react";
import styled from "styled-components";
import { LaptopL, LaptopS, Tablet, Mobile } from "./Responsive";
import { LapLSearch, LapSSearch, TablSearch } from "./Search";
import wanted from "../images/logo.png";

// icon
const MenuIcon = styled.img`
  width: 17px;
  height: 14px;
  object-fit: contain;
  margin-right: 15px;
`;

// layout
const Container = styled.div`
  width: 100%;
  height: ${(props) => props.height || 50}px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 /10%);
  z-index: 100;
`;

const MainBar = styled.div`
  width: ${(props) => props.width || "93%"};
  height: ${(props) => props.height || 50}px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  color: rgb(51, 51, 51);
  font-family: sans-serif;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
`;

const SubBar = styled.div`
  width: ${(props) => props.width || "90%"};
  height: 50px;
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  color: rgb(51, 51, 51);
  font-family: sans-serif;
  font-size: 13px;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
`;

const MobMainBar = styled.div`
  height: 60px;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-family: sans-serif;
  font-size: 14px;
  line-height: 20px;
`;

const MobSubBar = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  top: 60px;
  height: 50px;
  align-items: center;
  font-family: sans-serif;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
`;

// menu
const Ul = styled.ul`
  padding: 0;
  display: flex;
  flex: 1 1;
  justify-content: space-evenly;
`;

const Li = styled.li`
  height: inherit;
  display: inline-block;
  padding-left: ${(props) => props.padding || 15}px;
  padding-right: ${(props) => props.padding || 15}px;
  padding-bottom: ${(props) => props.paddingB || 0}px;
  font-weight: 600;
  font-size: ${(props) => props.font || 14}px;
`;

const Super = styled.span`
  position: absolute;
  top: ${(props) => props.top || 7}px;
  color: rgb(64, 101, 246);
  font-size: 5px;
`;

const menu = [
  "홈",
  "채용",
  "이벤트",
  "직군별 연봉",
  "이력서",
  "커뮤니티",
  "프리랜서",
  "AI 합격예측",
];

const Logo = () => {
  return (
    <div>
      <MenuIcon
        src="https://static.wanted.co.kr/images/icon-menu.png"
        alt="hamberger menu"
      ></MenuIcon>
      <img src={wanted} height={17} alt="wanted" />
    </div>
  );
};

const LapLNav = () => {
  return (
    <Container>
      <MainBar width="1060px">
        <Logo />
        <div>
          {menu.slice(1).map((value, index) => (
            <Li key={value}>
              {value}
              {index === 4 ? <Super>New</Super> : null}
              {index === 6 ? <Super>Beta</Super> : null}
            </Li>
          ))}
        </div>
        <LapLSearch />
      </MainBar>
    </Container>
  );
};

const LapSNav = () => {
  return (
    <Container>
      <MainBar>
        <Logo />
        <Ul>
          {menu.slice(1).map((value, index) => (
            <Li key={value} font={13}>
              {value}
              {index === 4 ? <Super>New</Super> : null}
              {index === 6 ? <Super>Beta</Super> : null}
            </Li>
          ))}
        </Ul>
        <LapSSearch />
      </MainBar>
    </Container>
  );
};

const TablNav = () => {
  return (
    <Container height={110}>
      <MainBar width="90%" height={60}>
        <Logo />
      </MainBar>
      <SubBar>
        <div>
          {menu.slice(1).map((value, index) => (
            <Li key={value} font={13} padding={10} paddingB={10}>
              {value}
              {index === 4 ? <Super top={3}>New</Super> : null}
              {index === 6 ? <Super top={3}>Beta</Super> : null}
            </Li>
          ))}
        </div>
        <TablSearch />
      </SubBar>
    </Container>
  );
};

const MobNav = () => {
  return (
    <Container height={110}>
      <MobMainBar>
        <Logo />
      </MobMainBar>
      <MobSubBar>
        <div>
          {menu.slice(0, 3).map((value) => (
            <Li key={value} padding={10} paddingB={10}>
              {value}
            </Li>
          ))}
        </div>
        <TablSearch />
      </MobSubBar>
    </Container>
  );
};

const Nav = () => {
  return (
    <div>
      <LaptopL>
        <LapLNav />
      </LaptopL>
      <LaptopS>
        <LapSNav />
      </LaptopS>
      <Tablet>
        <TablNav />
      </Tablet>
      <Mobile>
        <MobNav />
      </Mobile>
    </div>
  );
};

export default Nav;
