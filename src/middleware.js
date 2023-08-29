export const addShape = () => {
  const width = Math.floor(Math.random() * 700);
  const height = Math.floor(Math.random() * 700);

  const adjustedWeight = 700 - width > 0 ? 700 - width : 0;
  const adjustedHeight = 700 - height > 0 ? 700 - height : 0;

  const xCoord = Math.floor(Math.random() * adjustedWeight);
  const yCoord = Math.floor(Math.random() * adjustedHeight);
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
