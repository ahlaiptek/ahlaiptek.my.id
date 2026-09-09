<script lang="ts">
	import { MUHAMMADIYAH_VALUES } from '$lib/data/portfolioData';
	import { Compass, ShieldCheck, BookOpen, Lightbulb, Heart, Sun } from 'lucide-svelte';

	const getIconComponent = (iconName: string) => {
		switch (iconName) {
			case 'Compass':
				return Compass;
			case 'ShieldCheck':
				return ShieldCheck;
			case 'BookOpen':
				return BookOpen;
			case 'Lightbulb':
				return Lightbulb;
			default:
				return Compass;
		}
	};
</script>

<section id="values" class="py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden text-slate-900 dark:text-white border-t border-b border-slate-200 dark:border-slate-800/60 transition-colors duration-300">
	<!-- Background Sun Glow -->
	<div class="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none"></div>
	<div class="absolute -left-20 bottom-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none"></div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
		<!-- Section Header -->
		<div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
			<div class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/60 rounded-full border border-amber-300 dark:border-amber-800/60">
				<Sun class="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
				Prinsip & Nilai
			</div>
			<h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
				Semangat <span class="bg-gradient-to-r from-emerald-600 to-amber-600 dark:from-emerald-400 dark:to-amber-300 bg-clip-text text-transparent">Islam Berkemajuan</span> & Rekayasa Teknologi
			</h2>
			<p class="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
				Sebagai seorang simpatisan Muhammadiyah, setiap langkah profesional dari koding hingga pengembangan proyek di <span class="text-emerald-700 dark:text-emerald-400 font-semibold">barizaloka.id</span> didasari oleh prinsip integritas, amanah, dan kemaslahatan bersama.
			</p>
		</div>

		<!-- Values Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each MUHAMMADIYAH_VALUES as item}
				{@const Icon = getIconComponent(item.icon)}

				<div class="relative bg-white dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 group flex flex-col justify-between">
					
					<div>
						<!-- Icon Circle -->
						<div class="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-gradient-to-br dark:from-emerald-950 dark:to-slate-900 border border-emerald-300 dark:border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-5 group-hover:scale-110 group-hover:border-emerald-400 transition-all">
							<Icon class="w-6 h-6" />
						</div>

						<h3 class="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
							{item.title}
						</h3>
						<p class="text-xs font-bold text-amber-700 dark:text-amber-400/90 mb-3">{item.subtitle}</p>

						<p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
							{item.description}
						</p>
					</div>

					<div class="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center text-xs font-medium text-slate-500 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
						<Heart class="w-3.5 h-3.5 mr-1.5 text-amber-500 dark:text-amber-400" />
						<span>Komitmen Karya Berkualitas</span>
					</div>
				</div>
			{/each}
		</div>

		<!-- Quote Banner -->
		<div class="mt-16 bg-emerald-50 dark:bg-gradient-to-r dark:from-emerald-950/70 dark:via-slate-900 dark:to-amber-950/50 border border-emerald-200 dark:border-emerald-800/40 rounded-2xl p-6 sm:p-8 text-center max-w-4xl mx-auto shadow-md">
			<blockquote class="text-base sm:text-lg italic font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
				"Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya. Melalui software engineering dan barizaloka.id, saya berusaha menghadirkan teknologi yang mempermudah usaha dan mendatangkan keberkahan."
			</blockquote>
			<div class="mt-4 font-bold text-emerald-700 dark:text-emerald-400 text-sm">
				— Muhammad Ahlat Thoba'i
			</div>
		</div>

	</div>
</section>
