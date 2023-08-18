import { isBrowser, isMobile } from 'react-device-detect'

export const onRudderStack = () => {
    const form_source = isBrowser && (document.referrer || window.location.host)
    const form_name = isMobile
        ? 'virtual_signup_web_mobile_default'
        : 'virtual_signup_web_desktgasop_default'

    window.rudderanalytics.track('ce_virtual_signup_form', {
        action: 'open',
        form_source,
        form_name,
    })

    // to write something, probably in rudderstack dashboard
    // window.rudderanalytics.load(WRITE_KEY, DATA_PLANE_URL, {
    //     onLoaded: function(window.rudderanalytics) {
    //         console.log("All set!");
    //     }
    // });

    console.log(`
        'ce_virtual_signup_form', {
            action: 'open',
            form_source: ${form_source},
            form_name: ${form_name},
        }
        `)
}
