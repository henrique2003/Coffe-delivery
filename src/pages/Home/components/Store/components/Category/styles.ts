import styled, { css } from 'styled-components'

interface IContainer {
  active: boolean
}

export const Container = styled.button<IContainer>`
  border: none;
  outline: none;
  padding: 5px 15px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.COLORS.YELLOW_DARK};
  color: ${({ theme }) => theme.COLORS.YELLOW_DARK};
  font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  background: transparent;
  height: 30px;
  transition: all .2s ease;
  white-space: nowrap;

  ${({ active }) => active && css`
    transition: all .2s ease;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: 1px solid ${({ theme }) => theme.COLORS.YELLOW_DARK};
    background: ${({ theme }) => theme.COLORS.YELLOW_DARK};
  `}
`
