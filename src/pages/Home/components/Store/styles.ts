import styled from 'styled-components'

export const CoffeList = styled.div`
  margin-top: 150px;

  header {
    display: flex;
    justify-content: space-between;
    
    h3 {
      font-size: 32px;
      font-family: ${({ theme }) => theme.FONTS_FAMILY.BALLO};
      color: ${({ theme }) => theme.COLORS.BASE_SUBTITLE};
      font-weight: bolder;
      margin-top: 0;
    }

    section {
      display: flex;
      gap: 10px;
      margin-top: 10px;
    }
  }

  @media(max-width: 800px) {
    margin-top: 80px;
    
    header {
      justify-content: center;
      flex-direction: column;
      margin-bottom: 35px;

      h3 {
        margin-bottom: 15px;
      }

      section {
        margin-top: 0;
      }
    }
  }

  @media(max-width: 600px) {
    margin-top: 50px;

    header {
      section {
        overflow-x: scroll;
        padding-bottom: 15px;
      }
    }
  }
`

export const CoffeListContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CoffeListMessage = styled.p`
  text-align: center;
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
  color: ${({ theme }) => theme.COLORS.BASE_LABEL};
  margin: 200px 0;
`

export const CoffesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin-bottom: 50px;

  h3 {
    text-align: center;
  }

  @media(max-width: 1250px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
