import { createElement, useEffect, useRef, useState } from "react";
import canvasDimensions from "./constants";

const Shape = ({ shape, id, setShapes, canvasRef }) => {
  const { height, width, color, xCoord, yCoord } = shape;

  const [isDragging, setIsDragging] = useState(false);
  const [offsets, setOffsets] = useState({ offsetX: 0, offsetY: 0 });

  const shapeRef = useRef(null);

  const handleMouseDown = (e) => {
    const canvas = canvasRef.current.getBoundingClientRect();
    const rect = shapeRef.current.getBoundingClientRect();

    const offsetX = e.clientX - rect.left + canvas.left;
    const offsetY = e.clientY - rect.top + canvas.top;

    console.log(
      e.clientX,
      e.clientY,
      rect.left,
      rect.top,
      canvas.left,
      canvas.top
    );

    setIsDragging(true);
    setOffsets({ offsetX, offsetY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const newX = e.clientX - offsets.offsetX;
    const newY = e.clientY - offsets.offsetY;

    // add boundary condition so that shape cannot be dragged outside of canvas

    if (
      newX < 0 ||
      newY < 0 ||
      newX > canvasDimensions.canvasWidth - width ||
      newY > canvasDimensions.canvasHeight - height
    )
      return;

    console.log({ newX, newY });

    setShapes((prev) => {
      const newDesign = [...prev];
      newDesign[id] = {
        ...newDesign[id],
        xCoord: newX,
        yCoord: newY,
      };
      return newDesign;
    });
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging]);

  return createElement("div", {
    style: {
      height: height + "px",
      width: width + "px",
      backgroundColor: "#" + color,
      position: "absolute",
      top: yCoord + "px",
      left: xCoord + "px",
      zIndex: id,
      cursor: isDragging ? "grabbing" : "grab",
    },
    ref: shapeRef,
    onMouseDown: handleMouseDown,
  });
};

export default Shape;
