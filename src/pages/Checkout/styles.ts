import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;

  h2 {
    margin: 0;
    font-size: 18px;
    font-family: ${({ theme }) => theme.FONTS_FAMILY.BALLO};
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.BASE_TITLE};
  }
`

export const InfoDataSection = styled.div`
  flex: 2;

  section {
    margin-top: 10px;
    background-color: ${({ theme }) => theme.COLORS.BASE_CARD};
    border-radius: 3px;
    padding: 30px;
  }
`

export const Description = styled.div`
  display: flex;
  gap: 10px;

  svg {
    font-size: 28px;
    color: ${({ theme }) => theme.COLORS.YELLOW_DARK};
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

export const TotalCoffesSection = styled.div`
  flex: 1;

  section {
    background-color: ${({ theme }) => theme.COLORS.BASE_CARD};
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
  }
`

export const GroupInput = styled.div`
  margin-top: 40px;
`
