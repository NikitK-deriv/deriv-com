import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import { getLanguage } from 'common/utility'
import { onRudderStack } from 'features/utils/analytic/rudder-stack'
import SignUpSuccessContainer from 'features/pages/signup-success'
import { WithIntl } from 'components/localization'

const SignupSuccess = () => {
    const [registeredEmail, setRegisteredEmail] = useState('')
    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const email = params.get('email')
        const locale = getLanguage()

        setRegisteredEmail(email?.replaceAll(' ', '+'))
        if (!email) {
            if (locale !== 'en') navigate(`/${locale}/`, { replace: true })
            else {
                navigate('/', { replace: true })
            }
        } else {
            onRudderStack()
        }
    }, [])

    return <SignUpSuccessContainer email={registeredEmail} />
}

export default WithIntl()(SignupSuccess)
