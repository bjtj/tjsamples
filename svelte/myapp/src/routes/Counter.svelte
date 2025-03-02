<script type="text/javascript">
  // import { counter } from './shared.js';
  import { counter } from './shared.svelte.js';
</script>

<button onclick={() => counter.count += 1}>
  clicks: {counter.count}
</button>
