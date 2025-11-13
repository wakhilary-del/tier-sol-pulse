import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-sm text-muted-foreground leading-relaxed font-light">
            {t.footer.disclaimer}
          </p>
          
          <div className="flex justify-center gap-12 text-sm">
            <button className="text-muted-foreground hover:text-primary transition-colors font-medium">
              {t.footer.privacy}
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors font-medium">
              {t.footer.terms}
            </button>
          </div>
          
          <div className="pt-8 border-t border-border/50">
            <p className="text-xs text-muted-foreground font-light">
              © 2024 Solana Rewards Platform. Built on Solana.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
