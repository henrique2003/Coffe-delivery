import { VscLocation } from 'react-icons/vsc'

import { Input, Wrapper } from '../../theme/components'
import * as S from './styles'

const Checkout: React.FC = () => {
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
            <S.GroupInput>
              <Input
                maxWidth={200}
                placeholder="CPF"
                name='cpf'
                id='cpf'
                type="text"
              />
            </S.GroupInput>
          </section>
        </S.InfoDataSection>
        <S.TotalCoffesSection>
          <h2>Cafés selecionados</h2>
          <section>
          </section>
        </S.TotalCoffesSection>
      </S.Container>
    </Wrapper>
  )
}

export default Checkout
