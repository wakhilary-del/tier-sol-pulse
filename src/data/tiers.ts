export interface Tier {
  id: number;
  name: string;
  nameKey: string;
  balanceMin: number;
  balanceMax: number | null;
  reward: number;
  boosts: string[];
  gradient: string;
  icon: string;
}

export const tiers: Tier[] = [
  {
    id: 1,
    name: 'Explorer',
    nameKey: 'explorer',
    balanceMin: 100,
    balanceMax: 999,
    reward: 0.25,
    boosts: ['+10% Platform Points', 'Early Access', 'Explorer Badge'],
    gradient: 'from-blue-500 to-cyan-400',
    icon: '🔍',
  },
  {
    id: 2,
    name: 'Voyager',
    nameKey: 'voyager',
    balanceMin: 1000,
    balanceMax: 4999,
    reward: 1,
    boosts: ['+25% Points', 'Priority Feature Access', 'Weekly Multipliers', 'Voyager Badge'],
    gradient: 'from-cyan-500 to-teal-400',
    icon: '🚀',
  },
  {
    id: 3,
    name: 'Navigator',
    nameKey: 'navigator',
    balanceMin: 5000,
    balanceMax: 24999,
    reward: 5,
    boosts: ['+50% Points', 'Beta Access', 'Increased Reward Rates', 'Navigator Badge'],
    gradient: 'from-purple-500 to-pink-400',
    icon: '🧭',
  },
  {
    id: 4,
    name: 'Pioneer',
    nameKey: 'pioneer',
    balanceMin: 25000,
    balanceMax: 99999,
    reward: 20,
    boosts: ['+120% Points', 'Private Channels', 'Whitelists', 'Seasonal Accelerators', 'Pioneer Badge'],
    gradient: 'from-orange-500 to-red-400',
    icon: '⚡',
  },
  {
    id: 5,
    name: 'Elite',
    nameKey: 'elite',
    balanceMin: 100000,
    balanceMax: null,
    reward: 120,
    boosts: ['+300% Points', 'VIP Support', 'Direct Voting', 'Pre-Release Partner Access', 'Elite Gold Badge'],
    gradient: 'from-yellow-500 to-amber-400',
    icon: '👑',
  },
];
