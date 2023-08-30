import canvasDimensions from "./constants";

export const addShape = () => {
  const width = Math.floor((Math.random() * canvasDimensions.canvasWidth) / 2);
  const height = Math.floor(
    (Math.random() * canvasDimensions.canvasHeight) / 2
  );

  //halving the above values to ensure the shapes are relatively smaller, so that they can be dragged easily.

  const xCoord = Math.floor(Math.random() * width);
  const yCoord = Math.floor(Math.random() * height);
  const color = Math.floor(Math.random() * 16777215).toString(16);
  const shapeToAdd = {
    width,
    height,
    xCoord,
    yCoord,
    color,
  };

  return shapeToAdd;
};
