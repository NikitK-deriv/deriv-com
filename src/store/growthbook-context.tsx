import React, { useEffect, useRef } from 'react'
import { GrowthBook, GrowthBookProvider } from '@growthbook/growthbook-react'
import { getClientInformation, getDomain, getLanguage } from 'common/utility'
import { growthbook_client_key } from 'common/constants'

const DerivGrowthBookProvider = ({ children }: { children: React.ReactNode }) => {
    const growthbook = useRef<GrowthBook>()
    useEffect(() => {
        const anonymousId = window.rudderanalytics.getAnonymousId()
        growthbook.current = new GrowthBook({
            apiHost: 'https://cdn.growthbook.io',
            clientKey: growthbook_client_key,
            enableDevMode: true,
            attributes: {
                id: anonymousId,
            },
            trackingCallback: (experiment, result) => {
                window.rudderanalytics.track('experiment_viewed', {
                    experimentId: experiment.key,
                    variationId: result.variationId,
                })
            },
        })
        growthbook.current.loadFeatures({
            autoRefresh: true,
        })

        const language = getLanguage()
        const domain = getDomain()
        const client_information = getClientInformation(domain)

        if (client_information) {
            window.rudderanalytics.identifyEvent(client_information.loginid, {
                language,
            })
        }
    }, [])

    return <GrowthBookProvider growthbook={growthbook.current}>{children}</GrowthBookProvider>
}

export default DerivGrowthBookProvider
