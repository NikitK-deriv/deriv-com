import React from 'react'
import Loadable from '@loadable/component'
import Everything from '../_everything'
import Hero from './_hero'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const FAQ = Loadable(() => import('../_faq'))
const LoveTrading = Loadable(() => import('./_love-trading'))

const Interim = () => {
    return (
        <Layout type="interim">
            <SEO title="_t_Interim | DMT5_t_" no_index />
            <Hero />
            <Everything />
            <FAQ />
            <LoveTrading />
        </Layout>
    )
}

export default WithIntl()(Interim)
