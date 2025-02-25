import React from 'react'
import { WithIntl } from 'components/localization'
import DigitDigitalOptionsPage from 'features/pages/options/digital/digits'
import ProtectedRoute from 'features/components/molecules/protected-route'
import useRegion from 'components/hooks/use-region'

const DigitDigitalOptions = () => {
    const { is_row, is_region_loading } = useRegion()
    return (
        <ProtectedRoute
            is_page_visible={is_row}
            component={<DigitDigitalOptionsPage />}
            is_loading={is_region_loading}
        />
    )
}

export default WithIntl()(DigitDigitalOptions)
