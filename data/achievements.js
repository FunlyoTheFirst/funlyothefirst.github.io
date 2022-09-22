// Format:
// List
// { name: String, description: String, requirements: Array, rewards: Array }
// Requirements
// { objective: String [Key from user.stats], amount: Value }
// Rewards
// { type: String, amount: Value }
// Unlocked
// { name: String, collected: Boolean, date: Date }

export default {
    first: {
        name: 'First time\'s a charm',
        description: 'Open your first case',
        requirements: [{
            objective: 'opened_cases',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 210
        }]
    },
    case10: {
        name: 'Getting Started',
        description: 'Open your first 10 cases',
        requirements: [{
            objective: 'opened_cases',
            amount: 10
        }],
        rewards: [{
            type: 'money',
            amount: 350
        }]
    },
    case100: {
        name: '100th time\'s a charm',
        description: 'Open 100 cases',
        requirements: [{
            objective: 'opened_cases',
            amount: 100
        }],
        rewards: [{
            type: 'money',
            amount: 1000
        }]
    },
    case1000: {
        name: 'To much freetime...',
        description: 'Open 1000 cases',
        requirements: [{
            objective: 'opened_cases',
            amount: 1000
        }],
        rewards: [{
            type: 'money',
            amount: 2500
        }]
    },
    unluckyoutcomes: {
        name: 'Unlucky outcomes',
        description: 'Open a few military specs',
        requirements: [{
            objective: 'opened_rarities_2',
            amount: 10
        }],
        rewards: [{
            type: 'money',
            amount: 800
        }]
    },
    covert: {
        name: 'Covert',
        description: 'Open a covert',
        requirements: [{
            objective: 'opened_rarities_5',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 2500
        }]
    },
    sharpandpointy: {
        name: 'Sharp and pointy',
        description: 'Open a knife (or glove)',
        requirements: [{
            objective: 'opened_rarities_6',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 500
        }]
    },
    sharpandpointy2: {
        name: 'Sharp and pointy II',
        description: 'Open 10 knives (or gloves)',
        requirements: [{
            objective: 'opened_rarities_6',
            amount: 10
        }],
        rewards: [{
            type: 'money',
            amount: 2500
        }]
    },
    sharpandpointy3: {
        name: 'Sharp and pointy III',
        description: 'Open 100 knives (or gloves)',
        requirements: [{
            objective: 'opened_rarities_6',
            amount: 100
        }],
        rewards: [{
            type: 'money',
            amount: 12500
        }]
    },
    sharpandpointy4: {
        name: 'Sharp and pointy Master',
        description: 'Open 1000 knives (or gloves)',
        requirements: [{
            objective: 'opened_rarities_6',
            amount: 1000
        }],
        rewards: [{
            type: 'money',
            amount: 200000
        }]
    },
    clicker1: {
        name: 'Clicker I',
        description: 'Click 100 times',
        requirements: [{
            objective: 'clicks',
            amount: 100
        }],
        rewards: [{
            type: 'money',
            amount: 1200
        }]
    },
    clicker2: {
        name: 'Clicker II',
        description: 'Click 1000 times',
        requirements: [{
            objective: 'clicks',
            amount: 1000
        }],
        rewards: [{
            type: 'money',
            amount: 4000
        }]
    },
    clicker3: {
        name: 'Clicker III',
        description: 'Click 8000 times',
        requirements: [{
            objective: 'clicks',
            amount: 8000
        }],
        rewards: [{
            type: 'money',
            amount: 10000
        }]
    },
    clicker4: {
        name: 'Clicker IV',
        description: 'Click 25000 times',
        requirements: [{
            objective: 'clicks',
            amount: 25000
        }],
        rewards: [{
            type: 'money',
            amount: 25000
        }]
    },
    clicker5: {
        name: 'Clicker Master',
        description: 'Click 100000 times',
        requirements: [{
            objective: 'clicks',
            amount: 100000
        }],
        rewards: [{
            type: 'money',
            amount: 50000
        }]
    },
    seller: {
        name: 'Seller',
        description: 'Sell your first skin',
        requirements: [{
            objective: 'skin_sold',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 100
        }]
    },
    seller2: {
        name: 'Cheapsies',
        description: 'Sell your first 100 skins',
        requirements: [{
            objective: 'skin_sold',
            amount: 100
        }],
        rewards: [{
            type: 'money',
            amount: 750
        }]
    },
    seller3: {
        name: 'Trusted Seller',
        description: 'Sell 1000 skins',
        requirements: [{
            objective: 'skin_sold',
            amount: 1000
        }],
        rewards: [{
            type: 'money',
            amount: 2500
        }]
    },
    seller4: {
        name: 'Market Leader',
        description: 'Sell 10000 skins',
        requirements: [{
            objective: 'skin_sold',
            amount: 10000
        }],
        rewards: [{
            type: 'money',
            amount: 8000
        }]
    },
    profit: {
        name: 'Profit',
        description: 'Sell a skin, which goes for more than 10 €',
        requirements: [{
            objective: 'skin_sold_gt10',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 500
        }]
    },
    profits: {
        name: 'Profits',
        description: 'Sell 100 skins, where each goes for more than 10 €',
        requirements: [{
            objective: 'skin_sold_gt10',
            amount: 100
        }],
        rewards: [{
            type: 'money',
            amount: 5000
        }]
    },
    undergrounddeals: {
        name: 'Underground Deals',
        description: 'Sell a covert',
        requirements: [{
            objective: 'skin_sold_r5',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 1500
        }]
    },
    contraband: {
        name: 'Contraband',
        description: 'Sell a knife (or glove)',
        requirements: [{
            objective: 'skin_sold_r6',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 2000
        }]
    },
    gains: {
        name: 'Gains',
        description: 'Sell a skin, worth more than 50 €',
        requirements: [{
            objective: 'skin_sold_gt50',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 3500
        }]
    },
    raresales: {
        name: 'Rare Sales',
        description: 'Sell a skin worth more than 250 €',
        requirements: [{
            objective: 'skin_sold_gt250',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 6000
        }]
    },
    raresales2: {
        name: 'Rare Sales II',
        description: 'Sell 10 skins, where each is worth more than 250 €',
        requirements: [{
            objective: 'skin_sold_gt250',
            amount: 10
        }],
        rewards: [{
            type: 'money',
            amount: 10000
        }]
    },
    raresales3: {
        name: 'Rare Sales Master',
        description: 'Sell 50 skins, where each is worth more than 250 €',
        requirements: [{
            objective: 'skin_sold_gt250',
            amount: 50
        }],
        rewards: [{
            type: 'money',
            amount: 20000
        }]
    },
    winnertakesall: {
        name: 'Winner Takes All!',
        description: 'Win your first jackpot',
        requirements: [{
            objective: 'win_jackpot',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 1000
        }]
    },
    winnertakesall2: {
        name: 'Winner Takes All! II',
        description: 'Win 5 jackpots',
        requirements: [{
            objective: 'win_jackpot',
            amount: 5
        }],
        rewards: [{
            type: 'money',
            amount: 2500
        }]
    },
    winnertakesall3: {
        name: 'Winner Takes All! III',
        description: 'Win 10 jackpots',
        requirements: [{
            objective: 'win_jackpot',
            amount: 10
        }],
        rewards: [{
            type: 'money',
            amount: 5000
        }]
    },
    winnertakesall4: {
        name: 'Winner Takes All! IV',
        description: 'Win 25 jackpots',
        requirements: [{
            objective: 'win_jackpot',
            amount: 25
        }],
        rewards: [{
            type: 'money',
            amount: 10000
        }]
    },
    winnertakesall5: {
        name: 'Winner Takes All! Master',
        description: 'Win 100 jackpots',
        requirements: [{
            objective: 'win_jackpot',
            amount: 100
        }],
        rewards: [{
            type: 'money',
            amount: 50000
        }]
    },
    againstallodds: {
        name: 'Against all odds',
        description: 'Win the jackpot with an odd below 2,5%',
        requirements: [{
            objective: 'win_jackpot_low',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 2500
        }]
    },
    expectedoutcome: {
        name: 'Expected Outcome',
        description: 'Win the jackpot with an odd over 35%',
        requirements: [{
            objective: 'win_jackpot_big',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 1250
        }]
    },
    biggestloser: {
        name: 'The Biggest Loser',
        description: 'Lose the jackpot with an odd over 35%',
        requirements: [{
            objective: 'lose_jackpot_big',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 2500
        }]
    },
    intenseroll: {
        name: 'Intense Roll',
        description: 'Lose the jackpot, when the indicator lands right beside you',
        requirements: [{
            objective: 'lose_jackpot_close',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 1000
        }]
    },
    worthatry: {
        name: 'Worth a try',
        description: 'Lose your first jackpot',
        requirements: [{
            objective: 'lose_jackpot',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 200
        }]
    },
    worthatry2: {
        name: 'Worth a try? II',
        description: 'Lose 50 jackpots',
        requirements: [{
            objective: 'lose_jackpot',
            amount: 50
        }],
        rewards: [{
            type: 'money',
            amount: 2500
        }]
    },
    worthatry3: {
        name: 'Worth a try III',
        description: 'Lose 100 jackpots',
        requirements: [{
            objective: 'lose_jackpot',
            amount: 100
        }],
        rewards: [{
            type: 'money',
            amount: 3500
        }]
    },
    worthatry4: {
        name: 'Worth a try Master',
        description: 'Lose 200 jackpots',
        requirements: [{
            objective: 'lose_jackpot',
            amount: 200
        }],
        rewards: [{
            type: 'money',
            amount: 5000
        }]
    },
    cashout: {
        name: 'Cash Out I',
        description: 'Cash out over 2x in Crash',
        requirements: [{
            objective: 'cashout_2x',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 200
        }]
    },
    cashout2: {
        name: 'Cash Out II',
        description: 'Cash out over 3x in Crash',
        requirements: [{
            objective: 'cashout_3x',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 400
        }]
    },
    cashout3: {
        name: 'Cash Out III',
        description: 'Cash out over 4x in Crash',
        requirements: [{
            objective: 'cashout_4x',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 800
        }]
    },
    cashout4: {
        name: 'Cash Out IV',
        description: 'Cash out over 5x in Crash',
        requirements: [{
            objective: 'cashout_5x',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 1600
        }]
    },
    cashout5: {
        name: 'Cash Out Master',
        description: 'Cash out over 10x in Crash',
        requirements: [{
            objective: 'cashout_10x',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 3600
        }]
    },
    diamondhands: {
        name: 'Diamond Hands',
        description: 'Cash out over 100x in Crash',
        requirements: [{
            objective: 'cashout_100x',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 50000
        }]
    },
    regrettable: {
        name: 'Easily Regrettable',
        description: 'Lose your bet to a crash over 100x',
        requirements: [{
            objective: 'crash_bet_100x',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 5000
        }]
    },
    riskedit: {
        name: 'Should have risked it',
        description: 'Cash out under 2x in a Crash over 100x',
        requirements: [{
            objective: 'crash_low_bet_100x',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 500
        }]
    },
    reachlevel1: {
        name: 'The beginning',
        description: 'Reach level one',
        requirements: [{
            objectiveType: 'calculatedUserStat',
            objective: 'level',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 800
        }]
    },
    reachlevel5: {
        name: 'Getting Started',
        description: 'Reach level five',
        requirements: [{
            objectiveType: 'calculatedUserStat',
            objective: 'level',
            amount: 5
        }],
        rewards: [{
            type: 'money',
            amount: 2500
        }]
    },
    reachlevel10: {
        name: 'Passioned Player',
        description: 'Reach level ten',
        requirements: [{
            objectiveType: 'calculatedUserStat',
            objective: 'level',
            amount: 10
        }],
        rewards: [{
            type: 'money',
            amount: 5000
        }]
    },
    reachlevel20: {
        name: 'Addicted Player',
        description: 'Reach level twenty',
        requirements: [{
            objectiveType: 'calculatedUserStat',
            objective: 'level',
            amount: 20
        }],
        rewards: [{
            type: 'money',
            amount: 10000
        }]
    },
    reachlevel30: {
        name: 'Getting old no?',
        description: 'Reach level thirty',
        requirements: [{
            objectiveType: 'calculatedUserStat',
            objective: 'level',
            amount: 30
        }],
        rewards: [{
            type: 'money',
            amount: 50000
        }]
    },
    reachlevel40: {
        name: 'Professionel Timekiller',
        description: 'Reach level forty',
        requirements: [{
            objectiveType: 'calculatedUserStat',
            objective: 'level',
            amount: 40
        }],
        rewards: [{
            type: 'money',
            amount: 100000
        }]
    },
    wincoinflip: {
        name: 'Great Teller',
        description: 'Win a coinflip',
        requirements: [{
            objective: 'total_coinflips_won',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 200
        }]
    },
    losecoinflip: {
        name: 'Bad Teller',
        description: 'Lose a coinflip',
        requirements: [{
            objective: 'total_coinflips_lost',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 100
        }]
    },
    win10coinflip: {
        name: 'So easy it\'s getting boring',
        description: 'Win 10 coinflips',
        requirements: [{
            objective: 'total_coinflips_won',
            amount: 10
        }],
        rewards: [{
            type: 'money',
            amount: 500
        }]
    },
    lose10coinflip: {
        name: 'Next time I will try CT',
        description: 'Lose 10 coinflips',
        requirements: [{
            objective: 'total_coinflips_lost',
            amount: 10
        }],
        rewards: [{
            type: 'money',
            amount: 300
        }]
    },
    win100coinflip: {
        name: 'Routine Flips',
        description: 'Win 100 coinflips',
        requirements: [{
            objective: 'total_coinflips_won',
            amount: 100
        }],
        rewards: [{
            type: 'money',
            amount: 2500
        }]
    },
    lose100coinflip: {
        name: 'But it\'s fun anyway',
        description: 'Lose 100 coinflips',
        requirements: [{
            objective: 'total_coinflips_lost',
            amount: 100
        }],
        rewards: [{
            type: 'money',
            amount: 1500
        }]
    },
    win500coinflip: {
        name: 'Master Coin Flipper',
        description: 'Win 500 coinflips',
        requirements: [{
            objective: 'total_coinflips_won',
            amount: 500
        }],
        rewards: [{
            type: 'money',
            amount: 5000
        }]
    },
    flipsforwhat: {
        name: '100 Flips for what',
        description: 'Do 100 coinflips',
        requirements: [{
            objective: 'total_coinflips',
            amount: 100
        }],
        rewards: [{
            type: 'money',
            amount: 2500
        }]
    },
    flipathousand: {
        name: 'Flip a thousand',
        description: 'Do 1000 coinflips',
        requirements: [{
            objective: 'total_coinflips',
            amount: 1000
        }],
        rewards: [{
            type: 'money',
            amount: 10000
        }]
    },
    winmines: {
        name: 'Bomb detector',
        description: 'Win a game of mines',
        requirements: [{
            objective: 'total_mines_won',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 100
        }]
    },
    losemines: {
        name: 'The unlucky bomb detector',
        description: 'Lose a game of mines, and get blown to pieces.',
        requirements: [{
            objective: 'total_mines_lost',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 50
        }]
    },
    win50mines: {
        name: 'Picked for the job',
        description: 'Prove your bomb clearing skills, and win 50 games of mines.',
        requirements: [{
            objective: 'total_mines_won',
            amount: 50
        }],
        rewards: [{
            type: 'money',
            amount: 400
        }]
    },
    win1000mines: {
        name: 'Bomb Master',
        description: 'Win 1000 games of mines',
        requirements: [{
            objective: 'total_mines_won',
            amount: 1000
        }],
        rewards: [{
            type: 'money',
            amount: 10000
        }]
    },
    winminesmo20x: {
        name: 'X-Ray Vision',
        description: 'Win a game of mines, with a multiplier over 20x',
        requirements: [{
            objective: 'total_mines_won_mo20',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 1000
        }]
    },
    winminesmo20x2: {
        name: 'Gut Feeling',
        description: 'Win 10 games of mines, each with a multiplier over 20x',
        requirements: [{
            objective: 'total_mines_won_mo20',
            amount: 10
        }],
        rewards: [{
            type: 'money',
            amount: 10000
        }]
    },
    winminesmo20x3: {
        name: 'Extreme skills or luck?',
        description: 'Win 100 games of mines, each with a multiplier over 20x',
        requirements: [{
            objective: 'total_mines_won_mo20',
            amount: 100
        }],
        rewards: [{
            type: 'money',
            amount: 100000
        }]
    },
    bigbets: {
        name: 'Big Bets',
        description: 'Win a coin flip with a bet over 1000 €',
        requirements: [{
            objective: 'total_coinflips_won_bet1000',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 10000
        }]
    },
    biglosses: {
        name: 'Big Losses',
        description: 'Lose a coin flip with a bet over 1000 €',
        requirements: [{
            objective: 'total_coinflips_lost_bet1000',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 2500
        }]
    },
    bigbets2: {
        name: 'Biggest Bets',
        description: 'Win a coin flip with a bet over 10000 €',
        requirements: [{
            objective: 'total_coinflips_won_bet10000',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 80000
        }]
    },
    biglosses2: {
        name: 'Biggest Losses',
        description: 'Lose a coin flip with a bet over 10000 €',
        requirements: [{
            objective: 'total_coinflips_lost_bet10000',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 15000
        }]
    },
    missions1: {
        name: 'First Assignment',
        description: 'Finish a mission',
        requirements: [{
            objective: 'missions_finished',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 1500
        }]
    },
    missions2: {
        name: 'Primary Contact',
        description: 'Finish 20 missions',
        requirements: [{
            objective: 'missions_finished',
            amount: 10
        }],
        rewards: [{
            type: 'money',
            amount: 7500
        }]
    },
    missions3: {
        name: 'Honest Work',
        description: 'Finish 100 missions',
        requirements: [{
            objective: 'missions_finished',
            amount: 100
        }],
        rewards: [{
            type: 'money',
            amount: 15000
        }]
    },
    missions4: {
        name: 'Mission Impossible',
        description: 'Finish 1000 missions',
        requirements: [{
            objective: 'missions_finished',
            amount: 1000
        }],
        rewards: [{
            type: 'money',
            amount: 1000000
        }]
    },
    collector1: {
        name: 'Beginner Collector',
        description: 'Collect 50 skins',
        requirements: [{
            objective: 'skins_discovered',
            amount: 50
        }],
        rewards: [{
            type: 'money',
            amount: 400
        }]
    },
    collector2: {
        name: 'Growing Collection',
        description: 'Collect 100 skins',
        requirements: [{
            objective: 'skins_discovered',
            amount: 100
        }],
        rewards: [{
            type: 'money',
            amount: 1000
        }]
    },
    collector3: {
        name: 'Diverse Collector',
        description: 'Collect 250 skins',
        requirements: [{
            objective: 'skins_discovered',
            amount: 250
        }],
        rewards: [{
            type: 'money',
            amount: 2000
        }]
    },
    collector4: {
        name: 'Private Collector',
        description: 'Collect 500 skins',
        requirements: [{
            objective: 'skins_discovered',
            amount: 500
        }],
        rewards: [{
            type: 'money',
            amount: 5000
        }]
    },
    collector5: {
        name: 'Renown Collector',
        description: 'Collect 750 skins',
        requirements: [{
            objective: 'skins_discovered',
            amount: 750
        }],
        rewards: [{
            type: 'money',
            amount: 50000
        }]
    },
    collector6: {
        name: 'The Millionaires Collection',
        description: 'Collect 1000 skins',
        requirements: [{
            objective: 'skins_discovered',
            amount: 1000
        }],
        rewards: [{
            type: 'money',
            amount: 100000
        }]
    },
    collector7: {
        name: 'The Billionaires Collection',
        description: 'Collect 1250 skins',
        requirements: [{
            objective: 'skins_discovered',
            amount: 1250
        }],
        rewards: [{
            type: 'money',
            amount: 250000
        }]
    },
    collector8: {
        name: 'Near-Perfect Collection',
        description: 'Collect 1500 skins',
        requirements: [{
            objective: 'skins_discovered',
            amount: 1500
        }],
        rewards: [{
            type: 'money',
            amount: 2500000
        }]
    },
    collection_complete: {
        name: 'Collection Complete',
        description: 'Collect 1635 skins',
        requirements: [{
            objective: 'skins_discovered',
            amount: 1635
        }],
        rewards: [{
            type: 'money',
            amount: 10000000
        }]
    },
    roulette_win: {
        name: 'Roulette win',
        description: 'Win a roulette spin',
        requirements: [{
            objective: 'roulette_wins',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 500
        }]
    },
    roulette_wins: {
        name: 'Roulette win',
        description: 'Win 10 roulette spins',
        requirements: [{
            objective: 'roulette_wins',
            amount: 10
        }],
        rewards: [{
            type: 'money',
            amount: 1500
        }]
    },
    roulette_spinner: {
        name: 'Roulette Spinner',
        description: 'Win 100 roulette spins',
        requirements: [{
            objective: 'roulette_wins',
            amount: 100
        }],
        rewards: [{
            type: 'money',
            amount: 20000
        }]
    },
    roulette_master: {
        name: 'Roulette Master',
        description: 'Win 1000 roulette spins',
        requirements: [{
            objective: 'roulette_wins',
            amount: 1000
        }],
        rewards: [{
            type: 'money',
            amount: 250000
        }]
    },
    roulette_win_2: {
        name: '2:1 odds',
        description: 'Win a roulette spin with 2:1 odds',
        requirements: [{
            objective: 'roulette_wins_2to1',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 1500
        }]
    },
    roulette_win_2_gambler: {
        name: 'Roulette Gambler',
        description: 'Win a roulette spin with 2:1 odds, 10 times',
        requirements: [{
            objective: 'roulette_wins_2to1',
            amount: 10
        }],
        rewards: [{
            type: 'money',
            amount: 5000
        }]
    },
    roulette_win_2_master: {
        name: 'Roulette Gambler Master',
        description: 'Win a roulette spin with 2:1 odds, 100 times',
        requirements: [{
            objective: 'roulette_wins_2to1',
            amount: 100
        }],
        rewards: [{
            type: 'money',
            amount: 25000
        }]
    },
    roulette_win_35: {
        name: '35:1 odds',
        description: 'Win a roulette spin with 35:1 odds',
        requirements: [{
            objective: 'roulette_wins_35to1',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 10000
        }]
    },
    spend_chips: {
        name: 'Gambler',
        description: 'Spend 1.000 chips on any casino game',
        requirements: [{
            objective: 'spend_chips',
            amount: 1000
        }],
        rewards: [{
            type: 'money',
            amount: 100
        }]
    },
    spend_chips_2: {
        name: 'Gambler II',
        description: 'Spend 10.000 chips on any casino game',
        requirements: [{
            objective: 'spend_chips',
            amount: 10000
        }],
        rewards: [{
            type: 'money',
            amount: 200
        }]
    },
    spend_chips_3: {
        name: 'Gambler III',
        description: 'Spend 100.000 chips on any casino game',
        requirements: [{
            objective: 'spend_chips',
            amount: 100000
        }],
        rewards: [{
            type: 'money',
            amount: 500
        }]
    },
    spend_chips_4: {
        name: 'Gambler IV',
        description: 'Spend 1.000.000 chips on any casino game',
        requirements: [{
            objective: 'spend_chips',
            amount: 1000000
        }],
        rewards: [{
            type: 'money',
            amount: 1000
        }]
    },
    spend_chips_master: {
        name: 'Gambler Master',
        description: 'Spend 10.000.000 chips on any casino game',
        requirements: [{
            objective: 'spend_chips',
            amount: 10000000
        }],
        rewards: [{
            type: 'money',
            amount: 10000
        }]
    },
    win_chips: {
        name: 'Casino Winner',
        description: 'Win 1.000 chips on any casino game',
        requirements: [{
            objective: 'win_chips',
            amount: 1000
        }],
        rewards: [{
            type: 'money',
            amount: 500
        }]
    },
    win_chips_2: {
        name: 'Casino Winner II',
        description: 'Win 10.000 chips on any casino game',
        requirements: [{
            objective: 'win_chips',
            amount: 10000
        }],
        rewards: [{
            type: 'money',
            amount: 2000
        }]
    },
    win_chips_3: {
        name: 'Casino Winner III',
        description: 'Win 100.000 chips on any casino game',
        requirements: [{
            objective: 'win_chips',
            amount: 100000
        }],
        rewards: [{
            type: 'money',
            amount: 5000
        }]
    },
    win_chips_4: {
        name: 'Casino Winner IV',
        description: 'Win 1.000.000 chips on any casino game',
        requirements: [{
            objective: 'win_chips',
            amount: 1000000
        }],
        rewards: [{
            type: 'money',
            amount: 10000
        }]
    },
    win_chips_master: {
        name: 'Casino Winner Master',
        description: 'Win 10.000.000 chips on any casino game',
        requirements: [{
            objective: 'win_chips',
            amount: 10000000
        }],
        rewards: [{
            type: 'money',
            amount: 100000
        }]
    },
    spend_chips_on_slotmachine: {
        name: 'Slot Machine Gambler',
        description: 'Spend 1.000 chips on the slot machine',
        requirements: [{
            objective: 'spend_chips_on_slotmachine',
            amount: 1000
        }],
        rewards: [{
            type: 'money',
            amount: 100
        }]
    },
    spend_chips_on_slotmachine_2: {
        name: 'Slot Machine Gambler II',
        description: 'Spend 10.000 chips on the slot machine',
        requirements: [{
            objective: 'spend_chips_on_slotmachine',
            amount: 10000
        }],
        rewards: [{
            type: 'money',
            amount: 200
        }]
    },
    spend_chips_on_slotmachine_3: {
        name: 'Slot Machine Gambler III',
        description: 'Spend 100.000 chips on the slot machine',
        requirements: [{
            objective: 'spend_chips_on_slotmachine',
            amount: 100000
        }],
        rewards: [{
            type: 'money',
            amount: 500
        }]
    },
    spend_chips_on_slotmachine_4: {
        name: 'Slot Machine Gambler IV',
        description: 'Spend 1.000.000 chips on the slot machine',
        requirements: [{
            objective: 'spend_chips_on_slotmachine',
            amount: 1000000
        }],
        rewards: [{
            type: 'money',
            amount: 1000
        }]
    },
    spend_chips_on_slotmachine_master: {
        name: 'Slot Machine Gambler Master',
        description: 'Spend 10.000.000 chips on the slot machine',
        requirements: [{
            objective: 'spend_chips_on_slotmachine',
            amount: 10000000
        }],
        rewards: [{
            type: 'money',
            amount: 10000
        }]
    },
    win_chips_on_slotmachine: {
        name: 'Slot Machine Gains',
        description: 'Win 1.000 chips on the slot machine',
        requirements: [{
            objective: 'win_chips_on_slotmachine',
            amount: 1000
        }],
        rewards: [{
            type: 'money',
            amount: 500
        }]
    },
    win_chips_on_slotmachine_2: {
        name: 'Slot Machine Gains II',
        description: 'Win 10.000 chips on the slot machine',
        requirements: [{
            objective: 'win_chips_on_slotmachine',
            amount: 10000
        }],
        rewards: [{
            type: 'money',
            amount: 2000
        }]
    },
    win_chips_on_slotmachine_3: {
        name: 'Slot Machine Gains III',
        description: 'Win 100.000 chips on the slot machine',
        requirements: [{
            objective: 'win_chips_on_slotmachine',
            amount: 100000
        }],
        rewards: [{
            type: 'money',
            amount: 5000
        }]
    },
    win_chips_on_slotmachine_4: {
        name: 'Slot Machine Gains IV',
        description: 'Win 1.000.000 chips on the slot machine',
        requirements: [{
            objective: 'win_chips_on_slotmachine',
            amount: 1000000
        }],
        rewards: [{
            type: 'money',
            amount: 10000
        }]
    },
    win_chips_on_slotmachine_master: {
        name: 'Slot Machine Gains Master',
        description: 'Win 10.000.000 chips on the slot machine',
        requirements: [{
            objective: 'win_chips_on_slotmachine',
            amount: 10000000
        }],
        rewards: [{
            type: 'money',
            amount: 100000
        }]
    },
    win_special_on_slotmachine: {
        name: 'Casino Weapon Trade',
        description: 'Win a knife or glove on the slot machine',
        requirements: [{
            objective: 'win_special_on_slotmachine',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 1000
        }]
    },
    win_100x_on_slotmachine: {
        name: 'Max Win',
        description: 'Win 100x or more on the slot machine',
        requirements: [{
            objective: 'win_100x_on_slotmachine',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 5000
        }]
    },
    win_dice_throw_on_slotmachine: {
        name: 'Dice Straight',
        description: 'Win the dice throw on the slot machine',
        requirements: [{
            objective: 'win_dice_throw_on_slotmachine',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 10000
        }]
    },
    get_5_in_a_row_on_slotmachine: {
        name: '5-in-row',
        description: 'Get 5 symbols in a row, on the slot machine',
        requirements: [{
            objective: 'get_5_in_a_row_on_slotmachine',
            amount: 1
        }],
        rewards: [{
            type: 'money',
            amount: 8000
        }]
    },
};