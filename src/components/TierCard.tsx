import { Tier } from '@/data/tiers';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, Search, Rocket, Compass, Zap, Crown } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const iconMap = {
  Search,
  Rocket,
  Compass,
  Zap,
  Crown,
};

interface TierCardProps {
  tier: Tier;
  index: number;
}

export const TierCard = ({ tier, index }: TierCardProps) => {
  const { t } = useLanguage();
  const TierIcon = iconMap[tier.iconName as keyof typeof iconMap];
  const { ref, isVisible } = useScrollAnimation();

  const formatBalance = (min: number, max: number | null) => {
    if (max === null) return `$${min.toLocaleString()}+`;
    return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
  };

  return (
    <div
      ref={ref}
      className={`glass-card-hover p-8 rounded-3xl shadow-elevated group relative overflow-hidden border transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Gradient mesh background */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-primary via-transparent to-secondary" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Tier Header */}
        <div className="flex items-center justify-between mb-6">
          <div className={`bg-gradient-to-br ${tier.gradient} p-5 rounded-2xl transition-all group-hover:scale-110 group-hover:rotate-3`}>
            <TierIcon className="h-10 w-10 text-white" strokeWidth={2.5} />
          </div>
          <div className="text-right">
            <div className="text-xs text-muted-foreground mb-1 font-medium uppercase tracking-wider">Tier {tier.id}</div>
            <h3 className="text-2xl font-bold gradient-text">{tier.name}</h3>
          </div>
        </div>

        {/* Balance Range */}
        <div className="mb-6 p-4 rounded-xl bg-muted/30 border border-border/50">
          <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wide font-medium">{t.tiers.balance}</div>
          <div className="text-2xl font-bold">{formatBalance(tier.balanceMin, tier.balanceMax)}</div>
        </div>

        {/* Instant Reward */}
        <div className="glass-card p-5 rounded-2xl mb-6 border border-primary/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-4 w-4 text-secondary" />
              <div className="text-xs font-semibold text-secondary uppercase tracking-wide">{t.tiers.instantReward}</div>
            </div>
            <div className="text-3xl font-black gradient-text">{tier.reward} SOL</div>
          </div>
        </div>

        {/* Boosts */}
        <div>
          <div className="text-xs text-muted-foreground mb-3 uppercase tracking-wide font-medium">{t.tiers.boosts}</div>
          <ul className="space-y-2.5">
            {tier.boosts.map((boost, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-primary to-secondary mt-2 flex-shrink-0" />
                <span className="text-foreground/90">{boost}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
