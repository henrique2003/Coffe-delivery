import styled from 'styled-components'

interface IContainerProps {
  maxWidth?: number
  flex?: number
  padding?: string
}

export const Input = styled.input<IContainerProps>`
  border: 1px solid ${({ theme }) => theme.COLORS.BASE_BUTTON};
  background-color: ${({ theme }) => theme.COLORS.BASE_INPUT};
  max-width: ${({ maxWidth }) => maxWidth ? `${maxWidth}px` : '100%'};
  flex: ${({ flex }) => flex ?? 1};
  width: 100%;
  color: ${({ theme }) => theme.COLORS.BASE_LABEL};
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
  padding: 12px 15px;
  padding: ${({ padding }) => padding ?? '12px 15px'};
  border-radius: 5px;
  outline: none;
  
  @media(max-width: 500px) {
    max-width: 100%;
    flex: 1;
  }
`
