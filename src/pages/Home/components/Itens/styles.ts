import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 15px;

  p {
    font-size: 16px;
    font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
    color: ${({ theme }) => theme.COLORS.BASE_TEXT};
    line-height: 18px;
  }
`

interface IBoxIconProps {
  bgColor: string
}

export const BoxIcon = styled.div<IBoxIconProps>`
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

  svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 21px;
    text-align: center;
  }
`
