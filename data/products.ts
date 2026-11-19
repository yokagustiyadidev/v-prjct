export interface ProductModule {
  id: string;
  title: string;
  description: string;
}

export const productModules: ProductModule[] = [
  {
    id: 'web-interaktif',
    title: 'Web interaktif',
    description: 'Website resmi sekolah dengan CMS yang mudah. Berita, galeri, profil guru, dan pengumuman bisa dikelola staf TU sendiri, tanpa harus memanggil developer.',
  },
  {
    id: 'cbt-online',
    title: 'CBT online',
    description: 'Ujian online lengkap: pilihan ganda, isian, esai, hingga upload jawaban. Timer otomatis, soal teracak, dan pengawasan sesi supaya ujian tetap jujur.',
  },
  {
    id: 'absensi-digital',
    title: 'Absensi digital',
    description: 'Kehadiran tercatat realtime, manual, scan QR, atau fingerprint, dan langsung masuk rekap.',
  },
  {
    id: 'administrasi-guru',
    title: 'Administrasi guru',
    description: 'RPP, silabus, jurnal mengajar, dan dokumentasi pembelajaran tersimpan rapi dalam satu tempat.',
  },
  {
    id: 'penilaian',
    title: 'Penilaian',
    description: 'Nilai harian, tugas, UTS, dan UAS terhitung otomatis sesuai bobot kurikulum. Tidak ada lagi rumus Excel yang rawan salah.',
  },
  {
    id: 'e-rapor',
    title: 'E-rapor',
    description: 'Rapor tersusun otomatis dari nilai yang sudah masuk. Tinggal cetak, atau kirim langsung ke portal orang tua.',
  },
];
