import { createElement, useRef } from "react";

const Shape = ({ shape, id, setDesign }) => {
  const { height, width, color, xCoord, yCoord } = shape;
  const divRef = useRef(null);

  return createElement("div", {
    style: {
      height: height + "px",
      width: width + "px",
      backgroundColor: "#" + color,
      position: "absolute",
      top: yCoord + "px",
      left: xCoord + "px",
      zIndex: id,
    },
    ref: divRef,
  });
};

export default Shape;
