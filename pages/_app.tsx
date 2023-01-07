import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { AuthContextProvider } from '../context/AuthContext'
import { useRouter } from 'next/router'
import ProtectedRoute from '../components/ProtectedRoute'
import ProtectedRoute2 from '../components/ProtectedRoute2'

const noAuthRequired = ['/', '/login', '/signup']

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <AuthContextProvider>
   
      {noAuthRequired.includes(router.pathname) ? (
        <ProtectedRoute2>
          <Component {...pageProps} />
        </ProtectedRoute2>
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  )
}

export default MyApp