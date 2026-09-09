<script lang="ts">
	import type { ProjectItem } from '$lib/data/portfolioData';
	import { X, ExternalLink, CheckCircle2, Layers } from 'lucide-svelte';

	let { project, onClose }: { project: ProjectItem | null; onClose: () => void } = $props();
</script>

{#if project}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
		role="dialog"
		aria-modal="true"
	>
		<div
			class="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 text-slate-900 dark:text-white"
		>
			<!-- Header Modal -->
			<div class="relative h-56 sm:h-72 overflow-hidden bg-slate-950">
				<img
					src={project.image}
					alt={project.title}
					class="w-full h-full object-cover opacity-85"
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

				<!-- Close Button -->
				<button
					onclick={onClose}
					class="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800 transition-colors"
					aria-label="Close modal"
				>
					<X class="w-5 h-5" />
				</button>

				<!-- Title & Category Badge on Header -->
				<div class="absolute bottom-4 left-6 right-6">
					<span class="inline-block px-3 py-1 text-xs font-bold text-emerald-300 bg-emerald-950/90 border border-emerald-700/60 rounded-md mb-2">
						{project.categoryLabel}
					</span>
					<h3 class="text-2xl sm:text-3xl font-extrabold text-white">
						{project.title}
					</h3>
				</div>
			</div>

			<!-- Modal Body -->
			<div class="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
				<div>
					<h4 class="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Deskripsi Proyek</h4>
					<p class="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
						{project.longDescription}
					</p>
				</div>

				{#if project.metrics}
					<div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 flex items-center gap-3">
						<CheckCircle2 class="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
						<div>
							<span class="text-xs font-bold text-emerald-700 dark:text-emerald-400 block">Pencapaian & Performa</span>
							<span class="text-xs text-slate-700 dark:text-slate-300">{project.metrics}</span>
						</div>
					</div>
				{/if}

				<!-- Tech Stack Tags -->
				<div>
					<h4 class="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
						<Layers class="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
						Teknologi yang Digunakan
					</h4>
					<div class="flex flex-wrap gap-2">
						{#each project.tags as tag}
							<span class="px-3 py-1 text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-emerald-800 dark:text-teal-300 border border-slate-300 dark:border-slate-700 rounded-lg">
								#{tag}
							</span>
						{/each}
					</div>
				</div>
			</div>

			<!-- Modal Footer -->
			<div class="p-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
				<div class="text-xs text-slate-500 dark:text-slate-400">
					Dikelola oleh <span class="text-slate-900 dark:text-white font-bold">Muhammad Ahlat Thoba'i</span>
				</div>

				<div class="flex items-center gap-3">
					{#if project.demoUrl}
						<a
							href={project.demoUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center px-4 py-2 text-xs font-bold text-slate-950 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-colors"
						>
							<ExternalLink class="w-3.5 h-3.5 mr-1.5" />
							Live Demo
						</a>
					{/if}
					<button
						onclick={onClose}
						class="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-slate-800 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
					>
						Tutup
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}
