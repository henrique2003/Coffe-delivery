import styled from 'styled-components'

export const Container = styled.nav`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;

  @media(max-width: 1250px) {
    margin: 0 30px;
  }
`

export const Logo = styled.img`
  max-width: 100px;
  width: 100%;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Location = styled.div`
  background-color: ${({ theme }) => theme.COLORS.PURPLE_LIGHT};
  padding: 0;
  padding: 7px 12px;
  padding-left: 8px;
  border-radius: 5px;
  margin-right: 15px;
  display: flex;

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
    font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
    margin: 0;
    margin-top: 4px;

    span {
      text-transform: uppercase;
    }
  }

  svg {
    font-size: 25px;
    color: ${({ theme }) => theme.COLORS.PURPLE};
    margin-right: 3px;
  }
`

export const Cart = styled.button`
  padding: 6px 10px;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_LIGHT};
  border-radius: 5px;
  outline: none;
  border: none;

  svg {
    text-align: center;
    font-size: 22px;
    margin-top: 3px;
    color: ${({ theme }) => theme.COLORS.YELLOW_DARK};
  }
`
