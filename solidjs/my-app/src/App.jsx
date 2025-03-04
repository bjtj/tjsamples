import { Dynamic, Portal } from 'solid-js/web';
import logo from './logo.svg';
import styles from './App.module.css';
import Nested from './nested';
import {
  createSignal, createEffect, createMemo,
  Show, For, Index, Switch, Match, ErrorBoundary,
  onMount, onCleanup
} from 'solid-js';

const RedThing = () => <strong style="color: red">Red Thing</strong>;
const GreenThing = () => <strong style="color: green">Green Thing</strong>;
const BlueThing = () => <strong style="color: blue">Blue Thing</strong>;

const options = {
  red: RedThing,
  green: GreenThing,
  blue: BlueThing
};

function HelloWorld() {
  const name = "Solid";
  const svg = (
    <svg height="300" width="400">
      <defs>
        <linearGradient id="gr1" x1="0%" y1="60%" x2="100%" y2="0%">
          <stop offset="5%" style="stop-color:rgb(255,255,3);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
        </linearGradient>
      </defs>
      <ellipse cx="125" cy="150" rx="100" ry="60" fill="url(#gr1)" />
      Sorry but this browser does not support inline SVG.
    </svg>);

  return (
    <>
      <div>Hello {name}!</div>
      {svg}
    </>);
}

function fibonacci(num) {
  if (num <= 1) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function Counter() {

  const [count, setCount] = createSignal(0);

  setInterval(() => setCount(count() + 1), 1000);

  createEffect(() => {
    console.log("The count is now", count());
  });

  const doubleCount = () => count() * 2;

  return (
    <div>
      <div>Count: {count()}</div>
      <button onClick={() => setCount(count() + 1)}>Click Me</button>
      <div>Count: {doubleCount()}</div>
    </div>);
}

function CleanCounter() {
  const [count, setCount] = createSignal(0);

  const timer = setInterval(() => setCount(count() + 1), 1000);
  onCleanup(() => clearInterval(timer));

  return <div>Count: {count()}</div>;
}

function FibCounter() {

  const [count, setCount] = createSignal(10);
  const fib = createMemo(() => {
    console.log("Calculating Fibonacci");
    return fibonacci(count());
  });

  return (
    <>
      <button onClick={() => setCount(count() + 1)}>Count: {count()}</button>
      <div>1. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
      <div>2. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
      <div>3. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
      <div>4. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
      <div>5. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
      <div>6. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
      <div>7. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
      <div>8. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
      <div>9. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
      <div>10. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
    </>
  );
}

const Broken = (props) => {
  throw new Error("Oh No");
  return <>Never Getting Here</>;
};

function App() {

  const [loggedIn, setLoggedIn] = createSignal(false);
  const toggle = () => setLoggedIn(!loggedIn());
  const [cats, setCats] = createSignal([
    { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
    { id: 'vzduuxykOOs', name: 'APT' },
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' },
  ]);
  const [x] = createSignal(7);
  const [selected, setSelected] = createSignal("red");
  const [photos, setPhotos] = createSignal([]);

  onMount(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
    setPhotos(await res.json());
  });

  return (
    <div class={styles.App}>

      <HelloWorld />

      <Nested />

      <Counter />

      {/* Memos */}
      <FibCounter />

      {/* Show */}
      <Show
        when={loggedIn()}
        fallback={<button onClick={toggle}>Log in</button>}>
        <button onClick={toggle}>Log out</button>
      </Show>

      {/* For */}
      <ul>
        <For each={cats()}>{(cat, i) =>
          <li>
            <a target="_blank" href={`https://www.youtube.com/watch?v=${cat.id}`}>
              {i() + 1}: {cat.name}
            </a>
          </li>
        }</For>
      </ul>

      {/* Index */}
      <ul>
        <Index each={cats()}>{(cat, i) =>
          <li>
            <a target="_blank" href={`https://www.youtube.com/watch?v=${cat().id}`}>
              {i + 1}: {cat().name}
            </a>
          </li>
        }</Index>
      </ul>

      {/* Switch */}
      <Switch fallback={<p>{x()} is between 5 and 10</p>}>
        <Match when={x() > 10}>
          <p>{x()} is greater than 10</p>
        </Match>
        <Match when={5 > x()}>
          <p>{x()} is less than 5</p>
        </Match>
      </Switch>

      {/* Dynamic */}
      <select value={selected()} onInput={e => setSelected(e.currentTarget.value)}>
        <For each={Object.keys(options)}>{
          color => <option value={color}>{color}</option>
        }</For>
      </select>
      <Dynamic component={options[selected()]} />

      {/* Portal */}
      <div class="app-container">
        <p>Just some text inside a div that has a restricted size.</p>
        <Portal>
          <div class="popup">
            <h1>Popup</h1>
            <p>Some text you might need for something or other.</p>
          </div>
        </Portal>
      </div>

      {/* Error Boundary */}
      <div>Before</div>
      <ErrorBoundary>
        <Broken />
      </ErrorBoundary>
      <div>After</div>

      {/* onMount */}
      <h1>Photo album</h1>

      <div class="photos">
        <For each={photos()} fallback={<p>Loading...</p>}>{photo =>
          <figure>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <figcaption>{photo.title}</figcaption>
          </figure>
        }</For>
      </div>

      {/* onCleanup */}
      <CleanCounter />

    </div>
  );
}

export default App;
