import * as S from './styles'

interface IProps {
  bgColor: string
  text: string
  children: JSX.Element
}

const Itens: React.FC<IProps> = ({ bgColor, children, text }) => {
  return (
    <S.Container bgColor={bgColor}>
      <div>
        {children}
      </div>
      <p>{text}</p>
    </S.Container>
  )
}

export default Itens
