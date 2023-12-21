import { forwardRef, useRef, useImperativeHandle, useState } from 'react';

function App() {

  const mycomponent = useRef<MyComponentElement>();

  return (
    <div className="App">
      <MyComponent ref={ref => mycomponent.current = ref as MyComponentElement} />
      <div style={{ display: 'flex', gap: 3 }}>
        <button onClick={() => mycomponent.current?.play()}>Play</button>
        <button onClick={() => mycomponent.current?.pause()}>Pause</button>
        <button onClick={() => mycomponent.current?.stop()}>Stop</button>
        <button onClick={() => alert(mycomponent.current?.getState())}>Get State</button>
      </div>
    </div>
  );
}

type MyComponentElement = {
  play: () => void;
  pause: () => void;
  stop: () => void;
  getState: () => string;
};

type MyComponentProps = {
};

const MyComponent = forwardRef<MyComponentElement, MyComponentProps>((props, ref) => {
  const [state, setState] = useState<string>('idle');
  useImperativeHandle(ref, () => ({
    play: () => {
      setState('play');
    },
    pause: () => {
      setState('pause');
    },
    stop: () => {
      setState('stop');
    },
    getState: () => {
      return state;
    }
  }));
  return (
    <div>
      <p>state: {state}</p>
    </div>
  );
});

export default App;
