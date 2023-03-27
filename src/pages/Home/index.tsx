// components
import { Introduction, Store } from './components'

// styles
import * as S from './styles'

const Home: React.FC = () => {
  return (
    <S.Container>
      <Introduction />
      <Store />
    </S.Container>
  )
}

export default Home
