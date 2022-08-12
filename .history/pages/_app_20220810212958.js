import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import store from '../store/store'

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  if (router.pathname === '/login' || router.pathname === '/signup' || router.pathname === '/serial') {
    return <Component {...pageProps} />
  } else {
    if (localStorage.getItem('token')) {
      return (
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      )
    } else {
      router.push('/login')
      return;
    }
  }
}

export default MyApp
