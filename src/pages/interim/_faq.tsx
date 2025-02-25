import React from 'react'
import styled from 'styled-components'
import { NeedSignUp, BinaryRemoved, DerivSecure, OtherChanges } from './_faq-data'
import { SectionContainer, Container } from 'components/containers'
import { Localize } from 'components/localization'
import { Header, Accordion, AccordionItem } from 'components/elements'
import DotPattern from 'images/svg/partners/dot-pattern.svg'
import device from 'themes/device'

const AccordionWrapper = styled.div`
    max-width: 79.2rem;
    margin: 0 auto;
    position: relative;
    z-index: 2;

    @media ${device.tablet} {
        margin: 0 16px;
    }
`
const RelativeContainer = styled(SectionContainer)`
    position: relative;
    overflow: hidden;
`
const TopLeftDot = styled.img`
    position: absolute;
    top: 8rem;
    left: 0;
`
const BottomRightDot = styled.img`
    position: absolute;
    bottom: 16px;
    right: 0;
`
const parent_style = {
    marginBottom: '2.4rem',
}
const item_style = {
    padding: '2.4rem 4rem',
    background: 'var(--color-grey-4)',
}
const header_style = {
    padding: '1.6rem 4rem',
    border: 'none',
}

const Faq = () => {
    return (
        <RelativeContainer>
            <Container>
                <Header as="h3" type="section-title" size="3.6rem" mb="4rem" align="center">
                    <Localize translate_text="_t_Frequently asked questions_t_" />
                </Header>
            </Container>

            <AccordionWrapper id="dmt5-faq-list">
                <Accordion has_single_state>
                    <AccordionItem
                        header="_t_Do I need to sign up for a Deriv.com account?_t_"
                        parent_style={parent_style}
                        style={item_style}
                        header_style={header_style}
                        plus
                        class_name="sign-up"
                    >
                        <NeedSignUp />
                    </AccordionItem>
                    <AccordionItem
                        header="_t_Will Binary.com be removed?_t_"
                        parent_style={parent_style}
                        style={item_style}
                        header_style={header_style}
                        plus
                        class_name="binary-remove"
                    >
                        <BinaryRemoved />
                    </AccordionItem>
                    <AccordionItem
                        header="_t_Is Deriv.com secure?_t_"
                        parent_style={parent_style}
                        style={item_style}
                        header_style={header_style}
                        plus
                        class_name="deriv-secure"
                    >
                        <DerivSecure />
                    </AccordionItem>
                    <AccordionItem
                        header="_t_What other changes will I be seeing?_t_"
                        parent_style={parent_style}
                        style={item_style}
                        header_style={header_style}
                        plus
                        class_name="visible-changes"
                    >
                        <OtherChanges />
                    </AccordionItem>
                </Accordion>
            </AccordionWrapper>
            <TopLeftDot src={DotPattern} />
            <BottomRightDot src={DotPattern} />
        </RelativeContainer>
    )
}

export default Faq
