import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProfessionalSupport } from '@/components/ProfessionalSupport';
import { KeyFeatures } from '@/components/KeyFeatures';
import { Benefits } from '@/components/Benefits';
import { CallToAction } from '@/components/CallToAction';
import { Pricing } from '@/components/Pricing';
import { DiscountBanner } from '@/components/DiscountBanner';
import { Footer } from '@/components/Footer';

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProfessionalSupport />
      <KeyFeatures />
      <KeyFeatures />
      <Benefits />
      <CallToAction />
      <Pricing />
      <DiscountBanner />
      <Footer />
    </main>
  );
}
