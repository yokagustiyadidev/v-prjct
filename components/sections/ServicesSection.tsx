import React from 'react';
import { servicesData } from '@/data/services';
import { PhIcon } from '@/components/ui/SvgIcons';

export function ServicesSection() {
  return (
    <section id="layanan" className="band">
      <div className="wrap">
        <div className="sec-head reveal in">
          <span className="kicker">Layanan</span>
          <h2 className="display">Jasa digital untuk bisnis &amp; momen spesial</h2>
          <p className="lede">
            Bisa dipesan satuan, tanpa harus mengambil paket sekolah. Untuk UMKM, pasangan
            pengantin, dan profesional yang ingin tampil meyakinkan di internet.
          </p>
        </div>

        <div className="services">
          {servicesData.map((svc) => (
            <article
              key={svc.id}
              className={`svc ${
                svc.gridSpan === 'wide'
                  ? 'svc--wide'
                  : svc.gridSpan === 'narrow'
                  ? 'svc--narrow'
                  : ''
              } card reveal in`}
            >
              <div className="svc-media">
                <img
                  src={svc.image.src}
                  srcSet={svc.image.srcset}
                  sizes={svc.image.sizes}
                  width={svc.image.width}
                  height={svc.image.height}
                  alt={svc.image.alt}
                  loading="lazy"
                />
              </div>
              <div className="svc-body">
                <h3 className="display">{svc.title}</h3>
                <p>{svc.description}</p>
                <div className="svc-price">
                  {svc.originalPrice ? (
                    <span>
                      <s>{svc.originalPrice}</s>
                      <b>{svc.price}</b>
                      {svc.promoTag && <span className="promo-tag">{svc.promoTag}</span>}
                    </span>
                  ) : (
                    <b>{svc.price}</b>
                  )}
                  <PhIcon name="ph-arrow-up-right" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
