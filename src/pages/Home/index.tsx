import { useState } from 'react'
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

interface ICoffe {
  title: string
  description: string
  img: {
    src: string
    alt: string
  }
  categorys: string[]
}

const Home: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState<string[]>([])

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
    let allCoffes = [] as ICoffe[]

    // Lendo cada cafe
    coffes_data.map(coffe => {
      let countCategorys = 0

      // Lendo cada categoria de cada cafe
      coffe.categorys.map(coffeCategory => {
        // Lendo cada categoria a ser procurada
        currentCategory.map(category => {
          if (coffeCategory === category) {
            // Contando a quantidade de categorias do cafe
            countCategorys++
          }
        })
      })

      if (countCategorys === currentCategory.length) {
        allCoffes.push(coffe)
      }
    })

    allCoffes = allCoffes.filter((item, index) => allCoffes.indexOf(item) === index)

    return allCoffes
  }

  const fitredCoffes = filterCoffes()

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
                  <IoCartOutline />
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
              <img src={coffe_intro} alt="copo café descartavel branco com faixa preta com o logo e tampa preta, fundo amarelo com grãos de café na direita e na esquerda" />
            </S.CoffeImage>
          </S.Flex>
        </Wrapper>
      </S.BackgroundGradient>
      <Wrapper>
        <S.CoffeList>
          <header>
            <h3>Nossos cafés</h3>
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
          <S.CoffesGrid>
            {currentCategory.length === 0
              ? coffes_data.map((coffe, index) => (
                <Coffe
                  key={index}
                  title={coffe.title}
                  img={coffe.img}
                  categorys={coffe.categorys}
                  subtitle={coffe.description}
                />
              ))
              : fitredCoffes.map((coffe, index) => (
                <Coffe
                  key={index}
                  title={coffe.title}
                  img={coffe.img}
                  categorys={coffe.categorys}
                  subtitle={coffe.description}
                />
              ))}
          </S.CoffesGrid>
        </S.CoffeList>
      </Wrapper>
    </S.Container>
  )
}

export default Home
