export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  priceUnit: string;
  maintenance: string;
  description: string;
  windowTitle: string;
  windowHighlights: string[];
  features: PlanFeature[];
  pill: string;
  ctaText: string;
  ctaHref: string;
  ctaVariant: 'blue' | 'line';
  isHero?: boolean;
  isFlipped?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'coba-gratis',
    name: 'Coba Gratis',
    price: 'Rp 0',
    priceUnit: '/uji coba',
    maintenance: 'Tanpa biaya & tanpa komitmen',
    description: 'Coba modul dasar untuk mengevaluasi sistem sekolah Anda sebelum berlangganan, tanpa fitur premium.',
    windowTitle: 'Coba Gratis',
    windowHighlights: [
      'Web sekolah (demo)',
      'CBT online (kuota terbatas)',
      'Absensi digital dasar',
    ],
    features: [
      { text: 'Web sekolah (demo)', included: true },
      { text: 'Free domain (.my.id, .web.id)', included: false },
      { text: 'Server dikelola tim kami', included: false },
      { text: 'CBT online (kuota terbatas)', included: true },
      { text: 'Absensi digital dasar', included: true },
      { text: 'Sistem penilaian dasar', included: true },
      { text: 'Administrasi guru', included: true },
      { text: 'Portal siswa & orang tua', included: true },
      { text: 'Pengumuman & berita', included: true },
      { text: 'E-rapor otomatis', included: false },
      { text: 'Modul PPDB online', included: false },
      { text: 'Keuangan & SPP digital', included: false },
      { text: 'Perpustakaan digital', included: false },
      { text: 'Bisa request fitur', included: false },
      { text: 'Support prioritas & training', included: false },
    ],
    pill: 'modul-dasar',
    ctaText: 'Coba gratis sekarang',
    ctaHref: '#kontak',
    ctaVariant: 'line',
  },
  {
    id: 'basic',
    name: 'Basic',
    price: '35rb',
    priceUnit: '/bulan',
    maintenance: 'Termasuk server & free domain',
    description: 'Fitur basic tanpa repot, server dikelola tim kami dan free domain sudah termasuk.',
    windowTitle: 'Basic',
    windowHighlights: [
      'Web sekolah aktif',
      'Free domain (.my.id, .web.id)',
      'Server dikelola tim kami',
    ],
    features: [
      { text: 'Web sekolah aktif', included: true },
      { text: 'Free domain (.my.id, .web.id)', included: true },
      { text: 'Server dikelola tim kami', included: true },
      { text: 'CBT online (kuota dasar)', included: true },
      { text: 'Absensi digital dasar', included: true },
      { text: 'Sistem penilaian dasar', included: true },
      { text: 'Administrasi guru', included: true },
      { text: 'Portal siswa & orang tua', included: true },
      { text: 'Pengumuman & berita', included: true },
      { text: 'E-rapor otomatis', included: false },
      { text: 'Modul PPDB online', included: false },
      { text: 'Keuangan & SPP digital', included: false },
      { text: 'Perpustakaan digital', included: false },
      { text: 'Bisa request fitur', included: false },
      { text: 'Support prioritas & training', included: false },
    ],
    pill: 'server-dikelola',
    ctaText: 'Pilih Basic',
    ctaHref: '#kontak',
    ctaVariant: 'line',
    isFlipped: true,
  },
  {
    id: 'paket-v-project',
    name: 'Paket V-Project',
    price: '1,5jt',
    priceUnit: '/tahun',
    maintenance: '+ Rp150rb/bulan untuk maintenance',
    description: 'Tanpa tingkatan, tanpa pilih-pilih modul, semua fitur aktif untuk sekolah Anda, plus bisa request fitur.',
    windowTitle: 'Paket V-Project',
    windowHighlights: [
      'Web sekolah profesional',
      'CBT online tanpa batas',
      'E-rapor otomatis',
    ],
    features: [
      { text: 'Web sekolah profesional', included: true },
      { text: 'Free domain & SSL resmi', included: true },
      { text: 'Server dedicated dikelola penuh', included: true },
      { text: 'CBT online tanpa batas', included: true },
      { text: 'Absensi digital lengkap', included: true },
      { text: 'Sistem penilaian lengkap', included: true },
      { text: 'Administrasi guru', included: true },
      { text: 'Portal siswa & orang tua', included: true },
      { text: 'Pengumuman & berita', included: true },
      { text: 'Modul PPDB online', included: true },
      { text: 'Keuangan & SPP digital', included: true },
      { text: 'Perpustakaan digital', included: true },
      { text: 'E-rapor otomatis', included: true },
      { text: 'Bisa request fitur', included: true },
      { text: 'Support prioritas & training', included: true },
    ],
    pill: 'semua-fitur-aktif',
    ctaText: 'Mulai sekarang',
    ctaHref: '#kontak',
    ctaVariant: 'blue',
    isHero: true,
  },
];
