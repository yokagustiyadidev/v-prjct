import React from 'react';
import { PhIcon } from '@/components/ui/SvgIcons';

export function CtaSection() {
  return (
    <section id="kontak" className="band cta">
      <div className="wrap">
        <div className="cta-inner">
          <img
            className="cta-media"
            src="/assets/resp/cta-characters@1280.webp"
            srcSet="/assets/resp/cta-characters@800.webp 800w, /assets/resp/cta-characters@1280.webp 1280w, /assets/resp/cta-characters@1600.webp 1600w"
            sizes="(max-width:900px) 100vw, 1080px"
            width={3168}
            height={1344}
            alt=""
            loading="lazy"
            decoding="async"
          />
          <div>
            <h2 className="display">Siap punya produk digital?</h2>
            <p className="lede">Konsultasi gratis, hubungi kami.</p>
          </div>
          <div className="cta-actions">
            <a
              href="https://wa.me/62882016594700?text=Halo%20V-Project%2C%20saya%20tertarik%20konsultasi"
              target="_blank"
              rel="noopener"
              className="btn btn--blue"
            >
              <PhIcon name="ph-whatsapp-logo" />
              Chat WhatsApp
            </a>
            <a href="mailto:yokagustiyadi.dev@gmail.com" className="btn btn--line">
              <PhIcon name="ph-envelope" />
              Email kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
