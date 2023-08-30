import { useRef, useState } from "react";
import Shape from "./Shape";
import { addShape } from "./middleware";

const App = () => {
  const [shapes, setShapes] = useState([]);
  const canvasRef = useRef(null);

  const addItem = () => {
    const newShape = addShape();
    setShapes([...shapes, newShape]);
  };

  const printJson = () => {
    const serializedJson = JSON.stringify(shapes);
    const deserializedJson = JSON.parse(serializedJson);
    console.log(serializedJson);
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
          //give better key later
          return <Shape key={id} {...{ shape, id, setShapes, canvasRef }} />;
        })}
      </div>
    </div>
  );
};

export default App;
