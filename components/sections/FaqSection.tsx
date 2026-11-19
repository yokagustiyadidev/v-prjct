'use client';

import React, { useState, useEffect } from 'react';
import { faqData } from '@/data/faq';
import { PhIcon } from '@/components/ui/SvgIcons';

export function FaqSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const q = searchQuery.toLowerCase().trim();
  const filtered = faqData.map((item) => ({
    ...item,
    visible: !q || item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q),
  }));

  const visibleCount = filtered.filter((f) => f.visible).length;

  useEffect(() => {
    if (visibleCount > 0) {
      const currentIsOpenVisible = filtered.some((f) => f.id === openId && f.visible);
      if (!currentIsOpenVisible) {
        const firstVisible = filtered.find((f) => f.visible);
        if (firstVisible) {
          setOpenId(firstVisible.id);
        }
      }
    }
  }, [searchQuery, visibleCount, openId, filtered]);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="band">
      <div className="wrap faq-grid">
        <div className="faq-intro">
          <div className="sec-head faq-head reveal in">
            <span className="kicker">FAQ</span>
            <h2 className="display">Pertanyaan yang sering muncul</h2>
            <p className="lede">Belum terjawab? Kirim pertanyaan lewat WhatsApp, dijawab pada hari kerja.</p>
            <a href="#kontak" className="btn btn--line">
              <PhIcon name="ph-whatsapp-logo" />
              Tanya langsung
            </a>
          </div>

          <div className="faq-search reveal in" style={{ transitionDelay: '.06s' }} role="search">
            <label className="faq-search-label" htmlFor="faqSearch">
              Cari pertanyaan
            </label>
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" />
            </svg>
            <input
              id="faqSearch"
              type="search"
              placeholder="Cari pertanyaan di sini"
              autoComplete="off"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <figure className="faq-media reveal in" style={{ transitionDelay: '.1s' }}>
          <img
            src="/assets/faq-character.png"
            alt="Ilustrasi pertanyaan yang sering diajukan"
            width={1024}
            height={1024}
            loading="lazy"
          />
        </figure>

        <div className="faq-list">
          {filtered.map((item) => {
            const isOpen = openId === item.id;
            return (
              <article
                key={item.id}
                className={`faq-item ${isOpen ? 'is-open' : ''}`}
                hidden={!item.visible}
              >
                <h3>
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={isOpen}
                    aria-controls={`${item.id}-answer`}
                    id={`${item.id}-question`}
                    onClick={() => toggleItem(item.id)}
                  >
                    <span className="faq-q-text">{item.question}</span>
                    <span className="faq-icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  className="faq-a-wrap"
                  id={`${item.id}-answer`}
                  role="region"
                  aria-labelledby={`${item.id}-question`}
                  style={{
                    maxHeight: isOpen ? '500px' : '0px',
                  }}
                >
                  <p className="faq-a">{item.answer}</p>
                </div>
              </article>
            );
          })}
          {visibleCount === 0 && (
            <p className="faq-empty" id="faqEmpty">
              Tidak ada pertanyaan yang cocok.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
