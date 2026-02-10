import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TechnologyPreview from '@/components/home/TechnologyPreview';
import ProductsProof from '@/components/home/ProductsProof';
import VisionSection from '@/components/home/VisionSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <HeroSection />
      <TechnologyPreview />
      <ProductsProof />
      <VisionSection />
      <CTASection />
    </div>
  );
}