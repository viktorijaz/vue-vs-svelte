<script>
	import { page } from '$app/stores';
	import Header from './Header.svelte';
	import './styles.css';

	export let data;
	const { username } = data;
</script>

<svelte:head>
	<title>{$page.data.title || 'Codevolution'}</title>
</svelte:head>

<div class="app">
	<Header />
	
	<main>
		<div>Welcome, {username}</div>
		{#if $page.data.notification}
			{$page.data.notification}
		{/if}
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>


