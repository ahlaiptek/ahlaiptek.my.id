<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { theme } from '$lib/theme.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		theme.init();
	});
</script>

<svelte:head>
	<title>Muhammad Ahlat Thoba'i | Software Engineer & Founder barizaloka.id</title>
	<meta
		name="description"
		content="Portofolio Muhammad Ahlat Thoba'i - Simpatisan Muhammadiyah, Software Engineer yang menyukai koding sejak usia 12 tahun, dan pendiri usaha pembuatan website profesional barizaloka.id."
	/>
	<meta name="keywords" content="Muhammad Ahlat Thoba'i, Ahlat Thobai, barizaloka.id, Software Engineer, Pembuatan Website Profesional, SvelteKit Developer, Simpatisan Muhammadiyah" />
	<meta property="og:title" content="Muhammad Ahlat Thoba'i - Software Engineer & Founder barizaloka.id" />
	<meta property="og:description" content="Simpatisan Muhammadiyah, Software Engineer berintegritas, dan pendiri jasa pembuatan website barizaloka.id." />
	<meta property="og:type" content="website" />
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />
	<script>
		// Inline script to prevent theme flash (FOUC)
		try {
			const saved = localStorage.getItem('theme');
			if (saved === 'light' || (!saved && window.matchMedia('(prefers-color-scheme: light)').matches)) {
				document.documentElement.classList.remove('dark');
				document.documentElement.classList.add('light');
			} else {
				document.documentElement.classList.add('dark');
				document.documentElement.classList.remove('light');
			}
		} catch (e) {}
	</script>
</svelte:head>

<div class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950 transition-colors duration-300">
	{@render children()}
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
		font-family: 'Plus Jakarta Sans', sans-serif;
	}
	:global(code, kbd, samp, pre) {
		font-family: 'JetBrains Mono', monospace;
	}
</style>
