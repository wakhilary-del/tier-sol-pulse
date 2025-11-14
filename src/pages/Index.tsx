import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { TiersSection } from '@/components/TiersSection';
import { SafetySection } from '@/components/SafetySection';
import { RevenueSection } from '@/components/RevenueSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';
import { SupportChat } from '@/components/SupportChat';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-16">
          <Hero />
          <HowItWorks />
          <TiersSection />
          <SafetySection />
          <RevenueSection />
          <FAQSection />
        </main>
        <Footer />
        <SupportChat />
      </div>
    </LanguageProvider>
  );
};

export default Index;
