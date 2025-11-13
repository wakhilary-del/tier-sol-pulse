import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t.footer.disclaimer}
          </p>
          
          <div className="flex justify-center gap-8 text-sm">
            <button className="text-muted-foreground hover:text-primary transition-colors">
              {t.footer.privacy}
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors">
              {t.footer.terms}
            </button>
          </div>
          
          <div className="pt-6 border-t border-border/30">
            <p className="text-xs text-muted-foreground">
              © 2024 Solana Rewards Platform. Built on Solana.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
