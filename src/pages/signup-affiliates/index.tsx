import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Analytics } from '@deriv/analytics'
import trackEvent from './utils/_tracking'
import { AffiliateAccountTypes, SignUpStatusTypes, SubmitTypes } from './_types'
import { AffiliateSignupForm, AffiliateSignupStatus, Wizard } from './components'
import { isBrowser } from 'common/utility'
import { WithIntl } from 'components/localization'
import { Container, SEO, TMetaAttributes } from 'components/containers'
import Layout from 'components/layout/layout'
import useWS from 'components/hooks/useWS'
import AtomicContainer from 'features/components/atoms/container'
import { TGatsbyHead } from 'features/types'
import device from 'themes/device'
import Map from 'images/common/affiliate/map.png'

const meta_attributes: TMetaAttributes = {
    og_title: '_t_Partner Signup Page | Deriv_t_',
    og_description:
        '_t_Partner with us as an affiliate. Earn commission from the total net revenue of your referred clients’ trades on Deriv Trader, Deriv Bot, and SmartTrader._t_',
}

export const customSlugify = (text: string): string => {
    const charMap: { [key: string]: string } = {
        ə: 'e',
        // Add other special characters and their mappings here if needed
    }

    return text
        .toString()
        .split('')
        .map((char) => charMap[char] || char)
        .join('')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .replace(/'/g, '')
        .replace(/--+/g, '-')
}
const Submit = ({ is_online, affiliate_account, setSignupStatus, affiliateSend }: SubmitTypes) => {
    if (!is_online) {
        setSignupStatus('lost connection')
        Analytics?.trackEvent('ce_partner_account_signup_form', {
            action: 'partners_signup_error',
            partner_signup_error_message: 'lost connection',
            form_name: 'ce_partner_account_signup_form',
        })
    } else
        affiliateSend({
            email: affiliate_account.email,
            type_of_account: affiliate_account.account_type,
            commission_plan: affiliate_account.account_plan,
            country: affiliate_account.account_address.country.symbol,
            address_city: affiliate_account.account_address.city,
            address_postcode: affiliate_account.account_address.postal_code,
            address_state: customSlugify(affiliate_account.account_address.state.name),
            address_street: affiliate_account.account_address.street,
            first_name: affiliate_account.account_details.first_name,
            last_name: affiliate_account.account_details.last_name,
            date_of_birth: affiliate_account.account_details.date_birth?.toISOString().slice(0, 10),
            over_18_declaration: 1,
            website_url: affiliate_account.account_details?.website_url.includes('www.')
                ? affiliate_account.account_details?.website_url
                : `www.${affiliate_account.account_details?.website_url}`,
            user_name: affiliate_account.account_details.username,
            password: affiliate_account.account_details.password,
            phone: affiliate_account.account_details.phone,
            phone_code: Number(affiliate_account.account_details.phone.substring(1, 4)),
            whatsapp_number: affiliate_account.account_details.phone,
            whatsapp_number_phoneCode: Number(
                affiliate_account.account_details.phone.substring(1, 4),
            ),
            non_pep_declaration: affiliate_account.terms_of_use.non_pep_declaration_accepted && 1,
            tnc_accepted: affiliate_account.terms_of_use.tnc_accepted && 1,
            tnc_affiliate_accepted: affiliate_account.terms_of_use.tnc_affiliate_accepted && 1,
            ...(affiliate_account.account_details?.company_name !== '' && {
                company_name: affiliate_account.account_details?.company_name,
            }),
            ...(affiliate_account.account_details?.company_registration_number !== '' && {
                company_registration_number: Number(
                    affiliate_account.account_details?.company_registration_number,
                ),
            }),
        })
}

const ParentWrapper = styled.div`
    block-size: 100vh;
    background-image: url(${Map});
    background-repeat: no-repeat;
    background-position: bottom;
`
const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    padding-top: 120px;
    inline-size: 100%;

    @media ${device.tabletL} {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        padding-top: unset;
    }
`

const AffiliateSignup = () => {
    const [show_wizard, setShowWizard] = useState<boolean>(false)
    const [is_online, setIsOnline] = useState(isBrowser() && navigator.onLine)
    const [signup_status, setSignupStatus] = useState<SignUpStatusTypes>('')

    const [affiliate_account, setAffiliateAccount] = useState<AffiliateAccountTypes>({
        email: '',
        account_type: 0,
        account_plan: 0,
        account_address: {
            country: {},
            state: {},
            city: '',
            street: '',
            postal_code: '',
        },
        account_details: {
            first_name: '',
            last_name: '',
            date_birth: null,
            phone: '',
            website_url: '',
            second_website_url: '',
            company_name: '',
            company_registration_number: '',
            username: '',
            password: '',
        },
        terms_of_use: {
            non_pep_declaration_accepted: false,
            tnc_accepted: false,
            tnc_affiliate_accepted: false,
            promote_eu: false,
        },
    })

    console.log(affiliate_account)

    const {
        data: affiliate_api_data,
        error: affiliate_api_error,
        send: affiliateSend,
    } = useWS('affiliate_register_person')

    useEffect(() => {
        trackEvent({ action: 'open' })
        return () => trackEvent({ action: 'close' })
    }, [])

    useEffect(() => {
        const handleStatusChange = () => {
            if (!navigator.onLine) trackEvent({ action: 'other_error' })
            setIsOnline(navigator.onLine)
        }
        window.addEventListener('online', handleStatusChange)
        window.addEventListener('offline', handleStatusChange)
        return () => {
            window.removeEventListener('online', handleStatusChange)
            window.removeEventListener('offline', handleStatusChange)
        }
    }, [is_online])

    useEffect(() => {
        const partner_signup_error_message = affiliate_api_error?.error.message

        if (partner_signup_error_message == 'Username not available') {
            trackEvent({ action: 'partners_signup_error', partner_signup_error_message })
            setSignupStatus(partner_signup_error_message)
        } else if (
            partner_signup_error_message == 'Your website is not a valid entry' ||
            partner_signup_error_message == "String does not match '^[0-9A-Za-z.-]{5,250}$'" ||
            partner_signup_error_message == 'Input validation failed: website_url'
        ) {
            trackEvent({ action: 'partners_signup_error', partner_signup_error_message })
            setSignupStatus('Your website is not a valid entry')
        } else if (partner_signup_error_message)
            trackEvent({ action: 'other_error', partner_signup_error_message })

        if (affiliate_api_data) {
            trackEvent({
                action: 'success_popup_opened',
                user_choice: JSON.stringify(affiliate_api_error?.echo_req),
            })
            setSignupStatus('success')
        }
    }, [affiliate_api_data, affiliate_api_error, affiliateSend])

    useEffect(() => {
        setAffiliateAccount({
            ...affiliate_account,
            account_details: {
                ...affiliate_account.account_details,
                phone: '+' + affiliate_account.account_address.country?.prefix,
            },
        })
    }, [affiliate_account.account_address.country])

    const onSubmit = () => {
        trackEvent({ action: 'try_submit' })
        setSignupStatus('loading')
        Submit({ is_online, affiliate_account, setSignupStatus, affiliateSend })
    }

    return (
        <Layout type="affiliates" show_footer={false}>
            <ParentWrapper>
                <AtomicContainer.Fluid dir="row">
                    <StyledContainer>
                        {show_wizard ? (
                            <Wizard
                                show_wizard={show_wizard}
                                setSignupStatus={setSignupStatus}
                                affiliate_account={affiliate_account}
                                setAffiliateAccount={setAffiliateAccount}
                                onSubmit={onSubmit}
                            />
                        ) : (
                            <AffiliateSignupForm
                                affiliate_account={affiliate_account}
                                setAffiliateAccount={setAffiliateAccount}
                                setShowWizard={setShowWizard}
                            />
                        )}
                        <AffiliateSignupStatus
                            signup_status={signup_status}
                            setSignupStatus={setSignupStatus}
                            affiliate_account={affiliate_account}
                            setAffiliateAccount={setAffiliateAccount}
                            onSubmit={onSubmit}
                        />
                    </StyledContainer>
                </AtomicContainer.Fluid>
            </ParentWrapper>
        </Layout>
    )
}

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Be our partner | Partnership programmes | Deriv_t_"
        description="_t_Explore Deriv’s partnership programmes and team up with a trusted online trading broker to earn extra income._t_"
        meta_attributes={meta_attributes}
        pageContext={pageContext}
    />
)
export default WithIntl()(AffiliateSignup)
