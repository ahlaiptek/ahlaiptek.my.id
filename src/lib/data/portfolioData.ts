export interface TimelineItem {
	year: string;
	age: string;
	title: string;
	subtitle: string;
	description: string;
	icon: string;
	highlights: string[];
}

export interface ValueItem {
	title: string;
	subtitle: string;
	description: string;
	icon: string;
}

export interface ProjectItem {
	id: string;
	title: string;
	category: 'web-app' | 'company-profile' | 'islamic-tech' | 'e-commerce';
	categoryLabel: string;
	description: string;
	longDescription: string;
	image: string;
	tags: string[];
	demoUrl?: string;
	repoUrl?: string;
	featured: boolean;
	metrics?: string;
}

export interface ServiceItem {
	id: string;
	title: string;
	description: string;
	features: string[];
	priceRange: string;
	popular?: boolean;
	icon: string;
}

export const PERSONAL_INFO = {
	name: "Muhammad Ahlat Thoba'i",
	nickName: "Ahlat",
	tagline: "Software Engineer | Santri NU | Penuntut Ilmu Islam | Entrepreneur",
	subtagline: "Sinergi Keilmuan Pesantren NU & Muhammadiyah | Meneladani KH Ahmad Dahlan",
	bioSummary: "Santri NU & Simpatisan Muhammadiyah yang menyukai koding sejak usia 12 tahun dan memperdalam rekayasa perangkat lunak sejak usia 18 tahun (termasuk pengalaman Laravel mulai dari Laravel 10 & WordPress dasar). Bertekad membawa keilmuan tradisi pesantren NU (hafalan kitab-kitab & fiqih) ke Muhammadiyah, serta meneladani sosok KH Ahmad Dahlan sebagai pengusaha dan pendakwah melalui software engineering, bimbel koding, dan penyedia hosting/server.",
	email: "ahlatthobai@gmail.com",
	location: "Indonesia",
	status: "Software Engineer, Penuntut Ilmu Islam & Entrepreneur",
	socials: {
		github: "https://github.com",
		linkedin: "https://linkedin.com",
		instagram: "https://instagram.com"
	}
};

