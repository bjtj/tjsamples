<script lang="ts">

	interface Props {
		name: string;
	}

	type EmojiTable = {[name: string]: string}

	const emojis: EmojiTable = {
		apple: '🍎',
		banana: '🍌',
		carrot: '🥕',
		doughnut: '🍩',
		egg: '🥚'
	};

	// `name` is updated whenever the prop value changes...
	let { name }: Props = $props();

	// ...but `emoji` is fixed upon initialisation
	const emoji = emojis[name];
</script>

<p>{emoji} = {name}</p>
