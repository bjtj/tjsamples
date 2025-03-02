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

  // 33. The class attribute
  let flipped = $state(false);

  // 34. The style directive
  let flipped2 = $state(false);

  // 35. Component styles
	import Box from './Box.svelte';

  // 36. The use directive
  import Canvas from './Canvas.svelte';
  import {trapFocus} from './actions.svelte.js';
  const colors2 = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black'];
  let selected3 = $state(colors2[0]);
  let size = $state(10);
  let showMenu = $state(true);
  let showTut36 = $state(false);
  $effect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'd') {
        e.preventDefault();
        showTut36 = !showTut36;
      }
    });
  });

  // 37. Adding parameters
  import tippy from 'tippy.js';

	let content = $state('Hello!');

	function tooltip(node: HTMLElement, fn: Function) {
		$effect(() => {
			const tooltip = tippy(node, fn());
			return tooltip.destroy;
		});
	}

  // 38. The transition directive
  import { fade } from 'svelte/transition';
  let visible = $state(true);

  // 39. Adding parameters
  // import { fade } from 'svelte/transition';
  import { fly } from 'svelte/transition';

	let visible2 = $state(true);

  // 40. In and out
  // import { fly } from 'svelte/transition';

  let visible3 = $state(true);

  // 41. Custom CSS transitions
  // import { fade } from 'svelte/transition';
  import { elasticOut } from 'svelte/easing';

	let visible4 = $state(true);

	function spin(_node: HTMLElement, { duration }: { duration: number }) {
		return {
			duration,
			css: (t: number, u: number) => {
        const eased = elasticOut(t);
        return `
          transform: scale(${eased}) rotate(${eased * 1080}deg);
          color: hsl(
            ${Math.trunc(t * 360)},
            ${Math.min(100, 1000 * u)}%,
            ${Math.min(50, 500 * u)}%
          );`;
      }
		};
	}

  // 42. Custom JS transitions
  let visible5 = $state(false);

  function typewriter(node: HTMLElement) {
    const speed = 1;
    const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
      throw new Error('This transition only works on elements with a single text node child');
    }

    const text = node.textContent ?? '';
    const duration = text.length / (speed * 0.01);

    return {
      duration,
      tick: (t: number) => {
        const i = Math.trunc(text.length * t);
        node.textContent = text.slice(0, i);
      }
    };
  }

  // 43. Transition events
  // import { fly } from 'svelte/transition';

  let visible6 = $state(true);
  let status = $state('waiting...');

  // 44. Global transitions
  import { slide } from 'svelte/transition';
  let items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

  let showItems = $state(true);
  let i = $state(5);

  // 45. Key blocks
  import { typewriter as typewriter2 } from './transition.js';
  import { messages } from '../assets/loading-messages.js';

  let i2 = $state(-1);

  $effect(() => {
    const interval = setInterval(() => {
      i2 += 1;
      i2 %= messages.length;
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  })

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

<!-- 33. The class attribute -->
<div id="tut33">
  <div class="container">
    Flip the card
    <!-- class="card {flipped ? 'flipped' : ''}" -->
    <button
      class={["card", { flipped }]}
      onclick={() => flipped = !flipped}>
      <div class="front">
        <span class="symbol">♠</span>
      </div>
      <div class="back">
        <span class="pattern"></span>
      </div>
    </button>
  </div>
</div>

<!-- 34. The style directive -->
<div id="tut34">
  <div class="container">
    Flip the card
    <!-- style="transform: {flipped2 ? 'rotateY(0)' : ''}; --bg-1: palegoldenrod; --bg-2: black; --bg-3: goldenrod;" -->
    <button
      class={["card", { flipped2 }]}
      style:transform="{flipped2 ? 'rotateY(0)' : ''}"
      style:--bg-1="palegoldenrod"
      style:--bg-2="black"
      style:--bg-3="goldenrod"
      onclick={() => { flipped2 = !flipped2 }}>
      <div class="front">
        <span class="symbol">♠</span>
      </div>
      <div class="back">
        <span class="pattern"></span>
      </div>
    </button>
  </div>
</div>

<!-- 35. Component styles -->
<div id="tut35">
  <div class="boxes">
    <Box --color="red" />
    <Box --color="green" />
    <Box --color="blue" />
  </div>
</div>

<!-- 36. The use directive -->
<p style="font-size: 3rem;">Press 'ctrl + d' to toggle 36. The use directive.</p>
<div id="tut36" style="display: {showTut36 ? 'block' : 'none'}">
  <div class="container">
    <Canvas color={selected3} size={size} />

    {#if showMenu}
    <div
    role="presentation"
    class="modal-background"
    onclick={(event) => {
      if (event.target === event.currentTarget) {
        showMenu = false;
      }
    }}
    onkeydown={(e) => {
      if (e.key === "Escape") {
        showMenu = false;
      }
    }}
    >
    <div class="menu" use:trapFocus>
      <div class="colors">
        {#each colors2 as color}
        <button
        class="color"
        aria-label={color}
        aria-current={selected3 === color}
        style="--color: {color}"
        onclick={() => {
          selected3 = color;
        }}
        ></button>
        {/each}
      </div>

      <label>
        small
        <input type="range" bind:value={size} min="1" max="50" />
        large
      </label>
    </div>
    </div>
    {/if}

    <div class="controls">
      <button class="show-menu" onclick={() => (showMenu = !showMenu)}>
        {showMenu ? "close" : "menu"}
    </div>
  </div>
</div>

<!-- 37. Adding parameters -->
<div id="tut37">
  <input bind:value={content} />
  <button use:tooltip={() => ({content, placement: 'bottom',})}>
    Hover me
  </button>
</div>

<!-- 38. The transition directive -->
<div id="tut38">
  <label>
    <input type="checkbox" bind:checked={visible} />
    visible
  </label>

  {#if visible}
	<p transition:fade>
		Fades in and out
	</p>
{/if}
</div>

<!-- 39. Adding parameters -->
<div id="tut39">
  <label>
    <input type="checkbox" bind:checked={visible2} />
    visible
  </label>

  {#if visible2}
	<p transition:fly={{ y: 200, duration: 2000 }}>
		Flies in and out
	</p>
{/if}
</div>

<!-- 40. In and out -->
<div id="tut40">
  <label>
    <input type="checkbox" bind:checked={visible3} />
    visible
  </label>

  {#if visible3}
	<p in:fly={{ y: 200, duration: 2000 }} out:fade>
		Flies in, fades out
	</p>
{/if}
</div>

<!-- 41. Custom CSS transitions -->
<div id="tut41">
  <label>
    <input type="checkbox" bind:checked={visible4} />
    visible
  </label>
  
  {#if visible4}
    <div
      class="centered"
      in:spin={{ duration: 8000 }}
      out:fade
    >
      <span>transitions!</span>
    </div>
  {/if}
</div>

<!-- 42. Custom JS transitions -->
<div id="tut42">
  <label>
    <input type="checkbox" bind:checked={visible5} />
    visible
  </label>

  {#if visible5}
    <p transition:typewriter>
      The quick brown fox jumps over the lazy dog.
    </p>
  {/if}
</div>

<!-- 43. Transition events -->
<div id="tut43">
  <p>status: {status}</p>

  <label>
    <input type="checkbox" bind:checked={visible6} />
    visible
  </label>

  {#if visible6}
  <p transition:fly={{ y: 200, duration: 2000 }}
    onintrostart={() => status = 'intro started'}
    onoutrostart={() => status = 'outro started'}
    onintroend={() => status = 'intro ended'}
    onoutroend={() => status = 'outro ended'}>
    Flies in and out
  </p>
  {/if}
</div>

<!-- 44. Global transitions -->
<div id="tut44">
  <label>
    <input type="checkbox" bind:checked={showItems} />
    show list
  </label>

  <label>
    <input type="range" bind:value={i} max="10" />
  </label>

  {#if showItems}
      {#each items.slice(0, i) as item}
        <div transition:slide|global>{item}</div>
      {/each}
  {/if}
</div>

<!-- 45. Key blocks -->
<div id="tut45">
  <h1>loading...</h1>

  {#key i2}
  <p in:typewriter2={{ speed: 10 }}>
    {messages[i2] || ''}
  </p>
  {/key}

  <div>&nbsp;</div>

</div>


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

  #tut33 .container {
    display: flex;
    flex-direction: column;
    gap: 1em;
    height: 100%;
    align-items: center;
    justify-content: center;
    perspective: 100vh;
  }

  #tut33 .card {
		position: relative;
		aspect-ratio: 2.5 / 3.5;
		font-size: min(1vh, 0.25rem);
		height: 80em;
		background: var(--bg-1);
		border-radius: 2em;
		transform: rotateY(180deg);
		transition: transform 0.4s;
		transform-style: preserve-3d;
		padding: 0;
		user-select: none;
		cursor: pointer;
	}

	#tut33 .card.flipped {
		transform: rotateY(0);
	}

	#tut33 .front, .back {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		backface-visibility: hidden;
		border-radius: 2em;
		border: 1px solid var(--fg-2);
		box-sizing: border-box;
		padding: 2em;
	}

	#tut33 .front {
		background: url(./svelte-logo.svg) no-repeat 5em 5em, url(./svelte-logo.svg) no-repeat calc(100% - 5em) calc(100% - 5em);
		background-size: 8em 8em, 8em 8em;
	}

	#tut33 .back {
		transform: rotateY(180deg);
	}

	#tut33 .symbol {
		font-size: 30em;
		color: var(--fg-1);
	}

	#tut33 .pattern {
		width: 100%;
		height: 100%;
		background-color: var(--bg-2);
		/* pattern from https://projects.verou.me/css3patterns/#marrakesh */
		background-image:
		radial-gradient(var(--bg-3) 0.9em, transparent 1em),
		repeating-radial-gradient(var(--bg-3) 0, var(--bg-3) 0.4em, transparent 0.5em, transparent 2em, var(--bg-3) 2.1em, var(--bg-3) 2.5em, transparent 2.6em, transparent 5em);
		background-size: 3em 3em, 9em 9em;
		background-position: 0 0;
		border-radius: 1em;
	}


  #tut34 .container {
		display: flex;
		flex-direction: column;
		gap: 1em;
		height: 100%;
		align-items: center;
		justify-content: center;
		perspective: 100vh;
	}

	#tut34 .card {
		position: relative;
		aspect-ratio: 2.5 / 3.5;
		font-size: min(1vh, 0.25rem);
		height: 80em;
		background: var(--bg-1);
		border-radius: 2em;
		transform: rotateY(180deg);
		transition: transform 0.4s;
		transform-style: preserve-3d;
		padding: 0;
		user-select: none;
		cursor: pointer;
	}

	#tut34 .card.flipped {
		transform: rotateY(0);
	}

	#tut34 .front, .back {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		backface-visibility: hidden;
		border-radius: 2em;
		border: 1px solid var(--fg-2);
		box-sizing: border-box;
		padding: 2em;
	}

	#tut34 .front {
		background: url(./svelte-logo.svg) no-repeat 5em 5em, url(./svelte-logo.svg) no-repeat calc(100% - 5em) calc(100% - 5em);
		background-size: 8em 8em, 8em 8em;
	}

	#tut34 .back {
		transform: rotateY(180deg);
	}

	#tut34 .symbol {
		font-size: 30em;
		color: var(--fg-1);
	}

	#tut34 .pattern {
		width: 100%;
		height: 100%;
		background-color: var(--bg-2);
		/* pattern from https://projects.verou.me/css3patterns/#marrakesh */
		background-image:
		radial-gradient(var(--bg-3) 0.9em, transparent 1em),
		repeating-radial-gradient(var(--bg-3) 0, var(--bg-3) 0.4em, transparent 0.5em, transparent 2em, var(--bg-3) 2.1em, var(--bg-3) 2.5em, transparent 2.6em, transparent 5em);
		background-size: 3em 3em, 9em 9em;
		background-position: 0 0;
		border-radius: 1em;
	}

  /* #tut35 .boxes :global(.box:nth-child(1)) {
    background-color: red;
  }

  #tut35 .boxes :global(.box:nth-child(2)) {
    background-color: green;
  }

  #tut35 .boxes :global(.box:nth-child(3)) {
    background-color: blue;
  } */

  #tut36 .container {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
  }

  #tut36 .controls {
    position: absolute;
    left: 0;
    top: 0;
    padding: 1em;
  }

  #tut36 .show-menu {
    width: 5em;
  }

  #tut36 .modal-background {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(20px);
  }

  #tut36 .menu {
    position: relative;
    background: var(--bg-2);
    width: calc(100% - 2rem);
    max-width: 28em;
    padding: 1em 1em 0.5em 1em;
    border-radius: 1em;
    box-sizing: border-box;
    user-select: none;
  }

  #tut36 .colors {
		display: grid;
		align-items: center;
		grid-template-columns: repeat(9, 1fr);
		grid-gap: 0.5em;
	}

	#tut36 .color {
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--color, #fff);
		transform: none;
		filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.2));
		transition: all 0.1s;
	}

	#tut36 .color[aria-current="true"] {
		transform: translate(1px, 1px);
		filter: none;
		box-shadow: inset 3px 3px 4px rgba(0,0,0,0.2);
	}

	#tut36 .menu label {
		display: flex;
		width: 100%;
		margin: 1em 0 0 0;
	}

	#tut36 .menu input {
		flex: 1;
	}

  /* tut37 */
  :global {
		[data-tippy-root] {
			--bg: #666;
			background-color: var(--bg);
			color: white;
			border-radius: 0.2rem;
			padding: 0.2rem 0.6rem;
			filter: drop-shadow(1px 1px 3px rgb(0 0 0 / 0.1));

			* {
				transition: none;
			}
		}

		[data-tippy-root]::before {
			--size: 0.4rem;
			content: '';
			position: absolute;
			left: calc(50% - var(--size));
			top: calc(-2 * var(--size) + 1px);
			border: var(--size) solid transparent;
			border-bottom-color: var(--bg);
		}
	}

  #tut41 {
    position: relative;
    width: 100%;
    height: 10rem;
  }

  #tut41 .centered {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	#tut41 span {
		position: absolute;
		transform: translate(-50%, -50%);
		font-size: 4em;
	}

  #tut44 div {
    padding: 0.5em 0;
    border-top: 1px solid #eee;
  }
</style>
