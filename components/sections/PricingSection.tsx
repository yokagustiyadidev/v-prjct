import React from 'react';
import { pricingPlans } from '@/data/pricing';
import { PhIcon } from '@/components/ui/SvgIcons';

export function PricingSection() {
  return (
    <section id="harga" className="band">
      <div className="wrap">
        <div className="sec-head reveal in">
          <span className="kicker">Harga</span>
          <h2 className="display">Harga transparan, tanpa biaya tersembunyi</h2>
          <p className="lede">
            Mulai dari coba gratis, opsi basic dengan server &amp; domain dikelola, hingga paket
            lengkap tahunan tanpa biaya tersembunyi.
          </p>
        </div>

        <div className="pricing">
          {pricingPlans.map((plan) => (
            <article
              key={plan.id}
              className={`plan-row ${plan.isFlipped ? 'plan-row--flip' : ''} ${
                plan.isHero ? 'plan-row--hero' : ''
              }`}
            >
              <div className="plan-panel">
                <div className="plan-window">
                  <div className="plan-window-bar">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                    <span className="plan-window-title">{plan.windowTitle}</span>
                  </div>
                  <ul className="plan-window-rows">
                    {plan.windowHighlights.map((hl, i) => (
                      <li key={i}>
                        <PhIcon name="ph-check" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="plan-window-foot" aria-hidden="true">
                    <i style={plan.isHero ? { width: '100%' } : undefined} />
                  </div>
                </div>
              </div>

              <div className="plan-body">
                <div className="plan-name">{plan.name}</div>
                <div className="plan-price">
                  <b>{plan.price}</b>
                  <span>{plan.priceUnit}</span>
                </div>
                <p className="plan-maint">{plan.maintenance}</p>
                <p className="plan-desc">{plan.description}</p>

                <details className="plan-feats-toggle">
                  <summary>
                    Lihat keuntungan berlangganan <PhIcon name="ph-caret-down" />
                  </summary>
                  <ul className="plan-feats">
                    {plan.features.map((feat, fi) => (
                      <li key={fi} className={feat.included ? '' : 'feat--off'}>
                        <PhIcon name={feat.included ? 'ph-check' : 'ph-x'} />
                        <span>{feat.text}</span>
                      </li>
                    ))}
                  </ul>
                </details>

                <span className="plan-pill">{plan.pill}</span>
                <a
                  href={plan.ctaHref}
                  className={`btn ${
                    plan.ctaVariant === 'blue' ? 'btn--blue' : 'btn--line'
                  } btn--wide`}
                >
                  {plan.ctaText}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
