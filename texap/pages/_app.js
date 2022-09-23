import '@/public/css/bootstrap.min.css'
import '@/public/css/fontawesome.min.css'
import '@/public/css/remixicon.css'
import '@/public/css/animate.min.css'
import '../node_modules/swiper/swiper.min.css'
import '../node_modules/swiper/components/effect-cube/effect-cube.min.css'
import '../node_modules/swiper/components/effect-coverflow/effect-coverflow.min.css'
import '../node_modules/swiper/components/pagination/pagination.min.css'
import '../node_modules/swiper/components/navigation/navigation.min.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import 'react-image-lightbox/style.css'
import 'react-tabs/style/react-tabs.css'
// Global CSS
import '@/public/css/styles.css'

import Layout from '@/components/_App/Layout';

const MyApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp;