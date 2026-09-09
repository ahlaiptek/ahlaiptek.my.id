<script lang="ts">
	import { PERSONAL_INFO } from '$lib/data/portfolioData';
	import { Calculator, Check, MessageSquare, Sparkles, Clock } from 'lucide-svelte';

	interface SiteTypeOption {
		id: string;
		name: string;
		basePrice: number;
		duration: string;
		description: string;
	}

	interface AddonOption {
		id: string;
		name: string;
		price: number;
		selected: boolean;
	}

	const siteTypes: SiteTypeOption[] = [
		{
			id: 'landing-page',
			name: 'Landing Page High-Conversion',
			basePrice: 750000,
			duration: '2 - 4 Hari',
			description: 'Cocok untuk jualan produk, campaign promo, atau penawaran satu layanan.'
		},
		{
			id: 'company-profile',
			name: 'Company Profile & Website Usaha',
			basePrice: 1500000,
			duration: '5 - 7 Hari',
			description: 'Representasi profesional bisnis, sekolah, instansi, atau organisasi.'
		},
		{
			id: 'e-commerce',
			name: 'Toko Online / E-Commerce',
			basePrice: 2500000,
			duration: '7 - 12 Hari',
			description: 'Katalog produk, keranjang belanja, hitung ongkir & checkout WA.'
		},
		{
			id: 'custom-app',
			name: 'Custom Web Application / SaaS',
			basePrice: 3500000,
			duration: '14 - 30 Hari',
			description: 'Sistem kustom internal, portal informasi, dashboard & REST API.'
		}
	];

	let selectedTypeId = $state<string>('company-profile');

	let addons = $state<AddonOption[]>([
		{ id: 'cms', name: 'CMS (Admin Dashboard Pengelola Konten)', price: 300000, selected: true },
		{ id: 'domain', name: 'Free Domain (.com/.id) & Hosting 1 Thn', price: 350000, selected: true },
		{ id: 'whatsapp', name: 'Integrasi Fast WhatsApp Direct Checkout', price: 150000, selected: true },
		{ id: 'seo', name: 'SEO On-Page & Meta Optimization', price: 250000, selected: false },
		{ id: 'payment', name: 'Integrasi Payment Gateway / RajaOngkir', price: 500000, selected: false },
		{ id: 'multilingual', name: 'Fitur Multi-Bahasa (Indonesia & Inggris)', price: 400000, selected: false }
	]);

	let selectedType = $derived(siteTypes.find((t) => t.id === selectedTypeId) || siteTypes[1]);

	let totalPrice = $derived(() => {
		const base = selectedType.basePrice;
		const addonsTotal = addons.filter((a) => a.selected).reduce((acc, curr) => acc + curr.price, 0);
		return base + addonsTotal;
	});

	function toggleAddon(id: string) {
		const index = addons.findIndex((a) => a.id === id);
		if (index !== -1) {
			addons[index].selected = !addons[index].selected;
		}
	}

	function formatRupiah(num: number) {
		return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
	}

	let selectedAddonNames = $derived(
		addons.filter((a) => a.selected).map((a) => a.name).join(', ')
	);

	let waMessage = $derived(
		`Halo barizaloka.id (Muhammad Ahlat Thoba'i),\nSaya ingin berkonsultasi mengenai pembuatan website:\n\n- *Tipe Website*: ${selectedType.name}\n- *Fitur Tambahan*: ${selectedAddonNames || 'Tanpa Tambahan'}\n- *Estimasi Biaya*: ${formatRupiah(totalPrice())}\n- *Estimasi Waktu*: ${selectedType.duration}\n\nMohon informasi langkah selanjutnya.`
	);
</script>

