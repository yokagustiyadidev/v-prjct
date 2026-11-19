export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Berapa lama implementasi dashboard sekolah?',
    answer: 'Rata-rata 3–4 pekan, tergantung kustomisasi. Selama setup kami koordinasi intensif, termasuk jadwal training.',
  },
  {
    id: 'faq-2',
    question: 'Apakah data siswa dan sekolah aman?',
    answer: 'Data terenkripsi saat transit (SSL), dicadangkan otomatis setiap hari, dan tersimpan di server Indonesia. Akses dibatasi per peran: guru hanya melihat kelas yang diampu, orang tua hanya data anaknya.',
  },
  {
    id: 'faq-3',
    question: 'Bisa integrasi dengan sistem yang sudah ada?',
    answer: 'Bisa. Data bisa diimpor dari Excel, CSV, atau tarikan Dapodik. Untuk integrasi lain (keuangan, perpustakaan, mesin absensi) kita bahas kebutuhannya di konsultasi awal.',
  },
  {
    id: 'faq-4',
    question: 'Bagaimana skema pembayaran paket sekolah?',
    answer: 'Rp1,5jt dibayar di awal periode tahunan, sudah termasuk hosting dan pembaruan sistem selama setahun. Biaya maintenance Rp150rb per bulan dibayar bulanan.',
  },
  {
    id: 'faq-5',
    question: 'Apakah ada pelatihan untuk guru dan staf?',
    answer: 'Ya. Setiap paket sudah termasuk onboarding dan pelatihan, plus video tutorial dan dokumentasi tertulis. Pendampingan tersedia lewat WhatsApp, email, atau video call.',
  },
  {
    id: 'faq-6',
    question: 'Kalau hanya butuh undangan atau ucapan saja, bisa?',
    answer: 'Bisa. Layanan kreatif bisa dipesan satuan, tanpa harus dibundel dengan sistem sekolah. Minta contoh desainnya lewat WhatsApp untuk melihat gaya yang tersedia.',
  },
  {
    id: 'faq-7',
    question: 'Apa itu automasi n8n & Hermes Agent?',
    answer: 'Sederhananya, ini cara supaya tugas berulang jalan sendiri tanpa disalin manual. n8n menghubungkan aplikasi-aplikasi yang Anda pakai, sedangkan Hermes Agent adalah asisten AI yang bisa membantu menjawab pesan, mencari data, dan mengerjakan tugas rutin. Anda juga diajarin sampai bisa menggunakannya sendiri.',
  },
  {
    id: 'faq-8',
    question: 'Contoh tugas apa yang bisa diautomasi?',
    answer: 'Misalnya, pesan WhatsApp yang masuk di luar jam kerja dibalas otomatis, data dari formulir langsung masuk ke tabel atau dashboard, rekap absensi dan nilai tersusun sendiri, serta pengingat jadwal dan pembayaran terkirim tanpa harus diingatkan manual. Ceritakan tugas yang paling menyita waktu Anda, lalu kita rancang alurnya bersama.',
  },
];
