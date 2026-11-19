'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { navLinks } from '@/data/nav';
import { PhIcon } from '@/components/ui/SvgIcons';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScrollOrResize = () => {
      setIsScrolled(window.scrollY > 24);

      const desktop = window.innerWidth > 860;
      const hero = document.querySelector('.hero');
      if (desktop && hero) {
        setIsHidden(hero.getBoundingClientRect().bottom <= 62);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize);
    handleScrollOrResize();

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, []);

  const closeMobile = () => {
    setIsMobileOpen(false);
  };

  return (
    <>
      <header
        className={`site-head ${isScrolled ? 'is-scrolled' : ''} ${
          isHidden ? 'is-hidden' : ''
        }`}
      >
        <div className="nav-inner">
          <a href="#top" className="brand" aria-label="V-Project, kembali ke atas">
            <img
              className="brand-mark"
              src="/assets/resp/logo-globe-transparent@192.webp"
              alt="Logo V-Project"
              width={28}
              height={28}
            />
            <span>V-Project</span>
          </a>
          <nav className="nav-list" aria-label="Navigasi utama">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="head-cta">
            <a href="#kontak" className="btn btn--blue">
              Konsultasi Gratis
            </a>
            <button
              className="nav-toggle"
              id="navToggle"
              aria-label={isMobileOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={isMobileOpen}
              aria-controls="mobilePanel"
              onClick={() => setIsMobileOpen((prev) => !prev)}
            >
              <PhIcon name={isMobileOpen ? 'ph-x' : 'ph-list'} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-panel ${isMobileOpen ? 'open' : ''}`}
        id="mobilePanel"
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMobile}>
            {link.label}
          </a>
        ))}
        <a href="#kontak" className="btn btn--blue" onClick={closeMobile}>
          Konsultasi Gratis
        </a>
      </div>
    </>
  );
}
