import { useEffect, useState, useContext } from 'react'
import { AiOutlineMinus } from 'react-icons/ai'
import { FiPlus, FiTrash2 } from 'react-icons/fi'

import * as S from './styles'
import { ICoffe } from '../../../context/cart/types'
import { CartContext } from '../../../context/cart'

interface IProps {
  coffe: ICoffe
}

const CartItem: React.FC<IProps> = ({ coffe }) => {
  const {
    id,
    img,
    title,
    quantify
  } = coffe

  let [count, setCount] = useState<number>(0)

  const { removeItem, changeCoffeQuantify } = useContext(CartContext)

  useEffect(() => {
    setCount(quantify)
  }, [])

  function handleLessCount(): void {
    const minus = count - 1

    if (minus < 0) {
      return
    }

    changeCoffeQuantify(id, minus)
    setCount(count = minus)
  }

  function handlePlusCount(id: number): void {
    const plus = count += 1

    setCount(plus)
    changeCoffeQuantify(id, plus)
  }

  return (
    <S.Container>
      <S.Infos>
        <img src={img.src} alt={img.alt} />
        <div>
          <S.Title>{title}</S.Title>
          <S.Actions>
            <S.Counter>
              <article>
                <button type='button' onClick={() => handleLessCount()}>
                  <AiOutlineMinus />
                </button>
                <p>{count}</p>
                <button type='button' onClick={() => handlePlusCount(id)}>
                  <FiPlus />
                </button>
              </article>
            </S.Counter>
            <S.CartButton type='button' onClick={() => removeItem(id)}>
              <FiTrash2 />
              <span>REMOVER</span>
            </S.CartButton>
          </S.Actions>
        </div>
      </S.Infos>
      <S.Price>R$ 9,90</S.Price>
    </S.Container>
  )
}

export default CartItem
