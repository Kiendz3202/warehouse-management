import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  if (router.pathname === '/login') {
    return <Component {...pageProps} />
  } else {
    return (
      <Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
  }
}

export default MyApp
