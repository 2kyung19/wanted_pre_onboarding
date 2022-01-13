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

const Laptop = ({ children }) => {
  const view = useMediaQuery({ minWidth: 992 });
  return view ? children : null;
};
const NotLaptop = ({ children }) => {
  const view = useMediaQuery({ maxWidth: 991 });
  return view ? children : null;
};

const CarouselL = ({ children }) => {
  const view = useMediaQuery({ minWidth: 1200 });
  return view ? children : null;
};

const CarouselS = ({ children }) => {
  const view = useMediaQuery({ maxWidth: 1199 });
  return view ? children : null;
};

export {
  LaptopL,
  LaptopS,
  Tablet,
  Mobile,
  Laptop,
  NotLaptop,
  CarouselL,
  CarouselS,
};
