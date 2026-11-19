'use client';

import React, { useEffect, useRef } from 'react';
import { productModules } from '@/data/products';

export function ProductDraw() {
  const sectionRef = useRef<HTMLElement>(null);
  const drawRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<(HTMLElement | null)[]>([]);
  const hintRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const draw = drawRef.current;
    if (!section || !draw) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const drawLines = linesRef.current.filter(Boolean) as HTMLElement[];
    const drawN = drawLines.length;
    if (drawN === 0) return;

    let ticking = false;

    const paintDraw = () => {
      ticking = false;
      const rect = draw.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const span = Math.max(rect.height - vh, 1);
      const p = Math.min(Math.max(-rect.top / span, 0), 1) * (drawN - 1);
      const idx = Math.round(p);

      if (reduce) {
        drawLines.forEach((line, i) => {
          line.style.transform = 'translateY(-50%)';
          line.style.opacity = i === idx ? '1' : '0';
          line.style.pointerEvents = i === idx ? 'auto' : 'none';
          line.classList.toggle('is-active', i === idx);
          line.setAttribute('aria-hidden', i === idx ? 'false' : 'true');
        });
        if (hintRef.current) {
          hintRef.current.style.visibility = idx === drawN - 1 ? 'hidden' : 'visible';
        }
        return;
      }

      let step = 0;
      const firstH = drawLines[0]?.querySelector('h3');
      if (firstH) step = firstH.clientHeight * 1.04 + 64;
      if (!step) step = 174;

      drawLines.forEach((line, i) => {
        const off = i - p;
        const abs = Math.abs(off);
        const scale = 1 - Math.min(abs * 0.08, 0.3);
        line.style.transform = `translateY(-50%) translateY(${(off * step).toFixed(
          1
        )}px) translateZ(${(-abs * 260).toFixed(1)}px) rotateX(${(off * -7).toFixed(
          1
        )}deg) scale(${scale.toFixed(3)})`;
        line.style.opacity = String(Math.max(1 - abs * 0.55, 0));
        line.style.zIndex = String(100 - Math.round(abs * 10));
        line.style.pointerEvents = abs < 0.5 ? 'auto' : 'none';
        line.classList.toggle('is-active', i === idx);
        line.setAttribute('aria-hidden', i === idx ? 'false' : 'true');
      });

      if (hintRef.current) {
        hintRef.current.style.visibility = idx === drawN - 1 ? 'hidden' : 'visible';
      }
    };

    const requestDraw = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(paintDraw);
      }
    };

    section.classList.add('draw--js');
    paintDraw();

    window.addEventListener('scroll', requestDraw, { passive: true });
    window.addEventListener('resize', requestDraw);

    return () => {
      window.removeEventListener('scroll', requestDraw);
      window.removeEventListener('resize', requestDraw);
      section.classList.remove('draw--js');
    };
  }, []);

  return (
    <section id="produk" className="band" ref={sectionRef}>
      <div className="wrap">
        <div className="sec-head reveal in">
          <span className="kicker">Produk</span>
          <h2 className="display">Satu dashboard, semua kebutuhan</h2>
          <p className="lede">
            Enam modul yang saling terhubung. Nilai diinput sekali, rapor, absensi, dan laporan
            ikut terisi otomatis. Tidak ada data yang diketik dua kali.
          </p>
        </div>

        <div className="draw" id="drawProduk" ref={drawRef}>
          <div className="draw-pin">
            <div className="draw-stage" role="list" aria-label="Enam modul dashboard sekolah">
              {productModules.map((mod, index) => (
                <article
                  key={mod.id}
                  className={`draw-line ${index === 0 ? 'is-active' : ''}`}
                  role="listitem"
                  ref={(el) => {
                    linesRef.current[index] = el;
                  }}
                >
                  <h3 className="display">{mod.title}</h3>
                  <p>{mod.description}</p>
                </article>
              ))}
            </div>
            <p className="draw-caption" id="drawCaption" />
            <p className="draw-hint" ref={hintRef} aria-hidden="true">
              Gulir untuk melihat modul berikutnya
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
