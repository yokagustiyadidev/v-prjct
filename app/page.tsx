import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProductDraw } from '@/components/sections/ProductDraw';
import { ProcessJourney } from '@/components/sections/ProcessJourney';
import { PricingSection } from '@/components/sections/PricingSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CtaSection } from '@/components/sections/CtaSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductDraw />
      <ProcessJourney />
      <PricingSection />
      <ServicesSection />
      <FaqSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
