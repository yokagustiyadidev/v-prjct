import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SvgIcons } from '@/components/ui/SvgIcons';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WaFloating } from '@/components/layout/WaFloating';

export const metadata: Metadata = {
  metadataBase: new URL('https://vproject.id'),
  title: 'V-Project · Dashboard Sekolah, Website & Undangan Digital',
  description:
    'Satu dashboard untuk CBT, absensi, penilaian, dan e-rapor. Plus jasa website, undangan nikah, dan portofolio.',
  openGraph: {
    type: 'website',
    title: 'V-Project · Dashboard Sekolah, Website & Undangan Digital',
    description: 'Dashboard sekolah, website bisnis, undangan nikah, sampai portofolio.',
    images: ['/assets/resp/web@960.webp'],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/assets/resp/logo-globe-transparent@192.webp',
  },
};

export const viewport: Viewport = {
  themeColor: '#070D24',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/assets/fonts/google-sans-flex-latin-rond.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/assets/fonts/google-sans-code-latin.woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <SvgIcons />
        <a href="#main" className="skip">
          Lompat ke konten
        </a>
        <Header />
        <main id="main">
          <span id="top" />
          {children}
        </main>
        <Footer />
        <WaFloating />
      </body>
    </html>
  );
}
