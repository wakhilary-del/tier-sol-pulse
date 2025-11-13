export type Language = 'en' | 'es' | 'de' | 'fr' | 'tr';

export interface Translations {
  nav: {
    howItWorks: string;
    tiers: string;
    safety: string;
    faq: string;
    connectWallet: string;
  };
  hero: {
    title: string;
    subtitle: string;
    highlight: string;
    cta: string;
  };
  howItWorks: {
    title: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  tiers: {
    title: string;
    subtitle: string;
    balance: string;
    instantReward: string;
    boosts: string;
  };
  safety: {
    title: string;
    subtitle: string;
    point1: string;
    point2: string;
    point3: string;
    point4: string;
    point5: string;
  };
  revenue: {
    title: string;
    subtitle: string;
    point1: string;
    point2: string;
    point3: string;
    point4: string;
    footer: string;
  };
  benefits: {
    title: string;
    benefit1: string;
    benefit2: string;
    benefit3: string;
    benefit4: string;
  };
  faq: {
    title: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
  };
  footer: {
    disclaimer: string;
    privacy: string;
    terms: string;
  };
}
