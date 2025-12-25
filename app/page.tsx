import HeroSection from '@/components/home/HeroSection';
import CrisisSection from '@/components/home/CrisisSection';
import ComparisonSection from '@/components/home/ComparisonSection';
import StakeholdersSection from '@/components/home/StakeholdersSection';
import AlignmentSection from '@/components/home/AlignmentSection';
import TrustSection from '@/components/home/TrustSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CrisisSection />
      <ComparisonSection />
      <StakeholdersSection />
      <AlignmentSection />
      <TrustSection />
    </>
  );
}
