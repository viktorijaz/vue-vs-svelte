<script>
	let address = '';
	export let data;
	const { addressList } = data;
</script>

<h1>Select your address</h1>
<div class="custom-select">

	<div>
	{#each addressList as addressItem, index}
		<p><strong>{index+1}). </strong>{addressItem}</p>
	{/each}
</div>
</div>

<style>
	/* The container must be positioned relative: */
	.custom-select {
		position: relative;
		font-family: Arial;
		max-width: 500px;
		margin: 20px auto;
		
	}

	p {
    	color: gray;
		padding: 20px;
		margin: 10px;

		border-radius: 10px;
	
	}
	p:nth-child(odd) {
		background-color: floralwhite;
		
	}
	p:nth-child(even) {
		background-color: white;
	}
	
</style>

