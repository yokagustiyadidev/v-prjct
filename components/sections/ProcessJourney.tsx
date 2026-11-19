import React from 'react';
import { processSteps } from '@/data/process';

export function ProcessJourney() {
  return (
    <section id="proses" className="band">
      <div className="wrap">
        <div className="sec-head reveal in">
          <span className="kicker">Proses</span>
          <h2 className="display">Tiga langkah, langsung bisa dipakai</h2>
          <p className="lede">
            Dari obrolan pertama sampai guru bisa login, rata-rata tiga pekan. Data lama Anda kami
            yang pindahkan.
          </p>
        </div>

        <div className="journey reveal in">
          <svg
            className="journey-line journey-line--h"
            viewBox="0 0 1000 120"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M166,60 C221,110 277,110 333,60 C388,10 444,10 500,60 C555,110 611,110 666,60 C721,10 777,10 833,60" />
          </svg>
          <svg
            className="journey-line journey-line--v"
            viewBox="0 0 60 640"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M30,0 C46,53 14,107 30,160 C46,213 14,267 30,320 C46,373 14,427 30,480 C46,533 14,587 30,640" />
          </svg>

          <ol className="journey-steps">
            {processSteps.map((step) => (
              <li key={step.step} className="journey-step">
                <span className="journey-num" aria-hidden="true">
                  {step.step}
                </span>
                <h3 className="display">{step.title}</h3>
                <p>{step.description}</p>
                <div className="journey-meta">{step.meta}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
