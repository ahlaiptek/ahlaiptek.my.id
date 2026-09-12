<script lang="ts">
	import { PERSONAL_INFO } from '$lib/data/portfolioData';
	import { theme } from '$lib/theme.svelte';
	import { Code2, Menu, X, Sun, Moon } from 'lucide-svelte';

	let mobileMenuOpen = $state(false);
	let scrolled = $state(false);

	function handleScroll() {
		if (typeof window !== 'undefined') {
			scrolled = window.scrollY > 20;
		}
	}

	function closeMenu() {
		mobileMenuOpen = false;
	}
</script>

<svelte:window onscroll={handleScroll} />

<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled
		? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200 dark:border-emerald-900/30 py-3 shadow-md dark:shadow-emerald-950/20'
		: 'bg-transparent py-5'}"
>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<a href="#hero" class="flex items-center gap-3 group">
				<div
					class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300"
				>
					<Code2 class="w-5 h-5" />
				</div>
				<div class="flex flex-col">
					<span class="font-bold text-lg text-slate-900 dark:text-slate-100 tracking-tight leading-none group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
						{PERSONAL_INFO.name}
					</span>
					<span class="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
						Software Engineer
					</span>
				</div>
			</a>

			<!-- Desktop Navigation -->
			<nav class="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700 dark:text-slate-300">
				<a href="#hero" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Tentang</a>
				<a href="#journey" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Perjalanan</a>
				<a href="#values" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Nilai</a>
				<a href="#skills" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Skill</a>
			</nav>

			<!-- Action Buttons (Desktop & Theme Toggle) -->
			<div class="flex items-center gap-3">
				<!-- Theme Toggle -->
				<button
					onclick={() => theme.toggle()}
					class="p-2 rounded-xl bg-slate-200/80 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-800 hover:scale-105 active:scale-95 transition-all cursor-pointer"
					aria-label="Toggle theme"
					title={theme.current === 'dark' ? 'Mode Terang' : 'Mode Gelap'}
				>
					{#if theme.current === 'dark'}
						<Sun class="w-4 h-4 text-amber-400" />
					{:else}
						<Moon class="w-4 h-4 text-emerald-600" />
					{/if}
				</button>

				<!-- Mobile Menu Toggle -->
				<button
					onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
					class="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
					aria-label="Toggle menu"
				>
					{#if mobileMenuOpen}
						<X class="w-6 h-6" />
					{:else}
						<Menu class="w-6 h-6" />
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Dropdown -->
	{#if mobileMenuOpen}
		<div
			class="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-emerald-900/40 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200"
		>
			<a
				href="#hero"
				onclick={closeMenu}
				class="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/50"
			>
				Tentang
			</a>
			<a
				href="#journey"
				onclick={closeMenu}
				class="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/50"
			>
				Perjalanan Koding
			</a>
			<a
				href="#values"
				onclick={closeMenu}
				class="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/50"
			>
				Nilai Muhammadiyah
			</a>
			<a
				href="#skills"
				onclick={closeMenu}
				class="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/50"
			>
				Skill & Tech Stack
			</a>
		</div>
	{/if}
</header>
