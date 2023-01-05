
import { ThemeProvider } from 'styled-components'

import Router from './Router'
import theme from './theme'
import GlobalStyle from './theme/GlobalStyle'

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}

export default App
