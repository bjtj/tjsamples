import React, { useState, useRef, useEffect, createRef } from 'react';

import {
  Transition,
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from 'react-transition-group';

import './App.css';

function App() {
  return (
    <div className="App" style={{ padding: 10 }}>
      <TransitionExample1 />
      <TransitionExample2 />
      <TransitionExample3 />
      <CSSTransitionExample1 />
      <CSSTransitionExample2 />
      <SwitchTransitionExample1 />
      <TransitionGroupExample1 />
    </div>
  );
}

function TransitionExample1() {
  const [toggle, setToggle] = useState<boolean>(false);

  const defaultStyle = {
    transition: 'opacity 2000ms ease-in-out',
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1, },
    entered: { opacity: 1 },
    exiting: { opacity: 0, },
    exited: { opacity: 0 },
    unmounted: null,
  };

  return (
    <div>
      <h1>Toggle</h1>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <div>{toggle ? 'ON' : 'OFF'}</div>

      <Transition in={toggle} timeout={2000}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            <div style={{ width: 100, height: 100, backgroundColor: 'red' }}></div>
          </div>
        )}
      </Transition>
      <div>---</div>
    </div>
  );
}

function TransitionExample2() {

  const [toggle, setToggle] = useState<boolean>(false);

  const defaultStyle = {
    transition: 'opacity 2000ms ease-in-out',
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1, },
    entered: { opacity: 1 },
    exiting: { opacity: 0, },
    exited: { opacity: 0 },
    unmounted: null,
  };

  return (
    <div>
      <h1>Toggle</h1>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <div>{toggle ? 'ON' : 'OFF'}</div>

      <Transition in={toggle} timeout={2000} mountOnEnter unmountOnExit>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            <div style={{ width: 100, height: 100, backgroundColor: 'red' }}></div>
          </div>
        )}
      </Transition>
      <div>---</div>
    </div>
  )
}

function TransitionExample3() {

  const [toggle, setToggle] = useState<boolean>(false);

  const defaultStyle = {
    overflow: 'hidden',
    transition: 'all 2000ms ease-in-out',
    height: 0,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1, height: 100 },
    entered: { opacity: 1, height: 100 },
    exiting: { opacity: 0, height: 0 },
    exited: { opacity: 0, height: 0 },
    unmounted: null,
  };

  useEffect(() => {
    setToggle(true);
  }, []);

  return (
    <div>
      <h1>Toggle</h1>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <div>{toggle ? 'ON' : 'OFF'}</div>

      <Transition in={toggle} timeout={2000} mountOnEnter unmountOnExit>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            <div style={{ width: 100, height: 100, backgroundColor: 'red' }}></div>
          </div>
        )}
      </Transition>
      <div>---</div>
    </div>
  )
}

function CSSTransitionExample1() {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  return (
    <div>
      <h1>CSSTransition Example1</h1>
      <CSSTransition nodeRef={nodeRef} in={inProp} timeout={3000} classNames="my-node">
        <div ref={nodeRef}>
          {"I'll receive my-node-* classes"}
        </div>
      </CSSTransition>
      <button type="button" onClick={() => setInProp(true)}>
        Click to Enter
      </button>
    </div>
  )
}


function CSSTransitionExample2() {
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);

  return (
    <div>
      <h1>CSSTransition Example2</h1>
      <button onClick={() => setShowMessage(true)} disabled={showMessage}>Show Messsage</button>
      <CSSTransition nodeRef={nodeRef} in={showMessage} timeout={300} classNames="alert" unmountOnExit>
        <div
          ref={nodeRef} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          onClick={() => setShowMessage(false)}>
          <div style={{ border: 'solid 1px black', borderRadius: 8, padding: 8, marginTop: 8, backgroundColor: 'white' }}>
            <h2>Animated alert message</h2>
            <p>This alert message is being transitioned in and out of the DOM.</p>
            <button onClick={() => setShowMessage(false)}>Close</button>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

type Mode = 'out-in' | 'in-out';

const modes: Mode[] = ["out-in", "in-out"];

function SwitchTransitionExample1() {
  const [mode, setMode] = React.useState<Mode>(modes[0]);
  const [state, setState] = React.useState(true);
  const helloRef = React.useRef<HTMLDivElement>(null);
  const goodbyeRef = React.useRef<HTMLDivElement>(null);
  const nodeRef = state ? helloRef : goodbyeRef;

  return (
    <div>
      <h1>SwitchTransition Example1</h1>
      <div style={{ marginBottom: 10 }}>
        Mode: <select
          value={mode}
          onChange={e => setMode(e.target.value as Mode)}
        >
          {modes.map(m => (
            <option key={m}>{m}</option>
          ))}
        </select>
      </div>

      <div>state: {state ? 't' : 'nil'}</div>

      <SwitchTransition mode={mode}>
        <CSSTransition
          key={state ? '1' : '2'}
          nodeRef={nodeRef}
          addEndListener={(done) => {
            nodeRef.current?.addEventListener("transitionend", done, false);
          }}
          classNames="fade"
        >
          <div ref={nodeRef} className="button-container" style={{ display: 'flex', justifyContent: 'center', maxWidth: 500 }}>
            <button className="btn" onClick={() => setState((state) => !state)} style={{ backgroundColor: 'rgb(60, 80, 255)', borderRadius: 16, padding: 16, fontSize: 16, color: 'white', border: 0 }}>
              {state ? "Hello, world!" : "Goodbye, world!"}
            </button>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}

function useGenuid() {
  const _seed = useRef(-1);
  return () => {
    _seed.current++;
    return `uid-${_seed.current}`;
  };
}

function TransitionGroupExample1() {
  const genuid = useGenuid();
  const [items, setItems] = useState(() => [
    {
      id: genuid(),
      text: 'Buy eggs',
      nodeRef: createRef<HTMLLIElement>(),
    },
    {
      id: genuid(),
      text: 'Pay bills',
      nodeRef: createRef<HTMLLIElement>(),
    },
    {
      id: genuid(),
      text: 'Invite friends over',
      nodeRef: createRef<HTMLLIElement>(),
    },
    {
      id: genuid(),
      text: 'Fix the TV',
      nodeRef: createRef<HTMLLIElement>(),
    },
  ]);
  return (
    <div>
      <h1>TransitionGroup Example1</h1>
      <ul style={{maxWidth: 300}}>
        <TransitionGroup className="todo-list">
        {
          items.map(({id, text, nodeRef}) => (
            <CSSTransition
              key={id}
              nodeRef={nodeRef}
              timeout={1000}
              classNames="item"
              >
                <li ref={nodeRef} className="item" style={{display: 'flex', gap: 3, marginBottom: 5, overflow: 'hidden'}}>
                  <div style={{flexGrow: 1}}>{text}</div>
                  <button onClick={() => setItems((items => items.filter((item) => item.id !== id)))}>REMOVE</button>
                </li>
              </CSSTransition>
          ))
        }
        </TransitionGroup>
      </ul>
      <button onClick={() => {
        const text = prompt('Enter some text...');
        if (text) {
          setItems((items) => [
            ...items,
            {
              id: genuid(),
              text,
              nodeRef: createRef<HTMLLIElement>(),
            }
          ])
        }
      }}>Add Item</button>
    </div>
  )
}

export default App;
