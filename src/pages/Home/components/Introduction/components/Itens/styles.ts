import styled from 'styled-components'

interface IContainerProps {
  bgColor: string
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  margin-top: 15px;

  p {
    font-size: 16px;
    font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
    color: ${({ theme }) => theme.COLORS.BASE_TEXT};
    line-height: 18px;
  }

  &:hover div {
    transition: all .2s ease;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border: 1px solid ${props => props.bgColor};
  }

  &:hover div svg {
    transition: all .2s ease;
    color: ${props => props.bgColor};
  }

  div {
    border-radius: 50px;
    width: 43px;
    max-width: 43px;
    min-width: 43px;
    height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.bgColor};
    margin-right: 15px;
    transition: all .2s ease;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};

    svg {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 21px;
      text-align: center;
    }
  }
`
