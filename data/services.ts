export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  promoTag?: string;
  gridSpan: 'wide' | 'narrow' | 'default';
  image: {
    src: string;
    srcset: string;
    sizes: string;
    alt: string;
    width: number;
    height: number;
  };
}

export const servicesData: ServiceItem[] = [
  {
    id: 'pembuatan-web',
    title: 'Pembuatan web',
    description: 'Company profile, toko online, atau landing page yang cepat, responsif, dan siap SEO, domain sudah termasuk, jadi terima beres.',
    price: 'Rp 450rb',
    gridSpan: 'wide',
    image: {
      src: '/assets/resp/web@640.webp',
      srcset: '/assets/resp/web@480.webp 480w, /assets/resp/web@640.webp 640w, /assets/resp/web@960.webp 960w',
      sizes: '(max-width:640px) 92vw, (max-width:1100px) 46vw, 620px',
      alt: 'Tangkapan layar contoh website bisnis',
      width: 1920,
      height: 1280,
    },
  },
  {
    id: 'ucapan-selamat',
    title: 'Ucapan selamat',
    description: 'Kartu ucapan digital untuk ulang tahun, wisuda, hingga promosi jabatan, personal dan berkesan.',
    price: 'Rp 100rb',
    gridSpan: 'narrow',
    image: {
      src: '/assets/resp/greeting@640.webp',
      srcset: '/assets/resp/greeting@480.webp 480w, /assets/resp/greeting@640.webp 640w, /assets/resp/greeting@960.webp 960w',
      sizes: '(max-width:640px) 92vw, (max-width:1100px) 46vw, 420px',
      alt: 'Contoh kartu ucapan digital',
      width: 1920,
      height: 1280,
    },
  },
  {
    id: 'undangan-nikah',
    title: 'Undangan nikah',
    description: 'Undangan interaktif dengan hitung mundur, galeri foto, peta lokasi, dan RSVP otomatis, tinggal bagikan lewat WhatsApp.',
    price: 'Rp 100rb',
    originalPrice: 'Rp 150rb',
    promoTag: 'Promo',
    gridSpan: 'narrow',
    image: {
      src: '/assets/resp/wedding@640.webp',
      srcset: '/assets/resp/wedding@480.webp 480w, /assets/resp/wedding@640.webp 640w, /assets/resp/wedding@960.webp 960w',
      sizes: '(max-width:640px) 92vw, (max-width:1100px) 46vw, 420px',
      alt: 'Contoh undangan pernikahan digital',
      width: 1920,
      height: 1280,
    },
  },
  {
    id: 'portofolio',
    title: 'Portofolio',
    description: 'Etalase karya yang rapi dan meyakinkan untuk desainer, fotografer, developer, dan content creator.',
    price: 'Rp 150rb',
    gridSpan: 'wide',
    image: {
      src: '/assets/resp/portfolio@640.webp',
      srcset: '/assets/resp/portfolio@480.webp 480w, /assets/resp/portfolio@640.webp 640w, /assets/resp/portfolio@960.webp 960w',
      sizes: '(max-width:640px) 92vw, (max-width:1100px) 46vw, 620px',
      alt: 'Contoh website portofolio profesional',
      width: 1920,
      height: 1280,
    },
  },
  {
    id: 'jasa-dashboard',
    title: 'Jasa dashboard',
    description: 'Dashboard admin dan laporan yang rapi untuk sekolah, toko, atau bisnis, penjualan, absensi, dan stok terpantau dari satu layar, bisa dibuka dari HP.',
    price: 'Menyesuaikan kebutuhan',
    gridSpan: 'default',
    image: {
      src: '/assets/resp/dashboard@640.webp',
      srcset: '/assets/resp/dashboard@480.webp 480w, /assets/resp/dashboard@640.webp 640w, /assets/resp/dashboard@960.webp 960w',
      sizes: '(max-width:640px) 92vw, (max-width:1100px) 46vw, 520px',
      alt: 'Contoh dashboard admin dengan grafik dan statistik',
      width: 1920,
      height: 1280,
    },
  },
  {
    id: 'automasi-n8n-hermes',
    title: 'Automasi n8n & Hermes Agent',
    description: 'Alur kerja otomatis dengan n8n dan asisten AI Hermes Agent, pesan, data, dan tugas berulang berjalan sendiri, tanpa dikerjakan manual setiap hari.',
    price: 'Menyesuaikan kebutuhan',
    gridSpan: 'default',
    image: {
      src: '/assets/resp/automation@640.webp',
      srcset: '/assets/resp/automation@480.webp 480w, /assets/resp/automation@640.webp 640w, /assets/resp/automation@960.webp 960w',
      sizes: '(max-width:640px) 92vw, (max-width:1100px) 46vw, 520px',
      alt: 'Ilustrasi alur automasi dan agen AI',
      width: 1920,
      height: 1280,
    },
  },
];
