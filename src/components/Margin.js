import React from "react";
import styled from "styled-components";
import { Laptop, NotLaptop } from "./Responsive";

const Container = styled.div`
  width: 100%;
`;

const Blank = styled.div`
  width: 100%;
  height: ${(props) => props.margin}px;
`;

const Margin = () => {
  return (
    <Container>
      <Laptop>
        <Blank margin={75} />
      </Laptop>
      <NotLaptop>
        <Blank margin={135} />
      </NotLaptop>
    </Container>
  );
};

export default Margin;
