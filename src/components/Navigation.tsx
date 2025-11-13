import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-purple">
              <span className="text-2xl">⚡</span>
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:inline">Solana Rewards</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button
              className="hidden md:flex bg-gradient-to-r from-primary to-secondary hover:opacity-90"
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
          <div className="md:hidden py-4 space-y-2 border-t border-border/30">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-primary/10 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 mt-4"
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
