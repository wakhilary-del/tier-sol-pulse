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
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">{t.revenue.title}</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {t.revenue.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {revenuePoints.map((point, index) => {
              const Icon = point.icon;
              const textKey = point.key as keyof typeof t.revenue;
              
              return (
                <div
                  key={point.key}
                  className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 card-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${point.color} flex items-center justify-center mb-4 glow-purple`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <p className="text-lg">{t.revenue[textKey]}</p>
                </div>
              );
            })}
          </div>

          <div className="glass-card p-8 rounded-3xl text-center border-2 border-primary/30 glow-purple">
            <p className="text-xl font-semibold gradient-text">
              {t.revenue.footer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
