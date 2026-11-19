import React from 'react';
import { testimonialsData } from '@/data/testimonials';

export function TestimonialsSection() {
  return (
    <section id="testimoni" className="band">
      <div className="wrap">
        <div className="sec-head reveal in">
          <span className="kicker">Testimoni</span>
          <h2 className="display">Kata mereka yang sudah pakai V-Project</h2>
          <p className="lede">
            Cerita singkat dari pelanggan, dari layanan admin, automasi, sampai undangan nikah.
          </p>
        </div>

        <div className="quotes">
          {testimonialsData.map((item) => (
            <figure key={item.id} className={`quote quote--${item.variant} card`}>
              <span className="quote-stars" role="img" aria-label={`${item.rating} dari 5 bintang`}>
                {'★'.repeat(item.rating)}
              </span>
              <p>{item.quote}</p>
              <figcaption className="quote-by">
                <img
                  className="avatar-img"
                  src={item.avatar}
                  srcSet={`${item.avatar} 128w`}
                  sizes="56px"
                  width={512}
                  height={512}
                  alt={`Avatar ${item.author}`}
                  loading="lazy"
                />
                <div>
                  <b>{item.author}</b>
                  <span>{item.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
