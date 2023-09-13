# Vue.js vs Svelte showdown!

Both **Vue** and **Svelte** aim to share the same niche in the single page application frameworks: easy to learn, inuitive and shorter learning time. Further they both come with respective meta-framework: **Nuxt** and **Sveltekit**. But how do they compare to each other?


## Performance and size

This is the main selling point of Svelte, since it does not ship with the runtime, but all the optimizations are done during build time. This result  in smaller bundle size too.

## Syntax and readability

**Svelte** has clean syntax, look at this example
```
    <script>
		let src = 'https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024';
		let name = 'Rick Astley';
	</script>
	<img {src} alt="{name} dances." />
```
Compared to **Vue**:
```
    <script setup>
	    import { ref } from 'vue'
	    const src = 'https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024';
	    const name = 'Rick Astley';
    </script>
    
    <template>
      <img :src="src" :alt="`${name} dances`" />
    </template>
    
```
## Reactivity / watchers

In Vue you have to use watchers or computed property, but in Svelte it comes free with $: sign:
```
$: if (count >= 10) {
		alert('count is dangerously high!');
		count = 0;
	}
```

## Define props

In **Vue**
```
<script setup>
const props = defineProps({
  msg: String
})
</script>
```
And in **Svelte**:
```
<script>
	let name = 'Svelte';
</script>
```
## Global Data, Stores

Svelte has built in stores, while in Vue you would have to use either Pinia or Vuex.


# Verdict

Svelte is clearly ahead of the curve. It is well thought not only in comparison with Vue, but also when pitched agains more mature frameworks such as React and Angular. 