export const TIMELINE_DATA: TimelineItem[] = [
	{
		year: "Masa Awal",
		age: "Usia 12 Tahun",
		title: "Perkenalan Koding & Logika Komputer",
		subtitle: "Rasa Ingin Tahu & Belajar Mandiri",
		description: "Pertama kali tersentuh oleh keajaiban baris kode pada usia 12 tahun karena game Minecraft Java Edition. Mengutak-atik pemrograman sederhana; Java, PHP, Python, C++, JavaScript, HTML/CSS, dan struktur web dasar.",
		icon: "Sparkles",
		highlights: [
			"Eksplorasi dasar logika pemrograman dan algoritma",
			"Sensasi pertama melihat kode menjadi tampilan di layar",
			"Menumbuhkan minat mendalam pada teknologi"
		]
	},
	{
		year: "Fase Pendalaman & Titik Balik",
		age: "Usia 18 - 21 Tahun",
		title: "Rekayasa Perangkat Lunak & Santri NU",
		subtitle: "Koding Serius & Kebangkitan Penuntut Ilmu",
		description: "Mulai secara serius memperdalam Software Engineering di usia 18 tahun. Mempelajari dan mengembangkan aplikasi web dengan framework Laravel (berkelanjutan mulai dari Laravel 10+) serta pengelolaan website berbasis WordPress dasar. Di saat bersamaan menimba ilmu sebagai santri NU dengan hafalan kitab-kitab klasik dan fiqih. Sempat mengalami penurunan parah saat penyesuaian penuntut ilmu Islam ini akibat time management yang buruk & mengabaikan pembelajaran hingga peringkat sempat ke posisi belakang (padahal awalnya 5 besar). Namun pada usia 21 tahun, berkomitmen penuh untuk memperbaiki semuanya dan mengendalikan segalanya dengan Akal yang Terjaga, dan Jiwa yang Menyala.",
		icon: "BookOpen",
		highlights: [
			"Pengalaman Backend: Laravel (berkelanjutan mulai Laravel 10+)",
			"Pengalaman CMS: WordPress dasar & pengelolaan situs",
			"Penguasaan JavaScript/TypeScript modern & Fullstack Web",
			"Mendalami khazanah pesantren NU (hafalan kitab-kitab & fiqih)",
			"Kebangkitan Usia 21: Komitmen mengendalikan hidup dengan Akal yang Terjaga, dan Jiwa yang Menyala"
		]
	},
	{
		year: "Sinergi Keilmuan",
		age: "Fase Integrasi",
		title: "Santri NU di Persyarikatan Muhammadiyah",
		subtitle: "Membawa Khazanah Pesantren NU ke Muhammadiyah",
		description: "Membawa dan mendialogkan keilmuan tradisi pesantren NU (hafalan kitab & fiqih) ke dalam persyarikatan Muhammadiyah yang berkemajuan.",
		icon: "Compass",
		highlights: [
			"Sinergi kedalaman kitab pesantren NU & modernitas Muhammadiyah",
			"Prinsip integritas, kejujuran, dan ihsan dalam berkarya",
			"Semangat ukhuwah dan kemaslahatan ummat"
		]
	},
	{
		year: "Visi & Cita-cita",
		age: "Era Sekarang & Depan",
		title: "Meneladani Sosok KH Ahmad Dahlan",
		subtitle: "Software Engineer, Penuntut Ilmu & Entrepreneur",
		description: "Bercita-cita meneladani KH Ahmad Dahlan yang seorang pedagang/pengusaha sekaligus pendakwah: mengelola jasa website, bimbel koding, dan berikhtiar ekspansi ke penyedia hosting & server.",
		icon: "Rocket",
		highlights: [
			"Pengembangan layanan Pembuatan Website & Custom Apps",
			"Program Bimbel Koding (Bimbingan Belajar Pemrograman)",
			"Target Ekspansi: Penyedia Infrastruktur Cloud Hosting & Server"
		]
	}
];

export const MUHAMMADIYAH_VALUES: ValueItem[] = [
	{
		title: "Keilmuan Pesantren NU & Muhammadiyah",
		subtitle: "Bridge of Islamic Scholarship",
		description: "Membawa keilmuan tradisi pesantren NU seperti hafalan kitab-kitab klasik dan fiqih ke dalam persyarikatan Muhammadiyah yang berkemajuan.",
		icon: "BookOpen"
	},
	{
		title: "Meneladani KH Ahmad Dahlan",
		subtitle: "Pedagang, Pengusaha & Pendakwah",
		description: "Bercita-cita seperti sosok KH Ahmad Dahlan: Menjadi seorang Software Engineer, penuntut ilmu Islam, sekaligus pengusaha yang berintegritas.",
		icon: "Compass"
	},
	{
		title: "Jasa Website & Bimbel Koding",
		subtitle: "Edukasi & Solusi Digital",
		description: "Mengembangkan bisnis jasa pembuatan website dan membuka program Bimbel Koding untuk mencetak generasi talenta digital yang unggul.",
		icon: "Lightbulb"
	},
	{
		title: "Cita-cita Server & Hosting Provider",
		subtitle: "Expansion to Cloud Infrastructure",
		description: "Berikhtiar dan berharap kelak dapat berekspansi menjadi penyedia infrastruktur cloud hosting & server mandiri berkualitas tinggi.",
		icon: "ShieldCheck"
	}
];

