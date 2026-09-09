<script lang="ts">
	import { PERSONAL_INFO } from '$lib/data/portfolioData';
	import { Code2, ArrowUp, Sparkles } from 'lucide-svelte';

	function scrollToTop() {
		if (typeof window !== 'undefined') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}
</script>

<footer class="bg-slate-900 dark:bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12 transition-colors duration-300">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
			
			<!-- Brand Info -->
			<div class="md:col-span-5 space-y-4">
				<div class="flex items-center gap-3">
					<div class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-bold shadow-md">
						<Code2 class="w-5 h-5" />
					</div>
					<div>
						<h3 class="text-lg font-bold text-white leading-tight">{PERSONAL_INFO.name}</h3>
						<span class="text-xs text-emerald-400 font-semibold flex items-center gap-1">
							<Sparkles class="w-3 h-3 text-amber-400" />
							{PERSONAL_INFO.businessName}
						</span>
					</div>
				</div>
				<p class="text-xs text-slate-400 leading-relaxed max-w-sm">
					Simpatisan Muhammadiyah & Software Engineer. Menyukai dunia koding sejak usia 12 tahun, bertransformasi secara serius sejak usia 18 tahun, dan berkomitmen menghadirkan layanan pembuatan website profesional melalui <span class="text-emerald-400">barizaloka.id</span>.
				</p>
			</div>

			<!-- Quick Links -->
			<div class="md:col-span-3 space-y-3">
				<h4 class="text-xs font-bold text-white uppercase tracking-wider">Navigasi Utama</h4>
				<ul class="space-y-2 text-xs">
					<li><a href="#about" class="hover:text-emerald-400 transition-colors">Tentang Ahlat</a></li>
					<li><a href="#journey" class="hover:text-emerald-400 transition-colors">Perjalanan Koding</a></li>
					<li><a href="#values" class="hover:text-emerald-400 transition-colors">Nilai Muhammadiyah</a></li>
					<li><a href="#barizaloka" class="hover:text-emerald-400 transition-colors">Layanan barizaloka.id</a></li>
					<li><a href="#projects" class="hover:text-emerald-400 transition-colors">Portofolio Karya</a></li>
					<li><a href="#calculator" class="hover:text-emerald-400 transition-colors">Kalkulator Website</a></li>
				</ul>
			</div>

			<!-- Business Services -->
			<div class="md:col-span-4 space-y-3">
				<h4 class="text-xs font-bold text-white uppercase tracking-wider">Solusi barizaloka.id</h4>
				<ul class="space-y-2 text-xs">
					<li class="text-slate-300">• Landing Page High Conversion</li>
					<li class="text-slate-300">• Website Profile Usaha & Instansi</li>
					<li class="text-slate-300">• Custom Web Application & SaaS</li>
					<li class="text-slate-300">• E-Commerce & Integration WhatsApp</li>
				</ul>
				<div class="pt-2 text-[11px] text-emerald-400/90 font-medium">
					"Amanah, Cepat, Berintegritas & Berkinerja Tinggi"
				</div>
			</div>

		</div>

		<!-- Bottom Copyright & Back to Top -->
		<div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
			<div class="text-slate-500 text-center sm:text-left">
				&copy; {new Date().getFullYear()} <span class="text-slate-300 font-semibold">{PERSONAL_INFO.name}</span> & <span class="text-emerald-400 font-semibold">barizaloka.id</span>. All rights reserved.
			</div>

			<button
				onclick={scrollToTop}
				class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
				aria-label="Back to top"
			>
				<span>Ke Atas</span>
				<ArrowUp class="w-3.5 h-3.5" />
			</button>
		</div>
	</div>
</footer>
