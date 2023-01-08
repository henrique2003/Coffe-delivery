import { useState } from 'react'
import { AiOutlineMinus } from 'react-icons/ai'
import { FiPlus } from 'react-icons/fi'
import { IoCart } from 'react-icons/io5'

import * as S from './styles'

interface IProps {
  img: {
    src: string
    alt: string
  }
  title: string
  subtitle: string
  categorys: string[]
}

const Coffe: React.FC<IProps> = ({
  img,
  title,
  subtitle,
  categorys
}) => {
  let [count, setCount] = useState<number>(0)

  function lessCount(): void {
    const minus = count - 1

    if (minus < 0) {
      return
    }

    setCount(count = minus)
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
      <S.SubTitle>{subtitle}</S.SubTitle>
      <S.Footer>
        <S.Price>
          R$<span>9,90</span>
        </S.Price>
        <S.Actions>
          <S.Counter>
            <section>
              <button type='button' onClick={() => lessCount()}>
                <AiOutlineMinus />
              </button>
              <p>{count}</p>
              <button type='button' onClick={() => setCount(count += 1)}>
                <FiPlus />
              </button>
            </section>
          </S.Counter>
          <S.CartButton type='button'>
            <IoCart />
          </S.CartButton>
        </S.Actions>
      </S.Footer>
    </S.Container>
  )
}

export default Coffe
