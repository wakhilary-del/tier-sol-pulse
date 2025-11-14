import { LucideIcon } from 'lucide-react';

export interface Tier {
  id: number;
  name: string;
  nameKey: string;
  balanceMin: number;
  balanceMax: number | null;
  reward: number;
  boosts: string[];
  gradient: string;
  iconName: string;
}

export const tiers: Tier[] = [
  {
    id: 1,
    name: 'Explorer',
    nameKey: 'explorer',
    balanceMin: 100,
    balanceMax: 999,
    reward: 0.2,
    boosts: ['+5% Platform Points', 'Early Access', 'Explorer Badge'],
    gradient: 'from-blue-500 to-cyan-400',
    iconName: 'Search',
  },
  {
    id: 2,
    name: 'Voyager',
    nameKey: 'voyager',
    balanceMin: 1000,
    balanceMax: 4999,
    reward: 0.7,
    boosts: ['+12% Points', 'Priority Feature Access', 'Weekly Multipliers', 'Voyager Badge'],
    gradient: 'from-cyan-500 to-teal-400',
    iconName: 'Rocket',
  },
  {
    id: 3,
    name: 'Navigator',
    nameKey: 'navigator',
    balanceMin: 5000,
    balanceMax: 24999,
    reward: 2.5,
    boosts: ['+25% Points', 'Beta Access', 'Increased Reward Rates', 'Navigator Badge'],
    gradient: 'from-purple-500 to-pink-400',
    iconName: 'Compass',
  },
  {
    id: 4,
    name: 'Pioneer',
    nameKey: 'pioneer',
    balanceMin: 25000,
    balanceMax: 99999,
    reward: 7,
    boosts: ['+45% Points', 'Private Channels', 'Whitelists', 'Seasonal Accelerators', 'Pioneer Badge'],
    gradient: 'from-orange-500 to-red-400',
    iconName: 'Zap',
  },
  {
    id: 5,
    name: 'Elite',
    nameKey: 'elite',
    balanceMin: 100000,
    balanceMax: null,
    reward: 15,
    boosts: ['+80% Points', 'VIP Support', 'Direct Voting', 'Pre-Release Partner Access', 'Elite Gold Badge'],
    gradient: 'from-yellow-500 to-amber-400',
    iconName: 'Crown',
  },
];
