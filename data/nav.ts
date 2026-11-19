export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Produk', href: '#produk' },
  { label: 'Harga', href: '#harga' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Proses', href: '#proses' },
  { label: 'FAQ', href: '#faq' },
];

export const footerProducts: NavLink[] = [
  { label: 'Dashboard sekolah', href: '#produk' },
  { label: 'Harga', href: '#harga' },
  { label: 'Cara kerja', href: '#proses' },
  { label: 'Minta demo', href: '#kontak' },
];

export const footerServices: NavLink[] = [
  { label: 'Jasa web', href: '#layanan' },
  { label: 'Jasa dashboard', href: '#layanan' },
  { label: 'Automasi n8n & Hermes Agent', href: '#layanan' },
  { label: 'Undangan nikah', href: '#layanan' },
  { label: 'Ucapan selamat', href: '#layanan' },
  { label: 'Portofolio', href: '#layanan' },
];

export const footerCompany: NavLink[] = [
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#kontak' },
  { label: 'Status layanan', href: '#kontak' },
  { label: 'Dukungan', href: '#kontak' },
];
