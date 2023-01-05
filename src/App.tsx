
import Router from "./Router"
import themes from "./themes"
import GlobalStyle from "./themes/GlobalStyle"

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle theme={themes} />
      <Router />
    </>
  )
}

export default App
