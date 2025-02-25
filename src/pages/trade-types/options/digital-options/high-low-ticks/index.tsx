import React from 'react'
import HighLowDigitalOptionsPage from 'features/pages/options/digital/high-low'
import { WithIntl } from 'components/localization'
import ProtectedRoute from 'features/components/molecules/protected-route'
import useRegion from 'components/hooks/use-region'

const HighLowDigitalOptions = () => {
    const { is_row, is_region_loading } = useRegion()
    return (
        <ProtectedRoute
            is_page_visible={is_row}
            component={<HighLowDigitalOptionsPage />}
            is_loading={is_region_loading}
        />
    )
}

export default WithIntl()(HighLowDigitalOptions)
