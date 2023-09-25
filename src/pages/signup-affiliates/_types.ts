import { Dispatch, ReactElement, SetStateAction } from 'react'

type CountryType = { name?: string; display_name?: string; prefix?: string; symbol?: string }

type AffiliateAccountTypes = {
    email: string
    account: { type: number; plan: number }
    address_details: {
        country: CountryType
        state: string
        city: string
        street: string
        postal_code: string
    }
    phone_number: { phone: string; prefix: string }
    personal_details: {
        username: string
        first_name: string
        last_name: string
        date_birth: string
        website_url: string
        social_media_url: string
        password: string
        company_name: string
        company_registration_number: string
        currency: string
    }
    terms_of_use: {
        non_pep_declaration: boolean
        tnc_accepted: boolean
        general_terms: boolean
        is_eu_checked: boolean
        is_partner_checked: boolean
    }
}
type AffiliateSendTypes = {
    address_city: string
    address_postcode: string
    address_state: string
    address_street: string
    commission_plan: number
    country: string
    date_of_birth: string
    email: string
    first_name: string
    last_name: string
    non_pep_declaration: number
    over_18_declaration: number
    phone: string
    phone_code: number
    tnc_accepted: number
    tnc_affiliate_accepted: number
    type_of_account: number
    user_name: string
    website_url: string
    whatsapp_number: string
    whatsapp_number_phoneCode: number
}

type setAffiliateAccountTypes = Dispatch<SetStateAction<AffiliateAccountTypes>>

type AffiliateAccountProps = {
    affiliate_account?: AffiliateAccountTypes
    setAffiliateAccount?: setAffiliateAccountTypes
    onSubmit?: () => void
}

export type SignUpStatusTypes =
    | 'Username not available'
    | 'lost connection'
    | 'success'
    | 'Your website is not a valid entry'
    | ''
export type setSignUpStatusTypes = Dispatch<SetStateAction<SignUpStatusTypes>>

export type SignUpStatusProps = {
    signup_status: SignUpStatusTypes
    setSignupStatus: setSignUpStatusTypes
} & AffiliateAccountProps

type SubmitTypes = {
    is_online: boolean
    affiliate_account: AffiliateAccountTypes

    setSignupStatus: setSignUpStatusTypes
    // once our API register this call we can remove type below
    affiliateSend: (data?: AffiliateSendTypes) => Promise<void>
}

type SetShowWizardType = Dispatch<SetStateAction<boolean>>

type WizardProps = {
    show_wizard: boolean
    setShowWizard: SetShowWizardType
    onAnalyticEvent?: () => void
} & AffiliateAccountProps

type SignUpFormProps = {
    setShowWizard: SetShowWizardType
} & AffiliateAccountProps

type WizardComponentTypes = {
    children?: ReactElement[]
    next_btn_enabled: boolean
    setNextBtnEnabled: Dispatch<SetStateAction<boolean>>
    step: number
    setStep: Dispatch<SetStateAction<number>>
    max_step?: number
} & Pick<WizardProps, 'onSubmit'>

type WizardComponentsProps = WizardComponentTypes & WizardProps

type AffiliateData = keyof AffiliateAccountTypes

type WizardStepProps = {
    affiliate_data: AffiliateAccountTypes[AffiliateData]
    updateData: (value: AffiliateAccountTypes[AffiliateData]) => void
    onValidate: (value: boolean) => void
    residence_list?: CountryType[]
    is_individual?: boolean
}

export type {
    AffiliateAccountTypes,
    setAffiliateAccountTypes,
    WizardStepProps,
    WizardComponentsProps,
    WizardComponentTypes,
    WizardProps,
    SignUpFormProps,
    SubmitTypes,
}
