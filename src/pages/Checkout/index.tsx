import { useState, useContext } from 'react'
import { VscLocation } from 'react-icons/vsc'
import { MdAttachMoney } from 'react-icons/md'
import { AiOutlineCreditCard } from 'react-icons/ai'
import { BsBank } from 'react-icons/bs'
import { FaMoneyBill } from 'react-icons/fa'

import { Input, Wrapper } from '../../theme/components'
import * as S from './styles'
import CartItem from '../../components/Cards/CartItem'
import { PaymentModeButton } from '../../components'
import { CartContext } from '../../context/cart/index'

const Checkout: React.FC = () => {
  const [paymentMode, setPaymentMode] = useState('')

  const { removeAllItens, cart } = useContext(CartContext)

  function onSubmit(): void {
    if (cart.length <= 0) return

    removeAllItens()
  }

  function handlePaymentMode(paymentMode: string): void {
    setPaymentMode(paymentMode)
  }

  function countTotalPrice(): number {
    let totalPrice = 0

    cart.map(item => {
      totalPrice += item.quantify * 9.90
    })

    return totalPrice
  }

  return (
    <Wrapper>
      <S.Container>
        <S.InfoDataSection>
          <h2>Complete seu pedido</h2>
          <section>
            <S.Description>
              <VscLocation />
              <div>
                <h4>Endereço de Entrega</h4>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </S.Description>
            <S.GroupInput marginTop={40}>
              <Input
                maxWidth={250}
                placeholder="CPF"
                name='cpf'
                id='cpf'
                type="text"
              />
            </S.GroupInput>
            <S.GroupInput marginTop={18}>
              <Input
                placeholder="Rua"
                name='street'
                id='street'
                type="text"
              />
            </S.GroupInput>
            <S.GroupInput marginTop={18}>
              <Input
                placeholder="Número"
                name='number'
                id='number'
                type="text"
                flex={1}
              />
              <S.GroupInput flex={2}>
                <Input
                  placeholder="Complemento"
                  name='Complemento'
                  id='complement'
                  type="text"
                  flex={1}
                  padding="12px 75px 12px 15px"
                />
                <i>Opicional</i>
              </S.GroupInput>
            </S.GroupInput>
            <S.GroupInput marginTop={18}>
              <Input
                placeholder="Bairro"
                name='Neighbourhood'
                id='street'
                type="text"
                flex={1}
              />
              <S.GroupInput flex={2}>
                <S.GroupInput>
                  <Input
                    placeholder="Cidade"
                    name='city'
                    id='city'
                    type="text"
                    flex={9}
                  />
                  <Input
                    placeholder="UF"
                    name='uf'
                    id='uf'
                    type="text"
                    flex={1}
                  />
                </S.GroupInput>
              </S.GroupInput>
            </S.GroupInput>
          </section>
          <section>
            <S.Description>
              <MdAttachMoney />
              <div>
                <h4>Pagamento</h4>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </S.Description>
            <S.PaymentMode>
              <PaymentModeButton
                active={paymentMode === 'Cartão de crédito'}
                text='Cartão de crédito'
                handlePaymentMode={handlePaymentMode}
              >
                <AiOutlineCreditCard />
              </PaymentModeButton>
              <PaymentModeButton
                active={paymentMode === 'Cartão de débito'}
                text='Cartão de débito'
                handlePaymentMode={handlePaymentMode}
              >
                <BsBank />
              </PaymentModeButton>
              <PaymentModeButton
                active={paymentMode === 'Dinheiro'}
                text='Dinheiro'
                handlePaymentMode={handlePaymentMode}
              >
                <FaMoneyBill />
              </PaymentModeButton>
            </S.PaymentMode>
          </section>
        </S.InfoDataSection>
        <S.TotalCoffesSection>
          <h2>Cafés selecionados</h2>
          <section>
            <S.CartList quantify={3}>
              {cart.map(coffe => <CartItem key={coffe.id} coffe={coffe} />)}
            </S.CartList>
            <S.SubTotal>
              <h3>Total itens</h3>
              <p>R$ {countTotalPrice().toFixed(2).replace('.', ',')}</p>
            </S.SubTotal>
            <S.SubTotal>
              <h3>Entrega</h3>
              <p>R$ 3,50</p>
            </S.SubTotal>
            <S.SubTotal>
              <h3>Total</h3>
              <p>R$ {cart.length > 0 ? (countTotalPrice() + 3.50).toFixed(2).replace('.', ',') : '0,00'}</p>
            </S.SubTotal>
            <S.Submit type='button' onClick={() => onSubmit()}>Confirmar pedido</S.Submit>
          </section>
        </S.TotalCoffesSection>
      </S.Container>
    </Wrapper>
  )
}

export default Checkout
