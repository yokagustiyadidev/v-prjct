import React from 'react';
import { PhIcon } from '@/components/ui/SvgIcons';

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-media" aria-hidden="true" />
      <div className="hero-halftone" aria-hidden="true" />

      {/* Ornamen 3D claymorphism */}
      <div className="hero-doodles" aria-hidden="true">
        {/* 1. Clay Star Gold Small */}
        <div className="clay-obj clay-star--gold">
          <svg className="clay-star" viewBox="0 0 64 64" fill="none">
            <defs>
              <radialGradient id="starGradGoldSm" cx="35%" cy="30%" r="65%">
                <stop offset="0%" stopColor="#FFFBD9" />
                <stop offset="35%" stopColor="#FEE75C" />
                <stop offset="75%" stopColor="#EAA600" />
                <stop offset="100%" stopColor="#B87300" />
              </radialGradient>
            </defs>
            <path
              d="M32 4 C33.5 19 45 30.5 60 32 C45 33.5 33.5 45 32 60 C30.5 45 19 33.5 4 32 C19 30.5 30.5 19 32 4 Z"
              fill="url(#starGradGoldSm)"
            />
            <path
              d="M32 10 C33 21 41 29 52 30 C41 31 33 39 32 50 C31 39 23 31 12 30 C23 29 31 21 32 10 Z"
              fill="none"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <ellipse
              cx="28"
              cy="26"
              rx="4"
              ry="2.5"
              transform="rotate(-30 28 26)"
              fill="rgba(255,255,255,0.85)"
            />
          </svg>
        </div>

        {/* 2. Clay Plus Gold */}
        <div className="clay-obj clay-plus clay-plus--gold">
          <div className="clay-plus-bar clay-plus-bar--v" />
          <div className="clay-plus-bar clay-plus-bar--h" />
        </div>

        {/* 3. Clay Star Main */}
        <div className="clay-obj clay-star--main">
          <svg className="clay-star" viewBox="0 0 64 64" fill="none">
            <defs>
              <radialGradient id="starGradMain" cx="35%" cy="30%" r="65%">
                <stop offset="0%" stopColor="#FFFBD9" />
                <stop offset="35%" stopColor="#FEE75C" />
                <stop offset="75%" stopColor="#EAA600" />
                <stop offset="100%" stopColor="#B87300" />
              </radialGradient>
            </defs>
            <path
              d="M32 4 C33.5 19 45 30.5 60 32 C45 33.5 33.5 45 32 60 C30.5 45 19 33.5 4 32 C19 30.5 30.5 19 32 4 Z"
              fill="url(#starGradMain)"
            />
            <path
              d="M32 10 C33 21 41 29 52 30 C41 31 33 39 32 50 C31 39 23 31 12 30 C23 29 31 21 32 10 Z"
              fill="none"
              stroke="rgba(255,255,255,0.75)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <ellipse
              cx="27"
              cy="25"
              rx="5"
              ry="3"
              transform="rotate(-30 27 25)"
              fill="rgba(255,255,255,0.9)"
            />
          </svg>
        </div>

        {/* 4. Clay Pill Blurple */}
        <div className="clay-obj clay-pill">
          <div className="clay-pill-dot" />
          <div className="clay-pill-dot" />
          <div className="clay-pill-dot" />
        </div>

        {/* 5. Clay Orb Coral */}
        <div className="clay-obj clay-orb-coral" />

        {/* 6. Clay Orb Cyan */}
        <div className="clay-obj clay-orb-cyan" />

        {/* 7. Clay Plus White */}
        <div className="clay-obj clay-plus clay-plus--white">
          <div className="clay-plus-bar clay-plus-bar--v" />
          <div className="clay-plus-bar clay-plus-bar--h" />
        </div>
      </div>

      <div className="wrap">
        <div className="hero-content reveal in">
          <h1 className="display">Satu platform menangani kebutuhan produk digitalmu.</h1>
          <p className="lede">
            Nilai, absensi, CBT, dan rapor dalam satu tempat. Website dan undangan digital juga kami
            kerjakan.
          </p>
          <div className="hero-actions">
            <a href="#kontak" className="btn btn--blue">
              Mulai proyek
            </a>
            <a href="#produk" className="btn btn--line">
              <PhIcon name="ph-arrow-down" />
              Lihat produk &amp; harga
            </a>
          </div>
          <p className="hero-note">
            Konsultasi gratis · Paket sekolah Rp1,5jt/tahun, semua fitur · Tanpa biaya tersembunyi
          </p>
        </div>
      </div>
    </section>
  );
}
