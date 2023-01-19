
import { ThemeProvider } from 'styled-components'
import { CartProvider } from './context/cart'
import { ToastContainer } from 'react-toastify'

import Router from './Router'
import theme from './theme'
import GlobalStyle from './theme/GlobalStyle'

import 'react-toastify/dist/ReactToastify.css'

function App(): JSX.Element {
  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastContainer />
        <Router />
      </ThemeProvider>
    </CartProvider>
  )
}

export default App
