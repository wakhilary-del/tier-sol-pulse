import { Tier } from '@/data/tiers';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles } from 'lucide-react';

interface TierCardProps {
  tier: Tier;
  index: number;
}

export const TierCard = ({ tier, index }: TierCardProps) => {
  const { t } = useLanguage();

  const formatBalance = (min: number, max: number | null) => {
    if (max === null) return `$${min.toLocaleString()}+`;
    return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
  };

  return (
    <div
      className="glass-card p-6 rounded-3xl card-shadow hover:scale-105 transition-all duration-300 group animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Tier Header */}
      <div className="flex items-center justify-between mb-6">
        <div className={`text-6xl bg-gradient-to-br ${tier.gradient} p-4 rounded-2xl glow-purple group-hover:glow-cyan transition-all`}>
          {tier.icon}
        </div>
        <div className="text-right">
          <div className="text-sm text-muted-foreground mb-1">Tier {tier.id}</div>
          <h3 className="text-2xl font-bold gradient-text">{tier.name}</h3>
        </div>
      </div>

      {/* Balance Range */}
      <div className="mb-6">
        <div className="text-sm text-muted-foreground mb-2">{t.tiers.balance}</div>
        <div className="text-xl font-bold">{formatBalance(tier.balanceMin, tier.balanceMax)}</div>
      </div>

      {/* Instant Reward */}
      <div className="glass-card p-4 rounded-2xl mb-6 border border-primary/20 glow-purple">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-5 w-5 text-secondary" />
          <div className="text-sm font-medium text-secondary">{t.tiers.instantReward}</div>
        </div>
        <div className="text-3xl font-bold gradient-text">{tier.reward} SOL</div>
      </div>

      {/* Boosts */}
      <div>
        <div className="text-sm text-muted-foreground mb-3">{t.tiers.boosts}</div>
        <ul className="space-y-2">
          {tier.boosts.map((boost, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <span>{boost}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
