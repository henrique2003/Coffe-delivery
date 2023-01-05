import { IoCart } from 'react-icons/io5'
import { MdLocationOn } from 'react-icons/md'

import logo from '../../assets/Logo.png'
import { Wrapper } from '../../theme/components'
import * as S from './styles'

const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <S.Container>
        <S.Logo src={logo} alt='copo de cafe roxo com um foguete branco dentro e do lado escrito coffe delivery' />
        <S.Actions>
          <S.Location>
            <MdLocationOn />
            <p>Porto alegre, <span>rs</span></p>
          </S.Location>
          <S.Cart>
            <IoCart />
          </S.Cart>
        </S.Actions>
      </S.Container>
    </Wrapper>
  )
}

export default Navbar
