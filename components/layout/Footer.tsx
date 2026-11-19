import React from 'react';
import { footerProducts, footerServices, footerCompany } from '@/data/nav';

export function Footer() {
  return (
    <footer className="site-foot">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="wordmark-sm">V—Project</div>
            <div className="foot-contact">
              <a href="mailto:yokagustiyadi.dev@gmail.com">yokagustiyadi.dev@gmail.com</a>
              <a href="https://wa.me/62882016594700" target="_blank" rel="noopener">
                +62 882-0165-94700
              </a>
              <span>Bandung, Jawa Barat, Indonesia</span>
            </div>
          </div>

          <div className="foot-col">
            <h4>Produk</h4>
            <ul>
              {footerProducts.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="foot-col">
            <h4>Layanan</h4>
            <ul>
              {footerServices.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="foot-col">
            <h4>Perusahaan</h4>
            <ul>
              {footerCompany.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>&copy; 2026 V-Project · Bandung</span>
          <div className="foot-legal">
            <a href="#kontak">Syarat &amp; ketentuan</a>
            <a href="#kontak">Kebijakan privasi</a>
          </div>
        </div>
      </div>
      <div className="foot-giant" aria-hidden="true">
        V—Project
      </div>
    </footer>
  );
}
