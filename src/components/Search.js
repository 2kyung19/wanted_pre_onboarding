import React from "react";
import styled from "styled-components";

import search from "../images/search.png";
import notification from "../images/notification.png";
import ellipsis from "../images/ellipsis.png";
import newIcon from "../images/N.png";
import profile from "../images/profile.png";

const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: ${(props) => props.height}px;
`;

const Box = styled.img`
  width: 18px;
  padding: 10px;
`;

const Bar = styled.span`
  font-size: 13px;
  color: #e1e2e3;
  padding: ${(props) => props.padding}px;
`;

const Button = styled.button`
  border: 1;
  box-shadow: none;
  border-style: solid;
  background-color: #ffffff;
  border-color: rgb(225, 226, 227);
  border-radius: 15px;
  border-width: 1px;
  color: rgb(102, 102, 102);
  width: 82px;
  height: 30px;
  font-size: 13px;
  text-align: center;
  vertical-align: middle;
  margin: 10px;
`;

const Icon = styled.div`
  float: right;
  align-items: center;
  width: ${(props) => props.width || 80}px;
  padding: 10px;
  padding-top: 0px;
  padding-bottom: ${(props) => props.paddingB || 0}px;
  display: flex;
  justify-content: space-between;
`;

const Profile = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  align-items: center;
  text-align: center;
  border: 1px solid;
  border-color: rgb(225, 226, 227);
  border-radius: 50%;
  margin-left: 10px;
`;

const Picture = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

const Tag = styled.span`
  position: absolute;
  top: -5px;
  left: 18px;
  background-color: rgb(64, 101, 246);
  width: 13px;
  height: 13px;
  text-align: center;
  border-radius: 5px;
  z-index: 100;
`;

const Img = styled.img`
  position: absolute;
  width: 5px;
  top: 4px;
  left: 4px;
`;

const New = () => {
  return (
    <Tag>
      <Img src={newIcon} />
    </Tag>
  );
};

const TablSearch = () => {
  return (
    <Icon paddingB={10}>
      <Box src={search} width={18} />
      <Div>
        <img src={notification} width={19} />
        <New />
      </Div>
      <Box src={ellipsis} width={17} />
    </Icon>
  );
};

const LapLSearch = () => {
  return (
    <Div>
      <Icon width={115}>
        <Box src={search} />
        <Div height={30}>
          <img src={notification} width={19} />
          <New />
        </Div>
        <Profile>
          <Picture src={profile} />
          <New />
        </Profile>
      </Icon>
      <Bar padding={15}>|</Bar>
      <Button>기업 서비스</Button>
    </Div>
  );
};

const LapSSearch = () => {
  return (
    <Div>
      <Icon width={100}>
        <Box src={search} />
        <Div height={30}>
          <img src={notification} width={19} />
          <New />
        </Div>
        <Profile>
          <Picture src={profile} />
          <New />
        </Profile>
      </Icon>
      <Bar padding={0}>|</Bar>
      <Button>기업 서비스</Button>
    </Div>
  );
};

export { LapLSearch, LapSSearch, TablSearch };
