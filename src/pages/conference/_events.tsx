import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import Dia1 from 'images/common/conference/dia1.png'
import Dia2 from 'images/common/conference/dia2.png'
import Dia3 from 'images/common/conference/dia3.png'
import device from 'themes/device'

const EventsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0 120px 80px 120px;

    @media ${device.tabletL} {
        align-items: center;
        padding: 0 0 40px;
    }
`
const Card = styled(Flex)`
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 384px;
    height: 434px;
    margin: 0 12px;
`
const EventsHeader = styled(Header)`
    text-align: center;
    white-space: nowrap;
    color: var(--color-black-3);
`

type TEvents = {
    day: string
    icon: string
    title: string
    subtitle: string
}

const Events = () => {
    const events: TEvents[] = [
        {
            day: 'Dia 1',
            icon: Dia1,
            title: '30 de Novembro - Virtual e presencial',
            subtitle: 'Introdução e palestras',
        },
        {
            day: 'Dia 2',
            icon: Dia2,
            title: '1 de Dezembro - Virtual e presencial',
            subtitle: 'Palestras',
        },
        {
            day: 'Dia 3',
            icon: Dia3,
            title: '2 de Dezembro - Somente presencial',
            subtitle: 'Workshops e reuniões individuais',
        },
    ]

    return (
        <EventsWrapper>
            {events.map((event) => {
                return (
                    <Card key={event.day}>
                        <EventsHeader as="div" type="heading-3" pb="32px">
                            {event.day}
                        </EventsHeader>
                        <img src={event.icon} alt="day" width={384} height={256} />
                        <EventsHeader as="div" weight="normal" type="subtitle-2" pt="24px" pb="8px">
                            {event.title}
                        </EventsHeader>
                        <EventsHeader as="div" weight="normal" type="subtitle-1">
                            {event.subtitle}
                        </EventsHeader>
                    </Card>
                )
            })}
        </EventsWrapper>
    )
}

export default Events
