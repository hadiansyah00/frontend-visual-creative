// src/mock/data.js
export const hero = {
  title: "Bikin Website Profesional, Mulai dari 150 Ribu!",
  subtitle:
    "Tingkatkan kepercayaan bisnismu dengan website modern, cepat, dan mobile-friendly. Cocok untuk personal brand, UMKM, hingga perusahaan.",
  ctaText: "Pesan Website Sekarang",
};

export const packages = [
  {
    id: 1,
    name: "Silver",
    price: "150.000 – 250.000",
    description:
      "Paket paling terjangkau untuk Anda yang baru mulai online. Cocok untuk landing page sederhana dan profesional.",
    features: [
      "1 Halaman Landing Page (Tanpa Dashboard)",
      "Desain Responsif (Mobile Friendly)",
      "1x Revisi Desain",
      "Domain Gratisan (Vercel) — atau .my.id +Rp50.000",
      "Menu standar: Navbar, Hero, Profil, Portofolio, Produk, Testimoni, & Kontak",
      "Integrasi WhatsApp / Tombol Hubungi Kami",
      "Hosting & Domain Gratis 1 Minggu",
    ],
    highlight: false,
    note: "Tidak termasuk dashboard admin atau update konten berulang.",
  },
  {
    id: 2,
    name: "Gold",
    price: "750.000",
    description:
      "Ideal untuk UMKM atau personal brand yang ingin punya website profesional dengan kemudahan mengelola konten sendiri.",
    features: [
      "Hingga 5 Halaman Website",
      "Desain Eksklusif & SEO Friendly",
      "Gratis Domain .my.id 1 Tahun",
      "Dashboard Admin untuk Edit Konten",
      "2x Revisi Desain",
      "Free Update Konten 1x (selanjutnya Rp50.000 per section)",
      "Integrasi WhatsApp / Formulir Kontak",
      "Maintenance 1 Bulan",
    ],
    highlight: true,
    note: "Cocok untuk bisnis yang ingin tampil profesional dengan kendali penuh pada konten.",
  },
  {
    id: 3,
    name: "Platinum",
    price: "1.500.000",
    description:
      "Paket profesional dengan fitur lengkap, dashboard admin, dan optimasi SEO dasar. Cocok untuk bisnis yang ingin scale up.",
    features: [
      "Unlimited Halaman Website",
      "Desain Premium + Animasi Interaktif",
      "Gratis Domain .com atau .id 1 Tahun",
      "Dashboard Admin untuk Update Konten Sendiri",
      "3x Revisi + Maintenance 3 Bulan",
      "Integrasi WhatsApp, Email, & Google Analytics",
      "Optimasi Kecepatan & SEO Dasar",
      "Bantuan Optimasi SEO Tambahan (opsional, biaya terpisah)",
    ],
    highlight: false,
    note: "Website siap pakai dan scalable untuk kebutuhan bisnis jangka panjang.",
  },
  {
    id: 4,
    name: "Diamond",
    price: "Mulai dari 2.000.000+",
    description:
      "Solusi fleksibel untuk kebutuhan website kompleks seperti e-commerce, company profile besar, portal, atau aplikasi berbasis web.",
    features: [
      "Desain & Fitur Sepenuhnya Custom",
      "Dapat Disesuaikan untuk Web Apps, E-commerce, atau Sistem Internal",
      "Konsultasi Gratis Sebelum Pengerjaan",
      "Integrasi API, Payment Gateway, & Modul Tambahan",
      "Domain .com / .id Sesuai Kebutuhan",
      "Maintenance & Support Sesuai Perjanjian",
    ],
    highlight: false,
    note: "Harga tergantung kompleksitas dan fitur — cocok untuk proyek khusus.",
  },
];

export const services = [
  {
    id: 1,
    title: "Desain Modern & Responsif",
    description: "Desain yang ramah mobile dan fokus ke konversi.",
    icon: "palette",
  },
  {
    id: 2,
    title: "Proses Cepat & Sederhana",
    description:
      "Kamu kirim materi, kami kerjakan — bisa mulai 1 hari kerja untuk landing page.",
    icon: "zap",
  },
  {
    id: 3,
    title: "Harga Transparan",
    description: "Paket jelas tanpa biaya tersembunyi.",
    icon: "target",
  },
  {
    id: 4,
    title: "Dukungan Penuh",
    description: "Bantuan via WhatsApp untuk setiap tahap pengerjaan.",
    icon: "share-2",
  },
];

