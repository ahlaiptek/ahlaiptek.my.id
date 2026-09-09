<script lang="ts">
	import { PERSONAL_INFO } from '$lib/data/portfolioData';
	import { Code2, Compass, Rocket, ArrowRight, ShieldCheck, CheckCircle2, Award, Terminal } from 'lucide-svelte';
</script>

<section id="hero" class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
	<!-- Background Subtle Glow Gradients -->
	<div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 dark:bg-emerald-600/15 rounded-full blur-[140px] pointer-events-none"></div>
	<div class="absolute top-1/3 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
	<div class="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

	<!-- Decorative Grid Pattern -->
	<div class="absolute inset-0 bg-[linear-gradient(to_right,#64748b15_1px,transparent_1px),linear-gradient(to_bottom,#64748b15_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
			
			<!-- Left Column: Intro & Headline -->
			<div class="lg:col-span-7 space-y-6 text-center lg:text-left">
				
				<!-- Badges -->
				<div class="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
					<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/50 shadow-sm">
						<Compass class="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
						Simpatisan Muhammadiyah
					</span>
					<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-200 text-slate-800 dark:bg-slate-900 dark:text-slate-300 border border-slate-300 dark:border-slate-700/60">
						<Terminal class="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
						Software Engineer
					</span>
					<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-300 dark:border-amber-700/40">
						<Rocket class="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
						Founder barizaloka.id
					</span>
				</div>

				<!-- Main Title -->
				<div class="space-y-2">
					<h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
						Halo, Saya <span class="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 dark:from-emerald-400 dark:via-teal-300 dark:to-amber-300 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
					</h1>
					<p class="text-lg sm:text-xl font-bold text-emerald-700 dark:text-emerald-400/90">
						Software Engineer yang Menyukai Dunia Koding Sejak Usia 12 Tahun
					</p>
				</div>

				<!-- Bio Narrative -->
				<p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
					Memulai petualangan koding sejak umur 12 tahun, lalu memperdalam rekayasa perangkat lunak secara serius pada umur 18 tahun. Berdedikasi menjadi <span class="text-slate-900 dark:text-white font-bold">programmer yang handal & software engineer profesional</span>, hingga mendirikan <span class="text-emerald-700 dark:text-emerald-300 font-bold border-b border-emerald-500/40">barizaloka.id</span>—layanan pembuatan website berkualitas tinggi yang berintegritas dan amanah.
				</p>

				<!-- Action Buttons -->
				<div class="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
					<a
						href="#barizaloka"
						class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-lg shadow-emerald-500/25 hover:scale-105 active:scale-95"
					>
						<Rocket class="w-4 h-4 mr-2" />
						Jasa Website barizaloka.id
					</a>
					<a
						href="#journey"
						class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
					>
						Lihat Perjalanan Karir
						<ArrowRight class="w-4 h-4 ml-2 text-emerald-600 dark:text-emerald-400" />
					</a>
				</div>

				<!-- Key Trust Features -->
				<div class="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left border-t border-slate-200 dark:border-slate-800/80">
					<div class="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
						<CheckCircle2 class="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
						<span>Pengalaman Sejak Usia Dini</span>
					</div>
					<div class="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
						<ShieldCheck class="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
						<span>Prinsip Integritas Muhammadiyah</span>
					</div>
					<div class="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
						<Award class="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
						<span>Solusi Website Berstandar Tinggi</span>
					</div>
				</div>

			</div>

			<!-- Right Column: Profile Code Card -->
			<div class="lg:col-span-5 flex justify-center">
				<div class="relative w-full max-w-md">

					<!-- Glowing Backdrop Box -->
					<div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 opacity-20 dark:opacity-30 blur-lg"></div>

					<!-- Card Content -->
					<div class="relative bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 shadow-2xl backdrop-blur-xl transition-colors">
						
						<!-- Header Window Control Bar -->
						<div class="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
							<div class="flex items-center gap-2">
								<span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
								<span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
								<span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
							</div>
							<span class="text-xs font-mono text-slate-500 dark:text-slate-400">ahlat_thobai.ts</span>
						</div>

						<!-- Profile Summary inside Code Editor Style -->
						<div class="font-mono text-xs text-slate-200 space-y-2 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-inner">
							<p><span class="text-emerald-400">const</span> <span class="text-amber-300">developer</span> = &#123;</p>
							<p class="pl-4"><span class="text-slate-400">nama:</span> <span class="text-teal-300">"{PERSONAL_INFO.name}"</span>,</p>
							<p class="pl-4"><span class="text-slate-400">identitas:</span> <span class="text-teal-300">"Simpatisan Muhammadiyah"</span>,</p>
							<p class="pl-4"><span class="text-slate-400">mulaiKoding:</span> <span class="text-amber-400">12</span> <span class="text-slate-500">// tahun</span>,</p>
							<p class="pl-4"><span class="text-slate-400">seriusSoftwareEng:</span> <span class="text-amber-400">18</span> <span class="text-slate-500">// tahun</span>,</p>
							<p class="pl-4"><span class="text-slate-400">perusahaan:</span> <span class="text-teal-300">"barizaloka.id"</span>,</p>
							<p class="pl-4"><span class="text-slate-400">misi:</span> <span class="text-teal-300">"Solusi Website Profesional, Amanah & Berkemajuan"</span></p>
							<p>&#125;;</p>
						</div>

						<!-- Milestone Stats Grid -->
						<div class="grid grid-cols-2 gap-3 mt-4">
							<div class="bg-slate-100 dark:bg-slate-950/70 p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
								<span class="block text-2xl font-bold text-amber-600 dark:text-amber-400">12 Thn</span>
								<span class="text-[11px] font-medium text-slate-600 dark:text-slate-400">Mulai Tertarik Koding</span>
							</div>
							<div class="bg-slate-100 dark:bg-slate-950/70 p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
								<span class="block text-2xl font-bold text-emerald-600 dark:text-emerald-400">18 Thn</span>
								<span class="text-[11px] font-medium text-slate-600 dark:text-slate-400">Fokus Software Eng</span>
							</div>
						</div>

						<!-- Business Banner Highlight -->
						<div class="mt-4 p-3.5 rounded-xl bg-emerald-50 dark:bg-gradient-to-r dark:from-emerald-950/80 dark:via-teal-950/80 dark:to-slate-900 border border-emerald-200 dark:border-emerald-700/40 flex items-center justify-between">
							<div class="flex items-center gap-3">
								<div class="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
									<Code2 class="w-5 h-5" />
								</div>
								<div>
									<h4 class="text-sm font-bold text-slate-900 dark:text-white">barizaloka.id</h4>
									<p class="text-[11px] text-slate-600 dark:text-slate-300">Jasa Web Profesional</p>
								</div>
							</div>
							<a
								href="#barizaloka"
								class="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1"
							>
								Detail
								<ArrowRight class="w-3.5 h-3.5" />
							</a>
						</div>

					</div>

				</div>
			</div>

		</div>
	</div>
</section>
