import React, { useState } from "react";

function App() {
  const [state, setState] = useState(0);

  return (
    <div>
      <div>
        <h1>{state}</h1>

        <button
          onClick={() => {
            setState(state - 1);
          }}
        >
          -
        </button>

        <button
          onClick={() => {
            setState(state + 1);
          }}
        >
          +
        </button>
      </div>

      <div className="reset">
        <button onClick={() => setState(0)}>Reset to Zero</button>
      </div>
    </div>
  );
}

export default App;
