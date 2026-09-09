<script lang="ts">
	import { PERSONAL_INFO, FAQS } from '$lib/data/portfolioData';
	import { Mail, MapPin, Send, MessageSquare, ChevronDown, ChevronUp, Building2, HelpCircle } from 'lucide-svelte';

	let openFaq = $state<number | null>(0);

	let name = $state('');
	let email = $state('');
	let serviceNeeded = $state('Website Company Profile');
	let message = $state('');

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		const text = `Halo Muhammad Ahlat Thoba'i (barizaloka.id),\n\nNama: ${name}\nEmail: ${email}\nKebutuhan: ${serviceNeeded}\n\nPesan:\n${message}`;
		const url = `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
		window.open(url, '_blank');
	}
</script>

<section id="contact" class="py-24 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white relative transition-colors duration-300">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header -->
		<div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
			<span class="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 rounded-full border border-emerald-300 dark:border-emerald-800/60">
				Hubungi & Konsultasi
			</span>
			<h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
				Mari Diskusi Proyek Anda Bersama Ahlat Thoba'i
			</h2>
			<p class="text-slate-600 dark:text-slate-300 text-base">
				Siap mewujudkan website impian dan aplikasi web berkualitas tinggi untuk usaha atau organisasi Anda melalui <span class="text-emerald-700 dark:text-emerald-400 font-bold">barizaloka.id</span>.
			</p>
		</div>

		<!-- Grid Contact Info & Form -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-24">
			
			<!-- Left Column: Contact Cards & Info -->
			<div class="lg:col-span-5 space-y-6">
				<div class="bg-white dark:bg-slate-950/90 rounded-3xl p-7 border border-slate-200 dark:border-slate-800 space-y-6 shadow-lg">
					<h3 class="text-xl font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
						<Building2 class="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
						Informasi Kontak & Usaha
					</h3>

					<div class="space-y-4 text-sm">
						<div class="flex items-start gap-4">
							<div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
								<MessageSquare class="w-5 h-5" />
							</div>
							<div>
								<span class="text-xs text-slate-500 dark:text-slate-400 block font-medium">WhatsApp / Fast Response</span>
								<a href="https://wa.me/{PERSONAL_INFO.whatsappNumber}" target="_blank" class="font-bold text-emerald-700 dark:text-emerald-300 hover:underline">
									+{PERSONAL_INFO.whatsappNumber}
								</a>
							</div>
						</div>

						<div class="flex items-start gap-4">
							<div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
								<Mail class="w-5 h-5" />
							</div>
							<div>
								<span class="text-xs text-slate-500 dark:text-slate-400 block font-medium">Email Resmi Usaha</span>
								<a href="mailto:{PERSONAL_INFO.email}" class="font-bold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400">
									{PERSONAL_INFO.email}
								</a>
							</div>
						</div>

						<div class="flex items-start gap-4">
							<div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
								<MapPin class="w-5 h-5" />
							</div>
							<div>
								<span class="text-xs text-slate-500 dark:text-slate-400 block font-medium">Lokasi</span>
								<span class="font-bold text-slate-800 dark:text-slate-200">{PERSONAL_INFO.location}</span>
							</div>
						</div>
					</div>

					<div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
						<span class="font-bold text-amber-700 dark:text-amber-300 block mb-1">Jam Operasional Konsultasi:</span>
						Senin - Sabtu: 08.00 - 20.00 WIB.<br />
						Pesan yang masuk akan dibalas dengan respons cepat dan ramah.
					</div>
				</div>
			</div>

			<!-- Right Column: Interactive Contact Form -->
			<div class="lg:col-span-7">
				<form
					onsubmit={handleSubmit}
					class="bg-white dark:bg-slate-950/90 rounded-3xl p-7 sm:p-9 border border-slate-200 dark:border-slate-800 space-y-5 shadow-xl"
				>
					<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Formulir Pesan / Konsultasi</h3>
					
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
						<div>
							<label for="name" class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Nama Lengkap</label>
							<input
								type="text"
								id="name"
								bind:value={name}
								required
								placeholder="Nama Anda"
								class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm"
							/>
						</div>
						<div>
							<label for="email" class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Email</label>
							<input
								type="email"
								id="email"
								bind:value={email}
								required
								placeholder="email@domain.com"
								class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm"
							/>
						</div>
					</div>

					<div>
						<label for="service" class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Layanan yang Dibutuhkan</label>
						<select
							id="service"
							bind:value={serviceNeeded}
							class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 text-sm"
						>
							<option value="Landing Page High-Conversion">Landing Page High-Conversion</option>
							<option value="Website Company Profile">Website Company Profile / Profil Usaha</option>
							<option value="Toko Online / E-Commerce">Toko Online / E-Commerce</option>
							<option value="Custom Web Application">Custom Web Application / System</option>
							<option value="Konsultasi IT / Pemeliharaan">Konsultasi IT / Pemeliharaan Website</option>
						</select>
					</div>

					<div>
						<label for="message" class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Detail Pesan / Pertanyaan</label>
						<textarea
							id="message"
							bind:value={message}
							rows="4"
							required
							placeholder="Jelaskan kebutuhan website atau proyek Anda..."
							class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm"
						></textarea>
					</div>

					<button
						type="submit"
						class="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-emerald-500/20"
					>
						<Send class="w-4 h-4 mr-2" />
						Kirim Pesan via WhatsApp
					</button>
				</form>
			</div>

		</div>

		<!-- FAQ Section -->
		<div class="max-w-4xl mx-auto border-t border-slate-200 dark:border-slate-800 pt-16">
			<div class="text-center mb-10 space-y-2">
				<div class="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
					<HelpCircle class="w-4 h-4" />
					Pertanyaan Sering Diajukan
				</div>
				<h3 class="text-2xl font-bold text-slate-900 dark:text-white">FAQ (Frequently Asked Questions)</h3>
			</div>

			<div class="space-y-4">
				{#each FAQS as faq, i}
					<div class="bg-white dark:bg-slate-950/80 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors shadow-sm">
						<button
							onclick={() => toggleFaq(i)}
							class="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center justify-between hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
						>
							<span>{faq.question}</span>
							{#if openFaq === i}
								<ChevronUp class="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 ml-2" />
							{:else}
								<ChevronDown class="w-5 h-5 text-slate-400 shrink-0 ml-2" />
							{/if}
						</button>
						{#if openFaq === i}
							<div class="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-900">
								{faq.answer}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>

	</div>
</section>
