import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Lock, Eye, Zap, DollarSign } from 'lucide-react';

const safetyPoints = [
  { icon: DollarSign, key: 'point1' },
  { icon: Shield, key: 'point2' },
  { icon: Lock, key: 'point3' },
  { icon: Zap, key: 'point4' },
  { icon: Eye, key: 'point5' },
];

export const SafetySection = () => {
  const { t } = useLanguage();

  return (
    <section id="safety" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="gradient-text">{t.safety.title}</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              {t.safety.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {safetyPoints.map((point, index) => {
              const Icon = point.icon;
              const textKey = point.key as keyof typeof t.safety;
              
              return (
                <div
                  key={point.key}
                  className="glass-card-hover p-6 rounded-2xl flex items-start gap-5 shadow-elevated animate-fade-in"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-base flex-1 pt-2.5 font-light leading-relaxed">{t.safety[textKey]}</p>
                </div>
              );
            })}
          </div>

          {/* Trust Badge */}
          <div className="mt-16 glass-card p-10 rounded-3xl text-center border-2 border-secondary/30 shadow-elevated relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5" />
            <div className="relative z-10">
              <Shield className="h-16 w-16 text-secondary mx-auto mb-4" strokeWidth={2} />
              <h3 className="text-3xl font-black gradient-text mb-3">100% Read-Only Access</h3>
              <p className="text-muted-foreground font-light text-lg">
                Your wallet, your funds, your control. Always.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
