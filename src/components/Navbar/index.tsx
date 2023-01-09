import { IoCart } from 'react-icons/io5'
import { MdLocationOn } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import logo from '../../assets/Logo.png'
import { Wrapper } from '../../theme/components'
import * as S from './styles'

const Navbar: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <S.Container>
        <S.Logo
          onClick={() => navigate('/')}
          src={logo} alt='copo de café roxo com um foguete branco dentro e do lado escrito coffe delivery'
        />
        <S.Actions>
          <S.Location>
            <MdLocationOn />
            <p>Porto alegre, <span>rs</span></p>
          </S.Location>
          <S.Cart to="/checkout" num={0}>
            <IoCart />
          </S.Cart>
        </S.Actions>
      </S.Container>
    </Wrapper>
  )
}

export default Navbar
