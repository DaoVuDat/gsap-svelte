<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import Lenis from 'lenis';
	import {lenisStore} from '$lib/stores/lenis.svelte';

	onMount(() => {
		const lenisInstance = new Lenis({
			smoothWheel: true,
		})

		// Custom request animation frame
		function raf(time: number) {
			lenisInstance.raf(time);
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf);

		lenisStore.lenis = lenisInstance

		return () => {
			lenisInstance.destroy();
		}

	})

	let { children } = $props();
</script>

{@render children()}
