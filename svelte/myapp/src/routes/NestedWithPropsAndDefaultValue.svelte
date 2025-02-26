<script lang="ts">
  interface Props {
    answer?: string | Number;
  }

  let { answer = 'a mystery' }: Props = $props();
</script>

<p>The answer is {answer}</p>
