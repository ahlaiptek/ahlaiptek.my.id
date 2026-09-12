<script lang="ts">
	import { TIMELINE_DATA } from '$lib/data/portfolioData';
	import { Sparkles, Code2, Laptop, Rocket, CheckCircle } from 'lucide-svelte';

	const getIconComponent = (iconName: string) => {
		switch (iconName) {
			case 'Sparkles':
				return Sparkles;
			case 'Code2':
				return Code2;
			case 'Laptop':
				return Laptop;
			case 'Rocket':
				return Rocket;
			default:
				return Code2;
		}
	};
</script>

<section id="journey" class="py-20 bg-slate-100/70 dark:bg-slate-900/60 relative overflow-hidden transition-colors duration-300">
	<!-- Background accents -->
	<div class="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
	<div class="absolute bottom-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"></div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
		<!-- Section Header -->
		<div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
			<span class="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 rounded-full border border-emerald-300 dark:border-emerald-800/60">
				Jejak Perjalanan
			</span>
			<h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
				Dari Rasa Ingin Tahu Hingga Menjadi <span class="text-emerald-600 dark:text-emerald-400">Software Engineer Profesional</span>
			</h2>
			<p class="text-slate-600 dark:text-slate-300 text-base">
				Perjalanan dedikasi panjang dalam dunia pemrograman, berfokus pada perkembangan keahlian rekayasa perangkat lunak yang beretika dan bernilai tinggi.
			</p>
		</div>

		<!-- Vertical Interactive Timeline -->
		<div class="relative max-w-4xl mx-auto">
			<!-- Middle Line -->
			<div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-emerald-500/80 via-teal-500/50 to-amber-500/80 rounded-full"></div>

			<!-- Mobile Left Line -->
			<div class="md:hidden absolute left-6 top-4 bottom-4 w-1 bg-gradient-to-b from-emerald-500/80 via-teal-500/50 to-amber-500/80 rounded-full"></div>

			<div class="space-y-12">
				{#each TIMELINE_DATA as item, index}
					{@const Icon = getIconComponent(item.icon)}
					{@const isEven = index % 2 === 0}

					<div class="relative flex flex-col md:flex-row items-center group">
						
						<!-- Mobile Icon Circle -->
						<div class="md:hidden absolute left-6 transform -translate-x-1/2 z-10 w-11 h-11 rounded-full bg-white dark:bg-slate-900 border-2 border-emerald-500 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-md">
							<Icon class="w-5 h-5" />
						</div>

						<!-- Left content block (Desktop) -->
						<div class="w-full md:w-1/2 md:pr-12 pl-14 md:pl-0 {isEven ? 'md:text-right' : 'md:order-2 md:pl-12 md:pr-0 md:text-left'}">
							<div class="bg-white dark:bg-slate-950/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all duration-300 shadow-lg group-hover:scale-[1.02]">
								
								<!-- Badge & Age -->
								<div class="flex flex-wrap items-center gap-2 mb-2 {isEven ? 'md:justify-end' : 'md:justify-start'}">
									<span class="px-2.5 py-0.5 text-xs font-extrabold text-slate-950 bg-emerald-400 rounded-md shadow-sm">
										{item.age}
									</span>
									<span class="text-xs font-semibold text-slate-500 dark:text-slate-400">{item.year}</span>
								</div>

								<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
									{item.title}
								</h3>
								<p class="text-xs font-bold text-emerald-700 dark:text-emerald-400/90 mb-3">{item.subtitle}</p>

								<p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
									{item.description}
								</p>

								<!-- Highlights list -->
								<ul class="space-y-2 text-xs text-slate-700 dark:text-slate-300">
									{#each item.highlights as highlight}
										<li class="flex items-center gap-2 {isEven ? 'md:justify-end' : 'md:justify-start'}">
											{#if isEven}
												<span class="hidden md:inline">{highlight}</span>
												<CheckCircle class="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
												<span class="md:hidden">{highlight}</span>
											{:else}
												<CheckCircle class="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
												<span>{highlight}</span>
											{/if}
										</li>
									{/each}
								</ul>
							</div>
						</div>

						<!-- Center Icon Circle (Desktop) -->
						<div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-slate-950 border-2 border-emerald-500 items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-md group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
							<Icon class="w-6 h-6" />
						</div>

						<!-- Right filler space for grid balance -->
						<div class="hidden md:block w-1/2 {isEven ? 'order-2' : 'order-1'}"></div>

					</div>
				{/each}
			</div>
		</div>

	</div>
</section>
