import React, { useState } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const Swipe = ({ children }) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches ? e.touches[0].clientX : e.clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches ? e.touches[0].clientX : e.clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 70) {
      console.log("오른쪽!");
    }

    if (touchStart - touchEnd < -70) {
      console.log("왼쪽!");
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
    >
      {children}
    </div>
  );
};

Swipe.propsTypes = {
  children: PropTypes.node.isRequired,
};

export default Swipe;
