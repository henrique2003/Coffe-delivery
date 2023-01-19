import styled, { css } from 'styled-components'

export const Container = styled.form`
  display: flex;
  gap: 30px;
  margin-top: 30px;
  margin-bottom: 50px;

  h2 {
    margin: 0;
    font-size: 18px;
    font-family: ${({ theme }) => theme.FONTS_FAMILY.BALLO};
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.BASE_TITLE};
  }

  @media(max-width: 1250px) {
    flex-direction: column;
  }
`

export const InfoDataSection = styled.div`
  flex: 5;

  section {
    margin-top: 10px;
    background-color: ${({ theme }) => theme.COLORS.BASE_CARD};
    border-radius: 3px;
    padding: 30px;

    &:nth-child(3) {
      svg {
        color: ${({ theme }) => theme.COLORS.PURPLE};
      }
    }
  }

  @media(max-width: 1250px) {
    flex: 1;
  }
`

export const Description = styled.div`
  display: flex;
  gap: 10px;

  svg {
    font-size: 28px;
    color: ${({ theme }) => theme.COLORS.YELLOW_DARK};
    margin-top: -3px;
    min-width: 25px;
  }

  h4 {
    margin: 0;
    font-size: 16px;
    font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
    color: ${({ theme }) => theme.COLORS.BASE_SUBTITLE};
  }

  p {
    margin: 0;
    margin-top: 5px;
    font-size: 14px;
    font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
    color: ${({ theme }) => theme.COLORS.BASE_TEXT};
  }
`

export const Form = styled.form``

interface IGroupInputProps {
  marginTop?: number
  flex?: number
}

export const GroupInput = styled.div<IGroupInputProps>`
  margin-top: ${(props) => props.marginTop ?? 0}px;
  display: flex;
  gap: 13px;
  flex: ${({ flex }) => flex ?? 1};

  i {
    color: ${({ theme }) => theme.COLORS.BASE_LABEL};
    font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
    font-size: 12px;
    margin-top: 15px;
    margin-left: -75px;
  }

  @media(max-width: 500px) {
    flex-direction: column;

    div {
      flex-direction: row;

      input:nth-child(1) {
        flex: 3;
      }
    }
  }
`

export const PaymentMode = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;

  @media(max-width: 600px) {
    flex-direction: column;
    gap: 15px;
  }
`

export const TotalCoffesSection = styled.div`
  flex: 3;

  h2 {
    margin-bottom: 10px;
  }
  
  section {
    padding: 30px 40px;
    background-color: ${({ theme }) => theme.COLORS.BASE_CARD};
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
  }

  @media(max-width: 1250px) {
    flex: 1;
  }

  @media(max-width: 500px) {
    section {
      padding: 25px 30px;
    }
  }
`

interface ICartListProps {
  quantify: number
}

export const CartList = styled.div<ICartListProps>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${({ quantify }) => quantify > 2 && css`
    max-height: 250px;
    height: 100%;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      display: none;
    }
  `}
`

export const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 17px;

  &:nth-child(4) {
    h3 {
      color: ${({ theme }) => theme.COLORS.BASE_SUBTITLE};
      font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
      font-weight: bold;
      font-size: 20px;
    }

    p {
      color: ${({ theme }) => theme.COLORS.BASE_SUBTITLE};
      font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
      font-weight: bold;
      font-size: 20px;
    }
  }

  h3 {
    color: ${({ theme }) => theme.COLORS.BASE_TEXT};
    font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
    font-size: 14px;
    font-weight: normal;
    margin: 0;
  }

  p {
    color: ${({ theme }) => theme.COLORS.BASE_TEXT};
    font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
    font-size: 14px;
    font-weight: normal;
    margin: 0;
  }
`

export const Submit = styled.button`
  margin: 0;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.YELLOW};
  font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
  padding: 13px 0;
  margin-top: 25px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all .2s ease;

  &:hover {
    transition: all .2s ease;
    filter: brightness(0.97);
  }
`
