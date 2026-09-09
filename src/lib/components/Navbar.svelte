<script lang="ts">
	import { PERSONAL_INFO } from '$lib/data/portfolioData';
	import { theme } from '$lib/theme.svelte';
	import { Code2, Menu, X, Rocket, Sparkles, Sun, Moon } from 'lucide-svelte';

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
					<span class="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
						<Sparkles class="w-3 h-3 text-amber-500 dark:text-amber-400" />
						barizaloka.id
					</span>
				</div>
			</a>

			<!-- Desktop Navigation -->
			<nav class="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700 dark:text-slate-300">
				<a href="#about" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Tentang</a>
				<a href="#journey" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Perjalanan</a>
				<a href="#values" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Nilai</a>
				<a href="#barizaloka" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1.5">
					<span class="px-2 py-0.5 text-[10px] font-bold tracking-wide rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30">Layanan</span>
					barizaloka.id
				</a>
				<a href="#projects" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Portofolio</a>
				<a href="#skills" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Skill</a>
				<a href="#calculator" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Kalkulator</a>
			</nav>

			<!-- Action Buttons (Desktop) -->
			<div class="hidden md:flex items-center gap-3">
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

				<a
					href="#contact"
					class="relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold tracking-wide text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 rounded-xl shadow-md shadow-emerald-500/20 hover:from-emerald-300 hover:to-teal-200 transition-all duration-300 hover:scale-105 active:scale-95"
				>
					<Rocket class="w-3.5 h-3.5 mr-1.5" />
					Konsultasi Website
				</a>
			</div>

			<!-- Mobile Actions (Theme + Menu Toggle) -->
			<div class="md:hidden flex items-center gap-2">
				<button
					onclick={() => theme.toggle()}
					class="p-2 rounded-lg bg-slate-200 dark:bg-slate-900 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
					aria-label="Toggle theme"
				>
					{#if theme.current === 'dark'}
						<Sun class="w-5 h-5 text-amber-400" />
					{:else}
						<Moon class="w-5 h-5 text-emerald-600" />
					{/if}
				</button>
				<button
					onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
					class="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
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
				href="#about"
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
				href="#barizaloka"
				onclick={closeMenu}
				class="block px-3 py-2 rounded-md text-base font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50"
			>
				Jasa Website barizaloka.id
			</a>
			<a
				href="#projects"
				onclick={closeMenu}
				class="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/50"
			>
				Portofolio Karya
			</a>
			<a
				href="#skills"
				onclick={closeMenu}
				class="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/50"
			>
				Skill & Tech Stack
			</a>
			<a
				href="#calculator"
				onclick={closeMenu}
				class="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/50"
			>
				Kalkulator Website
			</a>
			<a
				href="#contact"
				onclick={closeMenu}
				class="block mt-4 text-center px-4 py-2.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 rounded-xl shadow-md"
			>
				Konsultasi Website
			</a>
		</div>
	{/if}
</header>
