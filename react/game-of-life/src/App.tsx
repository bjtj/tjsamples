import { useEffect, useState, useRef, useCallback } from 'react';
import './App.css';

type Table = boolean[];

function App() {

  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);
  const [w, setW] = useState(width.toString());
  const [h, setH] = useState(height.toString());
  const [table, setTable] = useState([...new Array(width * height)].map(() => (false)));
  const timeout = useRef<NodeJS.Timer>();
  const [started, setStarted] = useState<boolean>(false);

  function neighbors(table: Table, width: number, pos: number) {

    let arr = [];
    
    if (pos >= width) {

      if (pos % width > 0) {
        arr.push(table[pos - width - 1]);
      }
      
      arr.push(table[pos - width]);

      if (pos % width < width - 1) {
        arr.push(table[pos - width + 1]);
      }
    }

    if (pos % width < width - 1) {
      arr.push(table[pos + 1]);
    }

    if (pos < table.length - width) {
      if (pos + width + 1 < table.length) {
        arr.push(table[pos + width + 1]);
      }

      arr.push(table[pos + width]);

      if (pos % width > 0) {
        arr.push(table[pos + width - 1]);
      }
    }

    if (pos % width > 0) {
      arr.push(table[pos - 1]);
    }

    return arr;
  }

  function countTrue(cells: boolean[]) {
    return cells.reduce((acc, c) => c ? acc + 1 : acc, 0);
  }

  function keepAlive(cnt: number) {
    return cnt === 2 || cnt === 3;
  }

  const update = useCallback(() => {
    setTable(prev => prev.map((c, i) => (
      c ? keepAlive(countTrue(neighbors(prev, width, i))) : countTrue(neighbors(prev, width, i)) === 3
    )));
  }, [width]);

  const start = useCallback(() => {
    setStarted(true);
    timeout.current = setInterval(() => {
      update();
    }, 100);
  }, [update]);

  const stop = useCallback(() => {
    setStarted(false);
    if (timeout.current) {
      clearInterval(timeout.current);
      timeout.current = undefined;
    }
  }, []);

  const clear = useCallback(() => {
    setTable(prev => prev.map(() => false));
  }, []);

  const random = useCallback(() => {
    setTable(prev => prev.map(() => Math.random() > 0.5));
  }, []);

  useEffect(() => {
    setTable([...new Array(width * height)].map(() => (false)));
  }, [width, height]);
  
  return (
    <div className="App">
      <div style={{
        display: 'flex',
        gap: 3,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1rem',
        margin: '1em',
      }}>
        Width:
        <input type="number" value={w} onChange={e => {
          setW(e.target.value);
          let n = parseInt(e.target.value);
          if (!isNaN(n) && n > 0) {
            setWidth(n);
        }}} />
        Height:
        <input type="number" value={h} onChange={e => {
          setH(e.target.value);
          let n = parseInt(e.target.value);
          if (!isNaN(n) && n > 0) {
            setHeight(n);
        }}} />
      </div>
      <Board
        width={width}
        table={table}
        onClick={(pos) => setTable(prev => prev.map((c, i) => i === pos ? !c : c))}
      />
      <div>
        <button onClick={update} disabled={started}>1 step</button>
        <button onClick={start} disabled={started}>play</button>
        <button onClick={stop} disabled={!started}>stop</button>
      </div>

      <div>
        <button onClick={clear}>Clear</button>
        <button onClick={random}>Random</button>
      </div>
    </div>
  );
}

type BoardProps = {
  width: number;
  table: Table;
  onClick: (pos: number) => void;
};

function Board({width, table, onClick}: BoardProps) {

  return (
    <pre style={{
      width: 'max-content',
      margin: '0 auto',
      userSelect: 'none',
      lineHeight: '0.5em',
      border: 'solid 1px black'
    }}>
      {
        table.map((c, i) => (
          <>
            <span
              onClick={() => onClick(i)}
              style={{
                display: 'inline-block',
                width: '1em',
                height: '1em',
                border: 'solid 1px #ececec',
                background: (c ? 'black' : ''),
              }}
            ></span>
            {i % width === width - 1 && '\n'}
          </>))
      }
    </pre>
  );
}

export default App;
