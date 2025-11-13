import { useLanguage } from '@/contexts/LanguageContext';
import { tiers } from '@/data/tiers';
import { TierCard } from './TierCard';

export const TiersSection = () => {
  const { t } = useLanguage();

  return (
    <section id="tiers" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t.tiers.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
