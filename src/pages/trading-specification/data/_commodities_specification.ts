import { TSpecification } from '../_types'

const commodities_specification: TSpecification = {
    market: 'commodities',
    dl_title: '_t_Dynamic tiers - Metals_t_',
    dl_data: [
        {
            from: 0.01,
            to: 1,
            leverage: '1,000',
        },
        {
            from: 1.01,
            to: 5,
            leverage: 500,
        },
        {
            from: 5.01,
            to: 10,
            leverage: 100,
        },
        {
            from: 10.01,
            to: 15,
            leverage: 50,
        },
    ],
    data: [
        {
            instrument: {
                symbol: 'SILVEREUR',
                instrument: 'Silver/EUR',
            },
            contract_size: '5000 oz',
            base_currency: 'XAG',
            minimum_size: 0.01,
            minimum_spread: 0.009,
            target_spread: 0.014,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -2.39,
            swap_short: 1.492,
            trading_hours: 'Sun 22:05 - Fri 20:45\nDaily Break: 21:00 - 22:00 GMT',
        },
        {
            instrument: {
                symbol: 'SILVERUSD',
                dl_icon: true,
                instrument: 'Silver/USD',
            },
            contract_size: '5,000 oz',
            base_currency: 'XAG',
            minimum_size: 0.01,
            minimum_spread: 0.014,
            target_spread: 0.03,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -4.204,
            swap_short: 2.627,
            trading_hours: 'Sun 22:05 - Fri 20:45\nDaily Break: 21:00 - 22:00 GMT',
        },
        {
            instrument: {
                symbol: 'ALUMINIUMUSD',
                instrument: 'Aluminium/USD',
            },
            contract_size: '100 ton',
            base_currency: 'XAL',
            minimum_size: 0.01,
            minimum_spread: 3.55,
            target_spread: 5.29,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -70.158,
            swap_short: 53.127,
            trading_hours: 'Mon - Fri 00:05 - 18:00 GMT',
        },
        {
            instrument: {
                symbol: 'GOLDEUR',
                instrument: 'Gold/EUR',
            },
            contract_size: '100 oz',
            base_currency: 'XAU',
            minimum_size: 0.01,
            minimum_spread: 0.2,
            target_spread: 0.59,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -21.559,
            swap_short: 11.536,
            trading_hours: 'Sun 22:05 - Fri 20:45\nDaily Break: 21:00 - 22:00 GMT',
        },
        {
            instrument: {
                symbol: 'GOLDUSD',
                dl_icon: true,
                instrument: 'Gold/USD',
            },
            contract_size: '100 oz',
            base_currency: 'XAU',
            minimum_size: 0.01,
            minimum_spread: 0.16,
            target_spread: 0.27,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -29.05,
            swap_short: 15.33,
            trading_hours: 'Sun 22:05 - Fri 20:45\nDaily Break: 21:00 - 22:00 GMT',
        },
        {
            instrument: {
                symbol: 'COPPERUSD',
                instrument: 'Copper/USD',
            },
            contract_size: '100 ton',
            base_currency: 'XCU',
            minimum_size: 0.01,
            minimum_spread: 6.25,
            target_spread: 7.7,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -58.762,
            swap_short: 37.944,
            trading_hours: 'Mon - Fri 00:05 - 18:00 GMT',
        },
        {
            instrument: {
                symbol: 'NICKELUSD',
                instrument: 'Nickel/USD',
            },
            contract_size: '100 ton',
            base_currency: 'XNI',
            minimum_size: 0.01,
            minimum_spread: 14.54,
            target_spread: 22.65,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -362.219,
            swap_short: 266.094,
            trading_hours: 'Mon - Fri 00:05 - 18:00 GMT',
        },
        {
            instrument: {
                symbol: 'LEADUSD',
                instrument: 'Lead/USD',
            },
            contract_size: '100 ton',
            base_currency: 'XPB',
            minimum_size: 0.01,
            minimum_spread: 2.54,
            target_spread: 3.87,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -2.519,
            swap_short: -2.519,
            trading_hours: 'Mon - Fri 00:05 - 18:00 GMT',
        },
        {
            instrument: {
                symbol: 'PALLADIUMUSD',
                instrument: 'Palladium/USD',
            },
            contract_size: '100 oz',
            base_currency: 'XPD',
            minimum_size: 0.01,
            minimum_spread: 1.9,
            target_spread: 7.57,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -27.038,
            swap_short: 15.273,
            trading_hours: 'Sun 22:05 - Fri 20:45\nDaily Break: 21:00 - 22:00 GMT',
        },
        {
            instrument: {
                symbol: 'PLATINUMUSD',
                instrument: 'Platinum/USD',
            },
            contract_size: '100 oz',
            base_currency: 'XPT',
            minimum_size: 0.01,
            minimum_spread: 0.23,
            target_spread: 1.66,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -23.375,
            swap_short: 7.713,
            trading_hours: 'Sun 22:05 - Fri 20:45\nDaily Break: 21:00 - 22:00 GMT',
        },
        {
            instrument: {
                symbol: 'ZINCUSD',
                instrument: 'Zinc/USD',
            },
            contract_size: '100 ton',
            base_currency: 'XZN',
            minimum_size: 0.01,
            minimum_spread: 3.87,
            target_spread: 4.22,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -10.703,
            swap_short: 4.365,
            trading_hours: 'Mon - Fri 00:05 - 18:00 GMT',
        },
        {
            instrument: {
                symbol: 'POUNDBRENT',
                instrument: 'Brent crude oil',
            },
            contract_size: '1 barrel',
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.056,
            target_spread: 0.065,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -3.657,
            swap_short: -8.418,
            trading_hours: 'Sun 22:00 - 24:00\nMon - Fri 00:00 - 21:00 GMT',
        },
        {
            instrument: {
                symbol: 'USDBRENT',
                instrument: 'West Texas Intermediate',
            },
            contract_size: '1 barrel',
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.054,
            target_spread: 0.064,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: 1.785,
            swap_short: 5.355,
            trading_hours: 'Sun 22:00 - Fri 21:00\nDaily Break: 21:00 - 22:00 GMT',
        },
    ],
    eu_data: [
        {
            instrument: {
                symbol: 'ALUMINIUMUSD',
                instrument: 'Aluminium/USD',
            },
            contract_size: '100 ton',
            base_currency: 'XAL',
            minimum_size: 0.01,
            minimum_spread: 3.55,
            target_spread: 5.29,
            max_effective_leverage: 10,
            margin_requirement: 10,
            swap_long: -70.158,
            swap_short: 53.127,
            trading_hours: 'Mon - Fri 00:05 - 18:00 GMT',
        },
        {
            instrument: {
                symbol: 'POUNDBRENT',
                instrument: 'Brent crude oil',
            },
            contract_size: '1 barrel',
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.056,
            target_spread: 0.065,
            max_effective_leverage: 10,
            margin_requirement: 10,
            swap_long: -3.657,
            swap_short: -8.418,
            trading_hours: 'Sun 22:00 - 24:00\nMon Friday 00:00 - 21:00 GMT',
        },
        {
            instrument: {
                symbol: 'COPPERUSD',
                instrument: 'Copper/USD',
            },
            contract_size: '100 ton',
            base_currency: 'XCU',
            minimum_size: 0.01,
            minimum_spread: 6.25,
            target_spread: 7.7,
            max_effective_leverage: 10,
            margin_requirement: 10,
            swap_long: -58.762,
            swap_short: 37.944,
            trading_hours: 'Mon - Fri 00:05 - 18:00 GMT',
        },
        {
            instrument: {
                symbol: 'GOLDEUR',
                instrument: 'Gold/EUR',
            },
            contract_size: '100 oz',
            base_currency: 'XAU',
            minimum_size: 0.01,
            minimum_spread: 0.12,
            target_spread: 0.51,
            max_effective_leverage: 20,
            margin_requirement: 5,
            swap_long: -21.559,
            swap_short: 11.536,
            trading_hours: 'Mon - Fri 00:05 - 18:00 GMT',
        },
        {
            instrument: {
                symbol: 'GOLDUSD',
                instrument: 'Gold/USD',
            },
            contract_size: '100 oz',
            base_currency: 'XAU',
            minimum_size: 0.01,
            minimum_spread: 0.16,
            target_spread: 0.27,
            max_effective_leverage: 20,
            margin_requirement: 5,
            swap_long: -29.05,
            swap_short: 15.33,
            trading_hours: 'Sun 22:05 - Fri 20:45\nDaily Break: 21:00 - 22:00 GMT',
        },
        {
            instrument: {
                symbol: 'LEADUSD',
                instrument: 'Lead/USD',
            },
            contract_size: '100 ton',
            base_currency: 'XPB',
            minimum_size: 0.01,
            minimum_spread: 2.54,
            target_spread: 3.87,
            max_effective_leverage: 10,
            margin_requirement: 10,
            swap_long: -2.519,
            swap_short: -2.519,
            trading_hours: 'Sun 22:05 - Fri 20:45\nDaily Break: 21:00 - 22:00 GMT',
        },
        {
            instrument: {
                symbol: 'NICKELUSD',
                instrument: 'Nickel/USD',
            },
            contract_size: '100 ton',
            base_currency: 'XNI',
            minimum_size: 0.01,
            minimum_spread: 14.54,
            target_spread: 22.65,
            max_effective_leverage: 10,
            margin_requirement: 10,
            swap_long: -362.219,
            swap_short: 266.094,
            trading_hours: 'Sun 22:05 - Fri 20:45\nDaily Break: 21:00 - 22:00 GMT',
        },
        {
            instrument: {
                symbol: 'PALLADIUMUSD',
                instrument: 'Palladium/USD',
            },
            contract_size: '100 oz',
            base_currency: 'XPD',
            minimum_size: 0.01,
            minimum_spread: 1.8,
            target_spread: 7.47,
            max_effective_leverage: 10,
            margin_requirement: 10,
            swap_long: -27.038,
            swap_short: 15.273,
            trading_hours: 'Mon - Fri 00:05 - 18:00 GMT',
        },
        {
            instrument: {
                symbol: 'PLATINUMUSD',
                instrument: 'Platinum/USD',
            },
            contract_size: '100 oz',
            base_currency: 'XPT',
            minimum_size: 0.01,
            minimum_spread: 0.21,
            target_spread: 1.64,
            max_effective_leverage: 10,
            margin_requirement: 10,
            swap_long: -23.375,
            swap_short: 7.713,
            trading_hours: 'Sun 22:05 - Fri 20:45\nDaily Break: 21:00 - 22:00 GMT',
        },
        {
            instrument: {
                symbol: 'SILVEREUR',
                instrument: 'Silver/EUR',
            },
            contract_size: '5000 oz',
            base_currency: 'XAG',
            minimum_size: 0.01,
            minimum_spread: 0.01,
            target_spread: 0.015,
            max_effective_leverage: 10,
            margin_requirement: 10,
            swap_long: -2.39,
            swap_short: 1.492,
            trading_hours: 'Sun 22:05 - Fri 20:45\nDaily Break: 21:00 - 22:00 GMT',
        },
        {
            instrument: {
                symbol: 'SILVERUSD',
                instrument: 'Silver/USD',
            },
            contract_size: '5,000 oz',
            base_currency: 'XAG',
            minimum_size: 0.01,
            minimum_spread: 0.012,
            target_spread: 0.028,
            max_effective_leverage: 10,
            margin_requirement: 10,
            swap_long: -4.204,
            swap_short: 2.627,
            trading_hours: 'Sun 22:05 - Fri 20:45\nDaily Break: 21:00 - 22:00 GMT',
        },
        {
            instrument: {
                symbol: 'USDBRENT',
                instrument: 'West Texas Intermediate',
            },
            contract_size: '1 barrel',
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.054,
            target_spread: 0.064,
            max_effective_leverage: 10,
            margin_requirement: 10,
            swap_long: 1.785,
            swap_short: 5.355,
            trading_hours: 'Sun 22:05 - Fri 20:45\nDaily Break: 21:00 - 22:00 GMT',
        },
        {
            instrument: {
                symbol: 'ZINCUSD',
                instrument: 'Zinc/USD',
            },
            contract_size: '100 ton',
            base_currency: 'XZN',
            minimum_size: 0.01,
            minimum_spread: 3.87,
            target_spread: 4.22,
            max_effective_leverage: 10,
            margin_requirement: 10,
            swap_long: -10.703,
            swap_short: 4.365,
            trading_hours: 'Mon - Fri 00:05 - 18:00 GMT',
        },
    ],
}

export default commodities_specification
