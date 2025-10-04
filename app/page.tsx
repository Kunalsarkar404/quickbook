import { Header } from '@/components/Header';
import { HomeHero } from '@/components/HomeHero';
import { AllInOne } from '@/components/AllInOne';
import { ShopByCategory } from '@/components/ShopByCategory';
import { FAQSection } from '@/components/FAQSection';
import { DiscountBanner } from '@/components/DiscountBanner';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HomeHero />
      <AllInOne />
      <ShopByCategory />
      <FAQSection />
      <DiscountBanner />
      <Footer />
    </main>
  );
}
