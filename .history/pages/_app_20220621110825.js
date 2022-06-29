import '../styles/globals.css'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout ?? defaultPageLayout

  return (
    // <Layout>
    getLayout(<Component {...pageProps} />)
    // </Layout>
  )
}

export default MyApp
