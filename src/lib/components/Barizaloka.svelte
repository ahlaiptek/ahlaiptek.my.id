<script lang="ts">
	import { BARIZALOKA_SERVICES, PERSONAL_INFO } from '$lib/data/portfolioData';
	import { Rocket, Zap, Building2, Cpu, Check, MessageSquare, Sparkles } from 'lucide-svelte';

	const getIconComponent = (iconName: string) => {
		switch (iconName) {
			case 'Zap':
				return Zap;
			case 'Building2':
				return Building2;
			case 'Cpu':
				return Cpu;
			default:
				return Rocket;
		}
	};
</script>

<section id="barizaloka" class="py-24 bg-slate-100 dark:bg-slate-900 relative overflow-hidden text-slate-900 dark:text-white transition-colors duration-300">
	<!-- Decorative background glows -->
	<div class="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>
	<div class="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none"></div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
		
		<!-- Section Header -->
		<div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
			<div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/90 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/60 shadow-sm">
				<Sparkles class="w-4 h-4 text-amber-600 dark:text-amber-400" />
				Unit Usaha Profesional
			</div>
			<h2 class="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
				Jasa Pembuatan Website <span class="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-300 bg-clip-text text-transparent">barizaloka.id</span>
			</h2>
			<p class="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
				Usaha profesional buatan <span class="text-slate-900 dark:text-white font-bold">{PERSONAL_INFO.name}</span> untuk membantu UMKM, Perusahaan, Instansi, dan Organisasi memiliki kehadiran digital yang cepat, indah, serta berkinerja tinggi.
			</p>
		</div>

		<!-- Services Cards Grid -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each BARIZALOKA_SERVICES as service}
				{@const Icon = getIconComponent(service.icon)}

				<div
					class="relative bg-white dark:bg-slate-950/90 rounded-3xl p-7 border {service.popular
						? 'border-emerald-500/80 shadow-2xl shadow-emerald-500/10 dark:shadow-emerald-950/50'
						: 'border-slate-200 dark:border-slate-800'} hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between group"
				>
					{#if service.popular}
						<div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950 shadow-md uppercase tracking-wider">
							Paling Diminati
						</div>
					{/if}

					<div>
						<!-- Service Icon -->
						<div class="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-gradient-to-br dark:from-emerald-900/60 dark:to-slate-900 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
							<Icon class="w-7 h-7" />
						</div>

						<h3 class="text-xl font-extrabold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
							{service.title}
						</h3>
						
						<p class="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
							{service.description}
						</p>

						<!-- Price Tag -->
						<div class="mb-6 p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
							<span class="text-xs text-slate-500 dark:text-slate-400 block font-medium">Estimasi Biaya</span>
							<span class="text-lg font-bold text-amber-600 dark:text-amber-300">{service.priceRange}</span>
						</div>

						<!-- Features List -->
						<div class="space-y-3 mb-8">
							<span class="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Fitur Utama:</span>
							<ul class="space-y-2.5">
								{#each service.features as feature}
									<li class="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200 font-medium">
										<Check class="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
										<span>{feature}</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>

					<!-- Direct Order CTA Button -->
					<div>
						<a
							href="https://wa.me/{PERSONAL_INFO.whatsappNumber}?text=Halo%20barizaloka.id,%20saya%20tertarik%20dengan%20layanan%20{encodeURIComponent(service.title)}"
							target="_blank"
							rel="noopener noreferrer"
							class="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-md hover:scale-105 active:scale-95"
						>
							<MessageSquare class="w-4 h-4 mr-2" />
							Pesan / Konsultasi
						</a>
					</div>

				</div>
			{/each}
		</div>

		<!-- Why Choose barizaloka.id Banner -->
		<div class="mt-16 bg-white dark:bg-slate-950/80 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
				<div class="space-y-1">
					<span class="text-emerald-600 dark:text-emerald-400 font-mono text-2xl font-bold">01. High Speed</span>
					<h4 class="text-slate-900 dark:text-white font-bold text-sm">Optimasi Performa Kode</h4>
					<p class="text-xs text-slate-600 dark:text-slate-400">Kode bersih, tanpa bloatware, loading instan di semua perangkat.</p>
				</div>
				<div class="space-y-1">
					<span class="text-emerald-600 dark:text-emerald-400 font-mono text-2xl font-bold">02. Modern UI</span>
					<h4 class="text-slate-900 dark:text-white font-bold text-sm">Desain Trendi & Responsif</h4>
					<p class="text-xs text-slate-600 dark:text-slate-400">Tampilan elegan yang mencerminkan profesionalisme brand Anda.</p>
				</div>
				<div class="space-y-1">
					<span class="text-emerald-600 dark:text-emerald-400 font-mono text-2xl font-bold">03. Transparan</span>
					<h4 class="text-slate-900 dark:text-white font-bold text-sm">Harga & Estimasi Jelas</h4>
					<p class="text-xs text-slate-600 dark:text-slate-400">Tanpa biaya tersembunyi, sistem pengerjaan terstruktur & tepat waktu.</p>
				</div>
				<div class="space-y-1">
					<span class="text-emerald-600 dark:text-emerald-400 font-mono text-2xl font-bold">04. Amanah</span>
					<h4 class="text-slate-900 dark:text-white font-bold text-sm">Dukungan Pemeliharaan</h4>
					<p class="text-xs text-slate-600 dark:text-slate-400">Pendampingan teknis dan konsultasi pengembangan jangka panjang.</p>
				</div>
			</div>
		</div>

	</div>
</section>
