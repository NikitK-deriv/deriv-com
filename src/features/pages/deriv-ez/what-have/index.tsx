import React from 'react'
import { what_have_text, what_have_wrapper } from '../deriv-ez.module.scss'
import { content_data } from './data'
import FlexBox from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const WhatIsDerivEZ = () => {
    return (
        <FlexBox.Box
            container={'fluid'}
            direction={'col'}
            padding_inline={'8x'}
            pt={'20x'}
            md={{ padding_inline: '0x', padding_block: '40x' }}
        >
            {content_data.map((content, index) => {
                return (
                    <FlexBox.Box
                        className={what_have_wrapper}
                        key={content.title}
                        direction={'col'}
                        margin_block={'10x'}
                        justify={'between'}
                        align={'center'}
                        md={{
                            direction: index % 2 == 0 ? 'row' : 'row-reverse',
                        }}
                    >
                        <FlexBox.Box
                            className={what_have_text}
                            direction={'col'}
                            justify={'center'}
                        >
                            <Typography.Heading mb={'6x'} align="left" textcolor="primary">
                                <Localize translate_text={content.title} />
                            </Typography.Heading>
                            <Typography.Paragraph align={'left'} mb={'12x'} md={{ mb: '0x' }}>
                                <Localize translate_text={content.subtitle} />
                            </Typography.Paragraph>
                        </FlexBox.Box>
                        <FlexBox.Item>{content.image}</FlexBox.Item>
                    </FlexBox.Box>
                )
            })}
        </FlexBox.Box>
    )
}
export default WhatIsDerivEZ
