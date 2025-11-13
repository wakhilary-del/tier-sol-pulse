import { useLanguage } from '@/contexts/LanguageContext';
import { tiers } from '@/data/tiers';
import { TierCard } from './TierCard';

export const TiersSection = () => {
  const { t } = useLanguage();

  return (
    <section id="tiers" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="gradient-text">{t.tiers.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            {t.tiers.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <TierCard key={tier.id} tier={tier} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
