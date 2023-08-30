import { canvasDimensions, shapes } from "./constants";

export const addShape = ({ shape }) => {
  switch (shape) {
    case shapes.rectangle:
      return addRectangle();
    case shapes.square:
      return addSquare();

    default:
      return addRectangle();
  }
};

const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const getShape = ({ width, height }) => {
  const xCoord = Math.floor(Math.random() * width);
  const yCoord = Math.floor(Math.random() * height);
  const color = getRandomColor();

  console.log({ width, height, xCoord, yCoord, color });

  return { width, height, xCoord, yCoord, color };
};

const addRectangle = () => {
  const width = Math.floor((Math.random() * canvasDimensions.canvasWidth) / 2);
  const height = Math.floor(
    (Math.random() * canvasDimensions.canvasHeight) / 2
  );
  return getShape({ width, height });
};

// halving the values in order to have relatively smaller shapes to work with

const addSquare = () => {
  const side = Math.floor((Math.random() * canvasDimensions.canvasWidth) / 2);
  return getShape({ width: side, height: side });
};

//similarly for any other shape, we can calculate the dimensions, and let the getShape function handle the rest.
