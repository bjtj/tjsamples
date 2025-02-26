<!-- Tutorial: Basic Svelte --
-- https://svelte.dev/tutorial/svelte/welcome-to-svelte --
-- -->
<script lang="ts">
  // 1. Your first component
  let name = "Svelte";

  // 2. Dynamic attributes
  let src = "/tutorial/image.gif";

  // 4. Nested components
  import Nested from "./Nested.svelte";

  // 5. HTML tags
  let string = `this string contains some <strong>HTML!!!</strong>`;

  // 6. State
  let count = $state(0);

  function increment() {
    count += 1;
  }

  // 7. Deep state
  let numbers = $state([1, 2, 3, 4]);

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
  import Counter from "./Counter.svelte";

  // 12. Declaring props
  import NestedWithProps from "./NestedWithProps.svelte";

  // 13. Default values
  import NestedWithPropsAndDefaultValue from "./NestedWithPropsAndDefaultValue.svelte";

  // 14. Spread props
  import PackageInfo from "./PackageInfo.svelte";

  const pkg = {
    name: "svelte",
    version: 5,
    description: "blazing fast",
    website: "https://svelte.dev",
  };

  // 18. Each blocks
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];
  let selected = $state(colors[0]);

  // 19. Keyed each blocks
  import Thing from "./Thing.svelte";

  let things = $state([
    { id: 1, name: "apple" },
    { id: 2, name: "banana" },
    { id: 3, name: "carrot" },
    { id: 4, name: "doughnut" },
    { id: 5, name: "egg" },
  ]);

  // 20. Await blocks
  import { roll } from "./utils.js";
  import type { PointerEventHandler } from "svelte/elements";

  let promise = $state(roll());

  // 21. DOM events
  let m = $state({ x: 0, y: 0 });

  function onpointermove(event: PointerEvent) {
    m.x = event.clientX;
    m.y = event.clientY;
  }

  // 22. Inline handlers
  let m2 = $state({ x: 0, y: 0 });

  // 24. Component events
  import Stepper from "./Stepper.svelte";
  let value = $state(0);

  // 25. Spreading events
  import BigRedButton from "./BigRedButton.svelte";
  import horn from "../assets/horn.mp3";

  let honk = (() => {
    if (typeof Audio != "undefined") {
      const audio = new Audio();
      audio.src = horn;
      return () => {
        console.log("play!");
        audio.load();
        audio.play();
      };
    } else {
      return () => {
        console.log("noop - no audio");
      };
    }
  })();

  // 26. Text inputs
  let name2 = $state("world");

  // 27. Numeric inputs
  let a = $state(1);
  let b = $state(2);

  // 28. Checkbox inputs
  let yes = $state(false);

  // 29. Select bindings
  interface Question {
    id: number;
    text: string;
  }
  type QuestionList = Question[];
  let questions: QuestionList = $state([
    {
      id: 1,
      text: `Where did you go to school?`,
    },
    {
      id: 2,
      text: `What is your mother's name?`,
    },
    {
      id: 3,
      text: `What is another personal fact that an attacker could easily find with Google?`,
    },
  ]);

  let selected2: Question | undefined = $state();

  let answer = $state("");

  function handleSubmit(e: Event) {
    e.preventDefault();
    alert(`answered question ${selected2?.id}`);
  }

  // 30. Group inputs
  let scoops = $state(1);
  let flavours = $state([]);

  const formatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });

  // 31. Select multiple
  let scoops2 = $state(1);
  let flavours2 = $state([]);

  const formatter2 = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });

  // 32. Textarea inputs
  import { marked } from "marked";

  let value2 = $state(
    `Some words are *italic*, some are **bold**\n\n- lists\n- are\n- cool`
  );
</script>

<!-- 1. Your first component -->
<div id="tut1">
  <h1>Hello {name.toUpperCase()}!</h1>
</div>

