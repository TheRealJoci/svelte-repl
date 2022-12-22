<script>
	import Repl from '@sveltejs/repl';
	import '@sveltejs/repl/styles/base.css';
	import '@sveltejs/repl/styles/code.css';
	import { onMount } from 'svelte';

	let repl;

	onMount(() => {
		repl.set({
			components: [
				{
					name: 'App',
					type: 'svelte',
					source:
						`<scr` +
						`ipt>
	let name = 'world';
</scr` +
						`ipt>

<h1>Hello {name}!</h1>`
				}
			]
		});
	});
</script>

<main>
	<Repl bind:this={repl} showAst />
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}

	main {
		height: 100vh;
	}
</style>
