import { useState, useEffect, useContext } from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { GiCardboardBoxClosed } from 'react-icons/gi'
import { TfiTimer } from 'react-icons/tfi'
import { CgCoffee } from 'react-icons/cg'

import { Wrapper } from '../../theme/components'
import * as S from './styles'
import { coffe_intro } from '../../assets'
import theme from '../../theme'
import { Itens, Category } from './components'
import Coffe from '../../components/Cards/Coffe'
import coffes_data from '../../mocks/coffes'
import categorys from '../../mocks/categorys'
import { ICoffe } from '../../context/cart/types'
import { CartContext } from '../../context/cart/index'

const Home: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState<string[]>([])
  const [coffesData, setCoffesData] = useState<ICoffe[]>([])

  const { cart } = useContext(CartContext)

  useEffect(() => {
    const setedCart = coffes_data.map(coffeData => {
      if (cart.length > 0) {
        cart.map(coffeCart => {
          if (coffeCart.id === coffeData.id) {
            coffeData.quantify = coffeCart.quantify
          }
        })
      } else {
        coffeData.quantify = 0
      }

      return coffeData
    })

    setCoffesData(setedCart)
  }, [cart])

  function changeCurrentCategoryItem(category: string): void {
    // See if category to be Add or Remove
    let ifRemoveCategory = false
    currentCategory.map(titleCategory => {
      if (titleCategory === category) {
        ifRemoveCategory = true
      }
    })

    // Finding category to remove
    if (ifRemoveCategory) {
      // Remove category
      const newCategorys = currentCategory.filter(categoryItem => categoryItem !== category)

      // Set new categorys
      return setCurrentCategory(newCategorys)
    }

    // Add
    return setCurrentCategory([...currentCategory, category])
  }

  function filterCoffes(): ICoffe[] {
    const filtredCoffes: ICoffe[] = []

    coffesData.map(coffe => {
      let countCategorys = 0

      coffe.categorys.map(category => {
        currentCategory.map(searchCategory => {
          if (category === searchCategory) {
            countCategorys++
          }
        })
      })

      if (countCategorys === currentCategory.length) {
        filtredCoffes.push(coffe)
      }
    })

    return filtredCoffes
  }

  const fitredCoffes = filterCoffes()

  return (
    <S.Container>
      <S.BackgroundGradient>
        <Wrapper>
          <S.Flex>
            <S.Content>
              <S.Title>Encontre o caf?? perfeito para qualquer hora do dia</S.Title>
              <S.Subtitle>Com o Coffee Delivery voc?? recebe seu caf?? onde estiver, a qualquer hora</S.Subtitle>
              <S.Grid>
                <Itens
                  text='Compra simples e segura'
                  bgColor={theme.COLORS.YELLOW_DARK}
                >
                  <IoCartOutline />
                </Itens>
                <Itens
                  text='Embalagem mant??m o caf?? intacto'
                  bgColor={theme.COLORS.BASE_TEXT}
                >
                  <GiCardboardBoxClosed />
                </Itens>
                <Itens
                  text='Entrega r??pida e rastreada'
                  bgColor={theme.COLORS.YELLOW}
                >
                  <TfiTimer />
                </Itens>
                <Itens
                  text='O caf?? chega fresquinho at?? voc??'
                  bgColor={theme.COLORS.PURPLE}
                >
                  <CgCoffee />
                </Itens>
              </S.Grid>
            </S.Content>
            <S.CoffeImage>
              <img src={coffe_intro} alt="copo caf?? descartavel branco com faixa preta com o logo e tampa preta, fundo amarelo com gr??os de caf?? na direita e na esquerda" />
            </S.CoffeImage>
          </S.Flex>
        </Wrapper>
      </S.BackgroundGradient>
      <Wrapper>
        <S.CoffeList>
          <header>
            <h3>Nossos caf??s</h3>
            <section>
              {categorys.map((categoryItem, index) => (
                <Category
                  key={index}
                  text={categoryItem}
                  currentCategory={currentCategory}
                  changeCurrentCategoryItem={changeCurrentCategoryItem}
                />
              ))}
            </section>
          </header>
          <S.CoffeListContent>
            {currentCategory.length > 0 && fitredCoffes.length === 0 && (
              <S.CoffeListMessage>
                Nehum caf?? encontrado com as cateogrias: {currentCategory.map(category => `"${category}" `)}
              </S.CoffeListMessage>
            )}
            <S.CoffesGrid>
              {currentCategory.length === 0
                ? coffesData.map((coffe, index) => (
                  <Coffe
                    key={index}
                    coffe={coffe}
                  />
                ))
                : fitredCoffes.map((coffe, index) => (
                  <Coffe
                    key={index}
                    coffe={coffe}
                  />
                ))}
            </S.CoffesGrid>
          </S.CoffeListContent>
        </S.CoffeList>
      </Wrapper>
    </S.Container>
  )
}

export default Home
