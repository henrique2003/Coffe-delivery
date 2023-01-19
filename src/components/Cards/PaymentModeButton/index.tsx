import * as S from './styles'

interface IProps {
  active?: boolean
  text: string
  children: JSX.Element
  handlePaymentMode: (paymentMode: string) => void
}

const PaymentModeButton: React.FC<IProps> = ({ active, text, children, handlePaymentMode }) => {
  return (
    <S.Container active={active} type='button' onClick={() => handlePaymentMode(text)}>
      {children}
      <p>{text}</p>
    </S.Container>
  )
}

export default PaymentModeButton
