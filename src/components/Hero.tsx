import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';
import { Shield, Zap } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Animated Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="gradient-text">{t.hero.title}</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
          
          {/* Highlight Box */}
          <div className="glass-card inline-flex items-center gap-3 px-6 py-4 rounded-2xl border border-primary/20 glow-purple">
            <Shield className="h-6 w-6 text-secondary" />
            <p className="text-sm md:text-base font-medium">
              {t.hero.highlight}
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 glow-cyan font-semibold"
              onClick={() => scrollToSection('tiers')}
            >
              <Zap className="mr-2 h-5 w-5" />
              {t.hero.cta}
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 glass-card hover:bg-primary/10"
              onClick={() => scrollToSection('how-it-works')}
            >
              {t.nav.howItWorks}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
