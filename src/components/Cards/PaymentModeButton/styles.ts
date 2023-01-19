import styled from 'styled-components'

interface IPaymentButton {
  active?: boolean
}

export const Container = styled.button<IPaymentButton>`
  border: none;
  background-color: ${({ active, theme }) => active ? theme.COLORS.PURPLE_LIGHT_HOVER : theme.COLORS.BASE_BUTTON};
  border: 1px solid ${({ active, theme }) => active ? theme.COLORS.PURPLE : theme.COLORS.BASE_BUTTON};
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  border-radius: 5px;
  margin: 10px 0;
  padding: 8px 20px;
  cursor: pointer;
  transition: all .2s ease;
  outline: none;

  &:hover {
    transition: all .2s ease;
    background-color: ${({ theme }) => theme.COLORS.PURPLE_LIGHT_HOVER};
    border: 1px solid ${({ theme }) => theme.COLORS.PURPLE};
  }

  p {
    text-transform: uppercase;
    color: ${({ theme }) => theme.COLORS.BASE_TEXT};
    font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
    font-size: 13px;
    margin-top: 13px;
  }

  svg {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.PURPLE};
  }

  @media(max-width: 730px) {
    padding: 5px 10px;
    justify-content: center;

    svg {
      font-size: 26px;
    }

    p {
      max-width: 80px;
      text-align: left;
    }
  }

  @media(max-width: 600px) {
    padding: 3px 20px;
    justify-content: center;
    margin: 0;

    svg {
      font-size: 20px;
    }

    p {
      max-width: none;
      text-align: left;
    }
  }
`
