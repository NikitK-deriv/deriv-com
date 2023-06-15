import React from 'react'
import PageNotFound from '../404'
import DerivEZ from 'features/pages/deriv-ez'
import useRegion from 'components/hooks/use-region'

const DerivEZPage = () => {
    const { is_row } = useRegion()
    if (is_row) {
        return <DerivEZ />
    }
    return <PageNotFound />
}

export default DerivEZPage
