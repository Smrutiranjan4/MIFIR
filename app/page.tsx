import HeroSection from '@/components/home/HeroSection';
import CrisisSection from '@/components/home/CrisisSection';
import WhyMifirExists from '@/components/home/WhyMifirExists';
import WhatMifirEvaluates from '@/components/home/WhatMifirEvaluates';
import WhoThisIsFor from '@/components/home/WhoThisIsFor';
import InstitutionalCallToAction from '@/components/home/InstitutionalCallToAction';
import ComparisonSection from '@/components/home/ComparisonSection';
import StakeholdersSection from '@/components/home/StakeholdersSection';
import AlignmentSection from '@/components/home/AlignmentSection';
import TrustSection from '@/components/home/TrustSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CrisisSection />
      <WhyMifirExists />
      <WhatMifirEvaluates />
      <WhoThisIsFor />
      <InstitutionalCallToAction />
      <ComparisonSection />
      <StakeholdersSection />
      <AlignmentSection />
      <TrustSection />
    </>
  );
}
