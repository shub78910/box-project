import { useState } from "react";
import Shape from "./Shape";
import { addShape } from "./middleware";

const App = () => {
  const [design, setDesign] = useState([]);

  const addItem = () => {
    const newShape = addShape();
    setDesign([...design, newShape]);
  };

  console.log({ design });

  return (
    <div className="App">
      <div className="btn-wrapper">
        <button onClick={() => addItem()}>Add Shape</button>
        <button>Print JSON</button>
      </div>
      <div className="canvas">
        {design?.map((shape, id) => {
          //give better key later
          return <Shape key={id} {...{ shape, id, setDesign }} />;
        })}
      </div>
    </div>
  );
};

export default App;