export const BARIZALOKA_SERVICES: ServiceItem[] = [
	{
		id: "landing-page",
		title: "Landing Page High-Conversion",
		description: "Halaman penawaran produk/jasa yang didesain modern, responsif, cepat, dan dioptimalkan untuk mengkonversi pengunjung menjadi pembeli.",
		features: [
			"Desain UI/UX Eksklusif & Responsif Mobile",
			"Kecepatan Akses Ultra Fast (Skor Google PageSpeed 90+)",
			"Integrasi WhatsApp Chat & Form Leads",
			"SEO On-Page & Schema Markup",
			"Free Domain (.com / .id) & SSL Certificate"
		],
		priceRange: "Mulai Rp 750.000",
		icon: "Zap"
	},
	{
		id: "company-profile",
		title: "Website Company Profile & Profil Usaha",
		description: "Website profesional untuk merepresentasikan bisnis, instansi, sekolah, atau organisasi Anda dengan citra terpercaya.",
		features: [
			"Multi-halaman (Home, About, Services, Gallery, Contact, Blog)",
			"CMS Mudah Mengelola Konten",
			"Integrasi Google Maps & Media Sosial",
			"Fitur Galeri Foto & Testimoni Pelanggan",
			"Email Bisnis Profesional (@namadomain.com)"
		],
		priceRange: "Mulai Rp 1.500.000",
		popular: true,
		icon: "Building2"
	},
	{
		id: "web-app",
		title: "Custom Web Application & SaaS",
		description: "Pengembangan sistem web kustom sesuai kebutuhan spesifik bisnis Anda (Sistem Informasi, Manajemen Inventaris, CRM, Portal Internal).",
		features: [
			"Arsitektur Modul Kustom (Fullstack SvelteKit/React + Node API)",
			"Sistem Otentikasi Multi-Role & Keamanan Tinggi",
			"Laporan Real-time & Visualisasi Dashboard",
			"API Integration & Database Performance Optimization",
			"Dukungan Pemeliharaan & Scalability Cloud"
		],
		priceRange: "Mulai Rp 3.500.000",
		icon: "Cpu"
	}
];

export const PROJECTS_DATA: ProjectItem[] = [
	{
		id: "barizaloka-official",
		title: "barizaloka.id - Official Platform",
		category: "company-profile",
		categoryLabel: "Company Profile & Service",
		description: "Website resmi barizaloka.id penyedia jasa pembuatan website & solusi software profesional.",
		longDescription: "Didevelop menggunakan SvelteKit dan Tailwind CSS. Memiliki performa luar biasa, kalkulator estimasi biaya interaktif, katalog layanan, dan integrasi WhatsApp instant quote.",
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
		tags: ["SvelteKit", "Tailwind CSS", "TypeScript", "Vercel"],
		featured: true,
		metrics: "100% Mobile Responsive | 99+ PageSpeed Score"
	},
	{
		id: "muhammadiyah-hub",
		title: "Portal Digital Komunitas Muhammadiyah",
		category: "islamic-tech",
		categoryLabel: "Islamic Tech & Community",
		description: "Sistem manajemen informasi kegiatan, artikel dakwah berkemajuan, dan inventarisasi aset pengurus ranting/cabang.",
		longDescription: "Aplikasi berbasis web untuk memudahkan pendataan anggota, jadwal pengajian, transparansi kas infaq/sedekah, dan penyebaran berita kegiatan organisasi secara real-time.",
		image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80",
		tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
		featured: true,
		metrics: "Memudahkan pengelolaan kegiatan & transparansi keuangan"
	},
	{
		id: "enterprise-dashboard",
		title: "Sistem Informasi Manajemen Usaha (SIMU)",
		category: "web-app",
		categoryLabel: "Custom Web App",
		description: "Dashboard analitik dan manajemen pesanan internal untuk bisnis penjualan produk digital & jasa.",
		longDescription: "Dashboard komprehensif dengan grafik statistik pendapatan, pemantauan status pesanan, integrasi payment gateway, dan manajemen hak akses karyawan.",
		image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
		tags: ["SvelteKit", "Chart.js", "Supabase", "TypeScript"],
		featured: true,
		metrics: "Meningkatkan efisiensi kerja tim hingga 40%"
	},
	{
		id: "ecommerce-store",
		title: "Platform E-Commerce Produk Herbal & Busana Muslim",
		category: "e-commerce",
		categoryLabel: "E-Commerce",
		description: "Toko online modern dengan keranjang belanja, integrasi hitung ongkir otomatis, dan checkout WhatsApp.",
		longDescription: "Solusi e-commerce ringan dan responsif tanpa lag. Pengunjung dapat memilih varian produk, mengkalkulasi total harga beserta ongkir, lalu checkout secara praktis ke WhatsApp seller.",
		image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
		tags: ["Svelte", "Tailwind CSS", "RajaOngkir API", "WhatsApp API"],
		featured: false,
		metrics: "Transisi belanja lancar & rasio konversi tinggi"
	}
];

