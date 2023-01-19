import { useState, useContext, useEffect } from 'react'
import { AiOutlineMinus } from 'react-icons/ai'
import { FiPlus } from 'react-icons/fi'
import { IoCart } from 'react-icons/io5'

import { ICoffe } from '../../../context/cart/types'
import * as S from './styles'
import { CartContext } from '../../../context/cart/'

interface IProps {
  coffe: ICoffe
}

const Coffe: React.FC<IProps> = ({ coffe }) => {
  const {
    id,
    img,
    title,
    description,
    categorys,
    quantify
  } = coffe

  let [count, setCount] = useState<number>(0)

  useEffect(() => {
    setCount(quantify)
  }, [quantify])

  const { addItem, changeCoffeQuantify } = useContext(CartContext)

  function handleLessCount(): void {
    const minus = count - 1

    if (minus < 0) {
      return
    }

    changeCoffeQuantify(id, count -= 1)
    setCount(count = minus)
  }

  function handlePlusCount(id: number): void {
    setCount(count += 1)
    changeCoffeQuantify(id, count += 1)
  }

  function handleAddCart(coffe: ICoffe): void {
    const { categorys, description, id, img, title } = coffe

    if (count === 0) {
      return
    }

    addItem({
      categorys,
      description,
      id,
      img,
      quantify: count,
      title
    })
  }

  return (
    <S.Container>
      <img src={img.src} alt={img.alt} />
      <S.CategorrysGrid>
        {categorys.map((item, index) => (
          <S.Category key={index}>{item}</S.Category>
        ))}
      </S.CategorrysGrid>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{description}</S.SubTitle>
      <S.Footer>
        <S.Price>
          R$<span>9,90</span>
        </S.Price>
        <S.Actions>
          <S.Counter>
            <section>
              <button type='button' onClick={() => handleLessCount()}>
                <AiOutlineMinus />
              </button>
              <p>{count}</p>
              <button type='button' onClick={() => handlePlusCount(id)}>
                <FiPlus />
              </button>
            </section>
          </S.Counter>
          <S.CartButton type='button' onClick={() => handleAddCart(coffe)}>
            <IoCart />
          </S.CartButton>
        </S.Actions>
      </S.Footer>
    </S.Container>
  )
}

export default Coffe
