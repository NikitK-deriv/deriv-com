import React from 'react'
import { DerivEzCardTypes } from '../types'
import AnyTime from 'images/svg/deriv-ez/twenty-four-seven.svg'
import FavouriteAssets from 'images/svg/deriv-ez/favourite-assets.svg'
import EasyStart from 'images/svg/deriv-ez/easy-to-start.svg'
import Image from 'features/components/atoms/image'

export const card_data: DerivEzCardTypes[] = [
    {
        title: '_t_Easy to start_t_',
        subtitle:
            '_t_Start trading CFDs in two easy steps — just add an account and start trading. No need to remember another login ID and password._t_',
        icon: <Image src={EasyStart} height={48} alt={'_t_Easy start_t_'} />,
    },
    {
        title: '_t_24/7 trading_t_',
        subtitle:
            '_t_Trade CFDs on cryptocurrencies and derived indices anytime, including weekends and holidays._t_',
        icon: <Image src={AnyTime} height={48} alt={'_t_24/7 chat_t_'} />,
    },
    {
        title: '_t_All your favourite assets, one platform_t_',
        subtitle: '_t_Access over 190 assets in multiple markets on desktop and mobile._t_',
        icon: <Image src={FavouriteAssets} height={48} alt={'_t_Favourite assets_t_'} />,
    },
]
