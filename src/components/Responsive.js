import { useMediaQuery } from "react-responsive";

const LaptopL = ({ children }) => {
  const view = useMediaQuery({ minWidth: 1101 });
  return view ? children : null;
};

const LaptopS = ({ children }) => {
  const view = useMediaQuery({ minWidth: 992, maxWidth: 1100 });
  return view ? children : null;
};

const Tablet = ({ children }) => {
  const view = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return view ? children : null;
};

const Mobile = ({ children }) => {
  const view = useMediaQuery({ maxWidth: 767 });
  return view ? children : null;
};

export { LaptopL, LaptopS, Tablet, Mobile };
