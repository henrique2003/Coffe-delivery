import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BASE_CARD};
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  padding: 20px 30px;
  margin-top: 35px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all .3s ease;
  position: relative;
  top: 0;

  &:hover {
    transition: all .3s ease;
    top: -15px;
    -webkit-box-shadow: 0px 40px 6px -15px rgba(158,158,158,1);
    -moz-box-shadow: 0px 40px 6px -15px rgba(158,158,158,1);
    box-shadow: 0px 40px 6px -15px rgba(158,158,158,1);
  }

  img {
    width: 100%;
    max-width: 120px;
    margin: 0 auto;
    text-align: center;
    margin-top: -50px;
  }
`

export const CategorrysGrid = styled.div`
`

export const Category = styled.button`
  background-color: ${({ theme }) => theme.COLORS.YELLOW_LIGHT};
  font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
  border: none;
  border-radius: 20px;
  text-align: center;
  margin: 0 3px;
  margin-top: 10px;
  width: auto;
  cursor: initial;
  padding: 5px 15px;
  text-transform: uppercase;
  font-size: 12px;
  font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
  color: ${({ theme }) => theme.COLORS.YELLOW_DARK};
  font-weight: bold;
`

export const Title = styled.h4`
  margin-top: 20px;
  margin-bottom: 0;
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS_FAMILY.BALLO};
  color: ${({ theme }) => theme.COLORS.BASE_TITLE};
  font-size: 20px;
  font-weight: bold;
`

export const SubTitle = styled.p`
  margin-top: 10px;
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
  color: ${({ theme }) => theme.COLORS.BASE_LABEL};
  font-size: 14px;
  line-height: 20px;
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`

export const Price = styled.p`
  margin-top: 0;
  font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
  color: ${({ theme }) => theme.COLORS.BASE_SUBTITLE};
  font-size: 14px;

  span {
    font-size: 24px;
    font-weight: bolder;
    margin-left: 5px;
  }
`

export const Actions = styled.div`
  display: flex;
`

export const Counter = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BASE_BUTTON};
  border-radius: 5px;
  margin-right: 10px;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  height: 40px;

  section {
    display: flex;
    justify-content: space-between;

    button {
      background: transparent;
      outline: none;
      border: none;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        font-size: 15px;
        color: ${({ theme }) => theme.COLORS.PURPLE};
      }
    }

    p {
      font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
      color: ${({ theme }) => theme.COLORS.BASE_TITLE};
      font-size: 16px;
      line-height: 10px;
    }
  }
`

export const CartButton = styled.button`
  background-color: ${({ theme }) => theme.COLORS.PURPLE};
  border-radius: 5px;
  outline: none;
  border: none;
  transition: all .2s ease;
  height: 40px;
  width: 40px;
  cursor: pointer;

  &:hover {
    transition: all .2s ease;
    background-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
  }

  svg {
    text-align: center;
    font-size: 25px;
    margin-top: 3px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`