<section id="calculator" class="py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative border-t border-slate-200 dark:border-slate-800/60 transition-colors duration-300">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header -->
		<div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
			<div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
				<Calculator class="w-4 h-4 text-amber-600 dark:text-amber-400" />
				Hitung Simulasi Biaya
			</div>
			<h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
				Kalkulator Estimasi Pembuatan Website <span class="text-emerald-600 dark:text-emerald-400">barizaloka.id</span>
			</h2>
			<p class="text-slate-600 dark:text-slate-300 text-base">
				Hitung estimasi anggaran dan waktu pembuatan website sesuai dengan kebutuhan bisnis Anda secara transparan.
			</p>
		</div>

		<!-- Calculator Interactive Box -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white dark:bg-slate-900/90 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl">
			
			<!-- Left Options: Website Type & Features -->
			<div class="lg:col-span-7 space-y-8">
				
				<!-- 1. Select Type -->
				<div>
					<span class="block text-sm font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-4">
						1. Pilih Jenis Website:
					</span>
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{#each siteTypes as type}
							<button
								type="button"
								onclick={() => (selectedTypeId = type.id)}
								class="text-left p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between {selectedTypeId === type.id
									? 'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-500 text-slate-900 dark:text-white shadow-md ring-2 ring-emerald-400/30'
									: 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'}"
							>
								<div>
									<div class="flex items-center justify-between mb-1">
										<h4 class="font-bold text-sm text-slate-900 dark:text-white">{type.name}</h4>
										{#if selectedTypeId === type.id}
											<span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
										{/if}
									</div>
									<p class="text-xs text-slate-600 dark:text-slate-400 mb-3">{type.description}</p>
								</div>
								<div class="text-xs font-bold text-emerald-700 dark:text-emerald-400">
									Mulai {formatRupiah(type.basePrice)}
								</div>
							</button>
						{/each}
					</div>
				</div>

				<!-- 2. Select Addon Features -->
				<div>
					<span class="block text-sm font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-4">
						2. Fitur Tambahan (Opsional):
					</span>
					<div class="space-y-3">
						{#each addons as addon}
							<button
								type="button"
								onclick={() => toggleAddon(addon.id)}
								class="w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between {addon.selected
									? 'bg-slate-50 dark:bg-slate-950 border-emerald-500 text-slate-900 dark:text-white'
									: 'bg-slate-50/50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 hover:border-slate-300'}"
							>
								<div class="flex items-center gap-3">
									<div class="w-5 h-5 rounded border flex items-center justify-center transition-colors {addon.selected ? 'bg-emerald-500 border-emerald-500 text-slate-950' : 'border-slate-300 dark:border-slate-700'}">
										{#if addon.selected}
											<Check class="w-3.5 h-3.5 stroke-[3] text-white" />
										{/if}
									</div>
									<span class="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">{addon.name}</span>
								</div>
								<span class="text-xs font-mono font-bold text-amber-600 dark:text-amber-300">
									+{formatRupiah(addon.price)}
								</span>
							</button>
						{/each}
					</div>
				</div>

			</div>

			<!-- Right Result Summary Card -->
			<div class="lg:col-span-5 flex flex-col justify-between bg-slate-900 text-white dark:bg-slate-950 rounded-2xl p-6 sm:p-8 border border-slate-800 dark:border-emerald-900/40 shadow-xl">
				
				<div class="space-y-6">
					<div class="flex items-center gap-2 pb-4 border-b border-slate-800">
						<Sparkles class="w-5 h-5 text-amber-400" />
						<h3 class="font-extrabold text-lg text-white">Ringkasan Estimasi</h3>
					</div>

					<div class="space-y-3 text-xs sm:text-sm">
						<div class="flex justify-between items-center text-slate-300">
							<span class="text-slate-400">Jenis Website:</span>
							<span class="font-bold text-white text-right max-w-[200px]">{selectedType.name}</span>
						</div>
						
						<div class="flex justify-between items-center text-slate-300">
							<span class="text-slate-400">Jumlah Fitur Tambahan:</span>
							<span class="font-bold text-emerald-400">{addons.filter(a => a.selected).length} Fitur</span>
						</div>

						<div class="flex justify-between items-center text-slate-300">
							<span class="text-slate-400 flex items-center gap-1">
								<Clock class="w-4 h-4 text-emerald-400" />
								Estimasi Pengerjaan:
							</span>
							<span class="font-bold text-amber-300">{selectedType.duration}</span>
						</div>
					</div>

					<!-- Total Price Display -->
					<div class="pt-6 border-t border-slate-800 space-y-1">
						<span class="text-xs uppercase tracking-wider font-semibold text-slate-400 block">Total Estimasi Anggaran:</span>
						<span class="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono tracking-tight block">
							{formatRupiah(totalPrice())}
						</span>
						<span class="text-[11px] text-slate-400 block pt-1">
							*Estimasi bersifat fleksibel sesuai kesepakatan final requirement.
						</span>
					</div>
				</div>

				<!-- WhatsApp Direct Order CTA -->
				<div class="mt-8">
					<a
						href="https://wa.me/{PERSONAL_INFO.whatsappNumber}?text={encodeURIComponent(waMessage)}"
						target="_blank"
						rel="noopener noreferrer"
						class="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-[length:200%_auto] hover:bg-right transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95"
					>
						<MessageSquare class="w-4 h-4 mr-2" />
						Kirim Hasil Estimasi via WA
					</a>
				</div>

			</div>

		</div>

	</div>
</section>
