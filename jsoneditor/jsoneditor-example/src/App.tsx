import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import JSONEditorDemo from './JSONEditorDemo';

function App() {

  const [json, setJson] = useState<any>({
    "array": [1, 2, 3],
    "boolean": true,
    "null": null,
    "number": 123,
    "object": { "a": "b", "c": "d" },
    "string": "Hello World"
  });

  const onChangeJSON = (json: any) => {
    console.log(`on change: ${JSON.stringify(json, null, 2)}`);
    setJson(json);
  };

  const updateTime = () => {
    const time = new Date().toISOString();
    setJson(Object.assign({}, json, { time }));
  };

  return (
    <div className="App">
      <div className="menu">
        <button onClick={updateTime}>Create/update a field "time"</button>
      </div>
      <JSONEditorDemo
        json={json}
        onChangeJSON={onChangeJSON}
      />
      <div className="code">
        <pre>
          <code>
            {JSON.stringify(json, null, 2)}
          </code>
        </pre>
      </div>
    </div>
  );
}

export default App;