export const SKILL_CATEGORIES = [
	{
		title: "Frontend Engineering",
		skills: [
			{ name: "Svelte / SvelteKit", level: "Expert" },
			{ name: "JavaScript / TypeScript", level: "Advanced" },
			{ name: "Tailwind CSS & UI Systems", level: "Expert" },
			{ name: "React.js / Next.js", level: "Advanced" },
			{ name: "HTML5 / CSS3 / Web Standards", level: "Expert" }
		]
	},
	{
		title: "Backend & Database",
		skills: [
			{ name: "Laravel (Mulai v10+)", level: "Advanced" },
			{ name: "Node.js / Express", level: "Advanced" },
			{ name: "RESTful API Design", level: "Advanced" },
			{ name: "PostgreSQL / MySQL", level: "Intermediate" },
			{ name: "Supabase / Firebase", level: "Advanced" },
			{ name: "Web Security & Auth", level: "Advanced" }
		]
	},
	{
		title: "CMS & Best Practices",
		skills: [
			{ name: "WordPress (Dasar / CMS)", level: "Intermediate" },
			{ name: "Clean Code & Architecture", level: "Advanced" },
			{ name: "Git & Version Control", level: "Expert" },
			{ name: "Web Performance Optimization", level: "Expert" },
			{ name: "Responsive & Accessible UI", level: "Expert" },
			{ name: "SEO & Digital Analytics", level: "Advanced" }
		]
	}
];

export const FAQS = [
	{
		question: "Siapa Muhammad Ahlat Thoba'i?",
		answer: "Muhammad Ahlat Thoba'i (Ahlat) adalah seorang Software Engineer dan simpatisan Muhammadiyah yang menyukai koding sejak umur 12 tahun, mendalami rekayasa perangkat lunak lebih serius sejak umur 18 tahun, dan merupakan pendiri barizaloka.id."
	},
	{
		question: "Apa itu barizaloka.id?",
		answer: "barizaloka.id adalah penyedia layanan jasa pembuatan website profesional, landing page, dan aplikasi web kustom yang dibangun dengan teknologi terkini, performa tinggi, desain estetik, serta layanan transparan dan terpercaya."
	},
	{
		question: "Berapa lama proses pembuatan website di barizaloka.id?",
		answer: "Waktu pengerjaan bervariasi sesuai kompleksitas: Landing Page (2-5 hari kerja), Company Profile (5-10 hari kerja), dan Web Application Kustom (2-4 minggu kerja)."
	},
	{
		question: "Apakah website buatan barizaloka.id sudah ramah HP (Responsive) dan cepat?",
		answer: "Tentu! Seluruh website garapan barizaloka.id dijamin 100% responsif di semua ukuran layar (smartphone, tablet, desktop) dan dioptimalkan agar loading sangat cepat."
	},
	{
		question: "Bagaimana cara melakukan pemesanan atau konsultasi proyek?",
		answer: "Anda dapat berkonsultasi secara gratis melalui tombol kontak WhatsApp di situs ini, atau mengisi form kalkulator estimasi biaya yang tersedia."
	}
];
