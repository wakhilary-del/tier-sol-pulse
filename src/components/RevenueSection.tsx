import { useLanguage } from '@/contexts/LanguageContext';
import { Handshake, Link, Gift, Wrench } from 'lucide-react';

const revenuePoints = [
  { icon: Handshake, key: 'point1', color: 'from-blue-500 to-cyan-400' },
  { icon: Link, key: 'point2', color: 'from-purple-500 to-pink-400' },
  { icon: Gift, key: 'point3', color: 'from-cyan-500 to-teal-400' },
  { icon: Wrench, key: 'point4', color: 'from-orange-500 to-red-400' },
];

export const RevenueSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="gradient-text">{t.revenue.title}</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              {t.revenue.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {revenuePoints.map((point, index) => {
              const Icon = point.icon;
              const textKey = point.key as keyof typeof t.revenue;
              
              return (
                <div
                  key={point.key}
                  className="glass-card-hover p-7 rounded-2xl shadow-elevated animate-fade-in"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${point.color} flex items-center justify-center mb-5`}>
                    <Icon className="h-7 w-7 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-base leading-relaxed font-light">{t.revenue[textKey]}</p>
                </div>
              );
            })}
          </div>

          <div className="glass-card p-10 rounded-3xl text-center border-2 border-primary/30 shadow-elevated relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
            <p className="text-2xl font-bold gradient-text relative z-10">
              {t.revenue.footer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
