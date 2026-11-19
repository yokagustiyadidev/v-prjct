export interface TestimonialItem {
  id: string;
  rating: number;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  variant: 'a' | 'b';
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'testi-1',
    rating: 5,
    quote: 'Mantap, admin fast respon.',
    author: 'Fikri Fauzian',
    role: 'Pelanggan',
    avatar: '/assets/resp/avatar-fikri@128.webp',
    variant: 'a',
  },
  {
    id: 'testi-2',
    rating: 5,
    quote: 'Rekomended, gak mengecewakan.',
    author: 'Kaizer Nugraha',
    role: 'Pelanggan',
    avatar: '/assets/resp/avatar-kaizer@128.webp',
    variant: 'b',
  },
  {
    id: 'testi-3',
    rating: 5,
    quote: 'Undangan nikahnya lucuuu.',
    author: 'Naya',
    role: 'Pelanggan',
    avatar: '/assets/resp/avatar-naya@128.webp',
    variant: 'b',
  },
  {
    id: 'testi-4',
    rating: 5,
    quote: 'Automation Hermes Agent dan n8n sangat membantu, bener bener diajarin sampe bisa.',
    author: 'Irman',
    role: 'Pelanggan',
    avatar: '/assets/resp/avatar-irman@128.webp',
    variant: 'a',
  },
];
