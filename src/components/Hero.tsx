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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Animated Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-solana-blue/15 rounded-full blur-[100px] animate-float" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight">
            <span className="gradient-text-alt">{t.hero.title}</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            {t.hero.subtitle}
          </p>
          
          {/* Highlight Box */}
          <div className="glass-card inline-flex items-center gap-3 px-6 py-4 rounded-full border border-primary/30 shadow-elevated">
            <Shield className="h-5 w-5 text-secondary" strokeWidth={2.5} />
            <p className="text-sm md:text-base font-medium">
              {t.hero.highlight}
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              className="text-base px-10 py-7 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 hover:scale-105 shadow-elevated font-semibold rounded-full"
              onClick={() => scrollToSection('tiers')}
            >
              <Zap className="mr-2 h-5 w-5" strokeWidth={2.5} />
              {t.hero.cta}
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="text-base px-10 py-7 glass-card-hover border-border/50 rounded-full font-medium"
              onClick={() => scrollToSection('how-it-works')}
            >
              {t.nav.howItWorks}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gradient-to-b from-primary to-secondary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
