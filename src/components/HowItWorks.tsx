import { useLanguage } from '@/contexts/LanguageContext';
import { Wallet, ScanLine, Gift } from 'lucide-react';

const steps = [
  {
    icon: Wallet,
    key: 'step1',
    color: 'text-blue-400',
    glow: 'glow-cyan',
  },
  {
    icon: ScanLine,
    key: 'step2',
    color: 'text-purple-400',
    glow: 'glow-purple',
  },
  {
    icon: Gift,
    key: 'step3',
    color: 'text-secondary',
    glow: 'glow-cyan',
  },
];

export const HowItWorks = () => {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="gradient-text">{t.howItWorks.title}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const titleKey = `${step.key}Title` as keyof typeof t.howItWorks;
            const descKey = `${step.key}Desc` as keyof typeof t.howItWorks;
            
            return (
              <div
                key={step.key}
                className="glass-card-hover p-8 rounded-3xl shadow-elevated animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Number badge */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-black gradient-text">{index + 1}</span>
                </div>
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color === 'text-blue-400' ? 'from-blue-500 to-cyan-400' : step.color === 'text-purple-400' ? 'from-purple-500 to-pink-400' : 'from-cyan-500 to-teal-400'} flex items-center justify-center mb-6`}>
                  <Icon className="h-8 w-8 text-white" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{t.howItWorks[titleKey]}</h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {t.howItWorks[descKey]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
