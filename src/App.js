import { useRef, useState } from "react";
import Shape from "./Shape";
import { addShape } from "./middleware";
import { shapes as shapesConstant } from "./constants";

const App = () => {
  const [shapes, setShapes] = useState([]);
  const canvasRef = useRef(null);

  const addItem = () => {
    const newShape = addShape({ shape: shapesConstant.rectangle });
    setShapes([...shapes, newShape]);
  };

  const printJson = () => {
    const serializedJson = JSON.stringify(shapes);
    console.log(serializedJson);
    const deserializedJson = JSON.parse(serializedJson);
    console.log(deserializedJson);
  };

  return (
    <div className="App">
      <div className="btn-wrapper">
        <button onClick={() => addItem()}>Add Shape</button>
        <button onClick={() => printJson()}>Print JSON</button>
      </div>
      <div className="canvas" ref={canvasRef}>
        {shapes?.map((shape, id) => {
          return <Shape key={id} {...{ shape, id, setShapes, canvasRef }} />;
        })}
      </div>
    </div>
  );
};

export default App;
