export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  meta: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Konsultasi',
    description: 'Ceritakan kondisi sekolah Anda. Kami petakan modul yang benar-benar terpakai, bukan yang sekadar terlihat bagus di brosur.',
    meta: 'Gratis · 30 menit · online',
  },
  {
    step: 2,
    title: 'Setup & migrasi',
    description: 'Sistem dipasang dengan nama, logo, dan struktur kelas Anda. Data siswa dari Excel atau Dapodik kami impor sampai beres.',
    meta: '2–4 pekan · termasuk import data',
  },
  {
    step: 3,
    title: 'Pelatihan & live',
    description: 'Pelatihan untuk admin, guru, dan operator sampai bisa. Setelah live, pendampingan teknis tetap berjalan.',
    meta: '1 hari training · garansi 30 hari',
  },
];
