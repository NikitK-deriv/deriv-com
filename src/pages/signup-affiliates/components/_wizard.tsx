import React, { useCallback, useEffect, useState } from 'react'
import {
    AccountAddress,
    AccountDetails,
    AccountPlan,
    AccountTerms,
    AccountType,
} from '../_lazy-loading'
import { AffiliateAccountTypes, WizardProps } from '../_types'
import trackEvent from '../utils/_tracking'
import WizardComponent from './wizard-component'
import { useResidenceList } from 'features/hooks/use-residence-list'

const Wizard = ({
    show_wizard,
    setSignupStatus,
    affiliate_account,
    setAffiliateAccount,
    onSubmit,
}: WizardProps) => {
    const [step, setStep] = useState(1)
    const [next_btn_enabled, setNextBtnEnabled] = useState<boolean>(false)
    const [residence_list] = useResidenceList({
        restricted_countries: ['Iran', 'North Korea', 'Myanmar (Burma)', 'Syria', 'Cuba'],
    })

    const is_individual = affiliate_account?.account_type == 1

    useEffect(() => {
        show_wizard && trackEvent({ action: 'open_wizard' })
        return () => trackEvent({ action: 'close_wizard' })
    }, [show_wizard])

    const updateAffiliateValues = useCallback(
        <T extends keyof AffiliateAccountTypes>(value: AffiliateAccountTypes[T], type: T): void => {
            setAffiliateAccount((prev) => ({
                ...prev,
                [type]: value,
            }))
        },
        [step],
    )

    return (
        <WizardComponent
            step={step}
            setStep={setStep}
            show_wizard={show_wizard}
            setSignupStatus={setSignupStatus}
            next_btn_enabled={next_btn_enabled}
            setNextBtnEnabled={setNextBtnEnabled}
            onSubmit={onSubmit}
        >
            <AccountType
                affiliate_account={affiliate_account}
                updateData={(value: AffiliateAccountTypes['account_type']): void => {
                    updateAffiliateValues<'account_type'>(value, 'account_type')
                }}
                onValidate={(is_valid: boolean): void => {
                    setNextBtnEnabled(is_valid)
                }}
            />
            <AccountPlan
                affiliate_account={affiliate_account}
                updateData={(value: AffiliateAccountTypes['account_plan']): void => {
                    updateAffiliateValues<'account_plan'>(value, 'account_plan')
                }}
                onValidate={(is_valid: boolean): void => {
                    setNextBtnEnabled(is_valid)
                }}
            />
            <AccountAddress
                affiliate_account={affiliate_account}
                is_individual={is_individual}
                updateData={(value: AffiliateAccountTypes['account_address']): void => {
                    updateAffiliateValues<'account_address'>(value, 'account_address')
                }}
                onValidate={(is_valid: boolean): void => {
                    setNextBtnEnabled(is_valid)
                }}
                residence_list={residence_list}
            />
            <AccountDetails
                affiliate_account={affiliate_account}
                is_individual={is_individual}
                updateData={(value: AffiliateAccountTypes['account_details']): void => {
                    updateAffiliateValues<'account_details'>(value, 'account_details')
                }}
                onValidate={(is_valid: boolean): void => {
                    setNextBtnEnabled(is_valid)
                }}
            />
            <AccountTerms
                affiliate_account={affiliate_account}
                updateData={(value: AffiliateAccountTypes['terms_of_use']): void => {
                    updateAffiliateValues<'terms_of_use'>(value, 'terms_of_use')
                }}
                onValidate={(is_valid: boolean): void => {
                    setNextBtnEnabled(is_valid)
                }}
            />
        </WizardComponent>
    )
}

export default Wizard
