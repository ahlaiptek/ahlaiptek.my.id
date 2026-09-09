<script lang="ts">
	import { SKILL_CATEGORIES } from '$lib/data/portfolioData';
	import { Code2, Server, Award, Sparkles } from 'lucide-svelte';
</script>

<section id="skills" class="py-20 bg-slate-100/80 dark:bg-slate-900/80 relative text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800/60 transition-colors duration-300">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header -->
		<div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
			<span class="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 rounded-full border border-emerald-300 dark:border-emerald-800/60">
				Keahlian Teknis
			</span>
			<h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
				Teknologi & Kompetensi Software Engineering
			</h2>
			<p class="text-slate-600 dark:text-slate-300 text-base">
				Hasil pembelajaran berkelanjutan sejak usia 12 tahun hingga penerapan standar industri terkini.
			</p>
		</div>

		<!-- Skills Category Cards -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each SKILL_CATEGORIES as category, index}
				<div
					class="bg-white dark:bg-slate-950/90 rounded-3xl p-7 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col justify-between"
				>
					<div>
						<div class="flex items-center gap-3 mb-6">
							<div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
								{#if index === 0}
									<Code2 class="w-5 h-5" />
								{:else if index === 1}
									<Server class="w-5 h-5" />
								{:else}
									<Award class="w-5 h-5" />
								{/if}
							</div>
							<h3 class="text-lg font-bold text-slate-900 dark:text-white">{category.title}</h3>
						</div>

						<ul class="space-y-4">
							{#each category.skills as skill}
								<li class="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80">
									<div class="flex items-center gap-2.5">
										<span class="w-2 h-2 rounded-full bg-emerald-500"></span>
										<span class="text-xs font-semibold text-slate-800 dark:text-slate-200">{skill.name}</span>
									</div>
									<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800/50">
										{skill.level}
									</span>
								</li>
							{/each}
						</ul>
					</div>

					<div class="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
						<Sparkles class="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
						 Continuous Skill Refinement
					</div>
				</div>
			{/each}
		</div>

	</div>
</section>
