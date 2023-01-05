import * as S from './styles'

interface IProps {
  bgColor: string
  text: string
  children: JSX.Element
}

const Itens: React.FC<IProps> = ({ bgColor, children, text }) => {
  return (
    <S.Container>
      <S.BoxIcon bgColor={bgColor}>
        {children}
      </S.BoxIcon>
      <p>{text}</p>
    </S.Container>
  )
}

export default Itens
