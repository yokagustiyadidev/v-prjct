import React from 'react';
import { PhIcon } from '@/components/ui/SvgIcons';

export function WaFloating() {
  return (
    <a
      className="wa-float"
      href="https://wa.me/62882016594700?text=Halo%20V-Project%2C%20saya%20tertarik%20konsultasi"
      target="_blank"
      rel="noopener"
      aria-label="Chat WhatsApp V-Project"
    >
      <PhIcon name="ph-whatsapp-logo" />
    </a>
  );
}
