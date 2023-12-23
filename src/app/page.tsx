import { FeatureSection, HeroSection } from '@/components';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <FeatureSection />
    </main>
  );
}
