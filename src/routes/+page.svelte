<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import JourneyTimeline from '$lib/components/JourneyTimeline.svelte';
	import Values from '$lib/components/Values.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />

<main>
	<Hero />
	<JourneyTimeline />
	<Values />
	<Skills />
</main>

<Footer />
