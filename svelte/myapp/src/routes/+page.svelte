<!-- Tutorial: Basic Svelte --
-- https://svelte.dev/tutorial/svelte/welcome-to-svelte --
-- -->
<script lang="ts">
  // 1. Your first component
  let name = 'Svelte';

  // 2. Dynamic attributes
  let src = '/tutorial/image.gif';

  // 4. Nested components
  import Nested from './Nested.svelte';

  // 5. HTML tags
  let string = `this string contains some <strong>HTML!!!</strong>`;

  // 6. State
  let count = $state(0);

  function increment() {
    count += 1;
  }

  // 7. Deep state
  let numbers = $state([1,2,3,4]);

  function addNumber() {
    // numbers[numbers.length] = numbers.length + 1;
    numbers.push(numbers.length + 1);
    // console.log($state.snapshot(numbers));  --  9. Inspecting state
  }

  // 8. Derived state
  let total = $derived(numbers.reduce((t, n) => t + n, 0));

  // 9. Inspecting state
  $inspect(numbers).with(console.trace);
  // NOTE) Please enable log filtering in the developer console.

  // 10. Effects
  let elapsed = $state(0);
  let interval = $state(1000);

  $effect(() => {
    const id = setInterval(() => {
      elapsed += 1;
    }, interval);
    return () => {
      clearInterval(id);
    };
  });

  // 11. Universal reactivity
  import Counter from './Counter.svelte';

  // 12. Declaring props
  import NestedWithProps from './NestedWithProps.svelte';

  // 13. Default values
  import NestedWithPropsAndDefaultValue from './NestedWithPropsAndDefaultValue.svelte';

  // 14. Spread props
  import PackageInfo from './PackageInfo.svelte';

  const pkg = {
    name: 'svelte',
    version: 5,
    description: 'blazing fast',
    website: 'https://svelte.dev'
  };

  // 18. Each blocks
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  let selected = $state(colors[0]);

  // 19. Keyed each blocks
  import Thing from './Thing.svelte';

  let things = $state([
    {id: 1, name: 'apple'},
    {id: 2, name: 'banana'},
    {id: 3, name: 'carrot'},
    {id: 4, name: 'doughnut'},
    {id: 5, name: 'egg'},
  ]);

  // 20. Await blocks
  import { roll } from './utils.js';

  let promise = $state(roll());

  // 21. DOM events
  let m = $state({ x: 0, y: 0 });

  function onpointermove(event) {
    m.x = event.clientX;
    m.y = event.clientY;
  }

  </script>

<style type="text/css" media="screen">
  #tut3 p {
    color: goldenrod;
    font-family: 'Comic Sans MS', cursive;
    font-size: 2em;
  }

  #tut21 div {
    /* position: fixed; */
    /* left: 0; */
    /* top: 0; */
    /* width: 100%; */
    /* height: 100%; */
    width: calc(100% - 3rem);
    height: 15rem;
    padding: 1rem;
    border: solid 1px black;
  }
</style>

<!-- 1. Your first component -->
<div id="tut1">
  <h1>Hello {name.toUpperCase()}!</h1>
</div>

<!-- 2. Dynamic attributes -->
<div id="tut2">
  <div>
    <img src={src} alt="A man dances." />
  </div>
  <div>
    <img src={src} alt="{name} dances." />
  </div>
</div>

<!-- 3. Styling -->
<div id="tut3">
  <p>This is paragraph.</p>
</div>

<!-- 4. Nested components -->
<div id="tut4">
  <p>This is a paragraph.</p>
  <Nested />
</div>

<!-- 5. HTML tags -->
<div id="tut5">
  <p>{string}</p>
  <p>{@html string}</p>
</div>

<!-- 6. State -->
<div id="tut6">
  <button onclick={increment}>
    Clicked {count}
    {count === 1 ? 'time' : 'times'}
  </button>
</div>

<!-- 7. Deep state -->
<div id="tut7">
  <p>{numbers.join(' + ')} = ...</p>

  <button onclick={addNumber}>
    Add a number
  </button>
</div>

<!-- 8. Derived state -->
<div id="tut8">
  <p>{numbers.join(' + ')} = {total}</p>
</div>

<!-- 10. Effects -->
<div id="tut10">
  <button onclick={() => interval /= 2}>speed up</button>
  <button onclick={() => interval *= 2}>slow down</button>

  <p>elapsed: {elapsed}</p>
</div>

<!-- 11. Universal reactivity -->
<div id="tut11">
  <Counter />
  <Counter />
  <Counter />
</div>

<!-- 12. Declaring props -->
<div id="tut12">
  <NestedWithProps answer={42} />
</div>

<!-- 13. Default values -->
<div id="tut13">
  <NestedWithPropsAndDefaultValue answer={42} />
  <NestedWithPropsAndDefaultValue />
</div>


<!-- 14. Spread props -->
<div id="tut14">
  <PackageInfo
    name={pkg.name}
    version={pkg.version}
    description={pkg.description}
    website={pkg.website}
    />

  <PackageInfo
    {...pkg}
    />
</div>

<!-- 15. If blocks -->
<div id="tut15">
  {#if count > 10}
    <p>{count} is greater than 10</p>
  {/if}
</div>


<!-- 16. Else blocks -->
<div id="tut16">
  {#if count > 10}
    <p>{count} is greater than 10</p>
  {:else}
    <p>{count} is between 0 and 10</p>
  {/if}
</div>


<!-- 17. Else-if blocks -->
<div id="tut17">
  {#if count > 10}
    <p>{count} is greater than 10</p>
  {:else if count < 5}
    <p>{count} is less than 5</p>
  {:else}
    <p>{count} is between 5 and 10</p>
  {/if}
</div>

<!-- 18. Each blocks -->
<div id="tut18">
  <h1 style="color: {selected}">Pick a colour</h1>
  <div>
    {#each colors as color, i}
      <button
        style="background: {color}"
        aria-label={color}
        aria-current={selected === color}
        onclick={() => selected = color}
        >{i + 1}</button>
      {/each}
    </div>
</div>

<!-- 19. Keyed each blocks -->
<div id="tut19">
  <button onclick={() => things.shift()}>
    Remove first thing
  </button>

  {#each things as thing (thing.id)}
    <Thing name={thing.name}></Thing>
  {/each}
</div>

<!-- 20. Await blocks -->
<div id="tut20">
  <button onclick={() => promise = roll()}>
    roll the dice
  </button>

  {#await promise}
    <p>...rolling</p>
  {:then number}
    <p>you rolled a {number}!</p>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</div>

<!-- 21. DOM events -->
<div id="tut21">
  <div {onpointermove}>
    The pointer is at {Math.round(m.x)} x {Math.round(m.y)}
  </div>
</div>

