import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`

export const Logo = styled.img`
  max-width: 100px;
  width: 100%;
  transition: all .2s ease;
  background: transparent !important;

  &:hover {
    transition: all .2s ease;
    margin-top: -10px;
  }
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
  transition: all .2s ease;
  
  &:hover {
    transition: all .2s ease;
    background-color: ${({ theme }) => theme.COLORS.PURPLE_LIGHT_HOVER};
  }

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

interface ICart {
  num: number
}

export const Cart = styled(Link) <ICart>`
  padding: 6px 10px;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_LIGHT};
  border-radius: 5px;
  outline: none;
  border: none;
  text-decoration: none;
  transition: all .2s ease;
  position: relative;

  &::after {
    display: ${({ num }) => num > 0 ? 'block' : 'none'};
    content: '${({ num }) => num}';
    position: absolute;
    top: -5px;
    right: -5px;
    border-radius: 10px;
    width: 15px;
    height: 15px;
    background-color: ${({ theme }) => theme.COLORS.YELLOW_DARK};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
    font-weight: bold;
    text-align: center;
    font-size: 10px;
    line-height: 15px;
  }

  &:hover {
    transition: all .2s ease;
    background-color: ${({ theme }) => theme.COLORS.YELLOW_LIGHT_HOVER};
  }

  svg {
    text-align: center;
    font-size: 22px;
    margin-top: 3px;
    color: ${({ theme }) => theme.COLORS.YELLOW_DARK};
  }
`