export const portfolio = [
  {
    id: 1,
    title: "Landing Page & Form Pendaftaran",
    description:
      "Landing page promo + form pendaftaran yang terintegrasi, termasuk feed berita via WordPress API. Dibangun dengan Nuxt.js untuk performa dan SEO.",
    image: "img/portfolio/snbt.jpg",
    category: "Landing Page",
    type: "landing",
    tech: [
      "Nuxt.js",
      "WordPress API",
      " Tailwind CSS",
      "Vercel",
      "google spreadsheet",
    ],
    site: "https://join.sbh.ac.id",
  },
  {
    id: 2,
    title: "Website Company (Berita via WP API)",
    description:
      "Company profile institusi dengan integrasi berita dari WordPress (headless). Fokus pada struktur informasi dan akses publik.",
    image: "img/portfolio/sbh.jpg",
    category: "Company Profile",
    type: "company",
    tech: ["HTML/CSS", "PHP (WordPress API)", "JavaScript"],
    site: "https://sbh.ac.id",
  },
  {
    id: 3,
    title: "Company Profile (Campus CMS)",
    description:
      "Company profile campus dengan backend CMS custom (Laravel) dan interaktivitas ringan menggunakan Alpine.js. Cocok untuk konten dinamis kampus.",
    image: "img/portfolio/company.jpg",
    category: "Campus Website",
    type: "cms",
    tech: ["Laravel", "Alpine.js", " MySQL", "Tailwind CSS"],
    site: "https://development.sbh.ac.id",
  },
  {
    id: 4,
    title: "Website Organisasi (WordPress)",
    description:
      "Website organisasi berbasis WordPress menggunakan tema Astra dan page builder Elementor. Fokus pada kemudahan pengelolaan konten oleh tim internal.",
    image: "img/portfolio/perempuanaman.jpg",
    category: "WordPress",
    type: "cms",
    tech: ["WordPress", "Astra", "Elementor"],
    site: "https://perempuanman.or.id",
  },
  {
    id: 5,
    title: "Aplikasi Penerimaan Mahasiswa Baru",
    description:
      "Platform Penerimaan Mahasiswa Baru built with Laravel + Sneat theme + Alpine.js. Terintegrasi WhatsApp Gateway, email, dan modul seleksi: tes tulis, kesehatan, wawancara, dsb.",
    image: "img/portfolio/pmb2.jpg",
    category: "Apps / Portal",
    type: "application",
    tech: [
      "Laravel",
      "Sneat Theme",
      "Alpine.js",
      "WA Gateway",
      "MySQL",
      "Gmail API",
    ],
    site: "https://pmb.sbh.ac.id",
  },
  {
    id: 6,
    title: "Sistem Akademik Kampus",
    description:
      "Sistem akademik komprehensif: manajemen mata kuliah, kurikulum, jadwal, absensi, pengelolaan nilai, evaluasi dosen, dan modul berita. Dirancang sebagai portal utama civitas.",
    image: "img/portfolio/siakad.jpg",
    category: "Portal Akademik",
    type: "portal",
    tech: ["Laravel", "MySQL", "Alpine.js", "Tailwind CSS", "chart.js"],
    site: "https://students-portal.sbh.ac.id",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Dewi Rahayu",
    business: "Dapur Dewi",
    testimony:
      "Prosesnya cepat! Landing page saya jadi dalam 2 hari dan langsung dipakai promosi.",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    id: 2,
    name: "Rian Pratama",
    business: "Freelancer",
    testimony:
      "Website portfolio saya tampil profesional, banyak klien baru datang lewat situ.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
];

export const team = {
  title: "Tentang Visual Creative",
  description:
    "Kami tim kreatif yang membantu individu & bisnis punya website menarik dan fungsional — cepat, rapi, dan sesuai brand.",
  vision:
    "Membantu lebih banyak orang dan bisnis tampil profesional di dunia digital.",
  mission:
    "Memberikan layanan pembuatan website yang cepat, modern, dan effisien.",
  teamImage:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
};

export const contact = {
  title: "Hubungi Kami",
  subtitle:
    "Siap bantu wujudkan website impianmu. Konsultasi gratis tanpa komitmen!",
  whatsapp: "081311468814",
  whatsappApi: "6281311468814",
  email: "hadiansyah.mac@gmail.com",
  address: "Cicadas, Kec. Ciampea, Kabupaten Bogor, Jawa Barat",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666!2d106.8451!3d-6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMzEuNyJTIDEwNsKwNTAnNDIuNCJF!5e0!3m2!1sen!2sid!4v1234567890",
};

export const whatsappChat = {
  defaultMessage:
    "Halo Visual Creative, saya mau buat website. Bisa bantu jelaskan paketnya?",
  chatTitle: "Chat dengan Visual Creative",
  placeholder: "Tulis pesan Anda...",
  sendButton: "Kirim",
};
