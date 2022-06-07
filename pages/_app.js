import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/custom.css'
import { Provider } from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Provider store={store}>
    <Head>
      <meta name='viewport' content="width=device-width, initial-scale=1" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>
    </>
  )
}

export default MyApp
