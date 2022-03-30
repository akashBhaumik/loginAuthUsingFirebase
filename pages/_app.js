import '../styles/globals.css'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../components/Navbar'
import { AuthContextProvider } from '../context/authContext'
import { useRouter } from 'next/router'
import ProtectedRoute from '../components/ProtectedRoute'
import ProtectedAuth from '../components/ProtectedAuth'

const noAuthRequired = ['/', '/auth', '/contact']
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return <>
    <AuthContextProvider>
      <Navbar />
      {/* <Component {...pageProps} /> */}
      {noAuthRequired.includes(router.pathname) ?
        router.pathname === '/auth' ?
          <ProtectedAuth>
            <Component {...pageProps} />
          </ProtectedAuth> :
          (
            <Component {...pageProps} />
          ) : (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        )}
    </AuthContextProvider>
  </>
}

export default MyApp
