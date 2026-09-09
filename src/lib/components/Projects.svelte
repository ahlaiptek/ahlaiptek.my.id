<script lang="ts">
	import { PROJECTS_DATA, type ProjectItem } from '$lib/data/portfolioData';
	import ProjectModal from './ProjectModal.svelte';
	import { ArrowUpRight } from 'lucide-svelte';

	let activeFilter = $state<string>('all');
	let selectedProject = $state<ProjectItem | null>(null);

	const filterCategories = [
		{ id: 'all', label: 'Semua Karya' },
		{ id: 'company-profile', label: 'Company Profile' },
		{ id: 'web-app', label: 'Web Application' },
		{ id: 'islamic-tech', label: 'Islamic Tech' },
		{ id: 'e-commerce', label: 'E-Commerce' }
	];

	let filteredProjects = $derived(
		activeFilter === 'all'
			? PROJECTS_DATA
			: PROJECTS_DATA.filter((p) => p.category === activeFilter)
	);

	function openModal(p: ProjectItem) {
		selectedProject = p;
	}

	function closeModal() {
		selectedProject = null;
	}
</script>

<section id="projects" class="py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative transition-colors duration-300">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header -->
		<div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
			<span class="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 rounded-full border border-emerald-300 dark:border-emerald-800/60">
				Showcase Portofolio
			</span>
			<h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
				Hasil Karya & Proyek Rekayasa Web
			</h2>
			<p class="text-slate-600 dark:text-slate-300 text-base">
				Koleksi proyek buatan Muhammad Ahlat Thoba'i dan tim barizaloka.id dengan performa tinggi, keandalan arsitektur, dan UI/UX modern.
			</p>
		</div>

		<!-- Category Filter Buttons -->
		<div class="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
			{#each filterCategories as cat}
				<button
					onclick={() => (activeFilter = cat.id)}
					class="px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 {activeFilter === cat.id
						? 'bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950 font-extrabold shadow-md shadow-emerald-500/20 scale-105'
						: 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-white shadow-sm'}"
				>
					{cat.label}
				</button>
			{/each}
		</div>

		<!-- Projects Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each filteredProjects as project (project.id)}
				<div
					class="group relative bg-white dark:bg-slate-900/90 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col justify-between"
				>
					<!-- Thumbnail Image & Overlay -->
					<div class="relative h-60 overflow-hidden bg-slate-950">
						<img
							src={project.image}
							alt={project.title}
							class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

						<!-- Category Badge -->
						<div class="absolute top-4 left-4">
							<span class="px-3 py-1 text-xs font-extrabold text-slate-950 bg-amber-300 rounded-md shadow-md">
								{project.categoryLabel}
							</span>
						</div>

						<!-- Top Right Quick Detail Button -->
						<button
							onclick={() => openModal(project)}
							class="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/80 text-white border border-slate-700 hover:bg-emerald-400 hover:text-slate-950 transition-all shadow-md"
							aria-label="View detail"
						>
							<ArrowUpRight class="w-4 h-4" />
						</button>
					</div>

					<!-- Card Content -->
					<div class="p-6 space-y-4 flex-grow flex flex-col justify-between">
						<div>
							<h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors mb-2">
								{project.title}
							</h3>
							<p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
								{project.description}
							</p>
						</div>

						<div class="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800/80">
							<!-- Tags -->
							<div class="flex flex-wrap gap-1.5">
								{#each project.tags as tag}
									<span class="px-2.5 py-0.5 text-[11px] font-mono font-medium text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50 rounded-md">
										{tag}
									</span>
								{/each}
							</div>

							<!-- Action Links -->
							<div class="flex items-center justify-between">
								<span class="text-xs text-slate-500 dark:text-slate-400 font-medium">
									{project.metrics || 'SvelteKit / Modern Web'}
								</span>
								<button
									onclick={() => openModal(project)}
									class="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
								>
									Lihat Detail Proyek
									<ArrowUpRight class="w-3.5 h-3.5" />
								</button>
							</div>
						</div>
					</div>

				</div>
			{/each}
		</div>

	</div>
</section>

<!-- Modal Component -->
<ProjectModal project={selectedProject} onClose={closeModal} />
