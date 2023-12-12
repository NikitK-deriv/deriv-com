import React, { useEffect, useState } from 'react'
import { WizardStepProps } from '../_types'
import { StyledHeader } from '../utils/_affiliate-header'
import AccountCard, { AccountCardProps, MainWrapper } from '../utils/_account-card'
import { Localize } from 'components/localization'
import { useIsRtl } from 'components/hooks/use-isrtl'
import Revenue from 'images/svg/signup-affiliates/revenue.svg'
import Turnover from 'images/svg/signup-affiliates/turnover.svg'
import CPA from 'images/svg/signup-affiliates/cpa.svg'

const plans: AccountCardProps[] = [
    {
        value: 2,
        icon: Revenue,
        title: '_t_Revenue share_t_',
        description:
            '_t_Earn based on the monthly net revenue generated by your client. <0>Learn more</>_t_',
    },
    {
        value: 4,
        icon: Turnover,
        title: '_t_Turnover_t_',
        description:
            "_t_Earn based on each contract's payout probability or client's trade. <0>Learn more</>_t_",
    },
    {
        value: 6,
        icon: CPA,
        title: '_t_CPA (EU only)_t_',
        description: '_t_Earn based on each successful referral. <0>Learn more</>_t_',
        note: '_t_<0>Note:</0> This plan is available exclusively for EU-based clients only._t_',
    },
]
const AccountPlan = ({
    updateData,
    affiliate_account,
    onValidate,
}: WizardStepProps<'account_plan'>) => {
    const [account_plan, setAccountPlan] = useState(affiliate_account.account_plan)
    const is_rtl = useIsRtl()

    useEffect(() => {
        onValidate(!!account_plan)
    }, [onValidate, account_plan])

    useEffect(() => {
        updateData(account_plan)
    }, [account_plan])

    return (
        <MainWrapper>
            <StyledHeader
                align="center"
                type="paragraph-1"
                pb="8px"
                weight="normal"
                is_rtl={is_rtl}
            >
                <Localize translate_text="_t_Choose which plan you would like to subscribe._t_" />
            </StyledHeader>
            {plans.map(({ value, icon, title, description, note }) => {
                return (
                    <AccountCard
                        key={`account-plan-${value}`}
                        icon={icon}
                        title={title}
                        description={description}
                        selected={account_plan == value}
                        note={note}
                        onClick={() => setAccountPlan(value)}
                    />
                )
            })}
        </MainWrapper>
    )
}
export default AccountPlan