<!-- 2. Dynamic attributes -->
<div id="tut2">
  <div>
    <img {src} alt="A man dances." />
  </div>
  <div>
    <img {src} alt="{name} dances." />
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
    {count === 1 ? "time" : "times"}
  </button>
</div>

<!-- 7. Deep state -->
<div id="tut7">
  <p>{numbers.join(" + ")} = ...</p>

  <button onclick={addNumber}> Add a number </button>
</div>

<!-- 8. Derived state -->
<div id="tut8">
  <p>{numbers.join(" + ")} = {total}</p>
</div>

<!-- 10. Effects -->
<div id="tut10">
  <button onclick={() => (interval /= 2)}>speed up</button>
  <button onclick={() => (interval *= 2)}>slow down</button>

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

  <PackageInfo {...pkg} />
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
        onclick={() => (selected = color)}>{i + 1}</button
      >
    {/each}
  </div>
</div>

<!-- 19. Keyed each blocks -->
<div id="tut19">
  <button onclick={() => things.shift()}> Remove first thing </button>

  {#each things as thing (thing.id)}
    <Thing name={thing.name}></Thing>
  {/each}
</div>

<!-- 20. Await blocks -->
<div id="tut20">
  <button onclick={() => (promise = roll())}> roll the dice </button>

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

<!-- 22. Inline handlers -->
<div id="tut22">
  <div
    onpointermove={(event) => {
      m2.x = event.clientX;
      m2.y = event.clientY;
    }}
  >
    The pointer is at {Math.round(m.x)} x {Math.round(m.y)}
  </div>
</div>

<!-- 23. Capturing -->
<div id="tut23">
  <div onkeydowncapture={(e) => alert(`<div> ${e.key}`)} role="presentation">
    <input onkeydowncapture={(e) => alert(`<input> ${e.key}`)} />
  </div>
</div>

<!-- 24. Component events -->
<div id="tut24">
  <p>The current value is {value}</p>

  <Stepper increment={() => (value += 1)} decrement={() => (value -= 1)} />
</div>

<!-- 25. Spreading events -->
<div id="tut25">
  <BigRedButton onclick={honk} />
</div>

<!-- 26. Text inputs -->
<div id="tut26">
  <input bind:value={name2} />

  <h1>Hello {name2}!</h1>
</div>

<!-- 27. Numeric inputs -->
<div id="tut27">
  <label>
    <input type="number" bind:value={a} min="0" max="10" />
    <input type="range" bind:value={a} min="0" max="10" />
  </label>

  <label>
    <input type="number" bind:value={b} min="0" max="10" />
    <input type="range" bind:value={b} min="0" max="10" />
  </label>

  <p>{a} + {b} = {a + b}</p>
</div>

<!-- 28. Checkbox inputs -->
<div id="tut28">
  <label>
    <input type="checkbox" bind:checked={yes} />
    Yes! Send me regular email spam
  </label>

  {#if yes}
    <p>Thank you. We will bombard your inbox and sell your personal details.</p>
  {:else}
    <p>
      You must opt in to continue. If you're not paying, you're the product.
    </p>
  {/if}

  <button disabled={!yes}>Subscribe</button>
</div>

<!-- 29. Select bindings -->
<div id="tut29">
  <h2>Insecurity questions</h2>
  <form onsubmit={handleSubmit}>
    <select bind:value={selected2} onchange={() => (answer = "")}>
      {#each questions as question}
        <option value={question}>
          {question.text}
        </option>
      {/each}
    </select>
    <input bind:value={answer} />

    <button disabled={!answer} type="submit"> Submit </button>
  </form>

  <p>
    selected question {selected2 ? selected2.id : "[waiting...]"}
  </p>
</div>

<!-- 30. Group inputs -->
<div id="tut30">
  <h2>Size</h2>

  {#each [1, 2, 3] as number}
    <label>
      <input type="radio" name="scoops" value={number} bind:group={scoops} />

      {number}
      {number === 1 ? "scoop" : "scoops"}
    </label>
  {/each}

  <h2>Flavours</h2>

  {#each ["cookies and cream", "mint choc chip", "raspberry ripple"] as flavour}
    <label>
      <input
        type="checkbox"
        name="flavours"
        value={flavour}
        bind:group={flavours}
      />

      {flavour}
    </label>
  {/each}

  {#if flavours.length === 0}
    <p>Please select at least one flavour</p>
  {:else if flavours.length > scoops}
    <p>Can't order more flavours than scoops!</p>
  {:else}
    <p>
      You ordered {scoops}
      {scoops === 1 ? "scoop" : "scoops"}
      of {formatter.format(flavours)}
    </p>
  {/if}
</div>

<!-- 31. Select multiple -->
<div id="tut31">
  <h2>Size</h2>

  {#each [1, 2, 3] as number}
    <label>
      <input type="radio" name="scoops" value={number} bind:group={scoops2} />

      {number}
      {number === 1 ? "scoop" : "scoops"}
    </label>
  {/each}

  <h2>Flavours</h2>

  <select multiple bind:value={flavours2}>
    {#each ["cookies and cream", "mint choc chip", "raspberry ripple"] as flavour}
      <option>{flavour}</option>
      <!-- <label>
      <input
        type="checkbox"
        name="flavours"
        value={flavour}
        bind:group={flavours2}
      />

      {flavour}
    </label> -->
    {/each}
  </select>

  {#if flavours2.length === 0}
    <p>Please select at least one flavour</p>
  {:else if flavours2.length > scoops2}
    <p>Can't order more flavours than scoops!</p>
  {:else}
    <p>
      You ordered {scoops2}
      {scoops2 === 1 ? "scoop" : "scoops"}
      of {formatter.format(flavours2)}
    </p>
  {/if}
</div>

<!-- 32. Textarea inputs -->
<div id="tut32">
  <div class="grid">
    input
    <textarea bind:value={value2}></textarea>

    output
    <div>{@html marked(value2)}</div>
  </div>
</div>

<!-- 33.  -->
<div id="tut33"></div>

<!-- 34.  -->
<div id="tut34"></div>

<!-- 35.  -->
<div id="tut35"></div>

<!-- 36.  -->
<div id="tut36"></div>

<!-- 37.  -->
<div id="tut37"></div>

<!-- 38.  -->
<div id="tut38"></div>

<!-- 39.  -->
<div id="tut39"></div>

<!-- .  -->
<div id="tut"></div>

<!-- .  -->
<div id="tut"></div>

<!-- .  -->
<div id="tut"></div>

<!-- .  -->
<div id="tut"></div>

<!-- .  -->
<div id="tut"></div>

<!-- .  -->
<div id="tut"></div>

<!-- .  -->
<div id="tut"></div>

<!-- .  -->
<div id="tut"></div>

<!-- .  -->
<div id="tut"></div>

<!-- .  -->
<div id="tut"></div>

<!-- .  -->
<div id="tut"></div>

<!-- .  -->
<div id="tut"></div>

<!-- .  -->
<div id="tut"></div>

<!-- .  -->
<div id="tut"></div>

<!-- .  -->
<div id="tut"></div>

<!-- .  -->
<div id="tut"></div>

<!-- .  -->
<div id="tut"></div>

<!-- .  -->
<div id="tut"></div>

<!-- .  -->
<div id="tut"></div>

<!-- .  -->
<div id="tut"></div>

<style type="text/css" media="screen">
  #tut3 p {
    color: goldenrod;
    font-family: "Comic Sans MS", cursive;
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

  #tut22 div {
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

  #tut32 .grid {
    display: grid;
    grid-template-columns: 5em 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1em;
    height: 100%;
  }

  #tut32 textarea {
    flex: 1;
    resize: none;
  }
</style>
