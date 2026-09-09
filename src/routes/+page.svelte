<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import JourneyTimeline from '$lib/components/JourneyTimeline.svelte';
	import Values from '$lib/components/Values.svelte';
	import Barizaloka from '$lib/components/Barizaloka.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Calculator from '$lib/components/Calculator.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />

<main>
	<Hero />
	<JourneyTimeline />
	<Values />
	<Barizaloka />
	<Projects />
	<Skills />
	<Calculator />
	<Contact />
</main>

<Footer />
