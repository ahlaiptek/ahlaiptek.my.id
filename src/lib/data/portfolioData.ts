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
	tagline: "Software Engineer & Founder barizaloka.id",
	subtagline: "Simpatisan Muhammadiyah | Tech Enthusiast | Solusi Web Profesional",
	bioSummary: "Menyukai dunia pemrograman sejak usia 12 tahun, memperdalam rekayasa perangkat lunak secara serius sejak usia 18 tahun. Memegang teguh semangat Islam Berkemajuan & integritas tinggi untuk menghadirkan solusi teknologi yang bermanfaat dan bernilai tinggi.",
	businessName: "barizaloka.id",
	businessTagline: "Jasa Pembuatan Website & Aplikasi Web Profesional",
	businessWebsite: "https://barizaloka.id",
	whatsappNumber: "6285123456789", // Contoh kontak WA profesional
	email: "ahlat@barizaloka.id",
	location: "Indonesia",
	status: "Open for Projects & Collaborations",
	socials: {
		github: "https://github.com",
		linkedin: "https://linkedin.com",
		instagram: "https://instagram.com",
		whatsapp: "https://wa.me/6285123456789"
	}
};

export const TIMELINE_DATA: TimelineItem[] = [
	{
		year: "Masa Awal",
		age: "Usia 12 Tahun",
		title: "Perkenalan Pertama dengan Dunia Koding",
		subtitle: "Rasa Ingin Tahu & Eksplorasi Logika Komputer",
		description: "Pertama kali tersentuh oleh keajaiban baris kode. Dimulai dari mengutak-atik HTML/CSS dasar, logika pemrograman sederhana, dan eksperimen membuat halaman web kecil.",
		icon: "Sparkles",
		highlights: [
			"Belajar logika dasar & struktur HTML/CSS",
			"Sensasi pertama melihat kode menjadi visual di layar",
			"Membangun landasan antusiasme pada dunia digital"
		]
	},
	{
		year: "Fase Pendalaman",
		age: "Usia 18 Tahun",
		title: "Mulai Lebih Serius & Dedikasi Tinggi",
		subtitle: "Transisi Menuju Software Engineering",
		description: "Mengambil langkah serius untuk menjadikan pemrograman sebagai fondasi karir. Mendalami struktur data, rekayasa perangkat lunak, arsitektur web modern, serta manajemen database.",
		icon: "Code2",
		highlights: [
			"Penguasaan JavaScript/TypeScript modern & Framework Web",
			"Memahami arsitektur RESTful API & manajemen database",
			"Eksplorasi best practices, clean code, & problem solving"
		]
	},
	{
		year: "Profesi & Karir",
		age: "Hingga Sekarang",
		title: "Menjadi Software Engineer Berkualitas",
		subtitle: "Standar Industri & Islam Berkemajuan",
		description: "Terus mengasah kemampuan sebagai Software Engineer yang adaptif, fokus pada kualitas sistem, keamanan, kecepatan peforma, serta kemudahan bagi pengguna.",
		icon: "Laptop",
		highlights: [
			"Spesialisasi pada modern web stack (SvelteKit, React, Node.js, Cloud)",
			"Menerapkan prinsip integritas, kedisiplinan, & hasil kerja terbaik (Ihsan)",
			"Menangani proyek-proyek web komersial dan organisasi"
		]
	},
	{
		year: "Puncak Langkah",
		age: "Era Profesional",
		title: "Mendirikan barizaloka.id",
		subtitle: "Jasa Pembuatan Website Profesional & Amanah",
		description: "Membangun unit usaha barizaloka.id untuk memberikan solusi digital bagi pelaku usaha, instansi, dan organisasi yang membutuhkan website modern berstandar tinggi.",
		icon: "Rocket",
		highlights: [
			"Platform pembuatan website siap pakai & custom web apps",
			"Transparansi, garansi performa, & pendampingan teknis",
			"Membantu transformasi digital UMKM dan instansi secara nasional"
		]
	}
];

export const MUHAMMADIYAH_VALUES: ValueItem[] = [
	{
		title: "Islam Berkemajuan & Teknologi",
		subtitle: "Teknologi sebagai Alat Kebaikan",
		description: "Memanfaatkan ilmu koding dan rekayasa perangkat lunak untuk kemajuan ummat, efisiensi bisnis, dan kemaslahatan bersama.",
		icon: "Compass"
	},
	{
		title: "Integritas & Amanah (Ihsan)",
		subtitle: "Kualitas Tanpa Kompromi",
		description: "Setiap baris kode dan layanan di barizaloka.id dibuat dengan transparansi, ketelitian, serta prinsip kerja terbaik.",
		icon: "ShieldCheck"
	},
	{
		title: "Pembelajar Sepanjang Hayat",
		subtitle: "Continuous Improvement",
		description: "Dunia teknologi bergerak cepat. Dari usia 12 tahun hingga saat ini, semangat belajar dan mengikuti perkembangan terkini tidak pernah padam.",
		icon: "BookOpen"
	},
	{
		title: "Solutif & Berorientasi Manfaat",
		subtitle: "Solusi Berkelanjutan",
		description: "Fokus mendengarkan kebutuhan klien dan menghadirkan solusi sistem yang efisien, mudah digunakan, dan impactful.",
		icon: "Lightbulb"
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
			{ name: "Node.js / Express", level: "Advanced" },
			{ name: "RESTful API Design", level: "Advanced" },
			{ name: "PostgreSQL / MySQL", level: "Intermediate" },
			{ name: "Supabase / Firebase", level: "Advanced" },
			{ name: "Web Security & Auth", level: "Advanced" }
		]
	},
	{
		title: "Engineering Best Practices",
		skills: [
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
