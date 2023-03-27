// packages
import { useState, useEffect, useContext } from 'react'

// styles
import * as S from './styles'

// theme components
import { Wrapper } from '../../theme/components'

// components
import { Introduction, Category } from './components'
import Coffe from '../../components/Cards/Coffe'

// mocks
import coffes_data from '../../mocks/coffes'
import categorys from '../../mocks/categorys'

// context api
import { CartContext } from '../../context/cart'
import { ICoffe } from '../../context/cart/types'

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
      <Introduction />
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
          <S.CoffeListContent>
            {currentCategory.length > 0 && fitredCoffes.length === 0 && (
              <S.CoffeListMessage>
                Nehum café encontrado com as cateogrias: {currentCategory.map(category => `"${category}" `)}
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
