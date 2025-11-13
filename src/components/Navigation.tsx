import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from './ui/button';
import { Menu, Zap } from 'lucide-react';
import { useState } from 'react';

export const Navigation = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: t.nav.howItWorks, href: '#how-it-works' },
    { label: t.nav.tiers, href: '#tiers' },
    { label: t.nav.safety, href: '#safety' },
    { label: t.nav.faq, href: '#faq' },
  ];

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <Zap className="h-6 w-6 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-black gradient-text hidden sm:inline tracking-tight">Solana Rewards</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-semibold hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button
              className="hidden md:flex bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-full px-6 font-semibold shadow-lg"
              onClick={() => scrollToSection('#tiers')}
            >
              {t.nav.connectWallet}
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden glass-card"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border/50">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-sm font-semibold hover:bg-primary/10 rounded-xl transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 mt-4 rounded-full font-semibold"
              onClick={() => {
                scrollToSection('#tiers');
                setIsOpen(false);
              }}
            >
              {t.nav.connectWallet}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
