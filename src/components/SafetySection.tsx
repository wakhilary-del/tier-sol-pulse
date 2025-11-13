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
    <section id="safety" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">{t.safety.title}</span>
            </h2>
            <p className="text-xl text-muted-foreground">
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
                  className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:scale-105 transition-all duration-300 card-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 glow-purple">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-lg flex-1 pt-2">{t.safety[textKey]}</p>
                </div>
              );
            })}
          </div>

          {/* Trust Badge */}
          <div className="mt-12 glass-card p-8 rounded-3xl text-center border-2 border-secondary/30 glow-cyan">
            <Shield className="h-16 w-16 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold gradient-text mb-2">100% Read-Only Access</h3>
            <p className="text-muted-foreground">
              Your wallet, your funds, your control. Always.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
