// ── EYEQ COIN — placeholder (Phase 2) ───────────────────────────────────────
// Full implementation coming in Phase 2 after contract deployment.

export const TICKER = ‘EYEQ’
export const TOKEN_NAME = ‘EyeQ Coin’
export const TOTAL_SUPPLY = 1_000_000_000

export const TIERS = [
{ name: ‘Observer’,   min: 0,     color: ‘#5a5a9a’, icon: ‘◎’, perks: [‘Basic analysis’] },
{ name: ‘Analyst’,    min: 100,   color: ‘#4fc3f7’, icon: ‘◈’, perks: [‘Extended history’] },
{ name: ‘Strategist’, min: 500,   color: ‘#7c4dff’, icon: ‘⬡’, perks: [‘Priority AI picks’] },
{ name: ‘Architect’,  min: 2000,  color: ‘#00e5ff’, icon: ‘✦’, perks: [‘Custom strategies’] },
{ name: ‘Oracle’,     min: 10000, color: ‘#fbbf24’, icon: ‘◉’, perks: [‘Everything’] },
]

export const EARN_RULES = {
daily_login:      { amount: 5,    label: ‘Daily Login’,     icon: ‘🔑’ },
prediction_made:  { amount: 10,   label: ‘Prediction Made’, icon: ‘🎯’ },
prediction_win:   { amount: 150,  label: ‘Prediction Win’,  icon: ‘🏆’ },
eyeq_test:        { amount: 25,   label: ‘EyeQ Test’,       icon: ‘👁’  },
streak_3:         { amount: 50,   label: ‘3-Day Streak’,    icon: ‘🔥’ },
streak_7:         { amount: 200,  label: ‘7-Day Streak’,    icon: ‘⚡’ },
streak_30:        { amount: 1000, label: ‘30-Day Streak’,   icon: ‘🌟’ },
stake_yield:      { amount: 0,    label: ‘Staking Yield’,   icon: ‘📈’ },
}

export const TOKENOMICS = {
  total: 1_000_000_000,
  allocation: [
    {
      label: "Community Rewards",
      pct: 40,
      amount: 400_000_000,
      color: "#4fc3f7",
      desc: "Earned by users via learning, streaks, predictions, and engagement"
    },
    {
      label: "Creator Pool",
      pct: 20,
      amount: 200_000_000,
      color: "#7c4dff",
      desc: "Paid to platform creators"
    },
    {
      label: "Staking Reserves",
      pct: 15,
      amount: 150_000_000,
      color: "#00e5ff",
      desc: "Funds the 12% APY staking yield"
    },
    {
      label: "Team and Advisors",
      pct: 10,
      amount: 100_000_000,
      color: "#fbbf24",
      desc: "3-year vesting, 6-month cliff"
    },
    {
      label: "Treasury",
      pct: 10,
      amount: 100_000_000,
      color: "#f87171",
      desc: "Future development, partnerships, and growth"
    },
    {
      label: "Liquidity",
      pct: 5,
      amount: 50_000_000,
      color: "#34d399",
      desc: "DEX/CEX liquidity provisioning"
    }
  ]
}



export const CONTRACT = {
address: null,
network: ‘sepolia’,
chainId: 11155111,
explorer: ‘https://sepolia.etherscan.io/token/’,
abi: []
}

export function getTier(balance) {
return [...TIERS].reverse()
.find(t => balance >= t.min) || TIERS[0]
}

export function getNextLevel(balance) {
return TIERS.find(t => balance < t.min) || null
}

export async function getEyeQProfile()      { return null }
export async function awardEyeQ()           { return null }
export async function stakeEyeQ()           { return null }
export async function claimStakingYield()   { return null }
export async function connectWallet()       { return { error: ‘Phase 2 coming soon’ } }
export async function getOnChainBalance()   { return null }
export async function switchToCorrectNetwork() { return false }
export async function syncOnChainBalance()  { return null }
