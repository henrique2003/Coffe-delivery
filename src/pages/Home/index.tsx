import { IoCart } from 'react-icons/io5'
import { GiCardboardBoxClosed } from 'react-icons/gi'
import { TfiTimer } from 'react-icons/tfi'
import { CgCoffee } from 'react-icons/cg'

import { Wrapper } from '../../theme/components'
import * as S from './styles'
import { coffe_intro } from '../../assets'
import Itens from './components/Itens'
import theme from '../../theme'

const Home: React.FC = () => {
  return (
    <S.Container>
      <S.BackgroundGradient>
        <Wrapper>
          <S.Flex>
            <S.Content>
              <S.Title>Encontre o café perfeito para qualquer hora do dia</S.Title>
              <S.Subtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</S.Subtitle>
              <S.Grid>
                <Itens
                  text='Compra simples e segura'
                  bgColor={theme.COLORS.YELLOW_DARK}
                >
                  <IoCart />
                </Itens>
                <Itens
                  text='Embalagem mantém o café intacto'
                  bgColor={theme.COLORS.BASE_TEXT}
                >
                  <GiCardboardBoxClosed />
                </Itens>
                <Itens
                  text='Entrega rápida e rastreada'
                  bgColor={theme.COLORS.YELLOW}
                >
                  <TfiTimer />
                </Itens>
                <Itens
                  text='O café chega fresquinho até você'
                  bgColor={theme.COLORS.PURPLE}
                >
                  <CgCoffee />
                </Itens>
              </S.Grid>
            </S.Content>
            <S.CoffeImage>
              <img src={coffe_intro} alt="" />
            </S.CoffeImage>
          </S.Flex>
        </Wrapper>
      </S.BackgroundGradient>
    </S.Container>
  )
}

export default Home
