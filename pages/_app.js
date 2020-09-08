import '../stylesheet/style.scss'
import Layout from '../components/layout'
import Footer from '../components/footer'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Layout />
    <main><Component {...pageProps} /></main>
    <Footer />
    </>
  )
}