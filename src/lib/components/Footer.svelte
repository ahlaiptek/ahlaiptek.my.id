<script lang="ts">
	import { PERSONAL_INFO } from '$lib/data/portfolioData';
	import { Code2, ArrowUp } from 'lucide-svelte';

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
			<div class="md:col-span-7 space-y-4">
				<div class="flex items-center gap-3">
					<div class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-bold shadow-md">
						<Code2 class="w-5 h-5" />
					</div>
					<div>
						<h3 class="text-lg font-bold text-white leading-tight">{PERSONAL_INFO.name}</h3>
						<span class="text-xs text-emerald-400 font-semibold">
							Software Engineer | Santri NU | Entrepreneur
						</span>
					</div>
				</div>
				<p class="text-xs text-slate-400 leading-relaxed max-w-md">
					Santri NU & Simpatisan Muhammadiyah. Meneladani KH Ahmad Dahlan sebagai pedagang & pendakwah: Software Engineer, penuntut ilmu Islam (hafalan kitab-kitab & fiqih), dan pengusaha jasa website, bimbel koding, serta cita-cita ekspansi penyedia hosting/server.
				</p>
			</div>

			<!-- Quick Links -->
			<div class="md:col-span-5 space-y-3">
				<h4 class="text-xs font-bold text-white uppercase tracking-wider">Navigasi Utama</h4>
				<ul class="space-y-2 text-xs">
					<li><a href="#hero" class="hover:text-emerald-400 transition-colors">Tentang Ahlat</a></li>
					<li><a href="#journey" class="hover:text-emerald-400 transition-colors">Perjalanan Koding</a></li>
					<li><a href="#values" class="hover:text-emerald-400 transition-colors">Nilai Muhammadiyah</a></li>
					<li><a href="#skills" class="hover:text-emerald-400 transition-colors">Skill & Tech Stack</a></li>
				</ul>
			</div>

		</div>

		<!-- Bottom Copyright & Back to Top -->
		<div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
			<div class="text-slate-500 text-center sm:text-left">
				&copy; {new Date().getFullYear()} <span class="text-slate-300 font-semibold">{PERSONAL_INFO.name}</span>. All rights reserved.
			</div>

			<button
				onclick={scrollToTop}
				class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all cursor-pointer"
				aria-label="Back to top"
			>
				<span>Ke Atas</span>
				<ArrowUp class="w-3.5 h-3.5" />
			</button>
		</div>
	</div>
</footer>
